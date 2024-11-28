      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${!this.isSupported}
        address=${(0,a.J)(n.wE.getPlainAddress(this.caipAddress))}
        profileName=${(0,a.J)(this.profileName)}
        networkSrc=${(0,a.J)(this.networkImage)}
        avatarSrc=${(0,a.J)(this.profileImage)}
        balance=${e?n.wE.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isSupported?n.W3.open():n.W3.open({view:"UnsupportedChain"})}}c([(0,s.MZ)({type:Boolean})],l.prototype,"disabled",void 0),c([(0,s.MZ)()],l.prototype,"balance",void 0),c([(0,s.MZ)()],l.prototype,"charsStart",void 0),c([(0,s.MZ)()],l.prototype,"charsEnd",void 0),c([(0,s.wk)()],l.prototype,"caipAddress",void 0),c([(0,s.wk)()],l.prototype,"balanceVal",void 0),c([(0,s.wk)()],l.prototype,"balanceSymbol",void 0),c([(0,s.wk)()],l.prototype,"profileName",void 0),c([(0,s.wk)()],l.prototype,"profileImage",void 0),c([(0,s.wk)()],l.prototype,"network",void 0),c([(0,s.wk)()],l.prototype,"networkImage",void 0),c([(0,s.wk)()],l.prototype,"isSupported",void 0);let u=class extends l{};u=c([(0,i.customElement)("w3m-account-button")],u);let h=class extends l{};h=c([(0,i.customElement)("appkit-account-button")],h);const d=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var f=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class p extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.caipAddress=n.WB.state.activeCaipAddress,this.isLoading=n.W3.state.loading}firstUpdated(){this.unsubscribe.push(n.WB.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),n.W3.subscribeKey("loading",(e=>this.isLoading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.caipAddress&&!this.isLoading?o.qy`
          <appkit-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${(0,a.J)(this.balance)}
            .charsStart=${(0,a.J)(this.charsStart)}
            .charsEnd=${(0,a.J)(this.charsEnd)}
          >
          </appkit-account-button>
        `:o.qy`
          <appkit-connect-button
            size=${(0,a.J)(this.size)}
            label=${(0,a.J)(this.label)}
            loadingLabel=${(0,a.J)(this.loadingLabel)}
          ></appkit-connect-button>
        `}}p.styles=d,f([(0,s.MZ)({type:Boolean})],p.prototype,"disabled",void 0),f([(0,s.MZ)()],p.prototype,"balance",void 0),f([(0,s.MZ)()],p.prototype,"size",void 0),f([(0,s.MZ)()],p.prototype,"label",void 0),f([(0,s.MZ)()],p.prototype,"loadingLabel",void 0),f([(0,s.MZ)()],p.prototype,"charsStart",void 0),f([(0,s.MZ)()],p.prototype,"charsEnd",void 0),f([(0,s.wk)()],p.prototype,"caipAddress",void 0),f([(0,s.wk)()],p.prototype,"isLoading",void 0);let g=class extends p{};g=f([(0,i.customElement)("w3m-button")],g);let m=class extends p{};m=f([(0,i.customElement)("appkit-button")],m);var w=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class y extends o.WF{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=n.W3.state.open,this.loading=n.W3.state.loading,this.unsubscribe.push(n.W3.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return o.qy`
      <wui-connect-button
        size=${(0,a.J)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?n.W3.close():this.loading||n.W3.open()}}w([(0,s.MZ)()],y.prototype,"size",void 0),w([(0,s.MZ)()],y.prototype,"label",void 0),w([(0,s.MZ)()],y.prototype,"loadingLabel",void 0),w([(0,s.wk)()],y.prototype,"open",void 0),w([(0,s.wk)()],y.prototype,"loading",void 0);let v=class extends y{};v=w([(0,i.customElement)("w3m-connect-button")],v);let b=class extends y{};b=w([(0,i.customElement)("appkit-connect-button")],b);const x=o.AH`
  :host {
    display: block;
    width: max-content;
  }
`;var A=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class k extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=n.WB.state.activeCaipNetwork,this.networkImage=n.$m.getNetworkImage(this.network),this.caipAddress=n.WB.state.activeCaipAddress,this.loading=n.W3.state.loading,this.isSupported=!0,this.unsubscribe.push(n.jQ.subscribeNetworkImages((()=>{this.networkImage=n.$m.getNetworkImage(this.network)})),n.WB.subscribeKey("activeCaipAddress",(e=>{this.caipAddress=e})),n.WB.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=n.$m.getNetworkImage(e),this.isSupported=!e?.chainNamespace||n.WB.checkIfSupportedNetwork(e.chainNamespace)})),n.W3.subscribeKey("loading",(e=>this.loading=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=!this.network||n.WB.checkIfSupportedNetwork(this.network.chainNamespace);return o.qy`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${!e}
        imageSrc=${(0,a.J)(this.networkImage)}
        @click=${this.onClick.bind(this)}
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?this.isSupported?this.network.name:"Switch Network":this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(n.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.W3.open({view:"Networks"}))}}k.styles=x,A([(0,s.MZ)({type:Boolean})],k.prototype,"disabled",void 0),A([(0,s.MZ)({type:String})],k.prototype,"label",void 0),A([(0,s.wk)()],k.prototype,"network",void 0),A([(0,s.wk)()],k.prototype,"networkImage",void 0),A([(0,s.wk)()],k.prototype,"caipAddress",void 0),A([(0,s.wk)()],k.prototype,"loading",void 0),A([(0,s.wk)()],k.prototype,"isSupported",void 0);let _=class extends k{};_=A([(0,i.customElement)("w3m-network-button")],_);let C=class extends k{};C=A([(0,i.customElement)("appkit-network-button")],C);const E=o.AH`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;var S=r(5606);const I=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}],M=S.env.NEXT_PUBLIC_SECURE_SITE_ORIGIN||"https://secure.walletconnect.org",T={Next:"next",Prev:"prev"},N={HeaderText:120,ModalHeight:150,ViewTransition:150};var P=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let O=class extends o.WF{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=n.IN.state.view,this.viewDirection="",this.unsubscribe.push(n.IN.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((([e])=>{const t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",t),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout((()=>{this.prevHeight=t,this.style.animation="unset"}),N.ModalHeight)})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return o.qy`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return o.qy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return o.qy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return o.qy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return o.qy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return o.qy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return o.qy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return o.qy`<w3m-connect-view></w3m-connect-view>`;case"Create":return o.qy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return o.qy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return o.qy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return o.qy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return o.qy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return o.qy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return o.qy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return o.qy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return o.qy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return o.qy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return o.qy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return o.qy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return o.qy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return o.qy`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return o.qy`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return o.qy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return o.qy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return o.qy`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return o.qy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return o.qy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return o.qy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return o.qy`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return o.qy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return o.qy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return o.qy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return o.qy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return o.qy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return o.qy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return o.qy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return o.qy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return o.qy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return o.qy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return o.qy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return o.qy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return o.qy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return o.qy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return o.qy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return o.qy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return o.qy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return o.qy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return o.qy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return o.qy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return o.qy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return o.qy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return o.qy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`}}onViewChange(e){n.Ib.hide();let t=T.Next;const{history:r}=n.IN.state;r.length<this.prevHistoryLength&&(t=T.Prev),this.prevHistoryLength=r.length,this.viewDirection=t,setTimeout((()=>{this.view=e}),N.ViewTransition)}getWrapper(){return this.shadowRoot?.querySelector("div")}};O.styles=E,P([(0,s.wk)()],O.prototype,"view",void 0),P([(0,s.wk)()],O.prototype,"viewDirection",void 0),O=P([(0,i.customElement)("w3m-router")],O);const R=o.AH`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var B=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const L={USD:"$",EUR:"€",GBP:"£"},U=[100,250,500,1e3];let j=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=n.WB.state.activeCaipAddress,this.loading=n.W3.state.loading,this.paymentCurrency=n.aG.state.paymentCurrency,this.paymentAmount=n.aG.state.paymentAmount,this.purchaseAmount=n.aG.state.purchaseAmount,this.quoteLoading=n.aG.state.quotesLoading,this.unsubscribe.push(n.WB.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),n.W3.subscribeKey("loading",(e=>{this.loading=e})),n.aG.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${U.map((e=>o.qy`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${L[this.paymentCurrency?.id||"USD"]} ${e}`}</wui-button
                >`))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?o.qy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:o.qy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||n.W3.open({view:"OnRampProviders"})}openModal(){n.W3.open({view:"Connect"})}async onPaymentAmountChange(e){n.aG.setPaymentAmount(Number(e.detail)),await n.aG.getQuote()}async selectPresetAmount(e){n.aG.setPaymentAmount(e),await n.aG.getQuote()}};j.styles=R,B([(0,s.MZ)({type:Boolean})],j.prototype,"disabled",void 0),B([(0,s.wk)()],j.prototype,"caipAddress",void 0),B([(0,s.wk)()],j.prototype,"loading",void 0),B([(0,s.wk)()],j.prototype,"paymentCurrency",void 0),B([(0,s.wk)()],j.prototype,"paymentAmount",void 0),B([(0,s.wk)()],j.prototype,"purchaseAmount",void 0),B([(0,s.wk)()],j.prototype,"quoteLoading",void 0),j=B([(0,i.customElement)("w3m-onramp-widget")],j);var D=r(4039),z=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let W=class extends o.WF{constructor(){super(),this.usubscribe=[],this.networkImages=n.jQ.state.networkImages,this.address=n.Uj.state.address,this.profileImage=n.Uj.state.profileImage,this.profileName=n.Uj.state.profileName,this.network=n.WB.state.activeCaipNetwork,this.preferredAccountType=n.Uj.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.switched=!1,this.text="",this.usubscribe.push(n.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):n.W3.close()})),n.Uj.subscribeKey("preferredAccountType",(e=>this.preferredAccountType=e)),n.WB.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[this.network?.assets?.imageId??""];return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="l"
        .padding=${["0","xl","m","xl"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,a.J)(this.profileImage)}
          size="2lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
              ${i.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","l","m","l"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${(0,a.J)(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${this.network?.name??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){const e=n.iT.getConnectedConnector(),t=n.aK.getAuthConnector();return n.WB.checkIfNamesSupported()&&t&&"ID_AUTH"===e&&!this.profileName?o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="id"
        iconSize="sm"
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="paragraph-500" color="fg-100">Choose account name </wui-text>
      </wui-list-item>
    `:null}authCardTemplate(){const e=n.iT.getConnectedConnector(),t=n.aK.getAuthConnector(),{origin:r}=location;return!t||"ID_AUTH"!==e||r.includes(n.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const e=n.WB.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,r=e?.find((({id:e})=>e===this.network?.id));return t||!r}onCopyAddress(){try{this.address&&(n.wE.copyToClopboard(this.address),n.Pt.showSuccess("Address copied"))}catch{n.Pt.showError("Failed to copy")}}togglePreferredAccountBtnTemplate(){const e=n.WB.checkIfSmartAccountEnabled(),t=n.iT.getConnectedConnector();return n.aK.getAuthConnector()&&"ID_AUTH"===t&&e?(this.switched||(this.text=this.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account"),o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>
      </wui-list-item>
    `):null}onChooseName(){n.IN.push("ChooseAccountName")}async changePreferredAccountType(){const e=n.WB.checkIfSmartAccountEnabled(),t=this.preferredAccountType!==D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&e?D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT:D.Vl.ACCOUNT_TYPES.EOA;n.aK.getAuthConnector()&&(this.loading=!0,await n.x4.setPreferredAccountType(t),this.text=t===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account",this.switched=!0,n.Rv.resetSend(),this.loading=!1,this.requestUpdate())}onNetworks(){this.isAllowedNetworkSwitch()&&n.IN.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await n.x4.disconnect(),n.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.W3.close()}catch{n.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.Pt.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){n.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),n.IN.push("UpgradeEmailWallet")}};z([(0,s.wk)()],W.prototype,"address",void 0),z([(0,s.wk)()],W.prototype,"profileImage",void 0),z([(0,s.wk)()],W.prototype,"profileName",void 0),z([(0,s.wk)()],W.prototype,"network",void 0),z([(0,s.wk)()],W.prototype,"preferredAccountType",void 0),z([(0,s.wk)()],W.prototype,"disconnecting",void 0),z([(0,s.wk)()],W.prototype,"loading",void 0),z([(0,s.wk)()],W.prototype,"switched",void 0),z([(0,s.wk)()],W.prototype,"text",void 0),W=z([(0,i.customElement)("w3m-account-settings-view")],W);var $=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let q=class extends o.WF{render(){const e=n.iT.getConnectedConnector(),t=n.aK.getAuthConnector();return o.qy`
      ${t&&"ID_AUTH"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return o.qy`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return o.qy`<w3m-account-default-widget></w3m-account-default-widget>`}};q=$([(0,i.customElement)("w3m-account-view")],q);var H=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let F=class extends o.WF{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=n.wE.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return o.qy`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?o.qy`<w3m-all-wallets-search
            query=${this.search}
            badge=${(0,a.J)(this.badge)}
          ></w3m-all-wallets-search>`:o.qy`<w3m-all-wallets-list badge=${(0,a.J)(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){"certified"!==this.badge?(this.badge="certified",n.Pt.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.wE.isMobile()?o.qy`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){n.IN.push("ConnectingWalletConnect")}};H([(0,s.wk)()],F.prototype,"search",void 0),H([(0,s.wk)()],F.prototype,"badge",void 0),F=H([(0,i.customElement)("w3m-all-wallets-view")],F);const K=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Z=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let V=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=n.aG.state.selectedProvider,this.uri=n.x4.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(n.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${this.selectedOnRampProvider?.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return o.qy`
      <wui-flex
        data-error=${(0,a.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,a.J)(this.selectedOnRampProvider?.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name)this.startTime=Date.now(),this.initializeCoinbaseTransactions()}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=n.Uj.state.address,t=n.Hd.state.projectId;if(!e)throw new Error("No address found");const r=await n.TP.fetchTransactions({account:e,onramp:"coinbase",projectId:t});r.data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),n.IN.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){n.Pt.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,n.wE.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){return this.selectedOnRampProvider?.url?o.qy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=n.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){if(!this.selectedOnRampProvider?.url)return n.Pt.showError("No link found"),void n.IN.goBack();try{n.wE.copyToClopboard(this.selectedOnRampProvider.url),n.Pt.showSuccess("Link copied")}catch{n.Pt.showError("Failed to copy")}}};V.styles=K,Z([(0,s.wk)()],V.prototype,"intervalId",void 0),Z([(0,s.wk)()],V.prototype,"selectedOnRampProvider",void 0),Z([(0,s.wk)()],V.prototype,"uri",void 0),Z([(0,s.wk)()],V.prototype,"ready",void 0),Z([(0,s.wk)()],V.prototype,"showRetry",void 0),Z([(0,s.wk)()],V.prototype,"buffering",void 0),Z([(0,s.wk)()],V.prototype,"error",void 0),Z([(0,s.wk)()],V.prototype,"startTime",void 0),Z([(0,s.MZ)({type:Boolean})],V.prototype,"isMobile",void 0),Z([(0,s.MZ)()],V.prototype,"onRetry",void 0),V=Z([(0,i.customElement)("w3m-buy-in-progress-view")],V);const Y=o.AH`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .guide {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var G=r(4290),J=r(3720),Q=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let X=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.connectors=n.aK.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=n.Hd.state.features,this.walletGuide="get-started",this.checked=!1,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),n.Hd.subscribeKey("features",(e=>this.features=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()));const e=this.shadowRoot?.querySelector(".connect");e?.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){const e=this.shadowRoot?.querySelector(".connect");requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener("scroll",this.handleConnectListScroll.bind(this))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r)&&"get-started"===this.walletGuide&&!this.checked,s={connect:!0,disabled:i},c=this.features?.socials,l=n.Hd.state.enableWallets,u=c&&c.length||this.authConnector,h=i?-1:void 0;return o.qy`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex flexDirection="column" class=${(0,J.H)(s)}>
          <wui-flex
            flexDirection="column"
            .padding=${u&&l&&"get-started"===this.walletGuide?["3xs","s","0","s"]:["3xs","s","s","s"]}
          >
            <w3m-email-login-widget
              walletGuide=${this.walletGuide}
              tabIdx=${(0,a.J)(h)}
            ></w3m-email-login-widget>
            <w3m-social-login-widget tabIdx=${(0,a.J)(h)}></w3m-social-login-widget>
            ${this.walletListTemplate(h)}
          </wui-flex>
        </wui-flex>
        ${this.guideTemplate(i)}
        <w3m-legal-footer></w3m-legal-footer>
      </wui-flex>
    `}walletListTemplate(e){const t=this.features?.socials,r=this.features?.emailShowWallets;return n.Hd.state.enableWallets?(n.wE.isTelegram()&&n.wE.isIos()&&n.x4.connectWalletConnect().catch((e=>({}))),"explore"===this.walletGuide?null:this.authConnector&&t?this.authConnector&&r?o.qy`
          <wui-flex flexDirection="column" gap="xs" .margin=${["xs","0","0","0"]}>
            <w3m-connector-list tabIdx=${(0,a.J)(e)}></w3m-connector-list>
            <wui-flex class="all-wallets">
              <w3m-all-wallets-widget tabIdx=${(0,a.J)(e)}></w3m-all-wallets-widget>
            </wui-flex>
          </wui-flex>
        `:o.qy`<wui-list-button
        tabIdx=${(0,a.J)(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
      ></wui-list-button>`:o.qy`<w3m-wallet-login-list tabIdx=${(0,a.J)(e)}></w3m-wallet-login-list>`):null}guideTemplate(e=!1){const t=this.features?.socials,r=n.Hd.state.enableWallets,i=t&&t.length,s={guide:!0,disabled:e},c=e?-1:void 0;return(this.authConnector||i)&&r?"explore"===this.walletGuide?o.qy`
        <wui-flex
          flexDirection="column"
          .padding=${["0","0","xl","0"]}
          class=${(0,J.H)(s)}
        >
          <w3m-wallet-guide walletGuide=${this.walletGuide}></w3m-wallet-guide>
        </wui-flex>
      `:o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xl","0","xl","0"]}
        class=${(0,J.H)(s)}
      >
        <w3m-wallet-guide
          tabIdx=${(0,a.J)(c)}
          walletGuide=${this.walletGuide}
        ></w3m-wallet-guide>
      </wui-flex>
    `:null}legalCheckboxTemplate(){return"explore"===this.walletGuide?null:o.qy`<w3m-legal-checkbox
      @checkboxChange=${this.onCheckboxChange.bind(this)}
      data-testid="w3m-legal-checkbox"
    ></w3m-legal-checkbox>`}handleConnectListScroll(){const e=this.shadowRoot?.querySelector(".connect");!e||e.scrollHeight<=470||(e.style.setProperty("--connect-scroll--top-opacity",i.MathUtil.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty("--connect-scroll--bottom-opacity",i.MathUtil.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}onContinueWalletClick(){n.IN.push("ConnectWallets")}onCheckboxChange(e){this.checked=Boolean(e.detail)}};X.styles=Y,Q([(0,G.w)()],X.prototype,"connectors",void 0),Q([(0,G.w)()],X.prototype,"authConnector",void 0),Q([(0,G.w)()],X.prototype,"features",void 0),Q([(0,s.MZ)()],X.prototype,"walletGuide",void 0),Q([(0,G.w)()],X.prototype,"checked",void 0),X=Q([(0,i.customElement)("w3m-connect-view")],X);var ee=r(3677);const te=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var re=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};class ie extends o.WF{constructor(){super(),this.wallet=n.IN.state.data?.wallet,this.connector=n.IN.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=n.$m.getWalletImage(this.wallet)??n.$m.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=n.x4.state.wcUri,this.error=n.x4.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(n.x4.subscribeKey("wcUri",(e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())})),n.x4.subscribeKey("wcError",(e=>this.error=e)),n.x4.subscribeKey("buffering",(e=>this.buffering=e))),n.wE.isTelegram()&&n.wE.isIos()&&n.x4.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),o.qy`
      <wui-flex
        data-error=${(0,a.J)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,a.J)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?o.qy`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?o.qy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(n.x4.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){const e=n.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.wE.copyToClopboard(this.uri),n.Pt.showSuccess("Link copied"))}catch{n.Pt.showError("Failed to copy")}}}ie.styles=te,re([(0,s.wk)()],ie.prototype,"isRetrying",void 0),re([(0,s.wk)()],ie.prototype,"uri",void 0),re([(0,s.wk)()],ie.prototype,"error",void 0),re([(0,s.wk)()],ie.prototype,"ready",void 0),re([(0,s.wk)()],ie.prototype,"showRetry",void 0),re([(0,s.wk)()],ie.prototype,"secondaryBtnLabel",void 0),re([(0,s.wk)()],ie.prototype,"secondaryLabel",void 0),re([(0,s.wk)()],ie.prototype,"buffering",void 0),re([(0,s.MZ)({type:Boolean})],ie.prototype,"isMobile",void 0),re([(0,s.MZ)()],ie.prototype,"onRetry",void 0);var ne=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let oe=class extends ie{constructor(){if(super(),this.externalViewUnsubscribe=[],!this.connector)throw new Error("w3m-connecting-view: No connector provided");n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(n.WB.subscribeKey("activeCaipAddress",(e=>{e&&n.W3.close()})))}disconnectedCallback(){this.externalViewUnsubscribe.forEach((e=>e()))}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.id===ee.oU.COINBASE_SDK_CONNECTOR_ID&&this.error||(await n.x4.connectExternal(this.connector,this.connector.chain),n.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}})))}catch(e){n.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};oe=ne([(0,i.customElement)("w3m-connecting-external-view")],oe);const se=o.AH`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var ae=r(1079),ce=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let le=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.activeConnector=n.WB.state.activeConnector,this.unsubscribe.push(n.WB.subscribeKey("activeConnector",(e=>this.activeConnector=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["m","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${(0,a.J)(n.$m.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["0","s","0","s"]}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="xs"
          .padding=${["xs","0","xs","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e=>e.name?o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getChainImage(e.chain))}
              name=${ae.oU.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
            ></wui-list-wallet>
          `:null))}onConnector(e){const t=this.activeConnector?.connectors?.find((t=>t.chain===e.chain));t?"walletConnect"===t.id?n.wE.isMobile()?n.IN.push("AllWallets"):n.IN.push("ConnectingWalletConnect"):n.IN.push("ConnectingExternal",{connector:t}):n.Pt.showError("Failed to find connector")}};le.styles=se,ce([(0,s.wk)()],le.prototype,"activeConnector",void 0),le=ce([(0,i.customElement)("w3m-connecting-multi-chain-view")],le);var ue=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let he=class extends o.WF{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=n.IN.state.data?.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(n.Hd.state.siwx),this.determinePlatforms(),this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),n.oU.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?o.qy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `:o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){if("browser"!==this.platform)try{const{wcPairingExpiry:t,status:r}=n.x4.state;(e||n.wE.isPairingExpired(t)||"connecting"===r)&&(await n.x4.connectWalletConnect(),this.finalizeConnection(),this.isSiwxEnabled||n.W3.close())}catch(e){n.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),n.x4.setWcError(!0),n.wE.isAllowedRetry(this.lastRetry)?(n.Pt.showError(e.message??"Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0)):n.Pt.showError(e.message??"Connection error")}}finalizeConnection(){const{wcLinking:e,recentWallet:t}=n.x4.state;e&&n.iT.setWalletConnectDeepLink(e),t&&n.iT.setAppKitRecent(t),n.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:this.wallet?.name||"Unknown"}})}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:i,rdns:o,name:s}=this.wallet,a=i?.map((({injected_id:e})=>e)).filter(Boolean),c=[...o?[o]:a??[],s],l=!n.Hd.state.isUniversalProvider&&c.length,u=e,h=r,d=n.x4.checkInstalled(c),f=l&&d,p=t&&!n.wE.isMobile();f&&this.platforms.push("browser"),u&&this.platforms.push(n.wE.isMobile()?"mobile":"qrcode"),h&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!f&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return o.qy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return o.qy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return o.qy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return o.qy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return o.qy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return o.qy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?o.qy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){const t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ue([(0,s.wk)()],he.prototype,"platform",void 0),ue([(0,s.wk)()],he.prototype,"platforms",void 0),ue([(0,s.wk)()],he.prototype,"isSiwxEnabled",void 0),he=ue([(0,i.customElement)("w3m-connecting-wc-view")],he);const de=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var fe=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let pe=class extends o.WF{constructor(){super(...arguments),this.loading=!1}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{n.wE.openHref(ae.TC.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          icon="id"
          size="xl"
          iconSize="xxl"
          iconColor="fg-200"
          backgroundColor="fg-200"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){n.IN.push("RegisterAccountName"),n.En.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};pe.styles=de,fe([(0,s.wk)()],pe.prototype,"loading",void 0),pe=fe([(0,i.customElement)("w3m-choose-account-name-view")],pe);var ge=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let me=class extends o.WF{constructor(){super(...arguments),this.wallet=n.IN.state.data?.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return o.qy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?o.qy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?o.qy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?o.qy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?o.qy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&n.wE.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&n.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.wE.openHref(this.wallet.homepage,"_blank")}};me=ge([(0,i.customElement)("w3m-downloads-view")],me);var we=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ye=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{n.wE.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=n.Np.state,{customWallets:r}=n.Hd.state;return[...t,...r??[],...e].slice(0,4).map((e=>o.qy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,a.J)(n.$m.getWalletImage(e))}
          @click=${()=>{n.wE.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};ye=we([(0,i.customElement)("w3m-get-wallet-view")],ye);const ve=o.AH`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  .suggestion:hover {
    background-color: var(--wui-color-gray-glass-005);
    cursor: pointer;
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
  }

  wui-icon-link {
    position: absolute;
    right: 20px;
    transform: translateY(11px);
  }
`;var be=r(8342),xe=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ae=class extends o.WF{constructor(){super(),this.formRef=(0,be._)(),this.usubscribe=[],this.name="",this.error="",this.loading=n.f.state.loading,this.suggestions=n.f.state.suggestions,this.registered=!1,this.profileName=n.Uj.state.profileName,this.onDebouncedNameInputChange=n.wE.debounce((e=>{n.f.validateName(e)?(this.error="",this.name=e,n.f.getSuggestions(e),n.f.isNameRegistered(e).then((e=>{this.registered=e}))):e.length<4?this.error="Name must be at least 4 characters long":this.error="Can only contain letters, numbers and - characters"})),this.usubscribe.push(n.f.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),n.Uj.subscribeKey("profileName",(e=>{this.profileName=e,e&&(this.error="You already own a name")})))}firstUpdated(){this.formRef.value?.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),this.formRef.value?.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="m"
        .padding=${["0","s","m","s"]}
      >
        <form ${(0,be.K)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){return this.isAllowedToSubmit()?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitName.bind(this)}
          >
          </wui-icon-link>
        `:null}onSelectSuggestion(e){return()=>{this.name=e,this.registered=!1,this.requestUpdate()}}onNameInputChange(e){this.onDebouncedNameInputChange(e.detail)}nameSuggestionTagTemplate(){return this.loading?o.qy`<wui-loading-spinner size="lg" color="fg-100"></wui-loading-spinner>`:this.registered?o.qy`<wui-tag variant="shade" size="lg">Registered</wui-tag>`:o.qy`<wui-tag variant="success" size="lg">Available</wui-tag>`}templateSuggestions(){if(!this.name||this.name.length<4||this.error)return null;const e=this.registered?this.suggestions.filter((e=>e.name!==this.name)):[];return o.qy`<wui-flex flexDirection="column" gap="xxs" alignItems="center">
      <wui-flex
        data-testid="account-name-suggestion"
        .padding=${["m","m","m","m"]}
        justifyContent="space-between"
        class="suggestion"
        @click=${this.onSubmitName.bind(this)}
      >
        <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
          ${this.name}</wui-text
        >${this.nameSuggestionTagTemplate()}
      </wui-flex>
      ${e.map((e=>this.availableNameTemplate(e.name)))}
    </wui-flex>`}availableNameTemplate(e){return o.qy` <wui-flex
      data-testid="account-name-suggestion"
      .padding=${["m","m","m","m"]}
      justifyContent="space-between"
      class="suggestion"
      @click=${this.onSelectSuggestion(e)}
    >
      <wui-text color="fg-100" variant="paragraph-400" class="suggested-name">
        ${e}
      </wui-text>
      <wui-tag variant="success" size="lg">Available</wui-tag>
    </wui-flex>`}isAllowedToSubmit(){return!this.loading&&!this.registered&&!this.error&&!this.profileName&&n.f.validateName(this.name)}async onSubmitName(){try{if(!this.isAllowedToSubmit())return;const e=`${this.name}${ae.oU.WC_NAME_SUFFIX}`;n.En.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await n.f.registerName(e),n.En.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(e){n.Pt.showError(e.message),n.En.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:`${this.name}${ae.oU.WC_NAME_SUFFIX}`,error:e?.message||"Unknown error"}})}}onEnterKey(e){"Enter"===e.key&&this.isAllowedToSubmit()&&this.onSubmitName()}};Ae.styles=ve,xe([(0,s.MZ)()],Ae.prototype,"errorMessage",void 0),xe([(0,s.wk)()],Ae.prototype,"name",void 0),xe([(0,s.wk)()],Ae.prototype,"error",void 0),xe([(0,s.wk)()],Ae.prototype,"loading",void 0),xe([(0,s.wk)()],Ae.prototype,"suggestions",void 0),xe([(0,s.wk)()],Ae.prototype,"registered",void 0),xe([(0,s.wk)()],Ae.prototype,"profileName",void 0),Ae=xe([(0,i.customElement)("w3m-register-account-name-view")],Ae);const ke=o.AH`
  .continue-button-container {
    width: 100%;
  }
`;var _e=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ce=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{n.wE.openHref(ae.TC.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-icon-box
          size="xl"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex
      .padding=${["0","2l","0","2l"]}
      gap="s"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){n.IN.replace("Account")}};Ce.styles=ke,Ce=_e([(0,i.customElement)("w3m-register-account-name-success-view")],Ce);const Ee=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Se=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ie=class extends o.WF{constructor(){super(),this.network=n.IN.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),t=this.getSubLabel();return o.qy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,a.J)(n.$m.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:o.qy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=n.iT.getConnectedConnector();return n.aK.getAuthConnector()&&"AUTH"===e?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){const e=n.iT.getConnectedConnector();return n.aK.getAuthConnector()&&"AUTH"===e?`Switching to ${this.network?.name??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;const e=this.shadowRoot?.querySelector("wui-button");e?.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&await n.WB.switchActiveNetwork(this.network)}catch(e){this.error=!0}}};Ie.styles=Ee,Se([(0,s.wk)()],Ie.prototype,"showRetry",void 0),Se([(0,s.wk)()],Ie.prototype,"error",void 0),Ie=Se([(0,i.customElement)("w3m-network-switch-view")],Ie);const Me=o.AH`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Te=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ne=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.network=n.WB.state.activeCaipNetwork,this.requestedCaipNetworks=n.WB.getAllRequestedCaipNetworks(),this.search="",this.onDebouncedSearch=n.wE.debounce((e=>{this.search=e}),100),this.unsubscribe.push(n.WB.subscribeKey("activeCaipNetwork",(e=>this.network=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","s","s","s"]}
        flexDirection="column"
        gap="xs"
      >
        ${this.networksTemplate()}
      </wui-flex>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" .padding=${["0","s","s","s"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onNetworkHelp(){n.En.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),n.IN.push("WhatIsANetwork")}networksTemplate(){const e=n.WB.getAllRequestedCaipNetworks(),t=n.WB.getAllApprovedCaipNetworkIds(),r=n.wE.sortRequestedNetworks(t,e);return this.search?this.filteredNetworks=r?.filter((e=>e?.name?.toLowerCase().includes(this.search.toLowerCase()))):this.filteredNetworks=r,this.filteredNetworks?.map((e=>o.qy`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${(0,a.J)(n.$m.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${this.getNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `))}getNetworkDisabled(e){const t=e.chainNamespace,r=n.Uj.getCaipAddress(t),i=n.WB.getAllApprovedCaipNetworkIds(),o=!1!==n.WB.getNetworkProp("supportsAllNetworks",t),s=n.iT.getConnectedConnector(),a=n.aK.getAuthConnector();return!(!r||o||"ID_AUTH"===s&&a)&&!i?.includes(e.caipNetworkId)}onSwitchNetwork(e){const t=n.IN.state.data;if(e.id===this.network?.id)return;const r=e.chainNamespace!==n.WB.state.activeChain,i=n.WB.getAccountProp("caipAddress",e.chainNamespace),o=n.Uj.state.caipAddress,s="ID_AUTH"===n.iT.getConnectedConnector();r&&o&&!i&&!s?n.IN.push("SwitchActiveChain",{switchToChain:e.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:e}):n.IN.push("SwitchNetwork",{...t,network:e})}};Ne.styles=Me,Te([(0,s.wk)()],Ne.prototype,"network",void 0),Te([(0,s.wk)()],Ne.prototype,"requestedCaipNetworks",void 0),Te([(0,s.wk)()],Ne.prototype,"filteredNetworks",void 0),Te([(0,s.wk)()],Ne.prototype,"search",void 0),Ne=Te([(0,i.customElement)("w3m-networks-view")],Ne);const Pe=o.AH`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Oe=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Re=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=n.aG.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=n.WC.state.coinbaseTransactions,this.tokenImages=n.jQ.state.tokenImages,this.unsubscribe.push(n.aG.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),n.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),n.WC.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),n.WC.clearCursor(),this.fetchTransactions()}render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e?.map((e=>{const t=ae.rL.formatDate(e?.metadata?.minedAt),r=e.transfers[0],i=r?.fungible_info;if(!i)return null;const n=i?.icon?.url||this.tokenImages?.[i.symbol||""];return o.qy`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${(0,a.J)(i.symbol)}
          purchaseValue=${r.quantity.numeric}
          date=${t}
          icon=${(0,a.J)(n)}
          symbol=${(0,a.J)(i.symbol)}
        ></w3m-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{const r=i.TransactionUtil.getTransactionGroupTitle(t,e),n=this.coinbaseTransactions[t]?.[e];return n?o.qy`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${r}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=n.Uj.state.address,t=n.Hd.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await n.WC.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){const e=new Date;0!==(this.coinbaseTransactions[e.getFullYear()]?.[e.getMonth()]||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=n.Uj.state.address;await n.WC.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(o.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};Re.styles=Pe,Oe([(0,s.wk)()],Re.prototype,"selectedOnRampProvider",void 0),Oe([(0,s.wk)()],Re.prototype,"loading",void 0),Oe([(0,s.wk)()],Re.prototype,"coinbaseTransactions",void 0),Oe([(0,s.wk)()],Re.prototype,"tokenImages",void 0),Re=Oe([(0,i.customElement)("w3m-onramp-activity-view")],Re);const Be=o.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Le=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ue=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=n.aG.state.paymentCurrency,this.currencies=n.aG.state.paymentCurrencies,this.currencyImages=n.jQ.state.currencyImages,this.checked=!1,this.unsubscribe.push(n.aG.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),n.jQ.subscribeKey("currencyImages",(e=>this.currencyImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r)&&!this.checked;return o.qy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,a.J)(i?"disabled":void 0)}
      >
        ${this.currenciesTemplate(i)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map((t=>o.qy`
        <wui-list-item
          imageSrc=${(0,a.J)(this.currencyImages?.[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,a.J)(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `))}selectCurrency(e){e&&(n.aG.setPaymentCurrency(e),n.W3.close())}onCheckboxChange(e){this.checked=Boolean(e.detail)}};Ue.styles=Be,Le([(0,s.wk)()],Ue.prototype,"selectedCurrency",void 0),Le([(0,s.wk)()],Ue.prototype,"currencies",void 0),Le([(0,s.wk)()],Ue.prototype,"currencyImages",void 0),Le([(0,s.wk)()],Ue.prototype,"checked",void 0),Ue=Le([(0,i.customElement)("w3m-onramp-fiat-select-view")],Ue);var je=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let De=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.providers=n.aG.state.providers,this.unsubscribe.push(n.aG.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(e?.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,r)=>({...t,url:e[r]||""})))}))}render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter((e=>e.supportedChains.includes(n.WB.state.activeChain??"eip155"))).map((e=>o.qy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(e){n.aG.setSelectedProvider(e),n.IN.push("BuyInProgress"),n.wE.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),n.En.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=n.Uj.state.address,t=n.WB.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!t?.name)throw new Error("No network found");const r=n.oU.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??n.oU.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=n.aG.state.purchaseCurrency,o=i?[i.symbol]:n.aG.state.purchaseCurrencies.map((e=>e.symbol));return await n.TP.generateOnRampURL({defaultNetwork:r,destinationWallets:[{address:e,blockchains:n.oU.WC_COINBASE_PAY_SDK_CHAINS,assets:o}],partnerUserId:e,purchaseAmount:n.aG.state.purchaseAmount})}};je([(0,s.wk)()],De.prototype,"providers",void 0),De=je([(0,i.customElement)("w3m-onramp-providers-view")],De);const ze=o.AH`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var We=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let $e=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=n.aG.state.purchaseCurrencies,this.tokens=n.aG.state.purchaseCurrencies,this.tokenImages=n.jQ.state.tokenImages,this.checked=!1,this.unsubscribe.push(n.aG.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),n.jQ.subscribeKey("tokenImages",(e=>this.tokenImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r)&&!this.checked;return o.qy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${(0,a.J)(i?"disabled":void 0)}
      >
        ${this.currenciesTemplate(i)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map((t=>o.qy`
        <wui-list-item
          imageSrc=${(0,a.J)(this.tokenImages?.[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,a.J)(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `))}selectToken(e){e&&(n.aG.setPurchaseCurrency(e),n.W3.close())}onCheckboxChange(e){this.checked=Boolean(e.detail)}};$e.styles=ze,We([(0,s.wk)()],$e.prototype,"selectedCurrency",void 0),We([(0,s.wk)()],$e.prototype,"tokens",void 0),We([(0,s.wk)()],$e.prototype,"tokenImages",void 0),We([(0,s.wk)()],$e.prototype,"checked",void 0),$e=We([(0,i.customElement)("w3m-onramp-token-select-view")],$e);const qe=o.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var He=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Fe=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=n.WB.state.activeCaipNetwork?.caipNetworkId,this.initialized=n.GN.state.initialized,this.loadingQuote=n.GN.state.loadingQuote,this.loadingPrices=n.GN.state.loadingPrices,this.loadingTransaction=n.GN.state.loadingTransaction,this.sourceToken=n.GN.state.sourceToken,this.sourceTokenAmount=n.GN.state.sourceTokenAmount,this.sourceTokenPriceInUSD=n.GN.state.sourceTokenPriceInUSD,this.toToken=n.GN.state.toToken,this.toTokenAmount=n.GN.state.toTokenAmount,this.toTokenPriceInUSD=n.GN.state.toTokenPriceInUSD,this.inputError=n.GN.state.inputError,this.gasPriceInUSD=n.GN.state.gasPriceInUSD,this.fetchError=n.GN.state.fetchError,this.onDebouncedGetSwapCalldata=n.wE.debounce((async()=>{await n.GN.swapTokens()}),200),n.WB.subscribeKey("activeCaipNetwork",(e=>{this.caipNetworkId!==e?.caipNetworkId&&(this.caipNetworkId=e?.caipNetworkId,n.GN.resetState(),n.GN.initializeState())})),this.unsubscribe.push(n.W3.subscribeKey("open",(e=>{e||n.GN.resetState()})),n.IN.subscribeKey("view",(e=>{e.includes("Swap")||n.GN.resetValues()})),n.GN.subscribe((e=>{this.initialized=e.initialized,this.loadingQuote=e.loadingQuote,this.loadingPrices=e.loadingPrices,this.loadingTransaction=e.loadingTransaction,this.sourceToken=e.sourceToken,this.sourceTokenAmount=e.sourceTokenAmount,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError,this.gasPriceInUSD=e.gasPriceInUSD,this.fetchError=e.fetchError})))}firstUpdated(){n.GN.initializeState(),this.watchTokensAndValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval((()=>{n.GN.getNetworkTokenPrice(),n.GN.getMyTokensWithBalance(),n.GN.swapTokens()}),1e4)}templateSwap(){return o.qy`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":this.sourceToken&&this.toToken?this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount":"Select token"}templateReplaceTokensButton(){return o.qy`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return o.qy`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(e,t){const r=n.GN.state.myTokensWithBalance?.find((e=>e?.address===t?.address)),i="toToken"===e?this.toTokenAmount:this.sourceTokenAmount,s="toToken"===e?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let a=parseFloat(i)*s;return"toToken"===e&&(a-=this.gasPriceInUSD||0),o.qy`<w3m-swap-input
      .value=${"toToken"===e?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loadingQuote&&"toToken"===e}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${t}
      .balance=${r?.quantity?.numeric}
      .price=${r?.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(e,t){const r="sourceToken"===e?this.sourceToken:this.toToken,i=r?.address===n.WB.getActiveNetworkTokenAddress();let o="0";if(!t)return o="0",void this.handleChangeAmount(e,o);if(!this.gasPriceInUSD)return o=t,void this.handleChangeAmount(e,o);const s=ae.Se.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),a=i?ae.Se.bigNumber(t).minus(s):ae.Se.bigNumber(t);this.handleChangeAmount(e,a.isGreaterThan(0)?a.toFixed(20):"0")}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?o.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}handleChangeAmount(e,t){n.GN.clearError(),"sourceToken"===e?n.GN.setSourceTokenAmount(t):n.GN.setToTokenAmount(t),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,t=!this.sourceTokenAmount,r=this.loadingQuote||this.loadingPrices||this.loadingTransaction,i=r||e||t||this.inputError;return o.qy` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${e?"neutral":"main"}
        .loading=${r}
        .disabled=${i}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){n.GN.switchTokens()}onSwapPreview(){this.fetchError?n.GN.swapTokens():(n.En.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:this.sourceToken?.symbol||"",swapToToken:this.toToken?.symbol||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.IN.push("SwapPreview"))}};Fe.styles=qe,He([(0,s.wk)()],Fe.prototype,"interval",void 0),He([(0,s.wk)()],Fe.prototype,"detailsOpen",void 0),He([(0,s.wk)()],Fe.prototype,"caipNetworkId",void 0),He([(0,s.wk)()],Fe.prototype,"initialized",void 0),He([(0,s.wk)()],Fe.prototype,"loadingQuote",void 0),He([(0,s.wk)()],Fe.prototype,"loadingPrices",void 0),He([(0,s.wk)()],Fe.prototype,"loadingTransaction",void 0),He([(0,s.wk)()],Fe.prototype,"sourceToken",void 0),He([(0,s.wk)()],Fe.prototype,"sourceTokenAmount",void 0),He([(0,s.wk)()],Fe.prototype,"sourceTokenPriceInUSD",void 0),He([(0,s.wk)()],Fe.prototype,"toToken",void 0),He([(0,s.wk)()],Fe.prototype,"toTokenAmount",void 0),He([(0,s.wk)()],Fe.prototype,"toTokenPriceInUSD",void 0),He([(0,s.wk)()],Fe.prototype,"inputError",void 0),He([(0,s.wk)()],Fe.prototype,"gasPriceInUSD",void 0),He([(0,s.wk)()],Fe.prototype,"fetchError",void 0),Fe=He([(0,i.customElement)("w3m-swap-view")],Fe);const Ke=o.AH`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Ze=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ve=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=n.IN.state.data?.switchToChain,this.navigateTo=n.IN.state.data?.navigateTo,this.navigateWithReplace=n.IN.state.data?.navigateWithReplace,this.caipNetwork=n.IN.state.data?.network,this.activeChain=n.WB.state.activeChain}firstUpdated(){this.unsubscribe.push(n.WB.subscribeKey("activeChain",(e=>this.activeChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.switchToChain?ae.oU.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const t="eip155"===this.switchToChain?"Ethereum":this.switchToChain;return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="xl">
          <wui-visual
            name=${"eip155"===this.switchToChain?"eth":this.switchToChain}
          ></wui-visual>
          <wui-text
            data-testid=${`w3m-switch-active-chain-to-${t}`}
            variant="paragraph-500"
            color="fg-100"
            align="center"
            >Switch to <span class="capitalize">${t}</span></wui-text
          >
          <wui-text variant="small-400" color="fg-200" align="center">
            Connected wallet doesn't support connecting to ${e} chain. You
            need to connect with a different wallet.
          </wui-text>
          <wui-button size="md" @click=${this.switchActiveChain.bind(this)}>Switch</wui-button>
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(this.caipNetwork?await n.WB.switchActiveNetwork(this.caipNetwork):n.WB.setActiveNamespace(this.switchToChain),n.W3.close(),n.W3.open({view:"Connect"}))}};Ve.styles=Ke,Ze([(0,s.MZ)()],Ve.prototype,"activeChain",void 0),Ve=Ze([(0,i.customElement)("w3m-switch-active-chain-view")],Ve);const Ye=o.AH`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var Ge=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Je=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=n.GN.state.approvalTransaction,this.swapTransaction=n.GN.state.swapTransaction,this.sourceToken=n.GN.state.sourceToken,this.sourceTokenAmount=n.GN.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=n.GN.state.sourceTokenPriceInUSD,this.toToken=n.GN.state.toToken,this.toTokenAmount=n.GN.state.toTokenAmount??"",this.toTokenPriceInUSD=n.GN.state.toTokenPriceInUSD,this.caipNetwork=n.WB.state.activeCaipNetwork,this.balanceSymbol=n.Uj.state.balanceSymbol,this.gasPriceInUSD=n.GN.state.gasPriceInUSD,this.inputError=n.GN.state.inputError,this.loadingQuote=n.GN.state.loadingQuote,this.loadingApprovalTransaction=n.GN.state.loadingApprovalTransaction,this.loadingBuildTransaction=n.GN.state.loadingBuildTransaction,this.loadingTransaction=n.GN.state.loadingTransaction,this.unsubscribe.push(n.Uj.subscribeKey("balanceSymbol",(e=>{this.balanceSymbol!==e&&n.IN.goBack()})),n.WB.subscribeKey("activeCaipNetwork",(e=>{this.caipNetwork!==e&&(this.caipNetwork=e)})),n.GN.subscribe((e=>{this.approvalTransaction=e.approvalTransaction,this.swapTransaction=e.swapTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.inputError=e.inputError,e.inputError&&n.IN.goBack(),this.loadingQuote=e.loadingQuote,this.loadingApprovalTransaction=e.loadingApprovalTransaction,this.loadingBuildTransaction=e.loadingBuildTransaction,this.loadingTransaction=e.loadingTransaction})))}firstUpdated(){n.GN.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach((e=>e?.())),clearInterval(this.interval)}render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval((()=>{n.GN.getApprovalLoadingState()||n.GN.getTransaction()}),1e4)}templateSwap(){const e=`${i.UiHelperUtil.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${this.sourceToken?.symbol}`,t=`${i.UiHelperUtil.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${this.toToken?.symbol}`,r=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,n=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),s=i.UiHelperUtil.formatNumberToLocalString(r),a=i.UiHelperUtil.formatNumberToLocalString(n),c=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${s}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${this.sourceToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${this.toToken?.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${c}
            ?disabled=${c}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return this.sourceToken&&this.toToken&&!this.inputError?o.qy`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`:null}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){n.IN.goBack()}onSendTransaction(){this.approvalTransaction?n.GN.sendTransactionForApproval(this.approvalTransaction):n.GN.sendTransactionForSwap(this.swapTransaction)}};Je.styles=Ye,Ge([(0,s.wk)()],Je.prototype,"interval",void 0),Ge([(0,s.wk)()],Je.prototype,"detailsOpen",void 0),Ge([(0,s.wk)()],Je.prototype,"approvalTransaction",void 0),Ge([(0,s.wk)()],Je.prototype,"swapTransaction",void 0),Ge([(0,s.wk)()],Je.prototype,"sourceToken",void 0),Ge([(0,s.wk)()],Je.prototype,"sourceTokenAmount",void 0),Ge([(0,s.wk)()],Je.prototype,"sourceTokenPriceInUSD",void 0),Ge([(0,s.wk)()],Je.prototype,"toToken",void 0),Ge([(0,s.wk)()],Je.prototype,"toTokenAmount",void 0),Ge([(0,s.wk)()],Je.prototype,"toTokenPriceInUSD",void 0),Ge([(0,s.wk)()],Je.prototype,"caipNetwork",void 0),Ge([(0,s.wk)()],Je.prototype,"balanceSymbol",void 0),Ge([(0,s.wk)()],Je.prototype,"gasPriceInUSD",void 0),Ge([(0,s.wk)()],Je.prototype,"inputError",void 0),Ge([(0,s.wk)()],Je.prototype,"loadingQuote",void 0),Ge([(0,s.wk)()],Je.prototype,"loadingApprovalTransaction",void 0),Ge([(0,s.wk)()],Je.prototype,"loadingBuildTransaction",void 0),Ge([(0,s.wk)()],Je.prototype,"loadingTransaction",void 0),Je=Ge([(0,i.customElement)("w3m-swap-preview-view")],Je);const Qe=o.AH`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var Xe=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let et=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.targetToken=n.IN.state.data?.target,this.sourceToken=n.GN.state.sourceToken,this.sourceTokenAmount=n.GN.state.sourceTokenAmount,this.toToken=n.GN.state.toToken,this.myTokensWithBalance=n.GN.state.myTokensWithBalance,this.popularTokens=n.GN.state.popularTokens,this.searchValue="",this.unsubscribe.push(n.GN.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance})))}updated(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e?.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const t=this.renderRoot?.querySelector(".tokens");t?.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){super.disconnectedCallback();const e=this.renderRoot?.querySelector(".suggested-tokens-container"),t=this.renderRoot?.querySelector(".tokens");e?.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),t?.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return o.qy`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(e){"sourceToken"===this.targetToken?n.GN.setSourceToken(e):(n.GN.setToToken(e),this.sourceToken&&this.sourceTokenAmount&&n.GN.swapTokens()),n.IN.goBack()}templateSearchInput(){return o.qy`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],t=this.popularTokens?this.popularTokens:[],r=this.filterTokensWithText(e,this.searchValue),i=this.filterTokensWithText(t,this.searchValue);return o.qy`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${r?.length>0?o.qy`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${r.map((e=>{const t=e.symbol===this.sourceToken?.symbol||e.symbol===this.toToken?.symbol;return o.qy`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${e.symbol}"
                      name=${e.name}
                      ?disabled=${t}
                      symbol=${e.symbol}
                      price=${e?.price}
                      amount=${e?.quantity?.numeric}
                      imageSrc=${e.logoUri}
                      @click=${()=>{t||this.onSelectToken(e)}}
                    >
                    </wui-token-list-item>
                  `}))}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${i?.length>0?i.map((e=>o.qy`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${e.symbol}"
                    name=${e.name}
                    symbol=${e.symbol}
                    imageSrc=${e.logoUri}
                    @click=${()=>this.onSelectToken(e)}
                  >
                  </wui-token-list-item>
                `)):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=n.GN.state.suggestedTokens?n.GN.state.suggestedTokens.slice(0,8):null;return e?o.qy`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${e.map((e=>o.qy`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `))}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){const e=this.renderRoot?.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",i.MathUtil.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",i.MathUtil.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){const e=this.renderRoot?.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",i.MathUtil.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",i.MathUtil.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,t){return e.filter((e=>`${e.symbol} ${e.name} ${e.address}`.toLowerCase().includes(t.toLowerCase())))}};et.styles=Qe,Xe([(0,s.wk)()],et.prototype,"interval",void 0),Xe([(0,s.wk)()],et.prototype,"targetToken",void 0),Xe([(0,s.wk)()],et.prototype,"sourceToken",void 0),Xe([(0,s.wk)()],et.prototype,"sourceTokenAmount",void 0),Xe([(0,s.wk)()],et.prototype,"toToken",void 0),Xe([(0,s.wk)()],et.prototype,"myTokensWithBalance",void 0),Xe([(0,s.wk)()],et.prototype,"popularTokens",void 0),Xe([(0,s.wk)()],et.prototype,"searchValue",void 0),et=Xe([(0,i.customElement)("w3m-swap-select-token-view")],et);const tt=o.AH`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var rt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let it=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};it.styles=tt,it=rt([(0,i.customElement)("w3m-transactions-view")],it);var nt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const ot=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let st=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ot}></w3m-help-widget>
        <wui-button
          variant="main"
          size="md"
          @click=${()=>{n.wE.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};st=nt([(0,i.customElement)("w3m-what-is-a-network-view")],st);var at=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const ct=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let lt=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ct}></w3m-help-widget>
        <wui-button variant="main" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){n.En.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),n.IN.push("GetWallet")}};lt=at([(0,i.customElement)("w3m-what-is-a-wallet-view")],lt);var ut=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ht=class extends o.WF{render(){return o.qy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${n.IN.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};ht=ut([(0,i.customElement)("w3m-what-is-a-buy-view")],ht);const dt=o.AH`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var ft=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let pt=class extends o.WF{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){super(),this.loading=!1,this.timeoutTimeLeft=D.QH.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=n.IN.state.data?.email,this.authConnector=n.aK.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=Boolean(this.timeoutTimeLeft),t=this.getFooterLabels(e);return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","xl","0","xl"]}
        >
          <wui-text variant="paragraph-400" color="fg-100" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="paragraph-500" color="fg-100" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?o.qy`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:o.qy` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?o.qy`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="xs">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=D.QH.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=D.QH.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{this.loading||(this.otp=e.detail,this.authConnector&&6===this.otp.length&&(this.loading=!0,await(this.onOtpSubmit?.(this.otp))))}catch(e){this.error=n.wE.parseError(e),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!n.aK.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),n.Pt.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){n.Pt.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}};pt.styles=dt,ft([(0,s.wk)()],pt.prototype,"loading",void 0),ft([(0,s.wk)()],pt.prototype,"timeoutTimeLeft",void 0),ft([(0,s.wk)()],pt.prototype,"error",void 0),pt=ft([(0,i.customElement)("w3m-email-otp-widget")],pt);var gt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let mt=class extends pt{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){if(await this.authConnector.provider.connectOtp({otp:e}),n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!n.WB.state.activeChain)throw new Error("Active chain is not set on ChainControll");await n.x4.connectExternal(this.authConnector,n.WB.state.activeChain),n.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.authConnector.name||"Unknown"}}),n.Hd.state.siwx||n.W3.close()}}catch(e){throw n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};mt=gt([(0,i.customElement)("w3m-email-verify-otp-view")],mt);const wt=o.AH`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var yt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let vt=class extends o.WF{constructor(){super(),this.email=n.IN.state.data?.email,this.authConnector=n.aK.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="xs">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),n.En.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),n.IN.replace("EmailVerifyOtp",{email:this.email})}catch(e){n.IN.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),n.Pt.showSuccess("Code email resent")}}catch(e){n.Pt.showError(e)}finally{this.loading=!1}}};vt.styles=wt,yt([(0,s.wk)()],vt.prototype,"loading",void 0),vt=yt([(0,i.customElement)("w3m-email-verify-device-view")],vt);const bt=o.AH`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var xt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let At=class extends o.WF{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(n.W3.subscribeKey("open",(e=>{e||(this.onHideIframe(),n.IN.popTransactionStack())})),n.W3.subscribeKey("shake",(e=>{this.iframe.style.animation=e?"w3m-shake 500ms var(--wui-ease-out-power-2)":"none"})))}disconnectedCallback(){this.onHideIframe(),this.unsubscribe.forEach((e=>e())),this.bodyObserver?.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const e=this?.renderRoot?.querySelector("div");this.bodyObserver=new ResizeObserver((t=>{const r=t?.[0]?.contentBoxSize,i=r?.[0]?.inlineSize;this.iframe.style.height="600px",e.style.height="600px",i&&i<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset"):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset"),this.ready=!0,this.onShowIframe()})),this.bodyObserver.observe(window.document.body)}render(){return o.qy`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--wui-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--wui-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--wui-ease-out-power-2)"}async syncTheme(){const e=n.aK.getAuthConnector();if(e){const t=n.Wn.getSnapshot().themeMode,r=n.Wn.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:(0,ae.o_)(r,t)})}}};At.styles=bt,xt([(0,s.wk)()],At.prototype,"ready",void 0),At=xt([(0,i.customElement)("w3m-approve-transaction-view")],At);var kt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _t=class extends o.WF{render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${n.oU.SECURE_SITE_DASHBOARD}
          imageSrc=${n.oU.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};_t=kt([(0,i.customElement)("w3m-upgrade-wallet-view")],_t);var Ct=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Et=class extends o.WF{constructor(){super(...arguments),this.authConnector=n.aK.getAuthConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.authConnector)try{this.loading=!0,await n.x4.setPreferredAccountType(D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT),this.loading=!1,n.IN.push("Account")}catch(e){n.Pt.showError("Error upgrading to smart account")}}}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{n.wE.openHref(ae.TC.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return o.qy`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accent"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){n.IN.push("Account")}};Ct([(0,s.wk)()],Et.prototype,"authConnector",void 0),Ct([(0,s.wk)()],Et.prototype,"loading",void 0),Et=Ct([(0,i.customElement)("w3m-upgrade-to-smart-account-view")],Et);const St=o.AH`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var It=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Mt=class extends o.WF{constructor(){super(...arguments),this.formRef=(0,be._)(),this.initialEmail=n.IN.state.data?.email??"",this.email="",this.loading=!1}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return o.qy`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${(0,be.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="neutral" fullWidth @click=${n.IN.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="main"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=n.aK.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const r=await t.provider.updateEmail({email:this.email});n.En.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===r.action?n.IN.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):n.IN.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(e){n.Pt.showError(e),this.loading=!1}}};Mt.styles=St,It([(0,s.wk)()],Mt.prototype,"email",void 0),It([(0,s.wk)()],Mt.prototype,"loading",void 0),Mt=It([(0,i.customElement)("w3m-update-email-wallet-view")],Mt);var Tt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Nt=class extends pt{constructor(){super(),this.email=n.IN.state.data?.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n.IN.replace("UpdateEmailSecondaryOtp",n.IN.state.data))}catch(e){throw n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{n.IN.replace("UpdateEmailWallet",n.IN.state.data)}}};Nt=Tt([(0,i.customElement)("w3m-update-email-primary-otp-view")],Nt);var Pt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ot=class extends pt{constructor(){super(),this.email=n.IN.state.data?.newEmail,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),n.IN.reset("Account"))}catch(e){throw n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),e}},this.onStartOver=()=>{n.IN.replace("UpdateEmailWallet",n.IN.state.data)}}};Ot=Pt([(0,i.customElement)("w3m-update-email-secondary-otp-view")],Ot);const Rt=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Bt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Lt=class extends o.WF{constructor(){super(...arguments),this.swapUnsupportedChain=n.IN.state.data?.swapUnsupportedChain,this.disconecting=!1}render(){return o.qy`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?o.qy`
        <wui-text variant="small-400" color="fg-200" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:o.qy`
      <wui-text variant="small-400" color="fg-200" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const e=n.WB.getAllRequestedCaipNetworks(),t=n.WB.getAllApprovedCaipNetworkIds(),r=n.wE.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?r.filter((e=>n.oU.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId))):r).map((e=>o.qy`
        <wui-list-network
          imageSrc=${(0,a.J)(n.$m.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await n.x4.disconnect(),n.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.W3.close()}catch{n.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.Pt.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const t=n.Uj.state.caipAddress,r=n.WB.getAllApprovedCaipNetworkIds(),i=(n.WB.getNetworkProp("supportsAllNetworks",e.chainNamespace),n.IN.state.data);t?r?.includes(e.caipNetworkId)?await n.WB.switchActiveNetwork(e):n.IN.push("SwitchNetwork",{...i,network:e}):t||(n.WB.setActiveCaipNetwork(e),n.IN.push("Connect"))}};Lt.styles=Rt,Bt([(0,s.wk)()],Lt.prototype,"disconecting",void 0),Lt=Bt([(0,i.customElement)("w3m-unsupported-chain-view")],Lt);const Ut=o.AH`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var jt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=n.Uj.state.address,this.profileName=n.Uj.state.profileName,this.network=n.WB.state.activeCaipNetwork,this.preferredAccountType=n.Uj.state.preferredAccountType,this.unsubscribe.push(n.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):n.Pt.showError("Account not found")})),n.WB.subscribeKey("activeCaipNetwork",(e=>{e?.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=n.$m.getNetworkImage(this.network);return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${i.UiHelperUtil.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${n.Wn.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=n.WB.getAllRequestedCaipNetworks(),t=n.WB.checkIfSmartAccountEnabled(),r=n.WB.state.activeCaipNetwork;if(this.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&t)return r?o.qy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[n.$m.getNetworkImage(r)??""]}
      ></wui-compatible-network>`:null;const i=e?.filter((e=>e?.assets?.imageId))?.slice(0,5),s=i.map(n.$m.getNetworkImage).filter(Boolean);return o.qy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${s}
    ></wui-compatible-network>`}onReceiveClick(){n.IN.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(n.wE.copyToClopboard(this.address),n.Pt.showSuccess("Address copied"))}catch{n.Pt.showError("Failed to copy")}}};Dt.styles=Ut,jt([(0,s.wk)()],Dt.prototype,"address",void 0),jt([(0,s.wk)()],Dt.prototype,"profileName",void 0),jt([(0,s.wk)()],Dt.prototype,"network",void 0),jt([(0,s.wk)()],Dt.prototype,"preferredAccountType",void 0),Dt=jt([(0,i.customElement)("w3m-wallet-receive-view")],Dt);const zt=o.AH`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Wt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let $t=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=n.Uj.state.preferredAccountType,this.unsubscribe.push(n.Uj.subscribeKey("preferredAccountType",(e=>{this.preferredAccountType=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const e=n.WB.getAllRequestedCaipNetworks(),t=n.WB.getAllApprovedCaipNetworkIds(),r=n.WB.state.activeCaipNetwork,i=n.WB.checkIfSmartAccountEnabled();let s=n.wE.sortRequestedNetworks(t,e);if(i&&this.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;s=[r]}return s.map((e=>o.qy`
        <wui-list-network
          imageSrc=${(0,a.J)(n.$m.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};$t.styles=zt,Wt([(0,s.wk)()],$t.prototype,"preferredAccountType",void 0),$t=Wt([(0,i.customElement)("w3m-wallet-compatible-networks-view")],$t);const qt=o.AH`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var Ht=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ft=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.token=n.Rv.state.token,this.sendTokenAmount=n.Rv.state.sendTokenAmount,this.receiverAddress=n.Rv.state.receiverAddress,this.receiverProfileName=n.Rv.state.receiverProfileName,this.loading=n.Rv.state.loading,this.gasPriceInUSD=n.Rv.state.gasPriceInUSD,this.gasPrice=n.Rv.state.gasPrice,this.message="Preview Send",this.fetchNetworkPrice(),this.unsubscribe.push(n.Rv.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.getMessage(),o.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          .gasPriceInUSD=${this.gasPriceInUSD}
          .gasPrice=${this.gasPrice}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="main"
          ?loading=${this.loading}
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}async fetchNetworkPrice(){await n.GN.getNetworkTokenPrice();const e=await n.GN.getInitialGasPrice();e?.gasPrice&&e?.gasPriceInUSD&&(n.Rv.setGasPrice(e.gasPrice),n.Rv.setGasPriceInUsd(e.gasPriceInUSD))}onButtonClick(){n.IN.push("WalletSendPreview")}getMessage(){if(this.message="Preview Send",this.receiverAddress&&!n.wE.isAddress(this.receiverAddress,n.WB.state.activeChain)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.sendTokenAmount&&this.token?.price){this.sendTokenAmount*this.token.price||(this.message="Incorrect Value")}this.token||(this.message="Select Token")}};Ft.styles=qt,Ht([(0,s.wk)()],Ft.prototype,"token",void 0),Ht([(0,s.wk)()],Ft.prototype,"sendTokenAmount",void 0),Ht([(0,s.wk)()],Ft.prototype,"receiverAddress",void 0),Ht([(0,s.wk)()],Ft.prototype,"receiverProfileName",void 0),Ht([(0,s.wk)()],Ft.prototype,"loading",void 0),Ht([(0,s.wk)()],Ft.prototype,"gasPriceInUSD",void 0),Ht([(0,s.wk)()],Ft.prototype,"gasPrice",void 0),Ht([(0,s.wk)()],Ft.prototype,"message",void 0),Ft=Ht([(0,i.customElement)("w3m-wallet-send-view")],Ft);const Kt=o.AH`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Zt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Vt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=n.Uj.state.tokenBalance,this.search="",this.onDebouncedSearch=n.wE.debounce((e=>{this.search=e})),this.unsubscribe.push(n.Uj.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return o.qy`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){return this.tokens=this.tokenBalance?.filter((e=>e.chainId===n.WB.state.activeCaipNetwork?.caipNetworkId)),this.search?this.filteredTokens=this.tokenBalance?.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))):this.filteredTokens=this.tokens,o.qy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map((e=>o.qy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`)):o.qy`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){n.IN.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){n.Rv.setToken(e),n.Rv.setTokenAmount(void 0),n.IN.goBack()}};Vt.styles=Kt,Zt([(0,s.wk)()],Vt.prototype,"tokenBalance",void 0),Zt([(0,s.wk)()],Vt.prototype,"tokens",void 0),Zt([(0,s.wk)()],Vt.prototype,"filteredTokens",void 0),Zt([(0,s.wk)()],Vt.prototype,"search",void 0),Vt=Zt([(0,i.customElement)("w3m-wallet-send-select-token-view")],Vt);const Yt=o.AH`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Gt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Jt=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.token=n.Rv.state.token,this.sendTokenAmount=n.Rv.state.sendTokenAmount,this.receiverAddress=n.Rv.state.receiverAddress,this.receiverProfileName=n.Rv.state.receiverProfileName,this.receiverProfileImageUrl=n.Rv.state.receiverProfileImageUrl,this.gasPriceInUSD=n.Rv.state.gasPriceInUSD,this.caipNetwork=n.WB.state.activeCaipNetwork,this.unsubscribe.push(n.Rv.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.gasPriceInUSD=e.gasPriceInUSD,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl})),n.WB.subscribeKey("activeCaipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy` <wui-flex flexDirection="column" .padding=${["0","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?i.UiHelperUtil.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${this.token?.symbol}"
            .imageSrc=${this.token?.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?i.UiHelperUtil.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):i.UiHelperUtil.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${this.receiverAddress??""}
            .imageSrc=${this.receiverProfileImageUrl??void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
          .networkFee=${this.gasPriceInUSD}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="main"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return o.qy`<wui-text variant="paragraph-400" color="fg-100"
        >$${e.toFixed(2)}</wui-text
      >`}return null}onSendClick(){n.Rv.sendToken()}onCancelClick(){n.IN.goBack()}};Jt.styles=Yt,Gt([(0,s.wk)()],Jt.prototype,"token",void 0),Gt([(0,s.wk)()],Jt.prototype,"sendTokenAmount",void 0),Gt([(0,s.wk)()],Jt.prototype,"receiverAddress",void 0),Gt([(0,s.wk)()],Jt.prototype,"receiverProfileName",void 0),Gt([(0,s.wk)()],Jt.prototype,"receiverProfileImageUrl",void 0),Gt([(0,s.wk)()],Jt.prototype,"gasPriceInUSD",void 0),Gt([(0,s.wk)()],Jt.prototype,"caipNetwork",void 0),Jt=Gt([(0,i.customElement)("w3m-wallet-send-preview-view")],Jt);const Qt=o.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Xt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let er=class extends o.WF{constructor(){super(...arguments),this.checked=!1}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r),s=i&&!this.checked,c=s?-1:void 0;return o.qy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.J)(s?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${(0,a.J)(c)}></w3m-wallet-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=Boolean(e.detail)}};er.styles=Qt,Xt([(0,s.wk)()],er.prototype,"checked",void 0),er=Xt([(0,i.customElement)("w3m-connect-wallets-view")],er);const tr=o.AH`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var rr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ir=class extends o.WF{constructor(){super(...arguments),this.checked=!1}render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox,i=Boolean(e||t)&&Boolean(r),s=i&&!this.checked,c=s?-1:void 0;return o.qy`
      <w3m-legal-checkbox @checkboxChange=${this.onCheckboxChange.bind(this)}></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${i?["0","s","s","s"]:"s"}
        gap="xs"
        class=${(0,a.J)(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,a.J)(c)}></w3m-social-login-list>
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}onCheckboxChange(e){this.checked=Boolean(e.detail)}};ir.styles=tr,rr([(0,s.wk)()],ir.prototype,"checked",void 0),ir=rr([(0,i.customElement)("w3m-connect-socials-view")],ir);const nr=o.AH`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var or=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let sr=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=n.Uj.state.socialProvider,this.socialWindow=n.Uj.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.authConnector=n.aK.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===M){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),n.Uj.setSocialWindow(void 0,n.WB.state.activeChain)),this.connecting=!0,this.updateMessage();const t=e.data.resultUri;await this.authConnector.provider.connectSocial(t),this.socialProvider&&(n.iT.setConnectedSocialProvider(this.socialProvider),await n.x4.connectExternal(this.authConnector,this.authConnector.chain),n.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&n.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else n.IN.goBack(),n.Pt.showError("Untrusted Origin"),this.socialProvider&&n.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},this.unsubscribe.push(n.Uj.subscribe((e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow),e.address&&n.W3.state.open&&n.W3.close()}))),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),window.removeEventListener("message",this.handleSocialConnection,!1)}render(){return o.qy`
      <wui-flex
        data-error=${(0,a.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,a.J)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="small-400" color=${this.error?"error-100":"fg-200"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=n.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){const e=setInterval((()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==n.IN.state.view||n.IN.goBack(),clearInterval(e))}),1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};sr.styles=nr,or([(0,s.wk)()],sr.prototype,"socialProvider",void 0),or([(0,s.wk)()],sr.prototype,"socialWindow",void 0),or([(0,s.wk)()],sr.prototype,"error",void 0),or([(0,s.wk)()],sr.prototype,"connecting",void 0),or([(0,s.wk)()],sr.prototype,"message",void 0),sr=or([(0,i.customElement)("w3m-connecting-social-view")],sr);const ar=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }

  .account-settings-button {
    padding: calc(var(--wui-spacing-m) - 1px) var(--wui-spacing-2l);
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .account-settings-button:hover {
    background: var(--wui-color-gray-glass-005);
  }
`;var cr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let lr=class extends o.WF{constructor(){super(),this.usubscribe=[],this.address=n.Uj.state.address,this.profileImage=n.Uj.state.profileImage,this.profileName=n.Uj.state.profileName,this.accounts=n.Uj.state.allAccounts,this.loading=!1,this.usubscribe.push(n.Uj.subscribeKey("address",(e=>{e?this.address=e:n.W3.close()}))),this.usubscribe.push(n.Uj.subscribeKey("profileImage",(e=>{this.profileImage=e}))),this.usubscribe.push(n.Uj.subscribeKey("profileName",(e=>{this.profileName=e})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-profile-view: No account provided");return o.qy`
      <wui-flex flexDirection="column" gap="l" .padding=${["0","xl","m","xl"]}>
        <wui-flex flexDirection="column" alignItems="center" gap="l">
          <wui-avatar
            alt=${this.address}
            address=${this.address}
            imageSrc=${(0,a.J)(this.profileImage)}
            size="2lg"
          ></wui-avatar>
          <wui-flex flexDirection="column" alignItems="center">
            <wui-flex gap="3xs" alignItems="center" justifyContent="center">
              <wui-text variant="title-6-600" color="fg-100" data-testid="account-settings-address">
                ${this.profileName?i.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):i.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
              </wui-text>
              <wui-icon-link
                size="md"
                icon="copy"
                iconColor="fg-200"
                @click=${this.onCopyAddress}
              ></wui-icon-link>
            </wui-flex>
          </wui-flex>
        </wui-flex>
        <wui-flex
          data-testid="account-settings-button"
          justifyContent="center"
          alignItems="center"
          class="account-settings-button"
          @click=${()=>n.IN.push("AccountSettings")}
        >
          <wui-text variant="paragraph-500" color="fg-100">Account Settings</wui-text>
        </wui-flex>
        ${this.accountsTemplate()}
      </wui-flex>
    `}accountsTemplate(){return o.qy`<wui-flex flexDirection="column">
      <wui-flex .padding=${["3xs","m","s","s"]}>
        <wui-text color="fg-200" variant="paragraph-400">Your accounts</wui-text>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxs">
        ${this.accounts.map((e=>this.accountTemplate(e)))}
      </wui-flex>
    </wui-flex>`}async onSwitchAccount(e){this.loading=!0;n.aK.getAuthConnector()&&await n.x4.setPreferredAccountType(e.type),n.Uj.setShouldUpdateToAddress(e.address,n.WB.state.activeChain),this.loading=!1}accountTemplate(e){return o.qy`<wui-list-account accountAddress=${e.address} accountType=${e.type}>
      ${e.address===this.address?"":o.qy`<wui-button
            slot="action"
            textVariant="small-600"
            size="md"
            variant="accent"
            @click=${()=>this.onSwitchAccount(e)}
            .loading=${this.loading}
            >Switch</wui-button
          >`}
    </wui-list-account>`}onCopyAddress(){try{this.profileName?(n.wE.copyToClopboard(this.profileName),n.Pt.showSuccess("Name copied")):this.address&&(n.wE.copyToClopboard(this.address),n.Pt.showSuccess("Address copied"))}catch{n.Pt.showError("Failed to copy")}}};lr.styles=ar,cr([(0,s.wk)()],lr.prototype,"address",void 0),cr([(0,s.wk)()],lr.prototype,"profileImage",void 0),cr([(0,s.wk)()],lr.prototype,"profileName",void 0),cr([(0,s.wk)()],lr.prototype,"accounts",void 0),cr([(0,s.wk)()],lr.prototype,"loading",void 0),lr=cr([(0,i.customElement)("w3m-profile-view")],lr);const ur=o.AH`
  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var hr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let dr=class extends o.WF{constructor(){super(),this.metadata=n.Hd.state.metadata,this.allAccounts=n.Uj.state.allAccounts||[],this.balances={},this.labels=n.Uj.state.addressLabels,this.currentAddress=n.Uj.state.address||"",this.connectedConnector=n.iT.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector,this.caipNetwork=n.WB.state.activeCaipNetwork,n.Uj.subscribeKey("allAccounts",(e=>{this.allAccounts=e}))}connectedCallback(){super.connectedCallback(),this.allAccounts.forEach((e=>{n.TP.getBalance(e.address,this.caipNetwork?.caipNetworkId).then((t=>{let r=this.balances[e.address]||0;t.balances.length>0&&(r=t.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balances[e.address]=r,this.requestUpdate()}))}))}getAddressIcon(e){return"smartAccount"===e?"lightbulb":"mail"}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["xl","0","xl","0"]}>
        <wui-banner-img
          imageSrc=${(0,a.J)(this.metadata?.icons[0])}
          text=${(0,a.J)(this.metadata?.url)}
          size="sm"
        ></wui-banner-img>
      </wui-flex>
      <wui-flex flexDirection="column" gap="xxl" .padding=${["l","xl","xl","xl"]}>
        ${this.allAccounts.map(((e,t)=>this.getAddressTemplate(e,t)))}
      </wui-flex>
    `}getAddressTemplate(e,t){const r=this.labels?.get(e.address);return o.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        data-testid="switch-address-item"
      >
        <wui-flex alignItems="center">
          <wui-avatar address=${e.address}></wui-avatar>
          ${this.shouldShowIcon?o.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="glass-002"
                background="gray"
                icon="${this.getAddressIcon(e.type)}"
                ?border=${!0}
              ></wui-icon-box>`:o.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${r||i.UiHelperUtil.getTruncateString({string:e.address,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">
              ${"number"==typeof this.balances[e.address]?`$${this.balances[e.address]?.toFixed(2)}`:o.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          ${e.address?.toLowerCase()===this.currentAddress?.toLowerCase()?"":o.qy`
                <wui-button
                  data-testid=${`w3m-switch-address-button-${t}`}
                  textVariant="small-600"
                  size="md"
                  variant="accent"
                  @click=${()=>this.onSwitchAddress(e.address)}
                  >Switch to</wui-button
                >
              `}
        </wui-flex>
      </wui-flex>
    `}onSwitchAddress(e){const t=n.WB.state.activeCaipNetwork,r=t?.chainNamespace,i=`${r}:${t?.id}:${e}`;n.Uj.setCaipAddress(i,r),n.W3.close()}};dr.styles=ur,hr([(0,s.wk)()],dr.prototype,"allAccounts",void 0),hr([(0,s.wk)()],dr.prototype,"balances",void 0),dr=hr([(0,i.customElement)("w3m-switch-address-view")],dr);const fr=o.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: var(--wui-border-radius-m);
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }
`;var pr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gr=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=n.Uj.state.socialProvider,this.uri=n.Uj.state.farcasterUrl,this.ready=!1,this.loading=!1,this.authConnector=n.aK.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(n.Uj.subscribeKey("farcasterUrl",(e=>{e&&(this.uri=e,this.connectFarcaster())})),n.Uj.subscribeKey("socialProvider",(e=>{e&&(this.socialProvider=e)}))),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`${this.platformTemplate()}`}platformTemplate(){return n.wE.isMobile()?o.qy`${this.mobileTemplate()}`:o.qy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?o.qy`${this.loadingTemplate()}`:o.qy`${this.qrTemplate()}`}qrTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","xl","xl","xl"]}
      gap="xl"
    >
      <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="paragraph-500" color="fg-100">
        Scan this QR Code with your phone
      </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return o.qy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["3xl","xl","xl","xl"]}
      gap="xl"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          backgroundColor="error-100"
          background="opaque"
          iconColor="error-100"
          icon="close"
          size="sm"
          border
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="small-400" color="fg-200"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=n.Wn.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.qy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await(this.authConnector?.provider.connectFarcaster()),this.socialProvider&&n.iT.setConnectedSocialProvider(this.socialProvider),this.loading=!0,await n.x4.connectExternal(this.authConnector,this.authConnector.chain),this.loading=!1,n.W3.close()}catch(e){n.IN.goBack(),n.Pt.showError(e)}}mobileLinkTemplate(){return o.qy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&n.wE.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),0))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40;return o.qy` <wui-qr-code
      size=${e}
      theme=${n.Wn.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}onCopyUri(){try{this.uri&&(n.wE.copyToClopboard(this.uri),n.Pt.showSuccess("Link copied"))}catch{n.Pt.showError("Failed to copy")}}};gr.styles=fr,pr([(0,s.wk)()],gr.prototype,"socialProvider",void 0),pr([(0,s.wk)()],gr.prototype,"uri",void 0),pr([(0,s.wk)()],gr.prototype,"ready",void 0),pr([(0,s.wk)()],gr.prototype,"loading",void 0),gr=pr([(0,i.customElement)("w3m-connecting-farcaster-view")],gr);var mr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let wr=class extends o.WF{constructor(){super(...arguments),this.dappName=n.Hd.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return o.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,await n.UG.requestSignMessage().finally((()=>this.isSigning=!1))}async onCancel(){this.isCancelling=!0,await n.UG.cancelSignMessage().finally((()=>this.isCancelling=!1))}};mr([(0,s.wk)()],wr.prototype,"isCancelling",void 0),mr([(0,s.wk)()],wr.prototype,"isSigning",void 0),wr=mr([(0,i.customElement)("w3m-siwx-sign-message-view")],wr);const yr=o.AH`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,vr={filterOutDuplicatesByRDNS(e){const t=n.Hd.state.enableEIP6963?n.aK.state.connectors:[],r=n.iT.getRecentWallets(),i=t.map((e=>e.info?.rdns)).filter(Boolean),o=r.map((e=>e.rdns)).filter(Boolean),s=i.concat(o);if(s.includes("io.metamask.mobile")&&n.wE.isMobile()){const e=s.indexOf("io.metamask.mobile");s[e]="io.metamask"}return e.filter((e=>!s.includes(String(e?.rdns))))},filterOutDuplicatesByIds(e){const t=n.aK.state.connectors.filter((e=>"ANNOUNCED"===e.type||"INJECTED"===e.type)),r=n.iT.getRecentWallets(),i=t.map((e=>e.explorerId)),o=r.map((e=>e.id)),s=i.concat(o);return e.filter((e=>!s.includes(e?.id)))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){const{connectors:t}=n.aK.state,r=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>t.info?.rdns?(e[t.info.rdns]=!0,e):e),{});return e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(r[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)))}};var br=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const xr="local-paginator";let Ar=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!n.Np.state.wallets.length,this.wallets=n.Np.state.wallets,this.recommended=n.Np.state.recommended,this.featured=n.Np.state.featured,this.unsubscribe.push(n.Np.subscribeKey("wallets",(e=>this.wallets=e)),n.Np.subscribeKey("recommended",(e=>this.recommended=e)),n.Np.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.paginationObserver?.disconnect()}render(){return o.qy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){const e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await n.Np.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>o.qy`
        <wui-card-select-loader type="wallet" id=${(0,a.J)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return vr.markWalletsAsInstalled(e).map((e=>o.qy`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:i}=n.Np.state,o=window.innerWidth<352?3:4,s=e.length+t.length;let a=Math.ceil(s/o)*o-s+o;return a-=e.length?r.length%o:0,0===i&&r.length>0?null:0===i||[...r,...e,...t].length<i?this.shimmerTemplate(a,xr):null}createPaginationObserver(){const e=this.shadowRoot?.querySelector(`#${xr}`);e&&(this.paginationObserver=new IntersectionObserver((([e])=>{if(e?.isIntersecting&&!this.initial){const{page:e,count:t,wallets:r}=n.Np.state;r.length<t&&n.Np.fetchWallets({page:e+1})}})),this.paginationObserver.observe(e))}onConnectWallet(e){const t=n.aK.getConnector(e.id,e.rdns);t?n.IN.push("ConnectingExternal",{connector:t}):n.IN.push("ConnectingWalletConnect",{wallet:e})}};Ar.styles=yr,br([(0,s.wk)()],Ar.prototype,"initial",void 0),br([(0,s.wk)()],Ar.prototype,"wallets",void 0),br([(0,s.wk)()],Ar.prototype,"recommended",void 0),br([(0,s.wk)()],Ar.prototype,"featured",void 0),Ar=br([(0,i.customElement)("w3m-all-wallets-list")],Ar);const kr=o.AH`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    will-change: background-color, color;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var _r=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Cr=class extends o.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){const e="certified"===this.wallet?.badge_type;return o.qy`
      <button ontouchstart>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${(0,a.J)(e?"certified":void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?o.qy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():o.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,a.J)(this.imageSrc)}
        name=${this.wallet?.name}
        .installed=${this.wallet?.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return o.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=n.$m.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await n.$m.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Cr.styles=kr,_r([(0,s.wk)()],Cr.prototype,"visible",void 0),_r([(0,s.wk)()],Cr.prototype,"imageSrc",void 0),_r([(0,s.wk)()],Cr.prototype,"imageLoading",void 0),_r([(0,s.MZ)()],Cr.prototype,"wallet",void 0),Cr=_r([(0,i.customElement)("w3m-all-wallets-list-item")],Cr);const Er=o.AH`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Sr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ir=class extends o.WF{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?o.qy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await n.Np.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=n.Np.state,t=vr.markWalletsAsInstalled(e);return e.length?o.qy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map((e=>o.qy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:o.qy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const t=n.aK.getConnector(e.id,e.rdns);t?n.IN.push("ConnectingExternal",{connector:t}):n.IN.push("ConnectingWalletConnect",{wallet:e})}};Ir.styles=Er,Sr([(0,s.wk)()],Ir.prototype,"loading",void 0),Sr([(0,s.MZ)()],Ir.prototype,"query",void 0),Sr([(0,s.MZ)()],Ir.prototype,"badge",void 0),Ir=Sr([(0,i.customElement)("w3m-all-wallets-search")],Ir);var Mr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Tr=class extends o.WF{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(n.x4.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return o.qy`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){const t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};Mr([(0,s.MZ)({type:Array})],Tr.prototype,"platforms",void 0),Mr([(0,s.MZ)()],Tr.prototype,"onSelectPlatfrom",void 0),Mr([(0,s.wk)()],Tr.prototype,"buffering",void 0),Tr=Mr([(0,i.customElement)("w3m-connecting-header")],Tr);var Nr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pr=class extends ie{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=n.aK.state,t=e.find((e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns||"INJECTED"===e.type||e.name===this.wallet?.name));if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await n.x4.connectExternal(t,t.chain),n.W3.close(),n.En.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.wallet?.name||"Unknown"}})}catch(e){n.En.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};Pr=Nr([(0,i.customElement)("w3m-connecting-wc-browser")],Pr);var Or=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Rr=class extends ie{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:r,href:i}=n.wE.formatNativeUrl(e,this.uri);n.x4.setWcLinking({name:t,href:i}),n.x4.setRecentWallet(this.wallet),n.wE.openHref(r,"_blank")}catch{this.error=!0}}};Rr=Or([(0,i.customElement)("w3m-connecting-wc-desktop")],Rr);var Br=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Lr=class extends ie{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel=void 0,this.secondaryLabel=n.oU.CONNECT_LABELS.MOBILE,this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}}),this.btnLabelTimeout=setTimeout((()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=n.oU.CONNECT_LABELS.MOBILE}),n.oU.FIVE_SEC_MS),this.labelTimeout=setTimeout((()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"}),n.oU.THREE_SEC_MS)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:r,href:i}=n.wE.formatNativeUrl(e,this.uri);n.x4.setWcLinking({name:t,href:i}),n.x4.setRecentWallet(this.wallet),n.wE.openHref(r,"_self"),clearTimeout(this.labelTimeout),this.secondaryLabel=n.oU.CONNECT_LABELS.MOBILE}catch(e){n.En.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}}onBuffering(){const e=n.wE.isIos();"visible"===document?.visibilityState&&!this.error&&e&&(n.x4.setBuffering(!0),setTimeout((()=>{n.x4.setBuffering(!1)}),5e3))}};Lr=Br([(0,i.customElement)("w3m-connecting-wc-mobile")],Lr);const Ur=o.AH`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var jr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dr=class extends ie{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return n.x4.setWcLinking(void 0),n.x4.setRecentWallet(this.wallet),o.qy` <wui-qr-code
      size=${e}
      theme=${n.Wn.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,a.J)(n.$m.getWalletImage(this.wallet))}
      alt=${(0,a.J)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.qy`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};Dr.styles=Ur,Dr=jr([(0,i.customElement)("w3m-connecting-wc-qrcode")],Dr);var zr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wr=class extends o.WF{constructor(){if(super(),this.wallet=n.IN.state.data?.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return o.qy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,a.J)(n.$m.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Wr=zr([(0,i.customElement)("w3m-connecting-wc-unsupported")],Wr);var $r=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let qr=class extends ie{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",n.En.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:r,href:i}=n.wE.formatUniversalUrl(e,this.uri);n.x4.setWcLinking({name:t,href:i}),n.x4.setRecentWallet(this.wallet),n.wE.openHref(r,"_blank")}catch{this.error=!0}}};qr=$r([(0,i.customElement)("w3m-connecting-wc-web")],qr);const Hr=o.AH`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var Fr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Kr=n.oU.CONVERT_SLIPPAGE_TOLERANCE;let Zr=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.networkName=n.WB.state.activeCaipNetwork?.name,this.detailsOpen=!1,this.sourceToken=n.GN.state.sourceToken,this.toToken=n.GN.state.toToken,this.toTokenAmount=n.GN.state.toTokenAmount,this.sourceTokenPriceInUSD=n.GN.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=n.GN.state.toTokenPriceInUSD,this.gasPriceInUSD=n.GN.state.gasPriceInUSD,this.priceImpact=n.GN.state.priceImpact,this.maxSlippage=n.GN.state.maxSlippage,this.networkTokenSymbol=n.GN.state.networkTokenSymbol,this.inputError=n.GN.state.inputError,this.unsubscribe.push(n.GN.subscribe((e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.gasPriceInUSD=e.gasPriceInUSD,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError})))}render(){const e=this.toTokenAmount&&this.maxSlippage?ae.Se.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const t=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${i.UiHelperUtil.formatNumberToLocalString(t,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${i.UiHelperUtil.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?o.qy`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Network cost
                        </wui-text>
                        <w3m-tooltip-trigger
                          text=${`Network cost is paid in ${this.networkTokenSymbol} on the ${this.networkName} network in order to execute transaction.`}
                        >
                          <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                        </w3m-tooltip-trigger>
                      </wui-flex>
                      <wui-text variant="small-400" color="fg-100">
                        $${i.UiHelperUtil.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?o.qy` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${i.UiHelperUtil.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?o.qy`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${"Max slippage sets the minimum amount you must receive for the transaction to proceed. "+(e?`Transaction will be reversed if you receive less than ${i.UiHelperUtil.formatNumberToLocalString(e,6)} ${this.toToken.symbol} due to price changes.`:"")}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${i.UiHelperUtil.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${Kr}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};Zr.styles=[Hr],Fr([(0,s.wk)()],Zr.prototype,"networkName",void 0),Fr([(0,s.MZ)()],Zr.prototype,"detailsOpen",void 0),Fr([(0,s.wk)()],Zr.prototype,"sourceToken",void 0),Fr([(0,s.wk)()],Zr.prototype,"toToken",void 0),Fr([(0,s.wk)()],Zr.prototype,"toTokenAmount",void 0),Fr([(0,s.wk)()],Zr.prototype,"sourceTokenPriceInUSD",void 0),Fr([(0,s.wk)()],Zr.prototype,"toTokenPriceInUSD",void 0),Fr([(0,s.wk)()],Zr.prototype,"gasPriceInUSD",void 0),Fr([(0,s.wk)()],Zr.prototype,"priceImpact",void 0),Fr([(0,s.wk)()],Zr.prototype,"maxSlippage",void 0),Fr([(0,s.wk)()],Zr.prototype,"networkTokenSymbol",void 0),Fr([(0,s.wk)()],Zr.prototype,"inputError",void 0),Zr=Fr([(0,i.customElement)("w3m-swap-details")],Zr);const Vr=o.AH`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var Yr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gr=class extends o.WF{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",t=ae.Se.bigNumber(e).isGreaterThan("0");return o.qy`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${t?`$${i.UiHelperUtil.formatNumberToLocalString(this.marketValue,3)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){return ae.t$.numericInputKeyDown(e,this.value,(e=>this.onSetAmount?.(this.target,e)))}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const t=e.target.value.replace(/[^0-9.]/gu,"");","===t||"."===t?this.onSetAmount(this.target,"0."):t.endsWith(",")?this.onSetAmount(this.target,t.replace(",",".")):this.onSetAmount(this.target,t)}setMaxValueToInput(){this.onSetMaxValue?.(this.target,this.balance)}templateTokenSelectButton(){return this.token?o.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:o.qy` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const e=ae.Se.multiply(this.balance,this.price),t=!!e&&e?.isGreaterThan(5e-5);return o.qy`
      ${t?o.qy`<wui-text variant="small-400" color="fg-200">
            ${i.UiHelperUtil.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${"sourceToken"===this.target?this.tokenActionButtonTemplate(t):null}
    `}tokenActionButtonTemplate(e){return e?o.qy` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:o.qy` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){n.En.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),n.IN.push("SwapSelectToken",{target:this.target})}onBuyToken(){n.IN.push("OnRampProviders")}};Gr.styles=[Vr],Yr([(0,s.MZ)()],Gr.prototype,"focused",void 0),Yr([(0,s.MZ)()],Gr.prototype,"balance",void 0),Yr([(0,s.MZ)()],Gr.prototype,"value",void 0),Yr([(0,s.MZ)()],Gr.prototype,"price",void 0),Yr([(0,s.MZ)()],Gr.prototype,"marketValue",void 0),Yr([(0,s.MZ)()],Gr.prototype,"disabled",void 0),Yr([(0,s.MZ)()],Gr.prototype,"target",void 0),Yr([(0,s.MZ)()],Gr.prototype,"token",void 0),Yr([(0,s.MZ)()],Gr.prototype,"onSetAmount",void 0),Yr([(0,s.MZ)()],Gr.prototype,"onSetMaxValue",void 0),Gr=Yr([(0,i.customElement)("w3m-swap-input")],Gr);const Jr=o.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var Qr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xr=class extends o.WF{constructor(){super(...arguments),this.target="sourceToken"}render(){return o.qy`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return o.qy`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};Xr.styles=[Jr],Qr([(0,s.MZ)()],Xr.prototype,"target",void 0),Xr=Qr([(0,i.customElement)("w3m-swap-input-skeleton")],Xr);const ei=o.AH`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var ti=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const ri=["SmartSessionList"];function ii(){const e=n.IN.state.data?.connector?.name,t=n.IN.state.data?.wallet?.name,r=n.IN.state.data?.network?.name,i=t??e,o=n.aK.getConnectors();return{Connect:`Connect ${1===o.length&&"w3m-email"===o[0]?.id?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:r??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:n.Uj.state.socialProvider?n.Uj.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let ni=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.heading=ii()[n.IN.state.view],this.network=n.WB.state.activeCaipNetwork,this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=n.IN.state.view,this.viewDirection="",this.headerText=ii()[n.IN.state.view],this.unsubscribe.push(n.IN.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.headerText=ii()[e]}),N.HeaderText),this.onViewChange(),this.onHistoryChange()})),n.x4.subscribeKey("buffering",(e=>this.buffering=e)),n.WB.subscribeKey("activeCaipNetwork",(e=>this.network=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){n.En.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),n.IN.push("WhatIsAWallet")}async onClose(){"UnsupportedChain"===n.IN.state.view||await n.UG.isSIWXCloseDisabled()?n.W3.shake():n.W3.close()}rightHeaderTemplate(){const e=n.Hd?.state?.features?.smartSessions;return"Account"===n.IN.state.view&&e?o.qy`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>n.IN.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return o.qy`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const e=ri.includes(this.view);return o.qy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?o.qy`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=n.IN.state,t="Connect"===e,r="ApproveTransaction"===e||"UpgradeToSmartAccount"===e||"ConnectingSiwe"===e;return"Account"===e?o.qy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,a.J)(this.network?.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,a.J)(n.$m.getNetworkImage(this.network))}
      ></wui-select>`:this.showBack&&!r?o.qy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:o.qy`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(n.En.sendEvent({type:"track",event:"CLICK_NETWORKS"}),n.IN.push("Networks"))}isAllowedNetworkSwitch(){const e=n.WB.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,r=e?.find((({id:e})=>e===this.network?.id));return t||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=n.IN.state;let t=T.Next;e.length<this.prevHistoryLength&&(t=T.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){const{history:e}=n.IN.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){n.IN.goBack()}};ni.styles=ei,ti([(0,s.wk)()],ni.prototype,"heading",void 0),ti([(0,s.wk)()],ni.prototype,"network",void 0),ti([(0,s.wk)()],ni.prototype,"buffering",void 0),ti([(0,s.wk)()],ni.prototype,"showBack",void 0),ti([(0,s.wk)()],ni.prototype,"prevHistoryLength",void 0),ti([(0,s.wk)()],ni.prototype,"view",void 0),ti([(0,s.wk)()],ni.prototype,"viewDirection",void 0),ti([(0,s.wk)()],ni.prototype,"headerText",void 0),ni=ti([(0,i.customElement)("w3m-header")],ni);var oi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let si=class extends o.WF{constructor(){super(...arguments),this.data=[]}render(){return o.qy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>o.qy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>o.qy`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};oi([(0,s.MZ)({type:Array})],si.prototype,"data",void 0),si=oi([(0,i.customElement)("w3m-help-widget")],si);const ai=o.AH`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var ci=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let li=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return o.qy`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?o.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:o.qy`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await n.Np._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return o.qy`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return o.qy`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return o.qy`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};li.styles=[ai],ci([(0,s.MZ)({type:Boolean})],li.prototype,"disabled",void 0),ci([(0,s.MZ)()],li.prototype,"color",void 0),ci([(0,s.MZ)()],li.prototype,"label",void 0),ci([(0,s.MZ)()],li.prototype,"purchaseValue",void 0),ci([(0,s.MZ)()],li.prototype,"purchaseCurrency",void 0),ci([(0,s.MZ)()],li.prototype,"date",void 0),ci([(0,s.MZ)({type:Boolean})],li.prototype,"completed",void 0),ci([(0,s.MZ)({type:Boolean})],li.prototype,"inProgress",void 0),ci([(0,s.MZ)({type:Boolean})],li.prototype,"failed",void 0),ci([(0,s.MZ)()],li.prototype,"onClick",void 0),ci([(0,s.MZ)()],li.prototype,"symbol",void 0),ci([(0,s.MZ)()],li.prototype,"icon",void 0),li=ci([(0,i.customElement)("w3m-onramp-activity-item")],li);const ui=o.AH`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var hi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let di=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=this.currencies?.[0],this.currencyImages=n.jQ.state.currencyImages,this.tokenImages=n.jQ.state.tokenImages,this.unsubscribe.push(n.aG.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),n.aG.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),n.aG.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),n.jQ.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){n.aG.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.selectedCurrency?.symbol||"",t=this.currencyImages[e]||this.tokenImages[e];return o.qy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?o.qy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>n.W3.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,a.J)(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:o.qy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};di.styles=ui,hi([(0,s.MZ)({type:String})],di.prototype,"type",void 0),hi([(0,s.MZ)({type:Number})],di.prototype,"value",void 0),hi([(0,s.wk)()],di.prototype,"currencies",void 0),hi([(0,s.wk)()],di.prototype,"selectedCurrency",void 0),hi([(0,s.wk)()],di.prototype,"currencyImages",void 0),hi([(0,s.wk)()],di.prototype,"tokenImages",void 0),di=hi([(0,i.customElement)("w3m-onramp-input")],di);const fi=o.AH`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var pi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gi=class extends o.WF{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return o.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${(0,a.J)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?o.qy`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:o.qy`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){const e=n.WB.getAllRequestedCaipNetworks(),t=e?.filter((e=>e?.assets?.imageId))?.slice(0,5);return o.qy`
      <wui-flex class="networks">
        ${t?.map((e=>o.qy`
            <wui-flex class="network-icon">
              <wui-image src=${(0,a.J)(n.$m.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};gi.styles=[fi],pi([(0,s.MZ)({type:Boolean})],gi.prototype,"disabled",void 0),pi([(0,s.MZ)()],gi.prototype,"color",void 0),pi([(0,s.MZ)()],gi.prototype,"name",void 0),pi([(0,s.MZ)()],gi.prototype,"label",void 0),pi([(0,s.MZ)()],gi.prototype,"feeRange",void 0),pi([(0,s.MZ)({type:Boolean})],gi.prototype,"loading",void 0),pi([(0,s.MZ)()],gi.prototype,"onClick",void 0),gi=pi([(0,i.customElement)("w3m-onramp-provider-item")],gi);const mi=o.AH`
  wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var wi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let yi=class extends o.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox;return e||t?r?null:o.qy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=n.Hd.state;return e?o.qy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=n.Hd.state;return e?o.qy`<a href=${e}>Privacy Policy</a>`:null}};yi.styles=[mi],yi=wi([(0,i.customElement)("w3m-legal-footer")],yi);const vi=o.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var bi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xi=class extends o.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state,r=n.Hd.state.features?.legalCheckbox;return(e||t)&&r?o.qy`
      <wui-checkbox data-testid="wui-checkbox">
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=n.Hd.state;return e?o.qy`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=n.Hd.state;return e?o.qy`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}};xi.styles=[vi],xi=bi([(0,i.customElement)("w3m-legal-checkbox")],xi);const Ai=o.AH`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var ki=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _i=class extends o.WF{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:s,homepage:a}=this.wallet,c=n.wE.isMobile(),l=n.wE.isIos(),u=n.wE.isAndroid(),h=[t,r,a,s].filter(Boolean).length>1,d=i.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return h&&!c?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>n.IN.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!h&&a?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&l?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&u?o.qy`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&n.wE.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&n.wE.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&n.wE.openHref(this.wallet.homepage,"_blank")}};_i.styles=[Ai],ki([(0,s.MZ)({type:Object})],_i.prototype,"wallet",void 0),_i=ki([(0,i.customElement)("w3m-mobile-download-links")],_i);const Ci=o.AH`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var Ei=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Si=class extends o.WF{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=n.Hd.state;return e||t?o.qy`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return o.qy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){n.En.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.IN.push("WhatIsABuy")}};Si.styles=[Ci],Si=Ei([(0,i.customElement)("w3m-onramp-providers-footer")],Si);const Ii=o.AH`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Mi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Ti={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Ni=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=n.Pt.state.open,this.unsubscribe.push(n.Pt.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t,svg:r}=n.Pt.state,i=Ti[t],{icon:s,iconColor:a}=r??i??{};return o.qy`
      <wui-snackbar
        message=${e}
        backgroundColor=${i?.backgroundColor}
        iconColor=${a}
        icon=${s}
        .loading=${"loading"===t}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>n.Pt.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Ni.styles=Ii,Mi([(0,s.wk)()],Ni.prototype,"open",void 0),Ni=Mi([(0,i.customElement)("w3m-snackbar")],Ni);const Pi=o.AH`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`;var Oi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Ri={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let Bi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=n.hG.state.open,this.onOpen(!0),this.unsubscribe.push(n.hG.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=n.hG.state,r=Ri[t];return o.qy`
      <wui-alertbar
        message=${e}
        backgroundColor=${r?.backgroundColor}
        iconColor=${r?.iconColor}
        icon=${r?.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Bi.styles=Pi,Oi([(0,s.wk)()],Bi.prototype,"open",void 0),Bi=Oi([(0,i.customElement)("w3m-alertbar")],Bi);const Li=o.AH`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Ui=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ji=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.formRef=(0,be._)(),this.connectors=n.aK.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.email="",this.loading=!1,this.error="",this.walletGuide="get-started",this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=e.find((e=>"AUTH"===e.type))})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.formRef.value?.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=n.Hd.state.features?.email;return this.authConnector&&e?o.qy`
      <form ${(0,be.K)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${(0,a.J)(this.tabIdx)}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()} ${this.separatorTemplate()}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?o.qy`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}separatorTemplate(){const e=n.Hd.state.features?.socials,t=this.connectors.length>1,r=n.Hd.state.enableWallets,i=n.Hd.state.features?.emailShowWallets;return(e&&e.length||i||!t||!r)&&"get-started"===this.walletGuide||e&&e.length>0?null:o.qy`
      <wui-flex
        data-testid="w3m-email-login-or-separator"
        .padding=${["xxs","0","0","0"]}
      >
        <wui-separator text="or"></wui-separator>
      </wui-flex>
    `}loadingTemplate(){return this.loading?o.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}templateError(){return this.error?o.qy`<wui-text variant="tiny-500" color="error-100">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){if([ae.oU.CHAIN.EVM,ae.oU.CHAIN.SOLANA].find((e=>e===n.WB.state.activeChain)))try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=n.aK.getAuthConnector();if(!t)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:r}=await t.provider.connectEmail({email:this.email});n.En.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===r?(n.En.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),n.IN.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===r&&n.IN.push("EmailVerifyDevice",{email:this.email})}catch(e){const t=n.wE.parseError(e);t?.includes("Invalid email")?this.error="Invalid email. Try again.":n.Pt.showError(e)}finally{this.loading=!1}else n.IN.push("SwitchActiveChain",{switchToChain:ae.oU.CHAIN.EVM})}onFocusEvent(){n.En.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};ji.styles=Li,Ui([(0,s.MZ)()],ji.prototype,"tabIdx",void 0),Ui([(0,s.wk)()],ji.prototype,"connectors",void 0),Ui([(0,s.wk)()],ji.prototype,"authConnector",void 0),Ui([(0,s.wk)()],ji.prototype,"email",void 0),Ui([(0,s.wk)()],ji.prototype,"loading",void 0),Ui([(0,s.wk)()],ji.prototype,"error",void 0),Ui([(0,s.MZ)()],ji.prototype,"walletGuide",void 0),ji=Ui([(0,i.customElement)("w3m-email-login-widget")],ji);const Di=o.AH`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: 24px;
    transition: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var zi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.caipAddress=n.Uj.state.caipAddress,this.address=n.wE.getPlainAddress(n.Uj.state.caipAddress),this.allAccounts=n.Uj.state.allAccounts,this.profileImage=n.Uj.state.profileImage,this.profileName=n.Uj.state.profileName,this.disconnecting=!1,this.balance=n.Uj.state.balance,this.balanceSymbol=n.Uj.state.balanceSymbol,this.features=n.Hd.state.features,this.unsubscribe.push(n.Uj.subscribeKey("caipAddress",(e=>{this.address=n.wE.getPlainAddress(e),this.caipAddress=e})),n.Uj.subscribeKey("balance",(e=>this.balance=e)),n.Uj.subscribeKey("balanceSymbol",(e=>this.balanceSymbol=e)),n.Uj.subscribeKey("profileName",(e=>this.profileName=e)),n.Uj.subscribeKey("profileImage",(e=>this.profileImage=e)),n.Hd.subscribeKey("features",(e=>this.features=e)),n.Uj.subscribeKey("allAccounts",(e=>{this.allAccounts=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.caipAddress)return null;const e=n.WB.state.activeChain===ae.oU.CHAIN.EVM&&this.allAccounts.length>1;return o.qy`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        ${e?this.multiAccountTemplate():this.singleAccountTemplate()}
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-200">
            ${n.wE.formatBalance(this.balance,this.balanceSymbol)}
          </wui-text>
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.onrampTemplate()} ${this.swapsTemplate()} ${this.activityTemplate()}
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const e=this.features?.onramp;return e?o.qy`
      <wui-list-item
        data-testid="w3m-account-default-onramp-button"
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}activityTemplate(){const e=n.WB.state.activeChain===ae.oU.CHAIN.SOLANA;return o.qy` <wui-list-item
      iconVariant="blue"
      icon="clock"
      iconSize="sm"
      ?chevron=${!e}
      ?disabled=${e}
      @click=${this.onTransactions.bind(this)}
    >
      <wui-text variant="paragraph-500" color="fg-100" ?disabled=${e}> Activity </wui-text>
      ${e?o.qy`<wui-tag variant="main">Coming soon</wui-tag>`:""}
    </wui-list-item>`}swapsTemplate(){const e=this.features?.swaps,t=n.WB.state.activeChain===ae.oU.CHAIN.SOLANA;return!e||t?null:o.qy`
      <wui-list-item
        iconVariant="blue"
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Swap</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const e=n.iT.getConnectedConnector(),t=n.aK.getAuthConnector(),{origin:r}=location;return!t||"ID_AUTH"!==e||r.includes(n.oU.SECURE_SITE)?null:o.qy`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleSwitchAccountsView(){n.IN.push("SwitchAddress")}handleClickPay(){n.IN.push("OnRampProviders")}handleClickSwap(){n.IN.push("Swap")}explorerBtnTemplate(){return n.Uj.state.addressExplorerUrl?o.qy`
      <wui-button size="md" variant="neutral" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}singleAccountTemplate(){return o.qy`
      <wui-avatar
        alt=${(0,a.J)(this.caipAddress)}
        address=${(0,a.J)(n.wE.getPlainAddress(this.caipAddress))}
        imageSrc=${(0,a.J)(null===this.profileImage?void 0:this.profileImage)}
        data-testid="single-account-avatar"
      ></wui-avatar>
      <wui-flex flexDirection="column" alignItems="center">
        <wui-flex gap="3xs" alignItems="center" justifyContent="center">
          <wui-text variant="large-600" color="fg-100">
            ${this.profileName?i.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):i.UiHelperUtil.getTruncateString({string:this.address||"",charsStart:4,charsEnd:4,truncate:"middle"})}
          </wui-text>
          <wui-icon-link
            size="md"
            icon="copy"
            iconColor="fg-200"
            @click=${this.onCopyAddress}
          ></wui-icon-link> </wui-flex
      ></wui-flex>
    `}multiAccountTemplate(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=this.allAccounts.find((e=>e.address===this.address)),t=n.Uj.state.addressLabels.get(this.address);return o.qy`
      <wui-profile-button-v2
        .onProfileClick=${this.handleSwitchAccountsView.bind(this)}
        address=${(0,a.J)(this.address)}
        icon="${e?.type===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT&&n.WB.state.activeChain===ae.oU.CHAIN.EVM?"lightbulb":"mail"}"
        avatarSrc=${(0,a.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${(0,a.J)(t||this.profileName)}
        .onCopyClick=${this.onCopyAddress.bind(this)}
      ></wui-profile-button-v2>
    `}onCopyAddress(){try{this.address&&(n.wE.copyToClopboard(this.address),n.Pt.showSuccess("Address copied"))}catch{n.Pt.showError("Failed to copy")}}onTransactions(){n.En.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.IN.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await n.x4.disconnect(),n.En.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),n.W3.close()}catch{n.En.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),n.Pt.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const e=n.Uj.state.addressExplorerUrl;e&&n.wE.openHref(e,"_blank")}onGoToUpgradeView(){n.En.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),n.IN.push("UpgradeEmailWallet")}};Wi.styles=Di,zi([(0,s.wk)()],Wi.prototype,"caipAddress",void 0),zi([(0,s.wk)()],Wi.prototype,"address",void 0),zi([(0,s.wk)()],Wi.prototype,"allAccounts",void 0),zi([(0,s.wk)()],Wi.prototype,"profileImage",void 0),zi([(0,s.wk)()],Wi.prototype,"profileName",void 0),zi([(0,s.wk)()],Wi.prototype,"disconnecting",void 0),zi([(0,s.wk)()],Wi.prototype,"balance",void 0),zi([(0,s.wk)()],Wi.prototype,"balanceSymbol",void 0),zi([(0,s.wk)()],Wi.prototype,"features",void 0),Wi=zi([(0,i.customElement)("w3m-account-default-widget")],Wi);const $i=o.AH`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var qi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Hi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.address=n.Uj.state.address,this.profileImage=n.Uj.state.profileImage,this.profileName=n.Uj.state.profileName,this.smartAccountDeployed=n.Uj.state.smartAccountDeployed,this.network=n.WB.state.activeCaipNetwork,this.currentTab=n.Uj.state.currentTab,this.tokenBalance=n.Uj.state.tokenBalance,this.preferredAccountType=n.Uj.state.preferredAccountType,this.features=n.Hd.state.features,this.unsubscribe.push(n.Uj.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):n.W3.close()})),n.WB.subscribeKey("activeCaipNetwork",(e=>this.network=e)),n.Hd.subscribeKey("features",(e=>this.features=e))),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearInterval(this.watchTokenBalance)}firstUpdated(){n.Uj.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=n.$m.getNetworkImage(this.network);return o.qy`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.network&&o.qy`<wui-network-icon .network=${this.network}></wui-network-icon>`}
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${(0,a.J)(this.address)}
        networkSrc=${(0,a.J)(e)}
        icon="chevronBottom"
        avatarSrc=${(0,a.J)(this.profileImage?this.profileImage:void 0)}
        profileName=${this.profileName}
        data-testid="w3m-profile-button"
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <w3m-tooltip-trigger text="Buy">
          <wui-icon-button
            data-testid="wallet-features-onramp-button"
            @click=${this.onBuyClick.bind(this)}
            icon="card"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
        ${this.swapsTemplate()}
        <w3m-tooltip-trigger text="Receive">
          <wui-icon-button
            data-testid="wallet-features-receive-button"
            @click=${this.onReceiveClick.bind(this)}
            icon="arrowBottomCircle"
          >
          </wui-icon-button>
        </w3m-tooltip-trigger>
        <w3m-tooltip-trigger text="Send">
          <wui-icon-button
            data-testid="wallet-features-send-button"
            @click=${this.onSendClick.bind(this)}
            icon="send"
          ></wui-icon-button>
        </w3m-tooltip-trigger>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth=${n.wE.isMobile()&&window.innerWidth<430?(window.innerWidth-48)/3+"px":"104px"}
        .tabs=${I}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}swapsTemplate(){const e=this.features?.swaps;return e?o.qy`
      <w3m-tooltip-trigger text="Swap">
        <wui-icon-button
          data-testid="wallet-features-swap-button"
          @click=${this.onSwapClick.bind(this)}
          icon="recycleHorizontal"
        >
        </wui-icon-button>
      </w3m-tooltip-trigger>
    `:null}watchSwapValues(){this.watchTokenBalance=setInterval((()=>n.Uj.fetchTokenBalance()),1e4)}listContentTemplate(){return 0===this.currentTab?o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:1===this.currentTab?o.qy`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:2===this.currentTab?o.qy`<w3m-account-activity-widget></w3m-account-activity-widget>`:o.qy`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){const e=n.wE.calculateBalance(this.tokenBalance),{dollars:t="0",pennies:r="00"}=n.wE.formatTokenBalance(e);return o.qy`<wui-balance dollars=${t} pennies=${r}></wui-balance>`}return o.qy`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!n.WB.checkIfSmartAccountEnabled()||this.preferredAccountType!==D.Vl.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:o.qy` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){n.Uj.setCurrentTab(e)}onProfileButtonClick(){n.IN.push("Profile")}onBuyClick(){n.IN.push("OnRampProviders")}onSwapClick(){this.network?.caipNetworkId&&!n.oU.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?n.IN.push("UnsupportedChain",{swapUnsupportedChain:!0}):(n.En.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.IN.push("Swap"))}onReceiveClick(){n.IN.push("WalletReceive")}onSendClick(){n.En.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:this.network?.caipNetworkId||"",isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.IN.push("WalletSend")}onUpdateToSmartAccount(){n.IN.push("UpgradeToSmartAccount")}};Hi.styles=$i,qi([(0,s.wk)()],Hi.prototype,"watchTokenBalance",void 0),qi([(0,s.wk)()],Hi.prototype,"address",void 0),qi([(0,s.wk)()],Hi.prototype,"profileImage",void 0),qi([(0,s.wk)()],Hi.prototype,"profileName",void 0),qi([(0,s.wk)()],Hi.prototype,"smartAccountDeployed",void 0),qi([(0,s.wk)()],Hi.prototype,"network",void 0),qi([(0,s.wk)()],Hi.prototype,"currentTab",void 0),qi([(0,s.wk)()],Hi.prototype,"tokenBalance",void 0),qi([(0,s.wk)()],Hi.prototype,"preferredAccountType",void 0),qi([(0,s.wk)()],Hi.prototype,"features",void 0),Hi=qi([(0,i.customElement)("w3m-account-wallet-features-widget")],Hi);const Fi=o.AH`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var Ki=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zi=class extends o.WF{render(){return o.qy`<w3m-activity-list page="account"></w3m-activity-list>`}};Zi.styles=Fi,Zi=Ki([(0,i.customElement)("w3m-account-activity-widget")],Zi);const Vi=o.AH`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Yi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gi=class extends o.WF{render(){return o.qy`${this.nftTemplate()}`}nftTemplate(){return o.qy` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">Coming soon</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Stay tuned for our upcoming NFT feature</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive funds</wui-link>
    </wui-flex>`}onReceiveClick(){n.IN.push("WalletReceive")}};Gi.styles=Vi,Gi=Yi([(0,i.customElement)("w3m-account-nfts-widget")],Gi);const Ji=o.AH`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Qi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xi=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tokenBalance=n.Uj.state.tokenBalance,this.unsubscribe.push(n.Uj.subscribe((e=>{this.tokenBalance=e.tokenBalance})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?o.qy`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:o.qy` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){return this.tokenBalance?.map((e=>o.qy`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`))}onReceiveClick(){n.IN.push("WalletReceive")}onBuyClick(){n.En.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),n.IN.push("OnRampProviders")}};Xi.styles=Ji,Qi([(0,s.wk)()],Xi.prototype,"tokenBalance",void 0),Xi=Qi([(0,i.customElement)("w3m-account-tokens-widget")],Xi);const en=o.AH`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var tn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const rn="last-transaction";let nn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=n.WB.state.activeCaipAddress,this.transactionsByYear=n.WC.state.transactionsByYear,this.loading=n.WC.state.loading,this.empty=n.WC.state.empty,this.next=n.WC.state.next,n.WC.clearCursor(),this.unsubscribe.push(n.WB.subscribeKey("activeCaipAddress",(e=>{e&&this.caipAddress!==e&&(n.WC.resetTransactions(),n.WC.fetchTransactions(e)),this.caipAddress=e})),n.WB.subscribeKey("activeCaipNetwork",(()=>{this.updateTransactionView()})),n.WC.subscribe((e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return o.qy` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){const e=n.WB.state.activeCaipNetwork?.caipNetworkId;n.WC.state.lastNetworkInView!==e&&(n.WC.resetTransactions(),this.caipAddress&&n.WC.fetchTransactions(n.wE.getPlainAddress(this.caipAddress))),n.WC.setLastNetworkInView(e)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map((e=>{const t=parseInt(e,10),r=new Array(12).fill(null).map(((e,r)=>{const n=i.TransactionUtil.getTransactionGroupTitle(t,r),o=this.transactionsByYear[t]?.[r];return{groupTitle:n,transactions:o}})).filter((({transactions:e})=>e)).reverse();return r.map((({groupTitle:e,transactions:t},i)=>{const n=i===r.length-1;return t?o.qy`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${n?"true":"false"}"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${e}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(t,n)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(e,t){const{date:r,descriptions:n,direction:s,isAllNFT:a,images:c,status:l,transfers:u,type:h}=this.getTransactionListItemProps(e),d=u?.length>1;return 2===u?.length&&!a?o.qy`
        <wui-transaction-list-item
          date=${r}
          .direction=${s}
          id=${t&&this.next?rn:""}
          status=${l}
          type=${h}
          .images=${c}
          .descriptions=${n}
        ></wui-transaction-list-item>
      `:d?u.map(((e,n)=>{const s=i.TransactionUtil.getTransferDescription(e),a=t&&n===u.length-1;return o.qy` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${a&&this.next?rn:""}
          status=${l}
          type=${h}
          .onlyDirectionIcon=${!0}
          .images=${[c[n]]}
          .descriptions=${[s]}
        ></wui-transaction-list-item>`})):o.qy`
      <wui-transaction-list-item
        date=${r}
        .direction=${s}
        id=${t&&this.next?rn:""}
        status=${l}
        type=${h}
        .images=${c}
        .descriptions=${n}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map(((r,i)=>{const n=t&&i===e.length-1;return o.qy`${this.templateRenderTransaction(r,n)}`}))}emptyStateActivity(){return o.qy`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return o.qy`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return"account"===this.page?o.qy`${this.emptyStateAccount()}`:o.qy`${this.emptyStateActivity()}`}templateLoading(){return"activity"===this.page?Array(7).fill(o.qy` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e)):null}onReceiveClick(){n.IN.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=n.Hd.state;this.paginationObserver=new IntersectionObserver((([t])=>{t?.isIntersecting&&!this.loading&&(n.WC.fetchTransactions(n.wE.getPlainAddress(this.caipAddress)),n.En.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:n.wE.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:n.Uj.state.preferredAccountType===D.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){this.paginationObserver?.disconnect();const e=this.shadowRoot?.querySelector(`#${rn}`);e&&this.paginationObserver?.observe(e)}getTransactionListItemProps(e){const t=ae.rL.formatDate(e?.metadata?.minedAt),r=i.TransactionUtil.getTransactionDescriptions(e),n=e?.transfers,o=e?.transfers?.[0],s=Boolean(o)&&e?.transfers?.every((e=>Boolean(e.nft_info))),a=i.TransactionUtil.getTransactionImages(n);return{date:t,direction:o?.direction,descriptions:r,isAllNFT:s,images:a,status:e.metadata?.status,transfers:n,type:e.metadata?.operationType}}};nn.styles=en,tn([(0,s.MZ)()],nn.prototype,"page",void 0),tn([(0,s.wk)()],nn.prototype,"caipAddress",void 0),tn([(0,s.wk)()],nn.prototype,"transactionsByYear",void 0),tn([(0,s.wk)()],nn.prototype,"loading",void 0),tn([(0,s.wk)()],nn.prototype,"empty",void 0),tn([(0,s.wk)()],nn.prototype,"next",void 0),nn=tn([(0,i.customElement)("w3m-activity-list")],nn);const on=o.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var sn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let an=class extends o.WF{render(){return o.qy` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?o.qy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:o.qy`<wui-button
      size="md"
      variant="accent"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){n.IN.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return o.qy`<wui-text class="totalValue" variant="small-400" color="fg-200"
        >${e?`$${i.UiHelperUtil.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.qy` <wui-text variant="small-400" color="error-100">
          ${i.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:o.qy` <wui-text variant="small-400" color="fg-200">
        ${i.UiHelperUtil.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?o.qy`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:o.qy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){n.Rv.setTokenAmount(e.detail)}onMaxClick(){if(this.token&&void 0!==this.gasPrice){const e=void 0===this.token.address||Object.values(n.oU.NATIVE_TOKEN_ADDRESS).some((e=>this.token?.address===e)),t=ae.Se.bigNumber(this.gasPrice).shiftedBy(-this.token.quantity.decimals),r=e?ae.Se.bigNumber(this.token.quantity.numeric).minus(t):ae.Se.bigNumber(this.token.quantity.numeric);n.Rv.setTokenAmount(Number(r.toFixed(20)))}}onBuyClick(){n.IN.push("OnRampProviders")}};an.styles=on,sn([(0,s.MZ)({type:Object})],an.prototype,"token",void 0),sn([(0,s.MZ)({type:Number})],an.prototype,"sendTokenAmount",void 0),sn([(0,s.MZ)({type:Number})],an.prototype,"gasPriceInUSD",void 0),sn([(0,s.MZ)({type:Number})],an.prototype,"gasPrice",void 0),an=sn([(0,i.customElement)("w3m-input-token")],an);const cn=o.AH`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-002);
    background-color: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var ln=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let un=class extends o.WF{constructor(){super(...arguments),this.inputElementRef=(0,be._)(),this.instructionElementRef=(0,be._)(),this.instructionHidden=Boolean(this.value),this.pasting=!1,this.onDebouncedSearch=n.wE.debounce((async e=>{const t=await n.x4.getEnsAddress(e);if(n.Rv.setLoading(!1),t){n.Rv.setReceiverProfileName(e),n.Rv.setReceiverAddress(t);const r=await n.x4.getEnsAvatar(e);n.Rv.setReceiverProfileImageUrl(r||void 0)}else n.Rv.setReceiverAddress(e),n.Rv.setReceiverProfileName(void 0),n.Rv.setReceiverProfileImageUrl(void 0)}))}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){return o.qy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${(0,be.K)(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,be.K)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.value??""}
        autocomplete="off"
      >
${this.value??""}</textarea
      >
    </wui-flex>`}async focusInput(){this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",this.inputElementRef.value?.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",this.inputElementRef.value?.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();n.Rv.setReceiverAddress(e),this.focusInput()}onInputChange(e){this.pasting=!1;const t=e.target;t.value&&!this.instructionHidden&&this.focusInput(),n.Rv.setLoading(!0),this.onDebouncedSearch(t.value)}};un.styles=cn,ln([(0,s.MZ)()],un.prototype,"value",void 0),ln([(0,s.wk)()],un.prototype,"instructionHidden",void 0),ln([(0,s.wk)()],un.prototype,"pasting",void 0),un=ln([(0,i.customElement)("w3m-input-address")],un);const hn=o.AH`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-color-gray-glass-010);
  }
`;var dn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let fn=class extends o.WF{render(){return o.qy` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$${(0,a.J)(i.UiHelperUtil.formatNumberToLocalString(this.networkFee,2))}"></wui-list-content></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${i.UiHelperUtil.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){return this.caipNetwork?.name?o.qy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,a.J)(n.$m.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&n.IN.push("Networks",{network:e})}};fn.styles=hn,dn([(0,s.MZ)()],fn.prototype,"receiverAddress",void 0),dn([(0,s.MZ)({type:Object})],fn.prototype,"caipNetwork",void 0),dn([(0,s.MZ)({type:Number})],fn.prototype,"networkFee",void 0),fn=dn([(0,i.customElement)("w3m-wallet-send-details")],fn);const pn=o.AH`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var gn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let mn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.open=n.Ib.state.open,this.message=n.Ib.state.message,this.triggerRect=n.Ib.state.triggerRect,this.variant=n.Ib.state.variant,this.unsubscribe.push(n.Ib.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,o.qy`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};mn.styles=[pn],gn([(0,s.wk)()],mn.prototype,"open",void 0),gn([(0,s.wk)()],mn.prototype,"message",void 0),gn([(0,s.wk)()],mn.prototype,"triggerRect",void 0),gn([(0,s.wk)()],mn.prototype,"variant",void 0),mn=gn([(0,i.customElement)("w3m-tooltip")],mn);const wn=o.AH`
  :host {
    width: 100%;
    display: block;
  }
`;var yn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let vn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.text="",this.open=n.Ib.state.open,this.unsubscribe.push(n.IN.subscribeKey("view",(()=>{n.Ib.hide()})),n.W3.subscribeKey("open",(e=>{e||n.Ib.hide()})),n.Ib.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),n.Ib.hide()}render(){return o.qy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return o.qy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();this.open||n.Ib.showTooltip({message:this.text,triggerRect:{width:e.width,height:e.height,left:e.left,top:e.top},variant:"shade"})}onMouseLeave(e){this.contains(e.relatedTarget)||n.Ib.hide()}};vn.styles=[wn],yn([(0,s.MZ)()],vn.prototype,"text",void 0),yn([(0,s.wk)()],vn.prototype,"open",void 0),vn=yn([(0,i.customElement)("w3m-tooltip-trigger")],vn);const bn=o.AH`
  :host > wui-flex:first-child {
    margin-top: var(--wui-spacing-s);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-m)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var xn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let An=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.features=n.Hd.state.features,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),n.Hd.subscribeKey("features",(e=>this.features=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.features?.socials;return this.authConnector&&e&&e?.length?o.qy`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="xs"
        .padding=${["0","0","xs","0"]}
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
      ${this.separatorTemplate()}
    `:null}topViewTemplate(){const e=this.features?.socials;return this.authConnector&&e&&e?.length?2===e.length?o.qy` <wui-flex gap="xs">
        ${e.slice(0,2).map((e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></wui-logo-select>`))}
      </wui-flex>`:o.qy` <wui-list-social
      data-testid=${`social-selector-${e?.[0]}`}
      @click=${()=>{this.onSocialClick(e?.[0])}}
      logo=${(0,a.J)(e[0])}
      align="center"
      name=${`Continue with ${e[0]}`}
      tabIdx=${(0,a.J)(this.tabIdx)}
    ></wui-list-social>`:null}bottomViewTemplate(){const e=this.features?.socials;return this.authConnector&&e&&e?.length?e.length<=2?null:e.length>6?o.qy`<wui-flex gap="xs">
        ${e.slice(1,5).map((e=>o.qy`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></wui-logo-select>`))}
        <wui-logo-select
          logo="more"
          tabIdx=${(0,a.J)(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
        ></wui-logo-select>
      </wui-flex>`:o.qy`<wui-flex gap="xs">
      ${e.slice(1,e.length).map((e=>o.qy`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></wui-logo-select>`))}
    </wui-flex>`:null}separatorTemplate(){const e=this.connectors.find((e=>"walletConnect"===e.id)),t=n.Hd.state.enableWallets;return e&&t||"explore"===this.walletGuide?o.qy`<wui-separator text="or"></wui-separator>`:null}onMoreSocialsClick(){n.IN.push("ConnectSocials")}async onSocialClick(e){if(e&&(n.Uj.setSocialProvider(e,n.WB.state.activeChain),n.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===ee.iV.Farcaster){n.IN.push("ConnectingFarcaster");const e=n.aK.getAuthConnector();if(e&&!n.Uj.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();n.Uj.setFarcasterUrl(t,n.WB.state.activeChain)}catch(e){n.IN.goBack(),n.Pt.showError(e)}}else{n.IN.push("ConnectingSocial");const t=n.aK.getAuthConnector();this.popupWindow=n.wE.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){const{uri:r}=await t.provider.getSocialRedirectUri({provider:e});if(!this.popupWindow||!r)throw this.popupWindow?.close(),new Error("Something went wrong");n.Uj.setSocialWindow(this.popupWindow,n.WB.state.activeChain),this.popupWindow.location.href=r}}catch(e){this.popupWindow?.close(),n.Pt.showError("Something went wrong")}}}};An.styles=bn,xn([(0,s.MZ)()],An.prototype,"walletGuide",void 0),xn([(0,s.MZ)()],An.prototype,"tabIdx",void 0),xn([(0,s.wk)()],An.prototype,"connectors",void 0),xn([(0,s.wk)()],An.prototype,"features",void 0),xn([(0,s.wk)()],An.prototype,"authConnector",void 0),An=xn([(0,i.customElement)("w3m-social-login-widget")],An);var kn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _n=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        <w3m-connector-list tabIdx=${(0,a.J)(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${(0,a.J)(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};kn([(0,s.MZ)()],_n.prototype,"tabIdx",void 0),_n=kn([(0,i.customElement)("w3m-wallet-login-list")],_n);const Cn=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var En=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Sn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.features=n.Hd.state.features,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),n.Hd.subscribeKey("features",(e=>this.features=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.features?.socials;return this.authConnector&&e&&e?.length?o.qy` <wui-flex flexDirection="column" gap="xs">
      ${e.map((e=>o.qy`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            name=${e}
            logo=${e}
            tabIdx=${(0,a.J)(this.tabIdx)}
          ></wui-list-social>`))}
    </wui-flex>`:null}async onSocialClick(e){if(e&&(n.Uj.setSocialProvider(e,n.WB.state.activeChain),n.En.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}})),e===ee.iV.Farcaster){n.IN.push("ConnectingFarcaster");const e=n.aK.getAuthConnector();if(e&&!n.Uj.state.farcasterUrl)try{const{url:t}=await e.provider.getFarcasterUri();n.Uj.setFarcasterUrl(t,n.WB.state.activeChain)}catch(e){n.IN.goBack(),n.Pt.showError(e)}}else{n.IN.push("ConnectingSocial");const t=n.aK.getAuthConnector();this.popupWindow=n.wE.returnOpenHref("","popupWindow","width=600,height=800,scrollbars=yes");try{if(t&&e){const{uri:r}=await t.provider.getSocialRedirectUri({provider:e});if(!this.popupWindow||!r)throw this.popupWindow?.close(),new Error("Something went wrong");n.Uj.setSocialWindow(this.popupWindow,n.WB.state.activeChain),this.popupWindow.location.href=r}}catch(e){this.popupWindow?.close(),n.Pt.showError("Something went wrong")}}}};Sn.styles=Cn,En([(0,s.MZ)()],Sn.prototype,"tabIdx",void 0),En([(0,s.wk)()],Sn.prototype,"connectors",void 0),En([(0,s.wk)()],Sn.prototype,"authConnector",void 0),En([(0,s.wk)()],Sn.prototype,"features",void 0),Sn=En([(0,i.customElement)("w3m-social-login-list")],Sn);var In=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Mn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"ANNOUNCED"===e.type));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>e.info?.rdns&&n.Np.state.excludedRDNS&&n.Np.state.excludedRDNS.includes(e?.info?.rdns)?null:o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getConnectorImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnector(e)}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              .installed=${!0}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){"walletConnect"===e.id?n.wE.isMobile()?n.IN.push("AllWallets"):n.IN.push("ConnectingWalletConnect"):n.IN.push("ConnectingExternal",{connector:e})}};In([(0,s.MZ)()],Mn.prototype,"tabIdx",void 0),In([(0,s.wk)()],Mn.prototype,"connectors",void 0),Mn=In([(0,i.customElement)("w3m-connect-announced-widget")],Mn);var Tn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Nn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{customWallets:e}=n.Hd.state;if(!e?.length)return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return o.qy`<wui-flex flexDirection="column" gap="xs">
      ${t.map((e=>o.qy`
          <wui-list-wallet
            imageSrc=${(0,a.J)(n.$m.getWalletImage(e))}
            name=${e.name??"Unknown"}
            @click=${()=>this.onConnectWallet(e)}
            data-testid=${`wallet-selector-${e.id}`}
            tabIdx=${(0,a.J)(this.tabIdx)}
          >
          </wui-list-wallet>
        `))}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=n.iT.getRecentWallets(),r=this.connectors.map((e=>e.info?.rdns)).filter(Boolean),i=t.map((e=>e.rdns)).filter(Boolean),o=r.concat(i);if(o.includes("io.metamask.mobile")&&n.wE.isMobile()){const e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}return e.filter((e=>!o.includes(String(e?.rdns))))}onConnectWallet(e){n.IN.push("ConnectingWalletConnect",{wallet:e})}};Tn([(0,s.MZ)()],Nn.prototype,"tabIdx",void 0),Tn([(0,s.wk)()],Nn.prototype,"connectors",void 0),Nn=Tn([(0,i.customElement)("w3m-connect-custom-widget")],Nn);var Pn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let On=class extends o.WF{constructor(){super(...arguments),this.unsubscribe=[],this.tabIdx=void 0}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{featured:e}=n.Np.state;if(!e.length)return this.style.cssText="display: none",null;const t=vr.filterOutDuplicateWallets(e);return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map((e=>o.qy`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${(0,a.J)(n.$m.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `}onConnectWallet(e){const t=n.aK.getConnector(e.id,e.rdns);t?n.IN.push("ConnectingExternal",{connector:t}):n.IN.push("ConnectingWalletConnect",{wallet:e})}};Pn([(0,s.MZ)()],On.prototype,"tabIdx",void 0),On=Pn([(0,i.customElement)("w3m-connect-featured-widget")],On);var Rn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Bn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"INJECTED"===e.type));return!e?.length||1===e.length&&"Browser Wallet"===e[0]?.name&&!n.wE.isMobile()?(this.style.cssText="display: none",null):o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>{if(!n.wE.isMobile()&&"Browser Wallet"===e.name)return null;const t=e.info?.rdns;return t||n.x4.checkInstalled(void 0)?t&&n.Np.state.excludedRDNS&&n.Np.state.excludedRDNS.includes(t)?null:o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `:(this.style.cssText="display: none",null)}))}
      </wui-flex>
    `}onConnector(e){n.WB.setActiveConnector(e),n.IN.push("ConnectingExternal",{connector:e})}};Rn([(0,s.MZ)()],Bn.prototype,"tabIdx",void 0),Rn([(0,s.wk)()],Bn.prototype,"connectors",void 0),Bn=Rn([(0,i.customElement)("w3m-connect-injected-widget")],Bn);var Ln=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Un=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"MULTI_CHAIN"===e.type&&"WalletConnect"!==e.name));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){n.WB.setActiveConnector(e),n.IN.push("ConnectingMultiChain")}};Ln([(0,s.MZ)()],Un.prototype,"tabIdx",void 0),Ln([(0,s.wk)()],Un.prototype,"connectors",void 0),Un=Ln([(0,i.customElement)("w3m-connect-multi-chain-widget")],Un);var jn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Dn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.filter((e=>"EXTERNAL"===e.type)).filter((e=>"coinbaseWalletSDK"!==e.id));return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){n.IN.push("ConnectingExternal",{connector:e})}};jn([(0,s.MZ)()],Dn.prototype,"tabIdx",void 0),jn([(0,s.wk)()],Dn.prototype,"connectors",void 0),Dn=jn([(0,i.customElement)("w3m-connect-external-widget")],Dn);var zn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wn=class extends o.WF{constructor(){super(...arguments),this.tabIdx=void 0}render(){const e=n.iT.getRecentWallets();return e?.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){n.IN.push("ConnectingWalletConnect",{wallet:e})}};zn([(0,s.MZ)()],Wn.prototype,"tabIdx",void 0),Wn=zn([(0,i.customElement)("w3m-connect-recent-widget")],Wn);var $n=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let qn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.connectors.find((e=>"walletConnect"===e.id)))return null;const{recommended:e}=n.Np.state,{customWallets:t,featuredWalletIds:r}=n.Hd.state,{connectors:i}=n.aK.state,s=n.iT.getRecentWallets(),c=i.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(r||t||!e.length)return this.style.cssText="display: none",null;const l=c.length+s.length,u=Math.max(0,2-l),h=vr.filterOutDuplicateWallets(e).slice(0,u);return h.length?o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${h.map((e=>o.qy`
            <wui-list-wallet
              imageSrc=${(0,a.J)(n.$m.getWalletImage(e))}
              name=${e?.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${(0,a.J)(this.tabIdx)}
            >
            </wui-list-wallet>
          `))}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){const t=n.aK.getConnector(e.id,e.rdns);t?n.IN.push("ConnectingExternal",{connector:t}):n.IN.push("ConnectingWalletConnect",{wallet:e})}};$n([(0,s.MZ)()],qn.prototype,"tabIdx",void 0),$n([(0,s.wk)()],qn.prototype,"connectors",void 0),qn=$n([(0,i.customElement)("w3m-connect-recommended-widget")],qn);var Hn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Fn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(n.wE.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find((e=>"walletConnect"===e.id));return e?o.qy`
      <wui-list-wallet
        imageSrc=${(0,a.J)(n.$m.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${(0,a.J)(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:(this.style.cssText="display: none",null)}onConnector(e){n.WB.setActiveConnector(e),n.IN.push("ConnectingWalletConnect")}};Hn([(0,s.MZ)()],Fn.prototype,"tabIdx",void 0),Hn([(0,s.wk)()],Fn.prototype,"connectors",void 0),Fn=Hn([(0,i.customElement)("w3m-connect-walletconnect-widget")],Fn);const Kn=o.AH`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`;var Zn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Vn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{custom:e,recent:t,announced:r,injected:i,multiChain:s,recommended:c,featured:l,external:u}=this.getConnectorsByType(),h=n.Hd.state.enableWalletConnect;return o.qy`
      <wui-flex flexDirection="column" gap="xs">
        ${h?o.qy`<w3m-connect-walletconnect-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-walletconnect-widget>`:null}
        ${t.length?o.qy`<w3m-connect-recent-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-recent-widget>`:null}
        ${s.length?o.qy`<w3m-connect-multi-chain-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-multi-chain-widget>`:null}
        ${r.length?o.qy`<w3m-connect-announced-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-announced-widget>`:null}
        ${i.length?o.qy`<w3m-connect-injected-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-injected-widget>`:null}
        ${l.length?o.qy`<w3m-connect-featured-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-featured-widget>`:null}
        ${e?.length?o.qy`<w3m-connect-custom-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-custom-widget>`:null}
        ${u.length?o.qy`<w3m-connect-external-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-external-widget>`:null}
        ${c.length?o.qy`<w3m-connect-recommended-widget
              tabIdx=${(0,a.J)(this.tabIdx)}
            ></w3m-connect-recommended-widget>`:null}
      </wui-flex>
    `}getConnectorsByType(){const{featured:e,recommended:t}=n.Np.state,{customWallets:r}=n.Hd.state,i=n.iT.getRecentWallets(),o=vr.filterOutDuplicateWallets(t),s=vr.filterOutDuplicateWallets(e),a=this.connectors.filter((e=>"MULTI_CHAIN"===e.type)),c=this.connectors.filter((e=>"ANNOUNCED"===e.type)),l=this.connectors.filter((e=>"INJECTED"===e.type));return{custom:r,recent:i,external:this.connectors.filter((e=>"EXTERNAL"===e.type)),multiChain:a,announced:c,injected:l,recommended:o,featured:s}}};Vn.styles=Kn,Zn([(0,s.MZ)()],Vn.prototype,"tabIdx",void 0),Zn([(0,s.wk)()],Vn.prototype,"connectors",void 0),Vn=Zn([(0,i.customElement)("w3m-connector-list")],Vn);var Yn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gn=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=n.aK.state.connectors,this.count=n.Np.state.count,this.unsubscribe.push(n.aK.subscribeKey("connectors",(e=>this.connectors=e)),n.Np.subscribeKey("count",(e=>this.count=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=n.Hd.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!n.wE.isMobile())return null;const r=n.Np.state.featured.length,i=this.count+r,s=i<10?i:10*Math.floor(i/10),c=s<i?`${s}+`:`${s}`;return o.qy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${(0,a.J)(this.tabIdx)}
      ></wui-list-wallet>
    `}onAllWallets(){n.En.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),n.IN.push("AllWallets")}};Yn([(0,s.MZ)()],Gn.prototype,"tabIdx",void 0),Yn([(0,s.wk)()],Gn.prototype,"connectors",void 0),Yn([(0,s.wk)()],Gn.prototype,"count",void 0),Gn=Yn([(0,i.customElement)("w3m-all-wallets-widget")],Gn);var Jn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qn=class extends o.WF{constructor(){super(...arguments),this.socialProvider=n.iT.getConnectedSocialProvider(),this.socialUsername=n.iT.getConnectedSocialUsername()}render(){const e=n.iT.getConnectedConnector(),t=n.aK.getAuthConnector();if(!t||"ID_AUTH"!==e)return this.style.cssText="display: none",null;const r=t.provider.getEmail()??"";return o.qy`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon=${this.socialProvider??"mail"}
        iconSize=${this.socialProvider?"xxl":"sm"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(r,this.socialProvider)}}
      >
        <wui-text variant="paragraph-500" color="fg-100">${this.getAuthName(r)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||n.IN.push("UpdateEmailWallet",{email:e})}getAuthName(e){return this.socialUsername?"discord"===this.socialProvider&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};Qn=Jn([(0,i.customElement)("w3m-account-auth-button")],Qn);const Xn=o.AH`
  wui-flex {
    width: 100%;
  }

  .wallet-guide {
    width: 100%;
  }

  .chip-box {
    width: fit-content;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var eo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let to=class extends o.WF{constructor(){super(...arguments),this.walletGuide="get-started"}render(){return"explore"===this.walletGuide?o.qy`<wui-flex
          class="wallet-guide"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowGap="xs"
          data-testid="w3m-wallet-guide-explore"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            Looking for a self-custody wallet?
          </wui-text>

          <wui-flex class="chip-box">
            <wui-chip
              imageIcon="walletConnectLightBrown"
              icon="externalLink"
              variant="transparent"
              href="https://explorer.walletconnect.com"
              title="Visit our Explorer"
            ></wui-chip>
          </wui-flex>
        </wui-flex>`:o.qy`<wui-flex
          columnGap="4xs"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <wui-text variant="small-400" class="title" color="fg-200"
            >Haven't got a wallet?</wui-text
          >
          <wui-link
            data-testid="w3m-wallet-guide-get-started"
            color="blue-100"
            class="get-started-link"
            @click=${this.onGetStarted}
            tabIdx=${(0,a.J)(this.tabIdx)}
          >
            Get started
          </wui-link>
        </wui-flex>`}onGetStarted(){n.IN.push("Create")}};to.styles=Xn,eo([(0,s.MZ)()],to.prototype,"tabIdx",void 0),eo([(0,s.MZ)()],to.prototype,"walletGuide",void 0),to=eo([(0,i.customElement)("w3m-wallet-guide")],to);const ro=o.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var io=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let no=class extends o.WF{constructor(){super(...arguments),this.dappImageUrl=n.Hd.state.metadata?.icons,this.walletImageUrl=n.Uj.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return o.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};no.styles=ro,no=io([(0,i.customElement)("w3m-siwx-sign-message-thumbnails")],no)},7849:(e,t,r)=>{"use strict";r.r(t),r.d(t,{W3mModal:()=>u});var i=r(277),n=r(7104),o=r(2618),s=r(5707);const a=o.AH`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;r(1079);var c=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const l="scroll-lock";let u=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=i.W3.state.open,this.caipAddress=i.WB.state.activeCaipAddress,this.caipNetwork=i.WB.state.activeCaipNetwork,this.shake=i.W3.state.shake,this.initializeTheming(),i.Np.prefetch(),this.unsubscribe.push(i.W3.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),i.W3.subscribeKey("shake",(e=>this.shake=e)),i.WB.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),i.WB.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e)))),i.En.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?o.qy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
              <w3m-alertbar></w3m-alertbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){"UnsupportedChain"===i.IN.state.view||await i.UG.isSIWXCloseDisabled()?i.W3.shake():i.W3.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=i.Wn.state,r=n.UiHelperUtil.getColorTheme(t);(0,n.initializeTheming)(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),i.Pt.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=l,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${l}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;const e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",(t=>{if("Escape"===t.key)this.handleClose();else if("Tab"===t.key){const{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}}),this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}async onNewAddress(e){const t=i.wE.getPlainAddress(e);this.caipAddress=e,await i.UG.initializeIfEnabled(),t||i.W3.close()}onNewNetwork(e){if(!this.caipAddress)return this.caipNetwork=e,void i.IN.goBack();const t=this.caipNetwork?.caipNetworkId?.toString(),r=e?.caipNetworkId?.toString();t&&r&&t!==r&&"Unknown Network"!==this.caipNetwork?.name&&i.IN.goBack(),this.caipNetwork=e}};u.styles=a,c([(0,s.wk)()],u.prototype,"open",void 0),c([(0,s.wk)()],u.prototype,"caipAddress",void 0),c([(0,s.wk)()],u.prototype,"caipNetwork",void 0),c([(0,s.wk)()],u.prototype,"shake",void 0),u=c([(0,n.customElement)("w3m-modal")],u)},9017:(e,t,r)=>{"use strict";r.r(t),r.d(t,{SIWEController:()=>s,W3mConnectingSiwe:()=>Yi,W3mConnectingSiweView:()=>Xi,createSIWEConfig:()=>nn,formatMessage:()=>Ri,getAddressFromMessage:()=>$i,getChainIdFromMessage:()=>qi,getDidAddress:()=>Oi,getDidChainId:()=>Pi,mapToSIWX:()=>rn,verifySignature:()=>Hi});var i=r(4707),n=r(1285);const o=(0,n.BX)({status:"uninitialized"}),s={state:o,subscribeKey:(e,t)=>(0,i.u$)(o,e,t),subscribe:e=>(0,n.B1)(o,(()=>e(o))),_getClient(){if(!o._client)throw new Error("SIWEController client not set");return o._client},async getNonce(e){const t=this._getClient(),r=await t.getNonce(e);return this.setNonce(r),r},async getSession(){try{const e=this._getClient(),t=await e.getSession();return t&&(this.setSession(t),this.setStatus("success")),t||void 0}catch{return}},createMessage(e){const t=this._getClient().createMessage(e);return this.setMessage(t),t},async verifyMessage(e){const t=this._getClient();return await t.verifyMessage(e)},async signIn(){const e=this._getClient();return await e.signIn()},async signOut(){const e=this._getClient();await e.signOut(),this.setStatus("ready"),this.setSession(void 0),e.onSignOut?.()},onSignIn(e){const t=this._getClient();t.onSignIn?.(e)},onSignOut(){const e=this._getClient();e.onSignOut?.()},async setSIWEClient(e){o._client=(0,n.KR)(e),o.session=await this.getSession(),o.status=o.session?"success":"ready"},setNonce(e){o.nonce=e},setStatus(e){o.status=e},setMessage(e){o.message=e},setSession(e){o.session=e,o.status=e?"success":"ready"}};var a=r(277);const c={FIVE_MINUTES_IN_MS:3e5};class l{constructor(e){const{enabled:t=!0,nonceRefetchIntervalMs:r=c.FIVE_MINUTES_IN_MS,sessionRefetchIntervalMs:i=c.FIVE_MINUTES_IN_MS,signOutOnAccountChange:n=!0,signOutOnDisconnect:o=!0,signOutOnNetworkChange:s=!0,...a}=e;this.options={enabled:t,nonceRefetchIntervalMs:r,sessionRefetchIntervalMs:i,signOutOnDisconnect:o,signOutOnAccountChange:n,signOutOnNetworkChange:s},this.methods=a}async getNonce(e){const t=await this.methods.getNonce(e);if(!t)throw new Error("siweControllerClient:getNonce - nonce is undefined");return t}async getMessageParams(){return await(this.methods.getMessageParams?.())||{}}createMessage(e){const t=this.methods.createMessage(e);if(!t)throw new Error("siweControllerClient:createMessage - message is undefined");return t}async verifyMessage(e){return await this.methods.verifyMessage(e)}async getSession(){const e=await this.methods.getSession();if(!e)throw new Error("siweControllerClient:getSession - session is undefined");return e}async signIn(){await a.UG.requestSignMessage();const e=await this.methods.getSession();if(!e)throw new Error("Error verifying SIWE signature");return e}async signOut(){const e=a.UG.getSIWX();return!!e&&(await e.setSessions([]),!0)}}r(8900),r(8196),r(5391),r(6663),r(1612),r(6804),r(7052),r(204),r(774),r(3155),r(6729),r(106),r(3228);var u=r(5606),h=r(8287).Buffer;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var d=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof r.g<"u"?r.g:typeof self<"u"?self:{};var f,p={exports:{}};f=p,function(){var e="input is invalid type",t="object"==typeof window,r=t?window:{};r.JS_SHA3_NO_WINDOW&&(t=!1);var i=!t&&"object"==typeof self;!r.JS_SHA3_NO_NODE_JS&&"object"==typeof u&&u.versions&&u.versions.node?r=d:i&&(r=self);var n=!r.JS_SHA3_NO_COMMON_JS&&f.exports,o=!r.JS_SHA3_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",s="0123456789abcdef".split(""),a=[4,1024,262144,67108864],c=[0,8,16,24],l=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],h=[224,256,384,512],p=[128,256],g=["hex","buffer","arrayBuffer","array","digest"],m={128:168,256:136};(r.JS_SHA3_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),o&&(r.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var w=function(e,t,r){return function(i){return new P(e,t,e).update(i)[r]()}},y=function(e,t,r){return function(i,n){return new P(e,t,n).update(i)[r]()}},v=function(e,t,r){return function(t,i,n,o){return _["cshake"+e].update(t,i,n,o)[r]()}},b=function(e,t,r){return function(t,i,n,o){return _["kmac"+e].update(t,i,n,o)[r]()}},x=function(e,t,r,i){for(var n=0;n<g.length;++n){var o=g[n];e[o]=t(r,i,o)}return e},A=function(e,t){var r=w(e,t,"hex");return r.create=function(){return new P(e,t,e)},r.update=function(e){return r.create().update(e)},x(r,w,e,t)},k=[{name:"keccak",padding:[1,256,65536,16777216],bits:h,createMethod:A},{name:"sha3",padding:[6,1536,393216,100663296],bits:h,createMethod:A},{name:"shake",padding:[31,7936,2031616,520093696],bits:p,createMethod:function(e,t){var r=y(e,t,"hex");return r.create=function(r){return new P(e,t,r)},r.update=function(e,t){return r.create(t).update(e)},x(r,y,e,t)}},{name:"cshake",padding:a,bits:p,createMethod:function(e,t){var r=m[e],i=v(e,0,"hex");return i.create=function(i,n,o){return n||o?new P(e,t,i).bytepad([n,o],r):_["shake"+e].create(i)},i.update=function(e,t,r,n){return i.create(t,r,n).update(e)},x(i,v,e,t)}},{name:"kmac",padding:a,bits:p,createMethod:function(e,t){var r=m[e],i=b(e,0,"hex");return i.create=function(i,n,o){return new O(e,t,n).bytepad(["KMAC",o],r).bytepad([i],r)},i.update=function(e,t,r,n){return i.create(e,r,n).update(t)},x(i,b,e,t)}}],_={},C=[],E=0;E<k.length;++E)for(var S=k[E],I=S.bits,M=0;M<I.length;++M){var T=S.name+"_"+I[M];if(C.push(T),_[T]=S.createMethod(I[M],S.padding),"sha3"!==S.name){var N=S.name+I[M];C.push(N),_[N]=_[T]}}function P(e,t,r){this.blocks=[],this.s=[],this.padding=t,this.outputBits=r,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=r>>5,this.extraBytes=(31&r)>>3;for(var i=0;i<50;++i)this.s[i]=0}function O(e,t,r){P.call(this,e,t,r)}P.prototype.update=function(t){if(this.finalized)throw new Error("finalize already called");var r,i=typeof t;if("string"!==i){if("object"!==i)throw new Error(e);if(null===t)throw new Error(e);if(o&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||o&&ArrayBuffer.isView(t)))throw new Error(e);r=!0}for(var n,s,a=this.blocks,l=this.byteCount,u=t.length,h=this.blockCount,d=0,f=this.s;d<u;){if(this.reset)for(this.reset=!1,a[0]=this.block,n=1;n<h+1;++n)a[n]=0;if(r)for(n=this.start;d<u&&n<l;++d)a[n>>2]|=t[d]<<c[3&n++];else for(n=this.start;d<u&&n<l;++d)(s=t.charCodeAt(d))<128?a[n>>2]|=s<<c[3&n++]:s<2048?(a[n>>2]|=(192|s>>6)<<c[3&n++],a[n>>2]|=(128|63&s)<<c[3&n++]):s<55296||s>=57344?(a[n>>2]|=(224|s>>12)<<c[3&n++],a[n>>2]|=(128|s>>6&63)<<c[3&n++],a[n>>2]|=(128|63&s)<<c[3&n++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++d)),a[n>>2]|=(240|s>>18)<<c[3&n++],a[n>>2]|=(128|s>>12&63)<<c[3&n++],a[n>>2]|=(128|s>>6&63)<<c[3&n++],a[n>>2]|=(128|63&s)<<c[3&n++]);if(this.lastByteIndex=n,n>=l){for(this.start=n-l,this.block=a[h],n=0;n<h;++n)f[n]^=a[n];R(f),this.reset=!0}else this.start=n}return this},P.prototype.encode=function(e,t){var r=255&e,i=1,n=[r];for(r=255&(e>>=8);r>0;)n.unshift(r),r=255&(e>>=8),++i;return t?n.push(i):n.unshift(i),this.update(n),n.length},P.prototype.encodeString=function(t){var r,i=typeof t;if("string"!==i){if("object"!==i)throw new Error(e);if(null===t)throw new Error(e);if(o&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||o&&ArrayBuffer.isView(t)))throw new Error(e);r=!0}var n=0,s=t.length;if(r)n=s;else for(var a=0;a<t.length;++a){var c=t.charCodeAt(a);c<128?n+=1:c<2048?n+=2:c<55296||c>=57344?n+=3:(c=65536+((1023&c)<<10|1023&t.charCodeAt(++a)),n+=4)}return n+=this.encode(8*n),this.update(t),n},P.prototype.bytepad=function(e,t){for(var r=this.encode(t),i=0;i<e.length;++i)r+=this.encodeString(e[i]);var n=t-r%t,o=[];return o.length=n,this.update(o),this},P.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex,r=this.blockCount,i=this.s;if(e[t>>2]|=this.padding[3&t],this.lastByteIndex===this.byteCount)for(e[0]=e[r],t=1;t<r+1;++t)e[t]=0;for(e[r-1]|=2147483648,t=0;t<r;++t)i[t]^=e[t];R(i)}},P.prototype.toString=P.prototype.hex=function(){this.finalize();for(var e,t=this.blockCount,r=this.s,i=this.outputBlocks,n=this.extraBytes,o=0,a=0,c="";a<i;){for(o=0;o<t&&a<i;++o,++a)e=r[o],c+=s[e>>4&15]+s[15&e]+s[e>>12&15]+s[e>>8&15]+s[e>>20&15]+s[e>>16&15]+s[e>>28&15]+s[e>>24&15];a%t==0&&(R(r),o=0)}return n&&(e=r[o],c+=s[e>>4&15]+s[15&e],n>1&&(c+=s[e>>12&15]+s[e>>8&15]),n>2&&(c+=s[e>>20&15]+s[e>>16&15])),c},P.prototype.arrayBuffer=function(){this.finalize();var e,t=this.blockCount,r=this.s,i=this.outputBlocks,n=this.extraBytes,o=0,s=0,a=this.outputBits>>3;e=n?new ArrayBuffer(i+1<<2):new ArrayBuffer(a);for(var c=new Uint32Array(e);s<i;){for(o=0;o<t&&s<i;++o,++s)c[s]=r[o];s%t==0&&R(r)}return n&&(c[o]=r[o],e=e.slice(0,a)),e},P.prototype.buffer=P.prototype.arrayBuffer,P.prototype.digest=P.prototype.array=function(){this.finalize();for(var e,t,r=this.blockCount,i=this.s,n=this.outputBlocks,o=this.extraBytes,s=0,a=0,c=[];a<n;){for(s=0;s<r&&a<n;++s,++a)e=a<<2,t=i[s],c[e]=255&t,c[e+1]=t>>8&255,c[e+2]=t>>16&255,c[e+3]=t>>24&255;a%r==0&&R(i)}return o&&(e=a<<2,t=i[s],c[e]=255&t,o>1&&(c[e+1]=t>>8&255),o>2&&(c[e+2]=t>>16&255)),c},O.prototype=new P,O.prototype.finalize=function(){return this.encode(this.outputBits,!0),P.prototype.finalize.call(this)};var R=function(e){var t,r,i,n,o,s,a,c,u,h,d,f,p,g,m,w,y,v,b,x,A,k,_,C,E,S,I,M,T,N,P,O,R,B,L,U,j,D,z,W,$,q,H,F,K,Z,V,Y,G,J,Q,X,ee,te,re,ie,ne,oe,se,ae,ce,le,ue;for(i=0;i<48;i+=2)n=e[0]^e[10]^e[20]^e[30]^e[40],o=e[1]^e[11]^e[21]^e[31]^e[41],s=e[2]^e[12]^e[22]^e[32]^e[42],a=e[3]^e[13]^e[23]^e[33]^e[43],c=e[4]^e[14]^e[24]^e[34]^e[44],u=e[5]^e[15]^e[25]^e[35]^e[45],h=e[6]^e[16]^e[26]^e[36]^e[46],d=e[7]^e[17]^e[27]^e[37]^e[47],t=(f=e[8]^e[18]^e[28]^e[38]^e[48])^(s<<1|a>>>31),r=(p=e[9]^e[19]^e[29]^e[39]^e[49])^(a<<1|s>>>31),e[0]^=t,e[1]^=r,e[10]^=t,e[11]^=r,e[20]^=t,e[21]^=r,e[30]^=t,e[31]^=r,e[40]^=t,e[41]^=r,t=n^(c<<1|u>>>31),r=o^(u<<1|c>>>31),e[2]^=t,e[3]^=r,e[12]^=t,e[13]^=r,e[22]^=t,e[23]^=r,e[32]^=t,e[33]^=r,e[42]^=t,e[43]^=r,t=s^(h<<1|d>>>31),r=a^(d<<1|h>>>31),e[4]^=t,e[5]^=r,e[14]^=t,e[15]^=r,e[24]^=t,e[25]^=r,e[34]^=t,e[35]^=r,e[44]^=t,e[45]^=r,t=c^(f<<1|p>>>31),r=u^(p<<1|f>>>31),e[6]^=t,e[7]^=r,e[16]^=t,e[17]^=r,e[26]^=t,e[27]^=r,e[36]^=t,e[37]^=r,e[46]^=t,e[47]^=r,t=h^(n<<1|o>>>31),r=d^(o<<1|n>>>31),e[8]^=t,e[9]^=r,e[18]^=t,e[19]^=r,e[28]^=t,e[29]^=r,e[38]^=t,e[39]^=r,e[48]^=t,e[49]^=r,g=e[0],m=e[1],Z=e[11]<<4|e[10]>>>28,V=e[10]<<4|e[11]>>>28,M=e[20]<<3|e[21]>>>29,T=e[21]<<3|e[20]>>>29,ae=e[31]<<9|e[30]>>>23,ce=e[30]<<9|e[31]>>>23,q=e[40]<<18|e[41]>>>14,H=e[41]<<18|e[40]>>>14,B=e[2]<<1|e[3]>>>31,L=e[3]<<1|e[2]>>>31,w=e[13]<<12|e[12]>>>20,y=e[12]<<12|e[13]>>>20,Y=e[22]<<10|e[23]>>>22,G=e[23]<<10|e[22]>>>22,N=e[33]<<13|e[32]>>>19,P=e[32]<<13|e[33]>>>19,le=e[42]<<2|e[43]>>>30,ue=e[43]<<2|e[42]>>>30,te=e[5]<<30|e[4]>>>2,re=e[4]<<30|e[5]>>>2,U=e[14]<<6|e[15]>>>26,j=e[15]<<6|e[14]>>>26,v=e[25]<<11|e[24]>>>21,b=e[24]<<11|e[25]>>>21,J=e[34]<<15|e[35]>>>17,Q=e[35]<<15|e[34]>>>17,O=e[45]<<29|e[44]>>>3,R=e[44]<<29|e[45]>>>3,C=e[6]<<28|e[7]>>>4,E=e[7]<<28|e[6]>>>4,ie=e[17]<<23|e[16]>>>9,ne=e[16]<<23|e[17]>>>9,D=e[26]<<25|e[27]>>>7,z=e[27]<<25|e[26]>>>7,x=e[36]<<21|e[37]>>>11,A=e[37]<<21|e[36]>>>11,X=e[47]<<24|e[46]>>>8,ee=e[46]<<24|e[47]>>>8,F=e[8]<<27|e[9]>>>5,K=e[9]<<27|e[8]>>>5,S=e[18]<<20|e[19]>>>12,I=e[19]<<20|e[18]>>>12,oe=e[29]<<7|e[28]>>>25,se=e[28]<<7|e[29]>>>25,W=e[38]<<8|e[39]>>>24,$=e[39]<<8|e[38]>>>24,k=e[48]<<14|e[49]>>>18,_=e[49]<<14|e[48]>>>18,e[0]=g^~w&v,e[1]=m^~y&b,e[10]=C^~S&M,e[11]=E^~I&T,e[20]=B^~U&D,e[21]=L^~j&z,e[30]=F^~Z&Y,e[31]=K^~V&G,e[40]=te^~ie&oe,e[41]=re^~ne&se,e[2]=w^~v&x,e[3]=y^~b&A,e[12]=S^~M&N,e[13]=I^~T&P,e[22]=U^~D&W,e[23]=j^~z&$,e[32]=Z^~Y&J,e[33]=V^~G&Q,e[42]=ie^~oe&ae,e[43]=ne^~se&ce,e[4]=v^~x&k,e[5]=b^~A&_,e[14]=M^~N&O,e[15]=T^~P&R,e[24]=D^~W&q,e[25]=z^~$&H,e[34]=Y^~J&X,e[35]=G^~Q&ee,e[44]=oe^~ae&le,e[45]=se^~ce&ue,e[6]=x^~k&g,e[7]=A^~_&m,e[16]=N^~O&C,e[17]=P^~R&E,e[26]=W^~q&B,e[27]=$^~H&L,e[36]=J^~X&F,e[37]=Q^~ee&K,e[46]=ae^~le&te,e[47]=ce^~ue&re,e[8]=k^~g&w,e[9]=_^~m&y,e[18]=O^~C&S,e[19]=R^~E&I,e[28]=q^~B&U,e[29]=H^~L&j,e[38]=X^~F&Z,e[39]=ee^~K&V,e[48]=le^~te&ie,e[49]=ue^~re&ne,e[0]^=l[i],e[1]^=l[i+1]};if(n)f.exports=_;else for(E=0;E<C.length;++E)r[C[E]]=_[C[E]]}();var g=p.exports;let m=!1,w=!1;const y={debug:1,default:2,info:2,warning:3,error:4,off:5};let v=y.default,b=null;const x=function(){try{const e=[];if(["NFD","NFC","NFKD","NFKC"].forEach((t=>{try{if("test"!=="test".normalize(t))throw new Error("bad normalize")}catch{e.push(t)}})),e.length)throw new Error("missing "+e.join(", "));if(String.fromCharCode(233).normalize("NFD")!==String.fromCharCode(101,769))throw new Error("broken implementation")}catch(e){return e.message}return null}();var A,k;!function(e){e.DEBUG="DEBUG",e.INFO="INFO",e.WARNING="WARNING",e.ERROR="ERROR",e.OFF="OFF"}(A||(A={})),function(e){e.UNKNOWN_ERROR="UNKNOWN_ERROR",e.NOT_IMPLEMENTED="NOT_IMPLEMENTED",e.UNSUPPORTED_OPERATION="UNSUPPORTED_OPERATION",e.NETWORK_ERROR="NETWORK_ERROR",e.SERVER_ERROR="SERVER_ERROR",e.TIMEOUT="TIMEOUT",e.BUFFER_OVERRUN="BUFFER_OVERRUN",e.NUMERIC_FAULT="NUMERIC_FAULT",e.MISSING_NEW="MISSING_NEW",e.INVALID_ARGUMENT="INVALID_ARGUMENT",e.MISSING_ARGUMENT="MISSING_ARGUMENT",e.UNEXPECTED_ARGUMENT="UNEXPECTED_ARGUMENT",e.CALL_EXCEPTION="CALL_EXCEPTION",e.INSUFFICIENT_FUNDS="INSUFFICIENT_FUNDS",e.NONCE_EXPIRED="NONCE_EXPIRED",e.REPLACEMENT_UNDERPRICED="REPLACEMENT_UNDERPRICED",e.UNPREDICTABLE_GAS_LIMIT="UNPREDICTABLE_GAS_LIMIT",e.TRANSACTION_REPLACED="TRANSACTION_REPLACED",e.ACTION_REJECTED="ACTION_REJECTED"}(k||(k={}));const _="0123456789abcdef";class C{constructor(e){Object.defineProperty(this,"version",{enumerable:!0,value:e,writable:!1})}_log(e,t){const r=e.toLowerCase();null==y[r]&&this.throwArgumentError("invalid log level name","logLevel",e),!(v>y[r])&&console.log.apply(console,t)}debug(...e){this._log(C.levels.DEBUG,e)}info(...e){this._log(C.levels.INFO,e)}warn(...e){this._log(C.levels.WARNING,e)}makeError(e,t,r){if(w)return this.makeError("censored error",t,{});t||(t=C.errors.UNKNOWN_ERROR),r||(r={});const i=[];Object.keys(r).forEach((e=>{const t=r[e];try{if(t instanceof Uint8Array){let r="";for(let e=0;e<t.length;e++)r+=_[t[e]>>4],r+=_[15&t[e]];i.push(e+"=Uint8Array(0x"+r+")")}else i.push(e+"="+JSON.stringify(t))}catch{i.push(e+"="+JSON.stringify(r[e].toString()))}})),i.push(`code=${t}`),i.push(`version=${this.version}`);const n=e;let o="";switch(t){case k.NUMERIC_FAULT:{o="NUMERIC_FAULT";const t=e;switch(t){case"overflow":case"underflow":case"division-by-zero":o+="-"+t;break;case"negative-power":case"negative-width":o+="-unsupported";break;case"unbound-bitwise-result":o+="-unbound-result"}break}case k.CALL_EXCEPTION:case k.INSUFFICIENT_FUNDS:case k.MISSING_NEW:case k.NONCE_EXPIRED:case k.REPLACEMENT_UNDERPRICED:case k.TRANSACTION_REPLACED:case k.UNPREDICTABLE_GAS_LIMIT:o=t}o&&(e+=" [ See: https://links.ethers.org/v5-errors-"+o+" ]"),i.length&&(e+=" ("+i.join(", ")+")");const s=new Error(e);return s.reason=n,s.code=t,Object.keys(r).forEach((function(e){s[e]=r[e]})),s}throwError(e,t,r){throw this.makeError(e,t,r)}throwArgumentError(e,t,r){return this.throwError(e,C.errors.INVALID_ARGUMENT,{argument:t,value:r})}assert(e,t,r,i){e||this.throwError(t,r,i)}assertArgument(e,t,r,i){e||this.throwArgumentError(t,r,i)}checkNormalize(e){x&&this.throwError("platform missing String.prototype.normalize",C.errors.UNSUPPORTED_OPERATION,{operation:"String.prototype.normalize",form:x})}checkSafeUint53(e,t){"number"==typeof e&&(null==t&&(t="value not safe"),(e<0||e>=9007199254740991)&&this.throwError(t,C.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"out-of-safe-range",value:e}),e%1&&this.throwError(t,C.errors.NUMERIC_FAULT,{operation:"checkSafeInteger",fault:"non-integer",value:e}))}checkArgumentCount(e,t,r){r=r?": "+r:"",e<t&&this.throwError("missing argument"+r,C.errors.MISSING_ARGUMENT,{count:e,expectedCount:t}),e>t&&this.throwError("too many arguments"+r,C.errors.UNEXPECTED_ARGUMENT,{count:e,expectedCount:t})}checkNew(e,t){(e===Object||null==e)&&this.throwError("missing new",C.errors.MISSING_NEW,{name:t.name})}checkAbstract(e,t){e===t?this.throwError("cannot instantiate abstract class "+JSON.stringify(t.name)+" directly; use a sub-class",C.errors.UNSUPPORTED_OPERATION,{name:e.name,operation:"new"}):(e===Object||null==e)&&this.throwError("missing new",C.errors.MISSING_NEW,{name:t.name})}static globalLogger(){return b||(b=new C("logger/5.7.0")),b}static setCensorship(e,t){if(!e&&t&&this.globalLogger().throwError("cannot permanently disable censorship",C.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"}),m){if(!e)return;this.globalLogger().throwError("error censorship permanent",C.errors.UNSUPPORTED_OPERATION,{operation:"setCensorship"})}w=!!e,m=!!t}static setLogLevel(e){const t=y[e.toLowerCase()];null!=t?v=t:C.globalLogger().warn("invalid log level - "+e)}static from(e){return new C(e)}}C.errors=k,C.levels=A;const E=new C("bytes/5.7.0");function S(e){return!!e.toHexString}function I(e){return e.slice||(e.slice=function(){const t=Array.prototype.slice.call(arguments);return I(new Uint8Array(Array.prototype.slice.apply(e,t)))}),e}function M(e){return"number"==typeof e&&e==e&&e%1==0}function T(e){if(null==e)return!1;if(e.constructor===Uint8Array)return!0;if("string"==typeof e||!M(e.length)||e.length<0)return!1;for(let t=0;t<e.length;t++){const r=e[t];if(!M(r)||r<0||r>=256)return!1}return!0}function N(e,t){if(t||(t={}),"number"==typeof e){E.checkSafeUint53(e,"invalid arrayify value");const t=[];for(;e;)t.unshift(255&e),e=parseInt(String(e/256));return 0===t.length&&t.push(0),I(new Uint8Array(t))}if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),S(e)&&(e=e.toHexString()),P(e)){let r=e.substring(2);r.length%2&&("left"===t.hexPad?r="0"+r:"right"===t.hexPad?r+="0":E.throwArgumentError("hex data is odd-length","value",e));const i=[];for(let e=0;e<r.length;e+=2)i.push(parseInt(r.substring(e,e+2),16));return I(new Uint8Array(i))}return T(e)?I(new Uint8Array(e)):E.throwArgumentError("invalid arrayify value","value",e)}function P(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/)||t&&e.length!==2+2*t)}const O="0123456789abcdef";function R(e,t){if(t||(t={}),"number"==typeof e){E.checkSafeUint53(e,"invalid hexlify value");let t="";for(;e;)t=O[15&e]+t,e=Math.floor(e/16);return t.length?(t.length%2&&(t="0"+t),"0x"+t):"0x00"}if("bigint"==typeof e)return(e=e.toString(16)).length%2?"0x0"+e:"0x"+e;if(t.allowMissingPrefix&&"string"==typeof e&&"0x"!==e.substring(0,2)&&(e="0x"+e),S(e))return e.toHexString();if(P(e))return e.length%2&&("left"===t.hexPad?e="0x0"+e.substring(2):"right"===t.hexPad?e+="0":E.throwArgumentError("hex data is odd-length","value",e)),e.toLowerCase();if(T(e)){let t="0x";for(let r=0;r<e.length;r++){let i=e[r];t+=O[(240&i)>>4]+O[15&i]}return t}return E.throwArgumentError("invalid hexlify value","value",e)}function B(e,t,r){return"string"!=typeof e?e=R(e):(!P(e)||e.length%2)&&E.throwArgumentError("invalid hexData","value",e),t=2+2*t,null!=r?"0x"+e.substring(t,2+2*r):"0x"+e.substring(t)}function L(e,t){for("string"!=typeof e?e=R(e):P(e)||E.throwArgumentError("invalid hex string","value",e),e.length>2*t+2&&E.throwArgumentError("value out of range","value",arguments[1]);e.length<2*t+2;)e="0x0"+e.substring(2);return e}function U(e){const t={r:"0x",s:"0x",_vs:"0x",recoveryParam:0,v:0,yParityAndS:"0x",compact:"0x"};if(function(e){return P(e)&&!(e.length%2)||T(e)}(e)){let r=N(e);64===r.length?(t.v=27+(r[32]>>7),r[32]&=127,t.r=R(r.slice(0,32)),t.s=R(r.slice(32,64))):65===r.length?(t.r=R(r.slice(0,32)),t.s=R(r.slice(32,64)),t.v=r[64]):E.throwArgumentError("invalid signature string","signature",e),t.v<27&&(0===t.v||1===t.v?t.v+=27:E.throwArgumentError("signature invalid v byte","signature",e)),t.recoveryParam=1-t.v%2,t.recoveryParam&&(r[32]|=128),t._vs=R(r.slice(32,64))}else{if(t.r=e.r,t.s=e.s,t.v=e.v,t.recoveryParam=e.recoveryParam,t._vs=e._vs,null!=t._vs){const r=function(e,t){(e=N(e)).length>t&&E.throwArgumentError("value out of range","value",arguments[0]);const r=new Uint8Array(t);return r.set(e,t-e.length),I(r)}(N(t._vs),32);t._vs=R(r);const i=r[0]>=128?1:0;null==t.recoveryParam?t.recoveryParam=i:t.recoveryParam!==i&&E.throwArgumentError("signature recoveryParam mismatch _vs","signature",e),r[0]&=127;const n=R(r);null==t.s?t.s=n:t.s!==n&&E.throwArgumentError("signature v mismatch _vs","signature",e)}if(null==t.recoveryParam)null==t.v?E.throwArgumentError("signature missing v and recoveryParam","signature",e):0===t.v||1===t.v?t.recoveryParam=t.v:t.recoveryParam=1-t.v%2;else if(null==t.v)t.v=27+t.recoveryParam;else{const r=0===t.v||1===t.v?t.v:1-t.v%2;t.recoveryParam!==r&&E.throwArgumentError("signature recoveryParam mismatch v","signature",e)}null!=t.r&&P(t.r)?t.r=L(t.r,32):E.throwArgumentError("signature missing or invalid r","signature",e),null!=t.s&&P(t.s)?t.s=L(t.s,32):E.throwArgumentError("signature missing or invalid s","signature",e);const r=N(t.s);r[0]>=128&&E.throwArgumentError("signature s out of range","signature",e),t.recoveryParam&&(r[0]|=128);const i=R(r);t._vs&&(P(t._vs)||E.throwArgumentError("signature invalid _vs","signature",e),t._vs=L(t._vs,32)),null==t._vs?t._vs=i:t._vs!==i&&E.throwArgumentError("signature _vs mismatch v and s","signature",e)}return t.yParityAndS=t._vs,t.compact=t.r+t.yParityAndS.substring(2),t}function j(e){return"0x"+g.keccak_256(N(e))}var D={exports:{}},z=function(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}(Object.freeze({__proto__:null,default:{}}));!function(e){!function(e,t){function r(e,t){if(!e)throw new Error(t||"Assertion failed")}function i(e,t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}function n(e,t,r){if(n.isBN(e))return e;this.negative=0,this.words=null,this.length=0,this.red=null,null!==e&&(("le"===t||"be"===t)&&(r=t,t=10),this._init(e||0,t||10,r||"be"))}var o;"object"==typeof e?e.exports=n:t.BN=n,n.BN=n,n.wordSize=26;try{o=typeof window<"u"&&typeof window.Buffer<"u"?window.Buffer:z.Buffer}catch{}function s(e,t){var i=e.charCodeAt(t);return i>=48&&i<=57?i-48:i>=65&&i<=70?i-55:i>=97&&i<=102?i-87:void r(!1,"Invalid character in "+e)}function a(e,t,r){var i=s(e,r);return r-1>=t&&(i|=s(e,r-1)<<4),i}function c(e,t,i,n){for(var o=0,s=0,a=Math.min(e.length,i),c=t;c<a;c++){var l=e.charCodeAt(c)-48;o*=n,s=l>=49?l-49+10:l>=17?l-17+10:l,r(l>=0&&s<n,"Invalid character"),o+=s}return o}function l(e,t){e.words=t.words,e.length=t.length,e.negative=t.negative,e.red=t.red}if(n.isBN=function(e){return e instanceof n||null!==e&&"object"==typeof e&&e.constructor.wordSize===n.wordSize&&Array.isArray(e.words)},n.max=function(e,t){return e.cmp(t)>0?e:t},n.min=function(e,t){return e.cmp(t)<0?e:t},n.prototype._init=function(e,t,i){if("number"==typeof e)return this._initNumber(e,t,i);if("object"==typeof e)return this._initArray(e,t,i);"hex"===t&&(t=16),r(t===(0|t)&&t>=2&&t<=36);var n=0;"-"===(e=e.toString().replace(/\s+/g,""))[0]&&(n++,this.negative=1),n<e.length&&(16===t?this._parseHex(e,n,i):(this._parseBase(e,t,n),"le"===i&&this._initArray(this.toArray(),t,i)))},n.prototype._initNumber=function(e,t,i){e<0&&(this.negative=1,e=-e),e<67108864?(this.words=[67108863&e],this.length=1):e<4503599627370496?(this.words=[67108863&e,e/67108864&67108863],this.length=2):(r(e<9007199254740992),this.words=[67108863&e,e/67108864&67108863,1],this.length=3),"le"===i&&this._initArray(this.toArray(),t,i)},n.prototype._initArray=function(e,t,i){if(r("number"==typeof e.length),e.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(e.length/3),this.words=new Array(this.length);for(var n=0;n<this.length;n++)this.words[n]=0;var o,s,a=0;if("be"===i)for(n=e.length-1,o=0;n>=0;n-=3)s=e[n]|e[n-1]<<8|e[n-2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);else if("le"===i)for(n=0,o=0;n<e.length;n+=3)s=e[n]|e[n+1]<<8|e[n+2]<<16,this.words[o]|=s<<a&67108863,this.words[o+1]=s>>>26-a&67108863,(a+=24)>=26&&(a-=26,o++);return this._strip()},n.prototype._parseHex=function(e,t,r){this.length=Math.ceil((e.length-t)/6),this.words=new Array(this.length);for(var i=0;i<this.length;i++)this.words[i]=0;var n,o=0,s=0;if("be"===r)for(i=e.length-1;i>=t;i-=2)n=a(e,t,i)<<o,this.words[s]|=67108863&n,o>=18?(o-=18,s+=1,this.words[s]|=n>>>26):o+=8;else for(i=(e.length-t)%2==0?t+1:t;i<e.length;i+=2)n=a(e,t,i)<<o,this.words[s]|=67108863&n,o>=18?(o-=18,s+=1,this.words[s]|=n>>>26):o+=8;this._strip()},n.prototype._parseBase=function(e,t,r){this.words=[0],this.length=1;for(var i=0,n=1;n<=67108863;n*=t)i++;i--,n=n/t|0;for(var o=e.length-r,s=o%i,a=Math.min(o,o-s)+r,l=0,u=r;u<a;u+=i)l=c(e,u,u+i,t),this.imuln(n),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l);if(0!==s){var h=1;for(l=c(e,u,e.length,t),u=0;u<s;u++)h*=t;this.imuln(h),this.words[0]+l<67108864?this.words[0]+=l:this._iaddn(l)}this._strip()},n.prototype.copy=function(e){e.words=new Array(this.length);for(var t=0;t<this.length;t++)e.words[t]=this.words[t];e.length=this.length,e.negative=this.negative,e.red=this.red},n.prototype._move=function(e){l(e,this)},n.prototype.clone=function(){var e=new n(null);return this.copy(e),e},n.prototype._expand=function(e){for(;this.length<e;)this.words[this.length++]=0;return this},n.prototype._strip=function(){for(;this.length>1&&0===this.words[this.length-1];)this.length--;return this._normSign()},n.prototype._normSign=function(){return 1===this.length&&0===this.words[0]&&(this.negative=0),this},typeof Symbol<"u"&&"function"==typeof Symbol.for)try{n.prototype[Symbol.for("nodejs.util.inspect.custom")]=u}catch{n.prototype.inspect=u}else n.prototype.inspect=u;function u(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"}var h=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],d=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];n.prototype.toString=function(e,t){var i;if(t=0|t||1,16===(e=e||10)||"hex"===e){i="";for(var n=0,o=0,s=0;s<this.length;s++){var a=this.words[s],c=(16777215&(a<<n|o)).toString(16);o=a>>>24-n&16777215,(n+=2)>=26&&(n-=26,s--),i=0!==o||s!==this.length-1?h[6-c.length]+c+i:c+i}for(0!==o&&(i=o.toString(16)+i);i.length%t!=0;)i="0"+i;return 0!==this.negative&&(i="-"+i),i}if(e===(0|e)&&e>=2&&e<=36){var l=d[e],u=f[e];i="";var p=this.clone();for(p.negative=0;!p.isZero();){var g=p.modrn(u).toString(e);i=(p=p.idivn(u)).isZero()?g+i:h[l-g.length]+g+i}for(this.isZero()&&(i="0"+i);i.length%t!=0;)i="0"+i;return 0!==this.negative&&(i="-"+i),i}r(!1,"Base should be between 2 and 36")},n.prototype.toNumber=function(){var e=this.words[0];return 2===this.length?e+=67108864*this.words[1]:3===this.length&&1===this.words[2]?e+=4503599627370496+67108864*this.words[1]:this.length>2&&r(!1,"Number can only safely store up to 53 bits"),0!==this.negative?-e:e},n.prototype.toJSON=function(){return this.toString(16,2)},o&&(n.prototype.toBuffer=function(e,t){return this.toArrayLike(o,e,t)}),n.prototype.toArray=function(e,t){return this.toArrayLike(Array,e,t)};function p(e,t,r){r.negative=t.negative^e.negative;var i=e.length+t.length|0;r.length=i,i=i-1|0;var n=0|e.words[0],o=0|t.words[0],s=n*o,a=67108863&s,c=s/67108864|0;r.words[0]=a;for(var l=1;l<i;l++){for(var u=c>>>26,h=67108863&c,d=Math.min(l,t.length-1),f=Math.max(0,l-e.length+1);f<=d;f++){var p=l-f|0;u+=(s=(n=0|e.words[p])*(o=0|t.words[f])+h)/67108864|0,h=67108863&s}r.words[l]=0|h,c=0|u}return 0!==c?r.words[l]=0|c:r.length--,r._strip()}n.prototype.toArrayLike=function(e,t,i){this._strip();var n=this.byteLength(),o=i||Math.max(1,n);r(n<=o,"byte array longer than desired length"),r(o>0,"Requested array length <= 0");var s=function(e,t){return e.allocUnsafe?e.allocUnsafe(t):new e(t)}(e,o);return this["_toArrayLike"+("le"===t?"LE":"BE")](s,n),s},n.prototype._toArrayLikeLE=function(e,t){for(var r=0,i=0,n=0,o=0;n<this.length;n++){var s=this.words[n]<<o|i;e[r++]=255&s,r<e.length&&(e[r++]=s>>8&255),r<e.length&&(e[r++]=s>>16&255),6===o?(r<e.length&&(e[r++]=s>>24&255),i=0,o=0):(i=s>>>24,o+=2)}if(r<e.length)for(e[r++]=i;r<e.length;)e[r++]=0},n.prototype._toArrayLikeBE=function(e,t){for(var r=e.length-1,i=0,n=0,o=0;n<this.length;n++){var s=this.words[n]<<o|i;e[r--]=255&s,r>=0&&(e[r--]=s>>8&255),r>=0&&(e[r--]=s>>16&255),6===o?(r>=0&&(e[r--]=s>>24&255),i=0,o=0):(i=s>>>24,o+=2)}if(r>=0)for(e[r--]=i;r>=0;)e[r--]=0},Math.clz32?n.prototype._countBits=function(e){return 32-Math.clz32(e)}:n.prototype._countBits=function(e){var t=e,r=0;return t>=4096&&(r+=13,t>>>=13),t>=64&&(r+=7,t>>>=7),t>=8&&(r+=4,t>>>=4),t>=2&&(r+=2,t>>>=2),r+t},n.prototype._zeroBits=function(e){if(0===e)return 26;var t=e,r=0;return 8191&t||(r+=13,t>>>=13),127&t||(r+=7,t>>>=7),15&t||(r+=4,t>>>=4),3&t||(r+=2,t>>>=2),1&t||r++,r},n.prototype.bitLength=function(){var e=this.words[this.length-1],t=this._countBits(e);return 26*(this.length-1)+t},n.prototype.zeroBits=function(){if(this.isZero())return 0;for(var e=0,t=0;t<this.length;t++){var r=this._zeroBits(this.words[t]);if(e+=r,26!==r)break}return e},n.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},n.prototype.toTwos=function(e){return 0!==this.negative?this.abs().inotn(e).iaddn(1):this.clone()},n.prototype.fromTwos=function(e){return this.testn(e-1)?this.notn(e).iaddn(1).ineg():this.clone()},n.prototype.isNeg=function(){return 0!==this.negative},n.prototype.neg=function(){return this.clone().ineg()},n.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},n.prototype.iuor=function(e){for(;this.length<e.length;)this.words[this.length++]=0;for(var t=0;t<e.length;t++)this.words[t]=this.words[t]|e.words[t];return this._strip()},n.prototype.ior=function(e){return r(!(this.negative|e.negative)),this.iuor(e)},n.prototype.or=function(e){return this.length>e.length?this.clone().ior(e):e.clone().ior(this)},n.prototype.uor=function(e){return this.length>e.length?this.clone().iuor(e):e.clone().iuor(this)},n.prototype.iuand=function(e){var t;t=this.length>e.length?e:this;for(var r=0;r<t.length;r++)this.words[r]=this.words[r]&e.words[r];return this.length=t.length,this._strip()},n.prototype.iand=function(e){return r(!(this.negative|e.negative)),this.iuand(e)},n.prototype.and=function(e){return this.length>e.length?this.clone().iand(e):e.clone().iand(this)},n.prototype.uand=function(e){return this.length>e.length?this.clone().iuand(e):e.clone().iuand(this)},n.prototype.iuxor=function(e){var t,r;this.length>e.length?(t=this,r=e):(t=e,r=this);for(var i=0;i<r.length;i++)this.words[i]=t.words[i]^r.words[i];if(this!==t)for(;i<t.length;i++)this.words[i]=t.words[i];return this.length=t.length,this._strip()},n.prototype.ixor=function(e){return r(!(this.negative|e.negative)),this.iuxor(e)},n.prototype.xor=function(e){return this.length>e.length?this.clone().ixor(e):e.clone().ixor(this)},n.prototype.uxor=function(e){return this.length>e.length?this.clone().iuxor(e):e.clone().iuxor(this)},n.prototype.inotn=function(e){r("number"==typeof e&&e>=0);var t=0|Math.ceil(e/26),i=e%26;this._expand(t),i>0&&t--;for(var n=0;n<t;n++)this.words[n]=67108863&~this.words[n];return i>0&&(this.words[n]=~this.words[n]&67108863>>26-i),this._strip()},n.prototype.notn=function(e){return this.clone().inotn(e)},n.prototype.setn=function(e,t){r("number"==typeof e&&e>=0);var i=e/26|0,n=e%26;return this._expand(i+1),this.words[i]=t?this.words[i]|1<<n:this.words[i]&~(1<<n),this._strip()},n.prototype.iadd=function(e){var t,r,i;if(0!==this.negative&&0===e.negative)return this.negative=0,t=this.isub(e),this.negative^=1,this._normSign();if(0===this.negative&&0!==e.negative)return e.negative=0,t=this.isub(e),e.negative=1,t._normSign();this.length>e.length?(r=this,i=e):(r=e,i=this);for(var n=0,o=0;o<i.length;o++)t=(0|r.words[o])+(0|i.words[o])+n,this.words[o]=67108863&t,n=t>>>26;for(;0!==n&&o<r.length;o++)t=(0|r.words[o])+n,this.words[o]=67108863&t,n=t>>>26;if(this.length=r.length,0!==n)this.words[this.length]=n,this.length++;else if(r!==this)for(;o<r.length;o++)this.words[o]=r.words[o];return this},n.prototype.add=function(e){var t;return 0!==e.negative&&0===this.negative?(e.negative=0,t=this.sub(e),e.negative^=1,t):0===e.negative&&0!==this.negative?(this.negative=0,t=e.sub(this),this.negative=1,t):this.length>e.length?this.clone().iadd(e):e.clone().iadd(this)},n.prototype.isub=function(e){if(0!==e.negative){e.negative=0;var t=this.iadd(e);return e.negative=1,t._normSign()}if(0!==this.negative)return this.negative=0,this.iadd(e),this.negative=1,this._normSign();var r,i,n=this.cmp(e);if(0===n)return this.negative=0,this.length=1,this.words[0]=0,this;n>0?(r=this,i=e):(r=e,i=this);for(var o=0,s=0;s<i.length;s++)o=(t=(0|r.words[s])-(0|i.words[s])+o)>>26,this.words[s]=67108863&t;for(;0!==o&&s<r.length;s++)o=(t=(0|r.words[s])+o)>>26,this.words[s]=67108863&t;if(0===o&&s<r.length&&r!==this)for(;s<r.length;s++)this.words[s]=r.words[s];return this.length=Math.max(this.length,s),r!==this&&(this.negative=1),this._strip()},n.prototype.sub=function(e){return this.clone().isub(e)};var g=function(e,t,r){var i,n,o,s=e.words,a=t.words,c=r.words,l=0,u=0|s[0],h=8191&u,d=u>>>13,f=0|s[1],p=8191&f,g=f>>>13,m=0|s[2],w=8191&m,y=m>>>13,v=0|s[3],b=8191&v,x=v>>>13,A=0|s[4],k=8191&A,_=A>>>13,C=0|s[5],E=8191&C,S=C>>>13,I=0|s[6],M=8191&I,T=I>>>13,N=0|s[7],P=8191&N,O=N>>>13,R=0|s[8],B=8191&R,L=R>>>13,U=0|s[9],j=8191&U,D=U>>>13,z=0|a[0],W=8191&z,$=z>>>13,q=0|a[1],H=8191&q,F=q>>>13,K=0|a[2],Z=8191&K,V=K>>>13,Y=0|a[3],G=8191&Y,J=Y>>>13,Q=0|a[4],X=8191&Q,ee=Q>>>13,te=0|a[5],re=8191&te,ie=te>>>13,ne=0|a[6],oe=8191&ne,se=ne>>>13,ae=0|a[7],ce=8191&ae,le=ae>>>13,ue=0|a[8],he=8191&ue,de=ue>>>13,fe=0|a[9],pe=8191&fe,ge=fe>>>13;r.negative=e.negative^t.negative,r.length=19;var me=(l+(i=Math.imul(h,W))|0)+((8191&(n=(n=Math.imul(h,$))+Math.imul(d,W)|0))<<13)|0;l=((o=Math.imul(d,$))+(n>>>13)|0)+(me>>>26)|0,me&=67108863,i=Math.imul(p,W),n=(n=Math.imul(p,$))+Math.imul(g,W)|0,o=Math.imul(g,$);var we=(l+(i=i+Math.imul(h,H)|0)|0)+((8191&(n=(n=n+Math.imul(h,F)|0)+Math.imul(d,H)|0))<<13)|0;l=((o=o+Math.imul(d,F)|0)+(n>>>13)|0)+(we>>>26)|0,we&=67108863,i=Math.imul(w,W),n=(n=Math.imul(w,$))+Math.imul(y,W)|0,o=Math.imul(y,$),i=i+Math.imul(p,H)|0,n=(n=n+Math.imul(p,F)|0)+Math.imul(g,H)|0,o=o+Math.imul(g,F)|0;var ye=(l+(i=i+Math.imul(h,Z)|0)|0)+((8191&(n=(n=n+Math.imul(h,V)|0)+Math.imul(d,Z)|0))<<13)|0;l=((o=o+Math.imul(d,V)|0)+(n>>>13)|0)+(ye>>>26)|0,ye&=67108863,i=Math.imul(b,W),n=(n=Math.imul(b,$))+Math.imul(x,W)|0,o=Math.imul(x,$),i=i+Math.imul(w,H)|0,n=(n=n+Math.imul(w,F)|0)+Math.imul(y,H)|0,o=o+Math.imul(y,F)|0,i=i+Math.imul(p,Z)|0,n=(n=n+Math.imul(p,V)|0)+Math.imul(g,Z)|0,o=o+Math.imul(g,V)|0;var ve=(l+(i=i+Math.imul(h,G)|0)|0)+((8191&(n=(n=n+Math.imul(h,J)|0)+Math.imul(d,G)|0))<<13)|0;l=((o=o+Math.imul(d,J)|0)+(n>>>13)|0)+(ve>>>26)|0,ve&=67108863,i=Math.imul(k,W),n=(n=Math.imul(k,$))+Math.imul(_,W)|0,o=Math.imul(_,$),i=i+Math.imul(b,H)|0,n=(n=n+Math.imul(b,F)|0)+Math.imul(x,H)|0,o=o+Math.imul(x,F)|0,i=i+Math.imul(w,Z)|0,n=(n=n+Math.imul(w,V)|0)+Math.imul(y,Z)|0,o=o+Math.imul(y,V)|0,i=i+Math.imul(p,G)|0,n=(n=n+Math.imul(p,J)|0)+Math.imul(g,G)|0,o=o+Math.imul(g,J)|0;var be=(l+(i=i+Math.imul(h,X)|0)|0)+((8191&(n=(n=n+Math.imul(h,ee)|0)+Math.imul(d,X)|0))<<13)|0;l=((o=o+Math.imul(d,ee)|0)+(n>>>13)|0)+(be>>>26)|0,be&=67108863,i=Math.imul(E,W),n=(n=Math.imul(E,$))+Math.imul(S,W)|0,o=Math.imul(S,$),i=i+Math.imul(k,H)|0,n=(n=n+Math.imul(k,F)|0)+Math.imul(_,H)|0,o=o+Math.imul(_,F)|0,i=i+Math.imul(b,Z)|0,n=(n=n+Math.imul(b,V)|0)+Math.imul(x,Z)|0,o=o+Math.imul(x,V)|0,i=i+Math.imul(w,G)|0,n=(n=n+Math.imul(w,J)|0)+Math.imul(y,G)|0,o=o+Math.imul(y,J)|0,i=i+Math.imul(p,X)|0,n=(n=n+Math.imul(p,ee)|0)+Math.imul(g,X)|0,o=o+Math.imul(g,ee)|0;var xe=(l+(i=i+Math.imul(h,re)|0)|0)+((8191&(n=(n=n+Math.imul(h,ie)|0)+Math.imul(d,re)|0))<<13)|0;l=((o=o+Math.imul(d,ie)|0)+(n>>>13)|0)+(xe>>>26)|0,xe&=67108863,i=Math.imul(M,W),n=(n=Math.imul(M,$))+Math.imul(T,W)|0,o=Math.imul(T,$),i=i+Math.imul(E,H)|0,n=(n=n+Math.imul(E,F)|0)+Math.imul(S,H)|0,o=o+Math.imul(S,F)|0,i=i+Math.imul(k,Z)|0,n=(n=n+Math.imul(k,V)|0)+Math.imul(_,Z)|0,o=o+Math.imul(_,V)|0,i=i+Math.imul(b,G)|0,n=(n=n+Math.imul(b,J)|0)+Math.imul(x,G)|0,o=o+Math.imul(x,J)|0,i=i+Math.imul(w,X)|0,n=(n=n+Math.imul(w,ee)|0)+Math.imul(y,X)|0,o=o+Math.imul(y,ee)|0,i=i+Math.imul(p,re)|0,n=(n=n+Math.imul(p,ie)|0)+Math.imul(g,re)|0,o=o+Math.imul(g,ie)|0;var Ae=(l+(i=i+Math.imul(h,oe)|0)|0)+((8191&(n=(n=n+Math.imul(h,se)|0)+Math.imul(d,oe)|0))<<13)|0;l=((o=o+Math.imul(d,se)|0)+(n>>>13)|0)+(Ae>>>26)|0,Ae&=67108863,i=Math.imul(P,W),n=(n=Math.imul(P,$))+Math.imul(O,W)|0,o=Math.imul(O,$),i=i+Math.imul(M,H)|0,n=(n=n+Math.imul(M,F)|0)+Math.imul(T,H)|0,o=o+Math.imul(T,F)|0,i=i+Math.imul(E,Z)|0,n=(n=n+Math.imul(E,V)|0)+Math.imul(S,Z)|0,o=o+Math.imul(S,V)|0,i=i+Math.imul(k,G)|0,n=(n=n+Math.imul(k,J)|0)+Math.imul(_,G)|0,o=o+Math.imul(_,J)|0,i=i+Math.imul(b,X)|0,n=(n=n+Math.imul(b,ee)|0)+Math.imul(x,X)|0,o=o+Math.imul(x,ee)|0,i=i+Math.imul(w,re)|0,n=(n=n+Math.imul(w,ie)|0)+Math.imul(y,re)|0,o=o+Math.imul(y,ie)|0,i=i+Math.imul(p,oe)|0,n=(n=n+Math.imul(p,se)|0)+Math.imul(g,oe)|0,o=o+Math.imul(g,se)|0;var ke=(l+(i=i+Math.imul(h,ce)|0)|0)+((8191&(n=(n=n+Math.imul(h,le)|0)+Math.imul(d,ce)|0))<<13)|0;l=((o=o+Math.imul(d,le)|0)+(n>>>13)|0)+(ke>>>26)|0,ke&=67108863,i=Math.imul(B,W),n=(n=Math.imul(B,$))+Math.imul(L,W)|0,o=Math.imul(L,$),i=i+Math.imul(P,H)|0,n=(n=n+Math.imul(P,F)|0)+Math.imul(O,H)|0,o=o+Math.imul(O,F)|0,i=i+Math.imul(M,Z)|0,n=(n=n+Math.imul(M,V)|0)+Math.imul(T,Z)|0,o=o+Math.imul(T,V)|0,i=i+Math.imul(E,G)|0,n=(n=n+Math.imul(E,J)|0)+Math.imul(S,G)|0,o=o+Math.imul(S,J)|0,i=i+Math.imul(k,X)|0,n=(n=n+Math.imul(k,ee)|0)+Math.imul(_,X)|0,o=o+Math.imul(_,ee)|0,i=i+Math.imul(b,re)|0,n=(n=n+Math.imul(b,ie)|0)+Math.imul(x,re)|0,o=o+Math.imul(x,ie)|0,i=i+Math.imul(w,oe)|0,n=(n=n+Math.imul(w,se)|0)+Math.imul(y,oe)|0,o=o+Math.imul(y,se)|0,i=i+Math.imul(p,ce)|0,n=(n=n+Math.imul(p,le)|0)+Math.imul(g,ce)|0,o=o+Math.imul(g,le)|0;var _e=(l+(i=i+Math.imul(h,he)|0)|0)+((8191&(n=(n=n+Math.imul(h,de)|0)+Math.imul(d,he)|0))<<13)|0;l=((o=o+Math.imul(d,de)|0)+(n>>>13)|0)+(_e>>>26)|0,_e&=67108863,i=Math.imul(j,W),n=(n=Math.imul(j,$))+Math.imul(D,W)|0,o=Math.imul(D,$),i=i+Math.imul(B,H)|0,n=(n=n+Math.imul(B,F)|0)+Math.imul(L,H)|0,o=o+Math.imul(L,F)|0,i=i+Math.imul(P,Z)|0,n=(n=n+Math.imul(P,V)|0)+Math.imul(O,Z)|0,o=o+Math.imul(O,V)|0,i=i+Math.imul(M,G)|0,n=(n=n+Math.imul(M,J)|0)+Math.imul(T,G)|0,o=o+Math.imul(T,J)|0,i=i+Math.imul(E,X)|0,n=(n=n+Math.imul(E,ee)|0)+Math.imul(S,X)|0,o=o+Math.imul(S,ee)|0,i=i+Math.imul(k,re)|0,n=(n=n+Math.imul(k,ie)|0)+Math.imul(_,re)|0,o=o+Math.imul(_,ie)|0,i=i+Math.imul(b,oe)|0,n=(n=n+Math.imul(b,se)|0)+Math.imul(x,oe)|0,o=o+Math.imul(x,se)|0,i=i+Math.imul(w,ce)|0,n=(n=n+Math.imul(w,le)|0)+Math.imul(y,ce)|0,o=o+Math.imul(y,le)|0,i=i+Math.imul(p,he)|0,n=(n=n+Math.imul(p,de)|0)+Math.imul(g,he)|0,o=o+Math.imul(g,de)|0;var Ce=(l+(i=i+Math.imul(h,pe)|0)|0)+((8191&(n=(n=n+Math.imul(h,ge)|0)+Math.imul(d,pe)|0))<<13)|0;l=((o=o+Math.imul(d,ge)|0)+(n>>>13)|0)+(Ce>>>26)|0,Ce&=67108863,i=Math.imul(j,H),n=(n=Math.imul(j,F))+Math.imul(D,H)|0,o=Math.imul(D,F),i=i+Math.imul(B,Z)|0,n=(n=n+Math.imul(B,V)|0)+Math.imul(L,Z)|0,o=o+Math.imul(L,V)|0,i=i+Math.imul(P,G)|0,n=(n=n+Math.imul(P,J)|0)+Math.imul(O,G)|0,o=o+Math.imul(O,J)|0,i=i+Math.imul(M,X)|0,n=(n=n+Math.imul(M,ee)|0)+Math.imul(T,X)|0,o=o+Math.imul(T,ee)|0,i=i+Math.imul(E,re)|0,n=(n=n+Math.imul(E,ie)|0)+Math.imul(S,re)|0,o=o+Math.imul(S,ie)|0,i=i+Math.imul(k,oe)|0,n=(n=n+Math.imul(k,se)|0)+Math.imul(_,oe)|0,o=o+Math.imul(_,se)|0,i=i+Math.imul(b,ce)|0,n=(n=n+Math.imul(b,le)|0)+Math.imul(x,ce)|0,o=o+Math.imul(x,le)|0,i=i+Math.imul(w,he)|0,n=(n=n+Math.imul(w,de)|0)+Math.imul(y,he)|0,o=o+Math.imul(y,de)|0;var Ee=(l+(i=i+Math.imul(p,pe)|0)|0)+((8191&(n=(n=n+Math.imul(p,ge)|0)+Math.imul(g,pe)|0))<<13)|0;l=((o=o+Math.imul(g,ge)|0)+(n>>>13)|0)+(Ee>>>26)|0,Ee&=67108863,i=Math.imul(j,Z),n=(n=Math.imul(j,V))+Math.imul(D,Z)|0,o=Math.imul(D,V),i=i+Math.imul(B,G)|0,n=(n=n+Math.imul(B,J)|0)+Math.imul(L,G)|0,o=o+Math.imul(L,J)|0,i=i+Math.imul(P,X)|0,n=(n=n+Math.imul(P,ee)|0)+Math.imul(O,X)|0,o=o+Math.imul(O,ee)|0,i=i+Math.imul(M,re)|0,n=(n=n+Math.imul(M,ie)|0)+Math.imul(T,re)|0,o=o+Math.imul(T,ie)|0,i=i+Math.imul(E,oe)|0,n=(n=n+Math.imul(E,se)|0)+Math.imul(S,oe)|0,o=o+Math.imul(S,se)|0,i=i+Math.imul(k,ce)|0,n=(n=n+Math.imul(k,le)|0)+Math.imul(_,ce)|0,o=o+Math.imul(_,le)|0,i=i+Math.imul(b,he)|0,n=(n=n+Math.imul(b,de)|0)+Math.imul(x,he)|0,o=o+Math.imul(x,de)|0;var Se=(l+(i=i+Math.imul(w,pe)|0)|0)+((8191&(n=(n=n+Math.imul(w,ge)|0)+Math.imul(y,pe)|0))<<13)|0;l=((o=o+Math.imul(y,ge)|0)+(n>>>13)|0)+(Se>>>26)|0,Se&=67108863,i=Math.imul(j,G),n=(n=Math.imul(j,J))+Math.imul(D,G)|0,o=Math.imul(D,J),i=i+Math.imul(B,X)|0,n=(n=n+Math.imul(B,ee)|0)+Math.imul(L,X)|0,o=o+Math.imul(L,ee)|0,i=i+Math.imul(P,re)|0,n=(n=n+Math.imul(P,ie)|0)+Math.imul(O,re)|0,o=o+Math.imul(O,ie)|0,i=i+Math.imul(M,oe)|0,n=(n=n+Math.imul(M,se)|0)+Math.imul(T,oe)|0,o=o+Math.imul(T,se)|0,i=i+Math.imul(E,ce)|0,n=(n=n+Math.imul(E,le)|0)+Math.imul(S,ce)|0,o=o+Math.imul(S,le)|0,i=i+Math.imul(k,he)|0,n=(n=n+Math.imul(k,de)|0)+Math.imul(_,he)|0,o=o+Math.imul(_,de)|0;var Ie=(l+(i=i+Math.imul(b,pe)|0)|0)+((8191&(n=(n=n+Math.imul(b,ge)|0)+Math.imul(x,pe)|0))<<13)|0;l=((o=o+Math.imul(x,ge)|0)+(n>>>13)|0)+(Ie>>>26)|0,Ie&=67108863,i=Math.imul(j,X),n=(n=Math.imul(j,ee))+Math.imul(D,X)|0,o=Math.imul(D,ee),i=i+Math.imul(B,re)|0,n=(n=n+Math.imul(B,ie)|0)+Math.imul(L,re)|0,o=o+Math.imul(L,ie)|0,i=i+Math.imul(P,oe)|0,n=(n=n+Math.imul(P,se)|0)+Math.imul(O,oe)|0,o=o+Math.imul(O,se)|0,i=i+Math.imul(M,ce)|0,n=(n=n+Math.imul(M,le)|0)+Math.imul(T,ce)|0,o=o+Math.imul(T,le)|0,i=i+Math.imul(E,he)|0,n=(n=n+Math.imul(E,de)|0)+Math.imul(S,he)|0,o=o+Math.imul(S,de)|0;var Me=(l+(i=i+Math.imul(k,pe)|0)|0)+((8191&(n=(n=n+Math.imul(k,ge)|0)+Math.imul(_,pe)|0))<<13)|0;l=((o=o+Math.imul(_,ge)|0)+(n>>>13)|0)+(Me>>>26)|0,Me&=67108863,i=Math.imul(j,re),n=(n=Math.imul(j,ie))+Math.imul(D,re)|0,o=Math.imul(D,ie),i=i+Math.imul(B,oe)|0,n=(n=n+Math.imul(B,se)|0)+Math.imul(L,oe)|0,o=o+Math.imul(L,se)|0,i=i+Math.imul(P,ce)|0,n=(n=n+Math.imul(P,le)|0)+Math.imul(O,ce)|0,o=o+Math.imul(O,le)|0,i=i+Math.imul(M,he)|0,n=(n=n+Math.imul(M,de)|0)+Math.imul(T,he)|0,o=o+Math.imul(T,de)|0;var Te=(l+(i=i+Math.imul(E,pe)|0)|0)+((8191&(n=(n=n+Math.imul(E,ge)|0)+Math.imul(S,pe)|0))<<13)|0;l=((o=o+Math.imul(S,ge)|0)+(n>>>13)|0)+(Te>>>26)|0,Te&=67108863,i=Math.imul(j,oe),n=(n=Math.imul(j,se))+Math.imul(D,oe)|0,o=Math.imul(D,se),i=i+Math.imul(B,ce)|0,n=(n=n+Math.imul(B,le)|0)+Math.imul(L,ce)|0,o=o+Math.imul(L,le)|0,i=i+Math.imul(P,he)|0,n=(n=n+Math.imul(P,de)|0)+Math.imul(O,he)|0,o=o+Math.imul(O,de)|0;var Ne=(l+(i=i+Math.imul(M,pe)|0)|0)+((8191&(n=(n=n+Math.imul(M,ge)|0)+Math.imul(T,pe)|0))<<13)|0;l=((o=o+Math.imul(T,ge)|0)+(n>>>13)|0)+(Ne>>>26)|0,Ne&=67108863,i=Math.imul(j,ce),n=(n=Math.imul(j,le))+Math.imul(D,ce)|0,o=Math.imul(D,le),i=i+Math.imul(B,he)|0,n=(n=n+Math.imul(B,de)|0)+Math.imul(L,he)|0,o=o+Math.imul(L,de)|0;var Pe=(l+(i=i+Math.imul(P,pe)|0)|0)+((8191&(n=(n=n+Math.imul(P,ge)|0)+Math.imul(O,pe)|0))<<13)|0;l=((o=o+Math.imul(O,ge)|0)+(n>>>13)|0)+(Pe>>>26)|0,Pe&=67108863,i=Math.imul(j,he),n=(n=Math.imul(j,de))+Math.imul(D,he)|0,o=Math.imul(D,de);var Oe=(l+(i=i+Math.imul(B,pe)|0)|0)+((8191&(n=(n=n+Math.imul(B,ge)|0)+Math.imul(L,pe)|0))<<13)|0;l=((o=o+Math.imul(L,ge)|0)+(n>>>13)|0)+(Oe>>>26)|0,Oe&=67108863;var Re=(l+(i=Math.imul(j,pe))|0)+((8191&(n=(n=Math.imul(j,ge))+Math.imul(D,pe)|0))<<13)|0;return l=((o=Math.imul(D,ge))+(n>>>13)|0)+(Re>>>26)|0,Re&=67108863,c[0]=me,c[1]=we,c[2]=ye,c[3]=ve,c[4]=be,c[5]=xe,c[6]=Ae,c[7]=ke,c[8]=_e,c[9]=Ce,c[10]=Ee,c[11]=Se,c[12]=Ie,c[13]=Me,c[14]=Te,c[15]=Ne,c[16]=Pe,c[17]=Oe,c[18]=Re,0!==l&&(c[19]=l,r.length++),r};function m(e,t,r){r.negative=t.negative^e.negative,r.length=e.length+t.length;for(var i=0,n=0,o=0;o<r.length-1;o++){var s=n;n=0;for(var a=67108863&i,c=Math.min(o,t.length-1),l=Math.max(0,o-e.length+1);l<=c;l++){var u=o-l,h=(0|e.words[u])*(0|t.words[l]),d=67108863&h;a=67108863&(d=d+a|0),n+=(s=(s=s+(h/67108864|0)|0)+(d>>>26)|0)>>>26,s&=67108863}r.words[o]=a,i=s,s=n}return 0!==i?r.words[o]=i:r.length--,r._strip()}function w(e,t,r){return m(e,t,r)}Math.imul||(g=p),n.prototype.mulTo=function(e,t){var r=this.length+e.length;return 10===this.length&&10===e.length?g(this,e,t):r<63?p(this,e,t):r<1024?m(this,e,t):w(this,e,t)},n.prototype.mul=function(e){var t=new n(null);return t.words=new Array(this.length+e.length),this.mulTo(e,t)},n.prototype.mulf=function(e){var t=new n(null);return t.words=new Array(this.length+e.length),w(this,e,t)},n.prototype.imul=function(e){return this.clone().mulTo(e,this)},n.prototype.imuln=function(e){var t=e<0;t&&(e=-e),r("number"==typeof e),r(e<67108864);for(var i=0,n=0;n<this.length;n++){var o=(0|this.words[n])*e,s=(67108863&o)+(67108863&i);i>>=26,i+=o/67108864|0,i+=s>>>26,this.words[n]=67108863&s}return 0!==i&&(this.words[n]=i,this.length++),t?this.ineg():this},n.prototype.muln=function(e){return this.clone().imuln(e)},n.prototype.sqr=function(){return this.mul(this)},n.prototype.isqr=function(){return this.imul(this.clone())},n.prototype.pow=function(e){var t=function(e){for(var t=new Array(e.bitLength()),r=0;r<t.length;r++){var i=r/26|0,n=r%26;t[r]=e.words[i]>>>n&1}return t}(e);if(0===t.length)return new n(1);for(var r=this,i=0;i<t.length&&0===t[i];i++,r=r.sqr());if(++i<t.length)for(var o=r.sqr();i<t.length;i++,o=o.sqr())0!==t[i]&&(r=r.mul(o));return r},n.prototype.iushln=function(e){r("number"==typeof e&&e>=0);var t,i=e%26,n=(e-i)/26,o=67108863>>>26-i<<26-i;if(0!==i){var s=0;for(t=0;t<this.length;t++){var a=this.words[t]&o,c=(0|this.words[t])-a<<i;this.words[t]=c|s,s=a>>>26-i}s&&(this.words[t]=s,this.length++)}if(0!==n){for(t=this.length-1;t>=0;t--)this.words[t+n]=this.words[t];for(t=0;t<n;t++)this.words[t]=0;this.length+=n}return this._strip()},n.prototype.ishln=function(e){return r(0===this.negative),this.iushln(e)},n.prototype.iushrn=function(e,t,i){var n;r("number"==typeof e&&e>=0),n=t?(t-t%26)/26:0;var o=e%26,s=Math.min((e-o)/26,this.length),a=67108863^67108863>>>o<<o,c=i;if(n-=s,n=Math.max(0,n),c){for(var l=0;l<s;l++)c.words[l]=this.words[l];c.length=s}if(0!==s)if(this.length>s)for(this.length-=s,l=0;l<this.length;l++)this.words[l]=this.words[l+s];else this.words[0]=0,this.length=1;var u=0;for(l=this.length-1;l>=0&&(0!==u||l>=n);l--){var h=0|this.words[l];this.words[l]=u<<26-o|h>>>o,u=h&a}return c&&0!==u&&(c.words[c.length++]=u),0===this.length&&(this.words[0]=0,this.length=1),this._strip()},n.prototype.ishrn=function(e,t,i){return r(0===this.negative),this.iushrn(e,t,i)},n.prototype.shln=function(e){return this.clone().ishln(e)},n.prototype.ushln=function(e){return this.clone().iushln(e)},n.prototype.shrn=function(e){return this.clone().ishrn(e)},n.prototype.ushrn=function(e){return this.clone().iushrn(e)},n.prototype.testn=function(e){r("number"==typeof e&&e>=0);var t=e%26,i=(e-t)/26,n=1<<t;return!(this.length<=i)&&!!(this.words[i]&n)},n.prototype.imaskn=function(e){r("number"==typeof e&&e>=0);var t=e%26,i=(e-t)/26;if(r(0===this.negative,"imaskn works only with positive numbers"),this.length<=i)return this;if(0!==t&&i++,this.length=Math.min(i,this.length),0!==t){var n=67108863^67108863>>>t<<t;this.words[this.length-1]&=n}return this._strip()},n.prototype.maskn=function(e){return this.clone().imaskn(e)},n.prototype.iaddn=function(e){return r("number"==typeof e),r(e<67108864),e<0?this.isubn(-e):0!==this.negative?1===this.length&&(0|this.words[0])<=e?(this.words[0]=e-(0|this.words[0]),this.negative=0,this):(this.negative=0,this.isubn(e),this.negative=1,this):this._iaddn(e)},n.prototype._iaddn=function(e){this.words[0]+=e;for(var t=0;t<this.length&&this.words[t]>=67108864;t++)this.words[t]-=67108864,t===this.length-1?this.words[t+1]=1:this.words[t+1]++;return this.length=Math.max(this.length,t+1),this},n.prototype.isubn=function(e){if(r("number"==typeof e),r(e<67108864),e<0)return this.iaddn(-e);if(0!==this.negative)return this.negative=0,this.iaddn(e),this.negative=1,this;if(this.words[0]-=e,1===this.length&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var t=0;t<this.length&&this.words[t]<0;t++)this.words[t]+=67108864,this.words[t+1]-=1;return this._strip()},n.prototype.addn=function(e){return this.clone().iaddn(e)},n.prototype.subn=function(e){return this.clone().isubn(e)},n.prototype.iabs=function(){return this.negative=0,this},n.prototype.abs=function(){return this.clone().iabs()},n.prototype._ishlnsubmul=function(e,t,i){var n,o=e.length+i;this._expand(o);var s,a=0;for(n=0;n<e.length;n++){s=(0|this.words[n+i])+a;var c=(0|e.words[n])*t;a=((s-=67108863&c)>>26)-(c/67108864|0),this.words[n+i]=67108863&s}for(;n<this.length-i;n++)a=(s=(0|this.words[n+i])+a)>>26,this.words[n+i]=67108863&s;if(0===a)return this._strip();for(r(-1===a),a=0,n=0;n<this.length;n++)a=(s=-(0|this.words[n])+a)>>26,this.words[n]=67108863&s;return this.negative=1,this._strip()},n.prototype._wordDiv=function(e,t){var r=(this.length,e.length),i=this.clone(),o=e,s=0|o.words[o.length-1];0!==(r=26-this._countBits(s))&&(o=o.ushln(r),i.iushln(r),s=0|o.words[o.length-1]);var a,c=i.length-o.length;if("mod"!==t){(a=new n(null)).length=c+1,a.words=new Array(a.length);for(var l=0;l<a.length;l++)a.words[l]=0}var u=i.clone()._ishlnsubmul(o,1,c);0===u.negative&&(i=u,a&&(a.words[c]=1));for(var h=c-1;h>=0;h--){var d=67108864*(0|i.words[o.length+h])+(0|i.words[o.length+h-1]);for(d=Math.min(d/s|0,67108863),i._ishlnsubmul(o,d,h);0!==i.negative;)d--,i.negative=0,i._ishlnsubmul(o,1,h),i.isZero()||(i.negative^=1);a&&(a.words[h]=d)}return a&&a._strip(),i._strip(),"div"!==t&&0!==r&&i.iushrn(r),{div:a||null,mod:i}},n.prototype.divmod=function(e,t,i){return r(!e.isZero()),this.isZero()?{div:new n(0),mod:new n(0)}:0!==this.negative&&0===e.negative?(a=this.neg().divmod(e,t),"mod"!==t&&(o=a.div.neg()),"div"!==t&&(s=a.mod.neg(),i&&0!==s.negative&&s.iadd(e)),{div:o,mod:s}):0===this.negative&&0!==e.negative?(a=this.divmod(e.neg(),t),"mod"!==t&&(o=a.div.neg()),{div:o,mod:a.mod}):this.negative&e.negative?(a=this.neg().divmod(e.neg(),t),"div"!==t&&(s=a.mod.neg(),i&&0!==s.negative&&s.isub(e)),{div:a.div,mod:s}):e.length>this.length||this.cmp(e)<0?{div:new n(0),mod:this}:1===e.length?"div"===t?{div:this.divn(e.words[0]),mod:null}:"mod"===t?{div:null,mod:new n(this.modrn(e.words[0]))}:{div:this.divn(e.words[0]),mod:new n(this.modrn(e.words[0]))}:this._wordDiv(e,t);var o,s,a},n.prototype.div=function(e){return this.divmod(e,"div",!1).div},n.prototype.mod=function(e){return this.divmod(e,"mod",!1).mod},n.prototype.umod=function(e){return this.divmod(e,"mod",!0).mod},n.prototype.divRound=function(e){var t=this.divmod(e);if(t.mod.isZero())return t.div;var r=0!==t.div.negative?t.mod.isub(e):t.mod,i=e.ushrn(1),n=e.andln(1),o=r.cmp(i);return o<0||1===n&&0===o?t.div:0!==t.div.negative?t.div.isubn(1):t.div.iaddn(1)},n.prototype.modrn=function(e){var t=e<0;t&&(e=-e),r(e<=67108863);for(var i=(1<<26)%e,n=0,o=this.length-1;o>=0;o--)n=(i*n+(0|this.words[o]))%e;return t?-n:n},n.prototype.modn=function(e){return this.modrn(e)},n.prototype.idivn=function(e){var t=e<0;t&&(e=-e),r(e<=67108863);for(var i=0,n=this.length-1;n>=0;n--){var o=(0|this.words[n])+67108864*i;this.words[n]=o/e|0,i=o%e}return this._strip(),t?this.ineg():this},n.prototype.divn=function(e){return this.clone().idivn(e)},n.prototype.egcd=function(e){r(0===e.negative),r(!e.isZero());var t=this,i=e.clone();t=0!==t.negative?t.umod(e):t.clone();for(var o=new n(1),s=new n(0),a=new n(0),c=new n(1),l=0;t.isEven()&&i.isEven();)t.iushrn(1),i.iushrn(1),++l;for(var u=i.clone(),h=t.clone();!t.isZero();){for(var d=0,f=1;!(t.words[0]&f)&&d<26;++d,f<<=1);if(d>0)for(t.iushrn(d);d-- >0;)(o.isOdd()||s.isOdd())&&(o.iadd(u),s.isub(h)),o.iushrn(1),s.iushrn(1);for(var p=0,g=1;!(i.words[0]&g)&&p<26;++p,g<<=1);if(p>0)for(i.iushrn(p);p-- >0;)(a.isOdd()||c.isOdd())&&(a.iadd(u),c.isub(h)),a.iushrn(1),c.iushrn(1);t.cmp(i)>=0?(t.isub(i),o.isub(a),s.isub(c)):(i.isub(t),a.isub(o),c.isub(s))}return{a,b:c,gcd:i.iushln(l)}},n.prototype._invmp=function(e){r(0===e.negative),r(!e.isZero());var t,i=this,o=e.clone();i=0!==i.negative?i.umod(e):i.clone();for(var s=new n(1),a=new n(0),c=o.clone();i.cmpn(1)>0&&o.cmpn(1)>0;){for(var l=0,u=1;!(i.words[0]&u)&&l<26;++l,u<<=1);if(l>0)for(i.iushrn(l);l-- >0;)s.isOdd()&&s.iadd(c),s.iushrn(1);for(var h=0,d=1;!(o.words[0]&d)&&h<26;++h,d<<=1);if(h>0)for(o.iushrn(h);h-- >0;)a.isOdd()&&a.iadd(c),a.iushrn(1);i.cmp(o)>=0?(i.isub(o),s.isub(a)):(o.isub(i),a.isub(s))}return(t=0===i.cmpn(1)?s:a).cmpn(0)<0&&t.iadd(e),t},n.prototype.gcd=function(e){if(this.isZero())return e.abs();if(e.isZero())return this.abs();var t=this.clone(),r=e.clone();t.negative=0,r.negative=0;for(var i=0;t.isEven()&&r.isEven();i++)t.iushrn(1),r.iushrn(1);for(;;){for(;t.isEven();)t.iushrn(1);for(;r.isEven();)r.iushrn(1);var n=t.cmp(r);if(n<0){var o=t;t=r,r=o}else if(0===n||0===r.cmpn(1))break;t.isub(r)}return r.iushln(i)},n.prototype.invm=function(e){return this.egcd(e).a.umod(e)},n.prototype.isEven=function(){return!(1&this.words[0])},n.prototype.isOdd=function(){return!(1&~this.words[0])},n.prototype.andln=function(e){return this.words[0]&e},n.prototype.bincn=function(e){r("number"==typeof e);var t=e%26,i=(e-t)/26,n=1<<t;if(this.length<=i)return this._expand(i+1),this.words[i]|=n,this;for(var o=n,s=i;0!==o&&s<this.length;s++){var a=0|this.words[s];o=(a+=o)>>>26,a&=67108863,this.words[s]=a}return 0!==o&&(this.words[s]=o,this.length++),this},n.prototype.isZero=function(){return 1===this.length&&0===this.words[0]},n.prototype.cmpn=function(e){var t,i=e<0;if(0!==this.negative&&!i)return-1;if(0===this.negative&&i)return 1;if(this._strip(),this.length>1)t=1;else{i&&(e=-e),r(e<=67108863,"Number is too big");var n=0|this.words[0];t=n===e?0:n<e?-1:1}return 0!==this.negative?0|-t:t},n.prototype.cmp=function(e){if(0!==this.negative&&0===e.negative)return-1;if(0===this.negative&&0!==e.negative)return 1;var t=this.ucmp(e);return 0!==this.negative?0|-t:t},n.prototype.ucmp=function(e){if(this.length>e.length)return 1;if(this.length<e.length)return-1;for(var t=0,r=this.length-1;r>=0;r--){var i=0|this.words[r],n=0|e.words[r];if(i!==n){i<n?t=-1:i>n&&(t=1);break}}return t},n.prototype.gtn=function(e){return 1===this.cmpn(e)},n.prototype.gt=function(e){return 1===this.cmp(e)},n.prototype.gten=function(e){return this.cmpn(e)>=0},n.prototype.gte=function(e){return this.cmp(e)>=0},n.prototype.ltn=function(e){return-1===this.cmpn(e)},n.prototype.lt=function(e){return-1===this.cmp(e)},n.prototype.lten=function(e){return this.cmpn(e)<=0},n.prototype.lte=function(e){return this.cmp(e)<=0},n.prototype.eqn=function(e){return 0===this.cmpn(e)},n.prototype.eq=function(e){return 0===this.cmp(e)},n.red=function(e){return new _(e)},n.prototype.toRed=function(e){return r(!this.red,"Already a number in reduction context"),r(0===this.negative,"red works only with positives"),e.convertTo(this)._forceRed(e)},n.prototype.fromRed=function(){return r(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},n.prototype._forceRed=function(e){return this.red=e,this},n.prototype.forceRed=function(e){return r(!this.red,"Already a number in reduction context"),this._forceRed(e)},n.prototype.redAdd=function(e){return r(this.red,"redAdd works only with red numbers"),this.red.add(this,e)},n.prototype.redIAdd=function(e){return r(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,e)},n.prototype.redSub=function(e){return r(this.red,"redSub works only with red numbers"),this.red.sub(this,e)},n.prototype.redISub=function(e){return r(this.red,"redISub works only with red numbers"),this.red.isub(this,e)},n.prototype.redShl=function(e){return r(this.red,"redShl works only with red numbers"),this.red.shl(this,e)},n.prototype.redMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.mul(this,e)},n.prototype.redIMul=function(e){return r(this.red,"redMul works only with red numbers"),this.red._verify2(this,e),this.red.imul(this,e)},n.prototype.redSqr=function(){return r(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},n.prototype.redISqr=function(){return r(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},n.prototype.redSqrt=function(){return r(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},n.prototype.redInvm=function(){return r(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},n.prototype.redNeg=function(){return r(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},n.prototype.redPow=function(e){return r(this.red&&!e.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,e)};var y={k256:null,p224:null,p192:null,p25519:null};function v(e,t){this.name=e,this.p=new n(t,16),this.n=this.p.bitLength(),this.k=new n(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}function b(){v.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}function x(){v.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}function A(){v.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}function k(){v.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}function _(e){if("string"==typeof e){var t=n._prime(e);this.m=t.p,this.prime=t}else r(e.gtn(1),"modulus must be greater than 1"),this.m=e,this.prime=null}function C(e){_.call(this,e),this.shift=this.m.bitLength(),this.shift%26!=0&&(this.shift+=26-this.shift%26),this.r=new n(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}v.prototype._tmp=function(){var e=new n(null);return e.words=new Array(Math.ceil(this.n/13)),e},v.prototype.ireduce=function(e){var t,r=e;do{this.split(r,this.tmp),t=(r=(r=this.imulK(r)).iadd(this.tmp)).bitLength()}while(t>this.n);var i=t<this.n?-1:r.ucmp(this.p);return 0===i?(r.words[0]=0,r.length=1):i>0?r.isub(this.p):void 0!==r.strip?r.strip():r._strip(),r},v.prototype.split=function(e,t){e.iushrn(this.n,0,t)},v.prototype.imulK=function(e){return e.imul(this.k)},i(b,v),b.prototype.split=function(e,t){for(var r=4194303,i=Math.min(e.length,9),n=0;n<i;n++)t.words[n]=e.words[n];if(t.length=i,e.length<=9)return e.words[0]=0,void(e.length=1);var o=e.words[9];for(t.words[t.length++]=o&r,n=10;n<e.length;n++){var s=0|e.words[n];e.words[n-10]=(s&r)<<4|o>>>22,o=s}o>>>=22,e.words[n-10]=o,0===o&&e.length>10?e.length-=10:e.length-=9},b.prototype.imulK=function(e){e.words[e.length]=0,e.words[e.length+1]=0,e.length+=2;for(var t=0,r=0;r<e.length;r++){var i=0|e.words[r];t+=977*i,e.words[r]=67108863&t,t=64*i+(t/67108864|0)}return 0===e.words[e.length-1]&&(e.length--,0===e.words[e.length-1]&&e.length--),e},i(x,v),i(A,v),i(k,v),k.prototype.imulK=function(e){for(var t=0,r=0;r<e.length;r++){var i=19*(0|e.words[r])+t,n=67108863&i;i>>>=26,e.words[r]=n,t=i}return 0!==t&&(e.words[e.length++]=t),e},n._prime=function(e){if(y[e])return y[e];var t;if("k256"===e)t=new b;else if("p224"===e)t=new x;else if("p192"===e)t=new A;else{if("p25519"!==e)throw new Error("Unknown prime "+e);t=new k}return y[e]=t,t},_.prototype._verify1=function(e){r(0===e.negative,"red works only with positives"),r(e.red,"red works only with red numbers")},_.prototype._verify2=function(e,t){r(!(e.negative|t.negative),"red works only with positives"),r(e.red&&e.red===t.red,"red works only with red numbers")},_.prototype.imod=function(e){return this.prime?this.prime.ireduce(e)._forceRed(this):(l(e,e.umod(this.m)._forceRed(this)),e)},_.prototype.neg=function(e){return e.isZero()?e.clone():this.m.sub(e)._forceRed(this)},_.prototype.add=function(e,t){this._verify2(e,t);var r=e.add(t);return r.cmp(this.m)>=0&&r.isub(this.m),r._forceRed(this)},_.prototype.iadd=function(e,t){this._verify2(e,t);var r=e.iadd(t);return r.cmp(this.m)>=0&&r.isub(this.m),r},_.prototype.sub=function(e,t){this._verify2(e,t);var r=e.sub(t);return r.cmpn(0)<0&&r.iadd(this.m),r._forceRed(this)},_.prototype.isub=function(e,t){this._verify2(e,t);var r=e.isub(t);return r.cmpn(0)<0&&r.iadd(this.m),r},_.prototype.shl=function(e,t){return this._verify1(e),this.imod(e.ushln(t))},_.prototype.imul=function(e,t){return this._verify2(e,t),this.imod(e.imul(t))},_.prototype.mul=function(e,t){return this._verify2(e,t),this.imod(e.mul(t))},_.prototype.isqr=function(e){return this.imul(e,e.clone())},_.prototype.sqr=function(e){return this.mul(e,e)},_.prototype.sqrt=function(e){if(e.isZero())return e.clone();var t=this.m.andln(3);if(r(t%2==1),3===t){var i=this.m.add(new n(1)).iushrn(2);return this.pow(e,i)}for(var o=this.m.subn(1),s=0;!o.isZero()&&0===o.andln(1);)s++,o.iushrn(1);r(!o.isZero());var a=new n(1).toRed(this),c=a.redNeg(),l=this.m.subn(1).iushrn(1),u=this.m.bitLength();for(u=new n(2*u*u).toRed(this);0!==this.pow(u,l).cmp(c);)u.redIAdd(c);for(var h=this.pow(u,o),d=this.pow(e,o.addn(1).iushrn(1)),f=this.pow(e,o),p=s;0!==f.cmp(a);){for(var g=f,m=0;0!==g.cmp(a);m++)g=g.redSqr();r(m<p);var w=this.pow(h,new n(1).iushln(p-m-1));d=d.redMul(w),h=w.redSqr(),f=f.redMul(h),p=m}return d},_.prototype.invm=function(e){var t=e._invmp(this.m);return 0!==t.negative?(t.negative=0,this.imod(t).redNeg()):this.imod(t)},_.prototype.pow=function(e,t){if(t.isZero())return new n(1).toRed(this);if(0===t.cmpn(1))return e.clone();var r=new Array(16);r[0]=new n(1).toRed(this),r[1]=e;for(var i=2;i<r.length;i++)r[i]=this.mul(r[i-1],e);var o=r[0],s=0,a=0,c=t.bitLength()%26;for(0===c&&(c=26),i=t.length-1;i>=0;i--){for(var l=t.words[i],u=c-1;u>=0;u--){var h=l>>u&1;(o!==r[0]&&(o=this.sqr(o)),0!==h||0!==s)?(s<<=1,s|=h,(4===++a||0===i&&0===u)&&(o=this.mul(o,r[s]),a=0,s=0)):a=0}c=26}return o},_.prototype.convertTo=function(e){var t=e.umod(this.m);return t===e?t.clone():t},_.prototype.convertFrom=function(e){var t=e.clone();return t.red=null,t},n.mont=function(e){return new C(e)},i(C,_),C.prototype.convertTo=function(e){return this.imod(e.ushln(this.shift))},C.prototype.convertFrom=function(e){var t=this.imod(e.mul(this.rinv));return t.red=null,t},C.prototype.imul=function(e,t){if(e.isZero()||t.isZero())return e.words[0]=0,e.length=1,e;var r=e.imul(t),i=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),n=r.isub(i).iushrn(this.shift),o=n;return n.cmp(this.m)>=0?o=n.isub(this.m):n.cmpn(0)<0&&(o=n.iadd(this.m)),o._forceRed(this)},C.prototype.mul=function(e,t){if(e.isZero()||t.isZero())return new n(0)._forceRed(this);var r=e.mul(t),i=r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),o=r.isub(i).iushrn(this.shift),s=o;return o.cmp(this.m)>=0?s=o.isub(this.m):o.cmpn(0)<0&&(s=o.iadd(this.m)),s._forceRed(this)},C.prototype.invm=function(e){return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)}}(e,d)}(D);var W=D.exports;const $="bignumber/5.7.0";var q=W.BN;const H=new C($),F={},K=9007199254740991;let Z=!1;class V{constructor(e,t){e!==F&&H.throwError("cannot call constructor directly; use BigNumber.from",C.errors.UNSUPPORTED_OPERATION,{operation:"new (BigNumber)"}),this._hex=t,this._isBigNumber=!0,Object.freeze(this)}fromTwos(e){return G(J(this).fromTwos(e))}toTwos(e){return G(J(this).toTwos(e))}abs(){return"-"===this._hex[0]?V.from(this._hex.substring(1)):this}add(e){return G(J(this).add(J(e)))}sub(e){return G(J(this).sub(J(e)))}div(e){return V.from(e).isZero()&&Q("division-by-zero","div"),G(J(this).div(J(e)))}mul(e){return G(J(this).mul(J(e)))}mod(e){const t=J(e);return t.isNeg()&&Q("division-by-zero","mod"),G(J(this).umod(t))}pow(e){const t=J(e);return t.isNeg()&&Q("negative-power","pow"),G(J(this).pow(t))}and(e){const t=J(e);return(this.isNegative()||t.isNeg())&&Q("unbound-bitwise-result","and"),G(J(this).and(t))}or(e){const t=J(e);return(this.isNegative()||t.isNeg())&&Q("unbound-bitwise-result","or"),G(J(this).or(t))}xor(e){const t=J(e);return(this.isNegative()||t.isNeg())&&Q("unbound-bitwise-result","xor"),G(J(this).xor(t))}mask(e){return(this.isNegative()||e<0)&&Q("negative-width","mask"),G(J(this).maskn(e))}shl(e){return(this.isNegative()||e<0)&&Q("negative-width","shl"),G(J(this).shln(e))}shr(e){return(this.isNegative()||e<0)&&Q("negative-width","shr"),G(J(this).shrn(e))}eq(e){return J(this).eq(J(e))}lt(e){return J(this).lt(J(e))}lte(e){return J(this).lte(J(e))}gt(e){return J(this).gt(J(e))}gte(e){return J(this).gte(J(e))}isNegative(){return"-"===this._hex[0]}isZero(){return J(this).isZero()}toNumber(){try{return J(this).toNumber()}catch{Q("overflow","toNumber",this.toString())}return null}toBigInt(){try{return BigInt(this.toString())}catch{}return H.throwError("this platform does not support BigInt",C.errors.UNSUPPORTED_OPERATION,{value:this.toString()})}toString(){return arguments.length>0&&(10===arguments[0]?Z||(Z=!0,H.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")):16===arguments[0]?H.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",C.errors.UNEXPECTED_ARGUMENT,{}):H.throwError("BigNumber.toString does not accept parameters",C.errors.UNEXPECTED_ARGUMENT,{})),J(this).toString(10)}toHexString(){return this._hex}toJSON(e){return{type:"BigNumber",hex:this.toHexString()}}static from(e){if(e instanceof V)return e;if("string"==typeof e)return e.match(/^-?0x[0-9a-f]+$/i)?new V(F,Y(e)):e.match(/^-?[0-9]+$/)?new V(F,Y(new q(e))):H.throwArgumentError("invalid BigNumber string","value",e);if("number"==typeof e)return e%1&&Q("underflow","BigNumber.from",e),(e>=K||e<=-K)&&Q("overflow","BigNumber.from",e),V.from(String(e));const t=e;if("bigint"==typeof t)return V.from(t.toString());if(T(t))return V.from(R(t));if(t)if(t.toHexString){const e=t.toHexString();if("string"==typeof e)return V.from(e)}else{let e=t._hex;if(null==e&&"BigNumber"===t.type&&(e=t.hex),"string"==typeof e&&(P(e)||"-"===e[0]&&P(e.substring(1))))return V.from(e)}return H.throwArgumentError("invalid BigNumber value","value",e)}static isBigNumber(e){return!(!e||!e._isBigNumber)}}function Y(e){if("string"!=typeof e)return Y(e.toString(16));if("-"===e[0])return"-"===(e=e.substring(1))[0]&&H.throwArgumentError("invalid hex","value",e),"0x00"===(e=Y(e))?e:"-"+e;if("0x"!==e.substring(0,2)&&(e="0x"+e),"0x"===e)return"0x00";for(e.length%2&&(e="0x0"+e.substring(2));e.length>4&&"0x00"===e.substring(0,4);)e="0x"+e.substring(4);return e}function G(e){return V.from(Y(e))}function J(e){const t=V.from(e).toHexString();return"-"===t[0]?new q("-"+t.substring(3),16):new q(t.substring(2),16)}function Q(e,t,r){const i={fault:e,operation:t};return null!=r&&(i.value=r),H.throwError(e,C.errors.NUMERIC_FAULT,i)}const X=new C($),ee={},te=V.from(0),re=V.from(-1);function ie(e,t,r,i){const n={fault:t,operation:r};return void 0!==i&&(n.value=i),X.throwError(e,C.errors.NUMERIC_FAULT,n)}let ne="0";for(;ne.length<256;)ne+=ne;function oe(e){if("number"!=typeof e)try{e=V.from(e).toNumber()}catch{}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+ne.substring(0,e):X.throwArgumentError("invalid decimal size","decimals",e)}function se(e,t){null==t&&(t=0);const r=oe(t),i=(e=V.from(e)).lt(te);i&&(e=e.mul(re));let n=e.mod(r).toString();for(;n.length<r.length-1;)n="0"+n;n=n.match(/^([0-9]*[1-9]|0)(0*)/)[1];const o=e.div(r).toString();return e=1===r.length?o:o+"."+n,i&&(e="-"+e),e}function ae(e,t){null==t&&(t=0);const r=oe(t);("string"!=typeof e||!e.match(/^-?[0-9.]+$/))&&X.throwArgumentError("invalid decimal value","value",e);const i="-"===e.substring(0,1);i&&(e=e.substring(1)),"."===e&&X.throwArgumentError("missing value","value",e);const n=e.split(".");n.length>2&&X.throwArgumentError("too many decimal points","value",e);let o=n[0],s=n[1];for(o||(o="0"),s||(s="0");"0"===s[s.length-1];)s=s.substring(0,s.length-1);for(s.length>r.length-1&&ie("fractional component exceeds decimals","underflow","parseFixed"),""===s&&(s="0");s.length<r.length-1;)s+="0";const a=V.from(o),c=V.from(s);let l=a.mul(r).add(c);return i&&(l=l.mul(re)),l}class ce{constructor(e,t,r,i){e!==ee&&X.throwError("cannot use FixedFormat constructor; use FixedFormat.from",C.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=i,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(i),this._multiplier=oe(i),Object.freeze(this)}static from(e){if(e instanceof ce)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,r=128,i=18;if("string"==typeof e){if("fixed"!==e)if("ufixed"===e)t=!1;else{const n=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);n||X.throwArgumentError("invalid fixed format","format",e),t="u"!==n[1],r=parseInt(n[2]),i=parseInt(n[3])}}else if(e){const n=(t,r,i)=>null==e[t]?i:(typeof e[t]!==r&&X.throwArgumentError("invalid fixed format ("+t+" not "+r+")","format."+t,e[t]),e[t]);t=n("signed","boolean",t),r=n("width","number",r),i=n("decimals","number",i)}return r%8&&X.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),i>80&&X.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new ce(ee,t,r,i)}}class le{constructor(e,t,r,i){e!==ee&&X.throwError("cannot use FixedNumber constructor; use FixedNumber.from",C.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&X.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=ae(this._value,this.format.decimals),r=ae(e._value,e.format.decimals);return le.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=ae(this._value,this.format.decimals),r=ae(e._value,e.format.decimals);return le.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=ae(this._value,this.format.decimals),r=ae(e._value,e.format.decimals);return le.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=ae(this._value,this.format.decimals),r=ae(e._value,e.format.decimals);return le.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=le.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(ue.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=le.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(ue.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&X.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const r=le.from("1"+ne.substring(0,e),this.format),i=he.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&X.throwArgumentError("invalid byte width","width",e);return L(V.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString(),e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return le.fromString(this._value,e)}static fromValue(e,t,r){return null==r&&null!=t&&!function(e){return null!=e&&(V.isBigNumber(e)||"number"==typeof e&&e%1==0||"string"==typeof e&&!!e.match(/^-?[0-9]+$/)||P(e)||"bigint"==typeof e||T(e))}(t)&&(r=t,t=null),null==t&&(t=0),null==r&&(r="fixed"),le.fromString(se(e,t),ce.from(r))}static fromString(e,t){null==t&&(t="fixed");const r=ce.from(t),i=ae(e,r.decimals);!r.signed&&i.lt(te)&&ie("unsigned value cannot be negative","overflow","value",e);let n=null;r.signed?n=i.toTwos(r.width).toHexString():(n=i.toHexString(),n=L(n,r.width/8));const o=se(i,r.decimals);return new le(ee,n,o,r)}static fromBytes(e,t){null==t&&(t="fixed");const r=ce.from(t);if(N(e).length>r.width/8)throw new Error("overflow");let i=V.from(e);r.signed&&(i=i.fromTwos(r.width));const n=i.toTwos((r.signed?0:1)+r.width).toHexString(),o=se(i,r.decimals);return new le(ee,n,o,r)}static from(e,t){if("string"==typeof e)return le.fromString(e,t);if(T(e))return le.fromBytes(e,t);try{return le.fromValue(e,0,t)}catch(e){if(e.code!==C.errors.INVALID_ARGUMENT)throw e}return X.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const ue=le.from(1),he=le.from("0.5"),de=new C("strings/5.7.0");var fe,pe;function ge(e,t,r,i,n){if(e===pe.BAD_PREFIX||e===pe.UNEXPECTED_CONTINUE){let e=0;for(let i=t+1;i<r.length&&r[i]>>6==2;i++)e++;return e}return e===pe.OVERRUN?r.length-t-1:0}function me(e,t=fe.current){t!=fe.current&&(de.checkNormalize(),e=e.normalize(t));let r=[];for(let t=0;t<e.length;t++){const i=e.charCodeAt(t);if(i<128)r.push(i);else if(i<2048)r.push(i>>6|192),r.push(63&i|128);else if(55296==(64512&i)){t++;const n=e.charCodeAt(t);if(t>=e.length||56320!=(64512&n))throw new Error("invalid utf-8 string");const o=65536+((1023&i)<<10)+(1023&n);r.push(o>>18|240),r.push(o>>12&63|128),r.push(o>>6&63|128),r.push(63&o|128)}else r.push(i>>12|224),r.push(i>>6&63|128),r.push(63&i|128)}return N(r)}function we(e,t){t||(t=function(e){return[parseInt(e,16)]});let r=0,i={};return e.split(",").forEach((e=>{let n=e.split(":");r+=parseInt(n[0],16),i[r]=t(n[1])})),i}function ye(e){let t=0;return e.split(",").map((e=>{let r=e.split("-");1===r.length?r[1]="0":""===r[1]&&(r[1]="1");let i=t+parseInt(r[0],16);return t=parseInt(r[1],16),{l:i,h:t}}))}!function(e){e.current="",e.NFC="NFC",e.NFD="NFD",e.NFKC="NFKC",e.NFKD="NFKD"}(fe||(fe={})),function(e){e.UNEXPECTED_CONTINUE="unexpected continuation byte",e.BAD_PREFIX="bad codepoint prefix",e.OVERRUN="string overrun",e.MISSING_CONTINUE="missing continuation byte",e.OUT_OF_RANGE="out of UTF-8 range",e.UTF16_SURROGATE="UTF-16 surrogate",e.OVERLONG="overlong representation"}(pe||(pe={})),Object.freeze({error:function(e,t,r,i,n){return de.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`,"bytes",r)},ignore:ge,replace:function(e,t,r,i,n){return e===pe.OVERLONG?(i.push(n),0):(i.push(65533),ge(e,t,r))}}),ye("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"),"ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e=>parseInt(e,16))),we("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"),we("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"),we("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",(function(e){if(e.length%4!=0)throw new Error("bad data");let t=[];for(let r=0;r<e.length;r+=4)t.push(parseInt(e.substring(r,r+4),16));return t})),ye("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");const ve="hash/5.7.0";function be(e,t){null==t&&(t=1);const r=[],i=r.forEach,n=function(e,t){i.call(e,(function(e){t>0&&Array.isArray(e)?n(e,t-1):r.push(e)}))};return n(e,t),r}function xe(e){return function(e){let t=0;return()=>e[t++]}(function(e){let t=0;function r(){return e[t++]<<8|e[t++]}let i=r(),n=1,o=[0,1];for(let e=1;e<i;e++)o.push(n+=r());let s=r(),a=t;t+=s;let c=0,l=0;function u(){return 0==c&&(l=l<<8|e[t++],c=8),l>>--c&1}const h=Math.pow(2,31),d=h>>>1,f=d>>1,p=h-1;let g=0;for(let e=0;e<31;e++)g=g<<1|u();let m=[],w=0,y=h;for(;;){let e=Math.floor(((g-w+1)*n-1)/y),t=0,r=i;for(;r-t>1;){let i=t+r>>>1;e<o[i]?r=i:t=i}if(0==t)break;m.push(t);let s=w+Math.floor(y*o[t]/n),a=w+Math.floor(y*o[t+1]/n)-1;for(;!((s^a)&d);)g=g<<1&p|u(),s=s<<1&p,a=a<<1&p|1;for(;s&~a&f;)g=g&d|g<<1&p>>>1|u(),s=s<<1^d,a=(a^d)<<1|d|1;w=s,y=1+a-s}let v=i-4;return m.map((t=>{switch(t-v){case 3:return v+65792+(e[a++]<<16|e[a++]<<8|e[a++]);case 2:return v+256+(e[a++]<<8|e[a++]);case 1:return v+e[a++];default:return t-1}}))}(e))}function Ae(e){return 1&e?~e>>1:e>>1}function ke(e,t){let r=Array(e);for(let i=0,n=-1;i<e;i++)r[i]=n+=1+t();return r}function _e(e,t){let r=Array(e);for(let i=0,n=0;i<e;i++)r[i]=n+=Ae(t());return r}function Ce(e,t){let r=ke(e(),e),i=e(),n=ke(i,e),o=function(e,t){let r=Array(e);for(let i=0;i<e;i++)r[i]=1+t();return r}(i,e);for(let e=0;e<i;e++)for(let t=0;t<o[e];t++)r.push(n[e]+t);return t?r.map((e=>t[e])):r}function Ee(e,t,r){let i=Array(e).fill(void 0).map((()=>[]));for(let n=0;n<t;n++)_e(e,r).forEach(((e,t)=>i[t].push(e)));return i}function Se(e,t){let r=1+t(),i=t(),n=function(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(r)}return t}(t);return be(Ee(n.length,1+e,t).map(((e,t)=>{const o=e[0],s=e.slice(1);return Array(n[t]).fill(void 0).map(((e,t)=>{let n=t*i;return[o+t*r,s.map((e=>e+n))]}))})))}function Ie(e,t){return Ee(1+t(),1+e,t).map((e=>[e[0],e.slice(1)]))}const Me=xe(function(e){e=atob(e);const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return N(t)}("AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="));new Set(Ce(Me)),new Set(Ce(Me)),function(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(Se(r,e))}for(;;){let r=e()-1;if(r<0)break;t.push(Ie(r,e))}(function(e){const t={};for(let r=0;r<e.length;r++){const i=e[r];t[i[0]]=i[1]}})(be(t))}(Me),function(e){let t=Ce(e).sort(((e,t)=>e-t));(function r(){let i=[];for(;;){let n=Ce(e,t);if(0==n.length)break;i.push({set:new Set(n),node:r()})}i.sort(((e,t)=>t.set.size-e.set.size));let n=e(),o=n%3;n=n/3|0;let s=!!(1&n);return n>>=1,{branches:i,valid:o,fe0f:s,save:1==n,check:2==n}})()}(Me),new C(ve);new Uint8Array(32).fill(0);const Te="Ethereum Signed Message:\n";function Ne(e){return"string"==typeof e&&(e=me(e)),j(function(e){const t=e.map((e=>N(e))),r=t.reduce(((e,t)=>e+t.length),0),i=new Uint8Array(r);return t.reduce(((e,t)=>(i.set(t,e),e+t.length)),0),I(i)}([me(Te),me(String(e.length)),e]))}new C("rlp/5.7.0");const Pe=new C("address/5.7.0");function Oe(e){P(e,20)||Pe.throwArgumentError("invalid address","address",e);const t=(e=e.toLowerCase()).substring(2).split(""),r=new Uint8Array(40);for(let e=0;e<40;e++)r[e]=t[e].charCodeAt(0);const i=N(j(r));for(let e=0;e<40;e+=2)i[e>>1]>>4>=8&&(t[e]=t[e].toUpperCase()),(15&i[e>>1])>=8&&(t[e+1]=t[e+1].toUpperCase());return"0x"+t.join("")}const Re={};for(let e=0;e<10;e++)Re[String(e)]=String(e);for(let e=0;e<26;e++)Re[String.fromCharCode(65+e)]=String(10+e);const Be=Math.floor(function(e){return Math.log10?Math.log10(e):Math.log(e)/Math.LN10}(9007199254740991));function Le(e){let t=null;if("string"!=typeof e&&Pe.throwArgumentError("invalid address","address",e),e.match(/^(0x)?[0-9a-fA-F]{40}$/))"0x"!==e.substring(0,2)&&(e="0x"+e),t=Oe(e),e.match(/([A-F].*[a-f])|([a-f].*[A-F])/)&&t!==e&&Pe.throwArgumentError("bad address checksum","address",e);else if(e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){for(e.substring(2,4)!==function(e){let t=(e=(e=e.toUpperCase()).substring(4)+e.substring(0,2)+"00").split("").map((e=>Re[e])).join("");for(;t.length>=Be;){let e=t.substring(0,Be);t=parseInt(e,10)%97+t.substring(e.length)}let r=String(98-parseInt(t,10)%97);for(;r.length<2;)r="0"+r;return r}(e)&&Pe.throwArgumentError("bad icap checksum","address",e),t=function(e){return new q(e,36).toString(16)}(e.substring(4));t.length<40;)t="0"+t;t=Oe("0x"+t)}else Pe.throwArgumentError("invalid address","address",e);return t}function Ue(e,t,r){Object.defineProperty(e,t,{enumerable:!0,value:r,writable:!1})}new C("properties/5.7.0"),new C(ve);new Uint8Array(32).fill(0),V.from(-1);const je=V.from(0),De=V.from(1);V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),L(De.toHexString(),32),L(je.toHexString(),32);var ze={},We={},$e=qe;function qe(e,t){if(!e)throw new Error(t||"Assertion failed")}qe.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)};var He={exports:{}};"function"==typeof Object.create?He.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:He.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}};var Fe=$e,Ke=He.exports;function Ze(e,t){return!(55296!=(64512&e.charCodeAt(t))||t<0||t+1>=e.length)&&56320==(64512&e.charCodeAt(t+1))}function Ve(e){return(e>>>24|e>>>8&65280|e<<8&16711680|(255&e)<<24)>>>0}function Ye(e){return 1===e.length?"0"+e:e}function Ge(e){return 7===e.length?"0"+e:6===e.length?"00"+e:5===e.length?"000"+e:4===e.length?"0000"+e:3===e.length?"00000"+e:2===e.length?"000000"+e:1===e.length?"0000000"+e:e}We.inherits=Ke,We.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"==typeof e)if(t){if("hex"===t)for((e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e),n=0;n<e.length;n+=2)r.push(parseInt(e[n]+e[n+1],16))}else for(var i=0,n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?r[i++]=o:o<2048?(r[i++]=o>>6|192,r[i++]=63&o|128):Ze(e,n)?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++n)),r[i++]=o>>18|240,r[i++]=o>>12&63|128,r[i++]=o>>6&63|128,r[i++]=63&o|128):(r[i++]=o>>12|224,r[i++]=o>>6&63|128,r[i++]=63&o|128)}else for(n=0;n<e.length;n++)r[n]=0|e[n];return r},We.toHex=function(e){for(var t="",r=0;r<e.length;r++)t+=Ye(e[r].toString(16));return t},We.htonl=Ve,We.toHex32=function(e,t){for(var r="",i=0;i<e.length;i++){var n=e[i];"little"===t&&(n=Ve(n)),r+=Ge(n.toString(16))}return r},We.zero2=Ye,We.zero8=Ge,We.join32=function(e,t,r,i){var n=r-t;Fe(n%4==0);for(var o=new Array(n/4),s=0,a=t;s<o.length;s++,a+=4){var c;c="big"===i?e[a]<<24|e[a+1]<<16|e[a+2]<<8|e[a+3]:e[a+3]<<24|e[a+2]<<16|e[a+1]<<8|e[a],o[s]=c>>>0}return o},We.split32=function(e,t){for(var r=new Array(4*e.length),i=0,n=0;i<e.length;i++,n+=4){var o=e[i];"big"===t?(r[n]=o>>>24,r[n+1]=o>>>16&255,r[n+2]=o>>>8&255,r[n+3]=255&o):(r[n+3]=o>>>24,r[n+2]=o>>>16&255,r[n+1]=o>>>8&255,r[n]=255&o)}return r},We.rotr32=function(e,t){return e>>>t|e<<32-t},We.rotl32=function(e,t){return e<<t|e>>>32-t},We.sum32=function(e,t){return e+t>>>0},We.sum32_3=function(e,t,r){return e+t+r>>>0},We.sum32_4=function(e,t,r,i){return e+t+r+i>>>0},We.sum32_5=function(e,t,r,i,n){return e+t+r+i+n>>>0},We.sum64=function(e,t,r,i){var n=e[t],o=i+e[t+1]>>>0,s=(o<i?1:0)+r+n;e[t]=s>>>0,e[t+1]=o},We.sum64_hi=function(e,t,r,i){return(t+i>>>0<t?1:0)+e+r>>>0},We.sum64_lo=function(e,t,r,i){return t+i>>>0},We.sum64_4_hi=function(e,t,r,i,n,o,s,a){var c=0,l=t;return c+=(l=l+i>>>0)<t?1:0,c+=(l=l+o>>>0)<o?1:0,e+r+n+s+(c+=(l=l+a>>>0)<a?1:0)>>>0},We.sum64_4_lo=function(e,t,r,i,n,o,s,a){return t+i+o+a>>>0},We.sum64_5_hi=function(e,t,r,i,n,o,s,a,c,l){var u=0,h=t;return u+=(h=h+i>>>0)<t?1:0,u+=(h=h+o>>>0)<o?1:0,u+=(h=h+a>>>0)<a?1:0,e+r+n+s+c+(u+=(h=h+l>>>0)<l?1:0)>>>0},We.sum64_5_lo=function(e,t,r,i,n,o,s,a,c,l){return t+i+o+a+l>>>0},We.rotr64_hi=function(e,t,r){return(t<<32-r|e>>>r)>>>0},We.rotr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0},We.shr64_hi=function(e,t,r){return e>>>r},We.shr64_lo=function(e,t,r){return(e<<32-r|t>>>r)>>>0};var Je={},Qe=We,Xe=$e;function et(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}Je.BlockHash=et,et.prototype.update=function(e,t){if(e=Qe.toArray(e,t),this.pending?this.pending=this.pending.concat(e):this.pending=e,this.pendingTotal+=e.length,this.pending.length>=this._delta8){var r=(e=this.pending).length%this._delta8;this.pending=e.slice(e.length-r,e.length),0===this.pending.length&&(this.pending=null),e=Qe.join32(e,0,e.length-r,this.endian);for(var i=0;i<e.length;i+=this._delta32)this._update(e,i,i+this._delta32)}return this},et.prototype.digest=function(e){return this.update(this._pad()),Xe(null===this.pending),this._digest(e)},et.prototype._pad=function(){var e=this.pendingTotal,t=this._delta8,r=t-(e+this.padLength)%t,i=new Array(r+this.padLength);i[0]=128;for(var n=1;n<r;n++)i[n]=0;if(e<<=3,"big"===this.endian){for(var o=8;o<this.padLength;o++)i[n++]=0;i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=e>>>24&255,i[n++]=e>>>16&255,i[n++]=e>>>8&255,i[n++]=255&e}else for(i[n++]=255&e,i[n++]=e>>>8&255,i[n++]=e>>>16&255,i[n++]=e>>>24&255,i[n++]=0,i[n++]=0,i[n++]=0,i[n++]=0,o=8;o<this.padLength;o++)i[n++]=0;return i};var tt={},rt={},it=We.rotr32;function nt(e,t,r){return e&t^~e&r}function ot(e,t,r){return e&t^e&r^t&r}function st(e,t,r){return e^t^r}rt.ft_1=function(e,t,r,i){return 0===e?nt(t,r,i):1===e||3===e?st(t,r,i):2===e?ot(t,r,i):void 0},rt.ch32=nt,rt.maj32=ot,rt.p32=st,rt.s0_256=function(e){return it(e,2)^it(e,13)^it(e,22)},rt.s1_256=function(e){return it(e,6)^it(e,11)^it(e,25)},rt.g0_256=function(e){return it(e,7)^it(e,18)^e>>>3},rt.g1_256=function(e){return it(e,17)^it(e,19)^e>>>10};var at=We,ct=Je,lt=rt,ut=at.rotl32,ht=at.sum32,dt=at.sum32_5,ft=lt.ft_1,pt=ct.BlockHash,gt=[1518500249,1859775393,2400959708,3395469782];function mt(){if(!(this instanceof mt))return new mt;pt.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}at.inherits(mt,pt);var wt=mt;mt.blockSize=512,mt.outSize=160,mt.hmacStrength=80,mt.padLength=64,mt.prototype._update=function(e,t){for(var r=this.W,i=0;i<16;i++)r[i]=e[t+i];for(;i<r.length;i++)r[i]=ut(r[i-3]^r[i-8]^r[i-14]^r[i-16],1);var n=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4];for(i=0;i<r.length;i++){var l=~~(i/20),u=dt(ut(n,5),ft(l,o,s,a),c,r[i],gt[l]);c=a,a=s,s=ut(o,30),o=n,n=u}this.h[0]=ht(this.h[0],n),this.h[1]=ht(this.h[1],o),this.h[2]=ht(this.h[2],s),this.h[3]=ht(this.h[3],a),this.h[4]=ht(this.h[4],c)},mt.prototype._digest=function(e){return"hex"===e?at.toHex32(this.h,"big"):at.split32(this.h,"big")};var yt=We,vt=Je,bt=rt,xt=$e,At=yt.sum32,kt=yt.sum32_4,_t=yt.sum32_5,Ct=bt.ch32,Et=bt.maj32,St=bt.s0_256,It=bt.s1_256,Mt=bt.g0_256,Tt=bt.g1_256,Nt=vt.BlockHash,Pt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function Ot(){if(!(this instanceof Ot))return new Ot;Nt.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Pt,this.W=new Array(64)}yt.inherits(Ot,Nt);var Rt=Ot;Ot.blockSize=512,Ot.outSize=256,Ot.hmacStrength=192,Ot.padLength=64,Ot.prototype._update=function(e,t){for(var r=this.W,i=0;i<16;i++)r[i]=e[t+i];for(;i<r.length;i++)r[i]=kt(Tt(r[i-2]),r[i-7],Mt(r[i-15]),r[i-16]);var n=this.h[0],o=this.h[1],s=this.h[2],a=this.h[3],c=this.h[4],l=this.h[5],u=this.h[6],h=this.h[7];for(xt(this.k.length===r.length),i=0;i<r.length;i++){var d=_t(h,It(c),Ct(c,l,u),this.k[i],r[i]),f=At(St(n),Et(n,o,s));h=u,u=l,l=c,c=At(a,d),a=s,s=o,o=n,n=At(d,f)}this.h[0]=At(this.h[0],n),this.h[1]=At(this.h[1],o),this.h[2]=At(this.h[2],s),this.h[3]=At(this.h[3],a),this.h[4]=At(this.h[4],c),this.h[5]=At(this.h[5],l),this.h[6]=At(this.h[6],u),this.h[7]=At(this.h[7],h)},Ot.prototype._digest=function(e){return"hex"===e?yt.toHex32(this.h,"big"):yt.split32(this.h,"big")};var Bt=We,Lt=Rt;function Ut(){if(!(this instanceof Ut))return new Ut;Lt.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}Bt.inherits(Ut,Lt);var jt=Ut;Ut.blockSize=512,Ut.outSize=224,Ut.hmacStrength=192,Ut.padLength=64,Ut.prototype._digest=function(e){return"hex"===e?Bt.toHex32(this.h.slice(0,7),"big"):Bt.split32(this.h.slice(0,7),"big")};var Dt=We,zt=Je,Wt=$e,$t=Dt.rotr64_hi,qt=Dt.rotr64_lo,Ht=Dt.shr64_hi,Ft=Dt.shr64_lo,Kt=Dt.sum64,Zt=Dt.sum64_hi,Vt=Dt.sum64_lo,Yt=Dt.sum64_4_hi,Gt=Dt.sum64_4_lo,Jt=Dt.sum64_5_hi,Qt=Dt.sum64_5_lo,Xt=zt.BlockHash,er=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function tr(){if(!(this instanceof tr))return new tr;Xt.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=er,this.W=new Array(160)}Dt.inherits(tr,Xt);var rr=tr;function ir(e,t,r,i,n){var o=e&r^~e&n;return o<0&&(o+=4294967296),o}function nr(e,t,r,i,n,o){var s=t&i^~t&o;return s<0&&(s+=4294967296),s}function or(e,t,r,i,n){var o=e&r^e&n^r&n;return o<0&&(o+=4294967296),o}function sr(e,t,r,i,n,o){var s=t&i^t&o^i&o;return s<0&&(s+=4294967296),s}function ar(e,t){var r=$t(e,t,28)^$t(t,e,2)^$t(t,e,7);return r<0&&(r+=4294967296),r}function cr(e,t){var r=qt(e,t,28)^qt(t,e,2)^qt(t,e,7);return r<0&&(r+=4294967296),r}function lr(e,t){var r=$t(e,t,14)^$t(e,t,18)^$t(t,e,9);return r<0&&(r+=4294967296),r}function ur(e,t){var r=qt(e,t,14)^qt(e,t,18)^qt(t,e,9);return r<0&&(r+=4294967296),r}function hr(e,t){var r=$t(e,t,1)^$t(e,t,8)^Ht(e,t,7);return r<0&&(r+=4294967296),r}function dr(e,t){var r=qt(e,t,1)^qt(e,t,8)^Ft(e,t,7);return r<0&&(r+=4294967296),r}function fr(e,t){var r=$t(e,t,19)^$t(t,e,29)^Ht(e,t,6);return r<0&&(r+=4294967296),r}function pr(e,t){var r=qt(e,t,19)^qt(t,e,29)^Ft(e,t,6);return r<0&&(r+=4294967296),r}tr.blockSize=1024,tr.outSize=512,tr.hmacStrength=192,tr.padLength=128,tr.prototype._prepareBlock=function(e,t){for(var r=this.W,i=0;i<32;i++)r[i]=e[t+i];for(;i<r.length;i+=2){var n=fr(r[i-4],r[i-3]),o=pr(r[i-4],r[i-3]),s=r[i-14],a=r[i-13],c=hr(r[i-30],r[i-29]),l=dr(r[i-30],r[i-29]),u=r[i-32],h=r[i-31];r[i]=Yt(n,o,s,a,c,l,u,h),r[i+1]=Gt(n,o,s,a,c,l,u,h)}},tr.prototype._update=function(e,t){this._prepareBlock(e,t);var r=this.W,i=this.h[0],n=this.h[1],o=this.h[2],s=this.h[3],a=this.h[4],c=this.h[5],l=this.h[6],u=this.h[7],h=this.h[8],d=this.h[9],f=this.h[10],p=this.h[11],g=this.h[12],m=this.h[13],w=this.h[14],y=this.h[15];Wt(this.k.length===r.length);for(var v=0;v<r.length;v+=2){var b=w,x=y,A=lr(h,d),k=ur(h,d),_=ir(h,d,f,p,g),C=nr(h,d,f,p,g,m),E=this.k[v],S=this.k[v+1],I=r[v],M=r[v+1],T=Jt(b,x,A,k,_,C,E,S,I,M),N=Qt(b,x,A,k,_,C,E,S,I,M);b=ar(i,n),x=cr(i,n),A=or(i,n,o,s,a),k=sr(i,n,o,s,a,c);var P=Zt(b,x,A,k),O=Vt(b,x,A,k);w=g,y=m,g=f,m=p,f=h,p=d,h=Zt(l,u,T,N),d=Vt(u,u,T,N),l=a,u=c,a=o,c=s,o=i,s=n,i=Zt(T,N,P,O),n=Vt(T,N,P,O)}Kt(this.h,0,i,n),Kt(this.h,2,o,s),Kt(this.h,4,a,c),Kt(this.h,6,l,u),Kt(this.h,8,h,d),Kt(this.h,10,f,p),Kt(this.h,12,g,m),Kt(this.h,14,w,y)},tr.prototype._digest=function(e){return"hex"===e?Dt.toHex32(this.h,"big"):Dt.split32(this.h,"big")};var gr=We,mr=rr;function wr(){if(!(this instanceof wr))return new wr;mr.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}gr.inherits(wr,mr);var yr=wr;wr.blockSize=1024,wr.outSize=384,wr.hmacStrength=192,wr.padLength=128,wr.prototype._digest=function(e){return"hex"===e?gr.toHex32(this.h.slice(0,12),"big"):gr.split32(this.h.slice(0,12),"big")},tt.sha1=wt,tt.sha224=jt,tt.sha256=Rt,tt.sha384=yr,tt.sha512=rr;var vr={},br=We,xr=Je,Ar=br.rotl32,kr=br.sum32,_r=br.sum32_3,Cr=br.sum32_4,Er=xr.BlockHash;function Sr(){if(!(this instanceof Sr))return new Sr;Er.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}function Ir(e,t,r,i){return e<=15?t^r^i:e<=31?t&r|~t&i:e<=47?(t|~r)^i:e<=63?t&i|r&~i:t^(r|~i)}function Mr(e){return e<=15?0:e<=31?1518500249:e<=47?1859775393:e<=63?2400959708:2840853838}function Tr(e){return e<=15?1352829926:e<=31?1548603684:e<=47?1836072691:e<=63?2053994217:0}br.inherits(Sr,Er),vr.ripemd160=Sr,Sr.blockSize=512,Sr.outSize=160,Sr.hmacStrength=192,Sr.padLength=64,Sr.prototype._update=function(e,t){for(var r=this.h[0],i=this.h[1],n=this.h[2],o=this.h[3],s=this.h[4],a=r,c=i,l=n,u=o,h=s,d=0;d<80;d++){var f=kr(Ar(Cr(r,Ir(d,i,n,o),e[Nr[d]+t],Mr(d)),Or[d]),s);r=s,s=o,o=Ar(n,10),n=i,i=f,f=kr(Ar(Cr(a,Ir(79-d,c,l,u),e[Pr[d]+t],Tr(d)),Rr[d]),h),a=h,h=u,u=Ar(l,10),l=c,c=f}f=_r(this.h[1],n,u),this.h[1]=_r(this.h[2],o,h),this.h[2]=_r(this.h[3],s,a),this.h[3]=_r(this.h[4],r,c),this.h[4]=_r(this.h[0],i,l),this.h[0]=f},Sr.prototype._digest=function(e){return"hex"===e?br.toHex32(this.h,"little"):br.split32(this.h,"little")};var Nr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],Pr=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],Or=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],Rr=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],Br=We,Lr=$e;function Ur(e,t,r){if(!(this instanceof Ur))return new Ur(e,t,r);this.Hash=e,this.blockSize=e.blockSize/8,this.outSize=e.outSize/8,this.inner=null,this.outer=null,this._init(Br.toArray(t,r))}var jr=Ur;function Dr(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(t??r.path)}},r.exports),r.exports}Ur.prototype._init=function(e){e.length>this.blockSize&&(e=(new this.Hash).update(e).digest()),Lr(e.length<=this.blockSize);for(var t=e.length;t<this.blockSize;t++)e.push(0);for(t=0;t<e.length;t++)e[t]^=54;for(this.inner=(new this.Hash).update(e),t=0;t<e.length;t++)e[t]^=106;this.outer=(new this.Hash).update(e)},Ur.prototype.update=function(e,t){return this.inner.update(e,t),this},Ur.prototype.digest=function(e){return this.outer.update(this.inner.digest()),this.outer.digest(e)},function(e){var t=e;t.utils=We,t.common=Je,t.sha=tt,t.ripemd=vr,t.hmac=jr,t.sha1=t.sha.sha1,t.sha256=t.sha.sha256,t.sha224=t.sha.sha224,t.sha384=t.sha.sha384,t.sha512=t.sha.sha512,t.ripemd160=t.ripemd.ripemd160}(ze);var zr=Wr;function Wr(e,t){if(!e)throw new Error(t||"Assertion failed")}Wr.equal=function(e,t,r){if(e!=t)throw new Error(r||"Assertion failed: "+e+" != "+t)};var $r=Dr((function(e,t){var r=t;function i(e){return 1===e.length?"0"+e:e}function n(e){for(var t="",r=0;r<e.length;r++)t+=i(e[r].toString(16));return t}r.toArray=function(e,t){if(Array.isArray(e))return e.slice();if(!e)return[];var r=[];if("string"!=typeof e){for(var i=0;i<e.length;i++)r[i]=0|e[i];return r}if("hex"===t){(e=e.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(e="0"+e);for(i=0;i<e.length;i+=2)r.push(parseInt(e[i]+e[i+1],16))}else for(i=0;i<e.length;i++){var n=e.charCodeAt(i),o=n>>8,s=255&n;o?r.push(o,s):r.push(s)}return r},r.zero2=i,r.toHex=n,r.encode=function(e,t){return"hex"===t?n(e):e}})),qr=Dr((function(e,t){var r=t;r.assert=zr,r.toArray=$r.toArray,r.zero2=$r.zero2,r.toHex=$r.toHex,r.encode=$r.encode,r.getNAF=function(e,t,r){var i=new Array(Math.max(e.bitLength(),r)+1);i.fill(0);for(var n=1<<t+1,o=e.clone(),s=0;s<i.length;s++){var a,c=o.andln(n-1);o.isOdd()?(a=c>(n>>1)-1?(n>>1)-c:c,o.isubn(a)):a=0,i[s]=a,o.iushrn(1)}return i},r.getJSF=function(e,t){var r=[[],[]];e=e.clone(),t=t.clone();for(var i,n=0,o=0;e.cmpn(-n)>0||t.cmpn(-o)>0;){var s,a,c=e.andln(3)+n&3,l=t.andln(3)+o&3;3===c&&(c=-1),3===l&&(l=-1),1&c?s=3!==(i=e.andln(7)+n&7)&&5!==i||2!==l?c:-c:s=0,r[0].push(s),1&l?a=3!==(i=t.andln(7)+o&7)&&5!==i||2!==c?l:-l:a=0,r[1].push(a),2*n===s+1&&(n=1-n),2*o===a+1&&(o=1-o),e.iushrn(1),t.iushrn(1)}return r},r.cachedProperty=function(e,t,r){var i="_"+t;e.prototype[t]=function(){return void 0!==this[i]?this[i]:this[i]=r.call(this)}},r.parseBytes=function(e){return"string"==typeof e?r.toArray(e,"hex"):e},r.intFromLE=function(e){return new W(e,"hex","le")}})),Hr=qr.getNAF,Fr=qr.getJSF,Kr=qr.assert;function Zr(e,t){this.type=e,this.p=new W(t.p,16),this.red=t.prime?W.red(t.prime):W.mont(this.p),this.zero=new W(0).toRed(this.red),this.one=new W(1).toRed(this.red),this.two=new W(2).toRed(this.red),this.n=t.n&&new W(t.n,16),this.g=t.g&&this.pointFromJSON(t.g,t.gRed),this._wnafT1=new Array(4),this._wnafT2=new Array(4),this._wnafT3=new Array(4),this._wnafT4=new Array(4),this._bitLength=this.n?this.n.bitLength():0;var r=this.n&&this.p.div(this.n);!r||r.cmpn(100)>0?this.redN=null:(this._maxwellTrick=!0,this.redN=this.n.toRed(this.red))}var Vr=Zr;function Yr(e,t){this.curve=e,this.type=t,this.precomputed=null}Zr.prototype.point=function(){throw new Error("Not implemented")},Zr.prototype.validate=function(){throw new Error("Not implemented")},Zr.prototype._fixedNafMul=function(e,t){Kr(e.precomputed);var r=e._getDoubles(),i=Hr(t,1,this._bitLength),n=(1<<r.step+1)-(r.step%2==0?2:1);n/=3;var o,s,a=[];for(o=0;o<i.length;o+=r.step){s=0;for(var c=o+r.step-1;c>=o;c--)s=(s<<1)+i[c];a.push(s)}for(var l=this.jpoint(null,null,null),u=this.jpoint(null,null,null),h=n;h>0;h--){for(o=0;o<a.length;o++)(s=a[o])===h?u=u.mixedAdd(r.points[o]):s===-h&&(u=u.mixedAdd(r.points[o].neg()));l=l.add(u)}return l.toP()},Zr.prototype._wnafMul=function(e,t){var r=4,i=e._getNAFPoints(r);r=i.wnd;for(var n=i.points,o=Hr(t,r,this._bitLength),s=this.jpoint(null,null,null),a=o.length-1;a>=0;a--){for(var c=0;a>=0&&0===o[a];a--)c++;if(a>=0&&c++,s=s.dblp(c),a<0)break;var l=o[a];Kr(0!==l),s="affine"===e.type?l>0?s.mixedAdd(n[l-1>>1]):s.mixedAdd(n[-l-1>>1].neg()):l>0?s.add(n[l-1>>1]):s.add(n[-l-1>>1].neg())}return"affine"===e.type?s.toP():s},Zr.prototype._wnafMulAdd=function(e,t,r,i,n){var o,s,a,c=this._wnafT1,l=this._wnafT2,u=this._wnafT3,h=0;for(o=0;o<i;o++){var d=(a=t[o])._getNAFPoints(e);c[o]=d.wnd,l[o]=d.points}for(o=i-1;o>=1;o-=2){var f=o-1,p=o;if(1===c[f]&&1===c[p]){var g=[t[f],null,null,t[p]];0===t[f].y.cmp(t[p].y)?(g[1]=t[f].add(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg())):0===t[f].y.cmp(t[p].y.redNeg())?(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].add(t[p].neg())):(g[1]=t[f].toJ().mixedAdd(t[p]),g[2]=t[f].toJ().mixedAdd(t[p].neg()));var m=[-3,-1,-5,-7,0,7,5,1,3],w=Fr(r[f],r[p]);for(h=Math.max(w[0].length,h),u[f]=new Array(h),u[p]=new Array(h),s=0;s<h;s++){var y=0|w[0][s],v=0|w[1][s];u[f][s]=m[3*(y+1)+(v+1)],u[p][s]=0,l[f]=g}}else u[f]=Hr(r[f],c[f],this._bitLength),u[p]=Hr(r[p],c[p],this._bitLength),h=Math.max(u[f].length,h),h=Math.max(u[p].length,h)}var b=this.jpoint(null,null,null),x=this._wnafT4;for(o=h;o>=0;o--){for(var A=0;o>=0;){var k=!0;for(s=0;s<i;s++)x[s]=0|u[s][o],0!==x[s]&&(k=!1);if(!k)break;A++,o--}if(o>=0&&A++,b=b.dblp(A),o<0)break;for(s=0;s<i;s++){var _=x[s];0!==_&&(_>0?a=l[s][_-1>>1]:_<0&&(a=l[s][-_-1>>1].neg()),b="affine"===a.type?b.mixedAdd(a):b.add(a))}}for(o=0;o<i;o++)l[o]=null;return n?b:b.toP()},Zr.BasePoint=Yr,Yr.prototype.eq=function(){throw new Error("Not implemented")},Yr.prototype.validate=function(){return this.curve.validate(this)},Zr.prototype.decodePoint=function(e,t){e=qr.toArray(e,t);var r=this.p.byteLength();if((4===e[0]||6===e[0]||7===e[0])&&e.length-1==2*r)return 6===e[0]?Kr(e[e.length-1]%2==0):7===e[0]&&Kr(e[e.length-1]%2==1),this.point(e.slice(1,1+r),e.slice(1+r,1+2*r));if((2===e[0]||3===e[0])&&e.length-1===r)return this.pointFromX(e.slice(1,1+r),3===e[0]);throw new Error("Unknown point format")},Yr.prototype.encodeCompressed=function(e){return this.encode(e,!0)},Yr.prototype._encode=function(e){var t=this.curve.p.byteLength(),r=this.getX().toArray("be",t);return e?[this.getY().isEven()?2:3].concat(r):[4].concat(r,this.getY().toArray("be",t))},Yr.prototype.encode=function(e,t){return qr.encode(this._encode(t),e)},Yr.prototype.precompute=function(e){if(this.precomputed)return this;var t={doubles:null,naf:null,beta:null};return t.naf=this._getNAFPoints(8),t.doubles=this._getDoubles(4,e),t.beta=this._getBeta(),this.precomputed=t,this},Yr.prototype._hasDoubles=function(e){if(!this.precomputed)return!1;var t=this.precomputed.doubles;return!!t&&t.points.length>=Math.ceil((e.bitLength()+1)/t.step)},Yr.prototype._getDoubles=function(e,t){if(this.precomputed&&this.precomputed.doubles)return this.precomputed.doubles;for(var r=[this],i=this,n=0;n<t;n+=e){for(var o=0;o<e;o++)i=i.dbl();r.push(i)}return{step:e,points:r}},Yr.prototype._getNAFPoints=function(e){if(this.precomputed&&this.precomputed.naf)return this.precomputed.naf;for(var t=[this],r=(1<<e)-1,i=1===r?null:this.dbl(),n=1;n<r;n++)t[n]=t[n-1].add(i);return{wnd:e,points:t}},Yr.prototype._getBeta=function(){return null},Yr.prototype.dblp=function(e){for(var t=this,r=0;r<e;r++)t=t.dbl();return t};var Gr=Dr((function(e){"function"==typeof Object.create?e.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,t){if(t){e.super_=t;var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}}})),Jr=qr.assert;function Qr(e){Vr.call(this,"short",e),this.a=new W(e.a,16).toRed(this.red),this.b=new W(e.b,16).toRed(this.red),this.tinv=this.two.redInvm(),this.zeroA=0===this.a.fromRed().cmpn(0),this.threeA=0===this.a.fromRed().sub(this.p).cmpn(-3),this.endo=this._getEndomorphism(e),this._endoWnafT1=new Array(4),this._endoWnafT2=new Array(4)}Gr(Qr,Vr);var Xr=Qr;function ei(e,t,r,i){Vr.BasePoint.call(this,e,"affine"),null===t&&null===r?(this.x=null,this.y=null,this.inf=!0):(this.x=new W(t,16),this.y=new W(r,16),i&&(this.x.forceRed(this.curve.red),this.y.forceRed(this.curve.red)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.inf=!1)}function ti(e,t,r,i){Vr.BasePoint.call(this,e,"jacobian"),null===t&&null===r&&null===i?(this.x=this.curve.one,this.y=this.curve.one,this.z=new W(0)):(this.x=new W(t,16),this.y=new W(r,16),this.z=new W(i,16)),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.y.red||(this.y=this.y.toRed(this.curve.red)),this.z.red||(this.z=this.z.toRed(this.curve.red)),this.zOne=this.z===this.curve.one}Qr.prototype._getEndomorphism=function(e){if(this.zeroA&&this.g&&this.n&&1===this.p.modn(3)){var t,r;if(e.beta)t=new W(e.beta,16).toRed(this.red);else{var i=this._getEndoRoots(this.p);t=(t=i[0].cmp(i[1])<0?i[0]:i[1]).toRed(this.red)}if(e.lambda)r=new W(e.lambda,16);else{var n=this._getEndoRoots(this.n);0===this.g.mul(n[0]).x.cmp(this.g.x.redMul(t))?r=n[0]:(r=n[1],Jr(0===this.g.mul(r).x.cmp(this.g.x.redMul(t))))}return{beta:t,lambda:r,basis:e.basis?e.basis.map((function(e){return{a:new W(e.a,16),b:new W(e.b,16)}})):this._getEndoBasis(r)}}},Qr.prototype._getEndoRoots=function(e){var t=e===this.p?this.red:W.mont(e),r=new W(2).toRed(t).redInvm(),i=r.redNeg(),n=new W(3).toRed(t).redNeg().redSqrt().redMul(r);return[i.redAdd(n).fromRed(),i.redSub(n).fromRed()]},Qr.prototype._getEndoBasis=function(e){for(var t,r,i,n,o,s,a,c,l,u=this.n.ushrn(Math.floor(this.n.bitLength()/2)),h=e,d=this.n.clone(),f=new W(1),p=new W(0),g=new W(0),m=new W(1),w=0;0!==h.cmpn(0);){var y=d.div(h);c=d.sub(y.mul(h)),l=g.sub(y.mul(f));var v=m.sub(y.mul(p));if(!i&&c.cmp(u)<0)t=a.neg(),r=f,i=c.neg(),n=l;else if(i&&2==++w)break;a=c,d=h,h=c,g=f,f=l,m=p,p=v}o=c.neg(),s=l;var b=i.sqr().add(n.sqr());return o.sqr().add(s.sqr()).cmp(b)>=0&&(o=t,s=r),i.negative&&(i=i.neg(),n=n.neg()),o.negative&&(o=o.neg(),s=s.neg()),[{a:i,b:n},{a:o,b:s}]},Qr.prototype._endoSplit=function(e){var t=this.endo.basis,r=t[0],i=t[1],n=i.b.mul(e).divRound(this.n),o=r.b.neg().mul(e).divRound(this.n),s=n.mul(r.a),a=o.mul(i.a),c=n.mul(r.b),l=o.mul(i.b);return{k1:e.sub(s).sub(a),k2:c.add(l).neg()}},Qr.prototype.pointFromX=function(e,t){(e=new W(e,16)).red||(e=e.toRed(this.red));var r=e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),i=r.redSqrt();if(0!==i.redSqr().redSub(r).cmp(this.zero))throw new Error("invalid point");var n=i.fromRed().isOdd();return(t&&!n||!t&&n)&&(i=i.redNeg()),this.point(e,i)},Qr.prototype.validate=function(e){if(e.inf)return!0;var t=e.x,r=e.y,i=this.a.redMul(t),n=t.redSqr().redMul(t).redIAdd(i).redIAdd(this.b);return 0===r.redSqr().redISub(n).cmpn(0)},Qr.prototype._endoWnafMulAdd=function(e,t,r){for(var i=this._endoWnafT1,n=this._endoWnafT2,o=0;o<e.length;o++){var s=this._endoSplit(t[o]),a=e[o],c=a._getBeta();s.k1.negative&&(s.k1.ineg(),a=a.neg(!0)),s.k2.negative&&(s.k2.ineg(),c=c.neg(!0)),i[2*o]=a,i[2*o+1]=c,n[2*o]=s.k1,n[2*o+1]=s.k2}for(var l=this._wnafMulAdd(1,i,n,2*o,r),u=0;u<2*o;u++)i[u]=null,n[u]=null;return l},Gr(ei,Vr.BasePoint),Qr.prototype.point=function(e,t,r){return new ei(this,e,t,r)},Qr.prototype.pointFromJSON=function(e,t){return ei.fromJSON(this,e,t)},ei.prototype._getBeta=function(){if(this.curve.endo){var e=this.precomputed;if(e&&e.beta)return e.beta;var t=this.curve.point(this.x.redMul(this.curve.endo.beta),this.y);if(e){var r=this.curve,i=function(e){return r.point(e.x.redMul(r.endo.beta),e.y)};e.beta=t,t.precomputed={beta:null,naf:e.naf&&{wnd:e.naf.wnd,points:e.naf.points.map(i)},doubles:e.doubles&&{step:e.doubles.step,points:e.doubles.points.map(i)}}}return t}},ei.prototype.toJSON=function(){return this.precomputed?[this.x,this.y,this.precomputed&&{doubles:this.precomputed.doubles&&{step:this.precomputed.doubles.step,points:this.precomputed.doubles.points.slice(1)},naf:this.precomputed.naf&&{wnd:this.precomputed.naf.wnd,points:this.precomputed.naf.points.slice(1)}}]:[this.x,this.y]},ei.fromJSON=function(e,t,r){"string"==typeof t&&(t=JSON.parse(t));var i=e.point(t[0],t[1],r);if(!t[2])return i;function n(t){return e.point(t[0],t[1],r)}var o=t[2];return i.precomputed={beta:null,doubles:o.doubles&&{step:o.doubles.step,points:[i].concat(o.doubles.points.map(n))},naf:o.naf&&{wnd:o.naf.wnd,points:[i].concat(o.naf.points.map(n))}},i},ei.prototype.inspect=function(){return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" y: "+this.y.fromRed().toString(16,2)+">"},ei.prototype.isInfinity=function(){return this.inf},ei.prototype.add=function(e){if(this.inf)return e;if(e.inf)return this;if(this.eq(e))return this.dbl();if(this.neg().eq(e))return this.curve.point(null,null);if(0===this.x.cmp(e.x))return this.curve.point(null,null);var t=this.y.redSub(e.y);0!==t.cmpn(0)&&(t=t.redMul(this.x.redSub(e.x).redInvm()));var r=t.redSqr().redISub(this.x).redISub(e.x),i=t.redMul(this.x.redSub(r)).redISub(this.y);return this.curve.point(r,i)},ei.prototype.dbl=function(){if(this.inf)return this;var e=this.y.redAdd(this.y);if(0===e.cmpn(0))return this.curve.point(null,null);var t=this.curve.a,r=this.x.redSqr(),i=e.redInvm(),n=r.redAdd(r).redIAdd(r).redIAdd(t).redMul(i),o=n.redSqr().redISub(this.x.redAdd(this.x)),s=n.redMul(this.x.redSub(o)).redISub(this.y);return this.curve.point(o,s)},ei.prototype.getX=function(){return this.x.fromRed()},ei.prototype.getY=function(){return this.y.fromRed()},ei.prototype.mul=function(e){return e=new W(e,16),this.isInfinity()?this:this._hasDoubles(e)?this.curve._fixedNafMul(this,e):this.curve.endo?this.curve._endoWnafMulAdd([this],[e]):this.curve._wnafMul(this,e)},ei.prototype.mulAdd=function(e,t,r){var i=[this,t],n=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,n):this.curve._wnafMulAdd(1,i,n,2)},ei.prototype.jmulAdd=function(e,t,r){var i=[this,t],n=[e,r];return this.curve.endo?this.curve._endoWnafMulAdd(i,n,!0):this.curve._wnafMulAdd(1,i,n,2,!0)},ei.prototype.eq=function(e){return this===e||this.inf===e.inf&&(this.inf||0===this.x.cmp(e.x)&&0===this.y.cmp(e.y))},ei.prototype.neg=function(e){if(this.inf)return this;var t=this.curve.point(this.x,this.y.redNeg());if(e&&this.precomputed){var r=this.precomputed,i=function(e){return e.neg()};t.precomputed={naf:r.naf&&{wnd:r.naf.wnd,points:r.naf.points.map(i)},doubles:r.doubles&&{step:r.doubles.step,points:r.doubles.points.map(i)}}}return t},ei.prototype.toJ=function(){return this.inf?this.curve.jpoint(null,null,null):this.curve.jpoint(this.x,this.y,this.curve.one)},Gr(ti,Vr.BasePoint),Qr.prototype.jpoint=function(e,t,r){return new ti(this,e,t,r)},ti.prototype.toP=function(){if(this.isInfinity())return this.curve.point(null,null);var e=this.z.redInvm(),t=e.redSqr(),r=this.x.redMul(t),i=this.y.redMul(t).redMul(e);return this.curve.point(r,i)},ti.prototype.neg=function(){return this.curve.jpoint(this.x,this.y.redNeg(),this.z)},ti.prototype.add=function(e){if(this.isInfinity())return e;if(e.isInfinity())return this;var t=e.z.redSqr(),r=this.z.redSqr(),i=this.x.redMul(t),n=e.x.redMul(r),o=this.y.redMul(t.redMul(e.z)),s=e.y.redMul(r.redMul(this.z)),a=i.redSub(n),c=o.redSub(s);if(0===a.cmpn(0))return 0!==c.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var l=a.redSqr(),u=l.redMul(a),h=i.redMul(l),d=c.redSqr().redIAdd(u).redISub(h).redISub(h),f=c.redMul(h.redISub(d)).redISub(o.redMul(u)),p=this.z.redMul(e.z).redMul(a);return this.curve.jpoint(d,f,p)},ti.prototype.mixedAdd=function(e){if(this.isInfinity())return e.toJ();if(e.isInfinity())return this;var t=this.z.redSqr(),r=this.x,i=e.x.redMul(t),n=this.y,o=e.y.redMul(t).redMul(this.z),s=r.redSub(i),a=n.redSub(o);if(0===s.cmpn(0))return 0!==a.cmpn(0)?this.curve.jpoint(null,null,null):this.dbl();var c=s.redSqr(),l=c.redMul(s),u=r.redMul(c),h=a.redSqr().redIAdd(l).redISub(u).redISub(u),d=a.redMul(u.redISub(h)).redISub(n.redMul(l)),f=this.z.redMul(s);return this.curve.jpoint(h,d,f)},ti.prototype.dblp=function(e){if(0===e)return this;if(this.isInfinity())return this;if(!e)return this.dbl();var t;if(this.curve.zeroA||this.curve.threeA){var r=this;for(t=0;t<e;t++)r=r.dbl();return r}var i=this.curve.a,n=this.curve.tinv,o=this.x,s=this.y,a=this.z,c=a.redSqr().redSqr(),l=s.redAdd(s);for(t=0;t<e;t++){var u=o.redSqr(),h=l.redSqr(),d=h.redSqr(),f=u.redAdd(u).redIAdd(u).redIAdd(i.redMul(c)),p=o.redMul(h),g=f.redSqr().redISub(p.redAdd(p)),m=p.redISub(g),w=f.redMul(m);w=w.redIAdd(w).redISub(d);var y=l.redMul(a);t+1<e&&(c=c.redMul(d)),o=g,a=y,l=w}return this.curve.jpoint(o,l.redMul(n),a)},ti.prototype.dbl=function(){return this.isInfinity()?this:this.curve.zeroA?this._zeroDbl():this.curve.threeA?this._threeDbl():this._dbl()},ti.prototype._zeroDbl=function(){var e,t,r;if(this.zOne){var i=this.x.redSqr(),n=this.y.redSqr(),o=n.redSqr(),s=this.x.redAdd(n).redSqr().redISub(i).redISub(o);s=s.redIAdd(s);var a=i.redAdd(i).redIAdd(i),c=a.redSqr().redISub(s).redISub(s),l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),e=c,t=a.redMul(s.redISub(c)).redISub(l),r=this.y.redAdd(this.y)}else{var u=this.x.redSqr(),h=this.y.redSqr(),d=h.redSqr(),f=this.x.redAdd(h).redSqr().redISub(u).redISub(d);f=f.redIAdd(f);var p=u.redAdd(u).redIAdd(u),g=p.redSqr(),m=d.redIAdd(d);m=(m=m.redIAdd(m)).redIAdd(m),e=g.redISub(f).redISub(f),t=p.redMul(f.redISub(e)).redISub(m),r=(r=this.y.redMul(this.z)).redIAdd(r)}return this.curve.jpoint(e,t,r)},ti.prototype._threeDbl=function(){var e,t,r;if(this.zOne){var i=this.x.redSqr(),n=this.y.redSqr(),o=n.redSqr(),s=this.x.redAdd(n).redSqr().redISub(i).redISub(o);s=s.redIAdd(s);var a=i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),c=a.redSqr().redISub(s).redISub(s);e=c;var l=o.redIAdd(o);l=(l=l.redIAdd(l)).redIAdd(l),t=a.redMul(s.redISub(c)).redISub(l),r=this.y.redAdd(this.y)}else{var u=this.z.redSqr(),h=this.y.redSqr(),d=this.x.redMul(h),f=this.x.redSub(u).redMul(this.x.redAdd(u));f=f.redAdd(f).redIAdd(f);var p=d.redIAdd(d),g=(p=p.redIAdd(p)).redAdd(p);e=f.redSqr().redISub(g),r=this.y.redAdd(this.z).redSqr().redISub(h).redISub(u);var m=h.redSqr();m=(m=(m=m.redIAdd(m)).redIAdd(m)).redIAdd(m),t=f.redMul(p.redISub(e)).redISub(m)}return this.curve.jpoint(e,t,r)},ti.prototype._dbl=function(){var e=this.curve.a,t=this.x,r=this.y,i=this.z,n=i.redSqr().redSqr(),o=t.redSqr(),s=r.redSqr(),a=o.redAdd(o).redIAdd(o).redIAdd(e.redMul(n)),c=t.redAdd(t),l=(c=c.redIAdd(c)).redMul(s),u=a.redSqr().redISub(l.redAdd(l)),h=l.redISub(u),d=s.redSqr();d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);var f=a.redMul(h).redISub(d),p=r.redAdd(r).redMul(i);return this.curve.jpoint(u,f,p)},ti.prototype.trpl=function(){if(!this.curve.zeroA)return this.dbl().add(this);var e=this.x.redSqr(),t=this.y.redSqr(),r=this.z.redSqr(),i=t.redSqr(),n=e.redAdd(e).redIAdd(e),o=n.redSqr(),s=this.x.redAdd(t).redSqr().redISub(e).redISub(i),a=(s=(s=(s=s.redIAdd(s)).redAdd(s).redIAdd(s)).redISub(o)).redSqr(),c=i.redIAdd(i);c=(c=(c=c.redIAdd(c)).redIAdd(c)).redIAdd(c);var l=n.redIAdd(s).redSqr().redISub(o).redISub(a).redISub(c),u=t.redMul(l);u=(u=u.redIAdd(u)).redIAdd(u);var h=this.x.redMul(a).redISub(u);h=(h=h.redIAdd(h)).redIAdd(h);var d=this.y.redMul(l.redMul(c.redISub(l)).redISub(s.redMul(a)));d=(d=(d=d.redIAdd(d)).redIAdd(d)).redIAdd(d);var f=this.z.redAdd(s).redSqr().redISub(r).redISub(a);return this.curve.jpoint(h,d,f)},ti.prototype.mul=function(e,t){return e=new W(e,t),this.curve._wnafMul(this,e)},ti.prototype.eq=function(e){if("affine"===e.type)return this.eq(e.toJ());if(this===e)return!0;var t=this.z.redSqr(),r=e.z.redSqr();if(0!==this.x.redMul(r).redISub(e.x.redMul(t)).cmpn(0))return!1;var i=t.redMul(this.z),n=r.redMul(e.z);return 0===this.y.redMul(n).redISub(e.y.redMul(i)).cmpn(0)},ti.prototype.eqXToP=function(e){var t=this.z.redSqr(),r=e.toRed(this.curve.red).redMul(t);if(0===this.x.cmp(r))return!0;for(var i=e.clone(),n=this.curve.redN.redMul(t);;){if(i.iadd(this.curve.n),i.cmp(this.curve.p)>=0)return!1;if(r.redIAdd(n),0===this.x.cmp(r))return!0}},ti.prototype.inspect=function(){return this.isInfinity()?"<EC JPoint Infinity>":"<EC JPoint x: "+this.x.toString(16,2)+" y: "+this.y.toString(16,2)+" z: "+this.z.toString(16,2)+">"},ti.prototype.isInfinity=function(){return 0===this.z.cmpn(0)};var ri=Dr((function(e,t){var r=t;r.base=Vr,r.short=Xr,r.mont=null,r.edwards=null})),ii=Dr((function(e,t){var r,i=t,n=qr.assert;function o(e){"short"===e.type?this.curve=new ri.short(e):"edwards"===e.type?this.curve=new ri.edwards(e):this.curve=new ri.mont(e),this.g=this.curve.g,this.n=this.curve.n,this.hash=e.hash,n(this.g.validate(),"Invalid curve"),n(this.g.mul(this.n).isInfinity(),"Invalid curve, G*N != O")}function s(e,t){Object.defineProperty(i,e,{configurable:!0,enumerable:!0,get:function(){var r=new o(t);return Object.defineProperty(i,e,{configurable:!0,enumerable:!0,value:r}),r}})}i.PresetCurve=o,s("p192",{type:"short",prime:"p192",p:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",a:"ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",b:"64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",n:"ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",hash:ze.sha256,gRed:!1,g:["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012","07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]}),s("p224",{type:"short",prime:"p224",p:"ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",a:"ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",b:"b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",n:"ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",hash:ze.sha256,gRed:!1,g:["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21","bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]}),s("p256",{type:"short",prime:null,p:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",a:"ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",b:"5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",n:"ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",hash:ze.sha256,gRed:!1,g:["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296","4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]}),s("p384",{type:"short",prime:null,p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",a:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",b:"b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",n:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",hash:ze.sha384,gRed:!1,g:["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7","3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]}),s("p521",{type:"short",prime:null,p:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",a:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",b:"00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",n:"000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",hash:ze.sha512,gRed:!1,g:["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66","00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]}),s("curve25519",{type:"mont",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"76d06",b:"1",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:ze.sha256,gRed:!1,g:["9"]}),s("ed25519",{type:"edwards",prime:"p25519",p:"7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",a:"-1",c:"1",d:"52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",n:"1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",hash:ze.sha256,gRed:!1,g:["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a","6666666666666666666666666666666666666666666666666666666666666658"]});try{r=null.crash()}catch{r=void 0}s("secp256k1",{type:"short",prime:"k256",p:"ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",a:"0",b:"7",n:"ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",h:"1",hash:ze.sha256,beta:"7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",lambda:"5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",basis:[{a:"3086d221a7d46bcde86c90e49284eb15",b:"-e4437ed6010e88286f547fa90abfe4c3"},{a:"114ca50f7a8e2f3f657c1108d9d44cfd8",b:"3086d221a7d46bcde86c90e49284eb15"}],gRed:!1,g:["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",r]})}));function ni(e){if(!(this instanceof ni))return new ni(e);this.hash=e.hash,this.predResist=!!e.predResist,this.outLen=this.hash.outSize,this.minEntropy=e.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var t=$r.toArray(e.entropy,e.entropyEnc||"hex"),r=$r.toArray(e.nonce,e.nonceEnc||"hex"),i=$r.toArray(e.pers,e.persEnc||"hex");zr(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(t,r,i)}var oi=ni;ni.prototype._init=function(e,t,r){var i=e.concat(t).concat(r);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var n=0;n<this.V.length;n++)this.K[n]=0,this.V[n]=1;this._update(i),this._reseed=1,this.reseedInterval=281474976710656},ni.prototype._hmac=function(){return new ze.hmac(this.hash,this.K)},ni.prototype._update=function(e){var t=this._hmac().update(this.V).update([0]);e&&(t=t.update(e)),this.K=t.digest(),this.V=this._hmac().update(this.V).digest(),e&&(this.K=this._hmac().update(this.V).update([1]).update(e).digest(),this.V=this._hmac().update(this.V).digest())},ni.prototype.reseed=function(e,t,r,i){"string"!=typeof t&&(i=r,r=t,t=null),e=$r.toArray(e,t),r=$r.toArray(r,i),zr(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(e.concat(r||[])),this._reseed=1},ni.prototype.generate=function(e,t,r,i){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!=typeof t&&(i=r,r=t,t=null),r&&(r=$r.toArray(r,i||"hex"),this._update(r));for(var n=[];n.length<e;)this.V=this._hmac().update(this.V).digest(),n=n.concat(this.V);var o=n.slice(0,e);return this._update(r),this._reseed++,$r.encode(o,t)};var si=qr.assert;function ai(e,t){this.ec=e,this.priv=null,this.pub=null,t.priv&&this._importPrivate(t.priv,t.privEnc),t.pub&&this._importPublic(t.pub,t.pubEnc)}var ci=ai;ai.fromPublic=function(e,t,r){return t instanceof ai?t:new ai(e,{pub:t,pubEnc:r})},ai.fromPrivate=function(e,t,r){return t instanceof ai?t:new ai(e,{priv:t,privEnc:r})},ai.prototype.validate=function(){var e=this.getPublic();return e.isInfinity()?{result:!1,reason:"Invalid public key"}:e.validate()?e.mul(this.ec.curve.n).isInfinity()?{result:!0,reason:null}:{result:!1,reason:"Public key * N != O"}:{result:!1,reason:"Public key is not a point"}},ai.prototype.getPublic=function(e,t){return"string"==typeof e&&(t=e,e=null),this.pub||(this.pub=this.ec.g.mul(this.priv)),t?this.pub.encode(t,e):this.pub},ai.prototype.getPrivate=function(e){return"hex"===e?this.priv.toString(16,2):this.priv},ai.prototype._importPrivate=function(e,t){this.priv=new W(e,t||16),this.priv=this.priv.umod(this.ec.curve.n)},ai.prototype._importPublic=function(e,t){if(e.x||e.y)return"mont"===this.ec.curve.type?si(e.x,"Need x coordinate"):("short"===this.ec.curve.type||"edwards"===this.ec.curve.type)&&si(e.x&&e.y,"Need both x and y coordinate"),void(this.pub=this.ec.curve.point(e.x,e.y));this.pub=this.ec.curve.decodePoint(e,t)},ai.prototype.derive=function(e){return e.validate()||si(e.validate(),"public point not validated"),e.mul(this.priv).getX()},ai.prototype.sign=function(e,t,r){return this.ec.sign(e,this,t,r)},ai.prototype.verify=function(e,t){return this.ec.verify(e,t,this)},ai.prototype.inspect=function(){return"<Key priv: "+(this.priv&&this.priv.toString(16,2))+" pub: "+(this.pub&&this.pub.inspect())+" >"};var li=qr.assert;function ui(e,t){if(e instanceof ui)return e;this._importDER(e,t)||(li(e.r&&e.s,"Signature without r or s"),this.r=new W(e.r,16),this.s=new W(e.s,16),void 0===e.recoveryParam?this.recoveryParam=null:this.recoveryParam=e.recoveryParam)}var hi=ui;function di(){this.place=0}function fi(e,t){var r=e[t.place++];if(!(128&r))return r;var i=15&r;if(0===i||i>4)return!1;for(var n=0,o=0,s=t.place;o<i;o++,s++)n<<=8,n|=e[s],n>>>=0;return!(n<=127)&&(t.place=s,n)}function pi(e){for(var t=0,r=e.length-1;!e[t]&&!(128&e[t+1])&&t<r;)t++;return 0===t?e:e.slice(t)}function gi(e,t){if(t<128)e.push(t);else{var r=1+(Math.log(t)/Math.LN2>>>3);for(e.push(128|r);--r;)e.push(t>>>(r<<3)&255);e.push(t)}}ui.prototype._importDER=function(e,t){e=qr.toArray(e,t);var r=new di;if(48!==e[r.place++])return!1;var i=fi(e,r);if(!1===i||i+r.place!==e.length||2!==e[r.place++])return!1;var n=fi(e,r);if(!1===n)return!1;var o=e.slice(r.place,n+r.place);if(r.place+=n,2!==e[r.place++])return!1;var s=fi(e,r);if(!1===s||e.length!==s+r.place)return!1;var a=e.slice(r.place,s+r.place);if(0===o[0]){if(!(128&o[1]))return!1;o=o.slice(1)}if(0===a[0]){if(!(128&a[1]))return!1;a=a.slice(1)}return this.r=new W(o),this.s=new W(a),this.recoveryParam=null,!0},ui.prototype.toDER=function(e){var t=this.r.toArray(),r=this.s.toArray();for(128&t[0]&&(t=[0].concat(t)),128&r[0]&&(r=[0].concat(r)),t=pi(t),r=pi(r);!(r[0]||128&r[1]);)r=r.slice(1);var i=[2];gi(i,t.length),(i=i.concat(t)).push(2),gi(i,r.length);var n=i.concat(r),o=[48];return gi(o,n.length),o=o.concat(n),qr.encode(o,e)};var mi=function(){throw new Error("unsupported")},wi=qr.assert;function yi(e){if(!(this instanceof yi))return new yi(e);"string"==typeof e&&(wi(Object.prototype.hasOwnProperty.call(ii,e),"Unknown curve "+e),e=ii[e]),e instanceof ii.PresetCurve&&(e={curve:e}),this.curve=e.curve.curve,this.n=this.curve.n,this.nh=this.n.ushrn(1),this.g=this.curve.g,this.g=e.curve.g,this.g.precompute(e.curve.n.bitLength()+1),this.hash=e.hash||e.curve.hash}var vi=yi;yi.prototype.keyPair=function(e){return new ci(this,e)},yi.prototype.keyFromPrivate=function(e,t){return ci.fromPrivate(this,e,t)},yi.prototype.keyFromPublic=function(e,t){return ci.fromPublic(this,e,t)},yi.prototype.genKeyPair=function(e){e||(e={});for(var t=new oi({hash:this.hash,pers:e.pers,persEnc:e.persEnc||"utf8",entropy:e.entropy||mi(this.hash.hmacStrength),entropyEnc:e.entropy&&e.entropyEnc||"utf8",nonce:this.n.toArray()}),r=this.n.byteLength(),i=this.n.sub(new W(2));;){var n=new W(t.generate(r));if(!(n.cmp(i)>0))return n.iaddn(1),this.keyFromPrivate(n)}},yi.prototype._truncateToN=function(e,t){var r=8*e.byteLength()-this.n.bitLength();return r>0&&(e=e.ushrn(r)),!t&&e.cmp(this.n)>=0?e.sub(this.n):e},yi.prototype.sign=function(e,t,r,i){"object"==typeof r&&(i=r,r=null),i||(i={}),t=this.keyFromPrivate(t,r),e=this._truncateToN(new W(e,16));for(var n=this.n.byteLength(),o=t.getPrivate().toArray("be",n),s=e.toArray("be",n),a=new oi({hash:this.hash,entropy:o,nonce:s,pers:i.pers,persEnc:i.persEnc||"utf8"}),c=this.n.sub(new W(1)),l=0;;l++){var u=i.k?i.k(l):new W(a.generate(this.n.byteLength()));if(!((u=this._truncateToN(u,!0)).cmpn(1)<=0||u.cmp(c)>=0)){var h=this.g.mul(u);if(!h.isInfinity()){var d=h.getX(),f=d.umod(this.n);if(0!==f.cmpn(0)){var p=u.invm(this.n).mul(f.mul(t.getPrivate()).iadd(e));if(0!==(p=p.umod(this.n)).cmpn(0)){var g=(h.getY().isOdd()?1:0)|(0!==d.cmp(f)?2:0);return i.canonical&&p.cmp(this.nh)>0&&(p=this.n.sub(p),g^=1),new hi({r:f,s:p,recoveryParam:g})}}}}}},yi.prototype.verify=function(e,t,r,i){e=this._truncateToN(new W(e,16)),r=this.keyFromPublic(r,i);var n=(t=new hi(t,"hex")).r,o=t.s;if(n.cmpn(1)<0||n.cmp(this.n)>=0||o.cmpn(1)<0||o.cmp(this.n)>=0)return!1;var s,a=o.invm(this.n),c=a.mul(e).umod(this.n),l=a.mul(n).umod(this.n);return this.curve._maxwellTrick?!(s=this.g.jmulAdd(c,r.getPublic(),l)).isInfinity()&&s.eqXToP(n):!(s=this.g.mulAdd(c,r.getPublic(),l)).isInfinity()&&0===s.getX().umod(this.n).cmp(n)},yi.prototype.recoverPubKey=function(e,t,r,i){wi((3&r)===r,"The recovery param is more than two bits"),t=new hi(t,i);var n=this.n,o=new W(e),s=t.r,a=t.s,c=1&r,l=r>>1;if(s.cmp(this.curve.p.umod(this.curve.n))>=0&&l)throw new Error("Unable to find sencond key candinate");s=l?this.curve.pointFromX(s.add(this.curve.n),c):this.curve.pointFromX(s,c);var u=t.r.invm(n),h=n.sub(o).mul(u).umod(n),d=a.mul(u).umod(n);return this.g.mulAdd(h,s,d)},yi.prototype.getKeyRecoveryParam=function(e,t,r,i){if(null!==(t=new hi(t,i)).recoveryParam)return t.recoveryParam;for(var n=0;n<4;n++){var o;try{o=this.recoverPubKey(e,t,n)}catch{continue}if(o.eq(r))return n}throw new Error("Unable to find valid recovery factor")};var bi=Dr((function(e,t){var r=t;r.version="6.5.4",r.utils=qr,r.rand=function(){throw new Error("unsupported")},r.curve=ri,r.curves=ii,r.ec=vi,r.eddsa=null})).ec;const xi=new C("signing-key/5.7.0");let Ai=null;function ki(){return Ai||(Ai=new bi("secp256k1")),Ai}class _i{constructor(e){Ue(this,"curve","secp256k1"),Ue(this,"privateKey",R(e)),32!==function(e){if("string"!=typeof e)e=R(e);else if(!P(e)||e.length%2)return null;return(e.length-2)/2}(this.privateKey)&&xi.throwArgumentError("invalid private key","privateKey","[[ REDACTED ]]");const t=ki().keyFromPrivate(N(this.privateKey));Ue(this,"publicKey","0x"+t.getPublic(!1,"hex")),Ue(this,"compressedPublicKey","0x"+t.getPublic(!0,"hex")),Ue(this,"_isSigningKey",!0)}_addPoint(e){const t=ki().keyFromPublic(N(this.publicKey)),r=ki().keyFromPublic(N(e));return"0x"+t.pub.add(r.pub).encodeCompressed("hex")}signDigest(e){const t=ki().keyFromPrivate(N(this.privateKey)),r=N(e);32!==r.length&&xi.throwArgumentError("bad digest length","digest",e);const i=t.sign(r,{canonical:!0});return U({recoveryParam:i.recoveryParam,r:L("0x"+i.r.toString(16),32),s:L("0x"+i.s.toString(16),32)})}computeSharedSecret(e){const t=ki().keyFromPrivate(N(this.privateKey)),r=ki().keyFromPublic(N(Ci(e)));return L("0x"+t.derive(r.getPublic()).toString(16),32)}static isSigningKey(e){return!(!e||!e._isSigningKey)}}function Ci(e,t){const r=N(e);if(32===r.length){const e=new _i(r);return t?"0x"+ki().keyFromPrivate(r).getPublic(!0,"hex"):e.publicKey}return 33===r.length?t?R(r):"0x"+ki().keyFromPublic(r).getPublic(!1,"hex"):65===r.length?t?"0x"+ki().keyFromPublic(r).getPublic(!0,"hex"):R(r):xi.throwArgumentError("invalid public or private key","key","[REDACTED]")}var Ei;function Si(e,t){return function(e){return Le(B(j(B(Ci(e),1)),12))}(function(e,t){const r=U(t),i={r:N(r.r),s:N(r.s)};return"0x"+ki().recoverPubKey(N(e),i,r.recoveryParam).encode("hex",!1)}(N(e),t))}new C("transactions/5.7.0"),function(e){e[e.legacy=0]="legacy",e[e.eip2930=1]="eip2930",e[e.eip1559=2]="eip1559"}(Ei||(Ei={}));const Ii="https://rpc.walletconnect.org/v1";function Mi(e,t,r){return Si(Ne(t),r).toLowerCase()===e.toLowerCase()}async function Ti(e,t,r,i,n,o){try{const s="0x1626ba7e",a="0000000000000000000000000000000000000000000000000000000000000040",c="0000000000000000000000000000000000000000000000000000000000000041",l=r.substring(2),u=s+Ne(t).substring(2)+a+c+l,h=await fetch(`${o||Ii}/?chainId=${i}&projectId=${n}`,{method:"POST",body:JSON.stringify({id:Date.now()+Math.floor(1e3*Math.random()),jsonrpc:"2.0",method:"eth_call",params:[{to:e,data:u},"latest"]})}),{result:d}=await h.json();return!!d&&d.slice(0,s.length).toLowerCase()===s.toLowerCase()}catch(e){return console.error("isValidEip1271Signature: ",e),!1}}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const Ni=e=>e?.split(":"),Pi=e=>{const t=e&&Ni(e);if(t)return e.includes("did:pkh:")?t[3]:t[1]},Oi=e=>{const t=e&&Ni(e);if(t)return t.pop()};const Ri=(e,t)=>{const r=`${e.domain} wants you to sign in with your Ethereum account:`,i=Oi(t);if(!e.aud&&!e.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let n=e.statement||void 0;const o=`URI: ${e.aud||e.uri}`,s=`Version: ${e.version}`,a=`Chain ID: ${Pi(t)}`,c=`Nonce: ${e.nonce}`,l=`Issued At: ${e.iat}`,u=e.exp?`Expiration Time: ${e.exp}`:void 0,h=e.nbf?`Not Before: ${e.nbf}`:void 0,d=e.requestId?`Request ID: ${e.requestId}`:void 0,f=e.resources?`Resources:${e.resources.map((e=>`\n- ${e}`)).join("")}`:void 0,p=Di(e.resources);if(p){n=ji(n,Li(p))}return[r,i,"",n,"",o,s,a,c,l,u,h,d,f].filter((e=>null!=e)).join("\n")};function Bi(e){if(!e)throw new Error("No recap provided, value is undefined");if(!e.att)throw new Error("No `att` property found");const t=Object.keys(e.att);if(null==t||!t.length)throw new Error("No resources found in `att` property");t.forEach((t=>{const r=e.att[t];if(Array.isArray(r))throw new Error(`Resource must be an object: ${t}`);if("object"!=typeof r)throw new Error(`Resource must be an object: ${t}`);if(!Object.keys(r).length)throw new Error(`Resource object is empty: ${t}`);Object.keys(r).forEach((e=>{const t=r[e];if(!Array.isArray(t))throw new Error(`Ability limits ${e} must be an array of objects, found: ${t}`);if(!t.length)throw new Error(`Value of ${e} is empty array, must be an array with objects`);t.forEach((t=>{if("object"!=typeof t)throw new Error(`Ability limits (${e}) must be an array of objects, found: ${t}`)}))}))}))}function Li(e){const t=function(e){return JSON.parse(h.from(e,"base64").toString("utf-8"))}(e.replace("urn:recap:",""));return Bi(t),t}function Ui(e){return e&&e.includes("urn:recap:")}function ji(e="",t){Bi(t);const r="I further authorize the stated URI to perform the following actions on my behalf: ";if(e.includes(r))return e;const i=[];let n=0;Object.keys(t.att).forEach((e=>{const r=Object.keys(t.att[e]).map((e=>({ability:e.split("/")[0],action:e.split("/")[1]})));r.sort(((e,t)=>e.action.localeCompare(t.action)));const o={};r.forEach((e=>{o[e.ability]||(o[e.ability]=[]),o[e.ability].push(e.action)}));const s=Object.keys(o).map((t=>(n++,`(${n}) '${t}': '${o[t].join("', '")}' for '${e}'.`)));i.push(s.join(", ").replace(".,","."))}));return`${e?e+" ":""}${`${r}${i.join(" ")}`}`}function Di(e){if(!e)return;const t=e?.[e.length-1];return Ui(t)?t:void 0}Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const zi=/0x[a-fA-F0-9]{40}/u,Wi=/Chain ID: (?<temp1>\d+)/u;function $i(e){return e.match(zi)?.[0]||""}function qi(e){return`eip155:${e.match(Wi)?.[1]||1}`}async function Hi({address:e,message:t,signature:r,chainId:i,projectId:n}){let o=Mi(e,t,r);return o||(o=await Ti(e,t,r,i,n)),o}var Fi=r(7104),Ki=r(2618);const Zi=Ki.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Vi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Yi=class extends Ki.WF{constructor(){super(...arguments),this.dappImageUrl=a.Hd.state.metadata?.icons,this.walletImageUrl=a.Uj.state.connectedWalletInfo?.icon}firstUpdated(){const e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return Ki.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Yi.styles=Zi,Yi=Vi([(0,Fi.customElement)("w3m-connecting-siwe")],Yi);var Gi=r(5707),Ji=r(4039),Qi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xi=class extends Ki.WF{constructor(){super(...arguments),this.dappName=a.Hd.state.metadata?.name,this.isSigning=!1,this.isCancelling=!1}render(){return Ki.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="main"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,a.En.sendEvent({event:"CLICK_SIGN_SIWX_MESSAGE",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:a.Uj.state.preferredAccountType===Ji.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}});try{s.setStatus("loading");const e=await s.signIn();return s.setStatus("success"),a.En.sendEvent({event:"SIWX_AUTH_SUCCESS",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:a.Uj.state.preferredAccountType===Ji.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}}),e}catch(e){const t=a.Uj.state.preferredAccountType===Ji.Vl.ACCOUNT_TYPES.SMART_ACCOUNT;return t?a.Pt.showError("This application might not support Smart Accounts"):a.Pt.showError("Signature declined"),s.setStatus("error"),a.En.sendEvent({event:"SIWX_AUTH_ERROR",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:t}})}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0;a.WB.state.activeCaipAddress?(await a.x4.disconnect(),a.W3.close()):a.IN.push("Connect"),this.isCancelling=!1,a.En.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:{network:a.WB.state.activeCaipNetwork?.caipNetworkId||"",isSmartAccount:a.Uj.state.preferredAccountType===Ji.Vl.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Qi([(0,Gi.wk)()],Xi.prototype,"isSigning",void 0),Qi([(0,Gi.wk)()],Xi.prototype,"isCancelling",void 0),Xi=Qi([(0,Fi.customElement)("w3m-connecting-siwe-view")],Xi);var en=r(1079);const tn=[];function rn(e){async function t(){try{return await e.methods.getSession()}catch(e){return void console.warn("AppKit:SIWE:getSession - error:",e)}}async function r(){await e.methods.signOut(),e.methods.onSignOut?.()}return tn.forEach((e=>e())),tn.push(a.WB.subscribeKey("activeCaipNetwork",(async i=>{if(!e.options.signOutOnNetworkChange)return;const n=await t();n&&n.chainId!==en.LX.caipNetworkIdToNumber(i?.caipNetworkId)&&await r()})),a.WB.subscribeKey("activeCaipAddress",(async i=>{if(!e.options.signOutOnDisconnect||i){if(e.options.signOutOnAccountChange){const e=await t(),n=e?.address.toLowerCase(),o=a.wE?.getPlainAddress(i)?.toLowerCase();e&&n!==o&&await r()}}else{await t()&&await r()}}))),{async createMessage(t){const r=await(e.methods.getMessageParams?.());if(!r)throw new Error("Failed to get message params!");const i=await e.getNonce(t.accountAddress),n=r.iat||(new Date).toISOString();return{nonce:i,version:"1",requestId:r.requestId,accountAddress:t.accountAddress,chainId:t.chainId,domain:r.domain,uri:r.uri,notBefore:r.nbf,resources:r.resources,statement:r.statement,expirationTime:r.exp,issuedAt:n,toString:()=>e.createMessage({...r,chainId:en.LX.caipNetworkIdToNumber(t.chainId)||1,address:`did:pkh:${t.chainId}:${t.accountAddress}`,nonce:i,version:"1",iat:n})}},async addSession(t){if(!en.LX.parseEvmChainId(t.data.chainId))return Promise.resolve();if(await e.methods.verifyMessage(t))return e.methods.onSignIn?.({address:t.data.accountAddress,chainId:en.LX.parseEvmChainId(t.data.chainId)}),Promise.resolve();throw new Error("Failed to verify message")},async revokeSession(e,t){try{await r()}catch(e){console.warn("AppKit:SIWE:revokeSession - signOut error",e)}},async setSessions(e){if(0===e.length)try{await r()}catch(e){console.warn("AppKit:SIWE:setSessions - signOut error",e)}else{const t=e.map((e=>this.addSession(e)));await Promise.all(t)}},async getSessions(e,r){try{if(!e.startsWith("eip155:"))return[{data:{accountAddress:r,chainId:e},message:"",signature:""}];const i=await t(),n=`eip155:${i?.chainId}`,o=i?.address.toLowerCase(),s=r?.toLowerCase();if(!i||o!==s||n!==e)return[];return[{data:{accountAddress:i.address,chainId:n},message:"",signature:""}]}catch(e){return console.warn("AppKit:SIWE:getSessions - error:",e),[]}}}}function nn(e){return new l(e)}},7104:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MathUtil:()=>Ko,TransactionUtil:()=>Yo,UiHelperUtil:()=>Ut,WuiAccountButton:()=>Yt,WuiAlertBar:()=>Qi,WuiAllWalletsImage:()=>tr,WuiAvatar:()=>qt,WuiBalance:()=>Bn,WuiBanner:()=>Gn,WuiBannerImg:()=>Xn,WuiButton:()=>ar,WuiCard:()=>b,WuiCardSelect:()=>vr,WuiCardSelectLoader:()=>hr,WuiCertifiedSwitch:()=>Do,WuiCheckBox:()=>Oo,WuiChip:()=>Ar,WuiChipButton:()=>Hn,WuiCompatibleNetwork:()=>Zn,WuiConnectButton:()=>Cr,WuiCtaButton:()=>Ir,WuiDetailsGroup:()=>Nr,WuiDetailsGroupItem:()=>Rr,WuiDropdownMenu:()=>Ur,WuiEmailInput:()=>Hr,WuiEnsInput:()=>Zr,WuiFlex:()=>zt,WuiGrid:()=>$o,WuiIcon:()=>He,WuiIconBox:()=>Kt,WuiIconButton:()=>xo,WuiIconLink:()=>Gr,WuiImage:()=>Ze,WuiInputAmount:()=>uo,WuiInputElement:()=>Xr,WuiInputNumeric:()=>ri,WuiInputText:()=>Wr,WuiLink:()=>oi,WuiListAccordion:()=>bn,WuiListAccount:()=>yo,WuiListButton:()=>_o,WuiListContent:()=>kn,WuiListDescription:()=>oo,WuiListItem:()=>ci,WuiListNetwork:()=>En,WuiListSocial:()=>So,WuiListToken:()=>ro,WuiListWallet:()=>_i,WuiListWalletTransaction:()=>Mn,WuiLoadingHexagon:()=>Ge,WuiLoadingSpinner:()=>Xe,WuiLoadingThumbnail:()=>rt,WuiLogo:()=>Si,WuiLogoSelect:()=>Ti,WuiNetworkButton:()=>Oi,WuiNetworkImage:()=>mr,WuiNoticeCard:()=>wn,WuiOtp:()=>Li,WuiPreviewItem:()=>po,WuiProfileButton:()=>jn,WuiProfileButtonV2:()=>Wn,WuiPromo:()=>Pn,WuiQrCode:()=>$i,WuiSearchBar:()=>Fi,WuiSelect:()=>To,WuiSeparator:()=>Fo,WuiShimmer:()=>ot,WuiSnackbar:()=>Vi,WuiSwitch:()=>Lo,WuiTabs:()=>tn,WuiTag:()=>xi,WuiText:()=>lt,WuiTokenButton:()=>on,WuiTokenListItem:()=>hn,WuiTooltip:()=>cn,WuiTransactionListItem:()=>gi,WuiTransactionListItemLoader:()=>yi,WuiTransactionVisual:()=>di,WuiVisual:()=>Bt,WuiVisualThumbnail:()=>pn,WuiWalletImage:()=>Qt,customElement:()=>w,initializeTheming:()=>u,setColorTheme:()=>h,setThemeVariables:()=>d,swapInputMaskBottomSvg:()=>n,swapInputMaskTopSvg:()=>o});var i=r(2618);const n=i.JW`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,o=i.JW`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;var s=r(1079);let a,c,l;function u(e,t){a=document.createElement("style"),c=document.createElement("style"),l=document.createElement("style"),a.textContent=f(e).core.cssText,c.textContent=f(e).dark.cssText,l.textContent=f(e).light.cssText,document.head.appendChild(a),document.head.appendChild(c),document.head.appendChild(l),h(t)}function h(e){c&&l&&("light"===e?(c.removeAttribute("media"),l.media="enabled"):(l.removeAttribute("media"),c.media="enabled"))}function d(e){a&&c&&l&&(a.textContent=f(e).core.cssText,c.textContent=f(e).dark.cssText,l.textContent=f(e).light.cssText)}function f(e){return{core:i.AH`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${(0,i.iz)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,i.iz)(e?.["--w3m-font-family"]||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${(0,i.iz)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,i.iz)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,i.iz)(e?.["--w3m-z-index"]||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:i.AH`
      :root {
        --w3m-color-mix: ${(0,i.iz)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,i.iz)((0,s.o_)(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${(0,i.iz)((0,s.o_)(e,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;
      }
    `,dark:i.AH`
      :root {
        --w3m-color-mix: ${(0,i.iz)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,i.iz)((0,s.o_)(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${(0,i.iz)((0,s.o_)(e,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);
      }
    `}}const p=i.AH`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,g=i.AH`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,m=i.AH`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`;function w(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const y=i.AH`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var v=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let b=class extends i.WF{render(){return i.qy`<slot></slot>`}};b.styles=[p,y],b=v([w("wui-card")],b);var x=r(5707);const A=i.AH`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,k=i.JW`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`,_=i.JW`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,C=i.JW`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,E=i.JW`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,S=i.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,I=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,M=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,T=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,N=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,P=i.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,O=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,R=i.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,B=i.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`,L=i.JW`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`,U=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,j=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,D=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,z=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,W=i.JW`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,$=i.JW`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`,q=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,H=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,F=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,K=i.JW`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,Z=i.JW` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,V=i.JW`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,Y=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,G=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,J=i.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Q=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,X=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,ee=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,te=i.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,re=i.JW`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,ie=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ne=i.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,oe=i.JW`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,se=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ae=i.JW`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`,ce=i.JW`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,le=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,ue=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,he=i.JW`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`,de=i.JW`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,fe=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,pe=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,ge=i.JW` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,me=i.JW`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,we=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ye=i.JW`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,ve=i.JW`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,be=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,xe=i.JW`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,Ae=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ke=i.JW`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,_e=i.JW`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Ce=i.JW`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,Ee=i.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Se=i.JW`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,Ie=i.JW`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`,Me=i.JW`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Te=i.JW`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Ne=i.JW`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Pe=i.JW`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Oe=i.JW`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Re=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Be=i.JW`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Le=i.JW`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,Ue=i.JW`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,je=i.JW`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,De=i.JW`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`,ze=i.JW`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`,We=i.JW`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var $e=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const qe={add:k,allWallets:_,arrowBottomCircle:C,appStore:E,apple:S,arrowBottom:I,arrowLeft:M,arrowRight:T,arrowTop:N,bank:P,browser:O,card:R,checkmark:L,checkmarkBold:B,chevronBottom:U,chevronLeft:j,chevronRight:D,chevronTop:z,chromeStore:W,clock:$,close:q,compass:F,coinPlaceholder:H,copy:K,cursor:Z,cursorTransparent:V,desktop:Y,disconnect:G,discord:J,etherscan:Q,extension:X,externalLink:ee,facebook:te,farcaster:re,filters:ie,github:ne,google:oe,helpCircle:se,image:ae,id:ze,infoCircle:ce,lightbulb:De,mail:le,mobile:ue,more:he,networkPlaceholder:de,nftPlaceholder:fe,off:pe,playStore:ge,plus:me,qrCode:we,recycleHorizontal:ye,refresh:ve,search:be,send:xe,swapHorizontal:Ae,swapHorizontalMedium:_e,swapHorizontalBold:ke,swapHorizontalRoundedBold:Ce,swapVertical:Ee,telegram:Se,threeDots:Ie,twitch:Me,twitter:We,twitterIcon:Te,verify:Ne,verifyFilled:Pe,wallet:Re,walletConnect:Be,walletConnectLightBrown:Le,walletConnectBrown:Ue,walletPlaceholder:Oe,warningCircle:je,x:We,info:i.JW`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`,exclamationTriangle:i.JW`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`};let He=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,i.qy`${qe[this.name]}`}};He.styles=[p,m,A],$e([(0,x.MZ)()],He.prototype,"size",void 0),$e([(0,x.MZ)()],He.prototype,"name",void 0),$e([(0,x.MZ)()],He.prototype,"color",void 0),He=$e([w("wui-icon")],He);const Fe=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Ke=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ze=class extends i.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,i.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Ze.styles=[p,m,Fe],Ke([(0,x.MZ)()],Ze.prototype,"src",void 0),Ke([(0,x.MZ)()],Ze.prototype,"alt",void 0),Ke([(0,x.MZ)()],Ze.prototype,"size",void 0),Ze=Ke([w("wui-image")],Ze);const Ve=i.AH`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Ye=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ge=class extends i.WF{render(){return i.qy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Ge.styles=[p,Ve],Ge=Ye([w("wui-loading-hexagon")],Ge);const Je=i.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Qe=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xe=class extends i.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,i.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Xe.styles=[p,Je],Qe([(0,x.MZ)()],Xe.prototype,"color",void 0),Qe([(0,x.MZ)()],Xe.prototype,"size",void 0),Xe=Qe([w("wui-loading-spinner")],Xe);const et=i.AH`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var tt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let rt=class extends i.WF{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,n=245+t,o=360+1.75*t;return i.qy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};rt.styles=[p,et],tt([(0,x.MZ)({type:Number})],rt.prototype,"radius",void 0),rt=tt([w("wui-loading-thumbnail")],rt);const it=i.AH`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var nt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ot=class extends i.WF{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,i.qy`<slot></slot>`}};ot.styles=[it],nt([(0,x.MZ)()],ot.prototype,"width",void 0),nt([(0,x.MZ)()],ot.prototype,"height",void 0),nt([(0,x.MZ)()],ot.prototype,"borderRadius",void 0),nt([(0,x.MZ)()],ot.prototype,"variant",void 0),ot=nt([w("wui-shimmer")],ot);var st=r(3720);const at=i.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var ct=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let lt=class extends i.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,i.qy`<slot class=${(0,st.H)(e)}></slot>`}};lt.styles=[p,at],ct([(0,x.MZ)()],lt.prototype,"variant",void 0),ct([(0,x.MZ)()],lt.prototype,"color",void 0),ct([(0,x.MZ)()],lt.prototype,"align",void 0),ct([(0,x.MZ)()],lt.prototype,"lineClamp",void 0),lt=ct([w("wui-text")],lt);const ut=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,ht=i.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,dt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,ft=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,pt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,gt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,mt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,wt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,yt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,vt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,bt=i.JW`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,xt=i.JW`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,At=i.JW`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,kt=i.JW`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,_t=i.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Ct=i.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Et=i.JW`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,St=i.JW`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,It=i.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Mt=i.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Tt=i.JW`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Nt=i.JW`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,Pt=i.AH`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Ot=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const Rt={browser:ut,dao:ht,defi:dt,defiAlt:ft,eth:pt,layers:gt,lock:mt,login:wt,network:yt,nft:vt,noun:bt,profile:xt,system:At,coinbase:kt,meld:Nt,onrampCard:St,moonpay:_t,stripe:Ct,paypal:Et,google:It,pencil:Mt,lightbulb:Tt,solana:i.JW`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `};let Bt=class extends i.WF{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--wui-visual-size-${this.size});\n   `,i.qy`${Rt[this.name]}`}};Bt.styles=[p,Pt],Ot([(0,x.MZ)()],Bt.prototype,"name",void 0),Ot([(0,x.MZ)()],Bt.prototype,"size",void 0),Bt=Ot([w("wui-visual")],Bt);var Lt=r(31);const Ut={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){try{return new URL(e).hostname}catch(e){return""}},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:i})=>e.length<=t+r?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),n=100-3*Number(i?.replace("px","")),o=`${n}% ${n}% at 65% 40%`,s=[];for(let e=0;e<5;e+=1){const t=this.tintColor(r,.15*e);s.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`\n    --local-color-1: ${s[0]};\n    --local-color-2: ${s[1]};\n    --local-color-3: ${s[2]};\n    --local-color-4: ${s[3]};\n    --local-color-5: ${s[4]};\n    --local-radial-circle: ${o}\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[r,i,n]=e;return[Math.round(r+(255-r)*t),Math.round(i+(255-i)*t),Math.round(n+(255-n)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){const t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]},roundNumber:(e,t,r)=>e.toString().length>=t?Number(e).toFixed(r):e,formatNumberToLocalString:(e,t=2)=>void 0===e?"0.00":"number"==typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},jt=i.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Dt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let zt=class extends i.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Ut.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Ut.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Ut.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Ut.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Ut.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Ut.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Ut.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Ut.getSpacingStyles(this.margin,3)};\n    `,i.qy`<slot></slot>`}};zt.styles=[p,jt],Dt([(0,x.MZ)()],zt.prototype,"flexDirection",void 0),Dt([(0,x.MZ)()],zt.prototype,"flexWrap",void 0),Dt([(0,x.MZ)()],zt.prototype,"flexBasis",void 0),Dt([(0,x.MZ)()],zt.prototype,"flexGrow",void 0),Dt([(0,x.MZ)()],zt.prototype,"flexShrink",void 0),Dt([(0,x.MZ)()],zt.prototype,"alignItems",void 0),Dt([(0,x.MZ)()],zt.prototype,"justifyContent",void 0),Dt([(0,x.MZ)()],zt.prototype,"columnGap",void 0),Dt([(0,x.MZ)()],zt.prototype,"rowGap",void 0),Dt([(0,x.MZ)()],zt.prototype,"gap",void 0),Dt([(0,x.MZ)()],zt.prototype,"padding",void 0),Dt([(0,x.MZ)()],zt.prototype,"margin",void 0),zt=Dt([w("wui-flex")],zt);const Wt=i.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var $t=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let qt=class extends i.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`\n    --local-width: var(--wui-icon-box-size-${this.size});\n    --local-height: var(--wui-icon-box-size-${this.size});\n    `,i.qy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Ut.generateAvatarColors(this.address);return this.style.cssText+=`\n ${e}`,null}return this.dataset.variant="default",null}};qt.styles=[p,Wt],$t([(0,x.MZ)()],qt.prototype,"imageSrc",void 0),$t([(0,x.MZ)()],qt.prototype,"alt",void 0),$t([(0,x.MZ)()],qt.prototype,"address",void 0),$t([(0,x.MZ)()],qt.prototype,"size",void 0),qt=$t([w("wui-avatar")],qt);const Ht=i.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Ft=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Kt=class extends i.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,r="xl"===this.size,n=t?"12%":"16%",o=t?"xxs":r?"s":"3xl",s="gray"===this.background,a="opaque"===this.background,c="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||s?"100%":n};\n       --local-border-radius: var(--wui-border-radius-${o});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,i.qy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Kt.styles=[p,g,Ht],Ft([(0,x.MZ)()],Kt.prototype,"size",void 0),Ft([(0,x.MZ)()],Kt.prototype,"backgroundColor",void 0),Ft([(0,x.MZ)()],Kt.prototype,"iconColor",void 0),Ft([(0,x.MZ)()],Kt.prototype,"iconSize",void 0),Ft([(0,x.MZ)()],Kt.prototype,"background",void 0),Ft([(0,x.MZ)({type:Boolean})],Kt.prototype,"border",void 0),Ft([(0,x.MZ)()],Kt.prototype,"borderColor",void 0),Ft([(0,x.MZ)()],Kt.prototype,"icon",void 0),Kt=Ft([w("wui-icon-box")],Kt);const Zt=i.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-color-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    background: var(--wui-color-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Vt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Yt=class extends i.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return i.qy`
      <button
        ?disabled=${this.disabled}
        class=${(0,Lt.J)(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?Ut.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return i.qy` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?i.qy`<wui-image src=${this.networkSrc}></wui-image>`:i.qy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return i.qy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};Yt.styles=[p,g,Zt],Vt([(0,x.MZ)()],Yt.prototype,"networkSrc",void 0),Vt([(0,x.MZ)()],Yt.prototype,"avatarSrc",void 0),Vt([(0,x.MZ)()],Yt.prototype,"balance",void 0),Vt([(0,x.MZ)({type:Boolean})],Yt.prototype,"isUnsupportedChain",void 0),Vt([(0,x.MZ)({type:Boolean})],Yt.prototype,"disabled",void 0),Vt([(0,x.MZ)()],Yt.prototype,"address",void 0),Vt([(0,x.MZ)()],Yt.prototype,"profileName",void 0),Vt([(0,x.MZ)()],Yt.prototype,"charsStart",void 0),Vt([(0,x.MZ)()],Yt.prototype,"charsEnd",void 0),Yt=Vt([w("wui-account-button")],Yt);const Gt=i.AH`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`;var Jt=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qt=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),i.qy`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?i.qy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:i.qy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Qt.styles=[p,Gt],Jt([(0,x.MZ)()],Qt.prototype,"size",void 0),Jt([(0,x.MZ)()],Qt.prototype,"name",void 0),Jt([(0,x.MZ)()],Qt.prototype,"imageSrc",void 0),Jt([(0,x.MZ)()],Qt.prototype,"walletIcon",void 0),Jt([(0,x.MZ)({type:Boolean})],Qt.prototype,"installed",void 0),Jt([(0,x.MZ)()],Qt.prototype,"badgeSize",void 0),Qt=Jt([w("wui-wallet-image")],Qt);const Xt=i.AH`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var er=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let tr=class extends i.WF{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return i.qy`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>i.qy`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${(0,Lt.J)(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>i.qy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};tr.styles=[p,Xt],er([(0,x.MZ)({type:Array})],tr.prototype,"walletImages",void 0),tr=er([w("wui-all-wallets-image")],tr);const rr=i.AH`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ir=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};const nr={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},or={lg:"paragraph-600",md:"small-600"},sr={lg:"md",md:"md"};let ar=class extends i.WF{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??or[this.size];return i.qy`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=sr[this.size],t=this.disabled?nr.disabled:nr[this.variant];return i.qy`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return i.qy``}};ar.styles=[p,g,rr],ir([(0,x.MZ)()],ar.prototype,"size",void 0),ir([(0,x.MZ)({type:Boolean})],ar.prototype,"disabled",void 0),ir([(0,x.MZ)({type:Boolean})],ar.prototype,"fullWidth",void 0),ir([(0,x.MZ)({type:Boolean})],ar.prototype,"loading",void 0),ir([(0,x.MZ)()],ar.prototype,"variant",void 0),ir([(0,x.MZ)({type:Boolean})],ar.prototype,"hasIconLeft",void 0),ir([(0,x.MZ)({type:Boolean})],ar.prototype,"hasIconRight",void 0),ir([(0,x.MZ)()],ar.prototype,"borderRadius",void 0),ir([(0,x.MZ)()],ar.prototype,"textVariant",void 0),ar=ir([w("wui-button")],ar);const cr=i.JW`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,lr=i.AH`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var ur=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let hr=class extends i.WF{constructor(){super(...arguments),this.type="wallet"}render(){return i.qy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?i.qy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${cr}`:i.qy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};hr.styles=[p,g,lr],ur([(0,x.MZ)()],hr.prototype,"type",void 0),hr=ur([w("wui-card-select-loader")],hr);const dr=i.JW`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,fr=i.JW`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,pr=i.AH`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: var(--wui-color-gray-glass-002);
    border-radius: 100%;
    outline: 1px solid var(--wui-color-gray-glass-005);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-color-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-color-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var gr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let mr=class extends i.WF{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:dr,md:cr,lg:fr},this.selected=!1,this.round=!1}render(){return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--wui-spacing-3xl);\n      --local-height: var(--wui-spacing-3xl);\n      --local-icon-size: var(--wui-spacing-l);\n    "):this.style.cssText=`\n\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,i.qy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};mr.styles=[p,pr],gr([(0,x.MZ)()],mr.prototype,"size",void 0),gr([(0,x.MZ)()],mr.prototype,"name",void 0),gr([(0,x.MZ)({type:Object})],mr.prototype,"networkImagesBySize",void 0),gr([(0,x.MZ)()],mr.prototype,"imageSrc",void 0),gr([(0,x.MZ)({type:Boolean})],mr.prototype,"selected",void 0),gr([(0,x.MZ)({type:Boolean})],mr.prototype,"round",void 0),mr=gr([w("wui-network-image")],mr);const wr=i.AH`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }
`;var yr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let vr=class extends i.WF{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return i.qy`
      <button data-selected=${(0,Lt.J)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?i.qy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,Lt.J)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:i.qy`
      <wui-wallet-image
        size="md"
        imageSrc=${(0,Lt.J)(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};vr.styles=[p,g,wr],yr([(0,x.MZ)()],vr.prototype,"name",void 0),yr([(0,x.MZ)()],vr.prototype,"type",void 0),yr([(0,x.MZ)()],vr.prototype,"imageSrc",void 0),yr([(0,x.MZ)({type:Boolean})],vr.prototype,"disabled",void 0),yr([(0,x.MZ)({type:Boolean})],vr.prototype,"selected",void 0),yr([(0,x.MZ)({type:Boolean})],vr.prototype,"installed",void 0),vr=yr([w("wui-card-select")],vr);const br=i.AH`
  a {
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon:not(.image-icon),
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-success-glass-010);
    background-color: var(--wui-color-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-color-error-glass-010);
    background-color: var(--wui-color-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon:not(.image-icon),
  a[data-variant='shade'] > wui-icon:not(.image-icon) {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon:not(.image-icon),
  a[data-variant='success'] > wui-icon:not(.image-icon),
  a[data-variant='shadeSmall'] > wui-icon:not(.image-icon),
  a[data-variant='error'] > wui-icon:not(.image-icon) {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-color-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-color-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-color-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-color-error-glass-015);
  }

  a.disabled {
    color: var(--wui-color-gray-glass-015);
    background-color: var(--wui-color-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-color-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-color-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-color-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-color-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-color-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-color-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-color-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-color-error-glass-020);
  }
`;var xr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ar=class extends i.WF{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.imageIcon=void 0,this.imageIconSize="md",this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return i.qy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:Ut.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:this.imageIcon?i.qy`<wui-icon
        name=${this.imageIcon}
        color="inherit"
        size=${this.imageIconSize}
        class="image-icon"
      ></wui-icon>`:null}};Ar.styles=[p,g,br],xr([(0,x.MZ)()],Ar.prototype,"variant",void 0),xr([(0,x.MZ)()],Ar.prototype,"imageSrc",void 0),xr([(0,x.MZ)()],Ar.prototype,"imageIcon",void 0),xr([(0,x.MZ)()],Ar.prototype,"imageIconSize",void 0),xr([(0,x.MZ)({type:Boolean})],Ar.prototype,"disabled",void 0),xr([(0,x.MZ)()],Ar.prototype,"icon",void 0),xr([(0,x.MZ)()],Ar.prototype,"href",void 0),xr([(0,x.MZ)()],Ar.prototype,"text",void 0),Ar=xr([w("wui-chip")],Ar);const kr=i.AH`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-color-gray-glass-010);
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var _r=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Cr=class extends i.WF{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return i.qy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Cr.styles=[p,g,kr],_r([(0,x.MZ)()],Cr.prototype,"size",void 0),_r([(0,x.MZ)({type:Boolean})],Cr.prototype,"loading",void 0),Cr=_r([w("wui-connect-button")],Cr);const Er=i.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Sr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ir=class extends i.WF{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return i.qy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Ir.styles=[p,g,Er],Sr([(0,x.MZ)({type:Boolean})],Ir.prototype,"disabled",void 0),Sr([(0,x.MZ)()],Ir.prototype,"label",void 0),Sr([(0,x.MZ)()],Ir.prototype,"buttonLabel",void 0),Ir=Sr([w("wui-cta-button")],Ir);const Mr=i.AH`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var Tr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Nr=class extends i.WF{render(){return i.qy`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Nr.styles=[p,g,Mr],Nr=Tr([w("wui-details-group")],Nr);const Pr=i.AH`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var Or=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Rr=class extends i.WF{constructor(){super(...arguments),this.name=""}render(){return i.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};Rr.styles=[p,g,Pr],Or([(0,x.MZ)()],Rr.prototype,"name",void 0),Rr=Or([w("wui-details-group-item")],Rr);const Br=i.AH`
  :host {
    z-index: calc(var(--w3m-z-index) + 1);
    width: 200px;
    padding: var(--wui-spacing-3xs);
    align-items: center;
    display: inherit;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-fg-base-125);
    /* Dark/Elevation/L */
    box-shadow:
      0px 8px 22px -6px rgba(0, 0, 0, 0.12),
      0px 14px 64px -4px rgba(0, 0, 0, 0.12);
  }
`;var Lr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ur=class extends i.WF{constructor(){super(...arguments),this.actions=[],this.isOpen=!1}render(){return this.isOpen?i.qy`
      <wui-flex flexDirection="column" gap="4xs">
        ${this.actions.map((e=>i.qy`
            <wui-list-item
              icon=${e.icon}
              iconSize="sm"
              variant="icon"
              @click=${e.onClick}
            >
              <wui-text variant="small-400" color="fg-100">${e.label}</wui-text>
            </wui-list-item>
          `))}
      </wui-flex>
    `:null}};Ur.styles=[p,g,Br],Lr([(0,x.MZ)({type:Array})],Ur.prototype,"actions",void 0),Lr([(0,x.MZ)({type:Boolean})],Ur.prototype,"isOpen",void 0),Ur=Lr([w("wui-dropdown-menu")],Ur);var jr=r(8342);const Dr=i.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var zr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wr=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,jr._)(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,t=`wui-size-${this.size}`,r={[t]:!0,[e]:Boolean(this.inputRightPadding)};return i.qy`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${(0,jr.K)(this.inputElementRef)}
        class=${(0,st.H)(r)}
        type=${this.type}
        enterkeyhint=${(0,Lt.J)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${(0,Lt.J)(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?i.qy`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};Wr.styles=[p,g,Dr],zr([(0,x.MZ)()],Wr.prototype,"size",void 0),zr([(0,x.MZ)()],Wr.prototype,"icon",void 0),zr([(0,x.MZ)({type:Boolean})],Wr.prototype,"disabled",void 0),zr([(0,x.MZ)()],Wr.prototype,"placeholder",void 0),zr([(0,x.MZ)()],Wr.prototype,"type",void 0),zr([(0,x.MZ)()],Wr.prototype,"keyHint",void 0),zr([(0,x.MZ)()],Wr.prototype,"value",void 0),zr([(0,x.MZ)()],Wr.prototype,"inputRightPadding",void 0),zr([(0,x.MZ)()],Wr.prototype,"tabIdx",void 0),Wr=zr([w("wui-input-text")],Wr);const $r=i.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var qr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Hr=class extends i.WF{constructor(){super(...arguments),this.disabled=!1}render(){return i.qy`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${(0,Lt.J)(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?i.qy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Hr.styles=[p,$r],qr([(0,x.MZ)()],Hr.prototype,"errorMessage",void 0),qr([(0,x.MZ)({type:Boolean})],Hr.prototype,"disabled",void 0),qr([(0,x.MZ)()],Hr.prototype,"value",void 0),qr([(0,x.MZ)()],Hr.prototype,"tabIdx",void 0),Hr=qr([w("wui-email-input")],Hr);const Fr=i.AH`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  .error {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }

  .base-name {
    position: absolute;
    right: 45px;
    top: 15px;
    text-align: right;
  }
`;var Kr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zr=class extends i.WF{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return i.qy`
      <wui-input-text
        value=${(0,Lt.J)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        inputRightPadding="5xl"
      >
        ${this.baseNameTemplate()} ${this.errorTemplate()}${this.loadingTemplate()}
      </wui-input-text>
    `}baseNameTemplate(){return i.qy`<wui-text variant="paragraph-400" color="fg-200" class="base-name">
      ${s.oU.WC_NAME_SUFFIX}
    </wui-text>`}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}errorTemplate(){return this.errorMessage?i.qy`<wui-text variant="tiny-500" color="error-100" class="error"
        >${this.errorMessage}</wui-text
      >`:null}};Zr.styles=[p,Fr],Kr([(0,x.MZ)()],Zr.prototype,"errorMessage",void 0),Kr([(0,x.MZ)({type:Boolean})],Zr.prototype,"disabled",void 0),Kr([(0,x.MZ)()],Zr.prototype,"value",void 0),Kr([(0,x.MZ)({type:Boolean})],Zr.prototype,"loading",void 0),Zr=Kr([w("wui-ens-input")],Zr);const Vr=i.AH`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Yr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gr=class extends i.WF{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,i.qy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Gr.styles=[p,g,m,Vr],Yr([(0,x.MZ)()],Gr.prototype,"size",void 0),Yr([(0,x.MZ)({type:Boolean})],Gr.prototype,"disabled",void 0),Yr([(0,x.MZ)()],Gr.prototype,"icon",void 0),Yr([(0,x.MZ)()],Gr.prototype,"iconColor",void 0),Gr=Yr([w("wui-icon-link")],Gr);const Jr=i.AH`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`;var Qr=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xr=class extends i.WF{constructor(){super(...arguments),this.icon="copy"}render(){return i.qy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Xr.styles=[p,g,Jr],Qr([(0,x.MZ)()],Xr.prototype,"icon",void 0),Xr=Qr([w("wui-input-element")],Xr);const ei=i.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
    background: var(--wui-color-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }
`;var ti=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ri=class extends i.WF{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return i.qy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};ri.styles=[p,g,ei],ti([(0,x.MZ)({type:Boolean})],ri.prototype,"disabled",void 0),ti([(0,x.MZ)({type:String})],ri.prototype,"value",void 0),ri=ti([w("wui-input-numeric")],ri);const ii=i.AH`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var ni=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let oi=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,Lt.J)(this.tabIdx)} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};oi.styles=[p,g,ii],ni([(0,x.MZ)()],oi.prototype,"tabIdx",void 0),ni([(0,x.MZ)({type:Boolean})],oi.prototype,"disabled",void 0),ni([(0,x.MZ)()],oi.prototype,"color",void 0),oi=ni([w("wui-link")],oi);const si=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ai=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ci=class extends i.WF{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return i.qy`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${(0,Lt.J)(this.iconVariant)}
        tabindex=${(0,Lt.J)(this.tabIdx)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return i.qy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",r=this.iconSize?this.iconSize:t;return i.qy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?i.qy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:i.qy``}chevronTemplate(){return this.chevron?i.qy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var li;ci.styles=[p,g,si],ai([(0,x.MZ)()],ci.prototype,"icon",void 0),ai([(0,x.MZ)()],ci.prototype,"iconSize",void 0),ai([(0,x.MZ)()],ci.prototype,"tabIdx",void 0),ai([(0,x.MZ)()],ci.prototype,"variant",void 0),ai([(0,x.MZ)()],ci.prototype,"iconVariant",void 0),ai([(0,x.MZ)({type:Boolean})],ci.prototype,"disabled",void 0),ai([(0,x.MZ)()],ci.prototype,"imageSrc",void 0),ai([(0,x.MZ)()],ci.prototype,"alt",void 0),ai([(0,x.MZ)({type:Boolean})],ci.prototype,"chevron",void 0),ai([(0,x.MZ)({type:Boolean})],ci.prototype,"loading",void 0),ci=ai([w("wui-list-item")],ci),function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"}(li||(li={}));const ui=i.AH`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var hi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let di=class extends i.WF{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,r="NFT"===e?.type,n=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",o=(t?.url?"NFT"===t.type:r)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${n};\n    --local-right-border-radius: ${o};\n    `,i.qy`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,r=e?.type;return 2===this.images.length&&(e?.url||t?.url)?i.qy`<div class="swap-images-container">
        ${e?.url?i.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?i.qy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e?.url?i.qy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===r?i.qy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:i.qy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?i.qy`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};di.styles=[ui],hi([(0,x.MZ)()],di.prototype,"type",void 0),hi([(0,x.MZ)()],di.prototype,"status",void 0),hi([(0,x.MZ)()],di.prototype,"direction",void 0),hi([(0,x.MZ)({type:Boolean})],di.prototype,"onlyDirectionIcon",void 0),hi([(0,x.MZ)({type:Array})],di.prototype,"images",void 0),hi([(0,x.MZ)({type:Object})],di.prototype,"secondImage",void 0),di=hi([w("wui-transaction-visual")],di);const fi=i.AH`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var pi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let gi=class extends i.WF{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return i.qy`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${(0,Lt.J)(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${(0,Lt.J)(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${li[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){const e=this.descriptions?.[0];return e?i.qy`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){const e=this.descriptions?.[1];return e?i.qy`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};gi.styles=[p,fi],pi([(0,x.MZ)()],gi.prototype,"type",void 0),pi([(0,x.MZ)({type:Array})],gi.prototype,"descriptions",void 0),pi([(0,x.MZ)()],gi.prototype,"date",void 0),pi([(0,x.MZ)({type:Boolean})],gi.prototype,"onlyDirectionIcon",void 0),pi([(0,x.MZ)()],gi.prototype,"status",void 0),pi([(0,x.MZ)()],gi.prototype,"direction",void 0),pi([(0,x.MZ)({type:Array})],gi.prototype,"images",void 0),pi([(0,x.MZ)({type:Array})],gi.prototype,"price",void 0),pi([(0,x.MZ)({type:Array})],gi.prototype,"amount",void 0),pi([(0,x.MZ)({type:Array})],gi.prototype,"symbol",void 0),gi=pi([w("wui-transaction-list-item")],gi);const mi=i.AH`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var wi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let yi=class extends i.WF{render(){return i.qy`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};yi.styles=[p,mi],yi=wi([w("wui-transaction-list-item-loader")],yi);const vi=i.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var bi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xi=class extends i.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e="md"===this.size?"mini-700":"micro-700";return i.qy`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};xi.styles=[p,vi],bi([(0,x.MZ)()],xi.prototype,"variant",void 0),bi([(0,x.MZ)()],xi.prototype,"size",void 0),xi=bi([w("wui-tag")],xi);const Ai=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`;var ki=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _i=class extends i.WF{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,Lt.J)(this.tabIdx)} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?i.qy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?i.qy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?i.qy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:i.qy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?i.qy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?i.qy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};_i.styles=[p,g,Ai],ki([(0,x.MZ)({type:Array})],_i.prototype,"walletImages",void 0),ki([(0,x.MZ)()],_i.prototype,"imageSrc",void 0),ki([(0,x.MZ)()],_i.prototype,"name",void 0),ki([(0,x.MZ)()],_i.prototype,"tagLabel",void 0),ki([(0,x.MZ)()],_i.prototype,"tagVariant",void 0),ki([(0,x.MZ)()],_i.prototype,"icon",void 0),ki([(0,x.MZ)()],_i.prototype,"walletIcon",void 0),ki([(0,x.MZ)()],_i.prototype,"tabIdx",void 0),ki([(0,x.MZ)({type:Boolean})],_i.prototype,"installed",void 0),ki([(0,x.MZ)({type:Boolean})],_i.prototype,"disabled",void 0),ki([(0,x.MZ)({type:Boolean})],_i.prototype,"showAllWallets",void 0),_i=ki([w("wui-list-wallet")],_i);const Ci=i.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-005);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Ei=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Si=class extends i.WF{constructor(){super(...arguments),this.logo="google"}render(){return i.qy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Si.styles=[p,Ci],Ei([(0,x.MZ)()],Si.prototype,"logo",void 0),Si=Ei([w("wui-logo")],Si);const Ii=i.AH`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 56px;
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Mi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Ti=class extends i.WF{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,Lt.J)(this.tabIdx)} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ti.styles=[p,g,Ii],Mi([(0,x.MZ)()],Ti.prototype,"logo",void 0),Mi([(0,x.MZ)({type:Boolean})],Ti.prototype,"disabled",void 0),Mi([(0,x.MZ)()],Ti.prototype,"tabIdx",void 0),Ti=Mi([w("wui-logo-select")],Ti);const Ni=i.AH`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-color-gray-glass-010);
    background-color: var(--wui-color-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }
`;var Pi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Oi=class extends i.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return i.qy`
      <button data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?i.qy`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:i.qy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Oi.styles=[p,g,Ni],Pi([(0,x.MZ)()],Oi.prototype,"imageSrc",void 0),Pi([(0,x.MZ)({type:Boolean})],Oi.prototype,"isUnsupportedChain",void 0),Pi([(0,x.MZ)({type:Boolean})],Oi.prototype,"disabled",void 0),Oi=Pi([w("wui-network-button")],Oi);const Ri=i.AH`
  :host {
    position: relative;
    display: block;
  }
`;var Bi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Li=class extends i.WF{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const r=e.target,i=this.getInputElement(r);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const n=i.selectionStart;switch(e.key){case"ArrowLeft":n&&i.setSelectionRange(n+1,n+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const r=this.numerics[e<this.length?e:t],i=r?this.getInputElement(r):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){const e=t-1,r=this.numerics[e>-1?e:t],i=r?this.getInputElement(r):void 0;i&&i.focus()}}}firstUpdated(){this.otp&&(this.values=this.otp.split(""));const e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),this.numerics[0]?.focus()}render(){return i.qy`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>i.qy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,r){const i=this.numerics[t],n=e||(i?this.getInputElement(i):void 0);n&&(n.value=r,this.values=this.values.map(((e,i)=>i===t?r:e)))}selectInput(e){const t=e.target;if(t){const e=this.getInputElement(t);e?.select()}}handleInput(e,t){const r=e.target,i=this.getInputElement(r);if(i){const r=i.value;if("insertFromPaste"===e.inputType)this.handlePaste(i,r,t);else{Ut.isNumber(r)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,r){const i=t[0];if(i&&Ut.isNumber(i)){this.updateInput(e,r,i);const n=t.substring(1);if(r+1<this.length&&n.length){const e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,n,r+1)}else this.focusInputField("next",r)}else this.updateInput(e,r,"")}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Li.styles=[p,Ri],Bi([(0,x.MZ)({type:Number})],Li.prototype,"length",void 0),Bi([(0,x.MZ)({type:String})],Li.prototype,"otp",void 0),Bi([(0,x.wk)()],Li.prototype,"values",void 0),Li=Bi([w("wui-otp")],Li);var Ui=r(7583);function ji(e,t,r){if(e===t)return!1;return(e-t<0?t-e:e-t)<=r+.1}const Di={generate(e,t,r){const n="#141414",o=[],s=function(e,t){const r=Array.prototype.slice.call(Ui.create(e,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(r.length);return r.reduce(((e,t,r)=>(r%i==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e,"Q"),a=t/s.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach((({x:e,y:t})=>{const r=(s.length-7)*a*e,l=(s.length-7)*a*t,u=.45;for(let e=0;e<c.length;e+=1){const t=a*(7-2*e);o.push(i.JW`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*u:t*u}
              ry= ${0===e?(t-5)*u:t*u}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?l+a*e+2.5:l+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)}}));const l=Math.floor((r+25)/a),u=s.length/2-l/2,h=s.length/2+l/2-1,d=[];s.forEach(((e,t)=>{e.forEach(((e,r)=>{if(s[t][r]&&!(t<7&&r<7||t>s.length-8&&r<7||t<7&&r>s.length-8||t>u&&t<h&&r>u&&r<h)){const e=t*a+a/2,i=r*a+a/2;d.push([e,i])}}))}));const f={};return d.forEach((([e,t])=>{f[e]?f[e]?.push(t):f[e]=[t]})),Object.entries(f).map((([e,t])=>{const r=t.filter((e=>t.every((t=>!ji(e,t,a)))));return[Number(e),r]})).forEach((([e,t])=>{t.forEach((t=>{o.push(i.JW`<circle cx=${e} cy=${t} fill=${n} r=${a/2.5} />`)}))})),Object.entries(f).filter((([e,t])=>t.length>1)).map((([e,t])=>{const r=t.filter((e=>t.some((t=>ji(e,t,a)))));return[Number(e),r]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const r=[];for(const e of t){const t=r.find((t=>t.some((t=>ji(e,t,a)))));t?t.push(e):r.push([e])}return[e,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,r])=>{o.push(i.JW`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)}))})),o}},zi=i.AH`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var Wi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let $i=class extends i.WF{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,i.qy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return i.JW`
      <svg height=${e} width=${e}>
        ${Di.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?i.qy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:i.qy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};$i.styles=[p,zi],Wi([(0,x.MZ)()],$i.prototype,"uri",void 0),Wi([(0,x.MZ)({type:Number})],$i.prototype,"size",void 0),Wi([(0,x.MZ)()],$i.prototype,"theme",void 0),Wi([(0,x.MZ)()],$i.prototype,"imageSrc",void 0),Wi([(0,x.MZ)()],$i.prototype,"alt",void 0),Wi([(0,x.MZ)({type:Boolean})],$i.prototype,"arenaClear",void 0),Wi([(0,x.MZ)({type:Boolean})],$i.prototype,"farcaster",void 0),$i=Wi([w("wui-qr-code")],$i);const qi=i.AH`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var Hi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Fi=class extends i.WF{constructor(){super(...arguments),this.inputComponentRef=(0,jr._)()}render(){return i.qy`
      <wui-input-text
        ${(0,jr.K)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};Fi.styles=[p,qi],Fi=Hi([w("wui-search-bar")],Fi);const Ki=i.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`;var Zi=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Vi=class extends i.WF{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return i.qy`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?i.qy`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:"default"===this.iconType?i.qy`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:i.qy`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};Vi.styles=[p,Ki],Zi([(0,x.MZ)()],Vi.prototype,"backgroundColor",void 0),Zi([(0,x.MZ)()],Vi.prototype,"iconColor",void 0),Zi([(0,x.MZ)()],Vi.prototype,"icon",void 0),Zi([(0,x.MZ)()],Vi.prototype,"message",void 0),Zi([(0,x.MZ)()],Vi.prototype,"loading",void 0),Zi([(0,x.MZ)()],Vi.prototype,"iconType",void 0),Vi=Zi([w("wui-snackbar")],Vi);var Yi=r(277);const Gi=i.AH`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`;var Ji=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Qi=class extends i.WF{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`\n      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});\n   `,i.qy`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){Yi.hG.close()}};Qi.styles=[p,Gi],Ji([(0,x.MZ)()],Qi.prototype,"message",void 0),Ji([(0,x.MZ)()],Qi.prototype,"backgroundColor",void 0),Ji([(0,x.MZ)()],Qi.prototype,"iconColor",void 0),Ji([(0,x.MZ)()],Qi.prototype,"icon",void 0),Qi=Ji([w("wui-alertbar")],Qi);const Xi=i.AH`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var en=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let tn=class extends i.WF{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{const r=t===this.activeTab;return i.qy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${e.label?.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}iconTemplate(e){return e.icon?i.qy`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],i=this.buttons[e],n=r?.querySelector("wui-text"),o=i?.querySelector("wui-text"),s=i?.getBoundingClientRect(),a=o?.getBoundingClientRect();r&&n&&!t&&e!==this.activeTab&&(n.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&s&&a&&o&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+a.width)+6}px`,i.animate([{width:`${s.width+a.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),o.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};tn.styles=[p,g,Xi],en([(0,x.MZ)({type:Array})],tn.prototype,"tabs",void 0),en([(0,x.MZ)()],tn.prototype,"onTabChange",void 0),en([(0,x.MZ)({type:Array})],tn.prototype,"buttons",void 0),en([(0,x.MZ)({type:Boolean})],tn.prototype,"disabled",void 0),en([(0,x.MZ)()],tn.prototype,"localTabWidth",void 0),en([(0,x.wk)()],tn.prototype,"activeTab",void 0),en([(0,x.wk)()],tn.prototype,"isDense",void 0),tn=en([w("wui-tabs")],tn);const rn=i.AH`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-l);
    background: var(--wui-color-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var nn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let on=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:i.qy`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};on.styles=[p,g,rn],nn([(0,x.MZ)()],on.prototype,"imageSrc",void 0),nn([(0,x.MZ)()],on.prototype,"text",void 0),on=nn([w("wui-token-button")],on);const sn=i.AH`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var an=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let cn=class extends i.WF{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,i.qy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};cn.styles=[p,g,sn],an([(0,x.MZ)()],cn.prototype,"placement",void 0),an([(0,x.MZ)()],cn.prototype,"variant",void 0),an([(0,x.MZ)()],cn.prototype,"message",void 0),cn=an([w("wui-tooltip")],cn);const ln=i.AH`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var un=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let hn=class extends i.WF{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?this.visible=!0:this.visible=!1}))}),{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){if(!this.visible)return null;const e=this.amount&&this.price?s.Se.multiply(this.price,this.amount)?.toFixed(3):null;return i.qy`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${e?i.qy`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${Ut.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?i.qy`<wui-text variant="small-400" color="fg-200">
                  ${Ut.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?i.qy`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?i.qy`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};hn.styles=[p,g,ln],un([(0,x.MZ)()],hn.prototype,"imageSrc",void 0),un([(0,x.MZ)()],hn.prototype,"name",void 0),un([(0,x.MZ)()],hn.prototype,"symbol",void 0),un([(0,x.MZ)()],hn.prototype,"price",void 0),un([(0,x.MZ)()],hn.prototype,"amount",void 0),un([(0,x.wk)()],hn.prototype,"visible",void 0),un([(0,x.wk)()],hn.prototype,"imageError",void 0),hn=un([w("wui-token-list-item")],hn);const dn=i.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var fn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let pn=class extends i.WF{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"}; background-color: var(--wui-color-modal-bg);`,i.qy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:i.qy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};pn.styles=[p,dn],fn([(0,x.MZ)()],pn.prototype,"imageSrc",void 0),fn([(0,x.MZ)()],pn.prototype,"alt",void 0),fn([(0,x.MZ)({type:Boolean})],pn.prototype,"borderRadiusFull",void 0),pn=fn([w("wui-visual-thumbnail")],pn);const gn=i.AH`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-accent-glass-010);
  }

  button:hover {
    background-color: var(--wui-color-accent-glass-015) !important;
  }

  button:active {
    background-color: var(--wui-color-accent-glass-020) !important;
  }
`;var mn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let wn=class extends i.WF{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return i.qy`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};wn.styles=[p,g,gn],mn([(0,x.MZ)()],wn.prototype,"label",void 0),mn([(0,x.MZ)()],wn.prototype,"description",void 0),mn([(0,x.MZ)()],wn.prototype,"icon",void 0),wn=mn([w("wui-notice-card")],wn);const yn=i.AH`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-150), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var vn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let bn=class extends i.WF{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout((()=>{this.checkHeight()}),1)}checkHeight(){this.updateComplete.then((()=>{const e=this.shadowRoot?.querySelector(".heightContent"),t=this.shadowRoot?.querySelector(".textContent");if(e&&t){this.scrollElement=e;const r=t?.scrollHeight;r&&r>100&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}}))}render(){return i.qy`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){const e=this.shadowRoot?.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?i.qy` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};bn.styles=[p,g,yn],vn([(0,x.MZ)()],bn.prototype,"textTitle",void 0),vn([(0,x.MZ)()],bn.prototype,"overflowedContent",void 0),bn=vn([w("wui-list-accordion")],bn);const xn=i.AH`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var An=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let kn=class extends i.WF{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return i.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?i.qy` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};kn.styles=[p,g,xn],An([(0,x.MZ)()],kn.prototype,"imageSrc",void 0),An([(0,x.MZ)()],kn.prototype,"textTitle",void 0),An([(0,x.MZ)()],kn.prototype,"textValue",void 0),kn=An([w("wui-list-content")],kn);const _n=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: 100%;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Cn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let En=class extends i.WF{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.selected=!1,this.transparent=!1}render(){return i.qy`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.templateNetworkImage()}
          <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text></wui-flex
        >
        ${this.checkmarkTemplate()}
      </button>
    `}checkmarkTemplate(){return this.selected?i.qy`<wui-icon size="sm" color="accent-100" name="checkmarkBold"></wui-icon>`:null}templateNetworkImage(){return this.imageSrc?i.qy`<wui-image size="sm" src=${this.imageSrc} name=${this.name}></wui-image>`:this.imageSrc?null:i.qy`<wui-network-image
        ?round=${!0}
        size="md"
        name=${this.name}
      ></wui-network-image>`}};En.styles=[p,g,_n],Cn([(0,x.MZ)()],En.prototype,"imageSrc",void 0),Cn([(0,x.MZ)()],En.prototype,"name",void 0),Cn([(0,x.MZ)({type:Boolean})],En.prototype,"disabled",void 0),Cn([(0,x.MZ)({type:Boolean})],En.prototype,"selected",void 0),Cn([(0,x.MZ)({type:Boolean})],En.prototype,"transparent",void 0),En=Cn([w("wui-list-network")],En);const Sn=i.AH`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var In=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Mn=class extends i.WF{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return i.qy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?i.qy`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Mn.styles=[p,g,Sn],In([(0,x.MZ)()],Mn.prototype,"amount",void 0),In([(0,x.MZ)()],Mn.prototype,"networkCurreny",void 0),In([(0,x.MZ)()],Mn.prototype,"networkImageUrl",void 0),In([(0,x.MZ)()],Mn.prototype,"receiverAddress",void 0),In([(0,x.MZ)()],Mn.prototype,"addressExplorerUrl",void 0),Mn=In([w("wui-list-wallet-transaction")],Mn);const Tn=i.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-060);
    }
  }
`;var Nn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Pn=class extends i.WF{constructor(){super(...arguments),this.text=""}render(){return i.qy`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Pn.styles=[p,g,Tn],Nn([(0,x.MZ)()],Pn.prototype,"text",void 0),Pn=Nn([w("wui-promo")],Pn);const On=i.AH`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var Rn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Bn=class extends i.WF{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return i.qy`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};Bn.styles=[p,On],Rn([(0,x.MZ)()],Bn.prototype,"dollars",void 0),Rn([(0,x.MZ)()],Bn.prototype,"pennies",void 0),Bn=Rn([w("wui-balance")],Bn);const Ln=i.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var Un=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let jn=class extends i.WF{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="chevronBottom"}render(){return i.qy`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${Ut.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?i.qy`<wui-image src=${this.networkSrc}></wui-image>`:i.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};jn.styles=[p,g,Ln],Un([(0,x.MZ)()],jn.prototype,"networkSrc",void 0),Un([(0,x.MZ)()],jn.prototype,"avatarSrc",void 0),Un([(0,x.MZ)()],jn.prototype,"profileName",void 0),Un([(0,x.MZ)()],jn.prototype,"address",void 0),Un([(0,x.MZ)()],jn.prototype,"icon",void 0),jn=Un([w("wui-profile-button")],jn);const Dn=i.AH`
  button {
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-color-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var zn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Wn=class extends i.WF{constructor(){super(...arguments),this.avatarSrc=void 0,this.profileName="",this.address="",this.icon="mail",this.connectedConnector=Yi.iT.getConnectedConnector(),this.shouldShowIcon="AUTH"===this.connectedConnector}render(){return i.qy`<button ontouchstart data-testid="wui-profile-button" @click=${this.handleClick}>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.shouldShowIcon?this.getIconTemplate(this.icon):""}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${Ut.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name="copy" id="copy-address"></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}handleClick(e){e.target instanceof HTMLElement&&"copy-address"===e.target.id?this.onCopyClick?.(e):this.onProfileClick?.(e)}getIconTemplate(e){return i.qy`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="${e||"networkPlaceholder"}"
      ></wui-icon-box>
    `}};Wn.styles=[p,g,Dn],zn([(0,x.MZ)()],Wn.prototype,"avatarSrc",void 0),zn([(0,x.MZ)()],Wn.prototype,"profileName",void 0),zn([(0,x.MZ)()],Wn.prototype,"address",void 0),zn([(0,x.MZ)()],Wn.prototype,"icon",void 0),zn([(0,x.MZ)()],Wn.prototype,"onProfileClick",void 0),zn([(0,x.MZ)()],Wn.prototype,"onCopyClick",void 0),Wn=zn([w("wui-profile-button-v2")],Wn);const $n=i.AH`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`;var qn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Hn=class extends i.WF{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e="sm"===this.size?"small-600":"paragraph-600";return i.qy`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};Hn.styles=[p,g,$n],qn([(0,x.MZ)()],Hn.prototype,"variant",void 0),qn([(0,x.MZ)()],Hn.prototype,"imageSrc",void 0),qn([(0,x.MZ)({type:Boolean})],Hn.prototype,"disabled",void 0),qn([(0,x.MZ)()],Hn.prototype,"icon",void 0),qn([(0,x.MZ)()],Hn.prototype,"size",void 0),qn([(0,x.MZ)()],Hn.prototype,"text",void 0),Hn=qn([w("wui-chip-button")],Hn);const Fn=i.AH`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var Kn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Zn=class extends i.WF{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return i.qy`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return i.qy` <wui-flex class="networks">
      ${e?.map((e=>i.qy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};Zn.styles=[p,g,Fn],Kn([(0,x.MZ)({type:Array})],Zn.prototype,"networkImages",void 0),Kn([(0,x.MZ)()],Zn.prototype,"text",void 0),Zn=Kn([w("wui-compatible-network")],Zn);const Vn=i.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Yn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Gn=class extends i.WF{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return i.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Gn.styles=[p,g,Vn],Yn([(0,x.MZ)()],Gn.prototype,"icon",void 0),Yn([(0,x.MZ)()],Gn.prototype,"text",void 0),Gn=Yn([w("wui-banner")],Gn);const Jn=i.AH`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-m);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var Qn=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Xn=class extends i.WF{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size=""}render(){return i.qy`
      <wui-flex gap="1xs" alignItems="center">
        <wui-avatar size=${this.size} imageSrc=${this.imageSrc}></wui-avatar>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Xn.styles=[p,g,Jn],Qn([(0,x.MZ)()],Xn.prototype,"imageSrc",void 0),Qn([(0,x.MZ)()],Xn.prototype,"text",void 0),Qn([(0,x.MZ)()],Xn.prototype,"size",void 0),Xn=Qn([w("wui-banner-img")],Xn);const eo=i.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var to=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let ro=class extends i.WF{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return i.qy`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${Ut.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?i.qy`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:i.qy`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};ro.styles=[p,g,eo],to([(0,x.MZ)()],ro.prototype,"tokenName",void 0),to([(0,x.MZ)()],ro.prototype,"tokenImageUrl",void 0),to([(0,x.MZ)({type:Number})],ro.prototype,"tokenValue",void 0),to([(0,x.MZ)()],ro.prototype,"tokenAmount",void 0),to([(0,x.MZ)()],ro.prototype,"tokenCurrency",void 0),to([(0,x.MZ)({type:Boolean})],ro.prototype,"clickable",void 0),ro=to([w("wui-list-token")],ro);const io=i.AH`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var no=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let oo=class extends i.WF{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return i.qy`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?i.qy` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:i.qy`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};oo.styles=[p,g,io],no([(0,x.MZ)()],oo.prototype,"icon",void 0),no([(0,x.MZ)()],oo.prototype,"text",void 0),no([(0,x.MZ)()],oo.prototype,"description",void 0),no([(0,x.MZ)()],oo.prototype,"tag",void 0),no([(0,x.MZ)()],oo.prototype,"iconBackgroundColor",void 0),no([(0,x.MZ)()],oo.prototype,"iconColor",void 0),no([(0,x.MZ)({type:Boolean})],oo.prototype,"disabled",void 0),oo=no([w("wui-list-description")],oo);const so=i.AH`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,ao=/[.*+?^${}()|[\]\\]/gu,co=/[0-9,.]/u;var lo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let uo=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,jr._)(),this.disabled=!1,this.value="",this.placeholder="0"}render(){return this.inputElementRef?.value&&this.value&&(this.inputElementRef.value.value=this.value),i.qy`<input
      ${(0,jr.K)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){const t=e.data;if(t&&this.inputElementRef?.value)if(","===t){const e=this.inputElementRef.value.value.replace(",",".");this.inputElementRef.value.value=e,this.value=`${this.value}${e}`}else co.test(t)||(this.inputElementRef.value.value=this.value.replace(new RegExp(t.replace(ao,"\\$&"),"gu"),""));this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};uo.styles=[p,g,so],lo([(0,x.MZ)({type:Boolean})],uo.prototype,"disabled",void 0),lo([(0,x.MZ)({type:String})],uo.prototype,"value",void 0),lo([(0,x.MZ)({type:String})],uo.prototype,"placeholder",void 0),uo=lo([w("wui-input-amount")],uo);const ho=i.AH`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-002);
  }
`;var fo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let po=class extends i.WF{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return i.qy`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?i.qy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?i.qy`<wui-image src=${this.imageSrc}></wui-image>`:i.qy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};po.styles=[p,g,ho],fo([(0,x.MZ)()],po.prototype,"text",void 0),fo([(0,x.MZ)()],po.prototype,"address",void 0),fo([(0,x.MZ)()],po.prototype,"imageSrc",void 0),fo([(0,x.MZ)({type:Boolean})],po.prototype,"isAddress",void 0),po=fo([w("wui-preview-item")],po);const go=i.AH`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-avatar {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    box-shadow: 0 0 0 0;
  }
  .address {
    color: var(--wui-color-fg-base-100);
  }
  .address-description {
    text-transform: capitalize;
    color: var(--wui-color-fg-base-200);
  }

  wui-icon-box {
    position: relative;
    right: 15px;
    top: 15px;
    border: 2px solid var(--wui-color-bg-150);
    background-color: var(--wui-color-bg-125);
  }
`;var mo=r(4039),wo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let yo=class extends i.WF{constructor(){super(...arguments),this.accountAddress="",this.accountType="",this.connectedConnector=Yi.iT.getConnectedConnector(),this.labels=Yi.Uj.state.addressLabels,this.caipNetwork=Yi.WB.state.activeCaipNetwork,this.socialProvider=Yi.iT.getConnectedSocialProvider(),this.balance=0,this.fetchingBalance=!0,this.shouldShowIcon=!1,this.selected=!1}connectedCallback(){super.connectedCallback(),Yi.TP.getBalance(this.accountAddress,this.caipNetwork?.caipNetworkId).then((e=>{let t=this.balance;e.balances.length>0&&(t=e.balances.reduce(((e,t)=>e+(t?.value||0)),0)),this.balance=t,this.fetchingBalance=!1,this.requestUpdate()})).catch((()=>{this.fetchingBalance=!1,this.requestUpdate()}))}render(){const e=this.getLabel();return this.shouldShowIcon="ID_AUTH"===this.connectedConnector,i.qy`
      <wui-flex
        flexDirection="row"
        justifyContent="space-between"
        .padding=${["0","0","s","1xs"]}
      >
        <wui-flex gap="md" alignItems="center">
          <wui-avatar address=${this.accountAddress}></wui-avatar>
          ${this.shouldShowIcon?i.qy`<wui-icon-box
                size="sm"
                iconcolor="fg-200"
                backgroundcolor="fg-300"
                icon=${this.accountType===mo.Vl.ACCOUNT_TYPES.EOA?this.socialProvider??"mail":"lightbulb"}
                background="fg-300"
              ></wui-icon-box>`:i.qy`<wui-flex .padding="${["0","0","0","s"]}"></wui-flex>`}
          <wui-flex flexDirection="column">
            <wui-text class="address" variant="paragraph-500" color="fg-100"
              >${Ut.getTruncateString({string:this.accountAddress,charsStart:4,charsEnd:6,truncate:"middle"})}</wui-text
            >
            <wui-text class="address-description" variant="small-400">${e}</wui-text></wui-flex
          >
        </wui-flex>
        <wui-flex gap="s" alignItems="center">
          <slot name="action"></slot>
          ${this.fetchingBalance?i.qy`<wui-loading-spinner size="sm" color="accent-100"></wui-loading-spinner>`:i.qy` <wui-text variant="small-400">$${this.balance.toFixed(2)}</wui-text>`}
        </wui-flex>
      </wui-flex>
    `}getLabel(){let e=this.labels?.get(this.accountAddress);return e||"ID_AUTH"!==this.connectedConnector?!e&&"INJECTED"===this.connectedConnector||"ANNOUNCED"===this.connectedConnector?e="Injected Account":e||(e="EOA"):e=`${"eoa"===this.accountType?this.socialProvider??"Email":"Smart"} Account`,e}};yo.styles=[p,g,go],wo([(0,x.MZ)()],yo.prototype,"accountAddress",void 0),wo([(0,x.MZ)()],yo.prototype,"accountType",void 0),wo([(0,x.MZ)({type:Boolean})],yo.prototype,"selected",void 0),wo([(0,x.MZ)({type:Function})],yo.prototype,"onSelect",void 0),yo=wo([w("wui-list-account")],yo);const vo=i.AH`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-color-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-color-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }
  }
`;var bo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let xo=class extends i.WF{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return i.qy`<button>
      <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
    </button>`}};xo.styles=[p,g,vo],bo([(0,x.MZ)()],xo.prototype,"text",void 0),bo([(0,x.MZ)()],xo.prototype,"icon",void 0),xo=bo([w("wui-icon-button")],xo);const Ao=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 16.5px var(--wui-spacing-l) 16.5px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
    justify-content: center;
    align-items: center;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var ko=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let _o=class extends i.WF{constructor(){super(...arguments),this.text="",this.disabled=!1,this.tabIdx=void 0}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,Lt.J)(this.tabIdx)} ontouchstart>
        <wui-text align="center" variant="paragraph-500" color="inherit">${this.text}</wui-text>
      </button>
    `}};_o.styles=[p,g,Ao],ko([(0,x.MZ)()],_o.prototype,"text",void 0),ko([(0,x.MZ)({type:Boolean})],_o.prototype,"disabled",void 0),ko([(0,x.MZ)()],_o.prototype,"tabIdx",void 0),_o=ko([w("wui-list-button")],_o);const Co=i.AH`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    justify-content: flex-start;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-text[data-align='left'] {
    display: flex;
    flex: 1;
  }

  wui-text[data-align='center'] {
    display: flex;
    flex: 1;
    justify-content: center;
  }

  .invisible {
    opacity: 0;
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }
`;var Eo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let So=class extends i.WF{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.align="left",this.disabled=!1}render(){return i.qy`
      <button ?disabled=${this.disabled} tabindex=${(0,Lt.J)(this.tabIdx)} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
        <wui-text
          data-align=${this.align}
          variant="paragraph-500"
          color="inherit"
          align=${this.align}
          >${this.name}</wui-text
        >
        ${this.templatePlacement()}
      </button>
    `}templatePlacement(){return"center"===this.align?i.qy` <wui-logo class="invisible" logo=${this.logo}></wui-logo>`:null}};So.styles=[p,g,Co],Eo([(0,x.MZ)()],So.prototype,"logo",void 0),Eo([(0,x.MZ)()],So.prototype,"name",void 0),Eo([(0,x.MZ)()],So.prototype,"align",void 0),Eo([(0,x.MZ)()],So.prototype,"tabIdx",void 0),Eo([(0,x.MZ)({type:Boolean})],So.prototype,"disabled",void 0),So=Eo([w("wui-list-social")],So);const Io=i.AH`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var Mo=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let To=class extends i.WF{constructor(){super(...arguments),this.imageSrc=""}render(){return i.qy`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?i.qy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:i.qy`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};To.styles=[p,g,m,Io],Mo([(0,x.MZ)()],To.prototype,"imageSrc",void 0),To=Mo([w("wui-select")],To);const No=i.AH`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var Po=function(e,t,r,i){var n,o=arguments.length,s=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(o<3?n(s):o>3?n(t,r,s):n(t,r))||s);return o>3&&s&&Object.defineProperty(t,r,s),s};let Oo=class extends i.WF{constructor(){super(...arguments),this.inputElementRef=(0,jr._)(),this.checked=void 0}render(){return i.qy`
      <label>
        <input
          type="checkbox"
  }