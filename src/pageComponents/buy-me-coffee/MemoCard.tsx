import { clsx } from 'clsx';
import { OnchainAvatar } from '../../../onchainKit';
import { convertBigIntTimestampToDate } from '../../utils/timestamp';
import type { CoffeeMemo } from '../../types';

/**
 * Memo received from the coffee purchase in BuyMeACoffee smart contract.
 * https://github.com/alchemyplatform/RTW3-Week2-BuyMeACoffee-Contracts/blob/main/contracts/BuyMeACoffee.sol#L16
 * @param userName Name of the person who sent the memo.
 * @param message Message sent by the person.
 * @param timestamp Timestamp of the memo.
 */
function MemoCard({ userName, message, userAddress, time }: CoffeeMemo) {
  const convertedTimestamp = convertBigIntTimestampToDate(time);
  return (
    <li className="flex w-full flex-col items-start gap-4">
      <div className="flex items-center justify-between self-stretch">
        <div className="flex items-center gap-3">
          <OnchainAvatar address={userAddress} />
          <div className="flex items-start gap-1">
            <span className="text-3 text-bold w-fit whitespace-nowrap font-bold text-boat-color-palette-foreground">
              {userName}
            </span>
            <span className="text-3 w-fit whitespace-nowrap font-normal text-boat-color-palette-foregroundmuted">
              bought 1 coffee
            </span>
          </div>
        </div>
        <span className="text-3 w-fit whitespace-nowrap font-normal text-boat-color-palette-foregroundmuted">
          {convertedTimestamp.toDateString()}
        </span>
      </div>
      <div
        className={clsx([
          'flex w-full items-center rounded-2xl border-2',
          'border-solid border-[color:var(--boat-color-foregroundMuted,#8A919E)] p-6 backdrop-blur-[20px]',
        ])}
      >
        <p className="flex w-[0px] shrink grow items-start gap-1">
          <span
            className={clsx([
              'truncate whitespace-nowrap text-wrap text-base ',
              'font-normal not-italic leading-6 text-boat-color-palette-foreground',
            ])}
          >
            {message}
          </span>
        </p>
      </div>
    </li>
  );
}

export default MemoCard;
