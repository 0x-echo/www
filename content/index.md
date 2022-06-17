## Introduction

### What is ECHO

ECHO is a product to help collecting comments, reactions and receiving tips. The data willbe permanently stored on Arweave.

Websites owners and authors can easily embed ECHO widget into their pages.

## Widget


We use `iframe` to embed ECHO widget.

### Query parameters

| name  |  type | desc | required?  | default  |  
|---|---|---|---|---|
| target_uri  | string  | the URI that receives comments and reactions. | required  |   |   |
| modules | string | the modules you need, splitting by `,`. option ['comment', 'like', 'like-lite', 'dislike', 'dislike-lite', 'tip'] | required | | |
| has_v_padding | boolean | whether show vertical padding  |  |false |   
| has_h_padding  | boolean  | whether show horizonal padding  |  | false  |   
| show_comment_dislike | boolean | whether show comment dislike button |  | true | 
| did | string | the did whose records contains screen name, avatar and address(for receiving tips) |  | |
| rpc_url | string | ECHO gateway url | | |

### For Mirror entry

You can get a permanent link after publishing or saving draft, and it's the `target_uri` widget requires.

Mirror supports embedding a iframe block. It simply requires to append `&display=iframe` to ECHO's query parameter.

If you want to set the block size, you can use `height` and `width`. For example, `height=1533&width=2300`.

For more details, please refer to [Editor](https://mirror.xyz/dashboard/guide/editor).


## Comment Protocol

### schema

ECHO implementes a decentralized comment protocol to save data on Arweave. Anyone can follow the protocol to post comments.

[WIP]