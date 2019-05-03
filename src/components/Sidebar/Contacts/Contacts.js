// @flow
import React from "react";
import { getContactHref, getIcon } from "../../../utils";
import Icon from "../../Icon";
import "./Contacts.scss";

type Props = {|
  +contacts: {
    [string]: string
  }
|};

const Contacts = ({ contacts }: Props) => (
  <div className="Contacts">
    <ul className="Contacts-list">
      {Object.keys(contacts).map(name => (
        <li className="Contacts-list-item" key={name}>
          <a
            className="Contacts-list-item-link"
            href={getContactHref(name, contacts[name])}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon icon={getIcon(name)} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Contacts;
