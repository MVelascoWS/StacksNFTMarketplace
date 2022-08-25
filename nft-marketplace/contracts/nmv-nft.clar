;; sip009-nft
;; A SIP009-compliant NFT with a mint function.
(impl-trait .sip009-trait.sip009-trait)

(define-non-fungible-token Nova-Miningverse-Genesis uint)
;; Storage
(define-map token-count principal uint)
(define-map market uint {price: uint, commission: principal})

;; Define Constants
(define-constant CONTRACT-OWNER tx-sender)
(define-constant ERR-SOLD-OUT (err u100))
(define-constant ERR-WRONG-COMMISSION (err u101))
(define-constant ERR-NOT-AUTHORIZED (err u102))
(define-constant ERR-NOT-FOUND (err u103))
(define-constant ERR-METADATA-FROZEN (err u104))
(define-constant ERR-MINT-ALREADY-SET (err u105))
(define-constant ERR-LISTING (err u106))
(define-constant NMV-LIMIT u107)

;; Withdraw wallets
(define-constant WALLET_1 'SP3V08RTP9VRJ5JEQJ0FP6N5M9BBMK04GZ7XAAE8V)

;; Define Variables
(define-data-var last-id uint u0)
(define-data-var metadata-frozen bool false)
(define-data-var base-uri (string-ascii 80) "ipfs://hash/{id}")
(define-constant contract-uri "ipfs://hash")
(define-map mint-address bool principal)

;; Token count for account
(define-read-only (get-balance (account principal))
  (default-to u0
    (map-get? token-count account)
  )
)

(define-private (trnsfr (id uint) (sender principal) (recipient principal))
  (match (nft-transfer? Nova-Miningverse-Genesis id sender recipient)
        success
          (let
            ((sender-balance (get-balance sender))
            (recipient-balance (get-balance recipient)))
              (map-set token-count
                    sender
                    (- sender-balance u1))
              (map-set token-count
                    recipient
                    (+ recipient-balance u1))
              (ok success)
            )
        error (err error)
  )
)
;; SIP009: Transfer token to a specified principal
(define-public (transfer (id uint) (sender principal) (recipient principal))
  (begin
    (asserts! (is-eq tx-sender sender) ERR-NOT-AUTHORIZED)
    (asserts! (is-none (map-get? market id)) ERR-LISTING)
    (trnsfr id sender recipient)
  )
)

;; SIP009: Get the owner of the specified token ID
(define-read-only (get-owner (id uint))
  (ok (nft-get-owner? Nova-Miningverse-Genesis id)))

;; SIP009: Get the last token ID
(define-read-only (get-last-token-id)
  (ok (var-get last-id)))

;; SIP009: Get the token URI.
(define-read-only (get-token-uri (id uint))
  (ok (some (var-get base-uri))))

(define-read-only (get-contract-uri)
  (ok contract-uri))

;; Mint new NFT
;; can only be called from the Mint
(define-public (mint (new-owner principal))
    (let ((next-id (+ u1 (var-get last-id))))
      (asserts! (called-from-mint) ERR-NOT-AUTHORIZED)
      (asserts! (< (var-get last-id) NMV-LIMIT) ERR-SOLD-OUT)
      (match (nft-mint? Nova-Miningverse-Genesis next-id new-owner)
        success
        (let
        ((current-balance (get-balance new-owner)))
          (begin
            (try! (stx-transfer? u23750000 tx-sender WALLET_1))
            (var-set last-id next-id)
            (map-set token-count new-owner (+ current-balance u1))
            (ok true)
          )
        )
        error (err (* error u10000)))))

;; Set base uri
(define-public (set-base-uri (new-base-uri (string-ascii 80)))
  (begin
    (asserts! (is-eq tx-sender CONTRACT-OWNER) ERR-NOT-AUTHORIZED)
    (asserts! (not (var-get metadata-frozen)) ERR-METADATA-FROZEN)
    (var-set base-uri new-base-uri)
    (ok true)
  )
)

;; Freeze metadata
(define-public (freeze-metadata)
  (begin
    (asserts! (is-eq tx-sender CONTRACT-OWNER) ERR-NOT-AUTHORIZED)
    (var-set metadata-frozen true)
    (ok true)
  )
)

;; Manage the Mint
(define-private (called-from-mint)
  (let ((the-mint
          (unwrap! (map-get? mint-address true)
                    false)))
    (is-eq contract-caller the-mint)
  )
)

;; can only be called once
(define-public (set-mint-address)
  (let ((the-mint (map-get? mint-address true)))
    (asserts! (and (is-none the-mint)
              (map-insert mint-address true tx-sender))
                ERR-MINT-ALREADY-SET)
    (ok tx-sender)
  )
)