const l = "/openmetadata-api", r = (e) => {
  const t = l + "/openMetadata/query", s = new FormData();
  return s.append("suffix", e), new Promise((i, a) => {
    fetch(t, { method: "POST", body: s }).then(async (n) => {
      const o = n.ok, c = await (o ? n.json() : n.text());
      o ? i(c) : a(c);
    }).catch((n) => a(n));
  });
}, u = async () => {
  const e = "v1/services/messagingServices?fields=owner&limit=9999";
  try {
    return await r(e);
  } catch {
    return;
  }
}, m = async (e) => {
  const t = `v1/topics?service=${e}&fields=owner%2Ctags&include=non-deleted`;
  try {
    return await r(t);
  } catch {
    return;
  }
}, f = async (e) => {
  let t = "services/databaseServices?fields=owner&limit=999", s = "server";
  if (e) {
    const a = encodeURI(e.fullyQualifiedName);
    e.columns ? (s = "field", t = `tables/name/${a}?fields=columns,followers,joins,tags,owner,dataModel,tableConstraints,viewDefinition,domain,dataProducts,votes,usageSummary&include=all&limit=9999`) : e.database ? (s = "table", t = `tables?databaseSchema=${a}&include=non-deleted&limit=9999`) : e.service ? (s = "schema", t = `databaseSchemas?fields=owner,usageSummary&database=${a}&include=non-deleted&limit=9999`) : e.connection && (s = "database", t = `databases?service=${a}&fields=owner%2Ctags%2CusageSummary&include=non-deleted&limit=9999`);
  }
  const i = await d(t);
  return i.type = s, i;
}, d = async (e) => {
  const t = `v1/${e}`;
  try {
    return await r(t);
  } catch (s) {
    console.error("getData :: ", s);
    return;
  }
};
export {
  m as a,
  f as b,
  u as g
};
