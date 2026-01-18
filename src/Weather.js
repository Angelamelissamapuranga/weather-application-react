import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="Search"
              placeholder="Enter a city"
              className="searchInput"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Paris</h1>
      <ul>
        <li>Wednesday 07:00 </li>
        <li>Mostly cloudy </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTMzLjg3NiA2Ljc2YTcuOTE4IDcuOTE4IDAgMCAxIDcuMzY0IDcuMzY0IDcuOTE5IDcuOTE5IDAgMCAwIDEuOTM0IDQuNjcgNy45MTggNy45MTggMCAwIDEgMCAxMC40MTMgNy45MTkgNy45MTkgMCAwIDAtMS45MzQgNC42NyA3LjkxOSA3LjkxOSAwIDAgMS03LjM2NCA3LjM2MyA3LjkxOSA3LjkxOSAwIDAgMC00LjY3IDEuOTM0IDcuOTE4IDcuOTE4IDAgMCAxLTEwLjQxMyAwIDcuOTE5IDcuOTE5IDAgMCAwLTQuNjctMS45MzQgNy45MTggNy45MTggMCAwIDEtNy4zNjMtNy4zNjQgNy45MTkgNy45MTkgMCAwIDAtMS45MzQtNC42NyA3LjkxOCA3LjkxOCAwIDAgMSAwLTEwLjQxMiA3LjkxOSA3LjkxOSAwIDAgMCAxLjkzNC00LjY3IDcuOTE4IDcuOTE4IDAgMCAxIDcuMzY0LTcuMzY0IDcuOTE5IDcuOTE5IDAgMCAwIDQuNjctMS45MzQgNy45MTggNy45MTggMCAwIDEgMTAuNDEzIDAgNy45MTkgNy45MTkgMCAwIDAgNC42NyAxLjkzNFoiLz48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImEiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg5Ljk5OTk4IDIxIC0yMSA5Ljk5OTk4IDE5IDE5LjUpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMDE2IiBzdG9wLWNvbG9yPSIjRkZCQjI5Ii8+PHN0b3Agb2Zmc2V0PSIuNTMxIiBzdG9wLWNvbG9yPSIjRkNCMjI0Ii8+PHN0b3Agb2Zmc2V0PSIuOTkiIHN0b3AtY29sb3I9IiNFNDcxMDAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=" />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>precipitation : 15%</li>
            <li>humidity: 10%</li>
            <li>wind : 15km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
