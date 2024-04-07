import "../css/flexAdd-jBTW_Sba.css";
const c = (n) => new Promise((o, s) => {
  const t = n.request.componentId;
  fetch("/nifi-api/processors/" + t + "/config/verification-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) }).then((e) => e.json()).then((e) => o(e)).catch((e) => s(e));
}), p = (n) => new Promise((o, s) => {
  const t = n.request.componentId, e = n.request.requestId;
  fetch("/nifi-api/processors/" + t + "/config/verification-requests/" + e, { method: "GET", headers: { "Content-Type": "application/json" } }).then((i) => i.json()).then((i) => o(i)).catch((i) => s(i));
}), a = (n) => new Promise((o, s) => {
  const t = n.request.componentId, e = n.request.requestId;
  fetch("/nifi-api/controller-services/" + t + "/config/verification-requests/" + e, { method: "GET", headers: { "Content-Type": "application/json" } }).then((i) => i.json()).then((i) => o(i)).catch((i) => s(i));
}), h = (n, o) => new Promise((s, t) => {
  const e = n.value;
  fetch("/nifi-api/processors/" + e + "/descriptors?propertyName=" + o.propertyName + "&sensitive=" + o.sensitive, { method: "GET", headers: { "Content-Type": "application/json" } }).then((i) => i.json()).then((i) => s(i)).catch((i) => t(i));
}), d = (n) => new Promise((o, s) => {
  const t = n.component.id;
  fetch("/nifi-api/processors/" + t, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) }).then((e) => e.json()).then((e) => o(e)).catch((e) => s(e));
}), f = (n) => new Promise((o) => {
  fetch(`/nifi-api/flow/process-groups/${n}/controller-services?uiOnly=true`).then((s) => s.json()).then((s) => {
    o(s);
  });
}), l = (n, o) => new Promise((s) => {
  const t = n.value;
  fetch("/nifi-api/controller-services/" + t + "/descriptors?propertyName=" + o.propertyName + "&sensitive=" + o.sensitive).then((e) => e.json()).then((e) => {
    s(e);
  });
}), m = (n, o) => new Promise((s) => {
  fetch(`/nifi-api/processors/${n}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) }).then((t) => t.json()).then((t) => {
    s(t);
  });
}), u = (n) => new Promise((o, s) => {
  const t = n.request.componentId;
  fetch("/nifi-api/controller-services/" + t + "/config/verification-requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(n) }).then((e) => e.json()).then((e) => o(e)).catch((e) => s(e));
}), y = (n, o) => new Promise((s, t) => {
  fetch("/nifi-api/controller-services/" + n, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) }).then((e) => e.json()).then((e) => s(e)).catch((e) => t(e));
}), j = (n) => new Promise((o, s) => {
  fetch(`/nifi-api/controller-services/${n.id}?disconnectedNodeAcknowledged=${n.disconnectedNodeAcknowledged}&clientId=${n.clientId}&version=${n.version}`, { method: "Delete", headers: { "Content-Type": "application/json" } }).then((t) => t.json()).then((t) => o(t)).catch((t) => s(t));
}), v = (n, o) => new Promise((s, t) => {
  fetch(`/nifi-api/process-groups/${n}/controller-services`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) }).then((e) => e.json()).then((e) => s(e)).catch((e) => t(e));
});
export {
  l as a,
  h as b,
  f as c,
  y as d,
  u as e,
  a as f,
  d as g,
  c as h,
  p as i,
  j,
  v as k,
  m as l
};
