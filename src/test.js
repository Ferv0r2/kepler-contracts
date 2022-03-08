import KeplerContract from "klaytn/KeplerContract";

const updateFeed = (tokenId) => (dispatch, getState) => {
  // 2. 컨트랙트 메서드(CALL)를 호출합니다.: getPhoto()
  KeplerContract.methods
    .multiMinter(tokenId)
    .call()
    .then((newPhoto) => {});
};
