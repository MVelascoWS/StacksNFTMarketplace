;; sip010-token
;; A SIP010-compliant fungible token with aditional functions.

(impl-trait .sip010-trait.sip010-trait)

(define-constant CONTRACT_OWNER tx-sender)

(define-fungible-token Nova-Miningverse)

;; errors
;;
(define-constant ERR_UNAUTHORIZED u2000)
(define-constant ERR_TOKEN_NOT_ACTIVATED u2001)
(define-constant ERR_TOKEN_ALREADY_ACTIVATED u2002)

(define-private (send-token (recipient { to: principal, amount: uint, memo: (optional (buff 34)) }))
  (send-token-with-memo (get amount recipient) (get to recipient) (get memo recipient))
)

(define-private (send-token-with-memo (amount uint) (to principal) (memo (optional (buff 34))))
  (ok (try! (transfer amount tx-sender to memo)))
)

;; public functions
;;
;; transfer
(define-public (transfer (amount uint) (from principal) (to principal) (memo (optional (buff 34))))
  (begin
    (asserts! (is-eq from tx-sender) (err ERR_UNAUTHORIZED))
    (if (is-some memo)
      (print memo)
      none
    )
    ;; #[filter(amount, to)]
    (ft-transfer? Nova-Miningverse amount from to)
  )
)

(define-read-only (get-name)
	(ok "Nova Miningverse")
)

(define-read-only (get-symbol)
	(ok "NMV")
)

(define-read-only (get-decimals)
	(ok u6)
)

(define-read-only (get-balance (holder principal))
	(ok (ft-get-balance Nova-Miningverse holder))
)

(define-read-only (get-total-supply)
	(ok (ft-get-supply Nova-Miningverse))
)

(define-read-only (get-token-uri)
	(ok none)
)

;; mint new tokens, only accessible by a Code Deployer
(define-public (mint (amount uint) (recipient principal))
  ;; #[filter(amount, recipient)]
  (ok (try! (ft-mint? Nova-Miningverse amount recipient)))
)