# Iframe 


We use `iframe` to embed an ECHO widget.

## query parameters

| name  |  type | desc | required?  | default  |  
|---|---|---|---|---|
| target_uri  | string  | the URI that receives comments and reactions. | required  |   |   |
| modules | string | the modules you need, splitting by `,`. option ['comment', 'like', 'like-lite', 'dislike', 'dislike-lite', 'tip'] | required | | |
| has_v_padding | string(boolean) | whether show vertical padding  |  |false |   
| has_h_padding  | string(boolean)  | whether show horizonal padding  |  | false  |   
| show_comment_dislike | string(boolean) | whether show comment dislike button |  | true | 
| did | string | the did whose records contains screen name, avatar and address(for tipping) |  | |
| rpc_url | string | ECHO gateway url | | |

## embedding iframe into Mirror entry

You can get a permanent like after publishing or saving draft, and it's the `target_uri` widget requires.

Mirror supports embedding a iframe block. It simply requires to append `&display=iframe` to ECHO's query parameter.

If you want to set the block size, you can use `height` and `width`. For example, `height=1533&width=2300`.

For more details, please refer to [Editor](https://mirror.xyz/dashboard/guide/editor).