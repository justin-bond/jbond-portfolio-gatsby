import React from 'react';
import classNames from 'classnames';

import Container from '../components/Container';

const nsBase = 'page';
const ns = `${nsBase}-404`;

const error404 = () => {
  const rootClassnames = classNames({
    [`${nsBase} ${ns}`]: true,
  });

  return (
    <div className={rootClassnames}>
      <Container>
        404
      </Container>
    </div>
  );
};

export default error404;
