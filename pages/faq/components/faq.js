export default `
#Is ECHO decentralized?
ECHO is guaranteed to be decentralized. Comments and reactions are saved on the Arweave blockchain.

#Is it free to embed to my website?
Yes. ECHO is free to use.

#Does ECHO support embeding into mobile pages?
Definitely!

#Can I delete my comments?
Yes and No.

You can delete your comment before it is saved to Arweave. 

If someone comments on your comment, you cannot delete it(to protect the discussion context).

#Will ECHO possibly delete comments?
We don't judge on comments.
But we use algorithm to detect spam comments and will no save them to Arweave.

#Will you delete accounts?
User logins with wallet, and we cannot delete user's wallet.
But if a wallet continuously post spam comments, our server node may refuse to save its data.

#Anyone can comment?
Currently only wallets with balance more than 0 can comment.

#Is there any service fee when tipping?
Tipping is completely free. But as you know, sending transaction will consume some gas fee.

#Supported chains?
For login, you can use any chain that MetaMask supported and Phantom(Solana).
For tipping, you can use eth/polygon. And more chains will be supported soon.

#How to set my screen name?
Screen name is synchronized from your address' reverse records.
Currently we support the following DID: .bit and ens.
You can set your wallet's reverse record on .bit or ens, and then update profile by clicking the dropdown menu: Refresh my profile.

#How to set my avatar?
Like screen name, it's synchronized from your did's records.
If you are using ens, it will cost gas fee to set or update avatar.

#How is spam filtered?
We have a built-in spam filter. It’s being improved as data grows. 
You can report comments to help us dealing with spams.

#How do I get help?
If you cannot find answers on our websites. Join our discord or feel free to mail us: we@0xecho.com

#Is ECHO opensource?
Yes. We will opensource our codebase.
`.split('#').map(one => {
  const [title, ...content] = one.split('\n')
  return {
    title,
    content: content.join('<br>').replace(/<br><br>/g, '<br>')
  }
})