import React from 'react';
import { AdviceContainer, AdviceWidget, AdviceBg, AdviceImg, AdviceText, AdviceResponsive } from '../styles/AdviceStyles';
import ImageSlider from "../components/ImageSlider";
import UserConsumer from '../hooks/useDatos'
import _ from 'lodash'
import saveResults from '../common/Control'
import '../'

const Advice = () => {

  const [saveResultFinal, setSaveResultFinal] = UserConsumer();

  
  if (_.isEmpty(saveResultFinal)) {
    return "Loading..."
  }
  else{

  
  return (
    <>
    <AdviceContainer>
     
      <AdviceImg>
        <AdviceText>Algunas imágenes de {saveResultFinal[2]}</AdviceText><ImageSlider></ImageSlider>
    </AdviceImg>
    
    
    
     
    </AdviceContainer>
    
    <AdviceResponsive>
    <AdviceWidget>
    <AdviceText>¿Listo para viajar?</AdviceText>
      {<div id="searchWidget"><iframe id="widgetIframe" src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=5&lob=H,FH,F&des=&wbi=333333&olc=000000&whf=4&hfc=FFFFFF&wif=4&ifc=000000&wbc=286078&wbf=4&bfc=FFFFFF&wws=2&sfs=H600FW300F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>}
    </AdviceWidget>
    </AdviceResponsive>
  
      </>
  );
}};

export default Advice;