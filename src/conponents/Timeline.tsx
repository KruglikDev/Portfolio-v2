import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {Experience} from "../utils/data.js";

const Timeline = () => {
    return (
        <section className='w-full flex items-center justify-center'>
            <VerticalTimeline>
                {Experience && Experience.map(el => {
                    return (<VerticalTimelineElement
                        key={el.id}
                        className="vertical-timeline-element--work"
                        contentStyle={{background: 'rgb(21, 24, 31)', color: '#fff'}}
                        contentArrowStyle={{borderRight: '7px solid  rgb(21, 24, 31)'}}
                        date={el.date}
                        iconStyle={{background: 'rgb(21, 24, 31)', color: '#fff'}}
                        icon={el.iconsSrc}
                    >
                        <h3 className="vertical-timeline-element-title font-bold">
                            {el.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle font-medium">
                            {el.company}
                        </h4>
                        <h4 className="vertical-timeline-element-subtitle pb-10">
                            {el.location}
                        </h4>
                        <ul>
                            {el.description.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </VerticalTimelineElement>)
                })}
            </VerticalTimeline>
        </section>
    )
}

export default Timeline;