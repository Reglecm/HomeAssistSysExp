$(document).ready(function () {
  GetStatus();
  fillObjectList();
  // const t = setInterval(fillObjectList, 5000);

  $("#myTab a").on("click", function (e) {
    e.preventDefault();
    $(this).tab("show");
  });

  $("#HaStatus").on("click", () => {
    GetStatus();
  });

  $("#iLogo").on("click", () => {
    LightToggle();
  });

  $("#LightOn").on("click", () => {
    LightOn();
  });

  $("#LampId").on("click", () => {
    GetLampId();
  });
});

const fillObjectList = async () => {
  let objList = {};
  $("#objectsList").empty();
  const Objects = await GetAllObjects();
  // Automation(Objects);
  $.each(Objects, function (k, object) {
    const objName = object.attributes.friendly_name;
    let properties = object.state;

    if (properties) {
      objList[k] = {
        name: objName,
        properties: properties,
      };
    }

    let dataPills = `: <span class="badge badge-pill badge-dark">${properties}</span>`;

    if (tryParseJSON(properties)) {
      properties = tryParseJSON(properties);
      dataPills = "";
      $.each(properties, function (k, v) {
        if (typeof v == "object") {
          v = Object.values(v)[0];
        }
        if (k == "at") {
          k = "le";
          const r = v.slice(19, v.length - 6);
          v = new Date(v.replace(r, "")).toLocaleString();
        }
        dataPills += `<span class="badge badge-pill badge-dark">${k} : <span class="badge badge-pill badge-light">${v}</span></span>, `;
      });
    }
    $("#objectsList").append(
      `<li class="list-group-item ${k}">${objName} ${dataPills}<div class="statusColor mt-1 float-right"></div></li>`
    );
    $(`#objectsList .${k} .statusColor`).css(
      "background-color",
      properties ? "green" : "red"
    );
  });
  return objList;
};

function tryParseJSON(jsonString) {
  try {
    var o = JSON.parse(jsonString);
    if (o && typeof o === "object") {
      return o;
    }
  } catch (e) {}
  return false;
}

const Automation = (Objects) => {
  $.each(Objects, function (k, object) {
    if (object.attributes.friendly_name == "AC_Sensor") {
      let data = JSON.parse(object.state);
      let temp = data.Temperature.temp;

      switch (true) {
        case temp > 25:
          //openfan
          break;

        case temp > 45:
          //notif danger
          break;

        case temp < 25:
          //closeFan
          break;

        default:
          break;
      }
    }
  });
};
