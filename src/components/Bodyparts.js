class BodyParts{
    constructor (){
        this.image = ['../assets/images/1.png','../assets/images/2.png','../assets/images/3.png','../assets/images/4.png','../assets/images/5.png','../assets/images/6.png','../assets/images/7.png'];
        this.next =[0];
    }

    Body(num) {
    return this.image[num];
  }
}

export {BodyParts};