export class search {
  userId: number;
  userName: string;
  soal: {
    id: number;
    matn: string;
    tags:
    [{
      name: string;
      tagId: number;
    }]
    dateTime: Date;
    isDeleted: boolean;
  }
  javab: [{
    javabId: number;
    matn: string;
    idSoal: number;
    date: Date;
    idUser: number;
    username: string;
  }]
}

