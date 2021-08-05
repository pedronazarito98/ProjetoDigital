import { Ul } from "./styles";
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

export function RightNav({ open }) {
  return (
    <Ul open={open}>
      <li>
        <a href="">  {<FaInstagram />} </a>
      </li>

      <li>
        <a href="">  {<FaYoutube />} </a>
      </li>
      <li>
        <a href="">  {<FaFacebook />} </a>
      </li>

      <li>
        <a href="">  {<FaLinkedin />} </a>        
      </li>
      
      
    </Ul>
  )
}