import React from 'react';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind';
import SportsIcon from '@material-ui/icons/Sports';
import history from '../../history';
const reviewData = {
  r_no: 0,
  u_id: 'aestas',
  r_nickname: '익명의 코끼리',
  r_photo: 'https://lh3.googleusercontent.com/proxy/QYikpOM5d8B4H0_YTn1sfYzEQcGYjKwUtseoQXBpXqhjh3bsn04ZdeNL533bsCyivn3OzERLxq2zBPl5l9rt_UU_B6PlMBkQHef624cQ8DI0TjJkozUb8Qyhs8kYkTGclUI-uGs83FjcgEo,http://www.busan.com/nas/wcms/wcms_data/photos/2020/02/12/2020021209194665170_l.jpg,https://modo-phinf.pstatic.net/20160629_37/1467141681611RHSrJ_JPEG/mosaazDVas.jpeg?type=w1100',
  r_content: '2010년부터 다니던 병원입니다. 고양이에게 중성화 수술은 꼭 필요한 것 같아요. 계속 힘들어해서 몇 차례 검진 받고 선생님과 상담후에 중성화 수술을 하게되었습니다. 선생님 정말 친절하시고요 여기 애견용 풀도 있는 것 같아서 상처 부위 치료되면 또 오려고요!',
  r_reciept: true,
  r_treatmentdata: '2020-05-10',
  r_date: '2020-05-10',
  tags: ['중성화수술', "고양이", "15kg", '정기적', "친절", "전용풀장", "감사"],
  r_overtreatement: 1,
  r_kindness: 4,
  r_result: 4,
  r_clean: 4,
  r_report: 0,
  r_deleted: false,
  Like: [{ u_id: 1 }, { u_id: 2 }, { u_id: 3 }],
  careinfo: [
    {
      ci_no: 2,
      h_code: 1,
      ci_vet: '고양이',
      ci_price: 25000,
      CareList: {
        c_code: 3,
        c_name: '중성화수술',
        c_category: '수술'
      },
      r_no: 0
    },
    {
      ci_no: 3,
      h_code: 1,
      ci_vet: '고양이',
      ci_price: 30000,
      CareList: {
        c_code: 4,
        c_name: '붕대',
        c_category: '시술'
      },
      r_no: 0
    },
    {
      ci_no: 4,
      h_code: 1,
      ci_vet: '고양이',
      ci_price: 50000,
      CareList: {
        c_code: 2,
        c_name: '마취약',
        c_category: '주사'
      },
      r_no: 0
    }
  ],
  h_code: 1
}
const cx = classNames.bind(styles)
var pet_data = [];
for (var i = 0; i < reviewData.careinfo.length; i++) {
  pet_data.push({
    pet: reviewData.careinfo[i].ci_vet,
    c_name: reviewData.careinfo[i].CareList.c_name
  })
}
const tags = []
for (const [index, value] of reviewData.tags.entries()) {
  tags.push(<div className={cx('tag')} key={index}>#{value}</div>)
}
var cont = []

cont = reviewData.r_content.substr(0, 120)

function handleClick() {
  history.push("/ReviewDetail")
}
const ReviewInfoCard = props => {

  return (
    <>
      <div className={cx('rev-box')}>
        <div>
          {reviewData.r_nickname}
        </div>
        <div className={cx('tag-box')}>
          {tags}
        </div>
        <div>
          {reviewData.careinfo[0].ci_vet}
        </div>
        <div>
          {reviewData.careinfo[0].CareList.c_name}
        </div>


        <div>
          {cont} ...
        </div>
        <text onClick= {() => handleClick()}>더보기</text>
        <br />
      </div>
    </>
  );
}

export default ReviewInfoCard