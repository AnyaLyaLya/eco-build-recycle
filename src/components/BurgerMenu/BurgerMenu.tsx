import { FC } from 'react';
import cn from 'classnames';
import { links } from '../../utils/links';
const cross = require('../../image/cross.png');

interface Props {
  isVisible: boolean;
  onClose: (isClose: boolean) => void;
}

export const BurgerMenu: FC<Props> = ({ isVisible, onClose }) => {
  return (
    <div className={cn('burger-menu', {'burger-menu--visible': isVisible})}>
      <div className="burger-menu__header">
        <a href="/" className='burger-menu__logo'>
          <svg xmlns="http://www.w3.org/2000/svg" width="197" height="24" viewBox="0 0 197 24" fill="none" className='burger-menu__logo'>
            <path d="M0 18.7277V1.75937H12.4394V5.47118H4.68586V8.38761H11.7989V12.0994H4.68586V15.0158H12.4057V18.7277H0Z" fill="#2F2A27"/>
            <path d="M21.0674 18.9597C19.6628 18.9597 18.4604 18.6862 17.4603 18.1394C16.4602 17.5871 15.6933 16.8193 15.1595 15.8361C14.6258 14.8474 14.3589 13.7012 14.3589 12.3977C14.3589 11.0941 14.6258 9.95077 15.1595 8.96758C15.6933 7.97887 16.4602 7.21109 17.4603 6.66426C18.4604 6.11191 19.6628 5.83573 21.0674 5.83573C22.3372 5.83573 23.4356 6.0622 24.3627 6.51513C25.2954 6.96254 26.0173 7.59774 26.5286 8.42075C27.0399 9.23823 27.2984 10.1993 27.304 11.304H22.989C22.9271 10.6357 22.7305 10.1275 22.399 9.77954C22.0731 9.42603 21.6517 9.24928 21.1348 9.24928C20.7303 9.24928 20.3763 9.36527 20.0729 9.59726C19.7695 9.82373 19.5336 10.1689 19.365 10.6329C19.1964 11.0914 19.1122 11.6686 19.1122 12.3646C19.1122 13.0605 19.1964 13.6405 19.365 14.1045C19.5336 14.5629 19.7695 14.9081 20.0729 15.1401C20.3763 15.3666 20.7303 15.4798 21.1348 15.4798C21.4776 15.4798 21.781 15.4025 22.045 15.2478C22.3091 15.0877 22.5226 14.8557 22.6856 14.5519C22.8541 14.2426 22.9552 13.867 22.989 13.4251H27.304C27.2871 14.5463 27.0259 15.524 26.5202 16.3581C26.0145 17.1866 25.2982 17.8273 24.3711 18.2803C23.4497 18.7332 22.3484 18.9597 21.0674 18.9597Z" fill="#2F2A27"/>
            <path d="M35.46 18.9597C34.0554 18.9597 32.853 18.6862 31.8529 18.1394C30.8528 17.5871 30.0859 16.8193 29.5521 15.8361C29.0183 14.8474 28.7515 13.7012 28.7515 12.3977C28.7515 11.0941 29.0183 9.95077 29.5521 8.96758C30.0859 7.97887 30.8528 7.21109 31.8529 6.66426C32.853 6.11191 34.0554 5.83573 35.46 5.83573C36.8646 5.83573 38.067 6.11191 39.0671 6.66426C40.0672 7.21109 40.8341 7.97887 41.3679 8.96758C41.9017 9.95077 42.1685 11.0941 42.1685 12.3977C42.1685 13.7012 41.9017 14.8474 41.3679 15.8361C40.8341 16.8193 40.0672 17.5871 39.0671 18.1394C38.067 18.6862 36.8646 18.9597 35.46 18.9597ZM35.4937 15.5793C35.887 15.5793 36.2269 15.4494 36.5135 15.1898C36.8 14.9302 37.022 14.5602 37.1793 14.0796C37.3366 13.5991 37.4153 13.0274 37.4153 12.3646C37.4153 11.6962 37.3366 11.1245 37.1793 10.6495C37.022 10.1689 36.8 9.79887 36.5135 9.53926C36.2269 9.27966 35.887 9.14985 35.4937 9.14985C35.0779 9.14985 34.7212 9.27966 34.4234 9.53926C34.1256 9.79887 33.898 10.1689 33.7407 10.6495C33.5834 11.1245 33.5047 11.6962 33.5047 12.3646C33.5047 13.0274 33.5834 13.5991 33.7407 14.0796C33.898 14.5602 34.1256 14.9302 34.4234 15.1898C34.7212 15.4494 35.0779 15.5793 35.4937 15.5793Z" fill="#2F2A27"/>
            <path d="M43.9889 18.7277V1.75937H51.4728C52.7876 1.75937 53.8916 1.93336 54.785 2.28134C55.6839 2.62932 56.361 3.12092 56.8161 3.75612C57.2768 4.39133 57.5071 5.13977 57.5071 6.00144C57.5071 6.6256 57.3667 7.19452 57.0858 7.70821C56.8104 8.2219 56.4228 8.65274 55.9227 9.00072C55.4227 9.34318 54.8383 9.58069 54.1697 9.71325V9.87896C54.9114 9.90658 55.5856 10.0916 56.1924 10.4341C56.7992 10.771 57.2824 11.2378 57.642 11.8343C58.0016 12.4253 58.1814 13.1213 58.1814 13.9222C58.1814 14.8501 57.9342 15.6759 57.4397 16.3995C56.9509 17.1231 56.2542 17.692 55.3496 18.1063C54.445 18.5205 53.3663 18.7277 52.1133 18.7277H43.9889ZM48.6748 15.049H50.866C51.6526 15.049 52.2426 14.9054 52.6359 14.6182C53.0292 14.3254 53.2258 13.8946 53.2258 13.3256C53.2258 12.928 53.1331 12.591 52.9477 12.3148C52.7623 12.0387 52.4982 11.8288 52.1555 11.6852C51.8184 11.5415 51.411 11.4697 50.9335 11.4697H48.6748V15.049ZM48.6748 8.6196H50.5963C51.0065 8.6196 51.3689 8.55608 51.6835 8.42903C51.9982 8.30199 52.2426 8.11972 52.4167 7.8822C52.5965 7.63917 52.6864 7.34366 52.6864 6.99568C52.6864 6.47094 52.4954 6.07048 52.1133 5.79431C51.7313 5.51261 51.2481 5.37176 50.6638 5.37176H48.6748V8.6196Z" fill="#2F2A27"/>
            <path d="M68.3032 13.1599V6.00144H72.9553V18.7277H68.5391V16.3084H68.4043C68.1234 17.1203 67.6318 17.7555 66.9294 18.214C66.2271 18.6669 65.3928 18.8934 64.4264 18.8934C63.5218 18.8934 62.7296 18.689 62.0497 18.2803C61.3755 17.8715 60.8502 17.3081 60.4737 16.5901C60.1029 15.872 59.9147 15.049 59.9091 14.121V6.00144H64.5612V13.1599C64.5668 13.7896 64.7298 14.284 65.05 14.643C65.3759 15.002 65.831 15.1816 66.4153 15.1816C66.803 15.1816 67.1373 15.1015 67.4183 14.9413C67.7048 14.7756 67.9239 14.5436 68.0756 14.2453C68.2329 13.9415 68.3088 13.5797 68.3032 13.1599Z" fill="#2F2A27"/>
            <path d="M75.3214 18.7277V6.00144H79.9736V18.7277H75.3214ZM77.6475 4.67579C77.0182 4.67579 76.4788 4.47142 76.0294 4.06268C75.5799 3.65394 75.3551 3.16234 75.3551 2.5879C75.3551 2.01345 75.5799 1.52185 76.0294 1.11311C76.4788 0.704371 77.0182 0.5 77.6475 0.5C78.2824 0.5 78.8218 0.704371 79.2656 1.11311C79.7151 1.52185 79.9399 2.01345 79.9399 2.5879C79.9399 3.16234 79.7151 3.65394 79.2656 4.06268C78.8218 4.47142 78.2824 4.67579 77.6475 4.67579Z" fill="#2F2A27"/>
            <path d="M86.996 1.75937V18.7277H82.3439V1.75937H86.996Z" fill="#2F2A27"/>
            <path d="M94.0522 18.8934C93.1308 18.8934 92.2824 18.6559 91.507 18.1808C90.7373 17.7058 90.1192 16.985 89.6529 16.0184C89.1922 15.0518 88.9618 13.8338 88.9618 12.3646C88.9618 10.829 89.2034 9.58069 89.6866 8.6196C90.1754 7.6585 90.8047 6.95425 91.5745 6.50684C92.3498 6.05944 93.1645 5.83573 94.0185 5.83573C94.659 5.83573 95.2209 5.9462 95.7041 6.16715C96.1873 6.38256 96.5918 6.67255 96.9177 7.0371C97.2436 7.39613 97.4908 7.79107 97.6593 8.2219H97.7268V1.75937H102.379V18.7277H97.7605V16.6398H97.6593C97.4795 17.0706 97.2211 17.4573 96.884 17.7997C96.5525 18.1366 96.1479 18.4045 95.6704 18.6034C95.1984 18.7967 94.659 18.8934 94.0522 18.8934ZM95.7715 15.3804C96.1985 15.3804 96.5637 15.2589 96.8671 15.0158C97.1761 14.7673 97.4121 14.4193 97.5751 13.9719C97.7436 13.519 97.8279 12.9832 97.8279 12.3646C97.8279 11.7349 97.7436 11.1963 97.5751 10.7489C97.4121 10.296 97.1761 9.95077 96.8671 9.71325C96.5637 9.47022 96.1985 9.3487 95.7715 9.3487C95.3445 9.3487 94.9793 9.47022 94.6759 9.71325C94.3781 9.95077 94.1477 10.296 93.9848 10.7489C93.8275 11.1963 93.7488 11.7349 93.7488 12.3646C93.7488 12.9942 93.8275 13.5355 93.9848 13.9885C94.1477 14.4359 94.3781 14.7811 94.6759 15.0241C94.9793 15.2616 95.3445 15.3804 95.7715 15.3804Z" fill="#2F2A27"/>
            <path d="M104.595 18.7277V1.75937H112.046C113.327 1.75937 114.448 1.98859 115.408 2.44705C116.369 2.9055 117.116 3.56556 117.65 4.42723C118.184 5.2889 118.451 6.3218 118.451 7.52594C118.451 8.74111 118.175 9.76573 117.625 10.5998C117.08 11.4338 116.313 12.0635 115.324 12.4888C114.341 12.9141 113.192 13.1268 111.877 13.1268H107.427V9.54755H110.933C111.484 9.54755 111.953 9.48127 112.341 9.3487C112.734 9.21061 113.034 8.99243 113.242 8.69416C113.456 8.39589 113.563 8.00648 113.563 7.52594C113.563 7.03987 113.456 6.64493 113.242 6.34114C113.034 6.03182 112.734 5.80535 112.341 5.66174C111.953 5.51261 111.484 5.43804 110.933 5.43804H109.281V18.7277H104.595ZM114.709 10.9395L119.024 18.7277H113.933L109.72 10.9395H114.709Z" fill="#2F2A27"/>
            <path d="M126.44 18.9597C125.058 18.9597 123.867 18.7 122.867 18.1808C121.872 17.6561 121.105 16.9049 120.566 15.9272C120.032 14.944 119.765 13.7675 119.765 12.3977C119.765 11.0831 120.035 9.9342 120.575 8.95101C121.114 7.96782 121.875 7.20281 122.858 6.65598C123.842 6.10915 125.002 5.83573 126.339 5.83573C127.317 5.83573 128.202 5.98487 128.994 6.28314C129.786 6.58141 130.463 7.01501 131.025 7.58393C131.587 8.14733 132.02 8.83225 132.323 9.63869C132.626 10.4451 132.778 11.3537 132.778 12.3646V13.4251H121.215V10.9063H128.497C128.491 10.5418 128.396 10.2214 128.21 9.94524C128.03 9.66354 127.786 9.44536 127.477 9.29071C127.174 9.13052 126.828 9.05043 126.44 9.05043C126.064 9.05043 125.718 9.13052 125.404 9.29071C125.089 9.44536 124.836 9.66078 124.645 9.93696C124.46 10.2131 124.361 10.5363 124.35 10.9063V13.6239C124.35 14.0327 124.437 14.3972 124.611 14.7176C124.786 15.0379 125.036 15.2893 125.362 15.4715C125.687 15.6538 126.081 15.745 126.541 15.745C126.862 15.745 127.154 15.7008 127.418 15.6124C127.688 15.524 127.918 15.397 128.109 15.2313C128.3 15.06 128.44 14.8557 128.53 14.6182H132.778C132.632 15.5019 132.286 16.2697 131.741 16.9215C131.196 17.5677 130.474 18.0704 129.575 18.4294C128.682 18.7829 127.637 18.9597 126.44 18.9597Z" fill="#2F2A27"/>
            <path d="M140.913 18.9597C139.508 18.9597 138.306 18.6862 137.306 18.1394C136.306 17.5871 135.539 16.8193 135.005 15.8361C134.471 14.8474 134.204 13.7012 134.204 12.3977C134.204 11.0941 134.471 9.95077 135.005 8.96758C135.539 7.97887 136.306 7.21109 137.306 6.66426C138.306 6.11191 139.508 5.83573 140.913 5.83573C142.183 5.83573 143.281 6.0622 144.208 6.51513C145.141 6.96254 145.863 7.59774 146.374 8.42075C146.885 9.23823 147.144 10.1993 147.15 11.304H142.834C142.773 10.6357 142.576 10.1275 142.245 9.77954C141.919 9.42603 141.497 9.24928 140.98 9.24928C140.576 9.24928 140.222 9.36527 139.918 9.59726C139.615 9.82373 139.379 10.1689 139.211 10.6329C139.042 11.0914 138.958 11.6686 138.958 12.3646C138.958 13.0605 139.042 13.6405 139.211 14.1045C139.379 14.5629 139.615 14.9081 139.918 15.1401C140.222 15.3666 140.576 15.4798 140.98 15.4798C141.323 15.4798 141.626 15.4025 141.891 15.2478C142.155 15.0877 142.368 14.8557 142.531 14.5519C142.7 14.2426 142.801 13.867 142.834 13.4251H147.15C147.133 14.5463 146.871 15.524 146.366 16.3581C145.86 17.1866 145.144 17.8273 144.217 18.2803C143.295 18.7332 142.194 18.9597 140.913 18.9597Z" fill="#2F2A27"/>
            <path d="M151.901 23.5C151.367 23.5 150.858 23.4586 150.375 23.3757C149.892 23.2984 149.468 23.1907 149.103 23.0526L150.114 19.8048C150.496 19.9373 150.844 20.0229 151.159 20.0616C151.479 20.1003 151.752 20.0782 151.977 19.9953C152.207 19.9125 152.373 19.755 152.474 19.5231L152.575 19.2911L148.024 6.00144H152.878L154.968 14.817H155.103L157.227 6.00144H162.115L157.396 19.7882C157.16 20.4897 156.817 21.1194 156.367 21.6772C155.924 22.2406 155.339 22.6853 154.614 23.0112C153.89 23.3371 152.985 23.5 151.901 23.5Z" fill="#2F2A27"/>
            <path d="M169.281 18.9597C167.876 18.9597 166.674 18.6862 165.674 18.1394C164.674 17.5871 163.907 16.8193 163.373 15.8361C162.839 14.8474 162.572 13.7012 162.572 12.3977C162.572 11.0941 162.839 9.95077 163.373 8.96758C163.907 7.97887 164.674 7.21109 165.674 6.66426C166.674 6.11191 167.876 5.83573 169.281 5.83573C170.551 5.83573 171.649 6.0622 172.576 6.51513C173.509 6.96254 174.231 7.59774 174.742 8.42075C175.253 9.23823 175.512 10.1993 175.518 11.304H171.202C171.141 10.6357 170.944 10.1275 170.613 9.77954C170.287 9.42603 169.865 9.24928 169.348 9.24928C168.944 9.24928 168.59 9.36527 168.286 9.59726C167.983 9.82373 167.747 10.1689 167.579 10.6329C167.41 11.0914 167.326 11.6686 167.326 12.3646C167.326 13.0605 167.41 13.6405 167.579 14.1045C167.747 14.5629 167.983 14.9081 168.286 15.1401C168.59 15.3666 168.944 15.4798 169.348 15.4798C169.691 15.4798 169.994 15.4025 170.259 15.2478C170.523 15.0877 170.736 14.8557 170.899 14.5519C171.068 14.2426 171.169 13.867 171.202 13.4251H175.518C175.501 14.5463 175.239 15.524 174.734 16.3581C174.228 17.1866 173.512 17.8273 172.585 18.2803C171.663 18.7332 170.562 18.9597 169.281 18.9597Z" fill="#2F2A27"/>
            <path d="M182.089 1.75937V18.7277H177.437V1.75937H182.089Z" fill="#2F2A27"/>
            <path d="M190.662 18.9597C189.28 18.9597 188.089 18.7 187.089 18.1808C186.094 17.6561 185.327 16.9049 184.788 15.9272C184.254 14.944 183.987 13.7675 183.987 12.3977C183.987 11.0831 184.257 9.9342 184.797 8.95101C185.336 7.96782 186.097 7.20281 187.08 6.65598C188.064 6.10915 189.224 5.83573 190.561 5.83573C191.539 5.83573 192.424 5.98487 193.216 6.28314C194.008 6.58141 194.685 7.01501 195.247 7.58393C195.809 8.14733 196.242 8.83225 196.545 9.63869C196.848 10.4451 197 11.3537 197 12.3646V13.4251H185.437V10.9063H192.719C192.713 10.5418 192.618 10.2214 192.432 9.94524C192.252 9.66354 192.008 9.44536 191.699 9.29071C191.396 9.13052 191.05 9.05043 190.662 9.05043C190.286 9.05043 189.94 9.13052 189.626 9.29071C189.311 9.44536 189.058 9.66078 188.867 9.93696C188.682 10.2131 188.583 10.5363 188.572 10.9063V13.6239C188.572 14.0327 188.659 14.3972 188.833 14.7176C189.008 15.0379 189.258 15.2893 189.584 15.4715C189.909 15.6538 190.303 15.745 190.763 15.745C191.084 15.745 191.376 15.7008 191.64 15.6124C191.91 15.524 192.14 15.397 192.331 15.2313C192.522 15.06 192.662 14.8557 192.752 14.6182H197C196.854 15.5019 196.508 16.2697 195.963 16.9215C195.418 17.5677 194.696 18.0704 193.797 18.4294C192.904 18.7829 191.859 18.9597 190.662 18.9597Z" fill="#2F2A27"/>
          </svg>
        </a>

        <button className='burger-menu__button-cross' onClick={() => onClose(false)}>
          <img src={cross} alt="cross" className='burger-menu__button-cross--svg' />
        </button>
      </div>

      <nav className='burger-menu__nav'>
        {links.map(link => (
          <a href={link.link} className='burger-menu__nav--link' key={link.title} onClick={() => onClose(false)}>
            {link.title}
          </a>
        ))} 
      </nav>

      <button className='burger-menu__button'>
        Contact us
      </button>
    </div>
  );
};