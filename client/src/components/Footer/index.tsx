import React from "react";
import "./styles.scss";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as RSLogo } from "../../assets/rs_school_logo.svg";
import { ReactComponent as Telegram } from "../../assets/telegram.svg";
import { ReactComponent as Email } from "../../assets/email.svg";
export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="contaner">
        <div className="footer__social">
          <a href="https://github.com/maska6293" target="blank">
            <Git width={"40px"} height={"40px"} />
          </a>
          <a href="https://t.me/maska6293" target="blank">
            <Telegram width={"40px"} height={"40px"} />
          </a>{" "}
          <a href="mailto:maska6293@yandex.ru" target="blank">
            <Email width={"40px"} height={"40px"} />
          </a>{" "}
        </div>

        <a href="https://rs.school" target="blank">
          <RSLogo width={"80px"} height={"40px"} />
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
