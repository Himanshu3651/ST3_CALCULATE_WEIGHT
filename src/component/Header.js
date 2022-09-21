import { React, useState } from "react";
function Header() {
  const [w, setW] = useState(null);
  const [v, setV] = useState();

  const changeHandler = (event) => {
    setV(event.target.value);
  };

  const clickHandler = () => {
    setW(v);
  };
  return (
    <div className="bg">
      <div>
        <h1 className="head1">Calculate Weight</h1>
      </div>
      <div className="parent">
        <label className="inputtextsize" for="weight">
          ENTER WEIGHT:
        </label>
        <input className="inputsize" onChange={changeHandler} type="number" />
        <button className="btnsize" onClick={clickHandler}>
          ClickMe
        </button>
      </div>
      <div>
        <div className="parent">
          <div id="div1">
            <img
              className="imag"
              src=" https://tse2.mm.bing.net/th?id=OIP.ocJPq99TwSK_biZZbXwVAQD6D6&pid=Api&P=0"
            ></img>
            <p className="planettext"> SUN: {w * 27.01}</p>
            <div className="middle">
              <div className="texth">Gravity on SUN 27.01</div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div id="div1">
            <img
              className="imag"
              src="https://tse4.mm.bing.net/th?id=OIP.vOEtfnjhLGC52ItLsXHR5QHaHa&pid=Api&P=0"
            ></img>
            <p className="planettext">Earth: {w}</p>
            <div className="middle">
              <div className="texth">Gravity on EARTH 9.8</div>
            </div>
          </div>
          <div id="div1">
            <img
              className="imag"
              src="https://tse3.mm.bing.net/th?id=OIP.cve22oCrO3_NPfg6X-eG2gHaGv&pid=Api&P=0"
            ></img>
            <p className="planettext">Moon: {w * 0.166}</p>
            <div className="middle">
              <div className="texth">Gravity on MOON 0.166</div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div id="div1">
            <img
              className="imag"
              src="https://tse4.mm.bing.net/th?id=OIP.iDPDf-nZ0rjbNs2p4qesIQHaHb&pid=Api&P=0"
            ></img>
            <p className="planettext">Mercury: {w * 0.38}</p>
            <div className="middle">
              <div className="texth">Gravity on MERCURY 0.38</div>
            </div>
          </div>
          <div id="div1">
            <img
              className="imag"
              src="https://tse4.mm.bing.net/th?id=OIP.ntsBhMyHn1-sWc022WdxCQHaHa&pid=Api&P=0"
            ></img>
            <p className="planettext"> Venus: {w * 0.91}</p>
            <div className="middle">
              <div className="texth">Gravity on VENUS 0.91</div>
            </div>
          </div>

          <div id="div1">
            <img
              className="imag"
              src="https://tse3.mm.bing.net/th?id=OIP.ZahdYtqw9ZFMwBETtb5RkwHaHx&pid=Api&P=0"
            ></img>
            <p className="planettext">Mars: {w * 0.38}</p>
            <div className="middle">
              <div className="texth">Gravity on MARS 0.38</div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div id="div1">
            <img
              className="imag"
              src="https://tse4.mm.bing.net/th?id=OIP.CuzSA61PdqEmcksbMH7m9wHaG5&pid=Api&P=0"
            ></img>
            <p className="planettext">Jupiter: {w * 2.34}</p>
            <div className="middle">
              <div className="texth">Gravity on JUPITER 2.34</div>
            </div>
          </div>
          <div id="div1">
            <img
              className="imag"
              src=" https://tse3.mm.bing.net/th?id=OIP.VlubztpXBOyc4x6mTgKlJgHaC6&pid=Api&P=0"
            ></img>
            <p className="planettext">Saturn: {w * 1.06}</p>

            <div className="middle">
              <div className="texth">Gravity on SATURN 1.06</div>
            </div>
          </div>

          <div id="div1">
            <img
              className="imag"
              src="https://tse3.mm.bing.net/th?id=OIP.AsoTdiuor2fKJj7e2CwUkwHaHa&pid=Api&P=0"
            ></img>
            <p className="planettext"> Uranus: {w * 0.92}</p>
            <div className="middle">
              <div className="texth">Gravity on URANUS 0.92</div>
            </div>
          </div>
          <div id="div1">
            <img
              className="imag"
              src="https://tse3.mm.bing.net/th?id=OIP.As7ujwIHBbbdPPkLr8YCfgHaHa&pid=Api&P=0"
            ></img>
            <p className="planettext">Neptune: {w * 1.19}</p>
            <div className="middle">
              <div className="texth">Gravity on NEPTUNE 1.19</div>
            </div>
          </div>
        </div>
        <div className="parent">
          <div id="div1">
            <img
              className="imag"
              src="https://tse4.mm.bing.net/th?id=OIP.N6pvswOUEYWpi1UiiAVtsgHaIN&pid=Api&P=0"
            ></img>
            <p className="planettext"> Pluto: {w * 0.06}</p>
            <div className="middle">
              <div className="texth">Gravity on PLUTO 0.06</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
