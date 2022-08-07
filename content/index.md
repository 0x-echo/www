## Introduction

### What is ECHO

ECHO is a product to help collecting comments, reactions and receiving tips. The data will be permanently stored on Arweave.

Websites owners and authors can easily embed ECHO widget into their pages.

## Widget


We use `iframe` to embed ECHO widget.

### Query parameters

| name  |  type | desc | required?  | default  |  
|---|---|---|---|---|
| target_uri  | string  | the URI that receives comments and reactions. | required  |   |   |
| modules | string | specify the modules you need, splitting by `,`. Avaiable modules: ['comment', 'like', 'like-lite', 'dislike', 'dislike-lite', 'tip'] | required | | |
| has_v_padding | boolean | whether to show vertical padding  |  |false |   
| has_h_padding  | boolean  | whether to show horizonal padding  |  | false  |   
| show_comment_dislike | boolean | whether to show comment dislike button |  | true | 
| receiver | string | the did(.bit or .eth) whose records contains screen name, avatar and address(for receiving tips). |  | |
| rpc_url | string | ECHO gateway url  | | `https://node1.0xecho.com`. Use `https://sandbox.0xecho.com` for test purpose.|


## Integrations
### Mirror

You can get a permanent link after publishing or saving draft, and it's the `target_uri` ECHO widget requires.

Mirror supports embedding a iframe block. It simply requires to append `&display=iframe` to ECHO's query parameter.

If you want to set the block size, you can use `height` and `width`. For example, `height=1533&width=2300`.

For more details, please refer to [Editor](https://mirror.xyz/dashboard/guide/editor).


## Comment Protocol

### schema

ECHO implementes a decentralized protocol to save data on Arweave. Anyone can follow the protocol to post data and the data will be indexed by ECHO indexer.

[WIP]