'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { NavbarLink } from '../header/Navbar';

export default function Footer() {
  return (
    <footer className="flex flex-1 flex-col justify-end">
      <div className="h-96 bg-boat-footer-dark-gray py-12">
        <div className="container mx-auto flex w-full justify-between px-8">
          <div className="flex flex-col">
            <div className="flex h-8 items-center justify-start gap-4">
              <NextLink href="/" passHref className="relative h-8 w-8">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_170_407)">
                    <path
                      d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                      fill="url(#paint0_linear_170_407)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_170_407"
                      x1={16}
                      y1={0}
                      x2={16}
                      y2={32}
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F55925" />
                      <stop offset={1} stopColor="#D75986" />
                    </linearGradient>
                    <clipPath id="clip0_170_407">
                      <rect width={32} height={32} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </NextLink>
              <NextLink
                href="/"
                passHref
                className="font-robotoMono text-center text-xl font-medium text-white"
              >
                BUILD ONCHAIN APPS
              </NextLink>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
              <p className="text-base font-normal leading-7 text-boat-footer-light-gray">
                This project is licensed under the MIT License - see the{' '}
                <NextLink
                  href="https://github.com/coinbase/build-onchain-apps/blob/main/LICENSE.md"
                  className="underline"
                  target="_blank"
                >
                  LICENSE.md
                </NextLink>{' '}
                file for details
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center">
            <NavbarLink href="https://github.com/coinbase/build-onchain-apps" target="_blank">
              <GitHubLogoIcon width="24" height="24" />
            </NavbarLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
