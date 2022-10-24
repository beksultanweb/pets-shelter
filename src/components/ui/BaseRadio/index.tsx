import s from './styles.module.scss'
import {ICheckbox} from '../../../types/ui'

export const BaseCheckbox = (props: ICheckbox) => {

  const {name, content, isChecked, value, change} = props

  const currentStyle = `${s.checkbox} ${isChecked && s.checkbox_checked}`

  const toggleChecked = (name: string, value: string) => {
    if (change) change(name, value)
  }

  return (
    <label className={currentStyle}>
      <div className={s.checkbox__mark}>
        <div className={s.icon}></div>
      </div>
      {content}
      <input
        type='checkbox'
        name={name}
        value={value}
        className={s.checkbox__input}
        onChange={() => toggleChecked(name, value)}
        checked={isChecked}
      />
    </label>
  )
}