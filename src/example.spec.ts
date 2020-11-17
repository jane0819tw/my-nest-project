// describe 接收兩個參數: 1. 名稱 2. 要做的事情
describe('my test', () => {
  // it 包含了實際跑的測試
  it('returns true', () => {
    expect(true).toEqual(true)
  })
})

class FriendList{
  friends = []
  addFriend(name) {
    this.friends.push(name)
    this.announceFriendship(name)
  }
  removeFriend(name) {
    let index = this.friends.indexOf(name)
    if (index === -1) {
      throw new Error('friend not found!')
    }
    this.friends.splice(index,1)
  }
  announceFriendship(name) {

    console.log(`${name} is announced!`)
  }
}

describe('friendList', () => {
  let friendList;
  beforeEach(() => {
    friendList = new FriendList()
  });
  it('init friendList', () => {
  expect(friendList.friends.length).toEqual(0)
  })
  
  it('add friend', () => {
    friendList.addFriend('jane');
    expect(friendList.friends.length).toEqual(1)
  })
  
  it('announce friendship', () => {
    // 建立 mock function的方法: 將mock 加在指定的function，監視該function
    friendList.announceFriendship = jest.fn()
    // 呼叫該function
    friendList.addFriend('miso')
    // 透過expect().toHaveBeenCalled()檢查該function有沒有被呼叫
    expect(friendList.announceFriendship).toHaveBeenCalled()

    // 否定: expect(friendList.announceFriendship).not.toHaveBeenCalled()
    // 檢查傳的參數: expect(friendList.announceFriendship).toHaveBeenCalledWith('miso')
  })

  describe('remove a friend', () => {
    it('delete a friend from friendList', () => {
      friendList.addFriend('jane')
      expect(friendList.friends[0]).toEqual('jane')
      friendList.removeFriend('jane')
      expect(friendList.friends[0]).toBeUndefined()
    })
    it('throw an error when not found', () => {
    
      // expect(()=>friendList.removeFriend('jane')).toThrow()
      expect(()=>friendList.removeFriend('jane')).toThrowError(new Error('friend not found!'))
      
  })
  })

})