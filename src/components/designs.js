import React, {Component} from 'react';
import './lectures.css';


class Membership extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  

  sectionTitle(){
    return(
      <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="section-heading subpageHeading">Experiences</h2>
        </div>
      </div>
    )
  }

  drawLectures(){

    var design2 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <div className="projectText">
          <p><h5>팀 균형감각 창립멤버</h5></p>
        </div>
      </div>
    </div>

    var design1 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
         <img className="websiteImage" src="https://cdn.jsdelivr.net/gh/etjejong/etjejong.github.io/src/images/tesol.png" alt="projectimage"/>
        <div className="projectText">
          <p><h5>TESOL</h5></p>
            <p className="bookDescription">
              Wenatchee Valley College(WVC) TESOL수료
            </p>
        </div>
      </div>
    </div>

    var design3 = <div className="singleLectureContainer">
      <div className="singleWebsiteCard">
        <div className="projectText">
          <p><h5>(前)뮤엠영어 강사</h5></p>
          <p><h5>(現)중등영어학원 강사</h5></p>
        </div>
      </div>
    </div>

    return (
      <div className="websitesContainer">
        {design2}
        {design3}
        {design1}
      </div>
    )
  }

  render() {
    return (
      <section id="lectures" className="animated bounceInDown">
          {this.sectionTitle()}
          {this.drawLectures()}
      </section>
    );
  }
}
  
export default Membership;