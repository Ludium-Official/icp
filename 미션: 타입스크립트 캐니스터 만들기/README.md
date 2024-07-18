# Azle과 React를 사용한 ICP 개발 환경 설정하기

이 템플릿을 사용하면 [인터넷 컴퓨터에서](https://internetcomputer.org/) 풀스택 Web3 애플리케이션을 구축할 수 있는 모든 것이 제공됩니다.
프론트엔드는 Vite 및 React로 구축되었으며 백엔드는 JS/TS(Azle)로 작성되었습니다.

## Get started with one click:

Gitpod에서 시작하기

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Ludium-Official/icp/)

또는 GitHub Codespaces에서 시작하기

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Ludium-Official/icp/?quickstart=1)

## 🚀 Develop

에디터가 열리면, 로컬 ICP 노드를 시작하고 캐니스터 스마트 컨트랙트를 배포하기 위해 다음 명령어를 실행하세요:

```bash
dfx start --clean # 로컬 ICP 노드 시작
# 새 터미널 창에서:
dfx deploy # 로컬 스마트 컨트랙트 배포
```

스마트 컨트랙트는 `http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943에서(가짜이름)` 접근 가능합니다.
커맨드 라인에서 `curl`을 사용하여 스마트 컨트랙트를 호출하세요:

```bash
# greet endpoint
curl http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/greet?name=ludium
```

Postman이나 HTTPie와 같은 도구를 사용하여 스마트 컨트랙트와 상호 작용할 수도 있습니다.
스마트 컨트랙트를 다시 배포하려면 `dfx deploy`를 다시 실행하세요.

준비가 되면 `dfx deploy --ic`을 실행하여 ICP 메인넷에 애플리케이션을 배포하세요.
명령은 메인넷을 위한 다른 캐니스터 URL을 출력할 것입니다, 이는 `.raw.icp0.io`로 끝납니다.
로컬과 마찬가지로 메인넷에서 스마트 컨트랙트를 호출할 수 있습니다!

## 🛠️ 기술 스택

- [Azle CDK](https://demergent-labs.github.io/azle/): JS/TS용 캐니스터 개발 키트
- [Vite](https://vitejs.dev/): 프론트엔드 웹 개발을 위한 고성능 도구
- [React](https://reactjs.org/): 컴포넌트 기반 UI 라이브러리
- [TypeScript](https://www.typescriptlang.org/): 타입 구문이 확장된 JavaScript
- [Sass](https://sass-lang.com/): CSS 스타일시트를 위한 확장된 구문

## 📚 문서

- [Azle book](https://demergent-labs.github.io/azle/the_azle_book.html)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [Internet Computer wiki](https://wiki.internetcomputer.org/)
- [Internet Computer forum](https://forum.dfinity.org/)
- [Vite developer docs](https://vitejs.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Developer Experience Feedback Board](https://dx.internetcomputer.org/)

## 💡 팁 및 요령

- 원격으로 개발할 때는 브라우저에서 캐니스터의 프론트엔드로 이동하지 않도록 하세요. 대신 커맨드 라인에서 `curl`을 사용하거나 로컬에서 개발하세요.

- `localhost`에서 백엔드 호출을 할 때는 브라우저에서 CORS를 비활성화할 필요가 있습니다. 예를 들어, Chrome의 경우 `open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security`를 실행하여 CORS를 비활성화하세요.

- "Error: An error happened during communication with the replica: ... Connection refused" 오류가 발생하면 `dfx start --clean`을 실행하여 dfx를 시작하세요.
