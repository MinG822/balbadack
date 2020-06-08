import React from 'react';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind';
import SportsIcon from '@material-ui/icons/Sports';
import history from '../../history';
import { review } from '../../actions'
import { connect } from "react-redux";

const ReviewInfoCard = props => {
  
  const reviewData = props.hospitalData.review
  const careinfoData = props.hospitalData.careinfo
  console.log('ReviewInfoCard reviewData', reviewData)
  console.log('ReviewInfoCard careinfoData', careinfoData)
  
  const cx = classNames.bind(styles)
  var pet_data = [];
  console.log('ReviewInfoCard careinfoData.length', careinfoData.length)
  for (var i = 0; i < careinfoData.length; i++) {
    pet_data.push({
      pet: careinfoData[i].animal.aspecies,
      c_name: careinfoData[i].ciName
    })
  }

  const scorelist =  [reviewData.rclean, reviewData.rkindness, reviewData.rresult, reviewData.rprofessionality, reviewData.rovertreatment]
  const totalgrade = calcTotalScore(scorelist)
  function calcTotalScore(scorelist) {
    const totalscore = Math.round(((scorelist.reduce((a, b) => a + b, 0) / scorelist.length) + Number.EPSILON) * 100)/100
    return totalscore
  }
  // const tags = []
  // for (const [index, value] of reviewData.tags.entries()) {
  //   tags.push(<div className={cx('tag')} key={index}>#{value}</div>)
  // }
  var cont = []

  cont = reviewData.rcontent.substr(0, 120)

  async function handleClick() {
    await review.recieveHosReview(reviewData)
    history.push("/ReviewDetail", {reviewData, careinfoData})
  }

  return (
    <>
      <div className={cx('rev-box')}>
        <div className={cx('tag-box')}>
          #{reviewData.hospital.hname} <br/>
          #{reviewData.rdate.substr(0, 10)} #도움이 됐어요! {reviewData.rtotalgood}명 #★{totalgrade}
        </div>
        <div>
        &nbsp;&nbsp; 방문 목적 : {reviewData.rpurpose}
        </div>


        <div style={{marginLeft:'19px', marginRight:'2px'}}>
        * 이 리뷰는 예시입니다. <br/>
        {cont} ...
        </div>
        <div className={cx('div-center')}>
        <span onClick= {() => handleClick()}>더보기</span> 
        </div>
        <br />
      </div>
    </>    
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // recieveHosReview : (reviewData) => dispatch(review.recieveHosReview(reviewData))
  }
}

export default connect(mapDispatchToProps)(ReviewInfoCard);