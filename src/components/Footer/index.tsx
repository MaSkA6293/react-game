import React from 'react';
import { ReactComponent as Git } from '../../assets/git.svg';
import { ReactComponent as RSLogo } from '../../assets/rs_school_logo.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Email } from '../../assets/email.svg';
import { ReactComponent as YouTube } from '../../assets/YouTube_full-color_icon_(2017).svg';
import classNames from 'classnames';
import './styles.scss';

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="container">
        <ul className={classNames('footer__social', 'social')}>
          <li className="social__item">
            <a href="https://github.com/maska6293" target="blank">
              <Git width={'100%'} height={'100%'} />
            </a>
          </li>
          <li className="social__item">
            <a href="https://t.me/maska6293" target="blank">
              <Telegram width={'100%'} height={'100%'} />
            </a>
          </li>
          <li className="social__item">
            <a href="mailto:maska6293@yandex.ru" target="blank">
              <Email width={'100%'} height={'100%'} />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.youtube.com/watch?v=Fw-i7PdTqzQ"
              target="blank"
            >
              <YouTube width={'100%'} height={'100%'} />
            </a>
          </li>
        </ul>

        <a href="https://rs.school" target="blank">
          <RSLogo width={'80px'} height={'40px'} />
        </a>
        <a
          href="https://rs.school/js/"
          className="footer__course-link"
          target="blank"
        >
          Course RS_School
        </a>
      </div>
      <div className="footer__created">Created 2021</div>
    </div>
  );
};
