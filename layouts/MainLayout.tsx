import React from 'react';
import { LeftMenu } from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';

import clsx from 'clsx';

interface MainLayoutProps {
  hideComments?: boolean;
  contentFullWidth?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
}) => {
  return (
    <div className="wrapper">
      <div className="leftSide">
        <LeftMenu />
      </div>
      <div className={clsx('content', { 'content--full': contentFullWidth })}>{children}</div>
      {!hideComments && (
        <div className="rightSide">
          <SideComments />
        </div>
      )}
    </div>
  );
};
