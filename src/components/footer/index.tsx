import s from './styles.module.scss'
import {footerTextRight, iconsFooter} from '../../mocks/footer'

export const Footer = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <p className={s.left__undertitle}>
          Социальный проект
        </p>
        <p className={s.left__title}>
          HelpPet
        </p>
        <p className={s.left__subtitle}>
          (Тут о надо написать о проекте, кто его создал и почему). Для добрых дел время всегда найдётся. Это доказал
          человек, ездивший в Питер по своим делам. Как-то проходя один из дворов, он обнаружил там хорошую молоденькую
          кошечку, совсем ещё подростка. Он приманил её и забрал с собой в столицу. В дороге человек и кошка почти
          подружились и узнали друг друга получше.
        </p>
        <p className={s.left__subscribe}>
          Подписывайтесь на нас
        </p>
        <div className={s.left__icons}>
          {
            iconsFooter.map(icon => (
              <div
                key={icon.id}
                className={s.left__social}
              >
                <img
                  className={s.left__icon}
                  src={icon.src}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className={s.right}>
        {
          footerTextRight.map(item => (
            <div
              className={s.right__column}
              key={item.id}
            >
              <h2
                className={s.right__title}
                key={item.id}
              >
                {item.title}
              </h2>
              <ul className={`${s.right__links} ${item.class ? s.right__links_row : ''}`}>
                {
                  item.subtitleLinks.map((link: any) => (
                    <a
                      key={link.id}
                      className={s.right__link}
                    >
                      {
                        link.text ?
                          link.text
                          : <img
                            src={link.src}
                            className={s.right__links__icon}
                            alt="icon"
                          />
                      }
                    </a>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>
  )
}