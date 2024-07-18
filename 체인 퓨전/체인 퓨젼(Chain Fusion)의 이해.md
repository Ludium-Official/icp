# 체인 퓨젼(Chain Fusion)의 이해

# 멀티체인과 체인 퓨전

![Untitled](%E1%84%8E%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%91%E1%85%B2%E1%84%8C%E1%85%A7%E1%86%AB(Chain%20Fusion)%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%20fbcb305fc78e4ee8b7f9e24861a605d2/Untitled.png)

(이미지 출처 - [Particle Network, Chain Abstrction](https://developers.particle.network/docs/particle-vision-and-ecosystem))

- 웹3 생태계가 성장함에 따라 디지털 자산과 상호 작용 기능을 담당하는 온체인 프로그램(ex. 스마트 컨트랙트), 그리고 이들이 저장된 네트워크(블록체인)이 늘어나고 있다. 예를 들어 이더리움은 L2로 기반 확장 로드맵 발표 이후 수 많은 L2 네트워크와 파생 네트워크가 생겨나고 있고 코스모스 SDK 기반 앱체인과 ZK와 같은 기술을 도입한 신생 체인들까지 네트워크의 파편화가 가속화되고 있는 것이다.
- 이 과정에서 체인별 유동화 [자금의 파편화(Fragmentation of Liquidity](https://medium.com/@analogtime/what-is-liquidity-fragmentation-and-why-its-killing-defi-e7b7ce390793))와 호환성 부족(Lack of Composability)은 웹3의 발전을 저해하는 요소로 작용한다. 웹3의 효능 중 하나는 디지털 자산의 원활한 발행과 전송인데 체인 간의 상호 운용성 부족으로 인해 사용자의 원활한 활동에 불편을 초래하기 때문이다.
- 체인 퓨전은 ICP에서 제안한 체인 파편화 문제의 해결 방안이다. ICP와 외부 체인과의 양방향 직접 소통이 가능하도록 만듬으로서 컨트랙트 간의 소통, 외부 체인으로의 트랜젝션 처리 요청과 같은 작업이 가능하다. 이를 통해 개발자는 멀티체인으로 나뉘어 있던 자산을 활용하여 일원화된 환경에서 상호 작용할 수 있는 어플리케이션을 만들 수 있다.

# 체인 퓨전의 원리

![Untitled](%E1%84%8E%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%91%E1%85%B2%E1%84%8C%E1%85%A7%E1%86%AB(Chain%20Fusion)%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%20fbcb305fc78e4ee8b7f9e24861a605d2/Untitled%201.png)

(이미지 출처 - [Chain Fusion Overview](https://internetcomputer.org/docs/current/developer-docs/multi-chain/overview))

- 체인 퓨전은 ICP가 가진 다음의 기술적 특성으로 인해 실현이 가능하다
    - [체인키 서명](https://github.com/LudiumAgwn/icp/blob/main/ICP%20%EC%98%A4%EB%B2%84%EB%B7%B0/icp-%EC%98%A4%EB%B2%84%EB%B7%B0.md#%EC%B2%B4%EC%9D%B8-%ED%82%A4-%EC%84%9C%EB%AA%85chain-key-signatures): 체인키 서명은 ICP의 모든 계정 관리, 서명이 이뤄지는 암호화 방식으로 임계 서명(Threshold Signature)을 통해 분산화된 네트워크 서버와의 소통, 프로그램 작동 요청에 활용된다. 예를 들어 하나의 프라이빗 키로 계정에 접속하고 스마트 컨트랙트에 토큰 전송과 같은 트랜젝션 활성화를 요청하듯이 ICP 네트워크 뿐 아니라 외부 네트워크로 접속함에 있어 동일한 암호화 방식이 활용된다.
    - [RPC 노드 서브넷](https://github.com/LudiumAgwn/icp/blob/main/ICP%20%EC%98%A4%EB%B2%84%EB%B7%B0/icp-%EC%98%A4%EB%B2%84%EB%B7%B0.md#%EC%84%9C%EB%B8%8C%EB%84%B7%EA%B3%BC-nnssubnets-and-network-nervous-system): ICP에서 외부 체인과 직접적으로 소통하기 위해서는 외부 체인의 스테이트를 조회하고 트랜젝션을 전송하는 기능 구현이 필요하다. ICP에는 외부 네트워크와 직접, 간접적으로 소통하는 RPC 서브넷들이 존재한다. 예를 들어 비트코인과의 소통은 비트코인 노드를 구동하는 비트코인 어뎁터를 통해 이뤄지며 이더리움과의 소통은 알케미와 같은 JSON RPC 노드와의 소통으로 이뤄진다
    - [캐니스터](https://github.com/LudiumAgwn/icp/blob/main/ICP%20%EC%98%A4%EB%B2%84%EB%B7%B0/icp-%EC%98%A4%EB%B2%84%EB%B7%B0.md#%EC%BA%90%EB%8B%88%EC%8A%A4%ED%84%B0canister): ICP의 스마트 컨트랙트인 캐니스터는 온체인에 백엔드와 프론트엔드 프로그램을 모두 담을 수 있다. 또한 HTTPS Outcall을 활용하면 외부 블록체인 뿐 아니라 기존 IT 시스템(ex. Web2 시스템)과의 원활한 소통이 가능하다. 캐니스터 프로그래밍을 통해 외부 체인과 소통하는 기능을 구현하여 트랜젝션을 전송하면 해당 체인의 스테이트를 관리하는 RPC 노드를 통해 동작이 이뤄지는 것이다. 이 때 서명과 계정 키 관리는 체인키 서명 방식으로 이뤄진다.

# 체인 퓨전의 효과

![Untitled](%E1%84%8E%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%91%E1%85%B2%E1%84%8C%E1%85%A7%E1%86%AB(Chain%20Fusion)%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%20fbcb305fc78e4ee8b7f9e24861a605d2/Untitled%202.png)

(이미지 출처 - [Chain Fusion Starter](https://github.com/letmejustputthishere/chain-fusion-starter/tree/main?tab=readme-ov-file))

- ICP의 체인 퓨전 이외에도 [멀티체인을 위한 노력](https://xangle.io/research/detail/2050)은 다양한 프로토콜에서 이뤄지고 있다. 이 중 ICP는 2가지 큰 장점을 가지고 있다.
    - RPC 네트워크를 통한 직접 소통: ICP는 RPC 서브넷 네트워크 구조와 체인키 서명 방식을 통해 외부 네트워크가 직접적인 소통이 가능하다. 따라서 별도의 브릿지, 컨트랙트와의 소통 없이 직접적으로 네트워크와 상호 작용할 수 있다.
    - 기존 IT 시스템과의 호환성: ICP의 HTTPS Outcall은 블록체인 뿐 아니라 기존 IT 시스템과의 원활한 호환성을 제공한다. 따라서 멀티체인 자산과 HTTPS 링크가 직접 상호 작용하는 어플리케이션을 만드는데 있어서 ICP를 활용할 수 있다.
- 이 외에도 ICP가 가진 성능과 용량을 활용한다면 확장성과 다채로운 기능성을 갖춘 새로운 형태의 웹3 어플리케이션을 제작하는 것도 구상해 볼 수 있다.

# 체인 퓨전 구현 예시

![Untitled](%E1%84%8E%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%20%E1%84%91%E1%85%B2%E1%84%8C%E1%85%A7%E1%86%AB(Chain%20Fusion)%E1%84%8B%E1%85%B4%20%E1%84%8B%E1%85%B5%E1%84%92%E1%85%A2%20fbcb305fc78e4ee8b7f9e24861a605d2/Untitled%203.png)

(이미지 출처 - [EVM Chain Fusion Architecture](https://github.com/letmejustputthishere/chain-fusion-starter/tree/main?tab=readme-ov-file#architecture))

- [비트코인 API](https://internetcomputer.org/docs/current/developer-docs/multi-chain/bitcoin/overview): ICP는 스마트 컨트랙트를 통해 비트코인 네트워크와 직접 소통이 가능한 기능 구현을 제공한다. ICP는 비트코인 노드로 활동하는 서브넷인 비트코인 어뎁터(Bitcoin Adapter)를 통해 비트코인 네트워크 상태값을 조회하고 트랜젝션 전송을 요청할 수 있따.
- [EVM RPC 캐니스터](https://internetcomputer.org/docs/current/developer-docs/multi-chain/ethereum/evm-rpc/overview): EVM RPC 캐니스터는 이더리움 메인넷 및 기타 EVM 체인의 RPC 콜을 통해 ICP와 직접 소통을 할 수 있도록 만들어주는 온체인 프로그램이다.
- [체인키 토큰](https://internetcomputer.org/docs/current/developer-docs/multi-chain/chain-key-tokens/overview): 체인키 토큰은 ICP 체인 기반 자산을 담보로 멀티체인 토큰을 발행할 때 사용가능한 토큰 양식이다. 예를 들어 ckBTC는 $ICP와 $BTC의 1:1 담보 비율에 기반한 토큰이며 ckETH는 $ICP와 $ETH의 담보 비율을 보장한다. 이외에도 ckERC20와 같이 이더리움 기반 토큰 발행도 가능하다.