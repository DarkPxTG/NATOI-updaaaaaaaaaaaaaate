'use client'

import React from 'react'

const NFTPage = () => {
    const tonkeeperWallet = "UQBEhJ5tKuV-eYHkrhD4NQcAYnUzsOp2OLAfxp57en0L5Tdz" // آدرس والت Tonkeeper خودت رو اینجا بذار
    const amountInTon = 0.1 // مقدار مالیات به TON
    const amountInNano = amountInTon * 1000000000 // تبدیل TON به نانو (nanotons)
    const paymentMessage = "NFT Tax Payment" // پیام تراکنش

    // لینک پرداخت Tonkeeper با مقدار نانو
    const tonkeeperPaymentUrl = `https://app.tonkeeper.com/transfer/${tonkeeperWallet}?amount=${amountInNano}&text=${encodeURIComponent(paymentMessage)}`

    return (
        <div className="nft-page text-center pt-6">
            
           
           
        </div>
    )
}

export default NFTPage
