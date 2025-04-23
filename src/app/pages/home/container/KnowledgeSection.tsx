import React from 'react';
import { useEffect, useState } from 'react';

import { CardList } from '@shared/components/partials/Card/CardList';
import { BlogList } from '@shared/constants/data';
import Button from '@shared/components/partials/Button';
import { Blog } from '@shared/models/Blog';
import { CardTypeKey } from '@shared/utils/storage';

export const KnowledgeSection = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    setBlogData(BlogList);
  }, []);

  return (
    <section className="section section-products section-knowledge">
      <div className="container">
        <div className="wrapper">
          <div className="section-header">
            <div className="section-text">
              <p className="section-subtitle">You already know ?</p>
              <h2 className="section-title">Useful pet knowledge</h2>
            </div>
            <div className="section-action">
              <Button
                className="btn-secondary btn-flex btn-sm btn-font-small"
                label="View more"
                icon="./assets/icons/arrow.svg"
              />
            </div>
          </div>
          <div className="section-body">
            <CardList
              data={blogData}
              type={CardTypeKey.BLOG}
              className={'col-12 col-sm-12 col-md-4'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
