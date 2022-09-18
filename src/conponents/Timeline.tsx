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
                        <h3 className="vertical-timeline-element-title">
                            {el.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            {el.location}
                        </h4>
                        <p>
                            {el.description}
                        </p>
                    </VerticalTimelineElement>)
                })}
            </VerticalTimeline>
        </section>
    )
}

export default Timeline;