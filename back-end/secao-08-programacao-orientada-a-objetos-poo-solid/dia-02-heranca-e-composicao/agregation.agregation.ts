class Friend {
  private nickname: string;

  constructor(nickname: string) { 
    this.nickname = nickname
   }

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMediaAccount2 {
  private friends = new Array<Friend>();

  constructor(friends: Friend[]) { 
    this.friends = friends;
   }

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((friend) => console.log(friend));
  }
}


const friendCarol = new Friend('João');
friendCarol.setNickname('Carol');

const friendFernando = new Friend('Pedro');
friendFernando.setNickname('Fernando');

const socialMediaAccount2 = new SocialMediaAccount2([friendCarol, friendFernando]);

const friendGustavo = new Friend('Gustavo');
const friendJonas = new Friend('Jonas');

socialMediaAccount2.addFriend(friendGustavo);
socialMediaAccount2.addFriend(friendJonas);
socialMediaAccount2.printFriends();