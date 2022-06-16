export default `
#Is ECHO decentralized?
ECHO is guaranteed to be decentralized. Comments and reactions are saved on the Arweave blockchain.

#Is it free to embed to my website?
yes, ECHO is free to use.

#Does ECHO support embeding into mobile pages?
Definitely!

#Can I delete my comments?
Yes and No.

You can delete your comment before it is saved to Arweave. 

If someone comments on your comment,  you cannot delete it(to protect the discussion context).

Comments will finally be saved to Arweave permanently. We cannot stop people from commenting, but you can do filter in the future.

#Anyone can comment?
Currently only wallets with balance more than 0 can comment.

#If there is any service fee to tip?
Tipping is completely free. But sending transaction will consume some gas fee.

#Supported chains?
For login, you can use any chain that MetaMask supported and Phantom(SOL).
For tip, you can use eth/polygon. And more chains will be supported.

#How to set my screen name?
Screen name is synchronized from your address' reverse records.
Currently we support the following DID: .bit and ens.
You can set your reverse record on .bit or ens, and then update by clicking the dropdown menu: Refresh my profile.

#How to set my avatar?
Like screen name, it's synchronized from your did's records.
If you are using ens, it costs some gas fee to set or update avatar.

#How is spam filtered?
We are building a built-in spam filter. It’s being improved as data grows. 
You can report comments to help us handle spams.

#How do I get help?
If you cannot find answers on our websites. Join our discord or feel free to mail us: we@0xecho.com


#Is ECHO opensource?
Yes. We will opensource all our codebase.
`.split('#').map(one => {
  const [title, ...content] = one.split('\n')
  return {
    title,
    content: content.join('\n')
  }
})