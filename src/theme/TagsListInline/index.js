import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from './styles.module.css';
export default function TagsListInline({tags}) {
  return (
    <>
      <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Kategorien:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, 'padding--none', 'margin-left--sm')}>
        {tags.map(({label, permalink: tagPermalink}) => (
          <li key={tagPermalink} className={styles.tag}>
            <Tag label={label} permalink={tagPermalink} />
          </li>
        ))}
      </ul>
    </>
  );
}
