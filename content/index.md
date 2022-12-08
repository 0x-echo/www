## Introduction

### What is ECHO

 
ECHO is the first decentralized social engagement protocol based on Arweave. Our goal is to provide the fundamental infrastructure of Web3 social by introducing the first comment widget that can be deployed on any Web3 website with permanent data storage, so that users can speak up for themselves in a decentralized, permissionless, and censorship-resistant environment. It is our conviction that every person deserves to be heard, and we strive to create the right tool to make that happen. “Long live our opinion”, as our slogan goes.

More importantly, as we are providing a multi-chain, multi-platform, and multi-disciplinary solution, ECHO will energize the social mobility in an aggregated manner to address the current social segregation issue in Web3. And our protocol-based data structure of social activities both on-chain and off-chain will be the cornerstone of the future Web3 social paradigm.

## Widget


We use `iframe` to embed ECHO widget. 

Our iframe domain is: `https://embed.0xecho.com.ipns.page/`

### Query parameters

| name  |  type | desc | required?  | default  |  
|---|---|---|---|---|
| target_uri  | string  | the URI that receives comments and reactions. | required  |   |   |
| modules | string | specify the modules you need, splitting by `,`. Avaiable modules: ['comment', 'like', 'like-lite', 'dislike', 'dislike-lite', 'tip'] | required | | |
| has_v_padding | boolean | whether to show vertical padding  |  |false |   
| has_h_padding  | boolean  | whether to show horizonal padding  |  | false  |   
| show_comment_dislike | boolean | whether to show comment dislike button |  | true | 
| receiver | string | .bit, .eth or wallet address for receiving tips |  | |
| rpc_url | string | ECHO gateway url  | | `https://node1.0xecho.com`. Use `https://sandbox.0xecho.com` for test purpose.|


## Integrations
### Mirror

You can get a permanent link after publishing or saving draft, and it's the `target_uri` ECHO widget requires.

Mirror supports embedding a iframe block. It simply requires to append `&display=iframe` to ECHO's query parameter.

If you want to set the block size, you can use `height` and `width`. For example, `height=1533&width=2300`.

For more details, please refer to [Editor](https://mirror.xyz/dashboard/guide/editor).

### Planet

Right click on your planet ->  Custom Code -> Body End.

Then enable the option: custom code before `</body>`.

Copy the following code and paste into the textarea.

  ``` html
  {% if current_item_type == "blog" %}
  <iframe 
    frameborder="0"
    style="display:block;width:calc(800px - env(safe-area-inset-left) - env(safe-area-inset-left));height:600px;margin: 0 auto;"
    src="https://embed.0xecho.com.ipns.page/?modules=comment,like,tip&target_uri=dweb/ipns/{{ planet_ipns }}/{{ article.id }}&receiver=0xecho.bit"></iframe>
  {% endif %}
  ```

Right click on your planet -> Develop -> Rebuild.

Done.

## Comment Protocol

### target uri schema

#### https:// 

`https://{{path}}`, for all web2 content.

#### dweb

##### ipfs

`dweb/ipfs/{{CID}}`

##### ipns

`dweb/ipns/{{path}}`

##### ar

`dweb/ar/{{tx id}}`

#### NFT

`nft/{{slip-0044 coin type}}/{{contract_address}}/{{token_id}}`

#### Contract

`contract/{{slip-0044 coin type}}/{{contract_address}}`

#### Address

`address/{{slip-0044 coin type}}/{{address}}`

#### Apps

##### Mirror

`dapp/mirror/{{ori_content_digest}}`

##### Voice

`dapp/voice/{{id}}`
