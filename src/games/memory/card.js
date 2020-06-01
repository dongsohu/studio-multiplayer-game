import React from "react";

export default class CardComponent extends React.Component {
  render() {
    randomImages = [
      "https://i.picsum.photos/id/1066/200/300.jpg",
      "https://i.picsum.photos/id/192/200/300.jpg",
      "https://i.picsum.photos/id/556/200/300.jpg",
      "https://i.picsum.photos/id/1068/200/300.jpg",
      "https://i.picsum.photos/id/852/200/300.jpg"
    ];
    console.log("Props is:" + this.props.image);
    return (
      <div>
        <img src={this.props.image} />
      </div>
    );
  }
}
//https://picsum.photos/200/300
