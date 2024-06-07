import React from 'react';

import Link from 'next/link';

interface ISocialIcon {
  icon: React.ReactNode;
  link: string;
  style: string;
}

export const SocialIcon: React.FC<ISocialIcon> = ({ icon, link, style }) => (
  <Link href={link} className={style}>
    {icon}
  </Link>
);
