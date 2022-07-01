import React from 'react'
import './Main.css'
function Main() {
  return (
    <div>
    <div class="outer">
      <div class="inner"></div>
    </div>
    <p>
      1. for moving items in "left top" of box the properties of outer box
      should be "justify-content: flex-start" and inner box should be
      "align-self: flex-start"
      <br /><br />

      2. for moving items in "left center" of box the properties of outer box
      should be "justify-content: flex-start" and inner box should be
      "align-self: center"
      <br /><br />

      3. for moving items in "left bottom" of box the properties of outer box
      should be "justify-content: flex-start" and inner box should be
      "align-self: flex-end"
      <br /><br />
      
      4. for moving items in "center top" of box the properties of outer box
      should be "justify-content: center" and inner box should be "align-self:
      flex-start"
      <br /><br />

      5. for moving items in "center" of box the properties of outer box should
      be "justify-content: center" and inner box should be "align-self: center"
      <br /><br />

      6. for moving items in "center bottom" of box the properties of outer box
      should be "justify-content: center" and inner box should be "align-self:
      flex-end"
      <br /><br />

      7. for moving items in "right top" of box the properties of outer box
      should be "justify-content: flex-end" and inner box should be "align-self:
      flex-start"
      <br /><br />

      8. for moving items in "right center" of box the properties of outer box
      should be "justify-content: flex-end" and inner box should be "align-self:
      center"
      <br /><br />

      9. for moving items in "right bottom" of box the properties of outer box
      should be "justify-content: flex-end" and inner box should be "align-self:
      flex-end"
    </p>
    </div>
  )
}

export default Main