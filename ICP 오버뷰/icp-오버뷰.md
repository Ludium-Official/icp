# ICP란 무엇인가?

### ICP와 월드 컴퓨터

![image.png](https://i.ibb.co/THMC5D8/image.png)
(이미지 출처 - [Overview of ICP](https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp))

* [ICP(Internet Computer Protocol)은](https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp) 임계 암호학(threshold cryptogrphy), 상태 기계 복제(state machine replication), 그리고 인터넷 컴퓨터 합의(Internet Computer Consensus, ICC)에 기반한 레이어1 블록체인이다. 새로운 암호학, 스테이트 저장 방식, 합의 알고리즘에 기반한 블록체인을 통해 ICP는 프론트엔드부터 백엔드까지(end-to-end) 탈중앙 어플리케이션(Decentralized Application)을 호스팅 할 수 있는 컨트랙트 구동 환경을 제공한다.
* ICP의 스마트 컨트랙트인 캐니스터(Canister)는 웹 애셋(Web Asset)을 호스팅함으로서 사용자의 HTTP 요청(Request)를 안전하게 처리함으로서 블록체인 RPC 노드 뿐 아니라 기존 웹 환경의 서버의 HTTP 요청을 처리가 가능하다. 이를 통해 ICP는 기존 스마트 컨트랙트가 가진 원장(Ledger)과 교환(exchange) 처리를 넘어 이미지 분류(image classification)과 같이 대량의 연산과 저장이 필요한 어플리케이션도 온체인에서 처리하는 환경을 제공한다.

### ICP의 역사

* ICP는 2016년 10월 도미닉 윌리엄스(Dominic Williams)가 스위스 추크(Zug)에 [디피니티 재단(DFINITY Foundation)을 설립하면서 공식 출범](https://wiki.internetcomputer.org/wiki/History)하였다. [설립자인 도미닉 윌리엄스](https://dominic-w.medium.com/helo-world-im-back-blogging-ae6ceacbc1d7)는 2013년에 Fight My Monster라는 MMO 게임의 파운더였다. 이후 비트코인에 매료되어 게임 아이템과 같은 버추얼 자산 거래가 가능한 고성능 블록체인 개발에 몰두한다. 또한 그는 2014년부터 초기 이더리움 커뮤니티 개발에도 참여하였는데 튜링 완전한 범용성(Turing Complete, general purpose) 블록체인에 기반한 월드 컴퓨터 실현을 이룩하고자 노력한다.
* 이후 월드 컴퓨터를 실현하기 위해 시빌 공격 저항성(Sybil resistance)를 갖춘 합의 이론과 BLS 암호학을 동반한 임계 릴레이(Threshold Relay) 접목 가능성을 연구한다. 이러한 연구 성과를 기반으로 2016년 재단을 설립하고 2017년 첫 토큰(당시 DFN 토큰)을 발행한다. 당시 토큰의 가격은 1 $CHF(스위스 프랑) = 30 $ICP (1 $ICP 당 0.03 $USD)였으며 총 모금액은 390만 $USD 규모였다.
* 토큰 출시 이후 웹 어셈블리(WebAssembly)의 공동 개발자인 [안드레아스 로스버스(Andreas Rossberg)를](https://people.mpi-sws.org/~rossberg/) 비롯한 개발자들과 함께 임계 릴레이 암호 방식, 스마트 컨트랙트 실행 환경, 새로운 합의 모델을 만든 결과를 토대로 디피니티 재단은 [2018년 첫 백서를 출시](https://wiki.internetcomputer.org/wiki/File:Dfinity-consensus-2018.pdf)한다. 2021년 체인의 이름을 DFINITY에서 Internet Copmuter로 변경하고 $ICP 유틸리티 / 거버넌스 토큰에 기반한 탈중앙화 생태계를 구축함으로서 최초 월드 컴퓨터를 실현하는 비전에 다가가고 있다.

# ICP의 4가지 구성 요소

### [체인 키 서명(Chain-Key Signatures)](https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp)

![image.png](https://i.ibb.co/C0XvnR0/image.png)
(이미지 출처 - [Threshold ECSDA](https://internetcomputer.org/docs/current/references/t-ecdsa-how-it-works))

* 블록체인은 공동 데이터 베이스와 프로토콜을 공유하는 분산 노드들의 효율적인 소통과 정보 저장 방식에 따라 성능이 좌우된다. ICP의 [체인 키 서명 방식](https://medium.com/dfinity/chain-key-technology-one-public-key-for-the-internet-computer-6a3644901e28)은 분산화된 노드와 예하 샤드(Shard, 데이터 베이스의 분할 저장체로 ICP에서는 서브넷이라 부른다), 그리고 프로그램인 스마트 컨트랙트의 효과적인 통합에 필수적인 암호화 프로토콜이다. 일례로 ICP의 전체 프로토콜은 하나의 공개키 주소를 가진다. 이를 기반으로 노드, 샤드, 스마트 컨트랙트가 생성될 때 알고리즘을 기반으로 키가 생상되며 비밀 키의 일부인 쉐어(Share)가 공유된다. 따라서 특정 노드는 모든 스마트 컨트랙트를 직접 저장하고 있지 않아도 키 쉐어링을 통해 전체 네트워크와 소통하며 프로그램 실행이 가능해진다. 이러한 ICP의 프로그램 실행 서명 방식을 [임계 서명(Threshold Signature)이라고](https://internetcomputer.org/docs/current/references/t-ecdsa-how-it-works) 부른다.
* 체인 키 서명 방식을 통해 생성된 공개키는 해싱을 통해 사용자의 계정(Account)을 생성한다. 계정은 사용자 개인, 스마트 컨트랙트(캐니스터), 노드(서브넷) 별로 존재하며 [프린시플(Principal)이라 부른다](https://wiki.internetcomputer.org/wiki/Principal). 프린스플은 사용자 혹은 프로그램의 사용을 접속하거나 승인하는데(Access and Authenticate) 중요하다. ICP는 HTTP 외부 요청(Outcall)이 가능하기 때문에 WebAuth와 같은 기존 계정 시스템과의 연동을 추구할 수도 있는데 이를 위해 만들어진 어플리케이션이 [인터넷 아이덴디티(Internet Identity)](https://wiki.internetcomputer.org/wiki/Internet_Identity)이다. 인터넷 아디덴디티는 렛저와 같은 웹3 하드웨어 지갑 뿐 아니라 FaceID와 같은 기존 IT WebAuth와의 연동에도 사용될 수 있다.

### 캐니스터(Canister)

![image.png](https://i.ibb.co/PQvQrQy/image.png)
(이미지 출처 - [Smart Contract Introduction](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/overview/introduction))

* 캐니스터는 ICP의 스마트 컨트랙트로 프로그램 구동에 필요한 코드와 데이터를 포함한다. 이더리움으로 비유하면 스마트 컨트랙트와 스테이트를 모두 담고 있는 것인데 코드의 용량과 형식이 자유로울 수 있어 기존 IT 환경과 상호 작용하는 프로그램을 포함하거나 프론트엔드의 코드까지 담을 수 있다. 캐니스터는 [엑터 기반 동시 모델(Actor based concurrency model)에 기반하여 비동기적 메시지(Asynchronous message)를 전송](https://internetcomputer.org/how-it-works/canister-lifecycle/)하고 상호 소통한다. ICP의 임계 서명 방식은 계정과 주소로 메시지를 보내는데 특화되어 있기 때문에 캐니스터는 다른 노드에 저장된 캐니스터 뿐 아니라 외부 프로그램과의 소통이 가능한 온전한 프로그램으로서 구동할 수 있다.
* ICP의 [캐니스터는 웹어셈블리(WASM)로 컴파일링](https://internetcomputer.org/docs/current/tutorials/developer-journey/level-0/intro-canisters)되기 때문에 모토코(Motoko)와 같은 ICP 자체 언어 뿐 아니라 자바스크립트, 타입스크립트, 러스트, 파이썬과 같은 기존 개발 언어 지원이 가능하다. 디앱의 구조를 설계함에 있어 [dfx 형식으로 프론트엔드, 백엔드 캐니스터를 개발](https://internetcomputer.org/docs/current/tutorials/developer-journey/level-0/intro-canisters)하게 되는데 어플리케이션의 기능과 소통 방식에 따라 하나 이상의 캐니스터가 소통하는 형식으로 개발이 필요할 수 있다.

### 토큰과 싸이클(Token and Cycles)

![image.png](https://i.ibb.co/Sn28bdm/image.png)
(이미지 출처 - [Tokenomics of the Internet Computer](https://internetcomputer.org/how-it-works/tokenomics/))

* [$ICP 토큰](https://internetcomputer.org/how-it-works/tokenomics/)은 ICP 네트워크 자원 사용을 위한 수수료와 스테이킹과 거버넌스 토큰 투표 참여를 위한 용도로 사용된다. [$ICP의 총 발행량](https://dashboard.internetcomputer.org/circulation)은 2021년 연 발행률 10%에서 시작해서 8년에 걸쳐 연 발행률 5% 수준으로 감소한다. 캐니스터를 통해 발생한 트랜젝션에 따라 소각량이 증가하고 발행량과 수수료가 노드 제공자, 거버넌스 참여자에게 돌아가는 인플레이션-디플레이션 조정 모델을 따른다.
* ICP 캐니스터의 배포를 포함한 [모든 사용 수수료는 싸이클(Cycle)로 지불](https://internetcomputer.org/docs/current/developer-docs/gas-cost)된다. 싸이클의 가격은 국제 연방 기금(IMF)에서 만든 국제 통화 교환 비율인 SDR에 기반하여 추산된 XDR에 따라 책정된다. $ICP가 아닌 국제 통화 기준에 따라 가격을 설정함으로서 프로그램의 사용 수수료를 일정하게 조정한다. 개발자는 [싸이클 렛저 캐니스터](https://wiki.internetcomputer.org/wiki/Cycles_Ledger)를 통해 일정 $ICP를 싸이클로 변환하고 필요 수수료를 미리 충전할 수 있다. 처음 캐니스터를 만드는 개발자는 [Faucet을 활용하여 10T Cycle을 요청](https://internetcomputer.org/docs/current/developer-docs/getting-started/cycles/cycles-faucet)할 수 있다.

### ICP 생태계와 NNS(ICP Ecosystem and Nervous System)


(이미지 출처: [Overview of ICP - Subnets](https://internetcomputer.org/docs/current/developer-docs/getting-started/overview-of-icp))

* ICP 네트워크는 분산 노드와 ICP 프로토콜에 기반하여 자체적인 블록, 프로그램 구동 환경을 구축하는 샤드인 서브넷으로 구성된다. 서브넷 안에는 다양한 캐니스터들이 존재하며 캐니스터들은 온체인 프로그램으로서 온체인, 오프체인 프로그램과 소통을 통해 사용자를 위한 어플리케이션을 제공한다. 따라서 ICP 생태계는 전체 프로토콜을 위한 거버넌스, 분산 서버인 노드 운영자, 노드와 연결된 자체 네트워크인 서브넷 운영자, 캐니스터 개발자, 그리고 $ICP 토큰 홀더와 사용자로 다각화된 생태계를 이루고 있다.
* 이 중 ICP의 거버넌스는 [NNS(Network Nervous System)라 불리우는 DAO를 통해](https://internetcomputer.org/docs/current/tutorials/developer-journey/level-4/4.4-nns-governance/#what-is-the-nns) 제안, 의결, 실행이 이뤄진다. [NNS는 하나의 캐니스터](https://nns.ic0.app/)를 가지기 때문에 의사 결정이 궁극적으로 온체인에 기록되며 프로토콜의 업데이트 방향을 결정한다. NNS의 의사 결정에 참여하는 주체를 뉴런(Neuron)이라 부르는데 $ICP를 일정 기간 이상 예치(Stake)하여 참정 권한(Voting Power)를 획득하고 투표 참여에 따라 [발행량의 일부를 토큰으로 보상](https://dashboard.internetcomputer.org/governance?p=4&t=9534) 받는다. (ICP 토큰 시스템 예상과 관련된 상세 분석은 [다음 글을 참고](https://forum.dfinity.org/t/tokenomics-series-projecting-the-total-supply-of-icp/20205)한다.)

# ICP 캐니스터의 구동 원리

![image.png](https://i.ibb.co/6yPZLnV/image.png)
(이지미 출처 - [Development workflow](https://internetcomputer.org/docs/current/developer-docs/getting-started/development-workflow))
개발자의 관점에서 ICP 캐니스터로 작성된 프로그램 실행을 위해서는 [다음의 단계](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/overview/canister-lifecycle)를 거친다.

1. 캐니스터 작성: 러스트, 자바스크립트, 타입스크립트, 모토코 등의 언어로 프로그램을 작성한다. 이 과정에서 자신의 언어에 해당하는 CDK(Canister Development Kit)를 활용한다. 예를 들어 [타입스크립트를 위한 CDK는 Azle](https://demergent-labs.github.io/azle/)을 활용한다.
2. Wasm 컴파일링 및 배포: 작성된 캐니스터를 Wasm을 통해 바이너리 코드로 컴파일링한다. 이 때 ICP의 전체 개발 툴키트인 [IC SDK에서 커멘드라인 인터페이스인 dfx](https://github.com/dfinity/sdk)를 활용해 서브넷을 지정하고 캐니스터를 배포한다. 캐니스터 생성이 완료되면 개발자는 캐니스터ID(프린시플)의 통제권을 가진다.
3. 코드 설치: 작성된 캐니스터 코드를 배포된 캐니스터에 설치한다. 캐니스터ID의 통제권을 가진 개발자는 dfx 툴을 활용해 install\_code 명령어를 입력하고 코드를 설치할 수 있다.
4. 메시지 호출: 코드가 설치된 캐니스터는 개발자 뿐 아니라 사용자의 요청을 처리할 수 있다. 프로그램을 호출하기 위해서는 [ICP의 JSON ABI 양식인 캔디드(Candid)](https://internetcomputer.org/docs/current/tutorials/developer-journey/level-2/2.4-intro-candid/)가 필요하다.
5. 유지 보수: 캐니스터의 업데이틀 비롯한 유지 보수는 캐니스터ID를 가진 통제권자가 수행할 수 있다. 초기 캐니스터는 개발자가 통제하지만 이후 프로젝트가 발전함에 따라 [통제권 이양](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/maintain/control)이 일어날 수 있다.

# ICP 생태계의 발전 방향

### ICP의 특장점

* 높은 확장 효율성: 비트코인, 이더리움과 같은 프로토콜은 원장 합의를 위해 모든 노드가 동일한 원장을 저장해야 한다. 따라서 노드가 증가하면 해시 연산 참여, 네트워크 스테이킹과 같은 작업에 의해 보안성의 탈중앙화가 강화될지라도 네트워크 성능(ex. 저장 공간, 지역 처리 속도)의 향상은 이뤄지지 않는다. 반면 ICP는 체인 키 서명 방식에 의거한 노드와 서브넷의 병렬 처리가 가능하기 때문에 노드와 서브넷이 늘어나는 만큼 네트워크의 전체적인 연산 효율성도 함께 증가한다.
* 안정적인 수수료:
* 엔드투엔드 디앱 호스팅: 기존 스마트 컨트랙트는 백엔드 코드만 온체인으로 저장된다. 반면 ICP의 캐니스터는 프론트엔드 코드도 디앱 프로그램으로서 호스팅 할 수 있는 환경을 제공한다. 따라서 어플리케이션의 온체인 호환성, 보안성의 이점을 누릴 수 있다.
* 멀티체인/IT 시스템 호환성: 기존 스마트 컨트랙트는 외부 데이터를 호출하기 위해 스마트 컨트랙트와 연동되는 [외부 프로그램(오라클)을 활용](https://medium.com/dfinity/beyond-oracles-direct-https-outcalls-from-canister-smart-contracts-on-the-internet-computer-2e4a5bcbee43)했다. 그러나 ICP는 HTTP 요청을 자체적으로 처리할 수 있기 때문에 외부 오라클 프로그램의 연동 없이 온체인 캐니스터로 외부 데이터 호출, 처리가 가능하다.

### 활용 예시

* [NNS](https://github.com/dfinity/nns-dapp): NNS는 ICP의 거버넌스 참여를 위한 어플리케이션이다. $ICP 뿐 아니라 생태계의 다양한 토큰을 전송, 송신하고 $ICP 스테이킹을 통해 뉴런으로서 ICP 거버넌스에 참여가 가능하다. 또한 특정 서비스의 거버넌스 권한을 다오의 통제로 위임이 가능하다. ICP에서 NNS 다오가 서비스 거버넌스를 통제하는 형태를 SNS(Service Nervous System)이라 부른다.
* [Orally](https://docs.orally.network/): Orally는 ICP 캐니스터를 기반으로 다양한 체인 네트워크, 현실 자산 데이터를 통합하는 탈중앙화 오라클 서비스이다. ICP가 가진 체인 키 / 임계 서명과 HTTP 아웃콜(Outcall) 기능을 활용하여 EVM 체인, 거래소와 같은 외부 데이터를 취합하는 [교환 비율 캐니스터(Exchange Rate Canister)](https://docs.orally.network/utilised-icp-features/exchange-rate-canister)를 통해 데이터를 처리하고 디앱으로 전송하는 역할을 수행한다.
* [Internet Identity](https://github.com/dfinity/internet-identity): 인터넷ID(Internet Identity)는 ICP의 디앱 접속을 승인하는 아이덴디티 어플리케이션이다. 인터넷ID는 [WebAuthn API에서 파생된 캐니스터](https://internetcomputer.org/docs/current/developer-docs/web-apps/user-login/internet-identity/overview)로 구성되어 있는데 유저는 어플리케이션에서 패스키(Passkey)를 생성하여 ICP의 다른 어플리케이션에 접속할 수 있다. ICP 디앱 개발자는 Wasm 모듈 생성을 통해 인터넷 ID를 자신의 어플리케이션에 적용할 수 있다. ([적용 사례: NFID](https://nfid.one/))
* [Bitfinity EVM](https://docs.bitfinity.network/): BitfinityEVM은 ICP 상에 만들어진 EVM 기반 비트코인 레이어 2 솔루션이다. ICP의 체인 키 서명 방식을 활용하여 비트코인 기반 자산의 송금, 수신이 가능하고 EVM 기능을 통해 솔리디티 기반 스마트 컨트랙트 작성이 가능하다. 그러나 네트워크 자체는 ICP 네트워크 상에 존재한다.
* [DeAI](https://internetcomputer.org/docs/current/developer-docs/ai/overview): ICP는 캐니스터에 AI와 머신러닝 프렘워크를 호스팅하거나 HTTP 아웃콜을 활용해 OpenAI와 같은 외부 API와 소통함으로서 온체인에서 구동하는 탈중앙 AI 프로그램 개발에 큰 관심을 두고 있다. 예를 들어 [decentAI와 같은 프로젝트](https://github.com/carlosarturoceron/decentAI)는 이미 훈련된 Tensorflow 모델을 온체인에서 구동하는데 성공했다. ICP에는 DeAI를 위한 별도의 [테크니컬 워킹 그룹](https://forum.dfinity.org/t/technical-working-group-deai/24621)이 있어 지속적인 탈중앙 AI 구현을 추진 중이다.
