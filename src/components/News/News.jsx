import React from 'react';
import s from './News.module.css';

const News = (props) => {

    let textareaElem = React.createRef();

    let addNews = () => {
        let text = textareaElem.current.value;
        alert(text);
    }

    return (
      <div>
          News

          <div>
              <textarea className={s.textarea} ref={textareaElem}></textarea>
              <button className={s.button} onClick={addNews}>
                  add news
              </button>
          </div>
      </div>
    )
}

export default News;