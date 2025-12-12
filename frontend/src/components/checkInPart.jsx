import './checkInPart.css'
export function CheckIn({days,month,day,blessing}){
    return (
    <div className='checkIn'>
    <div className='check_bg_shadow'></div>
    <div className="check_bg">
        <div className='check_white'></div>
        <div className='check_yello_shadow'>
            <div className='check_yello'>
                <div className='today_content'>{blessing??'今天过得怎么样？'}</div></div></div>
        <div className='check_month_shadow'>
            <div className='check_month'>
                <div className='check_month_content'>{month??12}</div></div></div>
        <div className='check_day_shadow'>
            <div className='check_day'><div className='check_day_content'>{day??11}</div></div></div>
        <div className='checkIcon_shadow'>
            <button className='checkIcon'><img  src='/checked.png' width='50rem'></img></button></div>
        <div className='accumulat_days'>{days??'0'} Days</div>
    </div>

    </div>)
}