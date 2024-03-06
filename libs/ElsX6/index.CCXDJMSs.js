var be = Object.defineProperty;
var ve = (c, e, t) => e in c ? be(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var g = (c, e, t) => (ve(c, typeof e != "symbol" ? e + "" : e, t), t);
import "../../css/ElsX6-CijRgl96.css";
import { defineComponent as K, inject as Le, shallowRef as v, computed as x, onMounted as ie, openBlock as w, createElementBlock as M, normalizeClass as de, createBlock as F, unref as s, createCommentVNode as N, createStaticVNode as xe, createElementVNode as D, watch as oe, mergeProps as pe, withCtx as L, Fragment as G, renderList as q, ref as B, toRefs as ae, createVNode as b, toDisplayString as ce, withModifiers as ge, createTextVNode as fe, resolveDynamicComponent as Se, withDirectives as Be, vShow as ye, toRef as ke, normalizeStyle as Ne, provide as j, markRaw as Ge, render as Ve, h as Re } from "vue";
import { g as k, U as Ke, e as Ee, V as ue, d as z, W as Fe, X as Ue, b as S, Y as re, Z as Ae, _ as Ye, o as Qe, s as De, $ as Oe, a0 as Je, a1 as O, q as Me, a2 as Ie, a3 as Pe, a4 as Te, f as we, C as Ze, a5 as ne, a6 as je, O as qe, a7 as ze, a8 as We, a9 as Xe, aa as me, ab as _e, N as $e, M as e1, ac as t1, ad as i1, ae as o1, af as a1, ag as r1, r as s1, ah as l1, ai as n1, aj as c1, ak as A1, a as te, i as d1, al as p1, am as h1 } from "../../chunks/vendor.BakInURX.js";
import { E as R } from "../../chunks/main.DxNtyuEA.js";
import { _ as se } from "../../chunks/main.vue_vue_type_script_setup_true_lang.MLsjHiX8.js";
import { _ as C1 } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as $, E as g1 } from "../../chunks/main.vue_vue_type_script_setup_true_lang.DgBc8WZK.js";
import { _ as f1 } from "../../chunks/view.vue_vue_type_style_index_0_lang.C7El2siQ.js";
const u1 = /* @__PURE__ */ K({
  __name: "node",
  props: {
    node: {},
    graph: {}
  },
  setup(c) {
    const e = c, { node: t } = e, i = Le("GRAPH-CONTEXT"), { graphForm: a, graphShadow: o } = i, r = v(), l = x(() => {
      const C = ((o == null ? void 0 : o.selectedCells.value) || []).map((m) => m.id);
      return !!(C.length > 0 && C.includes((t == null ? void 0 : t.id) || ""));
    }), A = x(() => {
      var m;
      const d = t == null ? void 0 : t.id, C = (m = o == null ? void 0 : o.currentCell.value) == null ? void 0 : m.id;
      return !!(d && C && d == C);
    }), n = x(() => {
      const d = o == null ? void 0 : o.get(t);
      return k(d, "metadata.status.aggregateSnapshot.runStatus") || "";
    }), p = v({});
    return ie(() => {
      var d;
      p.value = { ...o == null ? void 0 : o.get(t), formStatus: a == null ? void 0 : a.getCellStatus(t) }, p.value.node = t, r.value = ((d = p.value.metadata) == null ? void 0 : d.markup) || (o == null ? void 0 : o.defaultNodeMarkup);
    }), (d, C) => (w(), M("div", {
      class: de(["default_node_style", n.value, { "is-selected": l.value, "is-current": A.value }])
    }, [
      r.value ? (w(), F(s(R), {
        key: 0,
        elem: r.value,
        params: p.value
      }, null, 8, ["elem", "params"])) : N("", !0)
    ], 2));
  }
}), w1 = [
  {
    type: "org.apache.nifi.processors.standard.CentralHandleHttpRequest",
    typeName: "集中处理http请求",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "启动HTTP服务器处理请求，将接口注册到Apisix网关",
    descriptionName: "启动HTTP服务器处理请求，将接口注册到Apisix网关",
    restricted: !1,
    tags: [
      "http",
      "request"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.GetMemoryMap",
    typeName: "获取缓存值至属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "获取内存Map中的值，key为Map的键，value为对应的属性名称",
    descriptionName: "获取内存Map中的值，key为Map的键，value为对应的属性名称",
    restricted: !1,
    tags: [
      "get",
      "map"
    ]
  },
  {
    type: "com.hanyun.processors.tdengine.FetchTDengineWindow",
    typeName: "获取TDengine数据",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-tdengine-nar",
      version: "1.0"
    },
    description: "以时间窗口的方式定时拉取TDengine时序数据",
    descriptionName: "以时间窗口的方式定时拉取TDengine时序数据",
    restricted: !1,
    tags: [
      "fetch",
      "database"
    ]
  },
  {
    type: "com.hanyun.processors.tdengine.CountToTDengine",
    typeName: "计算至TDengine",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-tdengine-nar",
      version: "1.0"
    },
    description: "统计flowfile数量，保存到TDEngine",
    descriptionName: "统计flowfile数量，保存到TDEngine",
    restricted: !1,
    tags: [
      "count",
      "database"
    ]
  },
  {
    type: "org.apache.nifi.processors.stateful.analysis.AttributeRollingWindow",
    typeName: "属性滚动窗口",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-stateful-analysis-nar",
      version: "1.21.0"
    },
    description: "Track a Rolling Window based on evaluating an Expression Language expression on each FlowFile and add that value to the processor's state. Each FlowFile will be emitted with the count of FlowFiles and total aggregate value of values processed in the current time window.",
    descriptionName: "基于每个FlowFile上的EL表达式的执行值来跟踪滚动窗口，并将该值添加到处理器的状态中。每个FlowFile会将流程文件统计数量和当前时间窗口中正在处理的总聚合值一起发出。",
    restricted: !1,
    tags: [
      "rolling",
      "data science",
      "Attribute Expression Language",
      "state",
      "window"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.AttributesToCSV",
    typeName: "属性至CSV文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Generates a CSV representation of the input FlowFile Attributes. The resulting CSV can be written to either a newly generated attribute named 'CSVAttributes' or written to the FlowFile as content.  If the attribute value contains a comma, newline or double quote, then the attribute value will be escaped with double quotes.  Any double quote characters in the attribute value are escaped with another double quote.",
    descriptionName: "生成输入流文件属性的CSV表示形式。生成的CSV可以写入新生成的名为“CSVAttributes”的属性，也可以作为内容写入FlowFile。如果属性值包含逗号、换行符或双引号，则属性值将用双引号转义。属性值中的任何双引号字符都将使用另一个双引号进行转义。",
    restricted: !1,
    tags: [
      "flowfile",
      "csv",
      "attributes"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.AttributesToJSON",
    typeName: "属性至json",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Generates a JSON representation of the input FlowFile Attributes. The resulting JSON can be written to either a new Attribute 'JSONAttributes' or written to the FlowFile as content.",
    descriptionName: "生成输入FlowFile属性的JSON表示形式。生成的JSON可以写入新的属性“JSONAttributes”，也可以作为内容写入FlowFile。",
    restricted: !1,
    tags: [
      "flowfile",
      "json",
      "attributes"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.Base64EncodeContent",
    typeName: "Base64编码内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Encodes or decodes content to and from base64",
    descriptionName: "将内容编码成base64字符串或者从base64字符串解码内容。",
    restricted: !1,
    deprecationReason: "EncodeContent supports Base64 and additional encoding schemes",
    tags: [
      "encode",
      "base64"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.CalculateRecordStats",
    typeName: "计算记录统计信息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "A processor that can count the number of items in a record set, as well as provide counts based on user-defined criteria on subsets of the record set.",
    descriptionName: "一种可以对记录集中的项目数量进行统计的处理器，也可以根据用户定义的条件对记录集的子集进行计数。",
    restricted: !1,
    tags: [
      "stats",
      "record",
      "metrics"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.cdc.mysql.processors.CaptureChangeMySQL",
    typeName: "捕获MySQL变更",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cdc-mysql-nar",
      version: "1.21.0"
    },
    description: "Retrieves Change Data Capture (CDC) events from a MySQL database. CDC Events include INSERT, UPDATE, DELETE operations. Events are output as either a group of a specified number of events (the default is 1 so each event becomes its own flow file) or grouped as a full transaction (BEGIN to COMMIT). All events are ordered by the time at which the operation occurred. NOTE: If the processor is stopped before the specified number of events have been written to a flow file, the partial flow file will be output in order to maintain the consistency of the event stream.",
    descriptionName: "从MySQL数据库检索变更数据捕获（CDC）事件。CDC事件包括INSERT、UPDATE和DELETE操作。事件输出为一组指定数量的事件（默认值为1，因此每个事件都成为自己的流文件）或分组为一个完整事务（BEGIN到COMMIT）。所有事件都按操作发生的时间排序。注意：如果在将指定数量的事件写入流文件之前停止处理器，则会输出部分流文件，以保持事件流的一致性。",
    restricted: !1,
    tags: [
      "cdc",
      "jdbc",
      "mysql",
      "event",
      "transaction",
      "sql"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.cdc.postgresql.processors.CaptureChangePostgreSQL",
    typeName: "postgresql变更数据捕获",
    bundle: {
      group: "org.hanyun",
      artifact: "nifi-pgcdc-nar",
      version: "1.0"
    },
    description: "Retrieves Change Data Capture (CDC) events from a PostgreSQL database. Works for PostgreSQL version 10+. Events include INSERT, UPDATE, and DELETE operations and are output as individual flow files ordered by the time at which the operation occurred. This processor uses Replication Connection to stream data. By default, an existing Logical Replication Slot with the specified name will be used or, if none exists, a new one will be created. In the case of an existing slot, make sure that pgoutput is the output plugin. This processor also uses SQL Connection to query system views. In addition, a Publication in PostgreSQL database should already exist.",
    descriptionName: "从PostgreSQL数据库中检索变更数据捕获（Change Data Capture，CDC）事件。适用于PostgreSQL 10+版本。事件包括INSERT、UPDATE和DELETE操作，并按操作发生的时间顺序输出为单独的流文件。该处理器使用复制连接来流式传输数据。默认情况下，将使用指定名称的现有逻辑复制槽，如果不存在，则将创建一个新的复制槽。在存在槽的情况下，请确保pgoutput是输出插件。此处理器还使用SQL连接查询系统视图。另外，PostgreSQL数据库中应该已经存在一个发布（Publication）。",
    restricted: !1,
    tags: [
      "cdc",
      "postgresql",
      "jdbc",
      "sql"
    ]
  },
  {
    type: "org.apache.nifi.processors.cybersecurity.CompareFuzzyHash",
    typeName: "对比模糊哈希值",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cybersecurity-nar",
      version: "1.21.0"
    },
    description: "Compares an attribute containing a Fuzzy Hash against a file containing a list of fuzzy hashes, appending an attribute to the FlowFile in case of a successful match.",
    descriptionName: "将包含模糊哈希的属性与包含模糊哈希列表的文件进行比较，如果匹配成功，则将属性附加到FlowFile。",
    restricted: !1,
    tags: [
      "fuzzy-hashing",
      "hashing",
      "cyber-security"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.CompressContent",
    typeName: "压缩内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Compresses or decompresses the contents of FlowFiles using a user-specified compression algorithm and updates the mime.type attribute as appropriate. This processor operates in a very memory efficient way so very large objects well beyond the heap size are generally fine to process",
    descriptionName: "使用用户指定的压缩算法压缩或解压缩FlowFile的内容，并根据需要更新mime.type属性。这个处理器以一种非常节省内存的方式运行，因此可以对大小远远超过堆内存的大对象进行处理。",
    restricted: !1,
    tags: [
      "compress",
      "snappy framed",
      "brotli",
      "gzip",
      "snappy",
      "bzip2",
      "content",
      "lz4-framed",
      "lzma",
      "snappy-hadoop",
      "zstd",
      "deflate",
      "decompress",
      "xz-lzma2"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.websocket.ConnectWebSocket",
    typeName: "连接WebSocket",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-websocket-processors-nar",
      version: "1.21.0"
    },
    description: "Acts as a WebSocket client endpoint to interact with a remote WebSocket server. FlowFiles are transferred to downstream relationships according to received message types as WebSocket client configured with this processor receives messages from remote WebSocket server. If a new flowfile is passed to the processor, the previous sessions will be closed and any data being sent will be aborted.",
    descriptionName: "充当WebSocket客户端端点，与远程WebSocket服务器进行交互。当配置有该处理器的WebSocket客户端从远程WebSocket服务器接收消息时，流文件根据接收到的消息类型传输到下游关系。如果将新的流程文件传递给处理器，则先前的会话将关闭，并且正在发送的任何数据都将中止。",
    restricted: !1,
    tags: [
      "subscribe",
      "consume",
      "listen",
      "WebSocket"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.amqp.processors.ConsumeAMQP",
    typeName: "消费AMQP协议消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-amqp-nar",
      version: "1.21.0"
    },
    description: "Consumes AMQP Messages from an AMQP Broker using the AMQP 0.9.1 protocol. Each message that is received from the AMQP Broker will be emitted as its own FlowFile to the 'success' relationship.",
    descriptionName: "使用AMQP 0.9.1协议使用来自AMQP Broker的AMQP消息。从AMQP Broker接收到的每条消息都将作为自己的FlowFile发送到“成功”关系。",
    restricted: !1,
    tags: [
      "receive",
      "amqp",
      "rabbit",
      "get",
      "consume",
      "message"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.email.ConsumeIMAP",
    typeName: "消费IMAP协议邮件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-email-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Email Server using IMAP protocol. The raw-bytes of each received email message are written as contents of the FlowFile",
    descriptionName: "使用IMAP协议使用来自电子邮件服务器的邮件。每个收到的电子邮件的原始字节都被写为FlowFile的内容。",
    restricted: !1,
    tags: [
      "Imap",
      "Email",
      "Consume",
      "Ingest",
      "Message",
      "Get",
      "Ingress"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.jms.processors.ConsumeJMS",
    typeName: "消费JMS协议消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-jms-processors-nar",
      version: "1.21.0"
    },
    description: "Consumes JMS Message of type BytesMessage, TextMessage, ObjectMessage, MapMessage or StreamMessage transforming its content to a FlowFile and transitioning it to 'success' relationship. JMS attributes such as headers and properties will be copied as FlowFile attributes. MapMessages will be transformed into JSONs and then into byte arrays. The other types will have their raw contents as byte array transferred into the flowfile.",
    descriptionName: "使用BytesMessage、TextMessage、ObjectMessage、MapMessage或StreamMessage类型的JMS消息，将其内容转换为FlowFile并将其转换为“成功”关系。诸如头和财产之类的JMS属性将被复制为FlowFile属性。MapMessages将被转换为JSON，然后转换为字节数组。其他类型的原始内容将作为字节数组传输到流文件中。",
    restricted: !1,
    tags: [
      "jms",
      "receive",
      "get",
      "consume",
      "message"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_1_0",
    typeName: "消费Kafka 1.0消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-1-0-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Apache Kafka specifically built against the Kafka 1.0 Consumer API. The complementary NiFi processor for sending messages is PublishKafka_1_0.",
    descriptionName: "使用Apache Kafka专门针对Kafka 1.0 Consumer API构建的消息。用于发送消息的补充NiFi处理器是PublishKafka_1_0。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "Consume",
      "1.0",
      "Ingest",
      "Get",
      "Kafka",
      "Ingress",
      "Topic"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_0",
    typeName: "消费Kafka 2.0消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-0-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Apache Kafka specifically built against the Kafka 2.0 Consumer API. The complementary NiFi processor for sending messages is PublishKafka_2_0.",
    descriptionName: "使用Apache Kafka专门针对Kafka 2.0 Consumer API构建的消息。用于发送消息的补充NiFi处理器是PublishKafka_2_0。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "Consume",
      "Ingest",
      "2.0",
      "Get",
      "Kafka",
      "Ingress",
      "Topic"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.ConsumeKafka_2_6",
    typeName: "消费Kafka 2.6消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-6-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Apache Kafka specifically built against the Kafka 2.6 Consumer API. The complementary NiFi processor for sending messages is PublishKafka_2_6.",
    descriptionName: "使用Apache Kafka专门针对Kafka 2.6 Consumer API构建的消息。用于发送消息的补充NiFi处理器是PublishKafka_2_6。",
    restricted: !1,
    tags: [
      "PubSub",
      "Consume",
      "Ingest",
      "Get",
      "Kafka",
      "Ingress",
      "2.6",
      "Topic"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.ConsumeKafkaRecord_1_0",
    typeName: "消费Kafka 1.0记录消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-1-0-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Apache Kafka specifically built against the Kafka 1.0 Consumer API. The complementary NiFi processor for sending messages is PublishKafkaRecord_1_0. Please note that, at this time, the Processor assumes that all records that are retrieved from a given partition have the same schema. If any of the Kafka messages are pulled but cannot be parsed or written with the configured Record Reader or Record Writer, the contents of the message will be written to a separate FlowFile, and that FlowFile will be transferred to the 'parse.failure' relationship. Otherwise, each FlowFile is sent to the 'success' relationship and may contain many individual messages within the single FlowFile. A 'record.count' attribute is added to indicate how many messages are contained in the FlowFile. No two Kafka messages will be placed into the same FlowFile if they have different schemas, or if they have different values for a message header that is included by the <Headers to Add as Attributes> property.",
    descriptionName: "使用Apache Kafka专门针对Kafka 1.0 Consumer API构建的消息。用于发送消息的补充NiFi处理器是PublishKafkaRecord_1_0。请注意，此时，处理器假设从给定分区检索的所有记录都具有相同的模式。如果任何Kafka消息被提取，但无法使用配置的记录读取器或记录写入器进行解析或写入，则消息的内容将被写入一个单独的FlowFile，并且该FlowFile将被传输到“parse.failure”关系。否则，每个FlowFile都被发送到“成功”关系，并且可能在单个FlowFile中包含许多单独的消息。添加了一个“record.count”属性来指示FlowFile中包含的消息数量。如果两个Kafka消息具有不同的模式，或者它们对于<Headers to Add as Attribute所包含的消息头具有不同的值，则不会将它们放入同一个FlowFile中。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "Consume",
      "1.0",
      "Ingest",
      "Get",
      "csv",
      "Kafka",
      "json",
      "Ingress",
      "Record",
      "Topic",
      "avro"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.ConsumeKafkaRecord_2_0",
    typeName: "消费Kafka 2.0记录消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-0-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Apache Kafka specifically built against the Kafka 2.0 Consumer API. The complementary NiFi processor for sending messages is PublishKafkaRecord_2_0. Please note that, at this time, the Processor assumes that all records that are retrieved from a given partition have the same schema. If any of the Kafka messages are pulled but cannot be parsed or written with the configured Record Reader or Record Writer, the contents of the message will be written to a separate FlowFile, and that FlowFile will be transferred to the 'parse.failure' relationship. Otherwise, each FlowFile is sent to the 'success' relationship and may contain many individual messages within the single FlowFile. A 'record.count' attribute is added to indicate how many messages are contained in the FlowFile. No two Kafka messages will be placed into the same FlowFile if they have different schemas, or if they have different values for a message header that is included by the <Headers to Add as Attributes> property.",
    descriptionName: "使用Apache Kafka专门针对Kafka 2.0 Consumer API构建的消息。用于发送消息的补充NiFi处理器是PublishKafkaRecord_2_0。请注意，此时，处理器假设从给定分区检索的所有记录都具有相同的模式。如果任何Kafka消息被提取，但无法使用配置的记录读取器或记录写入器进行解析或写入，则消息的内容将被写入一个单独的FlowFile，并且该FlowFile将被传输到“parse.failure”关系。否则，每个FlowFile都被发送到“成功”关系，并且可能在单个FlowFile中包含许多单独的消息。添加了一个“record.count”属性来指示FlowFile中包含的消息数量。如果两个Kafka消息具有不同的模式，或者它们对于<Headers to Add as Attribute所包含的消息头具有不同的值，则不会将它们放入同一个FlowFile中。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "Consume",
      "Ingest",
      "2.0",
      "Get",
      "csv",
      "Kafka",
      "json",
      "Ingress",
      "Record",
      "Topic",
      "avro"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.ConsumeKafkaRecord_2_6",
    typeName: "消费Kafka 2.6记录消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-6-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Apache Kafka specifically built against the Kafka 2.6 Consumer API. The complementary NiFi processor for sending messages is PublishKafkaRecord_2_6. Please note that, at this time, the Processor assumes that all records that are retrieved from a given partition have the same schema. If any of the Kafka messages are pulled but cannot be parsed or written with the configured Record Reader or Record Writer, the contents of the message will be written to a separate FlowFile, and that FlowFile will be transferred to the 'parse.failure' relationship. Otherwise, each FlowFile is sent to the 'success' relationship and may contain many individual messages within the single FlowFile. A 'record.count' attribute is added to indicate how many messages are contained in the FlowFile. No two Kafka messages will be placed into the same FlowFile if they have different schemas, or if they have different values for a message header that is included by the <Headers to Add as Attributes> property.",
    descriptionName: "使用Apache Kafka专门针对Kafka 2.6 Consumer API构建的消息。用于发送消息的补充NiFi处理器是PublishKafkaRecord_2_6。请注意，此时，处理器假设从给定分区检索的所有记录都具有相同的模式。如果任何Kafka消息被提取，但无法使用配置的记录读取器或记录写入器进行解析或写入，则消息的内容将被写入一个单独的FlowFile，并且该FlowFile将被传输到“parse.failure”关系。否则，每个FlowFile都被发送到“成功”关系，并且可能在单个FlowFile中包含许多单独的消息。添加了一个“record.count”属性来指示FlowFile中包含的消息数量。如果两个Kafka消息具有不同的模式，或者它们对于<Headers to Add as Attribute所包含的消息头具有不同的值，则不会将它们放入同一个FlowFile中。",
    restricted: !1,
    tags: [
      "PubSub",
      "Consume",
      "Ingest",
      "Get",
      "csv",
      "Kafka",
      "json",
      "Ingress",
      "Record",
      "2.6",
      "Topic",
      "avro"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.mqtt.ConsumeMQTT",
    typeName: "消费MQTT协议消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mqtt-nar",
      version: "1.21.0"
    },
    description: "Subscribes to a topic and receives messages from an MQTT broker",
    descriptionName: "订阅主题并从MQTT broker接收消息。",
    restricted: !1,
    tags: [
      "MQTT",
      "subscribe",
      "consume",
      "listen",
      "IOT"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.email.ConsumePOP3",
    typeName: "消费POP3协议邮件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-email-nar",
      version: "1.21.0"
    },
    description: "Consumes messages from Email Server using POP3 protocol. The raw-bytes of each received email message are written as contents of the FlowFile",
    descriptionName: "使用POP3协议使用来自电子邮件服务器的邮件。每个收到的电子邮件的原始字节都被写为FlowFile的内容。",
    restricted: !1,
    tags: [
      "Email",
      "Consume",
      "Ingest",
      "Message",
      "POP3",
      "Get",
      "Ingress"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.windows.event.log.ConsumeWindowsEventLog",
    typeName: "消费Windows事件日志",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-windows-event-log-nar",
      version: "1.21.0"
    },
    description: "Registers a Windows Event Log Subscribe Callback to receive FlowFiles from Events on Windows.  These can be filtered via channel and XPath.",
    descriptionName: "注册Windows事件日志订阅回调，来从Windows系统的事件接收FlowFiles。这些可以通过channel和XPath进行过滤。",
    restricted: !1,
    tags: [
      "event",
      "windows",
      "ingest"
    ],
    classifyName: "消费"
  },
  {
    type: "org.apache.nifi.processors.standard.ControlRate",
    typeName: "控制速率",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Controls the rate at which data is transferred to follow-on processors. If you configure a very small Time Duration, then the accuracy of the throttle gets worse. You can improve this accuracy by decreasing the Yield Duration, at the expense of more Tasks given to the processor.",
    descriptionName: "控制将数据传输到后续处理器的速率。如果配置的“持续时间”非常小，则油门的准确性会变差。您可以通过减少Yield Duration来提高这种准确性，但代价是给处理器更多的Task。",
    restricted: !1,
    tags: [
      "throttle",
      "rate",
      "rate control",
      "throughput"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.avro.ConvertAvroToJSON",
    typeName: "将Avro转换成json格式",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-avro-nar",
      version: "1.21.0"
    },
    description: "Converts a Binary Avro record into a JSON object. This processor provides a direct mapping of an Avro field to a JSON field, such that the resulting JSON will have the same hierarchical structure as the Avro document. Note that the Avro schema information will be lost, as this is not a translation from binary Avro to JSON formatted Avro. The output JSON is encoded the UTF-8 encoding. If an incoming FlowFile contains a stream of multiple Avro records, the resultant FlowFile will contain a JSON Array containing all of the Avro records or a sequence of JSON Objects.  If an incoming FlowFile does not contain any records, an empty JSON object is the output. Empty/Single Avro record FlowFile inputs are optionally wrapped in a container as dictated by 'Wrap Single Record'",
    descriptionName: "将二进制Avro记录转换为JSON对象。该处理器提供了Avro字段到JSON字段的直接映射，这样得到的JSON将具有与Avro文档相同的层次结构。请注意，Avro模式信息将丢失，因为这不是从二进制Avro到JSON格式Avro的转换。输出JSON采用UTF-8编码。如果传入的FlowFile包含多个Avro记录的流，则生成的FlowFile将包含一个JSON数组，该数组包含所有Avro记录或一系列JSON对象。如果传入的FlowFile不包含任何记录，则输出一个空的JSON对象。EmptySingle Avro记录FlowFile输入可选地包装在容器中，如“包装单个记录”所示。",
    restricted: !1,
    tags: [
      "json",
      "convert",
      "avro"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.parquet.ConvertAvroToParquet",
    typeName: "将Avro转换成Parquet格式",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-parquet-nar",
      version: "1.21.0"
    },
    description: "Converts Avro records into Parquet file format. The incoming FlowFile should be a valid avro file. If an incoming FlowFile does not contain any records, an empty parquet file is the output. NOTE: Many Avro datatypes (collections, primitives, and unions of primitives, e.g.) can be converted to parquet, but unions of collections and other complex datatypes may not be able to be converted to Parquet.",
    descriptionName: "将Avro记录转换为Parquet文件格式。传入的FlowFile应该是一个有效的avro文件。如果传入的FlowFile不包含任何记录，则输出一个空的Parquet文件。注意：许多Avro数据类型（例如集合、基元和基元的并集）可以转换为Parquet，但集合的并集和其他复杂数据类型可能无法转换为Parquet。",
    restricted: !1,
    tags: [
      "convert",
      "avro",
      "parquet"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.standard.ConvertCharacterSet",
    typeName: "转换字符集",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Converts a FlowFile's content from one character set to another",
    descriptionName: "将FlowFile的内容从一个字符集转换为另一个字符集中",
    restricted: !1,
    tags: [
      "characterset",
      "character set",
      "text",
      "convert"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.poi.ConvertExcelToCSVProcessor",
    typeName: "将Excel转换成CSV格式",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-poi-nar",
      version: "1.21.0"
    },
    description: "Consumes a Microsoft Excel document and converts each worksheet to csv. Each sheet from the incoming Excel document will generate a new Flowfile that will be output from this processor. Each output Flowfile's contents will be formatted as a csv file where the each row from the excel sheet is output as a newline in the csv file. This processor is currently only capable of processing .xlsx (XSSF 2007 OOXML file format) Excel documents and not older .xls (HSSF '97(-2007) file format) documents. This processor also expects well formatted CSV content and will not escape cell's containing invalid content such as newlines or additional commas.",
    descriptionName: "使用Microsoft Excel文档并将每个工作表转换为csv。传入Excel文档中的每张工作表都将生成一个新的流程文件，该文件将从此处理器输出。每个输出流文件的内容都将格式化为csv文件，其中excel表中的每一行都将作为csv文件中的新行输出。此处理器目前只能处理.xlsx（XSSF 2007 OOXML文件格式）Excel文档，而不能处理较旧的.xls（HSSF’97（-2007）文件格式）文档。此处理器还需要格式良好的CSV内容，并且不会转义包含无效内容（如换行符或附加逗号）的单元格。",
    restricted: !1,
    tags: [
      "excel",
      "csv",
      "poi"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.standard.ConvertJSONToSQL",
    typeName: "将json转换成sql",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Converts a JSON-formatted FlowFile into an UPDATE, INSERT, or DELETE SQL statement. The incoming FlowFile is expected to be "flat" JSON message, meaning that it consists of a single JSON element and each field maps to a simple type. If a field maps to a JSON object, that JSON object will be interpreted as Text. If the input is an array of JSON elements, each element in the array is output as a separate FlowFile to the 'sql' relationship. Upon successful conversion, the original FlowFile is routed to the 'original' relationship and the SQL is routed to the 'sql' relationship.`,
    descriptionName: "将json格式的FlowFile转换为UPDATE、INSERT或DELETE SQL语句。传入的FlowFile预计是 flat JSON消息，这意味着它由单个JSON元素组成，每个字段映射到一个简单的类型。如果一个字段映射到一个JSON对象，那么这个JSON对象将被解释为Text。如果输入是JSON元素的数组，则数组中的每个元素作为单独的FlowFile输出到'sql'关系。转换成功后，原始FlowFile被路由到“原始”关系，SQL被路由到“sql”关系。",
    restricted: !1,
    tags: [
      "database",
      "rdbms",
      "flat",
      "json",
      "insert",
      "update",
      "relational",
      "delete",
      "sql"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.standard.ConvertRecord",
    typeName: "转换记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Converts records from one data format to another using configured Record Reader and Record Write Controller Services. The Reader and Writer must be configured with "matching" schemas. By this, we mean the schemas must have the same field names. The types of the fields do not have to be the same if a field value can be coerced from one type to another. For instance, if the input schema has a field named "balance" of type double, the output schema can have a field named "balance" with a type of string, double, or float. If any field is present in the input that is not present in the output, the field will be left out of the output. If any field is specified in the output schema but is not present in the input data/schema, then the field will not be present in the output or will have a null value, depending on the writer.',
    descriptionName: "使用配置的记录读取器和记录写入控制器服务将记录从一种数据格式转换为另一种。Reader和Writer必须配置匹配的schema。这样，我们的意思是模式必须具有相同的字段名。如果字段值可以从一种类型强制转换为另一种类型，则字段的类型不必相同。例如，如果输入模式有一个名为balance的double类型字段，那么输出模式可以有一个名为balance的字符串、double或float类型字段。如果输入中存在输出中不存在的任何字段，则该字段将被排除在输出之外。如果在输出模式中指定了任何字段，但没有出现在输入数据/模式中，则该字段将不会出现在输出中，或者将具有空值，具体取决于编写器。",
    restricted: !1,
    tags: [
      "schema",
      "log",
      "record",
      "csv",
      "freeform",
      "json",
      "convert",
      "text",
      "logs",
      "generic",
      "avro"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.standard.CountText",
    typeName: "文本计数",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Counts various metrics on incoming text. The requested results will be recorded as attributes. The resulting flowfile will not have its content modified.",
    descriptionName: "对传入文本的各种指标进行计数。请求的结果将被记录为属性。生成的流文件的内容不会被修改。",
    restricted: !1,
    tags: [
      "character",
      "line",
      "count",
      "text",
      "word"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.PutMemoryMap",
    typeName: "缓存属性值",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "将属性的值放入到内存Map中，key为Map的键，value为对应的属性名称",
    descriptionName: "将属性的值放入到内存Map中，key为Map的键，value为对应的属性名称",
    restricted: !1,
    tags: [
      "put",
      "map"
    ]
  },
  {
    type: "org.apache.nifi.processors.hadoop.CreateHadoopSequenceFile",
    typeName: "创建Hadoop序列文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Creates Hadoop Sequence Files from incoming flow files",
    descriptionName: "从传入的流程文件创建Hadoop序列文件",
    restricted: !1,
    tags: [
      "sequencefile",
      "sequence file",
      "create",
      "hadoop"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.CryptographicHashAttribute",
    typeName: "属性hash",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Calculates a hash value for each of the specified attributes using the given algorithm and writes it to an output attribute. Please refer to https://csrc.nist.gov/Projects/Hash-Functions/NIST-Policy-on-Hash-Functions for help to decide which algorithm to use. ",
    descriptionName: "使用给定算法计算每个指定属性的散列值，并将其写入输出属性。请参考https://csrc.nist.gov/Projects/Hash-Functions/NIST-Policy-on-Hash-Functions以帮助决定使用哪种算法。",
    restricted: !1,
    deprecationReason: "UpdateAttribute can be configured using the hash Expression Language function to digest one or more attributes",
    tags: [
      "keccak",
      "cryptography",
      "attributes",
      "blake2",
      "sha",
      "hash",
      "md5"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.CryptographicHashContent",
    typeName: "内容hash",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Calculates a cryptographic hash value for the flowfile content using the given algorithm and writes it to an output attribute. Please refer to https://csrc.nist.gov/Projects/Hash-Functions/NIST-Policy-on-Hash-Functions for help to decide which algorithm to use.",
    descriptionName: "使用给定的算法计算流文件内容的加密散列值，并将其写入输出属性。请参考https://csrc.nist.gov/Projects/Hash-Functions/NIST-Policy-on-Hash-Functions以帮助决定使用哪种算法。",
    restricted: !1,
    tags: [
      "cryptography",
      "blake2",
      "sha",
      "content",
      "hash",
      "md5"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.DebugFlow",
    typeName: "调试流程",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "The DebugFlow processor aids testing and debugging the FlowFile framework by allowing various responses to be explicitly triggered in response to the receipt of a FlowFile or a timer event without a FlowFile if using timer or cron based scheduling.  It can force responses needed to exercise or test various failure modes that can occur when a processor runs.",
    descriptionName: "DebugFlow处理器帮助测试和调试FlowFile框架，允许在接收FlowFile或没有FlowFile的定时器事件时显式触发各种响应，如果使用定时器或基于cron的调度。它可以强制执行或测试处理器运行时可能出现的各种故障模式所需的响应。",
    restricted: !1,
    tags: [
      "FlowFile",
      "debug",
      "test",
      "utility",
      "processor",
      "flow"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.cipher.DecryptContent",
    typeName: "解密内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cipher-nar",
      version: "1.21.0"
    },
    description: "Decrypt content encrypted with AES and encoded according conventions added in NiFi 0.5.0 for the EncryptContent Processor. The Processor reads the first 256 bytes to determine the presence of a cryptographic salt based on finding the 'NiFiSALT' delimiter. The salt is not present for content encrypted with a raw hexadecimal key. The Processor determines the presence of the initialization vector based on finding the 'NiFiIV' delimiter.The salt format indicates the Key Derivation Function that the Processor uses to generate a secret key based on a configured password. The Processor derives keys with a size of 128 bits according to the conventions implemented in NiFi 0.5.0.",
    descriptionName: "解密使用AES加密的内容，并根据NiFi 0.5.0中为EncryptContent Processor添加的约定进行编码。处理器读取前256字节，根据查找'NiFiSALT'分隔符来确定是否存在加密盐。使用原始十六进制密钥加密的内容不存在盐。处理器根据查找“NiFiIV”分隔符来确定初始化向量的存在。salt格式表示密钥派生函数(Key Derivation Function)，处理器使用该函数根据配置的密码生成密钥。处理器根据NiFi 0.5.0中实现的约定派生128位大小的密钥。",
    restricted: !1,
    tags: [
      "cryptography",
      "decipher",
      "decrypt",
      "Argon2",
      "scrypt",
      "AES",
      "bcrypt",
      "PBKDF2"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.cipher.DecryptContentCompatibility",
    typeName: "以兼容模式解密内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cipher-nar",
      version: "1.21.0"
    },
    description: "Decrypt content using password-based encryption schemes with legacy algorithms supporting historical compatibility modes.",
    descriptionName: "使用基于密码的加密方案和支持历史兼容模式的遗留算法解密内容。",
    restricted: !1,
    tags: [
      "PKCS5",
      "Jasypt",
      "PBES1",
      "cryptography",
      "decipher",
      "decrypt",
      "OpenSSL"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.pgp.DecryptContentPGP",
    typeName: "解密OpenGPG内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-pgp-nar",
      version: "1.21.0"
    },
    description: "Decrypt contents of OpenPGP messages. Using the Packaged Decryption Strategy preserves OpenPGP encoding to support subsequent signature verification.",
    descriptionName: "解密OpenPGP消息的内容。使用打包解密策略保留OpenPGP编码以支持后续签名验证。",
    restricted: !1,
    tags: [
      "OpenPGP",
      "PGP",
      "RFC 4880",
      "Encryption",
      "GPG"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.DeduplicateRecord",
    typeName: "删除重复记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This processor attempts to deduplicate a record set in memory using either a hashset or a bloom filter. It operates on a per-file basis rather than across an entire data set that spans multiple files.",
    descriptionName: "此处理器尝试使用哈希集或布隆过滤器在内存中删除重复记录集。它以每个文件为基础进行操作，而不是跨多个文件的整个数据集",
    restricted: !1,
    tags: [
      "dedupe",
      "change",
      "replace",
      "update",
      "distinct",
      "dupe",
      "duplicate",
      "filter",
      "modify",
      "record",
      "unique",
      "text",
      "hash"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.DeleteAzureBlobStorage",
    typeName: "删除Azure Blob存储",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Deletes the provided blob from Azure Storage",
    descriptionName: "从Azure存储中删除提供的blob",
    restricted: !1,
    deprecationReason: "Processor depends on legacy Microsoft Azure SDK",
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.DeleteAzureBlobStorage_v12",
    typeName: "删除Azure Blob存储, v12版本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Deletes the specified blob from Azure Blob Storage. The processor uses Azure Blob Storage client library v12.",
    descriptionName: "从Azure blob Storage中删除指定的blob。处理器使用Azure Blob Storage客户端库v12。",
    restricted: !1,
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.DeleteAzureDataLakeStorage",
    typeName: "删除Azure数据湖存储",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Deletes the provided file from Azure Data Lake Storage",
    descriptionName: "从Azure数据湖存储中删除提供的文件",
    restricted: !1,
    tags: [
      "cloud",
      "datalake",
      "storage",
      "microsoft",
      "adlsgen2",
      "azure"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.DeleteByQueryElasticsearch",
    typeName: "使用查询从Elasticsearch删除",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: "Delete from an Elasticsearch index using a query. The query can be loaded from a flowfile body or from the Query parameter.",
    descriptionName: "使用查询从Elasticsearch索引中删除。可以从流文件主体或query参数加载查询。",
    restricted: !1,
    tags: [
      "elasticsearch",
      "query",
      "elastic",
      "elasticsearch7",
      "elasticsearch8",
      "elasticsearch5",
      "elasticsearch6",
      "delete"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.aws.dynamodb.DeleteDynamoDB",
    typeName: "删除DynamoDB数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: "Deletes a document from DynamoDB based on hash and range key. The key can be string or number. The request requires all the primary keys for the operation (hash or hash and range key)",
    descriptionName: "基于散列和范围键从DynamoDB中删除文档。键可以是字符串或数字。请求需要操作的所有主键(散列或散列和范围键)",
    restricted: !1,
    tags: [
      "Delete",
      "DynamoDB",
      "Remove",
      "Amazon",
      "AWS"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.mongodb.gridfs.DeleteGridFS",
    typeName: "删除GridFS文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "Deletes a file from GridFS using a file name or a query.",
    descriptionName: "使用文件名或查询从GridFS中删除文件。",
    restricted: !1,
    tags: [
      "gridfs",
      "delete",
      "mongodb"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.hbase.DeleteHBaseCells",
    typeName: "删除HBase Cell",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "This processor allows the user to delete individual HBase cells by specifying one or more lines in the flowfile content that are a sequence composed of row ID, column family, column qualifier and associated visibility labels if visibility labels are enabled and in use. A user-defined separator is used to separate each of these pieces of data on each line, with :::: being the default separator.",
    descriptionName: "该处理器允许用户通过在flowfile内容中指定一行或多行来删除单个HBase单元格，这些行是由行ID、列族、列限定符和相关的可见性标签(如果可见性标签已启用并在使用)组成的序列。用户定义的分隔符用于分隔每行上的这些数据片段，::::是默认的分隔符。",
    restricted: !1,
    tags: [
      "cells",
      "visibility",
      "cell",
      "delete",
      "hbase"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.hbase.DeleteHBaseRow",
    typeName: "删除HBase Row",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "Delete HBase records individually or in batches. The input can be a single row ID in the flowfile content, one ID per line, row IDs separated by a configurable separator character (default is a comma). ",
    descriptionName: "单个或批量删除HBase记录。输入可以是流文件内容中的单行ID，每行一个ID，行ID之间用可配置的分隔符分隔(默认为逗号)。",
    restricted: !1,
    tags: [
      "delete",
      "hbase"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.hadoop.DeleteHDFS",
    typeName: "删除HDFS文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Deletes one or more files or directories from HDFS. The path can be provided as an attribute from an incoming FlowFile, or a statically set path that is periodically removed. If this processor has an incoming connection, itwill ignore running on a periodic basis and instead rely on incoming FlowFiles to trigger a delete. Note that you may use a wildcard character to match multiple files or directories. If there are no incoming connections no flowfiles will be transfered to any output relationships.  If there is an incoming flowfile then provided there are no detected failures it will be transferred to success otherwise it will be sent to false. If knowledge of globbed files deleted is necessary use ListHDFS first to produce a specific list of files to delete. ",
    descriptionName: "删除HDFS中的一个或多个文件或目录。路径可以作为传入FlowFile的属性提供，也可以作为静态设置的路径定期删除。如果此处理器有传入连接，它将忽略周期性运行，而是依赖传入的FlowFiles来触发删除。注意，您可以使用通配符来匹配多个文件或目录。如果没有传入连接，则不会将流文件传输到任何输出关系。如果有传入的流文件，那么在没有检测到失败的情况下，它将被转移到成功，否则将被发送到false。如果需要了解已删除的全局文件，请首先使用ListHDFS生成要删除的特定文件列表。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-distributed-filesystem",
          label: "write distributed filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "HDFS",
      "HCFS",
      "hadoop",
      "delete",
      "remove",
      "filesystem"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.mongodb.DeleteMongo",
    typeName: "删除MongoDB数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "Executes a delete query against a MongoDB collection. The query is provided in the body of the flowfile and the user can select whether it will delete one or many documents that match it.",
    descriptionName: "对MongoDB集合执行delete查询。查询在流文件的主体中提供，用户可以选择是否删除一个或多个与之匹配的文档。",
    restricted: !1,
    tags: [
      "mongo",
      "delete",
      "mongodb"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.rethinkdb.DeleteRethinkDB",
    typeName: "删除RethinkDB数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-rethinkdb-nar",
      version: "1.21.0"
    },
    description: "Processor to remove a JSON document from RethinkDB (https://www.rethinkdb.com/) using the document id.",
    descriptionName: "处理器使用文档id从RethinkDB (https://www.rethinkdb.com/)删除JSON文档。",
    restricted: !1,
    tags: [
      "rethinkdb",
      "delete",
      "remove"
    ],
    classifyName: "删除"
  },
  {
    type: "org.apache.nifi.processors.standard.DetectDuplicate",
    typeName: "检测重复",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Caches a value, computed from FlowFile attributes, for each incoming FlowFile and determines if the cached value has already been seen. If so, routes the FlowFile to 'duplicate' with an attribute named 'original.identifier' that specifies the original FlowFile's "description", which is specified in the <FlowFile Description> property. If the FlowFile is not determined to be a duplicate, the Processor routes the FlowFile to 'non-duplicate'`,
    descriptionName: "为每个传入的FlowFile缓存一个值，从FlowFile属性中计算，并确定缓存的值是否已经被看到。如果是这样，将FlowFile路由到'duplicate'，并添加一个名为'original '的属性。标识符'指定原始FlowFile的描述，它在<FlowFile description >属性中指定。如果FlowFile没有被确定为重复，处理器将FlowFile路由到“非重复”。",
    restricted: !1,
    tags: [
      "dedupe",
      "dupe",
      "duplicate",
      "hash"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.DistributeLoad",
    typeName: "负荷分配",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Distributes FlowFiles to downstream processors based on a Distribution Strategy. If using the Round Robin strategy, the default is to assign each destination a weighting of 1 (evenly distributed). However, optional properties can be added to the change this; adding a property with the name '5' and value '10' means that the relationship with name '5' will be receive 10 FlowFiles in each iteration instead of 1.",
    descriptionName: "根据分发策略将FlowFiles分发到下游处理器。如果使用轮循策略，则默认为每个目的地分配1的权重(均匀分布)。但是，可选属性可以添加到更改this;添加一个名称为“5”，值为“10”的属性意味着与名称为“5”的关系将在每次迭代中接收10个FlowFiles，而不是1个。",
    restricted: !1,
    tags: [
      "route",
      "round robin",
      "load balance",
      "distribute",
      "weighted"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.DuplicateFlowFile",
    typeName: "FlowFile副本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Intended for load testing, this processor will create the configured number of copies of each incoming FlowFile. The original FlowFile as well as all generated copies are sent to the 'success' relationship. In addition, each FlowFile gets an attribute 'copy.index' set to the copy number, where the original FlowFile gets a value of zero, and all copies receive incremented integer values.",
    descriptionName: "用于负载测试，该处理器将创建每个传入FlowFile的配置数量的副本。原始FlowFile以及所有生成的副本被发送到“成功”关系。此外，每个FlowFile获得一个属性“拷贝”。index'设置为拷贝数，其中原始FlowFile的值为零，所有副本接收增量整数值。",
    restricted: !1,
    tags: [
      "test",
      "load",
      "duplicate"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.EncodeContent",
    typeName: "编码内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Encode or decode contents using configurable encoding schemes",
    descriptionName: "使用可配置的编码方案对内容进行编码或解码",
    restricted: !1,
    tags: [
      "encode",
      "base64",
      "hex",
      "decode"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.EncryptContent",
    typeName: "加密内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Encrypts or Decrypts a FlowFile using either symmetric encryption with a raw key or password and randomly generated salt, or asymmetric encryption using a public and secret key.",
    descriptionName: "使用原始密钥或密码和随机生成的盐进行对称加密，或使用公钥和密钥进行非对称加密，加密或解密FlowFile。",
    restricted: !1,
    tags: [
      "Scrypt",
      "password",
      "salt",
      "encryption",
      "Bcrypt",
      "KDF",
      "Argon2",
      "JCE",
      "iv",
      "decryption",
      "PBKDF2"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.pgp.EncryptContentPGP",
    typeName: "使用OpenPGP加密内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-pgp-nar",
      version: "1.21.0"
    },
    description: "Encrypt contents using OpenPGP. The processor reads input and detects OpenPGP messages to avoid unnecessary additional wrapping in Literal Data packets.",
    descriptionName: "使用OpenPGP加密内容。处理器读取输入并检测OpenPGP消息，以避免在文字数据包中进行不必要的额外包装。",
    restricted: !1,
    tags: [
      "OpenPGP",
      "PGP",
      "RFC 4880",
      "Encryption",
      "GPG"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.EnforceOrder",
    typeName: "强制排序",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Enforces expected ordering of FlowFiles that belong to the same data group within a single node.  Although PriorityAttributePrioritizer can be used on a connection to ensure that flow files going through that connection are in priority order, depending on error-handling, branching, and other flow designs, it is possible for FlowFiles to get out-of-order. EnforceOrder can be used to enforce original ordering for those FlowFiles. [IMPORTANT] In order to take effect of EnforceOrder, FirstInFirstOutPrioritizer should be used at EVERY downstream relationship UNTIL the order of FlowFiles physically get FIXED by operation such as MergeContent or being stored to the final destination.",
    descriptionName: "强制在单个节点内对属于同一数据组的FlowFiles进行预期排序。尽管priorityattributepriority可以在连接上使用，以确保通过该连接的流文件是按优先级顺序排列的，这取决于错误处理、分支和其他流设计，但FlowFiles有可能乱序。可用于强制那些FlowFiles的原始排序。[重要]为了使强制执行生效，firstfirstoutpriority应该在每个下游关系中使用，直到FlowFiles的顺序通过操作(如合并内容或被存储到最终目的地)物理固定。",
    restricted: !1,
    tags: [
      "sort",
      "order"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.EvaluateJsonPath",
    typeName: "执行JsonPath查询",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Evaluates one or more JsonPath expressions against the content of a FlowFile. The results of those expressions are assigned to FlowFile Attributes or are written to the content of the FlowFile itself, depending on configuration of the Processor. JsonPaths are entered by adding user-defined properties; the name of the property maps to the Attribute Name into which the result will be placed (if the Destination is flowfile-attribute; otherwise, the property name is ignored). The value of the property must be a valid JsonPath expression. A Return Type of 'auto-detect' will make a determination based off the configured destination. When 'Destination' is set to 'flowfile-attribute,' a return type of 'scalar' will be used. When 'Destination' is set to 'flowfile-content,' a return type of 'JSON' will be used.If the JsonPath evaluates to a JSON array or JSON object and the Return Type is set to 'scalar' the FlowFile will be unmodified and will be routed to failure. A Return Type of JSON can return scalar values if the provided JsonPath evaluates to the specified value and will be routed as a match.If Destination is 'flowfile-content' and the JsonPath does not evaluate to a defined path, the FlowFile will be routed to 'unmatched' without having its contents modified. If Destination is 'flowfile-attribute' and the expression matches nothing, attributes will be created with empty strings as the value unless 'Path Not Found Behaviour' is set to 'skip', and the FlowFile will always be routed to 'matched.'",
    descriptionName: "根据FlowFile的内容计算一个或多个JsonPath表达式。这些表达式的结果被赋值给FlowFile属性或写入FlowFile本身的内容，这取决于处理器的配置。通过添加用户定义的属性来输入JsonPaths;属性的名称映射到将放置结果的属性名称(如果Destination是flowfile-attribute;否则，将忽略属性名)。该属性的值必须是一个有效的JsonPath表达式。返回类型“auto-detect”将根据配置的目的地做出决定。当'Destination'设置为'flowfile-attribute '时，将使用'scalar'返回类型。当'Destination'设置为'flowfile-content '时，将使用'JSON'返回类型。如果JsonPath计算为JSON数组或JSON对象，并且返回类型设置为“标量”，则FlowFile将未被修改，并将路由到失败。如果提供的JsonPath计算为指定的值，那么JSON的返回类型可以返回标量值，并将作为匹配路由。如果Destination是“FlowFile -content”，而JsonPath没有计算到一个定义的路径，FlowFile将被路由到“unmatched”，而不修改其内容。如果Destination是' FlowFile -attribute'并且表达式不匹配，属性将被创建为空字符串作为值，除非'Path Not Found Behaviour'被设置为'skip'，并且FlowFile将总是被路由到'matched '。",
    restricted: !1,
    tags: [
      "JSON",
      "JsonPath",
      "evaluate"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.EvaluateXPath",
    typeName: "执行XPath查询",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Evaluates one or more XPaths against the content of a FlowFile. The results of those XPaths are assigned to FlowFile Attributes or are written to the content of the FlowFile itself, depending on configuration of the Processor. XPaths are entered by adding user-defined properties; the name of the property maps to the Attribute Name into which the result will be placed (if the Destination is flowfile-attribute; otherwise, the property name is ignored). The value of the property must be a valid XPath expression. If the XPath evaluates to more than one node and the Return Type is set to 'nodeset' (either directly, or via 'auto-detect' with a Destination of 'flowfile-content'), the FlowFile will be unmodified and will be routed to failure. If the XPath does not evaluate to a Node, the FlowFile will be routed to 'unmatched' without having its contents modified. If Destination is flowfile-attribute and the expression matches nothing, attributes will be created with empty strings as the value, and the FlowFile will always be routed to 'matched'",
    descriptionName: "根据FlowFile的内容计算一个或多个xpath。根据处理器的配置，这些xpath的结果被分配给FlowFile属性或写入FlowFile本身的内容。通过添加用户定义的属性输入xpath;属性的名称映射到将放置结果的属性名称(如果Destination是flowfile-attribute;否则，将忽略属性名)。该属性的值必须是有效的XPath表达式。如果XPath计算到多个节点，并且返回类型被设置为'nodeset'(直接，或通过'auto-detect'与' FlowFile -content'的目的地)，FlowFile将不会被修改，并将被路由到失败。如果XPath不计算为Node, FlowFile将被路由到'unmatched'而不修改其内容。如果Destination是FlowFile -attribute并且表达式不匹配，属性将以空字符串作为值创建，并且FlowFile将始终被路由到'matched'。",
    restricted: !1,
    tags: [
      "XPath",
      "XML",
      "evaluate"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.EvaluateXQuery",
    typeName: "执行XQuery查询",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Evaluates one or more XQueries against the content of a FlowFile.  The results of those XQueries are assigned to FlowFile Attributes or are written to the content of the FlowFile itself, depending on configuration of the Processor.  XQueries are entered by adding user-defined properties; the name of the property maps to the Attribute Name into which the result will be placed (if the Destination is 'flowfile-attribute'; otherwise, the property name is ignored).  The value of the property must be a valid XQuery.  If the XQuery returns more than one result, new attributes or FlowFiles (for Destinations of 'flowfile-attribute' or 'flowfile-content' respectively) will be created for each result (attributes will have a '.n' one-up number appended to the specified attribute name).  If any provided XQuery returns a result, the FlowFile(s) will be routed to 'matched'. If no provided XQuery returns a result, the FlowFile will be routed to 'unmatched'.  If the Destination is 'flowfile-attribute' and the XQueries matche nothing, no attributes will be applied to the FlowFile.",
    descriptionName: "针对FlowFile的内容计算一个或多个xquery。这些xquery的结果被分配给FlowFile属性或被写入FlowFile本身的内容，这取决于处理器的配置。通过添加用户定义的属性输入xquery;属性的名称映射到将放置结果的属性名称(如果Destination是'flowfile-attribute';否则，将忽略属性名)。属性的值必须是一个有效的XQuery。如果XQuery返回多个结果，将为每个结果创建新的属性或FlowFiles(分别为'flowfile-attribute'或'flowfile-content'的目的地)(属性将有一个'。(附加到指定属性名后的1个数字)。如果任何提供的XQuery返回一个结果，FlowFile(s)将被路由到'matched'。如果没有提供的XQuery返回结果，FlowFile将被路由到'unmatched'。如果目的地是“FlowFile -attribute”，并且XQueries不匹配任何内容，则不会将任何属性应用于FlowFile。",
    restricted: !1,
    tags: [
      "XPath",
      "XML",
      "XQuery",
      "evaluate"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.groovyx.ExecuteGroovyScript",
    typeName: "执行Groovy脚本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-groovyx-nar",
      version: "1.21.0"
    },
    description: "Experimental Extended Groovy script processor. The script is responsible for handling the incoming flow file (transfer to SUCCESS or remove, e.g.) as well as any flow files created by the script. If the handling is incomplete or incorrect, the session will be rolled back.",
    descriptionName: "实验性扩展的Groovy脚本处理器。脚本负责处理传入的流文件(例如，传输到SUCCESS或删除)以及脚本创建的任何流文件。如果处理不完整或不正确，会话将被回滚。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "groovyx",
      "groovy",
      "restricted",
      "script"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.ExecuteProcess",
    typeName: "执行操作系统命令",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Runs an operating system command specified by the user and writes the output of that command to a FlowFile. If the command is expected to be long-running, the Processor can output the partial data on a specified interval. When this option is used, the output is expected to be in textual format, as it typically does not make sense to split binary data on arbitrary time-based intervals.",
    descriptionName: "运行用户指定的操作系统命令，并将该命令的输出写入FlowFile。如果命令需要长时间运行，那么Processor可以按指定的时间间隔输出部分数据。当使用此选项时，输出应该是文本格式，因为按任意基于时间的间隔分割二进制数据通常没有意义。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "process",
      "external",
      "restricted",
      "invoke",
      "source",
      "command",
      "script"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.script.ExecuteScript",
    typeName: "执行脚本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-scripting-nar",
      version: "1.21.0"
    },
    description: "Experimental - Executes a script given the flow file and a process session.  The script is responsible for handling the incoming flow file (transfer to SUCCESS or remove, e.g.) as well as any flow files created by the script. If the handling is incomplete or incorrect, the session will be rolled back. Experimental: Impact of sustained usage not yet verified.",
    descriptionName: "实验-执行给定流文件和进程会话的脚本。脚本负责处理传入的流文件(例如，传输到SUCCESS或删除)以及脚本创建的任何流文件。如果处理不完整或不正确，会话将被回滚。实验性:持续使用的影响尚未得到验证。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "luaj",
      "python",
      "jython",
      "clojure",
      "js",
      "execute",
      "script",
      "javascript",
      "jruby",
      "ruby",
      "groovy",
      "restricted",
      "lua"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.ExecuteSQL",
    typeName: "执行sql查询,查询结果为Avro格式",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Executes provided SQL select query. Query result will be converted to Avro format. Streaming is used so arbitrarily large result sets are supported. This processor can be scheduled to run on a timer, or cron expression, using the standard scheduling methods, or it can be triggered by an incoming FlowFile. If it is triggered by an incoming FlowFile, then attributes of that FlowFile will be available when evaluating the select query, and the query may use the ? to escape parameters. In this case, the parameters to use must exist as FlowFile attributes with the naming convention sql.args.N.type and sql.args.N.value, where N is a positive integer. The sql.args.N.type is expected to be a number indicating the JDBC Type. The content of the FlowFile is expected to be in UTF-8 format. FlowFile attribute 'executesql.row.count' indicates how many rows were selected.",
    descriptionName: "执行提供的SQL选择查询。查询结果将被转换为Avro格式。使用流，因此支持任意大的结果集。该处理器可以使用标准调度方法在计时器或cron表达式上调度运行，也可以由传入的FlowFile触发。如果它是由传入的FlowFile触发的，那么在评估选择查询时，该FlowFile的属性将可用，并且查询可能使用?转义参数。在这种情况下，要使用的参数必须作为FlowFile属性存在，命名约定为sql.args.N.type和sql.args.N。值，其中N为正整数。Type应该是一个指示JDBC类型的数字。FlowFile的内容预计是UTF-8格式。FlowFile属性'executesql.row '。“Count”表示选择了多少行。",
    restricted: !1,
    tags: [
      "database",
      "select",
      "query",
      "jdbc",
      "sql"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.ExecuteSQLRecord",
    typeName: "执行sql查询",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Executes provided SQL select query. Query result will be converted to the format specified by a Record Writer. Streaming is used so arbitrarily large result sets are supported. This processor can be scheduled to run on a timer, or cron expression, using the standard scheduling methods, or it can be triggered by an incoming FlowFile. If it is triggered by an incoming FlowFile, then attributes of that FlowFile will be available when evaluating the select query, and the query may use the ? to escape parameters. In this case, the parameters to use must exist as FlowFile attributes with the naming convention sql.args.N.type and sql.args.N.value, where N is a positive integer. The sql.args.N.type is expected to be a number indicating the JDBC Type. The content of the FlowFile is expected to be in UTF-8 format. FlowFile attribute 'executesql.row.count' indicates how many rows were selected.",
    descriptionName: "执行提供的SQL选择查询。查询结果将被转换为Record Writer指定的格式。使用流，因此支持任意大的结果集。该处理器可以使用标准调度方法在计时器或cron表达式上调度运行，也可以由传入的FlowFile触发。如果它是由传入的FlowFile触发的，那么在评估选择查询时，该FlowFile的属性将可用，并且查询可能使用?转义参数。在这种情况下，要使用的参数必须作为FlowFile属性存在，命名约定为sql.args.N.type和sql.args.N。值，其中N为正整数。Type应该是一个指示JDBC类型的数字。FlowFile的内容预计是UTF-8格式。FlowFile属性'executesql.row '。“Count”表示选择了多少行。",
    restricted: !1,
    tags: [
      "database",
      "select",
      "query",
      "record",
      "jdbc",
      "sql"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.stateless.ExecuteStateless",
    typeName: "执行无状态Nifi数据流",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-stateless-processor-nar",
      version: "1.21.0"
    },
    description: "Runs the configured dataflow using the Stateless NiFi engine. Please see documentation in order to understand the differences between the traditional NiFi runtime engine and the Stateless NiFi engine. If the Processor is configured with an incoming connection, the incoming FlowFiles will be queued up into the specified Input Port in the dataflow. Data that is transferred out of the flow via an Output Port will be sent to the 'output' relationship, and an attribute will be added to indicate which Port that FlowFile was transferred to. See Additional Details for more information.",
    descriptionName: "使用无状态NiFi引擎运行配置的数据流。请参阅文档以了解传统NiFi运行时引擎和无状态NiFi引擎之间的差异。如果处理器配置了传入连接，传入的FlowFiles将在数据流中排队进入指定的输入端口。通过输出端口从流中传输的数据将被发送到“输出”关系，并且将添加一个属性来指示FlowFile被传输到哪个端口。有关更多信息，请参阅附加详细信息。",
    restricted: !0,
    tags: [
      "restricted"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.ExecuteStreamCommand",
    typeName: "在流文件中执行外部命令",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Executes an external command on the contents of a flow file, and creates a new flow file with the results of the command.",
    descriptionName: "对流文件的内容执行外部命令，并使用命令的结果创建一个新的流文件。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "command execution",
      "stream",
      "restricted",
      "execute",
      "command"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.avro.ExtractAvroMetadata",
    typeName: "提取Avro数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-avro-nar",
      version: "1.21.0"
    },
    description: "Extracts metadata from the header of an Avro datafile.",
    descriptionName: "从Avro数据文件的头部提取元数据。",
    restricted: !1,
    tags: [
      "schema",
      "metadata",
      "avro"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.ccda.ExtractCCDAAttributes",
    typeName: "从CDA格式流文件中提取出属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-ccda-nar",
      version: "1.21.0"
    },
    description: "Extracts information from an Consolidated CDA formatted FlowFile and provides individual attributes as FlowFile attributes. The attributes are named as <Parent> <dot> <Key>. If the Parent is repeating, the naming will be <Parent> <underscore> <Parent Index> <dot> <Key>. For example, section.act_07.observation.name=Essential hypertension",
    descriptionName: "从统一CDA格式的FlowFile中提取信息，并提供单个属性作为FlowFile属性。这些属性被命名为<Parent> <dot> <Key>。如果父节点重复，命名将为<父节点> <下划线> <父节点索引> <点> <键>。例如section.act_07.observation.name=原发性高血压",
    restricted: !1,
    deprecationReason: "Parsing XML elements to FlowFile attributes is not recommend and should be replaced with record-oriented handling",
    tags: [
      "CCDA",
      "extract",
      "attributes",
      "healthcare"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.email.ExtractEmailAttachments",
    typeName: "提取邮件附件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-email-nar",
      version: "1.21.0"
    },
    description: "Extract attachments from a mime formatted email file, splitting them into individual flowfiles.",
    descriptionName: "从mime格式的电子邮件文件中提取附件，将它们拆分为单独的流文件。",
    restricted: !1,
    tags: [
      "split",
      "email"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.email.ExtractEmailHeaders",
    typeName: "提取邮件头",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-email-nar",
      version: "1.21.0"
    },
    description: "Using the flowfile content as source of data, extract header from an RFC compliant  email file adding the relevant attributes to the flowfile. This processor does not perform extensive RFC validation but still requires a bare minimum compliance with RFC 2822",
    descriptionName: "使用流文件内容作为数据源，从RFC兼容的电子邮件文件中提取头文件，并将相关属性添加到流文件中。该处理器不执行广泛的RFC验证，但仍然需要最低限度地遵守RFC 2822",
    restricted: !1,
    tags: [
      "split",
      "email"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.standard.ExtractGrok",
    typeName: "执行Grok表达式",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Evaluates one or more Grok Expressions against the content of a FlowFile, adding the results as attributes or replacing the content of the FlowFile with a JSON notation of the matched content",
    descriptionName: "根据FlowFile的内容计算一个或多个Grok表达式，将结果作为属性添加，或者用匹配内容的JSON符号替换FlowFile的内容",
    restricted: !1,
    tags: [
      "delimit",
      "extract",
      "log",
      "grok",
      "text",
      "parse"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.hl7.ExtractHL7Attributes",
    typeName: "从HL7格式流文件中提取出属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hl7-nar",
      version: "1.21.0"
    },
    description: 'Extracts information from an HL7 (Health Level 7) formatted FlowFile and adds the information as FlowFile Attributes. The attributes are named as <Segment Name> <dot> <Field Index>. If the segment is repeating, the naming will be <Segment Name> <underscore> <Segment Index> <dot> <Field Index>. For example, we may have an attribute named "MHS.12" with a value of "2.1" and an attribute named "OBX_11.3" with a value of "93000^CPT4".',
    descriptionName: "从HL7(运行状况级别7)格式化的FlowFile中提取信息，并将该信息添加为FlowFile属性。属性命名为<段名> <点> <字段索引>。如果段是重复的，命名将是<段名> <下划线> <段索引> <点> <字段索引>。例如，我们可能有一个名为 MHS.12的属性，其值为 2.1，而一个名为 OBX_11.3的属性，其值为 93000^CPT4。",
    restricted: !1,
    tags: [
      "HL7",
      "extract",
      "attributes",
      "health level 7",
      "healthcare"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.standard.ExtractText",
    typeName: "正则表达式提取文本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Evaluates one or more Regular Expressions against the content of a FlowFile.  The results of those Regular Expressions are assigned to FlowFile Attributes.  Regular Expressions are entered by adding user-defined properties; the name of the property maps to the Attribute Name into which the result will be placed.  The attributes are generated differently based on the enabling of named capture groups.  If named capture groups are not enabled:  The first capture group, if any found, will be placed into that attribute name.But all capture groups, including the matching string sequence itself will also be provided at that attribute name with an index value provided, with the exception of a capturing group that is optional and does not match - for example, given the attribute name "regex" and expression "abc(def)?(g)" we would add an attribute "regex.1" with a value of "def" if the "def" matched. If the "def" did not match, no attribute named "regex.1" would be added but an attribute named "regex.2" with a value of "g" will be added regardless.If named capture groups are enabled:  Each named capture group, if found will be placed into the attributes name with the name provided.  If enabled the matching string sequence itself will be placed into the attribute name.  If multiple matches are enabled, and index will be applied after the first set of matches. The exception is a capturing group that is optional and does not match  For example, given the attribute name "regex" and expression "abc(?<NAMED>def)?(?<NAMED-TWO>g)"  we would add an attribute "regex.NAMED" with the value of "def" if the "def" matched.  We would   add an attribute "regex.NAMED-TWO" with the value of "g" if the "g" matched regardless.  The value of the property must be a valid Regular Expressions with one or more capturing groups. If named capture groups are enabled, all capture groups must be named.  If they are not, then the  processor configuration will fail validation.  If the Regular Expression matches more than once, only the first match will be used unless the property enabling repeating capture group is set to true. If any provided Regular Expression matches, the FlowFile(s) will be routed to 'matched'. If no provided Regular Expression matches, the FlowFile will be routed to 'unmatched' and no attributes will be applied to the FlowFile.`,
    descriptionName: "根据流文件的内容计算一个或多个正则表达式。这些正则表达式的结果将分配给流文件属性。正则表达式是通过添加用户定义的属性来输入的;属性的名称映射到将放置结果的属性名称。根据命名捕获组的启用情况，属性的生成方式不同。如果未启用命名捕获组：第一个捕获组（如果找到）将放入该属性名称中。但是所有捕获组，包括匹配的字符串序列本身，也将在该属性名称处提供索引值，但可选且不匹配的捕获组除外 - 例如，给定属性名称“regex”和表达式“abc（def）？（g）“如果”def“匹配，我们将添加一个值为”def“的属性”regex.1”。如果“def”不匹配，则不会添加名为“regex.1”的属性，但无论如何都会添加值为“g”的名为“regex.2”的属性。如果启用了命名捕获组：每个命名捕获组（如果找到）都将使用提供的名称放入属性名称中。如果启用，匹配的字符串序列本身将被放入属性名称中。如果启用了多个匹配项，则将在第一组匹配项之后应用索引。例外情况是可选且不匹配的捕获组 例如，给定属性名称“regex”和表达式“abc（？<NAMED>定义）？(?<NAMED-TWO>g）“我们将添加一个属性”正则表达式。NAMED“，如果”def“匹配，则值为”def”。我们将添加一个属性“正则表达式。NAMED-TWO“，如果”g“无论如何都匹配，则值为”g”。该属性的值必须是具有一个或多个捕获组的有效正则表达式。如果启用了命名捕获组，则必须命名所有捕获组。如果不是，则处理器配置将无法通过验证。如果正则表达式匹配多次，则仅使用第一个匹配项，除非启用重复捕获组的属性设置为 true。如果提供的任何正则表达式匹配，则流文件将被路由到“匹配”。如果没有提供的正则表达式匹配，则流文件将被路由到“不匹配”，并且不会将任何属性应用于流文件。",
    restricted: !1,
    tags: [
      "Regular Expression",
      "regex",
      "extract",
      "Text",
      "evaluate"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.email.ExtractTNEFAttachments",
    typeName: "提取TNEF格式邮件附件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-email-nar",
      version: "1.21.0"
    },
    description: "Extract attachments from a mime formatted email file, splitting them into individual flowfiles.",
    descriptionName: "从mime格式的电子邮件文件中提取附件，将它们拆分为单独的流文件。",
    restricted: !1,
    tags: [
      "split",
      "email"
    ],
    classifyName: "提取"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.FetchAzureBlobStorage",
    typeName: "获取Azure Blob数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Retrieves contents of an Azure Storage Blob, writing the contents to the content of the FlowFile",
    descriptionName: "检索Azure存储Blob的内容，将内容写入FlowFile的内容",
    restricted: !1,
    deprecationReason: "Processor depends on legacy Microsoft Azure SDK",
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.FetchAzureBlobStorage_v12",
    typeName: "获取Azure Blob数据, v12版本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Retrieves the specified blob from Azure Blob Storage and writes its content to the content of the FlowFile. The processor uses Azure Blob Storage client library v12.",
    descriptionName: "从Azure blob Storage中检索指定的blob，并将其内容写入FlowFile的内容。处理器使用Azure Blob Storage客户端库v12。",
    restricted: !1,
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.FetchAzureDataLakeStorage",
    typeName: "获取Azure数据湖数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Fetch the provided file from Azure Data Lake Storage",
    descriptionName: "从Azure数据湖存储中获取提供的文件",
    restricted: !1,
    tags: [
      "cloud",
      "datalake",
      "storage",
      "microsoft",
      "adlsgen2",
      "azure"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.box.FetchBoxFile",
    typeName: "获取Box文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-box-nar",
      version: "1.21.0"
    },
    description: "Fetches files from a Box Folder. Designed to be used in tandem with ListBoxFile.",
    descriptionName: "从Box文件夹中获取文件。设计为与ListBoxFile串联使用。",
    restricted: !1,
    tags: [
      "fetch",
      "box",
      "storage"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.FetchDistributedMapCache",
    typeName: "获取分布式KV缓存数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Computes cache key(s) from FlowFile attributes, for each incoming FlowFile, and fetches the value(s) from the Distributed Map Cache associated with each key. If configured without a destination attribute, the incoming FlowFile's content is replaced with the binary data received by the Distributed Map Cache. If there is no value stored under that key then the flow file will be routed to 'not-found'. Note that the processor will always attempt to read the entire cached value into memory before placing it in it's destination. This could be potentially problematic if the cached value is very large.",
    descriptionName: "计算缓存键(s)从FlowFile属性，为每个传入的FlowFile，并从分布式映射缓存与每个键相关联的值(s)。如果配置中没有destination属性，传入的FlowFile的内容将被分布式映射缓存接收到的二进制数据所替换。如果在该键下没有存储值，那么流程文件将被路由到'not-found'。请注意，处理器总是在将整个缓存值放入目标之前尝试将其读入内存。如果缓存的值非常大，这可能会有潜在的问题。",
    restricted: !1,
    tags: [
      "cache",
      "fetch",
      "distributed",
      "map"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.dropbox.FetchDropbox",
    typeName: "获取Dropbox文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-dropbox-processors-nar",
      version: "1.21.0"
    },
    description: "Fetches files from Dropbox. Designed to be used in tandem with ListDropbox.",
    descriptionName: "从Dropbox获取文件。设计用于串联与ListDropbox。",
    restricted: !1,
    tags: [
      "dropbox",
      "fetch",
      "storage"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.FetchElasticsearchHttp",
    typeName: "使用http方式获取Elasticsearch数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-nar",
      version: "1.21.0"
    },
    description: "Retrieves a document from Elasticsearch using the specified connection properties and the identifier of the document to retrieve. Note that the full body of the document will be read into memory before being written to a Flow File for transfer.",
    descriptionName: "使用指定的连接属性和要检索的文档的标识符从Elasticsearch检索文档。请注意，在写入流文件进行传输之前，文档的整个主体将被读入内存。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "read",
      "elasticsearch",
      "fetch",
      "get",
      "http"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.FetchFile",
    typeName: "获取本地磁盘文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Reads the contents of a file from disk and streams it into the contents of an incoming FlowFile. Once this is done, the file is optionally moved elsewhere or deleted to help keep the file system organized.",
    descriptionName: "从磁盘读取文件的内容，并将其流化为传入的FlowFile的内容。完成此操作后，可以选择将文件移到其他地方或删除，以帮助保持文件系统的组织性。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-filesystem",
          label: "write filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to."
      },
      {
        requiredPermission: {
          id: "read-filesystem",
          label: "read filesystem"
        },
        explanation: "Provides operator the ability to read from any file that NiFi has access to."
      }
    ],
    tags: [
      "ingress",
      "input",
      "restricted",
      "get",
      "fetch",
      "files",
      "source",
      "local",
      "filesystem",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.FetchFTP",
    typeName: "获取FTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Fetches the content of a file from a remote FTP server and overwrites the contents of an incoming FlowFile with the content of the remote file.",
    descriptionName: "从远程FTP服务器获取文件的内容，并用远程文件的内容覆盖传入的FlowFile的内容。",
    restricted: !1,
    tags: [
      "input",
      "ftp",
      "get",
      "fetch",
      "retrieve",
      "files",
      "source",
      "remote",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.mongodb.gridfs.FetchGridFS",
    typeName: "获取GridFS文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "Retrieves one or more files from a GridFS bucket by file name or by a user-defined query.",
    descriptionName: "根据文件名或用户定义的查询从GridFS桶中检索一个或多个文件。",
    restricted: !1,
    tags: [
      "mongo",
      "fetch",
      "gridfs"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.hbase.FetchHBaseRow",
    typeName: "获取HBase Row",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "Fetches a row from an HBase table. The Destination property controls whether the cells are added as flow file attributes, or the row is written to the flow file content as JSON. This processor may be used to fetch a fixed row on a interval by specifying the table and row id directly in the processor, or it may be used to dynamically fetch rows by referencing the table and row id from incoming flow files.",
    descriptionName: "从HBase表中获取一行。Destination属性控制是将单元格作为流文件属性添加，还是将行作为JSON写入流文件内容。这个处理器可以通过在处理器中直接指定表和行id来获取固定的行，或者它可以通过从传入的流文件中引用表和行id来动态地获取行。",
    restricted: !1,
    tags: [
      "fetch",
      "get",
      "scan",
      "enrich",
      "hbase"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.hadoop.FetchHDFS",
    typeName: "获取HDFS文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Retrieves a file from HDFS. The content of the incoming FlowFile is replaced by the content of the file in HDFS. The file in HDFS is left intact without any changes being made to it.",
    descriptionName: "从HDFS中检索文件。传入的FlowFile的内容被替换为HDFS中文件的内容。HDFS中的文件保持完整，不做任何更改。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "read-distributed-filesystem",
          label: "read distributed filesystem"
        },
        explanation: "Provides operator the ability to retrieve any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "get",
      "fetch",
      "hcfs",
      "hdfs",
      "hadoop",
      "source",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.parquet.FetchParquet",
    typeName: "获取Parquet文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-parquet-nar",
      version: "1.21.0"
    },
    description: "Reads from a given Parquet file and writes records to the content of the flow file using the selected record writer. The original Parquet file will remain unchanged, and the content of the flow file will be replaced with records of the selected type. This processor can be used with ListHDFS or ListFile to obtain a listing of files to fetch.",
    descriptionName: "从给定的Parquet文件中读取，并使用选定的记录写入器将记录写入流文件的内容。原来的Parquet文件将保持不变，流文件的内容将被选定类型的记录所替换。这个处理器可以与ListHDFS或ListFile一起使用，以获取要获取的文件列表。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "read-distributed-filesystem",
          label: "read distributed filesystem"
        },
        explanation: "Provides operator the ability to retrieve any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "get",
      "fetch",
      "record",
      "HDFS",
      "hadoop",
      "source",
      "parquet",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.FetchSFTP",
    typeName: "获取SFTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Fetches the content of a file from a remote SFTP server and overwrites the contents of an incoming FlowFile with the content of the remote file.",
    descriptionName: "从远程SFTP服务器获取文件的内容，并用远程文件的内容覆盖传入的FlowFile的内容。",
    restricted: !1,
    tags: [
      "input",
      "get",
      "fetch",
      "retrieve",
      "files",
      "sftp",
      "source",
      "remote",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.smb.FetchSmb",
    typeName: "获取Samba共享文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-smb-nar",
      version: "1.21.0"
    },
    description: "Fetches files from a SMB Share. Designed to be used in tandem with ListSmb.",
    descriptionName: "从SMB共享中获取文件。设计用于与ListSmb串联使用。",
    restricted: !1,
    tags: [
      "fetch",
      "smb",
      "files",
      "samba",
      "cifs"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.FlattenJson",
    typeName: "扁平化json",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Provides the user with the ability to take a nested JSON document and flatten it into a simple key/value pair document. The keys are combined at each level with a user-defined separator that defaults to '.'. This Processor also allows to unflatten back the flattened json. It supports four kinds of flatten mode such as normal, keep-arrays, dot notation for MongoDB query and keep-primitive-arrays. Default flatten mode is 'keep-arrays'.",
    descriptionName: "为用户提供获取嵌套JSON文档并将其扁平化为简单的键/值对文档的功能。每个级别的键都使用默认为'.'的用户定义分隔符组合。该处理器还允许将扁平化的json还原。它支持四种扁平化模式，如normal、keep-arrays、MongoDB查询的点表示法和keep-primitive-arrays。默认的平坦模式是'keep-arrays'。",
    restricted: !1,
    tags: [
      "flatten",
      "unflatten",
      "json"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.ForkEnrichment",
    typeName: "fork富集",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Used in conjunction with the JoinEnrichment processor, this processor is responsible for adding the attributes that are necessary for the JoinEnrichment processor to perform its function. Each incoming FlowFile will be cloned. The original FlowFile will have appropriate attributes added and then be transferred to the 'original' relationship. The clone will have appropriate attributes added and then be routed to the 'enrichment' relationship. See the documentation for the JoinEnrichment processor (and especially its Additional Details) for more information on how these Processors work together and how to perform enrichment tasks in NiFi by using these Processors.",
    descriptionName: "该处理器与JoinEnrichment处理器一起使用，负责添加JoinEnrichment处理器执行其功能所必需的属性。每个传入的FlowFile都将被克隆。原始的FlowFile将添加适当的属性，然后转移到“原始”关系中。克隆将添加适当的属性，然后路由到“富集”关系。请参阅JoinEnrichment处理器的文档(特别是它的附加细节)，以获得有关这些处理器如何协同工作以及如何通过使用这些处理器在NiFi中执行浓缩任务的更多信息。",
    restricted: !1,
    tags: [
      "fork",
      "record",
      "enrich",
      "join"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.ForkRecord",
    typeName: "fork记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This processor allows the user to fork a record into multiple records. The user must specify at least one Record Path, as a dynamic property, pointing to a field of type ARRAY containing RECORD objects. The processor accepts two modes: 'split' and 'extract'. In both modes, there is one record generated per element contained in the designated array. In the 'split' mode, each generated record will preserve the same schema as given in the input but the array will contain only one element. In the 'extract' mode, the element of the array must be of record type and will be the generated record. Additionally, in the 'extract' mode, it is possible to specify if each generated record should contain all the fields of the parent records from the root level to the extracted record. This assumes that the fields to add in the record are defined in the schema of the Record Writer controller service. See examples in the additional details documentation of this processor.",
    descriptionName: "该处理器允许用户将一条记录fork为多条记录。用户必须指定至少一个记录路径，作为一个动态属性，指向包含记录对象的数组类型的字段。处理器接受两种模式:` split `和` extract `。在这两种模式下，每个指定数组中的元素都会生成一条记录。在` split `模式下，每个生成的记录将保留与输入中给定的相同模式，但数组只包含一个元素。在` extract `模式下，数组的元素必须是记录类型，并且将是生成的记录。此外，在` extract `模式下，可以指定每个生成的记录是否应该包含父记录从根级到提取记录的所有字段。这假定要添加到记录中的字段是在记录写入器控制器服务的模式中定义的。请参阅此处理器的附加详细文档中的示例。",
    restricted: !1,
    tags: [
      "fork",
      "array",
      "stream",
      "record",
      "event",
      "content"
    ]
  },
  {
    type: "org.apache.nifi.processors.cybersecurity.FuzzyHashContent",
    typeName: "模糊哈希内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cybersecurity-nar",
      version: "1.21.0"
    },
    description: "Calculates a fuzzy/locality-sensitive hash value for the Content of a FlowFile and puts that hash value on the FlowFile as an attribute whose name is determined by the <Hash Attribute Name> property.Note: this processor only offers non-cryptographic hash algorithms. And it should be not be seen as a replacement to the HashContent processor.Note: The underlying library loads the entirety of the streamed content into and performs result evaluations in memory. Accordingly, it is important to consider the anticipated profile of content being evaluated by this processor and the hardware supporting it especially when working against large files.",
    descriptionName: "计算流文件内容的模糊/局部敏感哈希值，并将该哈希值作为一个属性放在流文件上，其名称由< hash attribute name >属性确定。注意:此处理器仅提供非加密散列算法。它不应该被视为HashContent处理器的替代品。注意:底层库将整个流内容加载到内存中并在内存中执行结果评估。因此，很重要的一点是要考虑该处理器评估的预期内容概要和支持它的硬件，特别是在处理大文件时。",
    restricted: !1,
    tags: [
      "fuzzy-hashing",
      "hashing",
      "cyber-security"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.GenerateFlowFile",
    typeName: "创建流文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This processor creates FlowFiles with random data or custom content. GenerateFlowFile is useful for load testing, configuration, and simulation. Also see DuplicateFlowFile for additional load testing.",
    descriptionName: "这个处理器创建包含随机数据或自定义内容的流文件。GenerateFlowFile对于负载测试、配置和模拟非常有用。请参阅DuplicateFlowFile以获取额外的负载测试。",
    restricted: !1,
    tags: [
      "random",
      "test",
      "load",
      "generate"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.GenerateRecord",
    typeName: "创建记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This processor creates FlowFiles with records having random value for the specified fields. GenerateRecord is useful for testing, configuration, and simulation. It uses either user-defined properties to define a record schema or a provided schema and generates the specified number of records using random data for the fields in the schema.",
    descriptionName: "该处理器创建flowfile，其中的记录对指定的字段具有随机值。GenerateRecord可用于测试、配置和模拟。它要么使用用户定义的属性来定义记录模式，要么使用提供的模式，并使用模式中字段的随机数据来生成指定数量的记录。",
    restricted: !1,
    tags: [
      "random",
      "test",
      "fake",
      "generate"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.GenerateTableFetch",
    typeName: "由SQL查询生成流文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Generates SQL select queries that fetch "pages" of rows from a table. The partition size property, along with the table's row count, determine the size and number of pages and generated FlowFiles. In addition, incremental fetching can be achieved by setting Maximum-Value Columns, which causes the processor to track the columns' maximum values, thus only fetching rows whose columns' values exceed the observed maximums. This processor is intended to be run on the Primary Node only.

This processor can accept incoming connections; the behavior of the processor is different whether incoming connections are provided:
  - If no incoming connection(s) are specified, the processor will generate SQL queries on the specified processor schedule. Expression Language is supported for many fields, but no FlowFile attributes are available. However the properties will be evaluated using the Variable Registry.
  - If incoming connection(s) are specified and no FlowFile is available to a processor task, no work will be performed.
  - If incoming connection(s) are specified and a FlowFile is available to a processor task, the FlowFile's attributes may be used in Expression Language for such fields as Table Name and others. However, the Max-Value Columns and Columns to Return fields must be empty or refer to columns that are available in each specified table.`,
    descriptionName: "生成SQL select查询，从表中获取行“页”。分区大小属性以及表的行数决定了页面的大小和数量以及生成的流文件。此外，增量获取可以通过设置最大值列来实现，这使得处理器跟踪列的最大值，从而仅获取列值超过观测最大值的行。此处理器只打算在主节点上运行。该处理器可以接受传入的连接;无论是否提供传入连接，处理器的行为都是不同的:—如果没有指定传入连接，处理器将根据指定的处理器调度生成SQL查询。许多字段支持表达式语言，但没有FlowFile属性可用。但是，属性将使用变量注册表进行计算。-如果指定了传入连接，并且处理器任务没有可用的流文件，则不会执行任何工作。-如果指定了传入连接，并且一个流文件可用于处理器任务，则流文件的属性可以在表达式语言中用于表名等字段。但是，最大值列和返回字段的列必须为空，或者引用每个指定表中可用的列。",
    restricted: !1,
    tags: [
      "database",
      "select",
      "query",
      "fetch",
      "jdbc",
      "generate",
      "sql"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.GeoEnrichIP",
    typeName: "IP地址的经纬度添加到属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-enrich-nar",
      version: "1.21.0"
    },
    description: "Looks up geolocation information for an IP address and adds the geo information to FlowFile attributes. The geo data is provided as a MaxMind database. The attribute that contains the IP address to lookup is provided by the 'IP Address Attribute' property. If the name of the attribute provided is 'X', then the the attributes added by enrichment will take the form X.geo.<fieldName>",
    descriptionName: "查找IP地址的地理位置信息，并将地理位置信息添加到FlowFile属性。geo数据以MaxMind数据库的形式提供。包含要查找的IP地址的属性由` IP address属性`提供。如果提供的属性名是'X'，那么通过浓缩添加的属性将采用X.geo.<fieldName>的形式",
    restricted: !1,
    tags: [
      "geo",
      "ip",
      "enrich",
      "maxmind"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.GeoEnrichIPRecord",
    typeName: "IP地址的经纬度添加到属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-enrich-nar",
      version: "1.21.0"
    },
    description: "Looks up geolocation information for an IP address and adds the geo information to FlowFile attributes. The geo data is provided as a MaxMind database. This version uses the NiFi Record API to allow large scale enrichment of record-oriented data sets. Each field provided by the MaxMind database can be directed to a field of the user's choosing by providing a record path for that field configuration. ",
    descriptionName: "查找IP地址的地理位置信息，并将地理信息添加到FlowFile属性。地理数据作为MaxMind数据库提供。这个版本使用NiFi Record API来允许大规模地丰富面向记录的数据集。通过为字段配置提供记录路径，MaxMind数据库提供的每个字段都可以定向到用户选择的字段。",
    restricted: !1,
    tags: [
      "geo",
      "ip",
      "record",
      "enrich",
      "maxmind"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.geohash.GeohashRecord",
    typeName: "经纬度坐标的哈希值记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-geohash-nar",
      version: "1.21.0"
    },
    description: "A record-based processor that encodes and decodes Geohashes from and to latitude/longitude coordinates.",
    descriptionName: "一种基于记录的处理器，对来自经纬度坐标的geohash进行编码和解码。",
    restricted: !1,
    tags: [
      "geo",
      "geohash",
      "record"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.asana.GetAsanaObject",
    typeName: "获取Asana对象",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-asana-processors-nar",
      version: "1.21.0"
    },
    description: "This processor collects data from Asana",
    descriptionName: "这个处理器从Asana收集数据",
    restricted: !1,
    tags: [
      "source",
      "asana",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.couchbase.GetCouchbaseKey",
    typeName: "获取Couchbase键值",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-couchbase-nar",
      version: "1.21.0"
    },
    description: "Get a document from Couchbase Server via Key/Value access. The ID of the document to fetch may be supplied by setting the <Document Id> property. NOTE: if the Document Id property is not set, the contents of the FlowFile will be read to determine the Document Id, which means that the contents of the entire FlowFile will be buffered in memory.",
    descriptionName: "通过键/值访问从Couchbase服务器获取文档。要获取的文档ID可以通过设置< document ID >属性来提供。注意:如果没有设置文档Id属性，将读取FlowFile的内容来确定文档Id，这意味着整个FlowFile的内容将被缓冲在内存中。",
    restricted: !1,
    tags: [
      "database",
      "couchbase",
      "get",
      "nosql"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.aws.dynamodb.GetDynamoDB",
    typeName: "获取DynamoDB数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: "Retrieves a document from DynamoDB based on hash and range key.  The key can be string or number.For any get request all the primary keys are required (hash or hash and range based on the table keys).A Json Document ('Map') attribute of the DynamoDB item is read into the content of the FlowFile.",
    descriptionName: "基于散列和范围键从DynamoDB检索文档。键可以是字符串或数字。对于任何get请求，都需要所有主键(哈希或基于表键的哈希和范围)。DynamoDB项的Json Document ('Map')属性被读入FlowFile的内容。",
    restricted: !1,
    tags: [
      "Fetch",
      "Get",
      "DynamoDB",
      "Amazon",
      "AWS"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.GetElasticsearch",
    typeName: "获取Elasticsearch数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: "Elasticsearch get processor that uses the official Elastic REST client libraries to fetch a single document from Elasticsearch by _id. Note that the full body of the document will be read into memory before being written to a FlowFile for transfer.",
    descriptionName: "Elasticsearch get处理器，使用官方的Elastic REST客户端库，通过_id从Elasticsearch中获取单个文档。请注意，在写入FlowFile进行传输之前，文档的整个主体将被读入内存。",
    restricted: !1,
    tags: [
      "elasticsearch",
      "record",
      "elasticsearch7",
      "json",
      "elasticsearch8",
      "index",
      "elasticsearch5",
      "elasticsearch6",
      "put"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.GetFile",
    typeName: "获取文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Creates FlowFiles from files in a directory.  NiFi will ignore files it doesn't have at least read permissions for.",
    descriptionName: "从目录中的文件创建FlowFiles。NiFi将忽略没有读权限的文件。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-filesystem",
          label: "write filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to."
      },
      {
        requiredPermission: {
          id: "read-filesystem",
          label: "read filesystem"
        },
        explanation: "Provides operator the ability to read from any file that NiFi has access to."
      }
    ],
    tags: [
      "ingress",
      "input",
      "restricted",
      "get",
      "files",
      "source",
      "local",
      "filesystem",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.GetFTP",
    typeName: "获取FTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Fetches files from an FTP Server and creates FlowFiles from them",
    descriptionName: "从FTP服务器获取文件并从中创建FlowFiles",
    restricted: !1,
    tags: [
      "input",
      "FTP",
      "get",
      "fetch",
      "retrieve",
      "files",
      "source",
      "remote",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.hbase.GetHBase",
    typeName: "获取HBase数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: `This Processor polls HBase for any records in the specified table. The processor keeps track of the timestamp of the cells that it receives, so that as new records are pushed to HBase, they will automatically be pulled. Each record is output in JSON format, as {"row": "<row key>", "cells": { "<column 1 family>:<column 1 qualifier>": "<cell 1 value>", "<column 2 family>:<column 2 qualifier>": "<cell 2 value>", ... }}. For each record received, a Provenance RECEIVE event is emitted with the format hbase://<table name>/<row key>, where <row key> is the UTF-8 encoded value of the row's key.`,
    descriptionName: "这个处理器在HBase中轮询指定表中的任何记录。处理器跟踪它接收到的单元格的时间戳，因此当新记录被推送到HBase时，它们将自动被拉出。每条记录以JSON格式输出。对于接收到的每条记录，会发出一个Provenance RECEIVE事件，格式为hbase://<table name>/<row key>，其中<row key>是行键的UTF-8编码值。",
    restricted: !1,
    tags: [
      "get",
      "hbase",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.hadoop.GetHDFS",
    typeName: "获取HDFS数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Fetch files from Hadoop Distributed File System (HDFS) into FlowFiles. This Processor will delete the file from HDFS after fetching it.",
    descriptionName: "将HDFS中的文件提取到FlowFiles中。该处理器将在获取文件后从HDFS中删除该文件。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "read-distributed-filesystem",
          label: "read distributed filesystem"
        },
        explanation: "Provides operator the ability to retrieve any file that NiFi has access to in HDFS or the local filesystem."
      },
      {
        requiredPermission: {
          id: "write-distributed-filesystem",
          label: "write distributed filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "get",
      "fetch",
      "HDFS",
      "HCFS",
      "hadoop",
      "source",
      "filesystem",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.hadoop.inotify.GetHDFSEvents",
    typeName: "获取HDFS事件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "This processor polls the notification events provided by the HdfsAdmin API. Since this uses the HdfsAdmin APIs it is required to run as an HDFS super user. Currently there are six types of events (append, close, create, metadata, rename, and unlink). Please see org.apache.hadoop.hdfs.inotify.Event documentation for full explanations of each event. This processor will poll for new events based on a defined duration. For each event received a new flow file will be created with the expected attributes and the event itself serialized to JSON and written to the flow file's content. For example, if event.type is APPEND then the content of the flow file will contain a JSON file containing the information about the append event. If successful the flow files are sent to the 'success' relationship. Be careful of where the generated flow files are stored. If the flow files are stored in one of processor's watch directories there will be a never ending flow of events. It is also important to be aware that this processor must consume all events. The filtering must happen within the processor. This is because the HDFS admin's event notifications API does not have filtering.",
    descriptionName: "这个处理器轮询HdfsAdmin API提供的通知事件。因为它使用了HdfsAdmin api，所以需要以HDFS超级用户的身份运行。目前有六种类型的事件(追加、关闭、创建、元数据、重命名和取消链接)。请参阅org.apache.hadoop.hdfs.inotify.Event文档了解每个事件的完整解释。此处理器将根据定义的持续时间轮询新事件。对于接收到的每个事件，将创建一个具有预期属性的新流文件，并将事件本身序列化为JSON并写入流文件的内容。例如，if event。类型为APPEND，那么流文件的内容将包含一个JSON文件，其中包含有关APPEND事件的信息。如果成功，流文件将被发送到“成功”关系。注意生成的流文件存储的位置。如果流文件存储在一个处理器的监视目录中，那么将会有一个永无止境的事件流。同样重要的是要意识到这个处理器必须使用所有事件。过滤必须在处理器内进行。这是因为HDFS管理员的事件通知API没有过滤功能。",
    restricted: !1,
    tags: [
      "inotify",
      "hadoop",
      "events",
      "notifications",
      "filesystem"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.hadoop.GetHDFSFileInfo",
    typeName: "获取HDFS文件信息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Retrieves a listing of files and directories from HDFS. This processor creates a FlowFile(s) that represents the HDFS file/dir with relevant information. Main purpose of this processor to provide functionality similar to HDFS Client, i.e. count, du, ls, test, etc. Unlike ListHDFS, this processor is stateless, supports incoming connections and provides information on a dir level. ",
    descriptionName: "从HDFS中获取文件和目录的列表。这个处理器创建一个FlowFile(s)，它代表HDFS文件/dir和相关信息。这个处理器的主要目的是提供类似HDFS Client的功能，比如count, du, ls, test等。与ListHDFS不同，这个处理器是无状态的，支持传入连接，并提供目录级别的信息。",
    restricted: !1,
    tags: [
      "get",
      "HDFS",
      "HCFS",
      "hadoop",
      "source",
      "list",
      "filesystem",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.hadoop.GetHDFSSequenceFile",
    typeName: "获取HDFS序列文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Fetch sequence files from Hadoop Distributed File System (HDFS) into FlowFiles",
    descriptionName: "从HDFS中提取序列文件到FlowFiles中",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "read-distributed-filesystem",
          label: "read distributed filesystem"
        },
        explanation: "Provides operator the ability to retrieve any file that NiFi has access to in HDFS or the local filesystem."
      },
      {
        requiredPermission: {
          id: "write-distributed-filesystem",
          label: "write distributed filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "get",
      "fetch",
      "sequence file",
      "HDFS",
      "HCFS",
      "hadoop",
      "source",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.GetHTMLElement",
    typeName: "获取HTML元素值",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-html-nar",
      version: "1.21.0"
    },
    description: `Extracts HTML element values from the incoming flowfile's content using a CSS selector. The incoming HTML is first converted into a HTML Document Object Model so that HTML elements may be selected in the similar manner that CSS selectors are used to apply styles to HTML. The resulting HTML DOM is then "queried" using the user defined CSS selector string. The result of "querying" the HTML DOM may produce 0-N results. If no results are found the flowfile will be transferred to the "element not found" relationship to indicate so to the end user. If N results are found a new flowfile will be created and emitted for each result. The query result will either be placed in the content of the new flowfile or as an attribute of the new flowfile. By default the result is written to an attribute. This can be controlled by the "Destination" property. Resulting query values may also have data prepended or appended to them by setting the value of property "Prepend Element Value" or "Append Element Value". Prepended and appended values are treated as string values and concatenated to the result retrieved from the HTML DOM query operation. A more thorough reference for the CSS selector syntax can be found at "http://jsoup.org/apidocs/org/jsoup/select/Selector.html"`,
    descriptionName: "使用CSS选择器从传入流文件的内容中提取HTML元素值。传入的HTML首先被转换成HTML文档对象模型，这样HTML元素就可以被选择，就像CSS选择器被用来对HTML应用样式一样。然后使用用户定义的CSS选择器字符串“查询”生成的HTML DOM。“查询HTML DOM”的结果可能产生0-N个结果。如果没有找到结果，流文件将被转移到“元素未找到”关系中，以向最终用户表明这一点。如果找到N个结果，将为每个结果创建并发出一个新的流文件。查询结果要么放在新流文件的内容中，要么作为新流文件的属性。默认情况下，结果被写入属性。这可以通过“Destination属性”来控制。结果查询值也可以通过设置属性“Prepend Element value 或“Append Element value”的值来预先或追加数据。前置和附加的值被视为字符串值，并连接到从HTML DOM查询操作检索到的结果。关于CSS选择器语法的更全面的参考可以在“http://jsoup.org/apidocs/org/jsoup/select/Selector.html”找到。",
    restricted: !1,
    tags: [
      "css",
      "dom",
      "get",
      "html",
      "element"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.GetHTTP",
    typeName: "获取HTTP请求",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Please be aware this processor is deprecated and may be removed in the near future. Use InvokeHTTP instead. Fetches data from an HTTP or HTTPS URL and writes the data to the content of a FlowFile. Once the content has been fetched, the ETag and Last Modified dates are remembered (if the web server supports these concepts). This allows the Processor to fetch new data only if the remote data has changed or until the state is cleared. That is, once the content has been fetched from the given URL, it will not be fetched again until the content on the remote server changes. Note that due to limitations on state management, stored "last modified" and etag fields never expire. If the URL in GetHttp uses Expression Language that is unbounded, there is the potential for Out of Memory Errors to occur.',
    descriptionName: "请注意此处理器已弃用，并可能在不久的将来被移除。使用InvokeHTTP代替。从HTTP或HTTPS URL获取数据，并将数据写入FlowFile的内容。一旦内容被获取，ETag和Last Modified日期就会被记住(如果web服务器支持这些概念)。这允许处理器仅在远程数据发生更改或状态被清除之前获取新数据。也就是说，一旦从给定的URL中获取了内容，在远程服务器上的内容发生变化之前，将不会再次获取该内容。请注意，由于状态管理的限制，存储的“上次修改”和etag字段永远不会过期。如果GetHttp中的URL使用的表达式语言是无界的，那么就有可能发生内存不足错误。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "input",
      "get",
      "fetch",
      "http",
      "poll",
      "https",
      "source",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.hubspot.GetHubSpot",
    typeName: "获取HubSpot数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hubspot-nar",
      version: "1.21.0"
    },
    description: "Retrieves JSON data from a private HubSpot application. This processor is intended to be run on the Primary Node only.",
    descriptionName: "从私有HubSpot应用程序中检索JSON数据。这个处理器只打算在主节点上运行。",
    restricted: !1,
    tags: [
      "hubspot"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.GetJMSQueue",
    typeName: "获取ActiveMQ队列消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Pulls messages from a ActiveMQ JMS Queue, creating a FlowFile for each JMS Message or bundle of messages, as configured",
    descriptionName: "从ActiveMQ JMS队列中提取消息，按照配置为每个JMS消息或消息束创建一个FlowFile",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases. ",
    tags: [
      "jms",
      "pull",
      "get",
      "consume",
      "source",
      "queue",
      "listen",
      "consumer"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.GetJMSTopic",
    typeName: "获取ActiveMQ指定topic消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Pulls messages from a ActiveMQ JMS Topic, creating a FlowFile for each JMS Message or bundle of messages, as configured.",
    descriptionName: "从ActiveMQ JMS Topic中提取消息，按照配置为每个JMS消息或消息包创建一个FlowFile。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "jms",
      "durable",
      "pull",
      "get",
      "non-durable",
      "topic",
      "consume",
      "subscription",
      "source",
      "listen",
      "consumer"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.mongodb.GetMongo",
    typeName: "获取MongoDB数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "Creates FlowFiles from documents in MongoDB loaded by a user-specified query.",
    descriptionName: "从MongoDB中通过用户指定的查询加载的文档中创建FlowFiles。",
    restricted: !1,
    tags: [
      "read",
      "get",
      "mongodb"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.mongodb.GetMongoRecord",
    typeName: "获取MongoDB记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "A record-based version of GetMongo that uses the Record writers to write the MongoDB result set.",
    descriptionName: "基于记录的GetMongo版本，使用Record writer来写MongoDB的结果集。",
    restricted: !1,
    tags: [
      "mongo",
      "get",
      "fetch",
      "record",
      "json",
      "mongodb"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.rethinkdb.GetRethinkDB",
    typeName: "获取RethinkDB数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-rethinkdb-nar",
      version: "1.21.0"
    },
    description: "Processor to get a JSON document from RethinkDB (https://www.rethinkdb.com/) using the document id. The FlowFile will contain the retrieved document",
    descriptionName: "处理器使用文档id从RethinkDB (https://www.rethinkdb.com/)获取JSON文档。FlowFile将包含检索到的文档",
    restricted: !1,
    tags: [
      "read",
      "get",
      "fetch",
      "rethinkdb"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.GetSFTP",
    typeName: "获取SFTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Fetches files from an SFTP Server and creates FlowFiles from them",
    descriptionName: "从SFTP服务器获取文件并创建FlowFiles",
    restricted: !1,
    tags: [
      "input",
      "get",
      "fetch",
      "retrieve",
      "files",
      "sftp",
      "source",
      "remote",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.shopify.GetShopify",
    typeName: "获取Shopify数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-shopify-nar",
      version: "1.21.0"
    },
    description: "Retrieves objects from a custom Shopify store. The processor yield time must be set to the account's rate limit accordingly.",
    descriptionName: "从自定义Shopify商店中检索对象。处理器生成时间必须相应地设置为帐户的速率限制。",
    restricted: !1,
    tags: [
      "shopify"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.smb.GetSmbFile",
    typeName: "获取Samba共享文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-smb-nar",
      version: "1.21.0"
    },
    description: "Reads file from a samba network location to FlowFiles. Use this processor instead of a cifs mounts if share access control is important. Configure the Hostname, Share and Directory accordingly: \\\\[Hostname]\\[Share]\\[path\\to\\Directory]",
    descriptionName: "从samba网络位置读取文件到FlowFiles。如果共享访问控制很重要，请使用此处理器而不是cifs挂载。相应配置主机名、共享和目录:\\[Hostname][Share][path	oDirectory]",
    restricted: !1,
    tags: [
      "samba, smb, cifs, files, get"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.snmp.processors.GetSNMP",
    typeName: "获取SNMP协议信息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-snmp-nar",
      version: "1.21.0"
    },
    description: "Retrieves information from SNMP Agent with SNMP Get request and outputs a FlowFile with information in attributes and without any content",
    descriptionName: "通过SNMP Get请求从SNMP Agent获取信息，并输出带有属性信息的FlowFile，而不包含任何内容",
    restricted: !1,
    tags: [
      "get",
      "snmp",
      "oid",
      "walk"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.solr.GetSolr",
    typeName: "获取Solr数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-solr-nar",
      version: "1.21.0"
    },
    description: "Queries Solr and outputs the results as a FlowFile in the format of XML or using a Record Writer",
    descriptionName: "查询Solr并以XML格式或使用Record Writer将结果输出为FlowFile",
    restricted: !1,
    tags: [
      "Pull",
      "Solr",
      "Get",
      "Apache",
      "Records"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.splunk.GetSplunk",
    typeName: "获取Splunk数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-splunk-nar",
      version: "1.21.0"
    },
    description: "Retrieves data from Splunk Enterprise.",
    descriptionName: "从Splunk Enterprise检索数据。",
    restricted: !1,
    tags: [
      "get",
      "splunk",
      "logs"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.gettcp.GetTCP",
    typeName: "获取TCP协议数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-tcp-nar",
      version: "1.21.0"
    },
    description: "Connects over TCP to the provided endpoint(s). Received data will be written as content to the FlowFile",
    descriptionName: "通过TCP连接到所提供的端点。接收到的数据将作为内容写入FlowFile",
    restricted: !1,
    tags: [
      "tcp",
      "input",
      "get",
      "fetch",
      "poll",
      "source",
      "ingest"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.workday.GetWorkdayReport",
    typeName: "获取工作日报表数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-workday-processors-nar",
      version: "1.21.0"
    },
    description: "A processor which can interact with a configurable Workday Report. The processor can forward the content without modification, or you can transform it by providing the specific Record Reader and Record Writer services based on your needs. You can also remove fields by defining schema in the Record Writer. Supported Workday report formats are: csv, simplexml, json",
    descriptionName: "可以与可配置的工作日报表交互的处理器。处理器可以不加修改地转发内容，或者您可以根据需要通过提供特定的Record Reader和Record Writer服务对其进行转换。还可以通过在Record Writer中定义模式来删除字段。支持的工作日报表格式有:csv、simplexml、json",
    restricted: !1,
    tags: [
      "report",
      "Workday"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.zendesk.GetZendesk",
    typeName: "获取Zendesk数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-zendesk-nar",
      version: "1.21.0"
    },
    description: "Incrementally fetches data from Zendesk API.",
    descriptionName: "增量地从Zendesk API获取数据。",
    restricted: !1,
    tags: [
      "zendesk"
    ],
    classifyName: "获取"
  },
  {
    type: "org.apache.nifi.processors.standard.HandleHttpRequest",
    typeName: "处理http请求",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Starts an HTTP Server and listens for HTTP Requests. For each request, creates a FlowFile and transfers to 'success'. This Processor is designed to be used in conjunction with the HandleHttpResponse Processor in order to create a Web Service. In case  of a multipart request, one FlowFile is generated for each part.",
    descriptionName: "启动HTTP服务器并监听HTTP请求。对于每个请求，创建一个FlowFile并传输到“成功”。该处理器被设计为与HandleHttpResponse处理器一起使用，以创建Web服务。在多部分请求的情况下，为每个部分生成一个FlowFile。",
    restricted: !1,
    tags: [
      "request",
      "ingress",
      "http",
      "https",
      "web service",
      "listen"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.HandleHttpResponse",
    typeName: "处理http响应",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Sends an HTTP Response to the Requestor that generated a FlowFile. This Processor is designed to be used in conjunction with the HandleHttpRequest in order to create a web service.",
    descriptionName: "向生成FlowFile的请求者发送一个HTTP响应。这个处理器被设计成与HandleHttpRequest一起使用，以创建一个web服务。",
    restricted: !1,
    tags: [
      "response",
      "http",
      "https",
      "web service",
      "egress"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.HashAttribute",
    typeName: "哈希属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Hashes together the key/value pairs of several flowfile attributes and adds the hash as a new attribute. Optional properties are to be added such that the name of the property is the name of a flowfile attribute to consider and the value of the property is a regular expression that, if matched by the attribute value, will cause that attribute to be used as part of the hash. If the regular expression contains a capturing group, only the value of the capturing group will be used. For a processor which accepts various attributes and generates a cryptographic hash of each, see "CryptographicHashAttribute". ',
    descriptionName: "将几个流文件属性的键/值对散列在一起，并将散列作为新属性添加。要添加可选属性，以便属性的名称是要考虑的流文件属性的名称，属性的值是一个正则表达式，如果与属性值匹配，将导致该属性被用作哈希的一部分。如果正则表达式包含捕获组，则只使用捕获组的值。对于接受各种属性并生成每个属性的加密散列的处理器，请参见“CryptographicHashAttribute”。",
    restricted: !1,
    deprecationReason: "UpdateAttribute can be configured using the hash Expression Language function to digest one or more attributes",
    tags: [
      "attributes",
      "hash"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.HashContent",
    typeName: "哈希内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Calculates a hash value for the Content of a FlowFile and puts that hash value on the FlowFile as an attribute whose name is determined by the <Hash Attribute Name> property. This processor did not provide a consistent offering of hash algorithms, and is now deprecated. For modern cryptographic hashing capabilities, see "CryptographicHashContent". ',
    descriptionName: "为FlowFile的内容计算一个哈希值，并将该哈希值作为一个属性放在FlowFile上，其名称由<哈希属性名称>属性确定。该处理器没有提供一致的哈希算法，现在已弃用。有关现代加密哈希功能，请参阅“CryptographicHashContent”。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "SHA-1",
      "SHA-256",
      "hash",
      "content",
      "MD5"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.IdentifyMimeType",
    typeName: "识别MIME类型",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Attempts to identify the MIME Type used for a FlowFile. If the MIME Type can be identified, an attribute with the name 'mime.type' is added with the value being the MIME Type. If the MIME Type cannot be determined, the value will be set to 'application/octet-stream'. In addition, the attribute mime.extension will be set if a common file extension for the MIME Type is known. If both Config File and Config Body are not set, the default NiFi MIME Types will be used.",
    descriptionName: "试图识别用于流文件的MIME类型。如果可以识别MIME类型，则使用名称为“MIME”的属性。type'被添加，其值为MIME类型。如果无法确定MIME类型，则该值将设置为'application/octet-stream'。此外，属性mime。如果已知MIME类型的公共文件扩展名，则设置扩展名。如果配置文件和配置体都没有设置，默认的NiFi MIME类型将被使用。",
    restricted: !1,
    tags: [
      "zip",
      "MIME",
      "file",
      "identify",
      "gzip",
      "mime.type",
      "compression",
      "bzip2"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.aws.wag.InvokeAWSGatewayApi",
    typeName: "调用AWS网关api",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: "Client for AWS Gateway API endpoint",
    descriptionName: "用于AWS网关API端点的客户端",
    restricted: !1,
    tags: [
      "Rest",
      "Gateway-API",
      "http",
      "https",
      "Amazon",
      "Client",
      "AWS"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.InvokeHTTP",
    typeName: "调用http接口",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "An HTTP client processor which can interact with a configurable HTTP Endpoint. The destination URL and HTTP Method are configurable. FlowFile attributes are converted to HTTP headers and the FlowFile contents are included as the body of the request (if the HTTP Method is PUT, POST or PATCH).",
    descriptionName: "一种HTTP客户端处理器，可以与可配置的HTTP端点进行交互。目标URL和HTTP方法是可配置的。FlowFile属性转换为HTTP头，FlowFile内容作为请求的主体包含（如果HTTP方法是PUT、POST或PATCH）。",
    restricted: !1,
    tags: [
      "rest",
      "http",
      "client",
      "https"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.script.InvokeScriptedProcessor",
    typeName: "调用脚本化处理器",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-scripting-nar",
      version: "1.21.0"
    },
    description: "Experimental - Invokes a script engine for a Processor defined in the given script. The script must define a valid class that implements the Processor interface, and it must set a variable 'processor' to an instance of the class. Processor methods such as onTrigger() will be delegated to the scripted Processor instance. Also any Relationships or PropertyDescriptors defined by the scripted processor will be added to the configuration dialog. The scripted processor can implement public void setLogger(ComponentLog logger) to get access to the parent logger, as well as public void onScheduled(ProcessContext context) and public void onStopped(ProcessContext context) methods to be invoked when the parent InvokeScriptedProcessor is scheduled or stopped, respectively.  NOTE: The script will be loaded when the processor is populated with property values, see the Restrictions section for more security implications.  Experimental: Impact of sustained usage not yet verified.",
    descriptionName: "实验性-为给定脚本中定义的处理器调用脚本引擎。脚本必须定义一个实现Processor接口的有效类，并且必须将变量' Processor '设置为该类的一个实例。像onTrigger()这样的处理器方法将被委托给脚本化的Processor实例。此外，脚本处理器定义的任何Relationships或propertydescriptor都将被添加到配置对话框中。脚本化的处理器可以实现public void setLogger(ComponentLog记录器)来访问父记录器，以及public void onScheduled(ProcessContext上下文)和public void onStopped(ProcessContext上下文)方法，分别在父InvokeScriptedProcessor被调度或停止时调用。注意:当用属性值填充处理器时，脚本将被加载，有关更多安全含义，请参阅限制部分。实验性:持续使用的影响尚未得到验证。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "luaj",
      "python",
      "groovy",
      "jython",
      "restricted",
      "js",
      "lua",
      "invoke",
      "script",
      "javascript",
      "jruby",
      "ruby"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.ISPEnrichIP",
    typeName: "IP地址的ISP信息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-enrich-nar",
      version: "1.21.0"
    },
    description: "Looks up ISP information for an IP address and adds the information to FlowFile attributes. The ISP data is provided as a MaxMind ISP database. (Note that this is NOT the same as the GeoLite database utilized by some geo enrichment tools). The attribute that contains the IP address to lookup is provided by the 'IP Address Attribute' property. If the name of the attribute provided is 'X', then the the attributes added by enrichment will take the form X.isp.<fieldName>",
    descriptionName: "查找IP地址的ISP信息，并将信息添加到FlowFile属性。ISP数据以MaxMind ISP数据库的形式提供。(请注意，这与一些地理富集工具使用的GeoLite数据库不同)。包含要查找的IP地址的属性由“IP address attribute”属性提供。如果提供的属性名是'X'，那么通过富集添加的属性将采用X.isp.<fieldName>的形式",
    restricted: !1,
    tags: [
      "ISP",
      "ip",
      "enrich",
      "maxmind"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.JoinEnrichment",
    typeName: "连接",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Joins together Records from two different FlowFiles where one FlowFile, the 'original' contains arbitrary records and the second FlowFile, the 'enrichment' contains additional data that should be used to enrich the first. See Additional Details for more information on how to configure this processor and the different use cases that it aims to accomplish.",
    descriptionName: "连接来自两个不同FlowFile的记录，其中一个FlowFile，“原始”包含任意记录，第二个FlowFile，“充实”包含应用于充实第一个的附加数据。有关如何配置此处理器以及它旨在完成的不同用例的更多信息，请参阅附加详细信息。",
    restricted: !1,
    tags: [
      "enrichment",
      "fork",
      "record",
      "merge",
      "streams",
      "join",
      "recordpath",
      "wrap",
      "sql",
      "combine"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.JoltTransformJSON",
    typeName: "Jolt转换成json",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Applies a list of Jolt specifications to the flowfile JSON payload. A new FlowFile is created with transformed content and is routed to the 'success' relationship. If the JSON transform fails, the original FlowFile is routed to the 'failure' relationship.",
    descriptionName: "将一列Jolt规范应用于flowfile JSON负载。使用转换后的内容创建一个新的FlowFile，并将其路由到“成功”关系。如果JSON转换失败，原始FlowFile将被路由到“失败”关系。",
    restricted: !1,
    tags: [
      "transform",
      "chainr",
      "defaultr",
      "shiftr",
      "json",
      "removr",
      "sort",
      "jolt",
      "cardinality"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.jolt.record.JoltTransformRecord",
    typeName: "Jolt转换成记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-jolt-record-nar",
      version: "1.21.0"
    },
    description: "Applies a list of Jolt specifications to the FlowFile payload. A new FlowFile is created with transformed content and is routed to the 'success' relationship. If the transform fails, the original FlowFile is routed to the 'failure' relationship.",
    descriptionName: "将一列Jolt规范应用于flowfile JSON负载。使用转换后的内容创建一个新的FlowFile，并将其路由到“成功”关系。如果JSON转换失败，原始FlowFile将被路由到“失败”关系。",
    restricted: !1,
    tags: [
      "transform",
      "chainr",
      "record",
      "defaultr",
      "shiftr",
      "removr",
      "sort",
      "jolt",
      "cardinality"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.jslt.JSLTTransformJSON",
    typeName: "JSLT转换成json",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-jslt-nar",
      version: "1.21.0"
    },
    description: "Applies a JSLT transformation to the FlowFile JSON payload. A new FlowFile is created with transformed content and is routed to the 'success' relationship. If the JSLT transform fails, the original FlowFile is routed to the 'failure' relationship.",
    descriptionName: "对FlowFile JSON有效负载应用xslt转换。使用转换后的内容创建一个新的FlowFile，并将其路由到“成功”关系。如果xslt转换失败，原始的FlowFile将被路由到“失败”关系。",
    restricted: !1,
    tags: [
      "jslt",
      "transform",
      "json"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.JsonQueryElasticsearch",
    typeName: "JSON DSL查询Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: "A processor that allows the user to run a query (with aggregations) written with the Elasticsearch JSON DSL. It does not automatically paginate queries for the user. If an incoming relationship is added to this processor, it will use the flowfile's content for the query. Care should be taken on the size of the query because the entire response from Elasticsearch will be loaded into memory all at once and converted into the resulting flowfiles.",
    descriptionName: "允许用户运行用Elasticsearch JSON DSL编写的查询(带聚合)的处理器。它不会为用户自动分页查询。如果传入关系被添加到这个处理器，它将使用流文件的内容进行查询。应该注意查询的大小，因为来自Elasticsearch的整个响应将立即加载到内存中并转换为结果流文件。",
    restricted: !1,
    tags: [
      "read",
      "elasticsearch",
      "query",
      "get",
      "elasticsearch7",
      "elasticsearch8",
      "json",
      "elasticsearch5",
      "elasticsearch6"
    ],
    classifyName: "查询"
  },
  {
    type: "com.hanyun.processors.linearRegressionTraining.LinearRegressionTraining",
    typeName: "线性回归模型训练",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-linearRegressionTraining-nar",
      version: "1.0"
    },
    description: "A custom NiFi processor that performs logistic regression using the Apache Commons Math library.",
    descriptionName: "一个使用Apache Commons Math库执行逻辑回归的自定义NiFi处理器。",
    restricted: !1,
    tags: [
      "math",
      "machine learning",
      "logistic regression"
    ]
  },
  {
    type: "com.hanyun.processors.LinerRegression.LinerRegression",
    typeName: "线性回归",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-LinerRegression-nar",
      version: "1.0"
    },
    description: "A custom NiFi processor that performs logistic regression using the Apache Commons Math library.",
    descriptionName: "一个使用Apache Commons Math库执行逻辑回归的自定义NiFi处理器。",
    restricted: !1,
    tags: [
      "math",
      "machine learning",
      "logistic regression"
    ]
  },
  {
    type: "org.apache.nifi.processors.azure.storage.ListAzureBlobStorage",
    typeName: "列出Azure中Blob数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Lists blobs in an Azure Storage container. Listing details are attached to an empty FlowFile for use with FetchAzureBlobStorage.  This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data.",
    descriptionName: "列出Azure存储容器中的blob。清单详细信息附加到一个空FlowFile中，用于FetchAzureBlobStorage。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。",
    restricted: !1,
    deprecationReason: "Processor depends on legacy Microsoft Azure SDK",
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.ListAzureBlobStorage_v12",
    typeName: "列出Azure中Blob数据，v12版本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Lists blobs in an Azure Blob Storage container. Listing details are attached to an empty FlowFile for use with FetchAzureBlobStorage. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data. The processor uses Azure Blob Storage client library v12.",
    descriptionName: "列出Azure Blob存储容器中的Blob。清单详细信息附加到一个空FlowFile中，用于FetchAzureBlobStorage。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。处理器使用Azure Blob Storage客户端库v12。",
    restricted: !1,
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.ListAzureDataLakeStorage",
    typeName: "列出Azure数据湖目录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Lists directory in an Azure Data Lake Storage Gen 2 filesystem",
    descriptionName: "列出Azure Data Lake Storage Gen 2文件系统中的目录",
    restricted: !1,
    tags: [
      "cloud",
      "datalake",
      "storage",
      "microsoft",
      "adlsgen2",
      "azure"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.box.ListBoxFile",
    typeName: "列出Box文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-box-nar",
      version: "1.21.0"
    },
    description: "Lists files in a Box folder. Each listed file may result in one FlowFile, the metadata being written as FlowFile attributes. Or - in case the 'Record Writer' property is set - the entire result is written as records to a single FlowFile. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data.",
    descriptionName: "列出Box文件夹中的文件。每个列出的文件可能导致一个FlowFile，元数据被写入FlowFile属性。或者-在情况下“记录作家”属性设置-整个结果被写入记录到一个单一的FlowFile。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。",
    restricted: !1,
    tags: [
      "box",
      "storage"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.standard.ListDatabaseTables",
    typeName: "列出数据库表",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Generates a set of flow files, each containing attributes corresponding to metadata about a table from a database connection. Once metadata about a table has been fetched, it will not be fetched again until the Refresh Interval (if set) has elapsed, or until state has been manually cleared.",
    descriptionName: "生成一组流文件，每个流文件包含与来自数据库连接的表的元数据相对应的属性。一旦获取了关于表的元数据，将不会再次获取它，直到刷新间隔(如果设置了)过去，或者直到手动清除状态。",
    restricted: !1,
    tags: [
      "database",
      "jdbc",
      "list",
      "table",
      "sql"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.dropbox.ListDropbox",
    typeName: "列出Dropbox文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-dropbox-processors-nar",
      version: "1.21.0"
    },
    description: "Retrieves a listing of files from Dropbox (shortcuts are ignored). Each listed file may result in one FlowFile, the metadata being written as FlowFile attributes. When the 'Record Writer' property is set, the entire result is written as records to a single FlowFile. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data.",
    descriptionName: "从Dropbox中检索文件列表(忽略快捷方式)。每个列出的文件可能导致一个FlowFile，元数据被写入FlowFile属性。当设置“Record Writer”属性时，整个结果将作为记录写入单个FlowFile。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。",
    restricted: !1,
    tags: [
      "dropbox",
      "storage"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenFTP",
    typeName: "启动FTP服务器",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Starts an FTP server that listens on the specified port and transforms incoming files into FlowFiles. The URI of the service will be ftp://{hostname}:{port}. The default port is 2221.",
    descriptionName: "启动一个FTP服务器，监听指定的端口并将传入的文件转换为FlowFiles。服务的URI将是ftp://{hostname}:{port}。默认端口号为2221。",
    restricted: !1,
    tags: [
      "FTPS",
      "FTP",
      "listen",
      "ingest"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenHTTP",
    typeName: "监听HTTP",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Starts an HTTP Server and listens on a given base path to transform incoming requests into FlowFiles. The default URI of the Service will be http://{hostname}:{port}/contentListener. Only HEAD and POST requests are supported. GET, PUT, and DELETE will result in an error and the HTTP response status code 405. GET is supported on <service_URI>/healthcheck. If the service is available, it returns "200 OK" with the content "OK". The health check functionality can be configured to be accessible via a different port. For details see the documentation of the "Listening Port for health check requests" property.A Record Reader and Record Writer property can be enabled on the processor to process incoming requests as records. Record processing is not allowed for multipart requests and request in FlowFileV3 format (minifi).',
    descriptionName: "启动HTTP服务器并在给定的基本路径上侦听，以将传入的请求转换为FlowFiles。服务的默认URI将是http://{hostname}:{port}/contentListener。只支持HEAD和POST请求。GET、PUT和DELETE将导致一个错误和HTTP响应状态码405。<service_URI>/healthcheck上支持GET。如果服务可用，它返回内容为“OK”的“200 OK”。可以将健康检查功能配置为可通过不同的端口访问。有关详细信息，请参阅“监听运行状况检查请求的端口”属性的文档。可以在处理器上启用记录读取器和记录写入器属性，以将传入的请求作为记录处理。记录处理不允许多部分请求和请求在FlowFileV3格式(minifi)。",
    restricted: !1,
    tags: [
      "rest",
      "http",
      "https",
      "listen",
      "ingest"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenRELP",
    typeName: "监听RELP消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Listens for RELP messages being sent to a given port over TCP. Each message will be acknowledged after successfully writing the message to a FlowFile. Each FlowFile will contain data portion of one or more RELP frames. In the case where the RELP frames contain syslog messages, the output of this processor can be sent to a ParseSyslog processor for further processing.",
    descriptionName: "侦听通过TCP发送到给定端口的RELP消息。在成功地将消息写入FlowFile后，将对每个消息进行确认。每个FlowFile将包含一个或多个RELP帧的数据部分。在RELP帧包含syslog消息的情况下，该处理器的输出可以发送到ParseSyslog处理器进行进一步处理。",
    restricted: !1,
    tags: [
      "tcp",
      "relp",
      "logs",
      "listen"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.email.ListenSMTP",
    typeName: "监听SMTP协议邮件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-email-nar",
      version: "1.21.0"
    },
    description: "This processor implements a lightweight SMTP server to an arbitrary port, allowing nifi to listen for incoming email. Note this server does not perform any email validation. If direct exposure to the internet is sought, it may be a better idea to use the combination of NiFi and an industrial scale MTA (e.g. Postfix). Threading for this processor is managed by the underlying smtp server used so the processor need not support more than one thread.",
    descriptionName: "这个处理器实现了一个到任意端口的轻量级SMTP服务器，允许nifi监听传入的电子邮件。注意，此服务器不执行任何电子邮件验证。如果寻求直接接触互联网，使用NiFi和工业规模的MTA(例如Postfix)的组合可能是一个更好的主意。此处理器的线程由所使用的底层smtp服务器管理，因此处理器不需要支持多个线程。",
    restricted: !1,
    tags: [
      "smtp",
      "listen",
      "email"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenSyslog",
    typeName: "监听syslog消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Listens for Syslog messages being sent to a given port over TCP or UDP. Incoming messages are checked against regular expressions for RFC5424 and RFC3164 formatted messages. The format of each message is: (<PRIORITY>)(VERSION )(TIMESTAMP) (HOSTNAME) (BODY) where version is optional. The timestamp can be an RFC5424 timestamp with a format of "yyyy-MM-dd'T'HH:mm:ss.SZ" or "yyyy-MM-dd'T'HH:mm:ss.S+hh:mm", or it can be an RFC3164 timestamp with a format of "MMM d HH:mm:ss". If an incoming messages matches one of these patterns, the message will be parsed and the individual pieces will be placed in FlowFile attributes, with the original message in the content of the FlowFile. If an incoming message does not match one of these patterns it will not be parsed and the syslog.valid attribute will be set to false with the original message in the content of the FlowFile. Valid messages will be transferred on the success relationship, and invalid messages will be transferred on the invalid relationship.`,
    descriptionName: "监听通过TCP或UDP发送到给定端口的Syslog消息。根据RFC5424和RFC3164格式的消息的正则表达式检查传入消息。每条消息的格式为:(<PRIORITY>)(VERSION)(TIMESTAMP) (HOSTNAME) (BODY)，其中VERSION可选。时间戳可以是RFC5424时间戳，格式为“yyyy-MM-dd”T”hh:mm:ss”。“SZ”或“yyyy-MM-dd”T”hh:mm:ss”。S hh:mm”，也可以是格式为”MMM d hh:mm:ss”的RFC3164时间戳。如果传入的消息与这些模式之一匹配，则该消息将被解析，并且单个部分将放置在FlowFile属性中，原始消息将放置在FlowFile的内容中。如果传入消息与这些模式之一不匹配，则不会对其进行解析。valid属性将与FlowFile内容中的原始消息一起设置为false。在成功关系上传递有效消息，在无效关系上传递无效消息。",
    restricted: !1,
    tags: [
      "udp",
      "tcp",
      "syslog",
      "logs",
      "listen"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenTCP",
    typeName: "监听TCP端口",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Listens for incoming TCP connections and reads data from each connection using a line separator as the message demarcator. The default behavior is for each message to produce a single FlowFile, however this can be controlled by increasing the Batch Size to a larger value for higher throughput. The Receive Buffer Size must be set as large as the largest messages expected to be received, meaning if every 100kb there is a line separator, then the Receive Buffer Size must be greater than 100kb. The processor can be configured to use an SSL Context Service to only allow secure connections. When connected clients present certificates for mutual TLS authentication, the Distinguished Names of the client certificate's issuer and subject are added to the outgoing FlowFiles as attributes. The processor does not perform authorization based on Distinguished Name values, but since these values are attached to the outgoing FlowFiles, authorization can be implemented based on these attributes.",
    descriptionName: "监听传入的TCP连接，并使用行分隔符作为消息分隔符从每个连接读取数据。默认行为是每个消息生成一个FlowFile，但是这可以通过将Batch Size增加到更大的值来控制，以获得更高的吞吐量。接收缓冲区大小必须设置为预期接收的最大消息，这意味着如果每100kb有一个分隔符，则接收缓冲区大小必须大于100kb。处理器可以配置为使用SSL上下文服务来只允许安全连接。当连接的客户端提供证书进行相互TLS认证时，客户端证书的颁发者和主题的Distinguished Names作为属性添加到传出的FlowFiles中。处理器不基于Distinguished Name值执行授权，但由于这些值附加到流出的FlowFiles，因此可以基于这些属性实现授权。",
    restricted: !1,
    tags: [
      "tcp",
      "tls",
      "ssl",
      "listen"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenTCPRecord",
    typeName: "监听TCP记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Listens for incoming TCP connections and reads data from each connection using a configured record reader, and writes the records to a flow file using a configured record writer. The type of record reader selected will determine how clients are expected to send data. For example, when using a Grok reader to read logs, a client can keep an open connection and continuously stream data, but when using an JSON reader, the client cannot send an array of JSON documents and then send another array on the same connection, as the reader would be in a bad state at that point. Records will be read from the connection in blocking mode, and will timeout according to the Read Timeout specified in the processor. If the read times out, or if any other error is encountered when reading, the connection will be closed, and any records read up to that point will be handled according to the configured Read Error Strategy (Discard or Transfer). In cases where clients are keeping a connection open, the concurrent tasks for the processor should be adjusted to match the Max Number of TCP Connections allowed, so that there is a task processing each connection. The processor can be configured to use an SSL Context Service to only allow secure connections. When connected clients present certificates for mutual TLS authentication, the Distinguished Names of the client certificate's issuer and subject are added to the outgoing FlowFiles as attributes. The processor does not perform authorization based on Distinguished Name values, but since these values are attached to the outgoing FlowFiles, authorization can be implemented based on these attributes.",
    descriptionName: "侦听传入的TCP连接，并使用配置的记录读取器从每个连接读取数据，并使用配置的记录写入器将记录写入流文件。所选择的记录读取器类型将决定客户端如何发送数据。例如，当使用Grok读取器读取日志时，客户端可以保持打开的连接并连续流数据，但是当使用JSON读取器时，客户端不能发送JSON文档数组，然后在同一连接上发送另一个数组，因为读取器此时处于坏状态。记录将以阻塞模式从连接中读取，并根据处理器中指定的读取超时时间超时。如果读取超时，或者在读取时遇到任何其他错误，则连接将被关闭，并且根据配置的读取错误策略(丢弃或传输)处理读取到该点的任何记录。在客户端保持连接打开的情况下，处理器的并发任务应该调整为匹配允许的最大TCP连接数，以便每个连接都有一个任务处理。处理器可以配置为使用SSL上下文服务来只允许安全连接。当连接的客户端提供证书进行相互TLS认证时，客户端证书的颁发者和主题的Distinguished Names作为属性添加到传出的FlowFiles中。处理器不基于Distinguished Name值执行授权，但由于这些值附加到流出的FlowFiles，因此可以基于这些属性实现授权。",
    restricted: !1,
    tags: [
      "tcp",
      "record",
      "tls",
      "ssl",
      "listen"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.snmp.processors.ListenTrapSNMP",
    typeName: "监听SNMP协议",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-snmp-nar",
      version: "1.21.0"
    },
    description: "Receives information from SNMP Agent and outputs a FlowFile with information in attributes and without any content",
    descriptionName: "从SNMP Agent接收信息，输出一个带有属性信息的FlowFile，不包含任何内容",
    restricted: !1,
    tags: [
      "snmp",
      "trap",
      "listen"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenUDP",
    typeName: "监听UDP端口",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Listens for Datagram Packets on a given port. The default behavior produces a FlowFile per datagram, however for higher throughput the Max Batch Size property may be increased to specify the number of datagrams to batch together in a single FlowFile. This processor can be restricted to listening for datagrams from  a specific remote host and port by specifying the Sending Host and Sending Host Port properties, otherwise it will listen for datagrams from all hosts and ports.",
    descriptionName: "监听给定端口上的数据包。默认行为为每个数据报生成一个FlowFile，但是对于更高的吞吐量，可以增加Max Batch Size属性，以指定在单个FlowFile中批量处理的数据报的数量。该处理器可以通过指定发送主机和发送主机端口属性来限制侦听来自特定远程主机和端口的数据报，否则它将侦听来自所有主机和端口的数据报。",
    restricted: !1,
    tags: [
      "udp",
      "source",
      "listen",
      "ingest"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListenUDPRecord",
    typeName: "监听UDP记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Listens for Datagram Packets on a given port and reads the content of each datagram using the configured Record Reader. Each record will then be written to a flow file using the configured Record Writer. This processor can be restricted to listening for datagrams from  a specific remote host and port by specifying the Sending Host and Sending Host Port properties, otherwise it will listen for datagrams from all hosts and ports.",
    descriptionName: "监听给定端口上的数据报数据包，并使用配置的Record Reader读取每个数据报的内容。然后，使用配置的record Writer将每个记录写入流文件。该处理器可以通过指定发送主机和发送主机端口属性来限制侦听来自特定远程主机和端口的数据报，否则它将侦听来自所有主机和端口的数据报。",
    restricted: !1,
    tags: [
      "udp",
      "record",
      "source",
      "listen",
      "ingest"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.websocket.ListenWebSocket",
    typeName: "监听WebSocket",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-websocket-processors-nar",
      version: "1.21.0"
    },
    description: "Acts as a WebSocket server endpoint to accept client connections. FlowFiles are transferred to downstream relationships according to received message types as the WebSocket server configured with this processor receives client requests",
    descriptionName: "作为WebSocket服务器端点接受客户端连接。当配置了该处理器的WebSocket服务器接收客户端请求时，FlowFiles根据接收到的消息类型被传输到下游关系",
    restricted: !1,
    tags: [
      "subscribe",
      "consume",
      "listen",
      "WebSocket"
    ],
    classifyName: "监听"
  },
  {
    type: "org.apache.nifi.processors.standard.ListFile",
    typeName: "列出指定目录的文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Retrieves a listing of files from the input directory. For each file listed, creates a FlowFile that represents the file so that it can be fetched in conjunction with FetchFile. This Processor is designed to run on Primary Node only in a cluster when 'Input Directory Location' is set to 'Remote'. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all the data. When 'Input Directory Location' is 'Local', the 'Execution' mode can be anything, and synchronization won't happen. Unlike GetFile, this Processor does not delete any data from the local filesystem.",
    descriptionName: "从输入目录中检索文件列表。对于列出的每个文件，创建一个表示该文件的FlowFile，以便它可以与FetchFile一起被获取。当“输入目录位置”设置为“远程”时，该处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的主节点将从前一个节点停止的位置继续，而不会复制所有数据。当“输入目录位置”为“本地”时，“执行”模式可以是任何模式，并且不会发生同步。与GetFile不同，此处理器不会从本地文件系统中删除任何数据。",
    restricted: !1,
    tags: [
      "file",
      "get",
      "source",
      "list",
      "filesystem",
      "ingest"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.ListFTP",
    typeName: "列出FTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Performs a listing of the files residing on an FTP server. For each file that is found on the remote server, a new FlowFile will be created with the filename attribute set to the name of the file on the remote server. This can then be used in conjunction with FetchFTP in order to fetch those files.",
    descriptionName: "列出驻留在FTP服务器上的文件。对于在远程服务器上找到的每个文件，将创建一个新的FlowFile，并将filename属性设置为远程服务器上的文件名称。然后，它可以与FetchFTP一起使用，以获取这些文件。",
    restricted: !1,
    tags: [
      "input",
      "ftp",
      "files",
      "source",
      "list",
      "remote",
      "ingest"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.gcp.storage.ListGCSBucket",
    typeName: "列出GCS存储桶中对象",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-gcp-nar",
      version: "1.21.0"
    },
    description: "Retrieves a listing of objects from an GCS bucket. For each object that is listed, creates a FlowFile that represents the object so that it can be fetched in conjunction with FetchGCSObject. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data.",
    descriptionName: "从GCS存储桶中检索对象列表。对于列出的每个对象，创建一个表示该对象的FlowFile，以便它可以与FetchGCSObject一起被获取。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。",
    restricted: !1,
    tags: [
      "gcs",
      "google cloud",
      "google",
      "storage",
      "list"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.hadoop.ListHDFS",
    typeName: "列出HDFS文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Retrieves a listing of files from HDFS. Each time a listing is performed, the files with the latest timestamp will be excluded and picked up during the next execution of the processor. This is done to ensure that we do not miss any files, or produce duplicates, in the cases where files with the same timestamp are written immediately before and after a single execution of the processor. For each file that is listed in HDFS, this processor creates a FlowFile that represents the HDFS file to be fetched in conjunction with FetchHDFS. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data. Unlike GetHDFS, this Processor does not delete any data from HDFS.",
    descriptionName: "从HDFS中检索文件列表。每次执行清单时，具有最新时间戳的文件将被排除在外，并在处理器下一次执行时拾取。这样做是为了确保在具有相同时间戳的文件在处理器执行前后立即写入的情况下，我们不会遗漏任何文件或产生副本。对于在HDFS中列出的每个文件，该处理器创建一个FlowFile，表示要与FetchHDFS一起提取的HDFS文件。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。与GetHDFS不同，此处理器不会从HDFS删除任何数据。",
    restricted: !1,
    tags: [
      "get",
      "HDFS",
      "HCFS",
      "hadoop",
      "source",
      "list",
      "filesystem",
      "ingest"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.aws.s3.ListS3",
    typeName: "列出S3文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: "Retrieves a listing of objects from an S3 bucket. For each object that is listed, creates a FlowFile that represents the object so that it can be fetched in conjunction with FetchS3Object. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data.",
    descriptionName: "从S3桶中检索对象列表。对于列出的每个对象，创建一个表示该对象的FlowFile，以便它可以与FetchS3Object一起被获取。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。",
    restricted: !1,
    tags: [
      "S3",
      "Amazon",
      "list",
      "AWS"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.standard.ListSFTP",
    typeName: "列出SFTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Performs a listing of the files residing on an SFTP server. For each file that is found on the remote server, a new FlowFile will be created with the filename attribute set to the name of the file on the remote server. This can then be used in conjunction with FetchSFTP in order to fetch those files.",
    descriptionName: "执行驻留在SFTP服务器上的文件列表。对于在远程服务器上找到的每个文件，将创建一个新的FlowFile，并将filename属性设置为远程服务器上的文件名称。然后，它可以与FetchSFTP一起使用，以获取这些文件。",
    restricted: !1,
    tags: [
      "input",
      "files",
      "sftp",
      "source",
      "list",
      "remote",
      "ingest"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.smb.ListSmb",
    typeName: "列出SMB协议共享文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-smb-nar",
      version: "1.21.0"
    },
    description: "Lists concrete files shared via SMB protocol. Each listed file may result in one flowfile, the metadata being written as flowfile attributes. Or - in case the 'Record Writer' property is set - the entire result is written as records to a single flowfile. This Processor is designed to run on Primary Node only in a cluster. If the primary node changes, the new Primary Node will pick up where the previous node left off without duplicating all of the data.",
    descriptionName: "列出通过SMB协议共享的具体文件。每个列出的文件可能产生一个flowfile，元数据被写入flowfile属性。或者-在“记录撰写器”属性设置的情况下-整个结果作为记录写入单个流文件。此处理器被设计为仅在集群中的主节点上运行。如果主节点发生更改，新的primary node将从前一个节点停止的位置继续，而不会复制所有数据。",
    restricted: !1,
    tags: [
      "samba, smb, cifs, files",
      "list"
    ],
    classifyName: "列表"
  },
  {
    type: "org.apache.nifi.processors.standard.LogAttribute",
    typeName: "日志属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Emits attributes of the FlowFile at the specified log level",
    descriptionName: "在指定的日志级别发出FlowFile的属性",
    restricted: !1,
    tags: [
      "logging",
      "attributes"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.LogMessage",
    typeName: "日志消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Emits a log message at the specified log level",
    descriptionName: "发送指定日志级别的日志消息",
    restricted: !1,
    tags: [
      "logging",
      "attributes"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.LookupAttribute",
    typeName: "lookup服务查找属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Lookup attributes from a lookup service",
    descriptionName: "查找服务中的查找属性",
    restricted: !1,
    tags: [
      "lookup",
      "cache",
      "Attribute Expression Language",
      "enrich",
      "attributes",
      "join"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.LookupRecord",
    typeName: "lookup服务查找记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Extracts one or more fields from a Record and looks up a value for those fields in a LookupService. If a result is returned by the LookupService, that result is optionally added to the Record. In this case, the processor functions as an Enrichment processor. Regardless, the Record is then routed to either the 'matched' relationship or 'unmatched' relationship (if the 'Routing Strategy' property is configured to do so), indicating whether or not a result was returned by the LookupService, allowing the processor to also function as a Routing processor. The "coordinates" to use for looking up a value in the Lookup Service are defined by adding a user-defined property. Each property that is added will have an entry added to a Map, where the name of the property becomes the Map Key and the value returned by the RecordPath becomes the value for that key. If multiple values are returned by the RecordPath, then the Record will be routed to the 'unmatched' relationship (or 'success', depending on the 'Routing Strategy' property's configuration). If one or more fields match the Result RecordPath, all fields that match will be updated. If there is no match in the configured LookupService, then no fields will be updated. I.e., it will not overwrite an existing value in the Record with a null value. Please note, however, that if the results returned by the LookupService are not accounted for in your schema (specifically, the schema that is configured for your Record Writer) then the fields will not be written out to the FlowFile.`,
    descriptionName: "从记录中提取一个或多个字段，并在LookupService中查找这些字段的值。如果LookupService返回一个结果，该结果将可选地添加到Record中。在本例中，处理器的功能是富集处理器。无论如何，记录将被路由到“匹配”关系或“不匹配”关系(如果“路由策略”属性配置为这样做)，指示LookupService是否返回结果，允许处理器也充当路由处理器。用于查找服务中查找值的坐标是通过添加用户定义的属性来定义的。添加的每个属性都将有一个添加到Map中的条目，其中属性的名称将成为Map Key，而RecordPath返回的值将成为该键的值。如果RecordPath返回多个值，那么记录将被路由到“未匹配”的关系(或“成功”，取决于“Routing Strategy”属性的配置)。如果一个或多个字段匹配Result RecordPath，那么所有匹配的字段都将被更新。如果配置的LookupService中没有匹配项，则不会更新任何字段。也就是说，它不会用空值覆盖记录中的现有值。但是，请注意，如果LookupService返回的结果没有在您的模式中考虑(具体来说，是为您的Record Writer配置的模式)，那么字段将不会写入FlowFile。",
    restricted: !1,
    tags: [
      "filter",
      "lookup",
      "enrichment",
      "database",
      "route",
      "record",
      "csv",
      "json",
      "convert",
      "logs",
      "db",
      "avro"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.MergeContent",
    typeName: "合并内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Merges a Group of FlowFiles together based on a user-defined strategy and packages them into a single FlowFile. It is recommended that the Processor be configured with only a single incoming connection, as Group of FlowFiles will not be created from FlowFiles in different connections. This processor updates the mime.type attribute as appropriate. NOTE: this processor should NOT be configured with Cron Driven for the Scheduling Strategy.",
    descriptionName: "根据用户定义的策略将一组FlowFile合并在一起，并将它们打包成一个FlowFile。建议将处理器配置为只有一个传入连接，因为不会从不同连接中的FlowFiles创建一组FlowFiles。这个处理器更新mime。适当地键入属性。注意:这个处理器不应该配置为调度策略的Cron驱动。",
    restricted: !1,
    tags: [
      "zip",
      "flowfile-stream-v3",
      "flowfile-stream",
      "concatenation",
      "correlation",
      "tar",
      "stream",
      "merge",
      "archive",
      "content"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.MergeRecord",
    typeName: "合并记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This Processor merges together multiple record-oriented FlowFiles into a single FlowFile that contains all of the Records of the input FlowFiles. This Processor works by creating 'bins' and then adding FlowFiles to these bins until they are full. Once a bin is full, all of the FlowFiles will be combined into a single output FlowFile, and that FlowFile will be routed to the 'merged' Relationship. A bin will consist of potentially many 'like FlowFiles'. In order for two FlowFiles to be considered 'like FlowFiles', they must have the same Schema (as identified by the Record Reader) and, if the <Correlation Attribute Name> property is set, the same value for the specified attribute. See Processor Usage and Additional Details for more information. NOTE: this processor should NOT be configured with Cron Driven for the Scheduling Strategy.",
    descriptionName: "该处理器将多个面向记录的FlowFile合并为一个包含所有输入FlowFile记录的FlowFile。这个处理器的工作原理是创建“箱子”，然后将FlowFiles添加到这些箱子中，直到它们满了。一旦bin被填满，所有的FlowFile将被合并成一个单独的输出FlowFile，并且该FlowFile将被路由到“合并”关系。一个bin可能包含许多类似于FlowFiles的文件。为了使两个FlowFiles被认为是“像FlowFiles”，它们必须具有相同的架构(由记录读取器识别)，并且，如果设置了<相关属性名称>属性，则指定属性的值相同。有关更多信息，请参阅处理器使用和其他详细信息。注意:这个处理器不应该配置为调度策略的Cron驱动。",
    restricted: !1,
    tags: [
      "correlation",
      "stream",
      "merge",
      "record",
      "event",
      "content"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.ModifyBytes",
    typeName: "修改字节",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Discard byte range at the start and end or all content of a binary file.",
    descriptionName: "丢弃二进制文件开头和结尾的字节范围或所有内容。",
    restricted: !1,
    tags: [
      "discard",
      "binary",
      "keep"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.ModifyHTMLElement",
    typeName: "修改HTML元素值",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-html-nar",
      version: "1.21.0"
    },
    description: `Modifies the value of an existing HTML element. The desired element to be modified is located by using CSS selector syntax. The incoming HTML is first converted into a HTML Document Object Model so that HTML elements may be selected in the similar manner that CSS selectors are used to apply styles to HTML. The resulting HTML DOM is then "queried" using the user defined CSS selector string to find the element the user desires to modify. If the HTML element is found the element's value is updated in the DOM using the value specified "Modified Value" property. All DOM elements that match the CSS selector will be updated. Once all of the DOM elements have been updated the DOM is rendered to HTML and the result replaces the flowfile content with the updated HTML. A more thorough reference for the CSS selector syntax can be found at "http://jsoup.org/apidocs/org/jsoup/select/Selector.html"`,
    descriptionName: "修改现有HTML元素的值。通过使用CSS选择器语法来定位需要修改的元素。传入的HTML首先被转换成HTML文档对象模型，这样HTML元素就可以被选择，就像CSS选择器被用来对HTML应用样式一样。然后使用用户定义的CSS选择器字符串“查询”生成的HTML DOM，以查找用户希望修改的元素。如果找到了HTML元素，则在DOM中使用指定值的“Modified value”属性更新元素的值。所有匹配CSS选择器的DOM元素都将被更新。一旦所有的DOM元素都更新了，DOM就会呈现为HTML，结果是用更新后的HTML替换流文件内容。关于CSS选择器语法的更全面的参考可以在“http://jsoup.org/apidocs/org/jsoup/select/Selector.html”找到。",
    restricted: !1,
    tags: [
      "modify",
      "css",
      "dom",
      "html",
      "element"
    ],
    classifyName: "修改/执行"
  },
  {
    type: "org.apache.nifi.processors.standard.MonitorActivity",
    typeName: "监控活动",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Monitors the flow for activity and sends out an indicator when the flow has not had any data for some specified amount of time and again when the flow's activity is restored",
    descriptionName: "监视流的活动，并在流在一段指定的时间内没有任何数据时发出指示符，并在流的活动恢复时再次发出指示符",
    restricted: !1,
    tags: [
      "detection",
      "inactive",
      "activity",
      "active",
      "monitor",
      "flow"
    ]
  },
  {
    type: "org.apache.nifi.processors.azure.storage.MoveAzureDataLakeStorage",
    typeName: "移动Azuire数据湖数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Moves content within an Azure Data Lake Storage Gen 2. After the move, files will be no longer available on source location.",
    descriptionName: "移动Azure数据湖第2代存储中的内容。移动之后，源位置上的文件将不再可用。",
    restricted: !1,
    tags: [
      "cloud",
      "datalake",
      "storage",
      "microsoft",
      "adlsgen2",
      "azure"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.hadoop.MoveHDFS",
    typeName: "移动HDFS文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Rename existing files or a directory of files (non-recursive) on Hadoop Distributed File System (HDFS).",
    descriptionName: "重命名HDFS上已有文件或文件目录(非递归)。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-distributed-filesystem",
          label: "write distributed filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to in HDFS or the local filesystem."
      },
      {
        requiredPermission: {
          id: "read-distributed-filesystem",
          label: "read distributed filesystem"
        },
        explanation: "Provides operator the ability to retrieve any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "move",
      "restricted",
      "HDFS",
      "HCFS",
      "moveHDFS",
      "hadoop",
      "put",
      "filesystem"
    ]
  },
  {
    type: "com.xgit.nifi.demo.processors.demo.naivebayes.NaiveBayesClassifierProcessor",
    typeName: "朴素贝叶斯分类",
    bundle: {
      group: "com.xgit.nifi.demo",
      artifact: "nifi-demo-nar",
      version: "1.0"
    },
    description: "Custom NiFi processor that uses Weka to perform Naive Bayes classification on the Iris dataset",
    descriptionName: "一个自定义NiFi处理器，使用Weka对Iris数据集执行朴素贝叶斯分类。",
    restricted: !1,
    tags: [
      "weka",
      "classifier",
      "machine learning"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.Notify",
    typeName: "唤醒",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Caches a release signal identifier in the distributed cache, optionally along with the FlowFile's attributes.  Any flow files held at a corresponding Wait processor will be released once this signal in the cache is discovered.",
    descriptionName: "在分布式缓存中缓存释放信号标识符，可选地与FlowFile的属性一起缓存。一旦在缓存中发现这个信号，在相应的Wait处理器中保存的任何流文件都将被释放。",
    restricted: !1,
    tags: [
      "cache",
      "release",
      "distributed",
      "map",
      "signal",
      "notify"
    ]
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.PaginatedJsonQueryElasticsearch",
    typeName: "JSON DSL查询Elasticsearch，支持分页",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: `A processor that allows the user to run a paginated query (with aggregations) written with the Elasticsearch JSON DSL. It will use the flowfile's content for the query unless the QUERY attribute is populated. Search After/Point in Time queries must include a valid "sort" field.`,
    descriptionName: "一个处理器，允许用户运行用Elasticsearch JSON DSL编写的分页查询(带聚合)。它将使用流文件的内容进行查询，除非填充了query属性。查询后/时间点查询必须包含有效的“sort”字段。",
    restricted: !1,
    tags: [
      "read",
      "elasticsearch",
      "query",
      "elasticsearch7",
      "scroll",
      "elasticsearch8",
      "json",
      "elasticsearch5",
      "elasticsearch6",
      "page"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.standard.ParseCEF",
    typeName: "解析CEF格式",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Parses the contents of a CEF formatted message and adds attributes to the FlowFile for headers and extensions of the parts of the CEF message.
Note: This Processor expects CEF messages WITHOUT the syslog headers (i.e. starting at "CEF:0"`,
    descriptionName: "解析CEF格式消息的内容，并为CEF消息部分的头和扩展名添加属性到FlowFile。注意:该处理器期望CEF消息没有syslog头(即从“CEF:0”开始)。",
    restricted: !1,
    tags: [
      "system",
      "cef",
      "attributes",
      "event",
      "message",
      "logs"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.evtx.ParseEvtx",
    typeName: "解析Windows事件日志文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-evtx-nar",
      version: "1.21.0"
    },
    description: "Parses the contents of a Windows Event Log file (evtx) and writes the resulting XML to the FlowFile",
    descriptionName: "解析Windows事件日志文件(evtx)的内容，并将结果XML写入FlowFile",
    restricted: !1,
    tags: [
      "file",
      "evtx",
      "windows",
      "event",
      "message",
      "logs"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.network.ParseNetflowv5",
    typeName: "解析Netflowv5",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-network-processors-nar",
      version: "1.21.0"
    },
    description: "Parses netflowv5 byte ingest and add to NiFi flowfile as attributes or JSON content.",
    descriptionName: "解析netflowv5字节摄取并添加到NiFi流文件作为属性或JSON内容。",
    restricted: !1,
    tags: [
      "netflow",
      "byte",
      "attributes",
      "datagram",
      "packet",
      "network",
      "v5"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.ParseSyslog",
    typeName: "解析Syslog内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Attempts to parses the contents of a Syslog message in accordance to RFC5424 and RFC3164 formats and adds attributes to the FlowFile for each of the parts of the Syslog message.Note: Be mindfull that RFC3164 is informational and a wide range of different implementations are present in the wild. If messages fail parsing, considering using RFC5424 or using a generic parsing processors such as ExtractGrok.",
    descriptionName: "尝试按照RFC5424和RFC3164格式解析Syslog消息的内容，并为Syslog消息的每个部分添加属性到FlowFile。注意:请记住，RFC3164是信息性的，并且在野外存在各种不同的实现。如果消息解析失败，请考虑使用RFC5424或使用ExtractGrok等通用解析处理器。",
    restricted: !1,
    tags: [
      "system",
      "attributes",
      "syslog",
      "event",
      "message",
      "logs"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.ParseSyslog5424",
    typeName: "按照RFC5424格式解析Syslog内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Attempts to parse the contents of a well formed Syslog message in accordance to RFC5424 format and adds attributes to the FlowFile for each of the parts of the Syslog message, including Structured Data.Structured Data will be written to attributes as one attribute per item id + parameter see https://tools.ietf.org/html/rfc5424.Note: ParseSyslog5424 follows the specification more closely than ParseSyslog.  If your Syslog producer does not follow the spec closely, with regards to using '-' for missing header entries for example, those logs will fail with this parser, where they would not fail with ParseSyslog.",
    descriptionName: "尝试按照RFC5424格式解析格式良好的Syslog消息的内容，并为Syslog消息的每个部分(包括结构化数据)添加属性到FlowFile。结构化数据将作为每个项目id参数的一个属性写入属性(参见https://tools.ietf.org/html/rfc5424)。注意:ParseSyslog5424比ParseSyslog更严格地遵循规范。如果您的Syslog生成器没有严格遵循规范，例如使用'-'表示丢失的标头条目，那么这些日志将在此解析器中失败，而在ParseSyslog中不会失败。",
    restricted: !1,
    tags: [
      "system",
      "syslog5424",
      "attributes",
      "syslog",
      "event",
      "message",
      "logs"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.PartitionRecord",
    typeName: "给记录分区",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Receives Record-oriented data (i.e., data that can be read by the configured Record Reader) and evaluates one or more RecordPaths against the each record in the incoming FlowFile. Each record is then grouped with other "like records" and a FlowFile is created for each group of "like records." What it means for two records to be "like records" is determined by user-defined properties. The user is required to enter at least one user-defined property whose value is a RecordPath. Two records are considered alike if they have the same value for all configured RecordPaths. Because we know that all records in a given output FlowFile have the same value for the fields that are specified by the RecordPath, an attribute is added for each field. See Additional Details on the Usage page for more information and examples.',
    descriptionName: "接收面向记录的数据(即，可以被配置的记录读取器读取的数据)，并根据传入的FlowFile中的每条记录计算一个或多个RecordPaths。然后将每条记录与其他“类似记录”分组，并为每组“类似记录”创建一个FlowFile。两条记录“相似”的含义由用户定义的属性决定。用户需要输入至少一个值为RecordPath的用户定义属性。如果两条记录对所有配置的RecordPaths具有相同的值，则认为它们相似。因为我们知道给定输出FlowFile中的所有记录对于由RecordPath指定的字段具有相同的值，所以为每个字段添加了一个属性。有关更多信息和示例，请参阅用法页面上的附加详细信息。",
    restricted: !1,
    tags: [
      "partition",
      "split",
      "organize",
      "bin",
      "record",
      "segment",
      "recordpath",
      "rpath",
      "group"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.PostHTTP",
    typeName: "http post请求",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Please be aware this processor is deprecated and may be removed in the near future. Use InvokeHTTP instead. Performs an HTTP Post with the content of the FlowFile. Uses a connection pool with max number of connections equal to the number of possible endpoints multiplied by the Concurrent Tasks configuration.",
    descriptionName: "请注意此处理器已弃用，并可能在不久的将来被移除。使用InvokeHTTP代替。使用FlowFile的内容执行HTTP Post。使用最大连接数等于可能端点数乘以Concurrent Tasks配置的连接池。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "http",
      "archive",
      "https",
      "copy",
      "remote"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.slack.PostSlack",
    typeName: "在Slack上发送消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-slack-nar",
      version: "1.21.0"
    },
    description: "Sends a message on Slack. The FlowFile content (e.g. an image) can be uploaded and attached to the message.",
    descriptionName: "在Slack上发送消息。FlowFile内容(例如图像)可以上传并附加到消息中。",
    restricted: !1,
    tags: [
      "post",
      "upload",
      "slack",
      "message",
      "notify"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.amqp.processors.PublishAMQP",
    typeName: "推送AMQP协议消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-amqp-nar",
      version: "1.21.0"
    },
    description: "Creates an AMQP Message from the contents of a FlowFile and sends the message to an AMQP Exchange. In a typical AMQP exchange model, the message that is sent to the AMQP Exchange will be routed based on the 'Routing Key' to its final destination in the queue (the binding). If due to some misconfiguration the binding between the Exchange, Routing Key and Queue is not set up, the message will have no final destination and will return (i.e., the data will not make it to the queue). If that happens you will see a log in both app-log and bulletin stating to that effect, and the FlowFile will be routed to the 'failure' relationship.",
    descriptionName: "从FlowFile的内容创建AMQP消息，并将消息发送到AMQP Exchange。在典型的AMQP交换模型中，发送到AMQP交换的消息将根据“路由密钥”路由到队列中的最终目的地(绑定)。如果由于某些配置错误，没有设置Exchange、Routing Key和Queue之间的绑定，则消息将没有最终目的地，并且将返回(即，数据将不会进入队列)。如果发生这种情况，你会在app-log和公告中看到一个日志，并且FlowFile将被路由到“失败”关系。",
    restricted: !1,
    tags: [
      "amqp",
      "rabbit",
      "publish",
      "message",
      "send",
      "put"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.jms.processors.PublishJMS",
    typeName: "推送JMS消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-jms-processors-nar",
      version: "1.21.0"
    },
    description: "Creates a JMS Message from the contents of a FlowFile and sends it to a JMS Destination (queue or topic) as JMS BytesMessage or TextMessage. FlowFile attributes will be added as JMS headers and/or properties to the outgoing JMS message.",
    descriptionName: "从FlowFile的内容创建JMS消息，并将其作为JMS BytesMessage或TextMessage发送到JMS目的地(队列或主题)。FlowFile属性将作为JMS头和/或属性添加到传出的JMS消息中。",
    restricted: !1,
    tags: [
      "jms",
      "publish",
      "message",
      "send",
      "put"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.PublishKafka_1_0",
    typeName: "推送Kafka 1.0消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-1-0-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as a message to Apache Kafka using the Kafka 1.0 Producer API.The messages to send may be individual FlowFiles or may be delimited, using a user-specified delimiter, such as a new-line. The complementary NiFi processor for fetching messages is ConsumeKafka_1_0.",
    descriptionName: "使用Kafka 1.0 Producer API将FlowFile的内容作为消息发送给Apache Kafka。发送的消息可以是单独的FlowFiles，也可以使用用户指定的分隔符(如换行符)进行分隔。用于获取消息的补充NiFi处理器是ConsumeKafka_1_0。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "1.0",
      "Message",
      "Kafka",
      "Apache",
      "Put",
      "Send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.PublishKafka_2_0",
    typeName: "推送Kafka 2.0消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-0-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as a message to Apache Kafka using the Kafka 2.0 Producer API.The messages to send may be individual FlowFiles or may be delimited, using a user-specified delimiter, such as a new-line. The complementary NiFi processor for fetching messages is ConsumeKafka_2_0.",
    descriptionName: "使用Kafka 2.0 Producer API将FlowFile的内容作为消息发送给Apache Kafka。发送的消息可以是单独的FlowFiles，也可以使用用户指定的分隔符(如换行符)进行分隔。用于获取消息的补充NiFi处理器是ConsumeKafka_2_0。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "Message",
      "2.0",
      "Kafka",
      "Apache",
      "Put",
      "Send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.PublishKafka_2_6",
    typeName: "推送Kafka 2.6消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-6-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as a message to Apache Kafka using the Kafka 2.6 Producer API.The messages to send may be individual FlowFiles or may be delimited, using a user-specified delimiter, such as a new-line. The complementary NiFi processor for fetching messages is ConsumeKafka_2_6.",
    descriptionName: "使用Kafka 2.6 Producer API将FlowFile的内容作为消息发送给Apache Kafka。发送的消息可以是单独的FlowFiles，也可以使用用户指定的分隔符(如换行符)进行分隔。用于获取消息的补充NiFi处理器是ConsumeKafka_2_6。",
    restricted: !1,
    tags: [
      "PubSub",
      "Message",
      "Kafka",
      "2.6",
      "Apache",
      "Put",
      "Send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.PublishKafkaRecord_1_0",
    typeName: "推送Kafka 1.0记录消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-1-0-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as individual records to Apache Kafka using the Kafka 1.0 Producer API. The contents of the FlowFile are expected to be record-oriented data that can be read by the configured Record Reader. The complementary NiFi processor for fetching messages is ConsumeKafkaRecord_1_0.",
    descriptionName: "使用Kafka 1.0 Producer API将FlowFile的内容作为单独的记录发送到Apache Kafka。FlowFile的内容应该是面向记录的数据，可以被配置的Record Reader读取。用于获取消息的补充NiFi处理器是ConsumeKafkaRecord_1_0。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "1.0",
      "Message",
      "csv",
      "Kafka",
      "json",
      "Record",
      "Apache",
      "logs",
      "Put",
      "avro",
      "Send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.PublishKafkaRecord_2_0",
    typeName: "推送Kafka 2.0记录消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-0-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as individual records to Apache Kafka using the Kafka 2.0 Producer API. The contents of the FlowFile are expected to be record-oriented data that can be read by the configured Record Reader. The complementary NiFi processor for fetching messages is ConsumeKafkaRecord_2_0.",
    descriptionName: "使用Kafka 2.0 Producer API将FlowFile的内容作为单个记录发送到Apache Kafka。FlowFile的内容预计是面向记录的数据，可由配置的记录读取器读取。用于获取消息的补充NiFi处理器是ConsumeKafkaRecord_2_0。",
    restricted: !1,
    deprecationReason: "",
    tags: [
      "PubSub",
      "Message",
      "2.0",
      "csv",
      "Kafka",
      "json",
      "Record",
      "Apache",
      "logs",
      "Put",
      "avro",
      "Send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.kafka.pubsub.PublishKafkaRecord_2_6",
    typeName: "推送Kafka 2.6记录消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kafka-2-6-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as individual records to Apache Kafka using the Kafka 2.6 Producer API. The contents of the FlowFile are expected to be record-oriented data that can be read by the configured Record Reader. The complementary NiFi processor for fetching messages is ConsumeKafkaRecord_2_6.",
    descriptionName: "使用Kafka 2.6 Producer API将FlowFile的内容作为单独的记录发送到Apache Kafka。FlowFile的内容应该是面向记录的数据，可以被配置的Record Reader读取。用于获取消息的补充NiFi处理器是ConsumeKafkaRecord_2_6。",
    restricted: !1,
    tags: [
      "PubSub",
      "Message",
      "csv",
      "Kafka",
      "json",
      "Record",
      "2.6",
      "Apache",
      "logs",
      "Put",
      "avro",
      "Send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.mqtt.PublishMQTT",
    typeName: "推送MQTT消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mqtt-nar",
      version: "1.21.0"
    },
    description: "Publishes a message to an MQTT topic",
    descriptionName: "向MQTT主题推送消息。",
    restricted: !1,
    tags: [
      "MQTT",
      "publish",
      "IOT"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.PutAzureBlobStorage",
    typeName: "写Azure Blob",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Puts content into an Azure Storage Blob",
    descriptionName: "",
    restricted: !1,
    deprecationReason: "Processor depends on legacy Microsoft Azure SDK",
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.PutAzureBlobStorage_v12",
    typeName: "写Azure Blob，v12版本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Puts content into a blob on Azure Blob Storage. The processor uses Azure Blob Storage client library v12.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "cloud",
      "blob",
      "storage",
      "microsoft",
      "azure"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.azure.cosmos.document.PutAzureCosmosDBRecord",
    typeName: "写Azure CosmosDB",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "This processor is a record-aware processor for inserting data into Cosmos DB with Core SQL API. It uses a configured record reader and schema to read an incoming record set from the body of a Flowfile and then inserts those records into a configured Cosmos DB Container.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "record",
      "insert",
      "cosmos",
      "put",
      "azure"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.PutAzureDataLakeStorage",
    typeName: "写Azure数据湖存储",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Puts content into an Azure Data Lake Storage Gen 2",
    descriptionName: "",
    restricted: !1,
    tags: [
      "cloud",
      "datalake",
      "storage",
      "microsoft",
      "adlsgen2",
      "azure"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.azure.eventhub.PutAzureEventHub",
    typeName: "写Azure事件中心",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Send FlowFile contents to Azure Event Hubs",
    descriptionName: "",
    restricted: !1,
    tags: [
      "cloud",
      "streaming",
      "streams",
      "eventhub",
      "microsoft",
      "events",
      "azure"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.azure.storage.queue.PutAzureQueueStorage",
    typeName: "写Azure队列存储",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-azure-nar",
      version: "1.21.0"
    },
    description: "Writes the content of the incoming FlowFiles to the configured Azure Queue Storage.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "cloud",
      "enqueue",
      "storage",
      "microsoft",
      "queue",
      "azure"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.box.PutBoxFile",
    typeName: "写Box文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-box-nar",
      version: "1.21.0"
    },
    description: "Puts content to a Box folder.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "box",
      "storage",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.cassandra.PutCassandraQL",
    typeName: "执行Cassandra CQL",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cassandra-nar",
      version: "1.21.0"
    },
    description: "Execute provided Cassandra Query Language (CQL) statement on a Cassandra 1.x, 2.x, or 3.0.x cluster. The content of an incoming FlowFile is expected to be the CQL command to execute. The CQL command may use the ? to escape parameters. In this case, the parameters to use must exist as FlowFile attributes with the naming convention cql.args.N.type and cql.args.N.value, where N is a positive integer. The cql.args.N.type is expected to be a lowercase string indicating the Cassandra type.",
    descriptionName: "在一个1.x，2.x或3.0 Cassandra集群上执行提供的CQL语句。传入的FlowFile的内容预计是要执行的CQL命令。CQL命令可能会使用?转义参数。在这种情况下，要使用的参数必须作为FlowFile属性存在，命名约定为cql.args.N.type和cql.args.N。值，其中N为正整数。type应该是一个小写字符串，表示Cassandra类型。",
    restricted: !1,
    tags: [
      "set",
      "cassandra",
      "insert",
      "update",
      "put",
      "cql"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.cassandra.PutCassandraRecord",
    typeName: "写Cassandra数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cassandra-nar",
      version: "1.21.0"
    },
    description: "This is a record aware processor that reads the content of the incoming FlowFile as individual records using the configured 'Record Reader' and writes them to Apache Cassandra using native protocol version 3 or higher.",
    descriptionName: "这是一个记录感知处理器，使用配置的“记录读取器”读取传入的FlowFile的内容作为单独的记录，并使用本地协议版本3或更高版本将它们写入Apache Cassandra。",
    restricted: !1,
    tags: [
      "set",
      "cassandra",
      "record",
      "insert",
      "update",
      "put",
      "cql"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.aws.cloudwatch.PutCloudWatchMetric",
    typeName: "向Amazon CloudWatch发布指标",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: "Publishes metrics to Amazon CloudWatch. Metric can be either a single value, or a StatisticSet comprised of minimum, maximum, sum and sample count.",
    descriptionName: "向Amazon CloudWatch发布指标。Metric可以是单个值，也可以是由最小值、最大值、总和和样本计数组成的StatisticSet。",
    restricted: !1,
    tags: [
      "amazon",
      "publish",
      "cloudwatch",
      "metrics",
      "aws",
      "put"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.couchbase.PutCouchbaseKey",
    typeName: "写Couchbase键值",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-couchbase-nar",
      version: "1.21.0"
    },
    description: "Put a document to Couchbase Server via Key/Value access.",
    descriptionName: "通过键/值访问将文档放入Couchbase服务器。",
    restricted: !1,
    tags: [
      "database",
      "couchbase",
      "put",
      "nosql"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutDatabaseRecord",
    typeName: "将记录转换成SQL写出",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "The PutDatabaseRecord processor uses a specified RecordReader to input (possibly multiple) records from an incoming flow file. These records are translated to SQL statements and executed as a single transaction. If any errors occur, the flow file is routed to failure or retry, and if the records are transmitted successfully, the incoming flow file is routed to success.  The type of statement executed by the processor is specified via the Statement Type property, which accepts some hard-coded values such as INSERT, UPDATE, and DELETE, as well as 'Use statement.type Attribute', which causes the processor to get the statement type from a flow file attribute.  IMPORTANT: If the Statement Type is UPDATE, then the incoming records must not alter the value(s) of the primary keys (or user-specified Update Keys). If such records are encountered, the UPDATE statement issued to the database may do nothing (if no existing records with the new primary key values are found), or could inadvertently corrupt the existing data (by changing records for which the new values of the primary keys exist).",
    descriptionName: "PutDatabaseRecord处理器使用指定的RecordReader从传入的流文件输入(可能是多条)记录。这些记录被转换成SQL语句，并作为单个事务执行。如果出现错误，则将流文件路由到失败或重试，如果记录传输成功，则将传入的流文件路由到成功。处理器执行的语句类型是通过statement type属性指定的，该属性接受一些硬编码值，如INSERT、UPDATE和DELETE，以及“Use”语句。type Attribute'，它使处理器从流文件属性中获取语句类型。重要:如果语句类型是UPDATE，那么传入的记录不能改变主键(或用户指定的UPDATE键)的值。如果遇到这样的记录，则向数据库发出的UPDATE语句可能什么也不做(如果没有找到具有新的主键值的现有记录)，或者可能无意中破坏现有数据(通过更改存在主键新值的记录)。",
    restricted: !1,
    tags: [
      "database",
      "record",
      "update",
      "insert",
      "jdbc",
      "delete",
      "put",
      "sql"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutDistributedMapCache",
    typeName: "写分布式映射缓存",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Gets the content of a FlowFile and puts it to a distributed map cache, using a cache key computed from FlowFile attributes. If the cache already contains the entry and the cache update strategy is 'keep original' the entry is not replaced.'",
    descriptionName: "获取FlowFile的内容，并使用从FlowFile属性计算的缓存键将其放入分布式映射缓存中。如果缓存中已经包含该条目，并且缓存更新策略为“保持原始”，则不会替换该条目。",
    restricted: !1,
    tags: [
      "cache",
      "distributed",
      "map",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.dropbox.PutDropbox",
    typeName: "写Dropbox文件夹",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-dropbox-processors-nar",
      version: "1.21.0"
    },
    description: "Puts content to a Dropbox folder.",
    descriptionName: "将内容放入Dropbox文件夹",
    restricted: !1,
    tags: [
      "dropbox",
      "storage",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.aws.dynamodb.PutDynamoDB",
    typeName: "写DynamoDB",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: "Puts a document from DynamoDB based on hash and range key.  The table can have either hash and range or hash key alone. Currently the keys supported are string and number and value can be json document. In case of hash and range keys both key are required for the operation. The FlowFile content must be JSON. FlowFile content is mapped to the specified Json Document attribute in the DynamoDB item.",
    descriptionName: "根据散列和范围键从DynamoDB中放置文档。表可以有散列和范围，也可以只有散列键。目前支持的键是字符串和数字，值可以是json文档。在使用散列键和范围键的情况下，操作需要两个键。FlowFile的内容必须是JSON。FlowFile内容映射到DynamoDB项中指定的Json Document属性。",
    restricted: !1,
    tags: [
      "DynamoDB",
      "Amazon",
      "Insert",
      "AWS",
      "Put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.aws.dynamodb.PutDynamoDBRecord",
    typeName: "写DynamoDB",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-aws-nar",
      version: "1.21.0"
    },
    description: `Inserts items into DynamoDB based on record-oriented data. The record fields are mapped into DynamoDB item fields, including partition and sort keys if set. Depending on the number of records the processor might execute the insert in multiple chunks in order to overcome DynamoDB's limitation on batch writing. This might result partially processed FlowFiles in which case the FlowFile will be transferred to the "unprocessed" relationship with the necessary attribute to retry later without duplicating the already executed inserts.`,
    descriptionName: "",
    restricted: !1,
    tags: [
      "DynamoDB",
      "Record",
      "Amazon",
      "Insert",
      "AWS",
      "Put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.PutElasticsearchHttp",
    typeName: "通过http写Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-nar",
      version: "1.21.0"
    },
    description: "Writes the contents of a FlowFile to Elasticsearch, using the specified parameters such as the index to insert into and the type of the document.",
    descriptionName: "使用指定的参数，如要插入的索引和文档的类型，将FlowFile的内容写入Elasticsearch。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "elasticsearch",
      "upsert",
      "insert",
      "update",
      "http",
      "delete",
      "write",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.PutElasticsearchHttpRecord",
    typeName: "通过http将记录写入Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-nar",
      version: "1.21.0"
    },
    description: "Writes the records from a FlowFile into to Elasticsearch, using the specified parameters such as the index to insert into and the type of the document, as well as the operation type (index, upsert, delete, etc.). Note: The Bulk API is used to send the records. This means that the entire contents of the incoming flow file are read into memory, and each record is transformed into a JSON document which is added to a single HTTP request body. For very large flow files (files with a large number of records, e.g.), this could cause memory usage issues.",
    descriptionName: "将记录从FlowFile写入到Elasticsearch中，使用指定的参数，例如要插入的索引和文档的类型，以及操作类型(index，upsert，delete等)。注意:Bulk API用于发送记录。这意味着传入流文件的整个内容被读入内存，并且每个记录被转换为一个JSON文档，该文档被添加到单个HTTP请求体中。对于非常大的流文件(例如，具有大量记录的文件)，这可能会导致内存使用问题。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "elasticsearch",
      "record",
      "upsert",
      "insert",
      "update",
      "http",
      "delete",
      "write",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.PutElasticsearchJson",
    typeName: "使用官方rest客户端写Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: "An Elasticsearch put processor that uses the official Elastic REST client libraries.",
    descriptionName: "使用官方的Elastic REST客户端库的Elasticsearch put处理器。",
    restricted: !1,
    tags: [
      "elasticsearch",
      "elasticsearch7",
      "json",
      "elasticsearch8",
      "index",
      "elasticsearch5",
      "elasticsearch6",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.PutElasticsearchRecord",
    typeName: "使用官方rest客户端写Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: "A record-aware Elasticsearch put processor that uses the official Elastic REST client libraries.",
    descriptionName: "一个记录感知的Elasticsearch put处理器，使用官方的Elastic REST客户端库。",
    restricted: !1,
    tags: [
      "elasticsearch",
      "record",
      "elasticsearch7",
      "json",
      "elasticsearch8",
      "index",
      "elasticsearch5",
      "elasticsearch6",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutEmail",
    typeName: "发送邮件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Sends an e-mail to configured recipients for each incoming FlowFile",
    descriptionName: "为每个传入的FlowFile发送电子邮件给配置的收件人",
    restricted: !1,
    tags: [
      "smtp",
      "email",
      "put",
      "notify"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.PutFile",
    typeName: "写入文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Writes the contents of a FlowFile to the local file system",
    descriptionName: "将FlowFile的内容写入本地文件系统。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-filesystem",
          label: "write filesystem"
        },
        explanation: "Provides operator the ability to write to any file that NiFi has access to."
      }
    ],
    tags: [
      "restricted",
      "files",
      "archive",
      "copy",
      "put",
      "local",
      "filesystem"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutFTP",
    typeName: "写FTP",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Sends FlowFiles to an FTP Server",
    descriptionName: "向FTP服务器发送FlowFiles",
    restricted: !1,
    tags: [
      "ftp",
      "files",
      "archive",
      "copy",
      "remote",
      "put",
      "egress"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.mongodb.gridfs.PutGridFS",
    typeName: "写GridFS",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "Writes a file to a GridFS bucket.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "mongo",
      "file",
      "gridfs",
      "store",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.hbase.PutHBaseCell",
    typeName: "写HBase Cell",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "Adds the Contents of a FlowFile to HBase as the value of a single cell",
    descriptionName: "将一个FlowFile的Contents以单个cell的值添加到HBase中",
    restricted: !1,
    tags: [
      "hadoop",
      "hbase"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.hbase.PutHBaseJSON",
    typeName: "将json写入HBase",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "Adds rows to HBase based on the contents of incoming JSON documents. Each FlowFile must contain a single UTF-8 encoded JSON document, and any FlowFiles where the root element is not a single document will be routed to failure. Each JSON field name and value will become a column qualifier and value of the HBase row. Any fields with a null value will be skipped, and fields with a complex value will be handled according to the Complex Field Strategy. The row id can be specified either directly on the processor through the Row Identifier property, or can be extracted from the JSON document by specifying the Row Identifier Field Name property. This processor will hold the contents of all FlowFiles for the given batch in memory at one time.",
    descriptionName: "根据传入JSON文档的内容向HBase添加行。每个FlowFile必须包含一个UTF-8编码的JSON文档，任何根元素不是单个文档的FlowFiles都将被路由到失败。每个JSON字段名和值将成为一个列限定符和HBase行的值。任何具有空值的字段都将被跳过，而具有复杂值的字段将根据复杂字段策略进行处理。行id可以通过row Identifier属性直接在处理器上指定，也可以通过指定row Identifier Field Name属性从JSON文档中提取。这个处理器将一次在内存中保存给定批处理的所有FlowFiles的内容。",
    restricted: !1,
    tags: [
      "json",
      "hadoop",
      "hbase",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.hbase.PutHBaseRecord",
    typeName: "写HBase",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "Adds rows to HBase based on the contents of a flowfile using a configured record reader.",
    descriptionName: "使用配置的记录读取器，根据流文件的内容向HBase中添加行。",
    restricted: !1,
    tags: [
      "record",
      "hadoop",
      "hbase",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.hadoop.PutHDFS",
    typeName: "写HDFS",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hadoop-nar",
      version: "1.21.0"
    },
    description: "Write FlowFile data to Hadoop Distributed File System (HDFS)",
    descriptionName: "将FlowFile数据写入HDFS",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-distributed-filesystem",
          label: "write distributed filesystem"
        },
        explanation: "Provides operator the ability to delete any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "HDFS",
      "HCFS",
      "hadoop",
      "copy",
      "put",
      "filesystem"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.PutHTMLElement",
    typeName: "写HTML元素",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-html-nar",
      version: "1.21.0"
    },
    description: 'Places a new HTML element in the existing HTML DOM. The desired position for the new HTML element is specified by using CSS selector syntax. The incoming HTML is first converted into a HTML Document Object Model so that HTML DOM location may be located in a similar manner that CSS selectors are used to apply styles to HTML. The resulting HTML DOM is then "queried" using the user defined CSS selector string to find the position where the user desires to add the new HTML element. Once the new HTML element is added to the DOM it is rendered to HTML and the result replaces the flowfile content with the updated HTML. A more thorough reference for the CSS selector syntax can be found at "http://jsoup.org/apidocs/org/jsoup/select/Selector.html"',
    descriptionName: "在现有的HTML DOM中放置一个新的HTML元素。新HTML元素所需的位置是通过使用CSS选择器语法指定的。传入的HTML首先被转换成HTML文档对象模型，这样HTML DOM的位置就可以用类似于CSS选择器用于对HTML应用样式的方式来定位。然后使用用户定义的CSS选择器字符串“查询”生成的HTML DOM，以查找用户希望添加新HTML元素的位置。一旦新的HTML元素被添加到DOM中，它就被呈现为HTML，结果将用更新后的HTML替换流文件内容。关于CSS选择器语法的更全面的参考可以在“http://jsoup.org/apidocs/org/jsoup/select/Selector.html”找到。",
    restricted: !1,
    tags: [
      "css",
      "dom",
      "html",
      "put",
      "element"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.iceberg.PutIceberg",
    typeName: "",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-iceberg-processors-nar",
      version: "1.21.0"
    },
    description: "This processor uses Iceberg API to parse and load records into Iceberg tables. The incoming data sets are parsed with Record Reader Controller Service and ingested into an Iceberg table using the configured catalog service and provided table information. The target Iceberg table should already exist and it must have matching schemas with the incoming records, which means the Record Reader schema must contain all the Iceberg schema fields, every additional field which is not present in the Iceberg schema will be ignored. To avoid 'small file problem' it is recommended pre-appending a MergeRecord processor.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "orc",
      "record",
      "iceberg",
      "store",
      "parse",
      "put",
      "table",
      "parquet",
      "avro"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.PutJMS",
    typeName: "写ActiveMQ消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Creates a JMS Message from the contents of a FlowFile and sends the message to a ActiveMQ JMS Server.",
    descriptionName: "从FlowFile的内容创建JMS消息，并将消息发送到ActiveMQ JMS服务器。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "jms",
      "send",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.kudu.PutKudu",
    typeName: "写Kudu",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-kudu-nar",
      version: "1.21.0"
    },
    description: "Reads records from an incoming FlowFile using the provided Record Reader, and writes those records to the specified Kudu's table. The schema for the Kudu table is inferred from the schema of the Record Reader. If any error occurs while reading records from the input, or writing records to Kudu, the FlowFile will be routed to failure",
    descriptionName: "使用提供的Record Reader从传入的FlowFile读取记录，并将这些记录写入指定的Kudu表。Kudu表的模式是从Record Reader的模式推断出来的。如果在从输入读取记录或向Kudu写入记录时发生任何错误，FlowFile将被路由到失败",
    restricted: !1,
    tags: [
      "database",
      "NoSQL",
      "record",
      "HDFS",
      "kudu",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.mongodb.PutMongo",
    typeName: "写MongoDB",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "Writes the contents of a FlowFile to MongoDB",
    descriptionName: "将FlowFile的内容写入MongoDB",
    restricted: !1,
    tags: [
      "insert",
      "update",
      "mongodb",
      "write",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.mongodb.PutMongoRecord",
    typeName: "将记录写入MongoDB",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: 'This processor is a record-aware processor for inserting/upserting data into MongoDB. It uses a configured record reader and schema to read an incoming record set from the body of a flowfile and then inserts/upserts batches of those records into a configured MongoDB collection. This processor does not support deletes. The number of documents to insert/upsert at a time is controlled by the "Batch Size" configuration property. This value should be set to a reasonable size to ensure that MongoDB is not overloaded with too many operations at once.',
    descriptionName: "",
    restricted: !1,
    tags: [
      "record",
      "upsert",
      "insert",
      "update",
      "mongodb",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.parquet.PutParquet",
    typeName: "写入Parquet文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-parquet-nar",
      version: "1.21.0"
    },
    description: "Reads records from an incoming FlowFile using the provided Record Reader, and writes those records to a Parquet file. The schema for the Parquet file must be provided in the processor properties. This processor will first write a temporary dot file and upon successfully writing every record to the dot file, it will rename the dot file to it's final name. If the dot file cannot be renamed, the rename operation will be attempted up to 10 times, and if still not successful, the dot file will be deleted and the flow file will be routed to failure.  If any error occurs while reading records from the input, or writing records to the output, the entire dot file will be removed and the flow file will be routed to failure or retry, depending on the error.",
    descriptionName: "使用提供的Record Reader从传入的FlowFile读取记录，并将这些记录写入Parquet文件。Parquet文件的模式必须在处理器属性中提供。这个处理器将首先写入一个临时点文件，在成功地将每条记录写入点文件后，它将把点文件重命名为它的最终名称。如果不能重命名点文件，将尝试重命名操作最多10次，如果仍然不成功，将删除点文件，并将流程文件路由到失败。如果在从输入读取记录或将记录写入输出时发生任何错误，则整个点文件将被删除，流文件将被路由到失败或重试，具体取决于错误。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "write-distributed-filesystem",
          label: "write distributed filesystem"
        },
        explanation: "Provides operator the ability to write any file that NiFi has access to in HDFS or the local filesystem."
      }
    ],
    tags: [
      "restricted",
      "record",
      "HDFS",
      "hadoop",
      "put",
      "filesystem",
      "parquet"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutRecord",
    typeName: "写记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "The PutRecord processor uses a specified RecordReader to input (possibly multiple) records from an incoming flow file, and sends them to a destination specified by a Record Destination Service (i.e. record sink).",
    descriptionName: "PutRecord处理器使用指定的RecordReader从传入流文件中输入(可能是多个)记录，并将它们发送到记录目的地服务指定的目的地(即记录接收器)。",
    restricted: !1,
    tags: [
      "sink",
      "record",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.rethinkdb.PutRethinkDB",
    typeName: "写RethinkDB ",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-rethinkdb-nar",
      version: "1.21.0"
    },
    description: "Processor to write the JSON content of a FlowFile to RethinkDB (https://www.rethinkdb.com/). The flow file should contain either JSON Object an array of JSON documents",
    descriptionName: "",
    restricted: !1,
    tags: [
      "stream",
      "insert",
      "update",
      "rethinkdb",
      "write",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.riemann.PutRiemann",
    typeName: "写Riemann",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-riemann-nar",
      version: "1.21.0"
    },
    description: "Send events to Riemann (http://riemann.io) when FlowFiles pass through this processor. You can use events to notify Riemann that a FlowFile passed through, or you can attach a more meaningful metric, such as, the time a FlowFile took to get to this processor. All attributes attached to events support the NiFi Expression Language.",
    descriptionName: "发送事件给Riemann (http://riemann.io)当FlowFiles通过这个处理器。您可以使用事件通知Riemann FlowFile通过，或者您可以附加一个更有意义的度量，例如，FlowFile到达该处理器所花费的时间。所有附加到事件的属性都支持NiFi表达式语言。",
    restricted: !1,
    tags: [
      "riemann",
      "metrics",
      "monitoring"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.salesforce.PutSalesforceObject",
    typeName: "写Salesforce",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-salesforce-nar",
      version: "1.21.0"
    },
    description: "Creates new records for the specified Salesforce sObject. The type of the Salesforce object must be set in the input flowfile's 'objectType' attribute. This processor cannot update existing records.",
    descriptionName: "为指定的Salesforce对象创建新记录。Salesforce对象的类型必须在输入流文件的“objectType”属性中设置。此处理器无法更新现有记录。",
    restricted: !1,
    tags: [
      "salesforce",
      "put",
      "sobject"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutSFTP",
    typeName: "写SFTP文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Sends FlowFiles to an SFTP Server",
    descriptionName: "向SFTP服务器发送FlowFiles",
    restricted: !1,
    tags: [
      "files",
      "sftp",
      "archive",
      "copy",
      "remote",
      "put",
      "egress"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.slack.PutSlack",
    typeName: "写Slack",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-slack-nar",
      version: "1.21.0"
    },
    description: "Sends a message to your team on slack.com",
    descriptionName: "在slack.com上向你的团队发送消息",
    restricted: !1,
    tags: [
      "slack",
      "put",
      "notify"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.smb.PutSmbFile",
    typeName: "写Samba文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-smb-nar",
      version: "1.21.0"
    },
    description: "Writes the contents of a FlowFile to a samba network location. Use this processor instead of a cifs mounts if share access control is important.Configure the Hostname, Share and Directory accordingly: \\\\[Hostname]\\[Share]\\[path\\to\\Directory]",
    descriptionName: "将FlowFile的内容写入samba网络位置。如果共享访问控制很重要，请使用此处理器而不是cifs挂载。相应配置主机名、共享和目录:\\[Hostname][Share][path	oDirectory]",
    restricted: !1,
    tags: [
      "samba, smb, cifs, files, put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.solr.PutSolrContentStream",
    typeName: "流式写Solr",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-solr-nar",
      version: "1.21.0"
    },
    description: "Sends the contents of a FlowFile as a ContentStream to Solr",
    descriptionName: "将FlowFile的内容作为ContentStream发送到Solr",
    restricted: !1,
    tags: [
      "Solr",
      "Apache",
      "Put",
      "Send"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.solr.PutSolrRecord",
    typeName: "将记录写入Solr",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-solr-nar",
      version: "1.21.0"
    },
    description: "Indexes the Records from a FlowFile into Solr",
    descriptionName: "将FlowFile中的记录索引到Solr中",
    restricted: !1,
    tags: [
      "Solr",
      "Record",
      "Apache",
      "Put",
      "Send"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.splunk.PutSplunk",
    typeName: "写Splunk",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-splunk-nar",
      version: "1.21.0"
    },
    description: "Sends logs to Splunk Enterprise over TCP, TCP + TLS/SSL, or UDP. If a Message Delimiter is provided, then this processor will read messages from the incoming FlowFile based on the delimiter, and send each message to Splunk. If a Message Delimiter is not provided then the content of the FlowFile will be sent directly to Splunk as if it were a single message.",
    descriptionName: "通过TCP、TCP + TLS/SSL或UDP向Splunk Enterprise发送日志。如果提供了消息分隔符，则该处理器将根据分隔符从传入的FlowFile中读取消息，并将每条消息发送给Splunk。如果没有提供消息分隔符，那么FlowFile的内容将直接发送给Splunk，就好像它是一条消息一样。",
    restricted: !1,
    tags: [
      "tcp",
      "udp",
      "splunk",
      "logs"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.splunk.PutSplunkHTTP",
    typeName: "通过http写Splunk",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-splunk-nar",
      version: "1.21.0"
    },
    description: "Sends flow file content to the specified Splunk server over HTTP or HTTPS. Supports HEC Index Acknowledgement.",
    descriptionName: "通过HTTP或HTTPS协议将流文件内容发送到指定的Splunk服务器。支持HEC索引确认。",
    restricted: !1,
    tags: [
      "splunk",
      "http",
      "logs"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutSQL",
    typeName: "执行SQL",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Executes a SQL UPDATE or INSERT command. The content of an incoming FlowFile is expected to be the SQL command to execute. The SQL command may use the ? to escape parameters. In this case, the parameters to use must exist as FlowFile attributes with the naming convention sql.args.N.type and sql.args.N.value, where N is a positive integer. The sql.args.N.type is expected to be a number indicating the JDBC Type. The content of the FlowFile is expected to be in UTF-8 format.",
    descriptionName: "执行SQL UPDATE或INSERT命令。传入FlowFile的内容应该是要执行的SQL命令。SQL命令可以使用？以转义参数。在这种情况下，要使用的参数必须以FlowFile属性的形式存在，命名约定为sql.args.N.type和sql.args.N.value，其中N是正整数。sql.args.N.type应该是一个指示JDBC类型的数字。FlowFile的内容应为UTF-8格式。",
    restricted: !1,
    tags: [
      "database",
      "rdbms",
      "update",
      "insert",
      "relational",
      "put",
      "sql"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.PutSyslog",
    typeName: "写Syslog",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `Sends Syslog messages to a given host and port over TCP or UDP. Messages are constructed from the "Message ___" properties of the processor which can use expression language to generate messages from incoming FlowFiles. The properties are used to construct messages of the form: (<PRIORITY>)(VERSION )(TIMESTAMP) (HOSTNAME) (BODY) where version is optional.  The constructed messages are checked against regular expressions for RFC5424 and RFC3164 formatted messages. The timestamp can be an RFC5424 timestamp with a format of "yyyy-MM-dd'T'HH:mm:ss.SZ" or "yyyy-MM-dd'T'HH:mm:ss.S+hh:mm", or it can be an RFC3164 timestamp with a format of "MMM d HH:mm:ss". If a message is constructed that does not form a valid Syslog message according to the above description, then it is routed to the invalid relationship. Valid messages are sent to the Syslog server and successes are routed to the success relationship, failures routed to the failure relationship.`,
    descriptionName: "通过TCP或UDP向指定主机和端口发送Syslog消息。消息是由处理器的“Message ___”属性构造的，处理器可以使用表达式语言从传入的FlowFiles中生成消息。这些属性用于构造如下形式的消息:(<PRIORITY>)(VERSION)(TIMESTAMP) (HOSTNAME) (BODY)，其中VERSION是可选的。根据RFC5424和RFC3164格式消息的正则表达式检查构造的消息。时间戳可以是RFC5424时间戳，格式为“yyyy-MM-dd'T”hh:mm:ss。“SZ”或“yyyy-MM-dd'T”hh:mm:ss。S+hh:mm”，也可以是格式为“MMM d hh:mm:ss”的RFC3164时间戳。如果根据上述描述构造的消息不能形成有效的Syslog消息，则将其路由到无效关系。有效的消息被发送到Syslog服务器，成功消息被路由到成功关系，失败消息被路由到失败关系。",
    restricted: !1,
    tags: [
      "udp",
      "tcp",
      "syslog",
      "logs",
      "put"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutTCP",
    typeName: "写TCP",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'The PutTCP processor receives a FlowFile and transmits the FlowFile content over a TCP connection to the configured TCP server. By default, the FlowFiles are transmitted over the same TCP connection (or pool of TCP connections if multiple input threads are configured). To assist the TCP server with determining message boundaries, an optional "Outgoing Message Delimiter" string can be configured which is appended to the end of each FlowFiles content when it is transmitted over the TCP connection. An optional "Connection Per FlowFile" parameter can be specified to change the behaviour so that each FlowFiles content is transmitted over a single TCP connection which is opened when the FlowFile is received and closed after the FlowFile has been sent. This option should only be used for low message volume scenarios, otherwise the platform may run out of TCP sockets.',
    descriptionName: "PutTCP处理器接收一个FlowFile，并通过TCP连接将FlowFile的内容发送到已配置的TCP服务器。默认情况下，FlowFiles通过相同的TCP连接(或配置多个输入线程的TCP连接池)传输。为了帮助TCP服务器确定消息边界，可以配置一个可选的“传出消息分隔符”字符串，该字符串在通过TCP连接传输时附加到每个FlowFiles内容的末尾。可以指定一个可选的“Connection Per FlowFile”参数来改变行为，以便每个FlowFiles内容通过单个TCP连接传输，该连接在接收FlowFile时打开，在发送FlowFile后关闭。此选项应仅用于低消息量场景，否则平台可能会耗尽TCP套接字。",
    restricted: !1,
    tags: [
      "tcp",
      "remote",
      "put",
      "egress"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.standard.PutUDP",
    typeName: "写UDP",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "The PutUDP processor receives a FlowFile and packages the FlowFile content into a single UDP datagram packet which is then transmitted to the configured UDP server. The user must ensure that the FlowFile content being fed to this processor is not larger than the maximum size for the underlying UDP transport. The maximum transport size will vary based on the platform setup but is generally just under 64KB. FlowFiles will be marked as failed if their content is larger than the maximum transport size.",
    descriptionName: "PutUDP处理器接收FlowFile并将FlowFile内容打包成单个UDP数据包，然后传输到配置的UDP服务器。用户必须确保提供给该处理器的FlowFile内容不大于底层UDP传输的最大大小。最大传输大小将根据平台设置而有所不同，但通常略低于64KB。如果FlowFiles的内容大于最大传输大小，则将其标记为失败。",
    restricted: !1,
    tags: [
      "udp",
      "remote",
      "put",
      "egress"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.websocket.PutWebSocket",
    typeName: "写WebSocket",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-websocket-processors-nar",
      version: "1.21.0"
    },
    description: "Sends messages to a WebSocket remote endpoint using a WebSocket session that is established by either ListenWebSocket or ConnectWebSocket.",
    descriptionName: "使用由ListenWebSocket或ConnectWebSocket建立的WebSocket会话向WebSocket远程端点发送消息。",
    restricted: !1,
    tags: [
      "publish",
      "send",
      "WebSocket"
    ],
    classifyName: "写入/写出"
  },
  {
    type: "org.apache.nifi.processors.airtable.QueryAirtableTable",
    typeName: "查询Airtable表",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-airtable-nar",
      version: "1.21.0"
    },
    description: "Query records from an Airtable table. Records are incrementally retrieved based on the last modified time of the records. Records can also be further filtered by setting the 'Custom Filter' property which supports the formulas provided by the Airtable API. This processor is intended to be run on the Primary Node only.",
    descriptionName: "查询Airtable表中的记录。根据记录的最后修改时间增量检索记录。还可以通过设置“Custom Filter”属性来进一步过滤记录，该属性支持Airtable API提供的公式。这个处理器只打算在主节点上运行。",
    restricted: !1,
    tags: [
      "database",
      "query",
      "airtable"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.cassandra.QueryCassandra",
    typeName: "查询Cassandra ",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cassandra-nar",
      version: "1.21.0"
    },
    description: "Execute provided Cassandra Query Language (CQL) select query on a Cassandra 1.x, 2.x, or 3.0.x cluster. Query result may be converted to Avro or JSON format. Streaming is used so arbitrarily large result sets are supported. This processor can be scheduled to run on a timer, or cron expression, using the standard scheduling methods, or it can be triggered by an incoming FlowFile. If it is triggered by an incoming FlowFile, then attributes of that FlowFile will be available when evaluating the select query. FlowFile attribute 'executecql.row.count' indicates how many rows were selected.",
    descriptionName: "在一个1.x, 2.X或3.0 Cassandra集群上执行提供的CQL选择查询。查询结果可能会转换为Avro或JSON格式。使用流，因此支持任意大的结果集。该处理器可以使用标准调度方法在计时器或cron表达式上调度运行，也可以由传入的FlowFile触发。如果它是由传入的FlowFile触发的，那么在评估选择查询时，该FlowFile的属性将可用。FlowFile属性'executecql.row '。“Count”表示选择了多少行。",
    restricted: !1,
    tags: [
      "select",
      "cassandra",
      "cql"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.standard.QueryDatabaseTable",
    typeName: "查询数据库表",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Generates a SQL select query, or uses a provided statement, and executes it to fetch all rows whose values in the specified Maximum Value column(s) are larger than the previously-seen maxima. Query result will be converted to Avro format. Expression Language is supported for several properties, but no incoming connections are permitted. The Variable Registry may be used to provide values for any property containing Expression Language. If it is desired to leverage flow file attributes to perform these queries, the GenerateTableFetch and/or ExecuteSQL processors can be used for this purpose. Streaming is used so arbitrarily large result sets are supported. This processor can be scheduled to run on a timer or cron expression, using the standard scheduling methods. This processor is intended to be run on the Primary Node only. FlowFile attribute 'querydbtable.row.count' indicates how many rows were selected.",
    descriptionName: "生成一个SQL选择查询，或者使用提供的语句，并执行它来获取指定的最大值列中值大于前面看到的最大值的所有行。查询结果将被转换为Avro格式。几个属性支持表达式语言，但不允许传入连接。变量注册表可用于为包含表达式语言的任何属性提供值。如果希望利用流文件属性来执行这些查询，可以使用GenerateTableFetch和/或ExecuteSQL处理器来实现这一目的。使用流，因此支持任意大的结果集。可以使用标准调度方法将该处理器调度为在计时器或cron表达式上运行。这个处理器只打算在主节点上运行。querydbtable.row。“Count”表示选择了多少行。",
    restricted: !1,
    tags: [
      "database",
      "select",
      "query",
      "jdbc",
      "sql"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.standard.QueryDatabaseTableRecord",
    typeName: "查询数据库表记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Generates a SQL select query, or uses a provided statement, and executes it to fetch all rows whose values in the specified Maximum Value column(s) are larger than the previously-seen maxima. Query result will be converted to the format specified by the record writer. Expression Language is supported for several properties, but no incoming connections are permitted. The Variable Registry may be used to provide values for any property containing Expression Language. If it is desired to leverage flow file attributes to perform these queries, the GenerateTableFetch and/or ExecuteSQL processors can be used for this purpose. Streaming is used so arbitrarily large result sets are supported. This processor can be scheduled to run on a timer or cron expression, using the standard scheduling methods. This processor is intended to be run on the Primary Node only. FlowFile attribute 'querydbtable.row.count' indicates how many rows were selected.",
    descriptionName: "生成一个SQL选择查询，或者使用提供的语句，并执行它来获取指定的最大值列中值大于前面看到的最大值的所有行。查询结果将被转换为记录编写者指定的格式。几个属性支持表达式语言，但不允许传入连接。变量注册表可用于为包含表达式语言的任何属性提供值。如果希望利用流文件属性来执行这些查询，可以使用GenerateTableFetch和/或ExecuteSQL处理器来实现这一目的。使用流，因此支持任意大的结果集。可以使用标准调度方法将该处理器调度为在计时器或cron表达式上运行。这个处理器只打算在主节点上运行。querydbtable.row。“Count”表示选择了多少行。",
    restricted: !1,
    tags: [
      "database",
      "select",
      "query",
      "record",
      "jdbc",
      "sql"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.enrich.QueryDNS",
    typeName: "查询DNS",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-enrich-nar",
      version: "1.21.0"
    },
    description: "A powerful DNS query processor primary designed to enrich DataFlows with DNS based APIs (e.g. RBLs, ShadowServer's ASN lookup) but that can be also used to perform regular DNS lookups.",
    descriptionName: "一个强大的DNS查询处理器，主要设计用于丰富基于DNS api的数据流(例如rbl, ShadowServer的ASN查找)，但也可用于执行常规DNS查找。",
    restricted: !1,
    tags: [
      "ip",
      "dns",
      "enrich"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.QueryElasticsearchHttp",
    typeName: "http方式查询Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-nar",
      version: "1.21.0"
    },
    description: "Queries Elasticsearch using the specified connection properties. Note that the full body of each page of documents will be read into memory before being written to Flow Files for transfer.  Also note that the Elasticsearch max_result_window index setting is the upper bound on the number of records that can be retrieved using this query.  To retrieve more records, use the ScrollElasticsearchHttp processor.",
    descriptionName: "使用指定的连接属性查询Elasticsearch。请注意，文档的每一页的全文将在写入流文件进行传输之前被读入内存。还要注意，Elasticsearch max_result_window索引设置是可以使用此查询检索的记录数量的上限。要检索更多记录，请使用ScrollElasticsearchHttp处理器。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "read",
      "elasticsearch",
      "query",
      "get",
      "http"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.standard.QueryRecord",
    typeName: "查询记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Evaluates one or more SQL queries against the contents of a FlowFile. The result of the SQL query then becomes the content of the output FlowFile. This can be used, for example, for field-specific filtering, transformation, and row-level filtering. Columns can be renamed, simple calculations and aggregations performed, etc. The Processor is configured with a Record Reader Controller Service and a Record Writer service so as to allow flexibility in incoming and outgoing data formats. The Processor must be configured with at least one user-defined property. The name of the Property is the Relationship to route data to, and the value of the Property is a SQL SELECT statement that is used to specify how input data should be transformed/filtered. The SQL statement must be valid ANSI SQL and is powered by Apache Calcite. If the transformation fails, the original FlowFile is routed to the 'failure' relationship. Otherwise, the data selected will be routed to the associated relationship. If the Record Writer chooses to inherit the schema from the Record, it is important to note that the schema that is inherited will be from the ResultSet, rather than the input Record. This allows a single instance of the QueryRecord processor to have multiple queries, each of which returns a different set of columns and aggregations. As a result, though, the schema that is derived will have no schema name, so it is important that the configured Record Writer not attempt to write the Schema Name as an attribute if inheriting the Schema from the Record. See the Processor Usage documentation for more information.",
    descriptionName: "根据FlowFile的内容计算一个或多个SQL查询。然后，SQL查询的结果成为输出FlowFile的内容。例如，这可用于特定于字段的过滤、转换和行级过滤。可以重命名列，执行简单的计算和聚合等。处理器配置了一个记录读取器控制器服务和一个记录写入器服务，以便在输入和输出数据格式方面具有灵活性。处理器必须配置至少一个用户定义的属性。属性的名称是要将数据路由到的关系，属性的值是一个SQL SELECT语句，用于指定如何转换/过滤输入数据。SQL语句必须是有效的ANSI SQL，并且由Apache Calcite提供支持。如果转换失败，原始的FlowFile将被路由到“失败”关系。否则，所选数据将被路由到关联关系。如果Record Writer选择从Record继承模式，请注意继承的模式将来自ResultSet，而不是输入Record，这一点很重要。这允许QueryRecord处理器的单个实例具有多个查询，每个查询返回一组不同的列和聚合。因此，派生的模式将没有模式名称，因此，如果从记录继承了模式，则配置的Record Writer不要尝试将模式名称作为属性写入，这一点很重要。有关更多信息，请参阅处理器使用文档。",
    restricted: !1,
    tags: [
      "select",
      "query",
      "csv",
      "update",
      "calcite",
      "sql",
      "aggregate",
      "filter",
      "modify",
      "transform",
      "route",
      "record",
      "json",
      "text",
      "etl",
      "logs",
      "avro"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.salesforce.QuerySalesforceObject",
    typeName: "查询Salesforce",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-salesforce-nar",
      version: "1.21.0"
    },
    description: "Retrieves records from a Salesforce sObject. Users can add arbitrary filter conditions by setting the 'Custom WHERE Condition' property. The processor can also run a custom query, although record processing is not supported in that case. Supports incremental retrieval: users can define a field in the 'Age Field' property that will be used to determine when the record was created. When this property is set the processor will retrieve new records. It's also possible to define an initial cutoff value for the age, filtering out all older records even for the first run. In case of 'Property Based Query' this processor should run on the Primary Node only. FlowFile attribute 'record.count' indicates how many records were retrieved and written to the output. By using 'Custom Query', the processor can accept an optional input flowfile and reference the flowfile attributes in the query. However, incremental loading and record-based processing are not supported in this scenario.",
    descriptionName: "",
    restricted: !1,
    tags: [
      "salesforce",
      "soql",
      "query",
      "sobject"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.solr.QuerySolr",
    typeName: "查询Solr",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-solr-nar",
      version: "1.21.0"
    },
    description: "Queries Solr and outputs the results as a FlowFile in the format of XML or using a Record Writer",
    descriptionName: "查询Solr并以XML格式或使用Record Writer将结果输出为FlowFile",
    restricted: !1,
    tags: [
      "Query",
      "Solr",
      "Get",
      "Apache",
      "Records"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.splunk.QuerySplunkIndexingStatus",
    typeName: "查询Splunk索引状态",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-splunk-nar",
      version: "1.21.0"
    },
    description: "Queries Splunk server in order to acquire the status of indexing acknowledgement.",
    descriptionName: "查询Splunk服务器以获取索引确认状态。",
    restricted: !1,
    tags: [
      "acknowledgement",
      "splunk",
      "http",
      "logs"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.enrich.QueryWhois",
    typeName: "查询whois API",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-enrich-nar",
      version: "1.21.0"
    },
    description: "A powerful whois query processor primary designed to enrich DataFlows with whois based APIs (e.g. ShadowServer's ASN lookup) but that can be also used to perform regular whois lookups.",
    descriptionName: "一个强大的whois查询处理器，主要用于丰富基于whois api的数据流(例如ShadowServer的ASN查找)，但也可以用于执行常规的whois查找。",
    restricted: !1,
    tags: [
      "whois",
      "ip",
      "enrich"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.standard.ReplaceText",
    typeName: "替换文本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Updates the content of a FlowFile by searching for some textual value in the FlowFile content (via Regular Expression/regex, or literal value) and replacing the section of the content that matches with some alternate value. It can also be used to append or prepend text to the contents of a FlowFile.",
    descriptionName: "更新FlowFile的内容，通过搜索FlowFile内容中的一些文本值(通过正则表达式/正则表达式，或文字值)，并替换与一些替代值匹配的内容部分。它还可以用于向FlowFile的内容追加或追加文本。",
    restricted: !1,
    tags: [
      "Regular Expression",
      "Replace",
      "Regex",
      "Text",
      "Modify",
      "Change",
      "Update"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.ReplaceTextWithMapping",
    typeName: "使用给定映射替换文本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Updates the content of a FlowFile by evaluating a Regular Expression against it and replacing the section of the content that matches the Regular Expression with some alternate value provided in a mapping file.",
    descriptionName: "更新FlowFile的内容，方法是对其计算正则表达式，并用映射文件中提供的一些替代值替换与正则表达式匹配的内容部分。",
    restricted: !1,
    tags: [
      "Regular Expression",
      "Replace",
      "Regex",
      "Text",
      "Modify",
      "Mapping",
      "Change",
      "Update"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.RetryFlowFile",
    typeName: "重试",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "FlowFiles passed to this Processor have a 'Retry Attribute' value checked against a configured 'Maximum Retries' value. If the current attribute value is below the configured maximum, the FlowFile is passed to a retry relationship. The FlowFile may or may not be penalized in that condition. If the FlowFile's attribute value exceeds the configured maximum, the FlowFile will be passed to a 'retries_exceeded' relationship. WARNING: If the incoming FlowFile has a non-numeric value in the configured 'Retry Attribute' attribute, it will be reset to '1'. You may choose to fail the FlowFile instead of performing the reset. Additional dynamic properties can be defined for any attributes you wish to add to the FlowFiles transferred to 'retries_exceeded'. These attributes support attribute expression language.",
    descriptionName: "传递给此处理器的FlowFiles有一个“重试属性”值，根据配置的“最大重试”值进行检查。如果当前属性值低于配置的最大值，则将FlowFile传递给重试关系。在这种情况下，FlowFile可能会受到惩罚，也可能不会。如果FlowFile的属性值超过了配置的最大值，FlowFile将被传递到一个'retries_exceeded'关系。警告:如果传入的FlowFile在配置的“重试属性”属性中有一个非数字值，它将被重置为“1”。您可以选择使FlowFile失败，而不是执行重置。可以为您希望添加到传输到“retries_exceeded”的FlowFiles的任何属性定义额外的动态属性。这些属性支持属性表达式语言。",
    restricted: !1,
    tags: [
      "FlowFile",
      "Retry"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.hl7.RouteHL7",
    typeName: "路由HL7数据",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hl7-nar",
      version: "1.21.0"
    },
    description: "Routes incoming HL7 data according to user-defined queries. To add a query, add a new property to the processor. The name of the property will become a new relationship for the processor, and the value is an HL7 Query Language query. If a FlowFile matches the query, a copy of the FlowFile will be routed to the associated relationship.",
    descriptionName: "根据用户定义的查询路由传入的HL7数据。要添加查询，请向处理器添加一个新属性。属性的名称将成为处理器的新关系，值是HL7 Query Language查询。如果一个FlowFile匹配查询，一个FlowFile的副本将被路由到关联关系。",
    restricted: !1,
    tags: [
      "HL7",
      "route",
      "healthcare",
      "Health Level 7"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.RouteOnAttribute",
    typeName: "根据属性路由",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Routes FlowFiles based on their Attributes using the Attribute Expression Language",
    descriptionName: "使用属性表达式语言根据流文件的属性路由流文件",
    restricted: !1,
    tags: [
      "regexp",
      "string",
      "Attribute Expression Language",
      "detect",
      "Regular Expression",
      "filter",
      "routing",
      "regex",
      "Expression Language",
      "search",
      "find",
      "attributes",
      "text"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.RouteOnContent",
    typeName: "根据内容路由",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Applies Regular Expressions to the content of a FlowFile and routes a copy of the FlowFile to each destination whose Regular Expression matches. Regular Expressions are added as User-Defined Properties where the name of the property is the name of the relationship and the value is a Regular Expression to match against the FlowFile content. User-Defined properties do support the Attribute Expression Language, but the results are interpreted as literal values, not Regular Expressions",
    descriptionName: "将正则表达式应用于FlowFile的内容，并将FlowFile的副本路由到正则表达式匹配的每个目的地。正则表达式作为用户自定义属性添加，其中属性的名称是关系的名称，值是与FlowFile内容匹配的正则表达式。用户定义属性确实支持属性表达式语言，但结果被解释为文字值，而不是正则表达式",
    restricted: !1,
    tags: [
      "filter",
      "regexp",
      "regex",
      "search",
      "route",
      "string",
      "find",
      "detect",
      "regular expression",
      "text",
      "content"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.RouteText",
    typeName: "路由文本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Routes textual data based on a set of user-defined rules. Each line in an incoming FlowFile is compared against the values specified by user-defined Properties. The mechanism by which the text is compared to these user-defined properties is defined by the 'Matching Strategy'. The data is then routed according to these rules, routing each line of the text individually.",
    descriptionName: "基于一组用户定义的规则路由文本数据。传入FlowFile中的每一行都与用户定义的属性指定的值进行比较。将文本与这些用户定义属性进行比较的机制由“匹配策略”定义。然后根据这些规则路由数据，单独路由文本的每一行。",
    restricted: !1,
    tags: [
      "regexp",
      "string",
      "csv",
      "delimited",
      "detect",
      "Regular Expression",
      "filter",
      "routing",
      "regex",
      "Expression Language",
      "search",
      "find",
      "attributes",
      "text",
      "logs"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.mongodb.RunMongoAggregation",
    typeName: "聚合MongoDB查询",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-mongodb-nar",
      version: "1.21.0"
    },
    description: "A processor that runs an aggregation query whenever a flowfile is received.",
    descriptionName: "一种处理器，在接收到流文件时运行聚合查询。",
    restricted: !1,
    tags: [
      "mongo",
      "aggregation",
      "aggregate"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.SampleRecord",
    typeName: "采样记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Samples the records of a FlowFile based on a specified sampling strategy (such as Reservoir Sampling). The resulting FlowFile may be of a fixed number of records (in the case of reservoir-based algorithms) or some subset of the total number of records (in the case of probabilistic sampling), or a deterministic number of records (in the case of interval sampling).",
    descriptionName: "根据指定的采样策略(如Reservoir sampling)对FlowFile的记录进行采样。生成的FlowFile可能包含固定数量的记录(在基于储层的算法中)，或者是记录总数的某个子集(在概率抽样的情况下)，或者是确定数量的记录(在间隔抽样的情况下)。",
    restricted: !1,
    tags: [
      "record",
      "range",
      "interval",
      "reservoir",
      "sample"
    ]
  },
  {
    type: "com.hanyun.processors.sap.SAPProcessor",
    typeName: "sap服务接入",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-sap-nar",
      version: "1.0"
    },
    description: "A custom NiFi processor that connects to a SAP system via RFC and executes a specific function module.",
    descriptionName: "一个自定义NiFi处理器，通过RFC连接到SAP系统，并执行特定的函数模块。",
    restricted: !1,
    tags: [
      "SAP",
      "Custom Processor",
      "RFC"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.ScanAttribute",
    typeName: "扫描属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Scans the specified attributes of FlowFiles, checking to see if any of their values are present within the specified dictionary of terms",
    descriptionName: "扫描FlowFiles的指定属性，检查它们的值是否存在于指定的术语字典中",
    restricted: !1,
    tags: [
      "lookup",
      "search",
      "find",
      "scan",
      "attributes",
      "text"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.ScanContent",
    typeName: "扫描内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Scans the content of FlowFiles for terms that are found in a user-supplied dictionary. If a term is matched, the UTF-8 encoded version of the term will be added to the FlowFile using the 'matching.term' attribute",
    descriptionName: "扫描FlowFiles的内容，查找在用户提供的字典中找到的术语。如果一个术语被匹配，该术语的UTF-8编码版本将使用'匹配'添加到FlowFile。术语“属性",
    restricted: !1,
    tags: [
      "byte sequence",
      "search",
      "dictionary",
      "find",
      "scan",
      "aho-corasick",
      "content"
    ]
  },
  {
    type: "org.apache.nifi.hbase.ScanHBase",
    typeName: "扫描HBase",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-hbase-nar",
      version: "1.21.0"
    },
    description: "Scans and fetches rows from an HBase table. This processor may be used to fetch rows from hbase table by specifying a range of rowkey values (start and/or end ),by time range, by filter expression, or any combination of them. Order of records can be controlled by a property ReversedNumber of rows retrieved by the processor can be limited.",
    descriptionName: "从HBase表中扫描和获取行。该处理器可以通过指定rowkey值的范围(start和/或end)、时间范围、过滤器表达式或它们的任何组合来从hbase表中获取行。记录的顺序可以通过reversedproperty来控制。处理器检索的行数可以受到限制。",
    restricted: !1,
    tags: [
      "fetch",
      "get",
      "scan",
      "hbase"
    ]
  },
  {
    type: "org.apache.nifi.processors.script.ScriptedFilterRecord",
    typeName: "脚本过滤",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-scripting-nar",
      version: "1.21.0"
    },
    description: 'This processor provides the ability to filter records out from FlowFiles using the user-provided script. Every record will be evaluated by the script which must return with a boolean value. Records with "true" result will be routed to the "matching" relationship in a batch. Other records will be filtered out.',
    descriptionName: "该处理器提供了使用用户提供的脚本从FlowFiles中过滤记录的能力。每条记录都将由脚本计算，脚本必须返回一个布尔值。结果为“true”的记录将被路由到批处理中的“匹配”关系。其他记录将被过滤掉。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "filter",
      "python",
      "groovy",
      "jython",
      "restricted",
      "record",
      "script"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.script.ScriptedPartitionRecord",
    typeName: "脚本分区",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-scripting-nar",
      version: "1.21.0"
    },
    description: "Receives Record-oriented data (i.e., data that can be read by the configured Record Reader) and evaluates the user provided script against each record in the incoming flow file. Each record is then grouped with other records sharing the same partition and a FlowFile is created for each groups of records. Two records shares the same partition if the evaluation of the script results the same return value for both. Those will be considered as part of the same partition.",
    descriptionName: "接收面向记录的数据(即，可由配置的Record Reader读取的数据)，并根据传入流文件中的每个记录评估用户提供的脚本。然后将每条记录与共享同一分区的其他记录分组，并为每组记录创建一个FlowFile。如果对脚本的求值结果相同，则两条记录共享同一分区。它们将被视为同一分区的一部分。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "python",
      "partition",
      "groovy",
      "jython",
      "split",
      "organize",
      "restricted",
      "record",
      "segment",
      "script",
      "group"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.script.ScriptedTransformRecord",
    typeName: "脚本转换",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-scripting-nar",
      version: "1.21.0"
    },
    description: "Provides the ability to evaluate a simple script against each record in an incoming FlowFile. The script may transform the record in some way, filter the record, or fork additional records. See Processor's Additional Details for more information.",
    descriptionName: "提供针对传入FlowFile中的每个记录评估简单脚本的能力。脚本可以以某种方式转换记录，过滤记录，或者派生其他记录。有关更多信息，请参阅处理器的附加详细信息。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "filter",
      "modify",
      "transform",
      "python",
      "groovy",
      "jython",
      "restricted",
      "record",
      "update",
      "script"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.script.ScriptedValidateRecord",
    typeName: "脚本验证",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-scripting-nar",
      version: "1.21.0"
    },
    description: 'This processor provides the ability to validate records in FlowFiles using the user-provided script. The script is expected to have a record as incoming argument and return with a boolean value. Based on this result, the processor categorizes the records as "valid" or "invalid" and routes them to the respective relationship in batch. Additionally the original FlowFile will be routed to the "original" relationship or in case of unsuccessful processing, to the "failed" relationship.',
    descriptionName: "该处理器提供了使用用户提供的脚本验证FlowFiles中的记录的能力。该脚本预计将有一个记录作为传入参数，并返回一个布尔值。基于此结果，处理器将记录分类为“有效”或“无效”，并将它们批量路由到各自的关系。此外，原始FlowFile将被路由到“原始”关系，或者在处理不成功的情况下，路由到“失败”关系。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "execute-code",
          label: "execute code"
        },
        explanation: "Provides operator the ability to execute arbitrary code assuming all permissions that NiFi has."
      }
    ],
    tags: [
      "python",
      "groovy",
      "jython",
      "restricted",
      "record",
      "script",
      "validate"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.ScrollElasticsearchHttp",
    typeName: "Scroll方式查询Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-nar",
      version: "1.21.0"
    },
    description: 'Scrolls through an Elasticsearch query using the specified connection properties. This processor is intended to be run on the primary node, and is designed for scrolling through huge result sets, as in the case of a reindex.  The state must be cleared before another query can be run.  Each page of results is returned, wrapped in a JSON object like so: { "hits" : [ <doc1>, <doc2>, <docn> ] }.  Note that the full body of each page of documents will be read into memory before being written to a Flow File for transfer.',
    descriptionName: "使用指定的连接属性滚动Elasticsearch查询。该处理器旨在在主节点上运行，并设计用于滚动巨大的结果集，如在重新索引的情况下。在运行另一个查询之前，必须清除该状态。返回结果的每一页，包装在JSON对象中，如下所示:{“hits”: [<doc1>， <doc2>， <docn>]}。请注意，文档的每页的正文将在写入流文件进行传输之前被读入内存。",
    restricted: !1,
    deprecationReason: "This processor is deprecated and may be removed in future releases.",
    tags: [
      "read",
      "elasticsearch",
      "query",
      "get",
      "scroll",
      "http"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.SearchElasticsearch",
    typeName: "搜索Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: 'A processor that allows the user to repeatedly run a paginated query (with aggregations) written with the Elasticsearch JSON DSL. Search After/Point in Time queries must include a valid "sort" field. The processor will retrieve multiple pages of results until either no more results are available or the Pagination Keep Alive expiration is reached, after which the query will restart with the first page of results being retrieved.',
    descriptionName: "允许用户重复运行用Elasticsearch JSON DSL编写的分页查询(带聚合)的处理器。搜索后/时间点查询必须包含有效的“sort”字段。处理器将检索结果的多个页面，直到没有更多的结果可用或达到Pagination Keep Alive过期为止，之后查询将重新启动，检索结果的第一页。",
    restricted: !1,
    tags: [
      "search",
      "elasticsearch",
      "query",
      "elasticsearch7",
      "scroll",
      "elasticsearch8",
      "json",
      "elasticsearch5",
      "elasticsearch6",
      "page"
    ],
    classifyName: "查询"
  },
  {
    type: "org.apache.nifi.processors.standard.SegmentContent",
    typeName: "内容分段",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Segments a FlowFile into multiple smaller segments on byte boundaries. Each segment is given the following attributes: fragment.identifier, fragment.index, fragment.count, segment.original.filename; these attributes can then be used by the MergeContent processor in order to reconstitute the original FlowFile",
    descriptionName: "将FlowFile在字节边界上分割成多个较小的段。每个片段被赋予以下属性:片段。标识符,片段。指数,片段。数,segment.original.filename;然后，MergeContent处理器可以使用这些属性来重建原始的FlowFile",
    restricted: !1,
    tags: [
      "split",
      "segment"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.snmp.processors.SendTrapSNMP",
    typeName: "发送SNMP消息",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-snmp-nar",
      version: "1.21.0"
    },
    description: "Sends information to SNMP Manager.",
    descriptionName: "向SNMP Manager发送信息。",
    restricted: !1,
    tags: [
      "snmp",
      "trap",
      "send"
    ],
    classifyName: "推送"
  },
  {
    type: "org.apache.nifi.snmp.processors.SetSNMP",
    typeName: "执行SNMP Set请求",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-snmp-nar",
      version: "1.21.0"
    },
    description: "Based on incoming FlowFile attributes, the processor will execute SNMP Set requests. When finding attributes with the name snmp$<OID>, the processor will attempt to set the value of the attribute to the corresponding OID given in the attribute name.",
    descriptionName: "基于传入的FlowFile属性，处理器将执行SNMP Set请求。当找到名称为snmp$<OID>的属性时，处理器将尝试将该属性的值设置为属性名称中给出的相应OID。",
    restricted: !1,
    tags: [
      "set",
      "snmp",
      "oid"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.pgp.SignContentPGP",
    typeName: "OpenPGP签名",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-pgp-nar",
      version: "1.21.0"
    },
    description: "Sign content using OpenPGP Private Keys",
    descriptionName: "使用OpenPGP私钥签名内容",
    restricted: !1,
    tags: [
      "OpenPGP",
      "Signing",
      "PGP",
      "RFC 4880",
      "Encryption",
      "GPG"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.avro.SplitAvro",
    typeName: "拆分Avro",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-avro-nar",
      version: "1.21.0"
    },
    description: "Splits a binary encoded Avro datafile into smaller files based on the configured Output Size. The Output Strategy determines if the smaller files will be Avro datafiles, or bare Avro records with metadata in the FlowFile attributes. The output will always be binary encoded.",
    descriptionName: "根据配置的输出大小将二进制编码的Avro数据文件拆分为更小的文件。输出策略决定较小的文件是Avro数据文件，还是带有FlowFile属性的元数据的Avro记录。输出将始终是二进制编码。",
    restricted: !1,
    tags: [
      "split",
      "avro"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.SplitContent",
    typeName: "拆分内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Splits incoming FlowFiles by a specified byte sequence",
    descriptionName: "按指定的字节序列拆分传入的FlowFiles",
    restricted: !1,
    tags: [
      "split",
      "binary",
      "content"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.SplitJson",
    typeName: "拆分json",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Splits a JSON File into multiple, separate FlowFiles for an array element specified by a JsonPath expression. Each generated FlowFile is comprised of an element of the specified array and transferred to relationship 'split,' with the original file transferred to the 'original' relationship. If the specified JsonPath is not found or does not evaluate to an array element, the original file is routed to 'failure' and no files are generated.",
    descriptionName: "为JsonPath表达式指定的数组元素将JSON文件拆分为多个独立的FlowFiles。每个生成的FlowFile由指定数组中的一个元素组成，并转移到关系“拆分”中，原始文件转移到“原始”关系中。如果未找到指定的JsonPath或未计算为数组元素，则原始文件将被路由到“失败”并且不生成任何文件。",
    restricted: !1,
    tags: [
      "split",
      "jsonpath",
      "json"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.SplitRecord",
    typeName: "拆分记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Splits up an input FlowFile that is in a record-oriented data format into multiple smaller FlowFiles",
    descriptionName: "将面向记录的数据格式的输入FlowFile拆分为多个较小的FlowFile",
    restricted: !1,
    tags: [
      "schema",
      "split",
      "log",
      "csv",
      "freeform",
      "json",
      "text",
      "logs",
      "generic",
      "avro"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.SplitText",
    typeName: "拆分文本",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Splits a text file into multiple smaller text files on line boundaries limited by maximum number of lines or total size of fragment. Each output split file will contain no more than the configured number of lines or bytes. If both Line Split Count and Maximum Fragment Size are specified, the split occurs at whichever limit is reached first. If the first line of a fragment exceeds the Maximum Fragment Size, that line will be output in a single split file which exceeds the configured maximum size limit. This component also allows one to specify that each split should include a header lines. Header lines can be computed by either specifying the amount of lines that should constitute a header or by using header marker to match against the read lines. If such match happens then the corresponding line will be treated as header. Keep in mind that upon the first failure of header marker match, no more matches will be performed and the rest of the data will be parsed as regular lines for a given split. If after computation of the header there are no more data, the resulting split will consists of only header lines.",
    descriptionName: "按行边界将文本文件拆分为多个较小的文本文件，这些行边界受最大行数或片段总大小的限制。每个输出分割文件将包含不超过配置的行数或字节数。如果同时指定了Line Split Count和Maximum Fragment Size，则按照先达到的限制进行分割。如果一个片段的第一行超过了最大片段大小，该行将被输出到超过配置的最大大小限制的单个分割文件中。该组件还允许指定每个分割应该包含标题行。可以通过指定构成标题的行数或使用标题标记来匹配读行来计算标题行。如果这样的匹配发生，那么相应的行将被视为标题。请记住，在头标记匹配第一次失败时，将不再执行匹配，其余数据将被解析为给定拆分的常规行。如果在计算报头之后没有更多的数据，则结果分割将仅由报头行组成。",
    restricted: !1,
    tags: [
      "split",
      "text"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.processors.standard.SplitXml",
    typeName: "拆分xml",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Splits an XML File into multiple separate FlowFiles, each comprising a child or descendant of the original root element",
    descriptionName: "将XML文件拆分为多个独立的FlowFiles，每个FlowFiles都包含原始根元素的子元素或后代元素",
    restricted: !1,
    tags: [
      "split",
      "xml"
    ],
    classifyName: "拆分/合并"
  },
  {
    type: "org.apache.nifi.spring.SpringContextProcessor",
    typeName: "Spring上下文处理器",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-spring-nar",
      version: "1.21.0"
    },
    description: "A Processor that supports sending and receiving data from application defined in Spring Application Context via predefined in/out MessageChannels.",
    descriptionName: "支持通过预定义的输入/输出MessageChannes从Spring应用上下文中定义的应用程序发送和接收数据的处理器。",
    restricted: !1,
    tags: [
      "Integration",
      "Message",
      "Get",
      "Spring",
      "Put"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.TailFile",
    typeName: "跟踪文件",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: `"Tails" a file, or a list of files, ingesting data from the file as it is written to the file. The file is expected to be textual. Data is ingested only when a new line is encountered (carriage return or new-line character or combination). If the file to tail is periodically "rolled over", as is generally the case with log files, an optional Rolling Filename Pattern can be used to retrieve data from files that have rolled over, even if the rollover occurred while NiFi was not running (provided that the data still exists upon restart of NiFi). It is generally advisable to set the Run Schedule to a few seconds, rather than running with the default value of 0 secs, as this Processor will consume a lot of resources if scheduled very aggressively. At this time, this Processor does not support ingesting files that have been compressed when 'rolled over'.`,
    descriptionName: "“跟踪”文件或文件列表，在将数据写入文件时从文件中摄取数据。该文件应该是文本的。数据仅在遇到新行(回车或换行字符或组合)时才被摄取。如果要跟踪的文件定期“滚转”，就像日志文件一般的情况一样，一个可选的滚动文件名模式可以用来从已经滚转的文件中检索数据，即使滚转发生在NiFi没有运行的时候(只要数据在重新启动NiFi时仍然存在)。通常建议将Run Schedule设置为几秒，而不是使用默认值0秒运行，因为如果非常积极地调度该处理器将消耗大量资源。此时，此处理器不支持在“滚动”时摄取已压缩的文件。",
    restricted: !0,
    explicitRestrictions: [
      {
        requiredPermission: {
          id: "read-filesystem",
          label: "read filesystem"
        },
        explanation: "Provides operator the ability to read from any file that NiFi has access to."
      }
    ],
    tags: [
      "file",
      "log",
      "tail",
      "restricted",
      "text",
      "source"
    ],
    classifyName: "其他"
  },
  {
    type: "com.xgit.nifi.demo.processors.demo.naivebayes.TrainWithWekaProcessor",
    typeName: "朴素贝叶斯模型训练",
    bundle: {
      group: "com.xgit.nifi.demo",
      artifact: "nifi-demo-nar",
      version: "1.0"
    },
    description: "Custom NiFi processor that uses Weka to perform Naive Bayes classification on the Iris dataset",
    descriptionName: "一个自定义NiFi处理器，使用Weka对Iris数据集执行朴素贝叶斯分类。",
    restricted: !1,
    tags: [
      "weka",
      "classifier",
      "machine learning"
    ]
  },
  {
    type: "org.apache.nifi.processors.standard.TransformXml",
    typeName: "转换xml",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Applies the provided XSLT file to the FlowFile XML payload. A new FlowFile is created with transformed content and is routed to the 'success' relationship. If the XSL transform fails, the original FlowFile is routed to the 'failure' relationship",
    descriptionName: "将提供的XSLT文件应用于FlowFile XML有效负载。使用转换后的内容创建一个新的FlowFile，并将其路由到“成功”关系。如果XSL转换失败，原始FlowFile将被路由到“失败”关系",
    restricted: !1,
    tags: [
      "transform",
      "xml",
      "xslt"
    ],
    classifyName: "转换"
  },
  {
    type: "org.apache.nifi.processors.standard.UnpackContent",
    typeName: "解包内容",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Unpacks the content of FlowFiles that have been packaged with one of several different Packaging Formats, emitting one to many FlowFiles for each input FlowFile",
    descriptionName: "解包已经用几种不同的打包格式之一打包的FlowFiles的内容，为每个输入FlowFile发出一个到多个FlowFile",
    restricted: !1,
    tags: [
      "zip",
      "flowfile-stream-v3",
      "flowfile-stream",
      "un-merge",
      "tar",
      "archive",
      "Unpack"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.attributes.UpdateAttribute",
    typeName: "更新属性",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-update-attribute-nar",
      version: "1.21.0"
    },
    description: "Updates the Attributes for a FlowFile by using the Attribute Expression Language and/or deletes the attributes based on a regular expression",
    descriptionName: "使用属性表达式语言(Attribute Expression Language)更新FlowFile的属性，或者根据正则表达式(regular Expression)删除属性",
    restricted: !1,
    tags: [
      "Attribute Expression Language",
      "update",
      "attributes",
      "state",
      "modification",
      "delete"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.elasticsearch.UpdateByQueryElasticsearch",
    typeName: "通过查询更新Elasticsearch",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-elasticsearch-restapi-nar",
      version: "1.21.0"
    },
    description: "Update documents in an Elasticsearch index using a query. The query can be loaded from a flowfile body or from the Query parameter.",
    descriptionName: "使用查询更新Elasticsearch索引中的文档。可以从流文件主体或query参数加载查询。",
    restricted: !1,
    tags: [
      "elasticsearch",
      "query",
      "elastic",
      "elasticsearch7",
      "elasticsearch8",
      "update",
      "elasticsearch5",
      "elasticsearch6"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.UpdateCounter",
    typeName: "更新计数",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This processor allows users to set specific counters and key points in their flow. It is useful for debugging and basic counting functions.",
    descriptionName: "该处理器允许用户在其流程中设置特定的计数器和关键点。它对调试和基本计数功能很有用。",
    restricted: !1,
    tags: [
      "debug",
      "counter",
      "instrumentation"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.UpdateDatabaseTable",
    typeName: "更新数据库表",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "This processor uses a JDBC connection and incoming records to generate any database table changes needed to support the incoming records. It expects a 'flat' record layout, meaning none of the top-level record fields has nested fields that are intended to become columns themselves.",
    descriptionName: "该处理器使用JDBC连接和传入记录来生成支持传入记录所需的任何数据库表更改。它期望一个“平坦”的记录布局，这意味着没有顶级记录字段有嵌套的字段，打算成为列本身。",
    restricted: !1,
    tags: [
      "metadata",
      "database",
      "update",
      "jdbc",
      "table",
      "alter"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.UpdateRecord",
    typeName: "更新记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Updates the contents of a FlowFile that contains Record-oriented data (i.e., data that can be read via a RecordReader and written by a RecordWriter). This Processor requires that at least one user-defined Property be added. The name of the Property should indicate a RecordPath that determines the field that should be updated. The value of the Property is either a replacement value (optionally making use of the Expression Language) or is itself a RecordPath that extracts a value from the Record. Whether the Property value is determined to be a RecordPath or a literal value depends on the configuration of the <Replacement Value Strategy> Property.",
    descriptionName: "更新包含面向记录的数据（即可以通过记录读取器读取并由记录写入器写入的数据）的流文件的内容。此处理器要求至少添加一个用户定义的属性。属性的名称应指示确定应更新的字段的记录路径。属性的值是替换值（可以选择使用表达式语言），或者本身是从记录中提取值的 RecordPath。属性值是确定为 RecordPath 还是文本值取决于<替换值策略>属性的配置。",
    restricted: !1,
    tags: [
      "schema",
      "log",
      "record",
      "csv",
      "freeform",
      "update",
      "json",
      "text",
      "logs",
      "generic",
      "avro"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.processors.standard.ValidateCsv",
    typeName: "校验csv",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Validates the contents of FlowFiles against a user-specified CSV schema. Take a look at the additional documentation of this processor for some schema examples.",
    descriptionName: "根据用户指定的 CSV schema验证流文件的内容。有关一些架构示例，请查看此处理器的其他文档。",
    restricted: !1,
    tags: [
      "schema",
      "csv",
      "validation"
    ],
    classifyName: "校验"
  },
  {
    type: "org.apache.nifi.processors.standard.ValidateJson",
    typeName: "校验json",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Validates the contents of FlowFiles against a configurable JSON Schema. See json-schema.org for specification standards.",
    descriptionName: "根据可配置的 JSON schema验证流文件的内容。有关规范标准，请参阅 json-schema.org。",
    restricted: !1,
    tags: [
      "schema",
      "JSON",
      "validation"
    ],
    classifyName: "校验"
  },
  {
    type: "org.apache.nifi.processors.standard.ValidateRecord",
    typeName: "校验记录",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: 'Validates the Records of an incoming FlowFile against a given schema. All records that adhere to the schema are routed to the "valid" relationship while records that do not adhere to the schema are routed to the "invalid" relationship. It is therefore possible for a single incoming FlowFile to be split into two individual FlowFiles if some records are valid according to the schema and others are not. Any FlowFile that is routed to the "invalid" relationship will emit a ROUTE Provenance Event with the Details field populated to explain why records were invalid. In addition, to gain further explanation of why records were invalid, DEBUG-level logging can be enabled for the "org.apache.nifi.processors.standard.ValidateRecord" logger.',
    descriptionName: "根据给定schema验证传入流文件的记录。符合schema的所有记录都路由到“有效”关系，而不遵循schema的记录将路由到“无效”关系。因此，如果某些记录根据schema有效，而其他记录无效，则可以将单个传入流文件拆分为两个单独的流文件。路由到“无效”关系的任何流文件都将发出一个 ROUTE 来源事件，其中填充了“详细信息”字段以解释记录无效的原因。此外，为了进一步解释记录无效的原因，可以为“org.apache.nifi.processor.standard.ValidateRecord”记录器启用调试级日志记录。",
    restricted: !1,
    tags: [
      "schema",
      "record",
      "validate"
    ],
    classifyName: "校验"
  },
  {
    type: "org.apache.nifi.processors.standard.ValidateXml",
    typeName: "校验xml",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Validates XML contained in a FlowFile. By default, the XML is contained in the FlowFile content. If the 'XML Source Attribute' property is set, the XML to be validated is contained in the specified attribute. It is not recommended to use attributes to hold large XML documents; doing so could adversely affect system performance. Full schema validation is performed if the processor is configured with the XSD schema details. Otherwise, the only validation performed is to ensure the XML syntax is correct and well-formed, e.g. all opening tags are properly closed.",
    descriptionName: "验证流文件中包含的 XML。默认情况下，XML 包含在流文件内容中。如果设置了“XML 源属性”属性，则要验证的 XML 将包含在指定的属性中。不建议使用属性来保存大型 XML 文档;这样做可能会对系统性能产生负面影响。如果处理器配置了 XSD 架构详细信息，则执行完整架构验证。否则，执行的唯一验证是确保 XML 语法正确且格式正确，例如，所有开始标记都已正确关闭。",
    restricted: !1,
    tags: [
      "schema",
      "xml",
      "xsd",
      "validation"
    ],
    classifyName: "校验"
  },
  {
    type: "org.apache.nifi.processors.cipher.VerifyContentMAC",
    typeName: "验证内容MAC",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-cipher-nar",
      version: "1.21.0"
    },
    description: "Calculates a Message Authentication Code using the provided Secret Key and compares it with the provided MAC property",
    descriptionName: "使用提供的密钥计算消息身份验证代码，并将其与提供的 MAC 属性进行比较",
    restricted: !1,
    tags: [
      "Signing",
      "Authentication",
      "HMAC",
      "MAC"
    ],
    classifyName: "校验"
  },
  {
    type: "org.apache.nifi.processors.pgp.VerifyContentPGP",
    typeName: "OpenPGP验证签名",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-pgp-nar",
      version: "1.21.0"
    },
    description: "Verify signatures using OpenPGP Public Keys",
    descriptionName: "使用 OpenPGP 公钥验证签名",
    restricted: !1,
    tags: [
      "OpenPGP",
      "Signing",
      "PGP",
      "RFC 4880",
      "Encryption",
      "GPG"
    ],
    classifyName: "校验"
  },
  {
    type: "org.apache.nifi.processors.standard.Wait",
    typeName: "等待",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-standard-nar",
      version: "1.21.0"
    },
    description: "Routes incoming FlowFiles to the 'wait' relationship until a matching release signal is stored in the distributed cache from a corresponding Notify processor. When a matching release signal is identified, a waiting FlowFile is routed to the 'success' relationship. The release signal entry is then removed from the cache. The attributes of the FlowFile that produced the release signal are copied to the waiting FlowFile if the Attribute Cache Regex property of the corresponding Notify processor is set properly. If there are multiple release signals in the cache identified by the Release Signal Identifier, and the Notify processor is configured to copy the FlowFile attributes to the cache, then the FlowFile passing the Wait processor receives the union of the attributes of the FlowFiles that produced the release signals in the cache (identified by Release Signal Identifier). Waiting FlowFiles will be routed to 'expired' if they exceed the Expiration Duration. If you need to wait for more than one signal, specify the desired number of signals via the 'Target Signal Count' property. This is particularly useful with processors that split a source FlowFile into multiple fragments, such as SplitText. In order to wait for all fragments to be processed, connect the 'original' relationship to a Wait processor, and the 'splits' relationship to a corresponding Notify processor. Configure the Notify and Wait processors to use the '${fragment.identifier}' as the value of 'Release Signal Identifier', and specify '${fragment.count}' as the value of 'Target Signal Count' in the Wait processor.It is recommended to use a prioritizer (for instance First In First Out) when using the 'wait' relationship as a loop.",
    descriptionName: "将传入的流文件路由到“等待”关系，直到匹配的释放信号从相应的通知处理器存储在分布式缓存中。识别出匹配的释放信号后，等待的 FlowFile 将路由到“成功”关系。然后从缓存中删除释放信号条目。如果正确设置了相应通知处理器的属性缓存正则表达式属性，则生成释放信号的流文件的属性将复制到等待的流文件中。如果缓存中有多个由释放信号标识符标识的释放信号，并且通知处理器配置为将 FlowFile 属性复制到缓存，则传递等待处理器的 FlowFile 将接收在缓存中生成释放信号的 FlowFiles 属性的并集（由释放信号标识符标识）。如果等待流文件超过过期持续时间，它们将被路由到“过期”。如果需要等待多个信号，请通过“目标信号计数”属性指定所需的信号数。这对于将源流文件拆分为多个片段（如 SplitText）的处理器特别有用。为了等待所有片段被处理，请将“原始”关系连接到等待处理器，并将“拆分”关系连接到相应的通知处理器。将通知和等待处理器配置为使用“{片段标识符}”作为“释放信号标识符”的值，并在等待处理器中指定“{片段.计数}”作为“目标信号计数”的值。建议在使用“等待”关系作为循环时使用优先级器（例如先进先出）。",
    restricted: !1,
    tags: [
      "cache",
      "wait",
      "release",
      "distributed",
      "map",
      "signal",
      "hold"
    ]
  },
  {
    type: "org.apache.nifi.processors.yandex.YandexTranslate",
    typeName: "翻译",
    bundle: {
      group: "org.apache.nifi",
      artifact: "nifi-language-translation-nar",
      version: "1.21.0"
    },
    description: "Translates content and attributes from one language to another",
    descriptionName: "将内容和属性从一种语言翻译成另一种语言",
    restricted: !1,
    tags: [
      "yandex",
      "translation",
      "language",
      "translate"
    ],
    classifyName: "其他"
  },
  {
    type: "org.apache.nifi.minifi.processors.GetModbusTCP",
    typeName: "Modbus TCP采集",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "Modbus TCP协议采集",
    descriptionName: "Modbus TCP协议采集",
    restricted: !1,
    tags: [
      "minifi",
      "get",
      "modbus"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.UpdateAttribute",
    typeName: "更新attribute",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "更新attribute",
    descriptionName: "更新attribute",
    restricted: !1,
    tags: [
      "minifi",
      "update"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.SplitJson",
    typeName: "切分json数组",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "切分json数组",
    descriptionName: "切分json数组",
    restricted: !1,
    tags: [
      "minifi",
      "json"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.RouteOnContent",
    typeName: "根据content路由",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "根据content路由",
    descriptionName: "根据content路由",
    restricted: !1,
    tags: [
      "minifi",
      "route"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.RouteOnAttribute",
    typeName: "根据attribute路由",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "根据attribute路由",
    descriptionName: "根据attribute路由",
    restricted: !1,
    tags: [
      "minifi",
      "route"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.EvaluateJsonPath",
    typeName: "执行json path解析",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "执行json path解析",
    descriptionName: "执行json path解析",
    restricted: !1,
    tags: [
      "minifi",
      "json"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.PublishKafka",
    typeName: "推送kafka消息",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "推送kafka消息",
    descriptionName: "推送kafka消息",
    restricted: !1,
    tags: [
      "minifi",
      "kafka"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.DoNothing",
    typeName: "透传flowfile",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "透传flowfile",
    descriptionName: "透传flowfile",
    restricted: !1,
    tags: [
      "minifi"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.InvokeHTTP",
    typeName: "调用http接口",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "调用http接口",
    descriptionName: "调用http接口",
    restricted: !1,
    tags: [
      "minifi",
      "http"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.HandleHttpRequest",
    typeName: "http请求",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "http请求",
    descriptionName: "http请求",
    restricted: !1,
    tags: [
      "minifi",
      "http"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.HandleHttpResponse",
    typeName: "http响应",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "http响应",
    descriptionName: "http响应",
    restricted: !1,
    tags: [
      "minifi",
      "http"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.FixedTimeWindow",
    typeName: "时间窗口",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "固定时间窗口",
    descriptionName: "固定时间窗口",
    restricted: !1,
    tags: [
      "minifi",
      "window"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.extensions.cache.PutMemoryMap",
    typeName: "put缓存",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "put缓存",
    descriptionName: "put缓存",
    restricted: !1,
    tags: [
      "minifi",
      "put"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.extensions.cache.GetMemoryMap",
    typeName: "get缓存",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "get缓存",
    descriptionName: "get缓存",
    restricted: !1,
    tags: [
      "minifi",
      "get"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.extensions.customized.DongZhong",
    typeName: "东重边缘计算",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "东重边缘计算",
    descriptionName: "东重边缘计算",
    restricted: !1,
    tags: [
      "minifi",
      "dongzhong"
    ],
    classifyName: "边缘计算"
  },
  {
    type: "org.apache.nifi.minifi.processors.CollectPlaceholder",
    typeName: "采集占位",
    bundle: {
      group: "com.hanyun",
      artifact: "nifi-cpp-nar",
      version: "1.0"
    },
    description: "采集占位算子",
    descriptionName: "采集占位算子",
    restricted: !1,
    tags: [
      "minifi",
      "collect"
    ],
    classifyName: "边缘计算"
  }
], m1 = {
  newProcessorTypes: w1
}, B1 = {
  grid: !0,
  panning: !0,
  mousewheel: !0,
  autoResize: !0,
  background: {
    color: "transparent"
  },
  //
  connecting: {
    snap: !0,
    allowNode: !1,
    // 不允许直接连接节点
    allowLoop: !1,
    // 不能连接自身
    allowMulti: !1,
    // 两个节点之间不能有多条连线
    allowBlank: !1,
    // 不允许连接到空白画布
    allowEdge: !1,
    // 不允许连接到边
    highlight: !0,
    // router: {
    //   name: 'manhattan',
    //   args: {
    //     padding: { left: 30, right: 20 },
    //   },
    // },
    connector: {
      name: "smooth",
      args: {
        radius: 2
      }
    },
    createEdge() {
      return this.createEdge({
        shape: "vue-edge"
      });
    },
    validateMagnet({ magnet: c }) {
      return c.getAttribute("port-group") !== "left";
    },
    validateConnection({
      sourceCell: c,
      targetCell: e,
      sourceMagnet: t,
      targetMagnet: i,
      edge: a
    }) {
      var p, d;
      const o = (p = t == null ? void 0 : t.getAttribute("port")) == null ? void 0 : p.split("."), r = (d = i == null ? void 0 : i.getAttribute("port")) == null ? void 0 : d.split(".");
      if (!o || !r || o[0] == "in" || r[0] == "out" || (o[1] || r[1]) && o[1] != r[1])
        return !1;
      const l = this.getEdges().filter((C) => C != a), A = l.filter((C) => C.getSourceCell() == c).length, n = l.filter((C) => C.getTargetCell() == e).length;
      return !(o[2] && ue(o[2]) && A >= Number(o[2]) || r[2] && ue(r[2]) && n >= Number(r[2]));
    }
  },
  highlighting: {
    // 连接桩可以被连接时在连接桩外围围渲染一个包围框
    magnetAvailable: {
      name: "stroke",
      args: {
        attrs: {
          fill: "#fff",
          stroke: "#A4DEB1",
          strokeWidth: 4
        }
      }
    },
    // 连接桩吸附连线时在连接桩外围围渲染一个包围框
    magnetAdsorbed: {
      name: "stroke",
      args: {
        attrs: {
          fill: "#fff",
          stroke: "#31d0c6",
          strokeWidth: 4
        }
      }
    }
  }
}, y1 = {
  inherit: "edge",
  test: {},
  attrs: {
    line: {
      // 线条样式定制
      stroke: "#C0C7D0",
      strokeWidth: 2,
      targetMarker: {
        name: "block"
      }
    }
  },
  // 标签定制 
  // 位置，居中
  // 响应点击事件
  // 响应鼠标悬浮事件
  // 
  defaultLabel: {
    markup: Ke.getForeignObjectMarkup(),
    attrs: {
      fo: {
        width: 30,
        height: 30,
        x: -15,
        y: -15
      }
    },
    position: {
      distance: 0.5,
      options: {
        keepGradient: !1
      }
    }
  },
  label: {}
}, ee = {
  circle: {
    magnet: !0,
    stroke: "#8f8f8f",
    r: 5
  }
}, E1 = {
  left: { position: "left", attrs: ee },
  top: { position: "top", attrs: ee },
  bottom: { position: "bottom", attrs: ee },
  right: { position: "right", attrs: ee },
  "arrow-left": {
    position: { name: "left" },
    markup: [
      {
        tagName: "path",
        selector: "path"
      }
    ],
    attrs: {
      path: {
        d: "M -4 4 L -4 -4 L 0 0 Z",
        magnet: !0,
        stroke: "#31d0c6",
        fill: "#fff",
        strokeWidth: 2
      }
    }
  }
}, He = {
  groups: E1
  // items: [
  //   { id: "in", group: "left" },
  //   { id: "out", group: "right" }
  // ]
}, F1 = {
  shape: "vue-node",
  label: "默认节点",
  width: 50,
  height: 50,
  effect: ["color"],
  component: u1,
  ports: He
}, he = {
  tag: "div",
  class: "_default-node",
  cls: [
    {
      tag: "div",
      class: "_node-manage",
      cls: [
        { tag: z, cls: { tag: se, ":name": "icon" } }
      ]
    },
    {
      tag: "div",
      class: "_label-box",
      cls: [
        {
          tag: Fe,
          trigger: "hover",
          popperClass: "_node-label-tip-popover",
          showArrow: !1,
          width: "auto",
          "v-if": "!formStatus?.result",
          cls: [
            { tag: z, "#reference": "", class: "_node-tip-icon", cls: { tag: Ue } },
            { tag: "div", class: "_node-status-tip", cls: "{{ formStatus?.info.map(t => h('p',{class:'_tip-item'},t)) }}" }
          ]
        },
        { tag: "span", class: "_label", cls: "{{ label }}" }
      ]
    }
  ]
}, Q1 = {
  tag: "div",
  class: "_node-tab-header",
  cls: [
    { tag: "div", cls: [
      { tag: "b", class: "_title", cls: [{ tag: z, cls: { tag: se, ":name": "data.icon" } }, "{{ data.label || '' }}"] }
      // { tag: "b", "@click": "() => close()", class: "_btn", cls: { tag: ElIcon, class: "_close", cls: Close } }
    ] },
    { tag: "div", class: "", cls: [
      { tag: S, "@click": ({ graphEvents: c, close: e, cell: t }) => {
        e() && c.eventCall("drawer:cancel", t);
      }, cls: "取消" },
      { tag: S, "@click": ({ graphEvents: c, close: e, cell: t }) => {
        c.eventCall("drawer:submit", t, e);
      }, type: "primary", cls: "确定" }
    ] }
  ]
}, D1 = [
  {
    tag: S,
    link: !0,
    icon: Qe,
    cls: "删除",
    "@click": ({ cell: c, graph: e, contextmenu: t }) => {
      e.removeCell(c), t.close();
    }
  }
], M1 = [
  {
    tag: S,
    link: !0,
    icon: Qe,
    cls: "删除",
    "@click": ({ cell: c, graph: e, contextmenu: t }) => {
      e.removeCell(c), t.close();
    }
  }
], I1 = [
  {
    tag: S,
    link: !0,
    icon: De,
    cls: "全选",
    "@click": ({ graph: c, contextmenu: e }) => {
      c == null || c.trigger("cell:selectAll"), e.close();
    }
  },
  {
    tag: S,
    link: !0,
    icon: Oe,
    cls: "复制",
    ":disabled": "selectedCells.length == 0",
    "@click": ({ graph: c, contextmenu: e, selectedCells: t, ElMessage: i }) => {
      t.value.length > 0 ? (c.cleanClipboard(), c.copy(t.value), e.close()) : i.warn("请先选中元素后再复制");
    }
  },
  {
    tag: S,
    link: !0,
    icon: Je,
    cls: "粘贴",
    ":disabled": "clipboardCells.length == 0",
    "@click": ({ graph: c, contextmenu: e, clipboardCells: t }) => {
      const i = c.paste({ offset: 100 });
      console.log(i), e.close();
    }
  },
  { tag: O },
  {
    tag: S,
    link: !0,
    icon: Me,
    cls: "适合画布",
    "@click": ({ graph: c, contextmenu: e }) => {
      c.zoomToFit({ padding: { left: 50, top: 50, right: 50, bottom: 100 } }), e.close();
    }
  }
];
m1.newProcessorTypes.filter((c) => c.type.includes("ConsumeAMQP") || c.type.includes("ConsumeIMAP") || c.type.includes("ConsumeJMS")).map((c) => {
  const e = c.type.split(".").pop();
  return {
    name: "test-node",
    shape: "vue-node",
    icon: "prep-visualization-api-read-font",
    label: e,
    tabs: [
      {
        label: "基础信息",
        type: "elem",
        elem: { tag: Ee, prop: "node.label", ":modelValue": "label", "@update:modelValue": ({ label: t, $: i }) => {
          t.value = i[0];
        } }
      },
      {
        label: "节点表单",
        validate: !0,
        default: !0,
        type: "form",
        column: [
          { prop: "name", label: "名称", value: e, required: !0 },
          { prop: "type", label: "类型", value: `${e} ${c.bundle.version}`, required: !0, trigger: "change", message: "{{prop}} {{label}} is required!" },
          { prop: "code", label: "编码", value: "input.C.A", required: !0, rules: [{ required: !1 }, { min: 20 }] },
          { prop: "package", label: "打包", value: ` ${c.bundle.group} - ${c.bundle.artifact}` }
          // { prop: 'input.C.B.A', label: "INPUT C.B.A", value: "input.C.B.A" },
        ]
      }
    ],
    apis: {},
    markup: he
  };
});
const H1 = (c = {}) => {
  const e = re({}, y1, c);
  Ae.registerEdge("vue-edge", e, !0);
}, b1 = (c = {}) => {
  const e = re({}, F1, c);
  Ye(e);
}, v1 = {}, L1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  style: { position: "absolute", width: "0", height: "0" },
  "aria-hidden": "true",
  id: "__SVG_SPRITE_NODE__"
}, x1 = /* @__PURE__ */ xe('<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" id="prep-data-distribute"><g filter="url(#prep-data-distribute_filter0_d_1459_29425)"><rect x="12" y="8" width="12" height="12" rx="2" fill="#5285EA" shape-rendering="crispEdges"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2031 13.6094C16.9798 13.6094 17.6094 12.9798 17.6094 12.2031C17.6094 11.4265 16.9798 10.7969 16.2031 10.7969C15.4265 10.7969 14.7969 11.4265 14.7969 12.2031C14.7969 12.9798 15.4265 13.6094 16.2031 13.6094ZM18.3558 12.5938C18.2942 12.9357 18.1531 13.2501 17.9522 13.517L19.7472 15.312C19.9649 15.1738 20.2231 15.0938 20.5 15.0938C21.2767 15.0938 21.9062 15.7233 21.9062 16.5C21.9062 17.2767 21.2767 17.9062 20.5 17.9062C19.7233 17.9062 19.0938 17.2767 19.0938 16.5C19.0938 16.2847 19.1421 16.0807 19.2286 15.8983L17.3786 14.0483C17.1438 14.1982 16.8783 14.3046 16.5938 14.3558V15.2268C17.1804 15.3961 17.6094 15.937 17.6094 16.5781C17.6094 17.3548 16.9798 17.9844 16.2031 17.9844C15.4265 17.9844 14.7969 17.3548 14.7969 16.5781C14.7969 15.937 15.2259 15.3961 15.8125 15.2268V14.3558C14.7908 14.1717 14.0156 13.2779 14.0156 12.2031C14.0156 10.995 14.995 10.0156 16.2031 10.0156C17.2779 10.0156 18.1717 10.7908 18.3558 11.8125H19.2268C19.3961 11.2259 19.937 10.7969 20.5781 10.7969C21.3548 10.7969 21.9844 11.4265 21.9844 12.2031C21.9844 12.9798 21.3548 13.6094 20.5781 13.6094C19.937 13.6094 19.3961 13.1804 19.2268 12.5938H18.3558ZM20.5 17.125C20.8452 17.125 21.125 16.8452 21.125 16.5C21.125 16.1548 20.8452 15.875 20.5 15.875C20.1548 15.875 19.875 16.1548 19.875 16.5C19.875 16.8452 20.1548 17.125 20.5 17.125ZM16.8281 16.5781C16.8281 16.9233 16.5483 17.2031 16.2031 17.2031C15.8579 17.2031 15.5781 16.9233 15.5781 16.5781C15.5781 16.2329 15.8579 15.9531 16.2031 15.9531C16.5483 15.9531 16.8281 16.2329 16.8281 16.5781ZM20.5781 12.8281C20.9233 12.8281 21.2031 12.5483 21.2031 12.2031C21.2031 11.8579 20.9233 11.5781 20.5781 11.5781C20.2329 11.5781 19.9531 11.8579 19.9531 12.2031C19.9531 12.5483 20.2329 12.8281 20.5781 12.8281Z" fill="white"></path><rect x="12.5" y="8.5" width="11" height="11" rx="1.5" stroke="#5285EA" shape-rendering="crispEdges"></rect></g><defs><filter id="prep-data-distribute_filter0_d_1459_29425" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1459_29425"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1459_29425" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-data-distribution-all-active"><rect x="1" y="1" width="18" height="18" rx="9" fill="#F2F4F7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25437 10.0579C8.9725 10.2379 8.65398 10.3655 8.3125 10.427V11.4722C9.01643 11.6753 9.53125 12.3244 9.53125 13.0938C9.53125 14.0257 8.77573 14.7812 7.84375 14.7812C6.91177 14.7812 6.15625 14.0257 6.15625 13.0938C6.15625 12.3244 6.67107 11.6753 7.375 11.4722V10.427C6.14891 10.206 5.21875 9.1335 5.21875 7.84375C5.21875 6.394 6.394 5.21875 7.84375 5.21875C9.1335 5.21875 10.206 6.14891 10.427 7.375H11.4722C11.6753 6.67107 12.3244 6.15625 13.0938 6.15625C14.0257 6.15625 14.7812 6.91177 14.7812 7.84375C14.7812 8.77573 14.0257 9.53125 13.0938 9.53125C12.3244 9.53125 11.6753 9.01643 11.4722 8.3125H10.427C10.353 8.72288 10.1837 9.10011 9.94269 9.42041L12.0967 11.5744C12.3579 11.4085 12.6677 11.3125 13 11.3125C13.932 11.3125 14.6875 12.068 14.6875 13C14.6875 13.932 13.932 14.6875 13 14.6875C12.068 14.6875 11.3125 13.932 11.3125 13C11.3125 12.7416 11.3706 12.4968 11.4744 12.2779L9.25437 10.0579Z" fill="#2C60DB"></path><rect x="1" y="1" width="18" height="18" rx="9" stroke="#2C60DB" stroke-width="2"></rect></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-data-distribution-all-default"><rect x="1" y="1" width="18" height="18" rx="9" fill="#F2F4F7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25437 10.0579C8.9725 10.2379 8.65398 10.3655 8.3125 10.427V11.4722C9.01643 11.6753 9.53125 12.3244 9.53125 13.0938C9.53125 14.0257 8.77573 14.7812 7.84375 14.7812C6.91177 14.7812 6.15625 14.0257 6.15625 13.0938C6.15625 12.3244 6.67107 11.6753 7.375 11.4722V10.427C6.14891 10.206 5.21875 9.1335 5.21875 7.84375C5.21875 6.394 6.394 5.21875 7.84375 5.21875C9.1335 5.21875 10.206 6.14891 10.427 7.375H11.4722C11.6753 6.67107 12.3244 6.15625 13.0938 6.15625C14.0257 6.15625 14.7812 6.91177 14.7812 7.84375C14.7812 8.77573 14.0257 9.53125 13.0938 9.53125C12.3244 9.53125 11.6753 9.01643 11.4722 8.3125H10.427C10.353 8.72288 10.1837 9.10011 9.94269 9.42041L12.0967 11.5744C12.3579 11.4085 12.6677 11.3125 13 11.3125C13.932 11.3125 14.6875 12.068 14.6875 13C14.6875 13.932 13.932 14.6875 13 14.6875C12.068 14.6875 11.3125 13.932 11.3125 13C11.3125 12.7416 11.3706 12.4968 11.4744 12.2779L9.25437 10.0579Z" fill="#091E40" fill-opacity="0.47"></path><rect x="1" y="1" width="18" height="18" rx="9" stroke="#C0C7D0" stroke-width="2"></rect></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-data-distribution-part-active"><rect x="1" y="1" width="18" height="18" rx="9" fill="#F2F4F7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M7.84375 9.53125C8.77573 9.53125 9.53125 8.77573 9.53125 7.84375C9.53125 6.91177 8.77573 6.15625 7.84375 6.15625C6.91177 6.15625 6.15625 6.91177 6.15625 7.84375C6.15625 8.77573 6.91177 9.53125 7.84375 9.53125ZM10.427 8.3125C10.353 8.72288 10.1837 9.10011 9.94269 9.42041L12.0967 11.5744C12.3579 11.4085 12.6677 11.3125 13 11.3125C13.932 11.3125 14.6875 12.068 14.6875 13C14.6875 13.932 13.932 14.6875 13 14.6875C12.068 14.6875 11.3125 13.932 11.3125 13C11.3125 12.7416 11.3706 12.4968 11.4744 12.2779L9.25437 10.0579C8.9725 10.2379 8.65398 10.3655 8.3125 10.427V11.4722C9.01643 11.6753 9.53125 12.3244 9.53125 13.0938C9.53125 14.0257 8.77573 14.7812 7.84375 14.7812C6.91177 14.7812 6.15625 14.0257 6.15625 13.0938C6.15625 12.3244 6.67107 11.6753 7.375 11.4722V10.427C6.14891 10.206 5.21875 9.1335 5.21875 7.84375C5.21875 6.394 6.394 5.21875 7.84375 5.21875C9.1335 5.21875 10.206 6.14891 10.427 7.375H11.4722C11.6753 6.67107 12.3244 6.15625 13.0938 6.15625C14.0257 6.15625 14.7812 6.91177 14.7812 7.84375C14.7812 8.77573 14.0257 9.53125 13.0938 9.53125C12.3244 9.53125 11.6753 9.01643 11.4722 8.3125H10.427ZM8.59375 13.0938C8.59375 13.508 8.25796 13.8438 7.84375 13.8438C7.42954 13.8438 7.09375 13.508 7.09375 13.0938C7.09375 12.6795 7.42954 12.3438 7.84375 12.3438C8.25796 12.3438 8.59375 12.6795 8.59375 13.0938ZM13.0938 8.59375C13.508 8.59375 13.8438 8.25796 13.8438 7.84375C13.8438 7.42954 13.508 7.09375 13.0938 7.09375C12.6795 7.09375 12.3438 7.42954 12.3438 7.84375C12.3438 8.25796 12.6795 8.59375 13.0938 8.59375Z" fill="#2C60DB"></path><rect x="1" y="1" width="18" height="18" rx="9" stroke="#2C60DB" stroke-width="2"></rect></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-data-distribution-part-default"><rect x="1" y="1" width="18" height="18" rx="9" fill="#F2F4F7"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M7.84375 9.53125C8.77573 9.53125 9.53125 8.77573 9.53125 7.84375C9.53125 6.91177 8.77573 6.15625 7.84375 6.15625C6.91177 6.15625 6.15625 6.91177 6.15625 7.84375C6.15625 8.77573 6.91177 9.53125 7.84375 9.53125ZM10.427 8.3125C10.353 8.72288 10.1837 9.10011 9.94269 9.42041L12.0967 11.5744C12.3579 11.4085 12.6677 11.3125 13 11.3125C13.932 11.3125 14.6875 12.068 14.6875 13C14.6875 13.932 13.932 14.6875 13 14.6875C12.068 14.6875 11.3125 13.932 11.3125 13C11.3125 12.7416 11.3706 12.4968 11.4744 12.2779L9.25437 10.0579C8.9725 10.2379 8.65398 10.3655 8.3125 10.427V11.4722C9.01643 11.6753 9.53125 12.3244 9.53125 13.0938C9.53125 14.0257 8.77573 14.7812 7.84375 14.7812C6.91177 14.7812 6.15625 14.0257 6.15625 13.0938C6.15625 12.3244 6.67107 11.6753 7.375 11.4722V10.427C6.14891 10.206 5.21875 9.1335 5.21875 7.84375C5.21875 6.394 6.394 5.21875 7.84375 5.21875C9.1335 5.21875 10.206 6.14891 10.427 7.375H11.4722C11.6753 6.67107 12.3244 6.15625 13.0938 6.15625C14.0257 6.15625 14.7812 6.91177 14.7812 7.84375C14.7812 8.77573 14.0257 9.53125 13.0938 9.53125C12.3244 9.53125 11.6753 9.01643 11.4722 8.3125H10.427ZM8.59375 13.0938C8.59375 13.508 8.25796 13.8438 7.84375 13.8438C7.42954 13.8438 7.09375 13.508 7.09375 13.0938C7.09375 12.6795 7.42954 12.3438 7.84375 12.3438C8.25796 12.3438 8.59375 12.6795 8.59375 13.0938ZM13.0938 8.59375C13.508 8.59375 13.8438 8.25796 13.8438 7.84375C13.8438 7.42954 13.508 7.09375 13.0938 7.09375C12.6795 7.09375 12.3438 7.42954 12.3438 7.84375C12.3438 8.25796 12.6795 8.59375 13.0938 8.59375Z" fill="#091E40" fill-opacity="0.47"></path><rect x="1" y="1" width="18" height="18" rx="9" stroke="#C0C7D0" stroke-width="2"></rect></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-direction-right"><g id="prep-direction-right_åä¸&amp;ä¸ç§»å¨"><path id="prep-direction-right_e94c" d="M1.7627 8.5498C1.7627 8.61883 1.81866 8.6748 1.8877 8.6748H9.7627V11.1981C9.7627 11.3915 9.98643 11.499 10.1375 11.3782L14.1509 8.16741C14.2664 8.07507 14.2664 7.89951 14.1509 7.80716L10.1375 4.59639C9.98643 4.47556 9.7627 4.58309 9.7627 4.77651V7.2998H1.8877C1.81866 7.2998 1.7627 7.35576 1.7627 7.4248V8.5498Z" fill="#091E40" fill-opacity="0.66"></path></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" id="prep-error-tip-font"><path d="M100 12.5C148.325 12.5 187.5 51.6751 187.5 100C187.5 148.325 148.325 187.5 100 187.5C51.6751 187.5 12.5 148.325 12.5 100C12.5 51.6751 51.6751 12.5 100 12.5Z" fill="#F0AC3C"></path><path d="M109.375 48.4375C109.375 46.7116 107.976 45.3125 106.25 45.3125H93.75C92.0241 45.3125 90.625 46.7116 90.625 48.4375V104.688C90.625 106.413 92.0241 107.812 93.75 107.812H106.25C107.976 107.812 109.375 106.413 109.375 104.688V48.4375Z" fill="white"></path><path d="M112.5 142.188C112.5 135.284 106.904 129.688 100 129.688C93.0964 129.688 87.5 135.284 87.5 142.188C87.5 149.091 93.0964 154.688 100 154.688C106.904 154.688 112.5 149.091 112.5 142.188Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" id="prep-execute-logic"><g clip-path="url(#prep-execute-logic_clip0_1469_28982)" filter="url(#prep-execute-logic_filter0_d_1469_28982)"><path d="M22.6142 8H13.3858C12.6204 8 12 8.62044 12 9.38579V18.6142C12 19.3796 12.6204 20 13.3858 20H22.6142C23.3796 20 24 19.3796 24 18.6142V9.38579C24 8.62044 23.3796 8 22.6142 8Z" fill="#5285EA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.989 14.0694L20.2661 15.5051C20.2076 15.5539 20.1206 15.546 20.0718 15.4875C20.0511 15.4627 20.0398 15.4314 20.0398 15.3991V12.5276C20.0398 12.4514 20.1016 12.3896 20.1778 12.3896C20.2101 12.3896 20.2413 12.401 20.2661 12.4216L21.989 13.8574C22.0476 13.9062 22.0555 13.9932 22.0067 14.0517C22.0014 14.0581 21.9954 14.064 21.989 14.0694Z" fill="white"></path><path d="M16.2982 15.7154L18.4823 13.3781C18.5351 13.3216 18.6092 13.2898 18.6865 13.2905L20.8621 13.3104L20.8499 14.6531L19.1428 14.6371L16.9632 16.9712C16.911 17.027 16.8379 17.0588 16.7615 17.0588H14.4326C14.2803 17.0588 14.1567 16.9352 14.1567 16.7828V15.992C14.1568 15.8396 14.2803 15.7161 14.4326 15.7159L16.2982 15.7154Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.4326 10.8718H16.6574C16.7555 10.8718 16.8462 10.9239 16.8956 11.0085L17.5865 12.1907C17.6172 12.2433 17.6098 12.3098 17.5682 12.3544L16.8085 13.169C16.7566 13.2247 16.6693 13.2278 16.6135 13.1758C16.6037 13.1667 16.5953 13.1561 16.5885 13.1445L16.0448 12.2146H14.4326C14.2803 12.2146 14.1567 12.091 14.1567 11.9386V11.1478C14.1567 10.9954 14.2803 10.8718 14.4326 10.8718Z" fill="white" fill-opacity="0.66"></path></g><defs><filter id="prep-execute-logic_filter0_d_1469_28982" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1469_28982"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1469_28982" result="shape"></feBlend></filter><clipPath id="prep-execute-logic_clip0_1469_28982"><rect width="12" height="12" fill="white" transform="translate(12 8)"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 11" fill="none" id="prep-filter-tag-checked"><path d="M0 11C0 4.92487 4.92487 0 11 0H12V7C12 9.20914 10.2091 11 8 11H0V11Z" fill="#2C60DB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0418 4.19337C10.0666 4.21819 10.0666 4.25853 10.0418 4.28334L6.23157 8.09358C6.20689 8.11826 6.16699 8.11826 6.14231 8.09358L3.93072 5.882C3.90591 5.85718 3.90591 5.81684 3.93072 5.79203L4.54821 5.17454C4.57289 5.14986 4.6128 5.14986 4.63747 5.17454L6.14231 6.67937C6.16699 6.70405 6.20689 6.70405 6.23157 6.67937L9.33505 3.57588C9.35973 3.5512 9.39963 3.5512 9.42431 3.57588L10.0418 4.19337Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="prep-line-condition-fail"><g id="prep-line-condition-fail_4.0.3---定时ETL任务新增节点连线执行判断" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="prep-line-condition-fail_循环容器" transform="translate(-614.000000, -451.000000)" fill-rule="nonzero"><g id="prep-line-condition-fail_报错" transform="translate(614.000136, 451.000136)"><path d="M7.99986405,15.9997281 C6.92979472,16.0060278 5.86973481,15.7933352 4.8849723,15.3746077 C3.9334578,14.9731624 3.06834123,14.391891 2.33706086,13.6626673 C1.60783713,12.9313869 1.02656571,12.0662703 0.625120344,11.1147558 C0.206392914,10.1299933 -0.00629968314,9.06993338 0,7.99986405 C-0.00629968314,6.92979472 0.206392914,5.86973481 0.625120344,4.8849723 C1.02656571,3.9334578 1.60783713,3.06834122 2.33706086,2.33706084 C3.06834123,1.60783712 3.9334578,1.02656571 4.8849723,0.625120344 C5.86973481,0.206392914 6.92979472,-0.00629968314 7.99986405,0 C9.06993338,-0.00629968314 10.1299933,0.206392914 11.1147558,0.625120344 C12.0662703,1.02656571 12.9313869,1.60783712 13.6626673,2.33706084 C14.391891,3.06834122 14.9731624,3.9334578 15.3746077,4.8849723 C15.7933352,5.86973481 16.0060278,6.92979472 15.9997281,7.99986405 C16.0060278,9.06993338 15.7933352,10.1299933 15.3746077,11.1147558 C14.9731624,12.0662703 14.391891,12.9313869 13.6626673,13.6626673 C12.9313869,14.391891 12.0662703,14.9731624 11.1147558,15.3746077 C10.1299933,15.7933352 9.06993338,16.0060278 7.99986405,15.9997281 L7.99986405,15.9997281 Z" id="prep-line-condition-fail_路径" fill="#E65251"></path><path d="M11.7877324,5.41223565 C11.7895525,5.30735255 11.7479341,5.20638271 11.6727364,5.13324534 L10.8457651,4.32627338 C10.7760197,4.25199575 10.6786646,4.20986405 10.5767745,4.20986405 C10.4748844,4.20986405 10.3775293,4.25199575 10.3077838,4.32627338 L7.99986405,6.63319321 L5.67294491,4.32627338 C5.60319943,4.25199576 5.50584439,4.20986405 5.40395426,4.20986405 C5.30206413,4.20986405 5.2047091,4.25199576 5.13496361,4.32627338 L4.30799235,5.13324534 C4.24315711,5.21187882 4.20904845,5.31136243 4.21199569,5.41323561 C4.21199569,5.52123186 4.24399458,5.61422863 4.30799235,5.69122594 L6.63491149,7.99914573 L4.30799235,10.3060656 C4.24315711,10.384699 4.20904845,10.4841826 4.21199569,10.5860558 C4.21199569,10.6940521 4.24399458,10.7870489 4.30799235,10.8640462 L5.13496361,11.6720181 C5.2047091,11.7462957 5.30206413,11.7884274 5.40395426,11.7884274 C5.50584439,11.7884274 5.60319943,11.7462957 5.67294491,11.6720181 L7.99986405,9.36409831 L10.3077838,11.6720181 C10.3775293,11.7462957 10.4748844,11.7884274 10.5767745,11.7884274 C10.6786646,11.7884274 10.7760197,11.7462957 10.8457651,11.6720181 L11.6727364,10.8640462 C11.7479341,10.7909088 11.7895525,10.689939 11.7877324,10.5850559 C11.7895525,10.4801728 11.7479341,10.3792029 11.6727364,10.3060656 L9.34581728,7.99914573 L11.6727364,5.69122594 C11.7479341,5.61808857 11.7895525,5.51711874 11.7877324,5.41223565 Z" id="prep-line-condition-fail_路径" fill="#FFFFFF"></path></g></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="prep-line-condition-success"><g id="prep-line-condition-success_4.0.3---定时ETL任务新增节点连线执行判断" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="prep-line-condition-success_循环容器" transform="translate(-614.000000, -348.000000)"><g id="prep-line-condition-success_成功" transform="translate(614.000136, 348.000136)"><path d="M4.8849723,0.625120344 C3.9334578,1.02656571 3.06834123,1.60783712 2.33706086,2.33706084 C1.60783713,3.06834122 1.02656571,3.9334578 0.625120344,4.8849723 C0.206392914,5.86973481 -0.00629968314,6.92979472 0,7.99986405 C-0.00629968314,9.06993338 0.206392914,10.1299933 0.625120344,11.1147558 C1.02656571,12.0662703 1.60783713,12.9313869 2.33706086,13.6626673 C3.06834123,14.391891 3.9334578,14.9731624 4.8849723,15.3746077 C5.86973481,15.7933352 6.92979472,16.0060278 7.99986405,15.9997281 C9.06993338,16.0060278 10.1299933,15.7933352 11.1147558,15.3746077 C12.0662703,14.9731624 12.9313869,14.391891 13.6626673,13.6626673 C14.391891,12.9313869 14.9731624,12.0662703 15.3746077,11.1147558 C15.7933352,10.1299933 16.0060278,9.06993338 15.9997281,7.99986405 C16.0060278,6.92979472 15.7933352,5.86973481 15.3746077,4.8849723 C14.9731624,3.9334578 14.391891,3.06834122 13.6626673,2.33706084 C12.9313869,1.60783712 12.0662703,1.02656571 11.1147558,0.625120344 C10.1299933,0.206392914 9.06993338,-0.00629968314 7.99986405,0 C6.92979472,-0.00629968314 5.86973481,0.206392914 4.8849723,0.625120344 Z" id="prep-line-condition-success_路径" fill="#3FB4AB"></path><path d="M7.01189839,11.8907288 C6.93920635,11.9615848 6.84141449,12.0007734 6.73990783,11.9997455 C6.63860442,12.000242 6.54120108,11.9607056 6.46891726,11.8897289 L6.35292129,11.7807326 L3.11603377,8.71983903 C3.04225898,8.65523089 3.00003774,8.56191386 3.00003774,8.46384792 C3.00003774,8.36578198 3.04225898,8.27246496 3.11603377,8.20785682 L3.91100615,7.46088278 C3.98328998,7.38990605 4.08069332,7.35036964 4.18199673,7.3508866 C4.28599312,7.3508866 4.37598999,7.38788532 4.45298732,7.46088278 L6.73990783,9.62980739 L11.5467408,5.10796455 C11.6189393,5.03759773 11.7159155,4.99844806 11.8167314,4.99896322 C11.9207278,4.99896322 12.0117246,5.03496709 12.088722,5.10896452 L12.8836943,5.85593855 C12.957207,5.9203167 12.9994656,6.01321273 12.9996903,6.1109297 C12.9994655,6.20864666 12.957207,6.30154268 12.8836943,6.36592083 L7.01189839,11.8897289 L7.01189839,11.8907288 Z" id="prep-line-condition-success_路径" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" id="prep-line-condition-un"><g id="prep-line-condition-un_4.0.3---定时ETL新增节点：循环容器" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="prep-line-condition-un_连线执行" transform="translate(-614.000000, -549.000000)"><g id="prep-line-condition-un_无条件执行" transform="translate(614.000136, 549.000136)"><path d="M7.99986405,15.9997281 C6.92979472,16.0060278 5.86973481,15.7933352 4.8849723,15.3746077 C3.9334578,14.9731624 3.06834123,14.391891 2.33706086,13.6626673 C1.60783713,12.9313869 1.02656571,12.0662703 0.625120344,11.1147558 C0.206392914,10.1299933 -0.00629968314,9.06993338 0,7.99986405 C-0.00629968314,6.92979472 0.206392914,5.86973481 0.625120344,4.8849723 C1.02656571,3.9334578 1.60783713,3.06834122 2.33706086,2.33706084 C3.06834123,1.60783712 3.9334578,1.02656571 4.8849723,0.625120344 C5.86973481,0.206392914 6.92979472,-0.00629968314 7.99986405,0 C9.06993338,-0.00629968314 10.1299933,0.206392914 11.1147558,0.625120344 C12.0662703,1.02656571 12.9313869,1.60783712 13.6626673,2.33706084 C14.391891,3.06834122 14.9731624,3.9334578 15.3746077,4.8849723 C15.7933352,5.86973481 16.0060278,6.92979472 15.9997281,7.99986405 C16.0060278,9.06993338 15.7933352,10.1299933 15.3746077,11.1147558 C14.9731624,12.0662703 14.391891,12.9313869 13.6626673,13.6626673 C12.9313869,14.391891 12.0662703,14.9731624 11.1147558,15.3746077 C10.1299933,15.7933352 9.06993338,16.0060278 7.99986405,15.9997281 L7.99986405,15.9997281 Z" id="prep-line-condition-un_路径" fill="#F0AC3C" fill-rule="nonzero"></path><path d="M10.349864,3.99986405 C10.5707779,3.99986405 10.749864,4.17895015 10.749864,4.39986405 L10.749864,6.0721213 C10.749864,6.2930352 10.5707779,6.4721213 10.349864,6.4721213 L9.64986405,6.4721213 C9.42908883,6.47176598 9.25006023,6.29289627 9.24950888,6.07212146 L9.249,5.499 L6.749,5.499 L6.74986405,7.49986405 L11.599864,7.49986405 C11.8207779,7.49986405 11.999864,7.67895015 11.999864,7.89986405 L11.999864,12.099864 C11.999864,12.3207779 11.8207779,12.499864 11.599864,12.499864 L4.39986405,12.499864 C4.17895015,12.499864 3.99986405,12.3207779 3.99986405,12.099864 L3.99986405,7.89986405 C3.99986405,7.67895015 4.17895015,7.49986405 4.39986405,7.49986405 L5.24986405,7.49986405 L5.24986405,4.39986405 C5.24986405,4.17895015 5.42895015,3.99986405 5.64986405,3.99986405 L10.349864,3.99986405 Z" id="prep-line-condition-un_形状结合" fill="#FFFFFF"></path></g></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" id="prep-node-disabled"><circle cx="7" cy="7" r="6.125" fill="white"></circle><g clip-path="url(#prep-node-disabled_clip0_12991_243945)"><path d="M7 13.125C10.3827 13.125 13.125 10.3827 13.125 7C13.125 3.61726 10.3827 0.875 7 0.875C3.61726 0.875 0.875 3.61726 0.875 7C0.875 10.3827 3.61726 13.125 7 13.125ZM4.04688 6.34375H9.95312C10.0135 6.34375 10.0625 6.39272 10.0625 6.45312V7.54688C10.0625 7.60728 10.0135 7.65625 9.95312 7.65625H4.04688C3.98647 7.65625 3.9375 7.60728 3.9375 7.54688V6.45312C3.9375 6.39272 3.98647 6.34375 4.04688 6.34375Z" fill="#091E40" fill-opacity="0.25"></path></g><defs><clipPath id="prep-node-disabled_clip0_12991_243945"><rect width="14" height="14" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" id="prep-node-status-error"><g><rect x="0" y="0" width="18" height="18" opacity="0" fill="#E65251"></rect><circle cx="9" cy="9" r="6" stroke="white" stroke-width="1" fill="#E65251"></circle></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" id="prep-node-status-running"><defs><clipPath id="prep-node-status-running_chris-clip"><path d="M 9 9 m -8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"></path></clipPath></defs><g><rect x="0" y="0" width="18" height="18" opacity="0" fill="none"></rect><image x="2" y="2" width="14" height="14" preserveAspectRatio="none" clip-path="url(#prep-node-status-running_chris-clip)" href="data:image/png;base64,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"></image></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" id="prep-node-status-skip"><g><rect x="0" y="0" width="18" height="18" opacity="0" fill="#091E40"></rect><circle cx="9" cy="9" r="6" stroke="white" stroke-width="1" fill="#091E40" opacity="0.66"></circle></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" id="prep-node-status-success"><g><rect x="0" y="0" width="18" height="18" opacity="0" fill="#3FB4AB"></rect><circle cx="9" cy="9" r="6" stroke="white" stroke-width="1" fill="#3FB4AB"></circle></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" id="prep-node-status-terminate"><g><rect x="0" y="0" width="18" height="18" opacity="0" fill="#F0AC3C"></rect><circle cx="9" cy="9" r="6" stroke="white" stroke-width="1" fill="#F0AC3C"></circle></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-task-node-redirect"><path d="M11.86 9.62499H1.875C1.80596 9.62499 1.75 9.56903 1.75 9.49999V2.625C1.75 2.55596 1.80596 2.5 1.875 2.5H2.875C2.94404 2.5 3 2.55596 3 2.625V8.24999C3 8.31903 3.05596 8.37499 3.125 8.37499H11.7952L8.08119 4.78992C8.03152 4.74198 8.03012 4.66284 8.07806 4.61317L8.77257 3.89369C8.82052 3.84402 8.89965 3.84262 8.94932 3.89056L14.1817 8.94131C14.2327 8.99045 14.2327 9.07203 14.1817 9.12118L8.94932 14.1719C8.89965 14.2199 8.82052 14.2185 8.77257 14.1688L8.07806 13.4493C8.03012 13.3996 8.03152 13.3205 8.08119 13.2726L11.86 9.62499Z" fill="#091E40" fill-opacity="0.9"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-task-relation-deleted-node"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 2.375H6.625V2.6875C6.625 3.34334 6.09334 3.875 5.4375 3.875C4.78166 3.875 4.25 3.34334 4.25 2.6875V2.375H3C2.30964 2.375 1.75 2.93464 1.75 3.625V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V3.625C14.25 2.93464 13.6904 2.375 13 2.375H11.75V2.6875C11.75 3.34334 11.2183 3.875 10.5625 3.875C9.90666 3.875 9.375 3.34334 9.375 2.6875V2.375Z" fill="#FFBCB8"></path><path d="M1.75 5.125H14.25V13.375C14.25 14.0654 13.6904 14.625 13 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125Z" fill="#F88581"></path><path d="M4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.7986 8.40458 12.75 9.57819 12.75H11.875C11.944 12.75 12 12.694 12 12.625V11.875C12 11.806 11.944 11.75 11.875 11.75H9.57819C8.95687 11.75 8.45319 11.2463 8.45319 10.625V9.125C8.45319 7.9514 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05596 8 4.125 8Z" fill="white"></path><path d="M4 9.5C4 9.43096 4.05596 9.375 4.125 9.375H6.9375C7.00654 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00654 10.375 6.9375 10.375H4.125C4.05596 10.375 4 10.319 4 10.25V9.5Z" fill="white"></path><path d="M8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875Z" fill="white"></path><path d="M4.125 11.75C4.05596 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05596 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="white"></path><path d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V1.8125Z" fill="#FFBCB8"></path><path d="M9.875 1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V1.8125Z" fill="#FFBCB8"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-task-relation-dependence-node"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 2.375H6.625V2.6875C6.625 3.34334 6.09334 3.875 5.4375 3.875C4.78166 3.875 4.25 3.34334 4.25 2.6875V2.375H3C2.30964 2.375 1.75 2.93464 1.75 3.625V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V3.625C14.25 2.93464 13.6904 2.375 13 2.375H11.75V2.6875C11.75 3.34334 11.2183 3.875 10.5625 3.875C9.90666 3.875 9.375 3.34334 9.375 2.6875V2.375Z" fill="#87B0F7"></path><path d="M1.75 5.125H14.25V13.375C14.25 14.0654 13.6904 14.625 13 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125Z" fill="#5285EA"></path><path d="M4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.7986 8.40458 12.75 9.57819 12.75H11.875C11.944 12.75 12 12.694 12 12.625V11.875C12 11.806 11.944 11.75 11.875 11.75H9.57819C8.95687 11.75 8.45319 11.2463 8.45319 10.625V9.125C8.45319 7.9514 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05596 8 4.125 8Z" fill="white"></path><path d="M4 9.5C4 9.43096 4.05596 9.375 4.125 9.375H6.9375C7.00654 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00654 10.375 6.9375 10.375H4.125C4.05596 10.375 4 10.319 4 10.25V9.5Z" fill="white"></path><path d="M8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875Z" fill="white"></path><path d="M4.125 11.75C4.05596 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05596 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="white"></path><path d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V1.8125Z" fill="#87B0F7"></path><path d="M9.875 1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V1.8125Z" fill="#87B0F7"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-task-relation-invoke-node"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 2.375H6.625V2.6875C6.625 3.34334 6.09334 3.875 5.4375 3.875C4.78166 3.875 4.25 3.34334 4.25 2.6875V2.375H3C2.30964 2.375 1.75 2.93464 1.75 3.625V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V3.625C14.25 2.93464 13.6904 2.375 13 2.375H11.75V2.6875C11.75 3.34334 11.2183 3.875 10.5625 3.875C9.90666 3.875 9.375 3.34334 9.375 2.6875V2.375Z" fill="#9B91DE"></path><path d="M1.75 5.125H14.25V13.375C14.25 14.0654 13.6904 14.625 13 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125Z" fill="#7466CC"></path><path d="M4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.7986 8.40458 12.75 9.57819 12.75H11.875C11.944 12.75 12 12.694 12 12.625V11.875C12 11.806 11.944 11.75 11.875 11.75H9.57819C8.95687 11.75 8.45319 11.2463 8.45319 10.625V9.125C8.45319 7.9514 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05596 8 4.125 8Z" fill="white"></path><path d="M4 9.5C4 9.43096 4.05596 9.375 4.125 9.375H6.9375C7.00654 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00654 10.375 6.9375 10.375H4.125C4.05596 10.375 4 10.319 4 10.25V9.5Z" fill="white"></path><path d="M8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875Z" fill="white"></path><path d="M4.125 11.75C4.05596 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05596 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="white"></path><path d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V1.8125Z" fill="#9B91DE"></path><path d="M9.875 1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V1.8125Z" fill="#9B91DE"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-task-relation-no-permission-node"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 2.375H6.625V2.6875C6.625 3.34334 6.09334 3.875 5.4375 3.875C4.78166 3.875 4.25 3.34334 4.25 2.6875V2.375H3C2.30964 2.375 1.75 2.93464 1.75 3.625V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V3.625C14.25 2.93464 13.6904 2.375 13 2.375H11.75V2.6875C11.75 3.34334 11.2183 3.875 10.5625 3.875C9.90666 3.875 9.375 3.34334 9.375 2.6875V2.375Z" fill="#DADEE6"></path><path d="M1.75 5.125H14.25V13.375C14.25 14.0654 13.6904 14.625 13 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125Z" fill="#C0C7D0"></path><path d="M4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.7986 8.40458 12.75 9.57819 12.75H11.875C11.944 12.75 12 12.694 12 12.625V11.875C12 11.806 11.944 11.75 11.875 11.75H9.57819C8.95687 11.75 8.45319 11.2463 8.45319 10.625V9.125C8.45319 7.9514 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05596 8 4.125 8Z" fill="white"></path><path d="M4 9.5C4 9.43096 4.05596 9.375 4.125 9.375H6.9375C7.00654 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00654 10.375 6.9375 10.375H4.125C4.05596 10.375 4 10.319 4 10.25V9.5Z" fill="white"></path><path d="M8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875Z" fill="white"></path><path d="M4.125 11.75C4.05596 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05596 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="white"></path><path d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V1.8125Z" fill="#DADEE6"></path><path d="M9.875 1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V1.8125Z" fill="#DADEE6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-add-column-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.125 14.8438H15.625C15.1935 14.8438 14.8438 15.1935 14.8438 15.625V27.7344H28.125V14.8438ZM28.125 34.7656H14.8438V46.4844H28.125V34.7656ZM35.1562 34.7656H48.4375V46.4844H35.1562V34.7656ZM48.4375 27.7344V15.625C48.4375 15.1935 48.0877 14.8438 47.6562 14.8438H35.1562V27.7344H48.4375ZM14.8438 65.2344V53.5156H28.125V65.2344H14.8438ZM35.1562 65.2344V53.5156H48.4375V65.2344H35.1562ZM28.125 72.2656H14.8438V84.375C14.8438 84.8065 15.1935 85.1562 15.625 85.1562H28.125V72.2656ZM35.1562 72.2656H48.4375V84.375C48.4375 84.8065 48.0877 85.1562 47.6562 85.1562H35.1562V72.2656ZM15.625 92.1875H29.6875H33.5938H47.6562C51.971 92.1875 55.4688 88.6897 55.4688 84.375V15.625C55.4688 11.3103 51.971 7.8125 47.6562 7.8125H33.5938H29.6875H15.625C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875Z" fill="#537BC6"></path><path d="M63.2812 35.5469C63.2812 31.2322 66.779 27.7344 71.0938 27.7344H84.375C88.6897 27.7344 92.1875 31.2322 92.1875 35.5469V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H71.0938C66.779 92.1875 63.2812 88.6897 63.2812 84.375V35.5469Z" fill="#537BC6"></path><path d="M77.1308 23.0935C77.4433 23.4739 78.0255 23.4739 78.338 23.0935L89.2018 9.87102C89.6207 9.3612 89.258 8.59381 88.5982 8.59381H66.8706C66.2108 8.59381 65.8481 9.3612 66.267 9.87102L77.1308 23.0935Z" fill="#537BC6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-api-read-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V46.875C92.1875 51.1897 88.6897 54.6875 84.375 54.6875H15.625C11.3103 54.6875 7.8125 51.1897 7.8125 46.875V15.625Z" fill="#3392DB"></path><path d="M7.8125 68.75C7.8125 64.4353 11.3103 60.9375 15.625 60.9375H84.375C88.6897 60.9375 92.1875 64.4353 92.1875 68.75V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V68.75Z" fill="#B7E2FD"></path><path d="M45.1753 42.5691C45.7014 43.8829 44.7338 45.3125 43.3186 45.3125H42.7344C41.9067 45.3125 41.1645 44.8027 40.8675 44.0301L39.4073 40.2313H30.4657L29.0979 43.9955C28.8106 44.7861 28.0594 45.3125 27.2182 45.3125H26.7535C25.3463 45.3125 24.3791 43.8979 24.8898 42.5866L32.0446 24.2172C32.3438 23.449 33.0838 22.9431 33.9083 22.9431H35.9633C36.7809 22.9431 37.5161 23.4407 37.82 24.1997L45.1753 42.5691ZM37.9578 36.4624L34.8755 28.1616L31.8542 36.4624H37.9578Z" fill="white"></path><path d="M50.6847 45.3125C49.5801 45.3125 48.6847 44.4171 48.6847 43.3125V24.9431C48.6847 23.8385 49.5801 22.9431 50.6847 22.9431H55.9326C58.6792 22.9431 60.4696 23.055 61.3037 23.2788C62.5854 23.6145 63.6586 24.3469 64.5233 25.4761C65.388 26.5951 65.8203 28.0446 65.8203 29.8248C65.8203 31.1981 65.5711 32.3527 65.0726 33.2886C64.5742 34.2244 63.9384 34.962 63.1653 35.5011C62.4023 36.0301 61.6241 36.381 60.8307 36.554C59.7524 36.7676 58.1909 36.8744 56.1462 36.8744H53.2013V43.3125C53.2013 44.4171 52.3059 45.3125 51.2013 45.3125H50.6847ZM53.2013 26.7273V33.075H55.6732C57.4534 33.075 58.6436 32.958 59.2438 32.724C59.844 32.49 60.3119 32.1238 60.6476 31.6254C60.9935 31.1269 61.1664 30.5471 61.1664 29.8859C61.1664 29.0721 60.9273 28.4007 60.4492 27.8717C59.9711 27.3427 59.3658 27.0121 58.6334 26.8799C58.0943 26.7782 57.0109 26.7273 55.3833 26.7273H53.2013Z" fill="white"></path><path d="M71.3909 45.3125C70.2863 45.3125 69.3909 44.4171 69.3909 43.3125V24.9431C69.3909 23.8385 70.2863 22.9431 71.3909 22.9431H71.9075C73.012 22.9431 73.9075 23.8385 73.9075 24.9431V43.3125C73.9075 44.4171 73.012 45.3125 71.9075 45.3125H71.3909Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.3789 73.2342L28.2214 70.0768C27.001 68.8564 27.001 66.8777 28.2214 65.6573C29.4418 64.4369 31.4205 64.4369 32.6408 65.6573L41.4583 74.4748C41.4654 74.4818 41.4725 74.4888 41.4796 74.4959C41.8347 74.851 42.0865 75.2704 42.235 75.7166C42.2459 75.7496 42.2563 75.7826 42.2662 75.8159C42.5809 76.8789 42.3188 78.0765 41.4797 78.9156C41.4699 78.9254 41.46 78.9351 41.4502 78.9447L32.6408 87.7541C31.4204 88.9745 29.4417 88.9745 28.2213 87.7541C27.0009 86.5337 27.0009 84.5551 28.2213 83.3347L32.0718 79.4842L16.9195 79.4842C15.1936 79.4842 13.7945 78.0851 13.7945 76.3592C13.7945 74.6333 15.1936 73.2342 16.9195 73.2342H31.3789Z" fill="#3392DB"></path><path d="M12.5 15.2344C12.5 13.7242 13.7242 12.5 15.2344 12.5C16.7445 12.5 17.9688 13.7242 17.9688 15.2344C17.9688 16.7445 16.7445 17.9688 15.2344 17.9688C13.7242 17.9688 12.5 16.7445 12.5 15.2344Z" fill="#B7E2FD"></path><path d="M21.0938 15.2344C21.0938 13.7242 22.318 12.5 23.8281 12.5C25.3383 12.5 26.5625 13.7242 26.5625 15.2344C26.5625 16.7445 25.3383 17.9688 23.8281 17.9688C22.318 17.9688 21.0938 16.7445 21.0938 15.2344Z" fill="#B7E2FD"></path><path d="M29.6875 15.2344C29.6875 13.7242 30.9117 12.5 32.4219 12.5C33.932 12.5 35.1562 13.7242 35.1562 15.2344C35.1562 16.7445 33.932 17.9688 32.4219 17.9688C30.9117 17.9688 29.6875 16.7445 29.6875 15.2344Z" fill="#B7E2FD"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-api-write-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V46.875C92.1875 51.1897 88.6897 54.6875 84.375 54.6875H15.625C11.3103 54.6875 7.8125 51.1897 7.8125 46.875V15.625Z" fill="#F0AC3C"></path><path d="M7.8125 68.75C7.8125 64.4353 11.3103 60.9375 15.625 60.9375H84.375C88.6897 60.9375 92.1875 64.4353 92.1875 68.75V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V68.75Z" fill="#FFDC91"></path><path d="M46.2738 45.3125H41.3605L39.4073 40.2313H30.4657L28.6194 45.3125H23.8281L32.5409 22.9431H37.3169L46.2738 45.3125ZM37.9578 36.4624L34.8755 28.1616L31.8542 36.4624H37.9578Z" fill="white"></path><path d="M48.6847 45.3125V22.9431H55.9326C58.6792 22.9431 60.4696 23.055 61.3037 23.2788C62.5854 23.6145 63.6586 24.3469 64.5233 25.4761C65.388 26.5951 65.8203 28.0446 65.8203 29.8248C65.8203 31.1981 65.5711 32.3527 65.0726 33.2886C64.5742 34.2244 63.9384 34.962 63.1653 35.5011C62.4023 36.0301 61.6241 36.381 60.8307 36.554C59.7524 36.7676 58.1909 36.8744 56.1462 36.8744H53.2013V45.3125H48.6847ZM53.2013 26.7273V33.075H55.6732C57.4534 33.075 58.6436 32.958 59.2438 32.724C59.844 32.49 60.3119 32.1238 60.6476 31.6254C60.9935 31.1269 61.1664 30.5471 61.1664 29.8859C61.1664 29.0721 60.9273 28.4007 60.4492 27.8717C59.9711 27.3427 59.3658 27.0121 58.6334 26.8799C58.0943 26.7782 57.0109 26.7273 55.3833 26.7273H53.2013Z" fill="white"></path><path d="M69.3909 45.3125V22.9431H73.9075V45.3125H69.3909Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M73.5664 79.8305L70.4089 82.9879C69.1885 84.2083 69.1885 86.187 70.4089 87.4074C71.6293 88.6277 73.608 88.6277 74.8283 87.4074L83.6458 78.5899C83.6529 78.5829 83.66 78.5759 83.6671 78.5688C84.0222 78.2137 84.274 77.7943 84.4225 77.3481C84.4334 77.3151 84.4438 77.2821 84.4537 77.2488C84.7684 76.1858 84.5063 74.9882 83.6672 74.1491C83.6574 74.1393 83.6475 74.1296 83.6377 74.12L74.8283 65.3106C73.6079 64.0902 71.6292 64.0902 70.4088 65.3106C69.1884 66.531 69.1884 68.5096 70.4088 69.73L74.2593 73.5805L59.107 73.5805C57.3811 73.5805 55.982 74.9796 55.982 76.7055C55.982 78.4314 57.3811 79.8305 59.107 79.8305L73.5664 79.8305Z" fill="#E59005"></path><path d="M12.5 15.2344C12.5 13.7242 13.7242 12.5 15.2344 12.5C16.7445 12.5 17.9688 13.7242 17.9688 15.2344C17.9688 16.7445 16.7445 17.9688 15.2344 17.9688C13.7242 17.9688 12.5 16.7445 12.5 15.2344Z" fill="#FFDC91"></path><path d="M21.0938 15.2344C21.0938 13.7242 22.318 12.5 23.8281 12.5C25.3383 12.5 26.5625 13.7242 26.5625 15.2344C26.5625 16.7445 25.3383 17.9688 23.8281 17.9688C22.318 17.9688 21.0938 16.7445 21.0938 15.2344Z" fill="#FFDC91"></path><path d="M29.6875 15.2344C29.6875 13.7242 30.9117 12.5 32.4219 12.5C33.932 12.5 35.1562 13.7242 35.1562 15.2344C35.1562 16.7445 33.932 17.9688 32.4219 17.9688C30.9117 17.9688 29.6875 16.7445 29.6875 15.2344Z" fill="#FFDC91"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-association-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M89.0625 30.0781H78.125V23.0469H89.4531C93.1206 23.0469 96.0938 26.02 96.0938 29.6875V70.3125C96.0938 73.98 93.1206 76.9531 89.4531 76.9531H78.125V69.9219H89.0625V30.0781Z" fill="#57B25D"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H75C79.3147 7.8125 82.8125 11.3103 82.8125 15.625V37.5C82.8125 41.8147 79.3147 45.3125 75 45.3125H15.625C11.3103 45.3125 7.8125 41.8147 7.8125 37.5V15.625Z" fill="#57B25D"></path><path d="M15.625 17.5781C15.625 15.6365 17.199 14.0625 19.1406 14.0625H29.2969C31.2385 14.0625 32.8125 15.6365 32.8125 17.5781C32.8125 19.5198 31.2385 21.0938 29.2969 21.0938H19.1406C17.199 21.0938 15.625 19.5198 15.625 17.5781Z" fill="white"></path><path d="M7.8125 62.5C7.8125 58.1853 11.3103 54.6875 15.625 54.6875H75C79.3147 54.6875 82.8125 58.1853 82.8125 62.5V84.375C82.8125 88.6897 79.3147 92.1875 75 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V62.5Z" fill="#57B25D"></path><path d="M15.625 82.4219C15.625 80.4802 17.199 78.9062 19.1406 78.9062H29.2969C31.2385 78.9062 32.8125 80.4802 32.8125 82.4219C32.8125 84.3635 31.2385 85.9375 29.2969 85.9375H19.1406C17.199 85.9375 15.625 84.3635 15.625 82.4219Z" fill="white"></path><path d="M24.7844 69.1004C19.5101 63.4688 19.7996 54.6279 25.4312 49.3535L45.8248 30.2535C51.4563 24.9791 60.2973 25.2687 65.5716 30.9002C70.846 36.5318 70.5564 45.3727 64.9249 50.6471L44.5313 69.7471C38.8997 75.0215 30.0587 74.7319 24.7844 69.1004Z" fill="white"></path><path d="M43.137 64.3521L41.2027 66.2245C39.4453 67.9251 37.1359 68.7743 34.8284 68.7743C32.52 68.7743 30.2126 67.9248 28.4561 66.2251C26.7477 64.5722 25.8081 62.3743 25.8081 60.036C25.8081 57.6961 26.7478 55.4975 28.4551 53.8437L35.5718 46.959C39.996 42.6793 45.0754 42.0645 48.5137 45.3901C49.4404 46.2877 49.4462 47.7496 48.5252 48.6537C47.6043 49.559 46.1062 49.5649 45.1772 48.6655C43.1557 46.7105 40.3819 48.8097 38.907 50.2364L31.7904 57.1215C30.9851 57.8992 30.5434 58.9349 30.5434 60.0357C30.5434 61.1354 30.9851 62.1705 31.7904 62.9488C33.4654 64.57 36.1912 64.5677 37.866 62.9488L39.8003 61.0762C40.7281 60.1792 42.2274 60.1837 43.1485 61.088C44.0698 61.9926 44.0648 63.4545 43.137 64.3521ZM61.3663 46.7157L53.7745 54.0591C51.4285 56.3294 48.9633 57.476 46.6282 57.476C44.7215 57.476 42.9012 56.7114 41.3086 55.1694C40.3798 54.2709 40.374 52.8093 41.2967 51.9053C42.2178 51.0007 43.7161 50.9946 44.644 51.8932C45.3384 52.5655 46.9685 54.1424 50.438 50.7834L58.032 43.4393C58.8357 42.6605 59.2785 41.6246 59.2785 40.5241C59.2785 39.4243 58.8363 38.3896 58.0298 37.6099C56.5182 36.1479 54.2004 35.437 52.4296 37.1514L50.0211 39.4834C49.0931 40.3808 47.5947 40.3758 46.6727 39.4715C45.7508 38.5665 45.7569 37.1052 46.6855 36.2068L49.095 33.8749C52.5116 30.5681 57.6744 30.7624 61.3662 34.3344C63.0736 35.9878 64.0144 38.1853 64.0144 40.524C64.0145 42.8639 63.0736 45.0623 61.3663 46.7157Z" fill="#248F2E"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-col-row-translate-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V23.4375C92.1875 27.7522 88.6897 31.25 84.375 31.25H15.625C11.3103 31.25 7.8125 27.7522 7.8125 23.4375V15.625Z" fill="#AFC6E8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 38.2812C11.3103 38.2812 7.8125 41.779 7.8125 46.0938V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H42.1875C46.5022 92.1875 50 88.6897 50 84.375V46.0938C50 41.779 46.5022 38.2812 42.1875 38.2812H15.625ZM16.4062 45.3125C15.5433 45.3125 14.8438 46.0121 14.8438 46.875V52.3438C14.8438 53.2067 15.5433 53.9062 16.4063 53.9062H41.4062C42.2692 53.9062 42.9688 53.2067 42.9688 52.3438V46.875C42.9688 46.0121 42.2692 45.3125 41.4062 45.3125H16.4062ZM14.8438 62.5C14.8438 61.6371 15.5433 60.9375 16.4062 60.9375H41.4062C42.2692 60.9375 42.9688 61.6371 42.9688 62.5V67.9688C42.9688 68.8317 42.2692 69.5312 41.4062 69.5312H16.4063C15.5433 69.5312 14.8438 68.8317 14.8438 67.9688V62.5ZM16.4062 76.5625C15.5433 76.5625 14.8438 77.2621 14.8438 78.125V83.5938C14.8438 84.4567 15.5433 85.1562 16.4063 85.1562H41.4062C42.2692 85.1562 42.9688 84.4567 42.9688 83.5938V78.125C42.9688 77.2621 42.2692 76.5625 41.4062 76.5625H16.4062Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M65.7893 82.9053L68.7908 85.9067C70.0111 87.1271 70.0111 89.1058 68.7908 90.3262C67.5704 91.5466 65.5917 91.5466 64.3713 90.3262L55.3347 81.2895C54.1143 80.0692 54.1143 78.0905 55.3347 76.8701L64.3713 67.8335C65.5917 66.6131 67.5704 66.6131 68.7908 67.8335C70.0111 69.0539 70.0111 71.0325 68.7908 72.2529L65.1697 75.874H70.7032C77.391 75.874 82.8126 70.4525 82.8126 63.7647V42.5778C82.8126 40.6362 84.3866 39.0622 86.3282 39.0622C88.2698 39.0622 89.8438 40.6362 89.8438 42.5778V63.7647C89.8438 74.3357 81.2743 82.9053 70.7032 82.9053H65.7893Z" fill="#537BC6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-comparison-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 92.1875C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H31.25C35.5647 7.8125 39.0625 11.3103 39.0625 15.625V84.375C39.0625 88.6897 35.5647 92.1875 31.25 92.1875H15.625ZM23.4375 78.125C21.4959 78.125 19.9219 76.551 19.9219 74.6094C19.9219 72.6677 21.4959 71.0938 23.4375 71.0938C25.3791 71.0938 26.9531 72.6677 26.9531 74.6094C26.9531 76.551 25.3791 78.125 23.4375 78.125ZM19.9219 60.5469C19.9219 62.4885 21.4959 64.0625 23.4375 64.0625C25.3791 64.0625 26.9531 62.4885 26.9531 60.5469C26.9531 58.6052 25.3791 57.0312 23.4375 57.0312C21.4959 57.0312 19.9219 58.6052 19.9219 60.5469Z" fill="#57B25D"></path><path d="M64.4531 19.1406C64.4531 14.8259 67.9509 11.3281 72.2656 11.3281H80.8594C85.1741 11.3281 88.6719 14.8259 88.6719 19.1406V80.8594C88.6719 85.1741 85.1741 88.6719 80.8594 88.6719H72.2656C67.9509 88.6719 64.4531 85.1741 64.4531 80.8594V19.1406Z" fill="#BEE4BF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60.9375 19.1406C60.9375 12.8843 66.0093 7.8125 72.2656 7.8125H80.8594C87.1157 7.8125 92.1875 12.8843 92.1875 19.1406V80.8594C92.1875 87.1157 87.1157 92.1875 80.8594 92.1875H72.2656C66.0093 92.1875 60.9375 87.1157 60.9375 80.8594V19.1406ZM72.2656 14.8438C69.8925 14.8438 67.9688 16.7675 67.9688 19.1406V80.8594C67.9688 83.2325 69.8925 85.1562 72.2656 85.1562H80.8594C83.2325 85.1562 85.1562 83.2325 85.1562 80.8594V19.1406C85.1562 16.7675 83.2325 14.8438 80.8594 14.8438H72.2656Z" fill="#57B25D"></path><path d="M73.0469 74.6094C73.0469 72.6677 74.6209 71.0938 76.5625 71.0938C78.5041 71.0938 80.0781 72.6677 80.0781 74.6094C80.0781 76.551 78.5041 78.125 76.5625 78.125C74.6209 78.125 73.0469 76.551 73.0469 74.6094Z" fill="#57B25D"></path><path d="M73.0469 60.5469C73.0469 58.6052 74.6209 57.0312 76.5625 57.0312C78.5041 57.0312 80.0781 58.6052 80.0781 60.5469C80.0781 62.4885 78.5041 64.0625 76.5625 64.0625C74.6209 64.0625 73.0469 62.4885 73.0469 60.5469Z" fill="#57B25D"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M50 19.5312C48.0584 19.5312 46.4844 17.9573 46.4844 16.0156V11.3281C46.4844 9.3865 48.0584 7.8125 50 7.8125C51.9416 7.8125 53.5156 9.3865 53.5156 11.3281V16.0156C53.5156 17.9573 51.9416 19.5312 50 19.5312ZM50 37.5C48.0584 37.5 46.4844 35.926 46.4844 33.9844V29.6875C46.4844 27.7459 48.0584 26.1719 50 26.1719C51.9416 26.1719 53.5156 27.7459 53.5156 29.6875V33.9844C53.5156 35.926 51.9416 37.5 50 37.5ZM46.4844 52.3438C46.4844 54.2854 48.0584 55.8594 50 55.8594C51.9416 55.8594 53.5156 54.2854 53.5156 52.3438L53.5156 47.6562C53.5156 45.7146 51.9416 44.1406 50 44.1406C48.0584 44.1406 46.4844 45.7146 46.4844 47.6562V52.3438ZM50 73.8281C48.0584 73.8281 46.4844 72.2541 46.4844 70.3125V66.0156C46.4844 64.074 48.0584 62.5 50 62.5C51.9416 62.5 53.5156 64.074 53.5156 66.0156V70.3125C53.5156 72.2541 51.9416 73.8281 50 73.8281ZM46.4844 88.6719C46.4844 90.6135 48.0584 92.1875 50 92.1875C51.9416 92.1875 53.5156 90.6135 53.5156 88.6719L53.5156 83.9844C53.5156 82.0427 51.9416 80.4688 50 80.4688C48.0584 80.4688 46.4844 82.0427 46.4844 83.9844V88.6719Z" fill="#57B25D"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" id="prep-visualization-db-read-font"><g clip-path="url(#prep-visualization-db-read-font_clip0_11630_164502)"><path fill-rule="evenodd" clip-rule="evenodd" d="M255.9 0.1H0.1V255.9H255.9V0.1ZM0 0V256H256V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C20 28.9543 28.9543 20 40 20H181L236 75V216C236 227.046 227.046 236 216 236H97.1779C113.345 225.251 124 206.87 124 186C124 152.863 97.1371 126 64 126H20V40Z" fill="#3392DB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M97.1779 236H216C227.046 236 236 227.046 236 216V136H97.1779C113.345 146.749 124 165.13 124 186C124 206.87 113.345 225.251 97.1779 236ZM64 136H20V216C20 227.046 28.9543 236 40 236H64C91.6142 236 114 213.614 114 186C114 158.386 91.6142 136 64 136Z" fill="#8CCDF8"></path><g filter="url(#prep-visualization-db-read-font_filter0_d_11630_164502)"><path d="M193 75H236L181 20V63C181 69.6274 186.373 75 193 75Z" fill="#8CCDF8"></path></g><path d="M67 53C67 51.8954 67.8954 51 69 51H88.1328C92.8984 51 96.5312 51.3646 99.0312 52.0938C102.391 53.0833 105.268 54.8411 107.664 57.3672C110.06 59.8932 111.883 62.9922 113.133 66.6641C114.383 70.3099 115.008 74.8151 115.008 80.1797C115.008 84.8932 114.422 88.9557 113.25 92.3672C111.818 96.5339 109.773 99.9062 107.117 102.484C105.112 104.438 102.404 105.961 98.9922 107.055C96.4401 107.862 93.0286 108.266 88.7578 108.266H69C67.8954 108.266 67 107.37 67 106.266V53ZM78.5625 60.6875V98.6172H87.1953C90.4245 98.6172 92.7552 98.4349 94.1875 98.0703C96.0625 97.6016 97.612 96.8073 98.8359 95.6875C100.086 94.5677 101.102 92.7318 101.883 90.1797C102.664 87.6016 103.055 84.099 103.055 79.6719C103.055 75.2448 102.664 71.8464 101.883 69.4766C101.102 67.1068 100.008 65.2578 98.6016 63.9297C97.1953 62.6016 95.4115 61.7031 93.25 61.2344C91.6354 60.8698 88.4714 60.6875 83.7578 60.6875H78.5625Z" fill="white"></path><path d="M131.291 53C131.291 51.8954 132.186 51 133.291 51H154.181C158.713 51 162.085 51.1953 164.298 51.5859C166.538 51.9505 168.53 52.7318 170.275 53.9297C172.046 55.1276 173.517 56.7292 174.689 58.7344C175.861 60.7135 176.447 62.9401 176.447 65.4141C176.447 68.0964 175.718 70.5573 174.259 72.7969C172.827 75.0365 170.874 76.7161 168.4 77.8359C171.89 78.8516 174.572 80.5833 176.447 83.0312C178.322 85.4792 179.259 88.3568 179.259 91.6641C179.259 94.2682 178.647 96.8073 177.423 99.2812C176.226 101.729 174.572 103.695 172.463 105.18C170.379 106.638 167.801 107.536 164.728 107.875C162.801 108.083 158.153 108.214 150.783 108.266H133.291C132.186 108.266 131.291 107.37 131.291 106.266V53ZM142.853 60.5312V73.7734H150.431C154.936 73.7734 157.736 73.7083 158.83 73.5781C160.809 73.3438 162.358 72.6667 163.478 71.5469C164.624 70.401 165.197 68.9036 165.197 67.0547C165.197 65.2839 164.702 63.8516 163.713 62.7578C162.749 61.638 161.304 60.9609 159.377 60.7266C158.231 60.5964 154.936 60.5312 149.494 60.5312H142.853ZM142.853 83.3047V98.6172H153.556C157.723 98.6172 160.366 98.5 161.486 98.2656C163.205 97.9531 164.598 97.1979 165.666 96C166.759 94.776 167.306 93.1484 167.306 91.1172C167.306 89.3984 166.89 87.9401 166.056 86.7422C165.223 85.5443 164.012 84.6719 162.423 84.125C160.861 83.5781 157.449 83.3047 152.189 83.3047H142.853Z" fill="white"></path><path d="M20 136H64C91.6142 136 114 158.386 114 186C114 213.614 91.6142 236 64 236H40C28.9543 236 20 227.046 20 216V136Z" fill="#DCF2FE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M73.3289 177.48L65.2458 169.397C62.1216 166.272 62.1216 161.207 65.2458 158.083C68.37 154.959 73.4353 154.959 76.5595 158.083L99.1323 180.656C99.1505 180.674 99.1687 180.691 99.1867 180.71C100.096 181.619 100.741 182.692 101.121 183.835C101.149 183.919 101.175 184.004 101.2 184.089C102.006 186.81 101.335 189.876 99.187 192.024C99.1619 192.049 99.1367 192.074 99.1114 192.099L76.5593 214.651C73.4351 217.775 68.3698 217.775 65.2456 214.651C62.1214 211.526 62.1214 206.461 65.2456 203.337L75.1029 193.48L36.3129 193.48C31.8946 193.48 28.3129 189.898 28.3129 185.48C28.3129 181.061 31.8946 177.48 36.3129 177.48L73.3289 177.48Z" fill="#3392DB"></path><path d="M169 213C169 209.134 172.134 206 176 206H213C216.866 206 220 209.134 220 213C220 216.866 216.866 220 213 220H176C172.134 220 169 216.866 169 213Z" fill="white"></path><path d="M190 189C190 185.134 193.134 182 197 182H213C216.866 182 220 185.134 220 189C220 192.866 216.866 196 213 196H197C193.134 196 190 192.866 190 189Z" fill="white"></path></g><defs><filter id="prep-visualization-db-read-font_filter0_d_11630_164502" x="175" y="18" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.209697 0 0 0 0 0.370833 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11630_164502"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11630_164502" result="shape"></feBlend></filter><clipPath id="prep-visualization-db-read-font_clip0_11630_164502"><rect width="256" height="256" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-db-write-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H70.7031L92.1875 29.2969V49.2188H75C62.0558 49.2188 51.5625 59.7121 51.5625 72.6562C51.5625 80.8085 55.7246 87.9886 62.0399 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625ZM75 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V53.125H75C64.2132 53.125 55.4688 61.8694 55.4688 72.6562C55.4688 83.4431 64.2132 92.1875 75 92.1875Z" fill="#F0AC3C"></path><g filter="url(#prep-visualization-db-write-font_filter0_d_2890_24586)"><path d="M75.3906 29.2969H92.1875L70.7031 7.8125V24.6094C70.7031 27.1982 72.8018 29.2969 75.3906 29.2969Z" fill="#FFDC91"></path></g><path d="M26.1719 19.9219H34.4269C36.2885 19.9219 37.7075 20.0643 38.6841 20.3491C39.9963 20.7357 41.1204 21.4223 42.0563 22.4091C42.9921 23.3958 43.7042 24.6063 44.1925 26.0406C44.6808 27.4648 44.9249 29.2247 44.9249 31.3202C44.9249 33.1614 44.696 34.7483 44.2383 36.0809C43.6788 37.7085 42.8802 39.0259 41.8427 40.033C41.0594 40.7959 40.0014 41.391 38.6688 41.8182C37.6719 42.1336 36.3393 42.2913 34.671 42.2913H26.1719V19.9219ZM30.6885 23.7061V38.5223H34.0607C35.3221 38.5223 36.2325 38.4511 36.792 38.3087C37.5244 38.1256 38.1297 37.8153 38.6078 37.3779C39.0961 36.9405 39.4928 36.2233 39.798 35.2264C40.1031 34.2194 40.2557 32.8512 40.2557 31.1218C40.2557 29.3925 40.1031 28.065 39.798 27.1393C39.4928 26.2136 39.0656 25.4913 38.5162 24.9725C37.9669 24.4537 37.2701 24.1028 36.4258 23.9197C35.7951 23.7773 34.5591 23.7061 32.7179 23.7061H30.6885Z" fill="white"></path><path d="M51.2854 19.9219H60.2271C61.9971 19.9219 63.3144 19.9982 64.1791 20.1508C65.0539 20.2932 65.8321 20.5983 66.5137 21.0663C67.2054 21.5342 67.7802 22.1598 68.2379 22.9431C68.6957 23.7162 68.9246 24.586 68.9246 25.5524C68.9246 26.6001 68.6397 27.5614 68.0701 28.4363C67.5106 29.3111 66.7476 29.9672 65.7812 30.4047C67.1444 30.8014 68.1921 31.4779 68.9246 32.4341C69.657 33.3903 70.0232 34.5144 70.0232 35.8063C70.0232 36.8235 69.7841 37.8153 69.306 38.7817C68.8381 39.738 68.1921 40.506 67.3682 41.0858C66.5544 41.6555 65.5473 42.0064 64.3469 42.1387C63.5942 42.2201 61.7784 42.2709 58.8995 42.2913H51.2854V19.9219ZM55.802 23.645V28.8177H58.7622C60.5221 28.8177 61.6156 28.7923 62.0428 28.7415C62.816 28.6499 63.4212 28.3854 63.8586 27.948C64.3062 27.5004 64.53 26.9155 64.53 26.1932C64.53 25.5015 64.3368 24.942 63.9502 24.5148C63.5738 24.0774 63.0092 23.8129 62.2565 23.7213C61.8089 23.6705 60.5221 23.645 58.396 23.645H55.802ZM55.802 32.5409V38.5223H59.9829C61.6105 38.5223 62.643 38.4766 63.0804 38.385C63.7518 38.2629 64.2961 37.9679 64.7131 37.5C65.1404 37.0219 65.354 36.3861 65.354 35.5927C65.354 34.9213 65.1912 34.3516 64.8657 33.8837C64.5402 33.4157 64.0672 33.075 63.4467 32.8613C62.8363 32.6477 61.5037 32.5409 59.4489 32.5409H55.802Z" fill="white"></path><path d="M92.1875 53.125H75C64.2132 53.125 55.4688 61.8694 55.4688 72.6562L-nan -nanL55.4688 72.6562C55.4688 83.4431 64.2132 92.1875 75 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V53.125Z" fill="#FFF5D7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M75 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V53.125H75C64.2132 53.125 55.4688 61.8694 55.4688 72.6562C55.4688 83.4431 64.2132 92.1875 75 92.1875ZM62.0399 53.125C55.7246 57.3239 51.5625 64.504 51.5625 72.6562C51.5625 80.8085 55.7246 87.9886 62.0399 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V53.125H62.0399Z" fill="#FFDC91"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M77.9243 75.925L74.7668 79.0824C73.5464 80.3028 73.5464 82.2815 74.7668 83.5018C75.9872 84.7222 77.9659 84.7222 79.1863 83.5018L88.0038 74.6843C88.0109 74.6774 88.0179 74.6704 88.025 74.6633C88.3801 74.3081 88.6319 73.8888 88.7804 73.4426C88.7913 73.4096 88.8017 73.3765 88.8116 73.3433C89.1263 72.2802 88.8642 71.0827 88.0251 70.2436C88.0153 70.2338 88.0055 70.2241 87.9956 70.2145L79.1862 61.405C77.9658 60.1847 75.9871 60.1847 74.7667 61.405C73.5464 62.6254 73.5464 64.6041 74.7667 65.8245L78.6172 69.675L63.4649 69.675C61.739 69.675 60.3399 71.0741 60.3399 72.8C60.3399 74.5259 61.739 75.925 63.4649 75.925L77.9243 75.925Z" fill="#E59005"></path><path d="M14.0625 83.2031C14.0625 81.693 15.2867 80.4688 16.7969 80.4688H31.25C32.7602 80.4688 33.9844 81.693 33.9844 83.2031C33.9844 84.7133 32.7602 85.9375 31.25 85.9375H16.7969C15.2867 85.9375 14.0625 84.7133 14.0625 83.2031Z" fill="white"></path><path d="M14.0625 73.8281C14.0625 72.318 15.2867 71.0938 16.7969 71.0938H23.0469C24.557 71.0938 25.7812 72.318 25.7812 73.8281C25.7812 75.3383 24.557 76.5625 23.0469 76.5625H16.7969C15.2867 76.5625 14.0625 75.3383 14.0625 73.8281Z" fill="white"></path><defs><filter id="prep-visualization-db-write-font_filter0_d_2890_24586" x="64.7031" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.209697 0 0 0 0 0.370833 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_24586"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_24586" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-field-transform-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M92.1875 41.382C87.982 44.8156 82.6104 46.875 76.7578 46.875C63.2743 46.875 52.3438 35.9445 52.3438 22.4609C52.3438 16.9648 54.1599 11.8929 57.2248 7.8125H15.625C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V41.382Z" fill="#537BC6"></path><path d="M83.4312 5.56789L83.5562 5.62414C83.825 5.73039 84.4937 6.03039 85.6687 6.69289C87.225 7.58039 87.7812 8.04289 87.7812 8.04289C88.0919 8.3318 88.3196 8.69867 88.4405 9.10535C88.5614 9.51203 88.5711 9.94367 88.4687 10.3554L88.2812 10.9054C87.9289 12.3446 88.1508 13.8645 88.9 15.1429C89.6519 16.4228 90.8633 17.3682 92.2875 17.7866L92.8687 17.9116C93.2802 18.0249 93.6538 18.2465 93.9506 18.5531C94.2473 18.8598 94.4565 19.2404 94.5562 19.6554H94.5687C94.5687 19.6554 94.6937 20.3491 94.6937 22.1366C94.6937 23.9116 94.5687 24.6054 94.5687 24.6054C94.468 25.0192 94.2584 25.3985 93.9617 25.704C93.665 26.0095 93.2919 26.2301 92.8812 26.3429L92.3375 26.4804C90.9003 26.8928 89.6764 27.8414 88.9187 29.1304C88.1705 30.4021 87.9463 31.9151 88.2937 33.3491L88.4687 33.9116C88.5711 34.3234 88.5614 34.755 88.4405 35.1617C88.3196 35.5684 88.0919 35.9352 87.7812 36.2241C87.7812 36.2241 87.2375 36.6804 85.675 37.5679C84.125 38.4491 83.4375 38.6929 83.4375 38.6929C83.0282 38.8169 82.5933 38.8302 82.1772 38.7314C81.7611 38.6326 81.3786 38.4252 81.0687 38.1304L80.6875 37.7179C79.5923 36.6942 78.1491 36.1247 76.65 36.1247C75.1509 36.1247 73.7077 36.6942 72.6125 37.7179L72.2187 38.1179C71.9095 38.4138 71.5276 38.6227 71.1116 38.7237C70.6957 38.8247 70.2605 38.814 69.85 38.6929C69.85 38.6929 69.1812 38.4491 67.6187 37.5616C66.8803 37.1711 66.1758 36.7195 65.5125 36.2116C65.2001 35.9239 64.9714 35.5571 64.8503 35.1501C64.7293 34.743 64.7206 34.3108 64.825 33.8991L64.9875 33.3679C65.3397 31.9259 65.1155 30.4034 64.3625 29.1241C63.6109 27.8336 62.391 26.8823 60.9562 26.4679L60.3938 26.3429C59.9859 26.2284 59.6161 26.0069 59.3227 25.7014C59.0293 25.3959 58.8229 25.0175 58.725 24.6054C58.725 24.6054 58.625 24.0741 58.6 22.7491L58.5938 22.1366C58.5938 20.3554 58.7187 19.6616 58.7187 19.6616C58.8195 19.2478 59.0291 18.8685 59.3258 18.563C59.6225 18.2575 59.9956 18.0369 60.4062 17.9241L60.9688 17.7929C62.4022 17.3953 63.6246 16.4553 64.3771 15.172C65.1295 13.8888 65.3529 12.363 65 10.9179L64.8313 10.3554C64.7265 9.94572 64.7351 9.51525 64.8562 9.1101C64.9773 8.70495 65.2063 8.34037 65.5187 8.05539C65.5187 8.05539 66.0625 7.59289 67.6187 6.69914C69.1812 5.82414 69.8562 5.57414 69.8562 5.57414C70.2664 5.44892 70.7026 5.43502 71.1199 5.53386C71.5372 5.63271 71.9208 5.84074 72.2312 6.13664L72.625 6.56164C73.7168 7.5813 75.1561 8.14673 76.65 8.14289C78.1375 8.15115 79.5723 7.59243 80.6625 6.58039L81.0687 6.14289C81.3786 5.84808 81.7611 5.6407 82.1772 5.54188C82.5933 5.44307 83.0282 5.45636 83.4375 5.58039L83.4312 5.56789ZM76.6437 15.0429C72.6625 15.0429 69.4437 18.2179 69.4437 22.1429C69.4437 26.0679 72.6687 29.2429 76.6437 29.2429C80.6125 29.2429 83.8312 26.0679 83.8312 22.1429C83.8312 18.2179 80.6125 15.0429 76.6437 15.0429Z" fill="#537BC6"></path><path d="M14.8438 48.8281C14.8438 47.9652 15.5433 47.2656 16.4062 47.2656H44.5312C45.3942 47.2656 46.0938 47.9652 46.0938 48.8281V53.9062C46.0938 54.7692 45.3942 55.4688 44.5312 55.4688H16.4063C15.5433 55.4688 14.8438 54.7692 14.8438 53.9062V48.8281Z" fill="white"></path><path d="M14.8438 63.6719C14.8438 62.8089 15.5433 62.1094 16.4062 62.1094H44.5312C45.3942 62.1094 46.0938 62.8089 46.0938 63.6719V68.75C46.0938 69.6129 45.3942 70.3125 44.5312 70.3125H16.4063C15.5433 70.3125 14.8438 69.6129 14.8438 68.75V63.6719Z" fill="white"></path><path d="M14.8438 78.5156C14.8438 77.6527 15.5433 76.9531 16.4062 76.9531H44.5312C45.3942 76.9531 46.0938 77.6527 46.0938 78.5156V83.5938C46.0938 84.4567 45.3942 85.1562 44.5312 85.1562H16.4063C15.5433 85.1562 14.8438 84.4567 14.8438 83.5938V78.5156Z" fill="white"></path><path d="M53.9062 48.8281C53.9062 47.9652 54.6058 47.2656 55.4688 47.2656H83.5938C84.4567 47.2656 85.1562 47.9652 85.1562 48.8281V53.9062C85.1562 54.7692 84.4567 55.4688 83.5938 55.4688H55.4688C54.6058 55.4688 53.9062 54.7692 53.9062 53.9062V48.8281Z" fill="white"></path><path d="M53.9062 63.6719C53.9062 62.8089 54.6058 62.1094 55.4688 62.1094H83.5938C84.4567 62.1094 85.1562 62.8089 85.1562 63.6719V68.75C85.1562 69.6129 84.4567 70.3125 83.5938 70.3125H55.4688C54.6058 70.3125 53.9062 69.6129 53.9062 68.75V63.6719Z" fill="white"></path><path d="M53.9062 78.5156C53.9062 77.6527 54.6058 76.9531 55.4688 76.9531H83.5938C84.4567 76.9531 85.1562 77.6527 85.1562 78.5156V83.5938C85.1562 84.4567 84.4567 85.1562 83.5938 85.1562H55.4688C54.6058 85.1562 53.9062 84.4567 53.9062 83.5938V78.5156Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-file-read-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.4375 7.8125C19.1228 7.8125 15.625 11.3103 15.625 15.625V84.375C15.625 88.6897 19.1228 92.1875 23.4375 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V29.2969L70.7031 7.8125H23.4375Z" fill="#3392DB"></path><path d="M6.25 57.0312C6.25 52.7165 9.74778 49.2188 14.0625 49.2188H71.0938C75.4085 49.2188 78.9062 52.7165 78.9062 57.0312V84.375C78.9062 88.6897 75.4085 92.1875 71.0938 92.1875H14.0625C9.74778 92.1875 6.25 88.6897 6.25 84.375V57.0312Z" fill="#B7E2FD"></path><g filter="url(#prep-visualization-file-read-font_filter0_d_2890_17820)"><path d="M75.3906 29.2969H92.1875L70.7031 7.8125V24.6094C70.7031 27.1982 72.8018 29.2969 75.3906 29.2969Z" fill="#8CCDF8"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M29.8164 74.3617L26.6589 77.5192C25.4385 78.7396 25.4385 80.7182 26.6589 81.9386C27.8793 83.159 29.858 83.159 31.0783 81.9386L39.8958 73.1211C39.903 73.1141 39.91 73.1071 39.9171 73.1001C40.2722 72.7449 40.524 72.3255 40.6725 71.8793C40.6834 71.8464 40.6938 71.8133 40.7037 71.7801C41.0184 70.717 40.7563 69.5195 39.9172 68.6804C39.9074 68.6706 39.8976 68.6609 39.8877 68.6512L31.0783 59.8418C29.8579 58.6214 27.8792 58.6214 26.6588 59.8418C25.4384 61.0622 25.4384 63.0408 26.6588 64.2612L30.5093 68.1117L15.357 68.1117C13.6311 68.1117 12.232 69.5108 12.232 71.2367C12.232 72.9626 13.6311 74.3617 15.357 74.3617L29.8164 74.3617Z" fill="#3392DB"></path><path d="M24.6147 37.5001V18.4861H37.6496V21.7026H28.4539V26.2032H36.3915V29.4198H28.4539V37.5001H24.6147Z" fill="white"></path><path d="M40.8013 21.8583V18.4861H44.4458V21.8583H40.8013ZM40.8013 37.5001V23.726H44.4458V37.5001H40.8013Z" fill="white"></path><path d="M48.1942 37.5001V18.4861H51.8387V37.5001H48.1942Z" fill="white"></path><path d="M63.5636 33.1162L67.1952 33.7258C66.7282 35.0574 65.989 36.0734 64.9773 36.7737C63.9743 37.4655 62.7162 37.8113 61.203 37.8113C58.8079 37.8113 57.0354 37.0288 55.8853 35.4638C54.9774 34.21 54.5235 32.6277 54.5235 30.7168C54.5235 28.4341 55.1201 26.6485 56.3134 25.3602C57.5066 24.0632 59.0154 23.4147 60.8399 23.4147C62.8891 23.4147 64.5061 24.0934 65.6906 25.451C66.8752 26.7998 67.4416 28.8707 67.3897 31.6636H58.2589C58.2848 32.7444 58.5788 33.5875 59.1408 34.1927C59.7028 34.7893 60.4032 35.0876 61.2419 35.0876C61.8126 35.0876 62.2925 34.932 62.6816 34.6207C63.0707 34.3094 63.3647 33.8079 63.5636 33.1162ZM63.7711 29.4327C63.7451 28.3778 63.4728 27.578 62.954 27.0333C62.4352 26.4799 61.804 26.2032 61.0604 26.2032C60.2649 26.2032 59.6077 26.4929 59.0889 27.0722C58.5701 27.6515 58.3151 28.4384 58.3237 29.4327H63.7711Z" fill="white"></path><defs><filter id="prep-visualization-file-read-font_filter0_d_2890_17820" x="64.7031" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.249752 0 0 0 0 0.441667 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_17820"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_17820" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-file-write-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H76.5625C80.8772 92.1875 84.375 88.6897 84.375 84.375V29.2969L62.8906 7.8125H15.625Z" fill="#F0AC3C"></path><path d="M21.0938 57.0312C21.0938 52.7165 24.5915 49.2188 28.9062 49.2188H85.9375C90.2522 49.2188 93.75 52.7165 93.75 57.0312V84.375C93.75 88.6897 90.2522 92.1875 85.9375 92.1875H28.9063C24.5915 92.1875 21.0938 88.6897 21.0938 84.375V57.0312Z" fill="#FFDC91"></path><g filter="url(#prep-visualization-file-write-font_filter0_d_2890_17864)"><path d="M67.5781 29.2969H84.375L62.8906 7.8125V24.6094C62.8906 27.1982 64.9893 29.2969 67.5781 29.2969Z" fill="#FFDC91"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M74.3476 74.3617L71.1902 77.5192C69.9698 78.7396 69.9698 80.7182 71.1902 81.9386C72.4106 83.159 74.3892 83.159 75.6096 81.9386L84.4271 73.1211C84.4342 73.1141 84.4413 73.1071 84.4483 73.1001C84.8035 72.7449 85.0553 72.3255 85.2037 71.8793C85.2147 71.8464 85.2251 71.8133 85.2349 71.7801C85.5497 70.717 85.2875 69.5195 84.4484 68.6804C84.4386 68.6706 84.4288 68.6609 84.4189 68.6512L75.6095 59.8418C74.3891 58.6214 72.4105 58.6214 71.1901 59.8418C69.9697 61.0622 69.9697 63.0408 71.1901 64.2612L75.0406 68.1117L59.8883 68.1117C58.1624 68.1117 56.7633 69.5108 56.7633 71.2367C56.7633 72.9626 58.1624 74.3617 59.8882 74.3617L74.3476 74.3617Z" fill="#E59005"></path><path d="M16.8022 37.5001V18.4861H29.8371V21.7026H20.6414V26.2032H28.579V29.4198H20.6414V37.5001H16.8022Z" fill="white"></path><path d="M32.9888 21.8583V18.4861H36.6333V21.8583H32.9888ZM32.9888 37.5001V23.726H36.6333V37.5001H32.9888Z" fill="white"></path><path d="M40.3817 37.5001V18.4861H44.0262V37.5001H40.3817Z" fill="white"></path><path d="M55.7511 33.1162L59.3827 33.7258C58.9157 35.0574 58.1765 36.0734 57.1648 36.7737C56.1618 37.4655 54.9037 37.8113 53.3905 37.8113C50.9954 37.8113 49.2229 37.0288 48.0728 35.4638C47.1649 34.21 46.711 32.6277 46.711 30.7168C46.711 28.4341 47.3076 26.6485 48.5009 25.3602C49.6941 24.0632 51.2029 23.4147 53.0274 23.4147C55.0766 23.4147 56.6936 24.0934 57.8781 25.451C59.0627 26.7998 59.6291 28.8707 59.5772 31.6636H50.4464C50.4723 32.7444 50.7663 33.5875 51.3283 34.1927C51.8903 34.7893 52.5907 35.0876 53.4294 35.0876C54.0001 35.0876 54.48 34.932 54.8691 34.6207C55.2582 34.3094 55.5522 33.8079 55.7511 33.1162ZM55.9586 29.4327C55.9326 28.3778 55.6603 27.578 55.1415 27.0333C54.6227 26.4799 53.9915 26.2032 53.2479 26.2032C52.4524 26.2032 51.7952 26.4929 51.2764 27.0722C50.7576 27.6515 50.5026 28.4384 50.5112 29.4327H55.9586Z" fill="white"></path><defs><filter id="prep-visualization-file-write-font_filter0_d_2890_17864" x="56.8906" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.4875 0 0 0 0 0.303333 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_17864"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_17864" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-filter-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H70.3125C74.6272 92.1875 87.5 81.6585 87.5 77.3438V29.2969L66.0156 7.8125H15.625Z" fill="#AFC6E8"></path><g filter="url(#prep-visualization-filter-font_filter0_d_2890_23473)"><path d="M70.7031 29.2969H87.5L66.0156 7.8125V24.6094C66.0156 27.1982 68.1143 29.2969 70.7031 29.2969Z" fill="#668ACC"></path></g><path d="M17.1875 24.2188C17.1875 22.4929 18.8457 21.0938 20.8912 21.0938H40.8275C42.873 21.0938 44.5312 22.4929 44.5312 24.2188C44.5312 25.9446 42.873 27.3438 40.8275 27.3438H20.8912C18.8457 27.3438 17.1875 25.9446 17.1875 24.2188Z" fill="white"></path><path d="M17.1875 35.9375C17.1875 34.2116 18.5866 32.8125 20.3125 32.8125H28.9062C30.6321 32.8125 32.0312 34.2116 32.0312 35.9375C32.0312 37.6634 30.6321 39.0625 28.9062 39.0625H20.3125C18.5866 39.0625 17.1875 37.6634 17.1875 35.9375Z" fill="white"></path><path d="M94.5312 67.1875C94.5312 82.289 82.289 94.5312 67.1875 94.5312C52.086 94.5312 39.8438 82.289 39.8438 67.1875C39.8438 52.086 52.086 39.8438 67.1875 39.8438C82.289 39.8438 94.5312 52.086 94.5312 67.1875Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M52.7344 56.9437C52.7344 56.1291 53.3947 55.4688 54.2093 55.4688H80.7587C81.5733 55.4688 82.2337 56.1291 82.2337 56.9437C82.2337 57.7583 81.5733 58.4187 80.7587 58.4187H54.2093C53.3947 58.4187 52.7344 57.7583 52.7344 56.9437ZM55.6841 58.4188H79.2836L72.3513 71.1158V78.9108C72.3513 80.1643 71.6023 81.2966 70.4486 81.7869L64.7902 84.1917C63.7597 84.6297 62.6165 83.8734 62.6165 82.7537V71.251H62.6164L55.6841 58.4188Z" fill="white"></path><defs><filter id="prep-visualization-filter-font_filter0_d_2890_23473" x="60.0156" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.370833 0 0 0 0 0.342308 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_23473"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_23473" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-jdy-read-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 66.0156C11.3103 66.0156 7.8125 69.5134 7.8125 73.8281V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V73.8281C92.1875 69.5134 88.6897 66.0156 84.375 66.0156H15.625ZM34.3251 72.1588C34.3251 71.7273 34.6749 71.3776 35.1064 71.3776H36.7499C37.1814 71.3776 37.5312 71.7273 37.5312 72.1588V82.0743C37.5312 83.063 37.3089 83.922 36.8645 84.651C36.425 85.3801 35.8133 85.9419 35.0293 86.3364C34.2452 86.731 33.3339 86.9282 32.2952 86.9282C31.3713 86.9282 30.5324 86.7659 29.7783 86.4413C29.0292 86.1117 28.435 85.6123 27.9955 84.9432C27.6729 84.4482 27.47 83.8604 27.387 83.1797C27.3349 82.7529 27.6913 82.4038 28.1213 82.4038H29.8101C30.2341 82.4038 30.5599 82.7513 30.6945 83.1533C30.7289 83.2563 30.7706 83.3535 30.8195 83.445C30.9793 83.7297 31.1965 83.9494 31.4712 84.1042C31.7509 84.254 32.0804 84.3289 32.46 84.3289C32.8595 84.3289 33.1966 84.2441 33.4712 84.0743C33.7509 83.8995 33.9631 83.6448 34.1079 83.3102C34.2527 82.9756 34.3251 82.5636 34.3251 82.0743V72.1588ZM48.3854 86.7185H43.7284C43.297 86.7185 42.9472 86.3687 42.9472 85.9372V72.1588C42.9472 71.7273 43.297 71.3776 43.7284 71.3776H48.4304C49.9734 71.3776 51.3018 71.6847 52.4154 72.2989C53.529 72.9082 54.3855 73.7846 54.9847 74.9281C55.589 76.0717 55.8911 77.44 55.8911 79.033C55.8911 80.631 55.589 82.0043 54.9847 83.1529C54.3855 84.3015 53.524 85.1829 52.4004 85.7971C51.2818 86.4114 49.9435 86.7185 48.3854 86.7185ZM46.1907 83.1582C46.1907 83.5897 46.5404 83.9394 46.9719 83.9394H48.2506C49.2094 83.9394 50.0159 83.7696 50.6701 83.4301C51.3293 83.0855 51.8236 82.5537 52.1532 81.8345C52.4878 81.1105 52.6551 80.1766 52.6551 79.033C52.6551 77.8994 52.4878 76.9731 52.1532 76.254C51.8236 75.5349 51.3318 75.0055 50.6776 74.666C50.0234 74.3264 49.2169 74.1566 48.2581 74.1566H46.9719C46.5404 74.1566 46.1907 74.5064 46.1907 74.9379V83.1582ZM59.3682 71.3776C58.7702 71.3776 58.3939 72.0219 58.6877 72.5427L63.5251 81.1165C63.5912 81.2337 63.6259 81.3659 63.6259 81.5004V85.9372C63.6259 86.3687 63.9757 86.7185 64.4072 86.7185H66.0656C66.4971 86.7185 66.8469 86.3687 66.8469 85.9372V81.5004C66.8469 81.3659 66.8816 81.2337 66.9477 81.1165L71.7851 72.5427C72.0789 72.0219 71.7026 71.3776 71.1046 71.3776H69.2798C68.9904 71.3776 68.7248 71.5375 68.5894 71.7932L65.3464 77.9181C65.3248 77.9589 65.2825 77.9843 65.2364 77.9843C65.1903 77.9843 65.148 77.9589 65.1264 77.9181L61.8834 71.7932C61.748 71.5375 61.4824 71.3776 61.193 71.3776H59.3682Z" fill="#3392DB"></path><path d="M75.0734 61.3287C77.9303 61.3287 80.7231 60.4815 83.0986 58.8943C85.4741 57.307 87.3255 55.051 88.4188 52.4116C89.5121 49.7721 89.7982 46.8677 89.2408 44.0656C88.6835 41.2636 87.3077 38.6897 85.2875 36.6696C83.2674 34.6494 80.6935 33.2736 77.8915 32.7163C75.0894 32.1589 72.185 32.445 69.5455 33.5383C66.9061 34.6316 64.6501 36.483 63.0628 38.8585C61.4756 41.234 60.6284 44.0268 60.6284 46.8837V61.3287H75.0734Z" fill="#8CCDF8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M56.6284 61.328L56.7224 61.2342V46.8836C56.7224 46.413 56.7405 45.9438 56.7764 45.4769V38.4086C56.7764 33.8756 55.4322 29.4443 52.9138 25.6753C50.3953 21.9062 46.8158 18.9686 42.6279 17.2338C41.0394 16.5759 39.3904 16.1022 37.7128 15.8159C36.805 17.1353 36.0331 18.5525 35.414 20.047C33.8755 23.7608 33.3414 27.8043 33.8516 31.7734C34.0013 31.4543 34.2079 31.1553 34.4715 30.8917C35.6919 29.6714 37.6706 29.6714 38.8909 30.8917L47.7085 39.7092C47.7156 39.7162 47.7226 39.7232 47.7297 39.7303C48.0848 40.0854 48.3366 40.5048 48.4851 40.951C48.496 40.984 48.5064 41.017 48.5163 41.0503C48.831 42.1133 48.5689 43.3109 47.7298 44.15C47.723 44.1567 47.7163 44.1635 47.7095 44.1701L47.7003 44.1791L43.5897 48.2897L56.628 61.328H56.6284ZM78.6538 28.885C78.9821 28.9503 79.308 29.0245 79.631 29.1073C79.6665 26.0146 79.0775 22.9313 77.8826 20.047C76.1428 15.8474 73.1969 12.258 69.4172 9.73264C65.6376 7.20728 61.194 5.85938 56.6483 5.85938C52.1026 5.85938 47.659 7.20728 43.8794 9.73264C42.6843 10.5311 41.5726 11.436 40.556 12.4328C41.7666 12.745 42.9585 13.1427 44.1227 13.6249C49.0245 15.6553 53.214 19.0936 56.1617 23.5051C58.6005 27.1551 60.0985 31.3356 60.543 35.6752C62.4964 33.1428 65.0828 31.1588 68.0509 29.9293C71.4041 28.5404 75.094 28.1769 78.6538 28.885ZM34.6441 35.4837C34.9526 36.506 35.3313 37.5032 35.7765 38.4686H37.629L34.6441 35.4837Z" fill="#5AADE8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M52.9136 25.6753C55.432 29.4444 56.7762 33.8756 56.7762 38.4086V61.328H33.8569C29.3239 61.328 24.8926 59.9838 21.1236 57.4654C17.3545 54.947 14.4169 51.3675 12.6821 47.1795C10.9474 42.9915 10.4936 38.3832 11.3779 33.9373C12.2622 29.4914 14.4451 25.4075 17.6504 22.2022C20.8558 18.9969 24.9396 16.814 29.3855 15.9297C33.8315 15.0453 38.4398 15.4992 42.6277 17.2339C46.8157 18.9686 50.3952 21.9063 52.9136 25.6753ZM34.4714 35.3112L37.6289 38.4687H23.1695C21.4436 38.4687 20.0445 39.8678 20.0445 41.5937C20.0445 43.3196 21.4436 44.7187 23.1695 44.7187H38.3218L34.4713 48.5692C33.2509 49.7896 33.2509 51.7682 34.4713 52.9886C35.6917 54.209 37.6703 54.209 38.8907 52.9886L47.7002 44.1792C47.71 44.1696 47.7199 44.1598 47.7297 44.1501C48.5688 43.311 48.8309 42.1134 48.5161 41.0503C48.5063 41.0171 48.4959 40.984 48.485 40.9511C48.3365 40.5049 48.0847 40.0855 47.7296 39.7303C47.7225 39.7233 47.7154 39.7163 47.7083 39.7093L38.8908 30.8918C37.6704 29.6714 35.6918 29.6714 34.4714 30.8918C33.251 32.1122 33.251 34.0908 34.4714 35.3112Z" fill="#3392DB"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-jdy-write-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M56.7224 61.2342L56.6284 61.328H56.628L40.3946 45.0945C37.1806 41.8799 34.9919 37.7845 34.1054 33.3261C33.2189 28.8678 33.6743 24.2466 35.414 20.047C36.0331 18.5525 36.805 17.1353 37.7128 15.8159C39.3904 16.1022 41.0394 16.5759 42.6279 17.2338C46.8158 18.9686 50.3953 21.9062 52.9138 25.6753C55.4322 29.4443 56.7764 33.8756 56.7764 38.4086V45.4769C56.7405 45.9438 56.7224 46.413 56.7224 46.8836V61.2342ZM79.631 29.1073C79.308 29.0245 78.9821 28.9503 78.6538 28.885C75.094 28.1769 71.4041 28.5404 68.0509 29.9293C65.0828 31.1588 62.4964 33.1428 60.543 35.6752C60.0985 31.3356 58.6005 27.1551 56.1617 23.5051C53.2141 19.0936 49.0245 15.6553 44.1227 13.6249C42.9585 13.1427 41.7666 12.745 40.556 12.4328C41.5726 11.436 42.6843 10.5311 43.8794 9.73264C47.659 7.20728 52.1026 5.85938 56.6483 5.85938C61.194 5.85938 65.6376 7.20728 69.4172 9.73264C73.1969 12.258 76.1428 15.8474 77.8826 20.047C79.0775 22.9313 79.6665 26.0146 79.631 29.1073Z" fill="#FCC868"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.3043 15.4958C31.9939 15.5274 30.6828 15.6715 29.3855 15.9296C24.9396 16.8139 20.8558 18.9968 17.6504 22.2021C14.4451 25.4075 12.2622 29.4913 11.3779 33.9372C10.4936 38.3832 10.9474 42.9915 12.6821 47.1794C14.4169 51.3674 17.3545 54.9469 21.1236 57.4653C24.8926 59.9837 29.3239 61.328 33.8569 61.328H51.1037L37.6323 47.8566C33.8721 44.0957 31.3113 39.3041 30.2741 34.088C29.2369 28.8718 29.7697 23.4653 31.8051 18.552C32.2414 17.4987 32.7426 16.4783 33.3043 15.4958ZM56.6283 61.328H56.6279L40.3945 45.0945C37.1805 41.8799 34.9918 37.7845 34.1053 33.3261C33.2188 28.8677 33.6742 24.2466 35.4139 20.047C36.033 18.5525 36.8049 17.1353 37.7127 15.8159C39.3903 16.1022 41.0393 16.5759 42.6277 17.2338C46.8157 18.9685 50.3952 21.9062 52.9136 25.6753C55.4321 29.4443 56.7763 33.8756 56.7763 38.4086V61.1803L56.6283 61.328Z" fill="#F0AC3C"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M80.9883 52.2937L77.8308 55.4512C76.6104 56.6716 76.6104 58.6502 77.8308 59.8706C79.0512 61.091 81.0298 61.091 82.2502 59.8706L91.0677 51.0531C91.0748 51.0461 91.0819 51.0391 91.089 51.0321C91.4441 50.6769 91.6959 50.2576 91.8444 49.8113C91.8553 49.7784 91.8657 49.7453 91.8755 49.7121C92.1903 48.649 91.9281 47.4515 91.0891 46.6124C91.0793 46.6026 91.0694 46.5929 91.0595 46.5832L82.2501 37.7738C81.0297 36.5534 79.0511 36.5534 77.8307 37.7738C76.6103 38.9942 76.6103 40.9728 77.8307 42.1932L81.6812 46.0437L66.5289 46.0437C64.803 46.0437 63.4039 47.4428 63.4039 49.1687C63.4039 50.8946 64.803 52.2937 66.5289 52.2937L80.9883 52.2937Z" fill="#E59005"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 66.0156C11.3103 66.0156 7.8125 69.5134 7.8125 73.8281V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V73.8281C92.1875 69.5134 88.6897 66.0156 84.375 66.0156H15.625ZM34.3251 72.1588C34.3251 71.7273 34.6749 71.3776 35.1064 71.3776H36.7499C37.1814 71.3776 37.5312 71.7273 37.5312 72.1588V82.0743C37.5312 83.063 37.3089 83.922 36.8645 84.651C36.425 85.3801 35.8133 85.9419 35.0293 86.3364C34.2452 86.731 33.3339 86.9282 32.2952 86.9282C31.3713 86.9282 30.5324 86.7659 29.7783 86.4413C29.0292 86.1117 28.435 85.6123 27.9955 84.9432C27.6729 84.4482 27.47 83.8604 27.387 83.1797C27.3349 82.7529 27.6913 82.4038 28.1213 82.4038H29.8101C30.2341 82.4038 30.5599 82.7513 30.6945 83.1533C30.7289 83.2563 30.7706 83.3535 30.8195 83.445C30.9793 83.7297 31.1965 83.9494 31.4712 84.1042C31.7509 84.254 32.0804 84.3289 32.46 84.3289C32.8595 84.3289 33.1966 84.2441 33.4712 84.0743C33.7509 83.8995 33.9631 83.6448 34.1079 83.3102C34.2527 82.9756 34.3251 82.5636 34.3251 82.0743V72.1588ZM48.3854 86.7185H43.7284C43.297 86.7185 42.9472 86.3687 42.9472 85.9372V72.1588C42.9472 71.7273 43.297 71.3776 43.7284 71.3776H48.4304C49.9734 71.3776 51.3018 71.6847 52.4154 72.2989C53.529 72.9082 54.3855 73.7846 54.9847 74.9281C55.589 76.0717 55.8911 77.44 55.8911 79.033C55.8911 80.631 55.589 82.0043 54.9847 83.1529C54.3855 84.3015 53.524 85.1829 52.4004 85.7971C51.2818 86.4114 49.9435 86.7185 48.3854 86.7185ZM46.1907 83.1582C46.1907 83.5897 46.5404 83.9394 46.9719 83.9394H48.2506C49.2094 83.9394 50.0159 83.7696 50.6701 83.4301C51.3293 83.0855 51.8236 82.5537 52.1532 81.8345C52.4878 81.1105 52.6551 80.1766 52.6551 79.033C52.6551 77.8994 52.4878 76.9731 52.1532 76.254C51.8236 75.5349 51.3318 75.0055 50.6776 74.666C50.0234 74.3264 49.2169 74.1566 48.2581 74.1566H46.9719C46.5404 74.1566 46.1907 74.5064 46.1907 74.9379V83.1582ZM59.3682 71.3776C58.7702 71.3776 58.3939 72.0219 58.6877 72.5427L63.5251 81.1165C63.5912 81.2337 63.6259 81.3659 63.6259 81.5004V85.9372C63.6259 86.3687 63.9757 86.7185 64.4072 86.7185H66.0656C66.4971 86.7185 66.8469 86.3687 66.8469 85.9372V81.5004C66.8469 81.3659 66.8816 81.2337 66.9477 81.1165L71.7851 72.5427C72.0789 72.0219 71.7026 71.3776 71.1046 71.3776H69.2798C68.9904 71.3776 68.7248 71.5375 68.5894 71.7932L65.3464 77.9181C65.3248 77.9589 65.2825 77.9843 65.2364 77.9843C65.1903 77.9843 65.148 77.9589 65.1264 77.9181L61.8834 71.7932C61.748 71.5375 61.4824 71.3776 61.193 71.3776H59.3682Z" fill="#F0AC3C"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-json-generate-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 52.7344C11.3103 52.7344 7.8125 56.2322 7.8125 60.5469V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V60.5469C92.1875 56.2322 88.6897 52.7344 84.375 52.7344H15.625ZM50.8681 65.0501C52.2651 63.6147 54.2771 62.8906 56.9172 62.8906V62.897C59.5508 62.897 61.5693 63.6147 62.9598 65.0501C64.8181 66.7418 65.7473 69.2793 65.7473 72.6562C65.7473 75.9755 64.8181 78.5067 62.9598 80.2688C61.5693 81.7042 59.5508 82.4219 56.9172 82.4219C54.2771 82.4219 52.2651 81.7042 50.8681 80.2688C49.0034 78.5067 48.0679 75.9691 48.0679 72.6562C48.0679 69.2793 49.0034 66.7418 50.8681 65.0501ZM32.8748 64.5631C34.0731 63.4673 35.8416 62.9227 38.1677 62.9227H38.1613C39.9441 62.8722 41.6932 63.4154 43.1338 64.467C44.5051 65.4986 45.2292 66.9917 45.2933 68.9589H41.5895C41.5254 67.8439 41.0384 67.0558 40.1349 66.588C39.4346 66.2581 38.6658 66.1 37.8922 66.1266C37.0602 66.0848 36.2346 66.2923 35.5212 66.7225C34.9253 67.1198 34.6305 67.6837 34.6305 68.4014C34.6205 68.7053 34.6979 69.0057 34.8535 69.2669C35.0091 69.5282 35.2364 69.7393 35.5084 69.8752C36.2764 70.2252 37.0829 70.4833 37.9114 70.6442L41.0897 71.4003C42.4802 71.7399 43.5375 72.1885 44.2424 72.746C45.3445 73.611 45.8956 74.867 45.8956 76.5138C45.9106 77.315 45.7443 78.1092 45.4092 78.8371C45.0741 79.565 44.5788 80.2078 43.9604 80.7174C42.666 81.8259 40.8526 82.3834 38.5009 82.3834C36.098 82.3834 34.2076 81.8324 32.8299 80.7366C31.4522 79.6409 30.7666 78.135 30.7666 76.2126H34.4511C34.5052 76.893 34.7421 77.5461 35.1368 78.103C35.7647 78.8591 36.8349 79.2436 38.3535 79.2436C39.1041 79.2664 39.8533 79.1647 40.5707 78.9424C41.6472 78.5579 42.1855 77.8402 42.1855 76.7957C42.1922 76.5102 42.1212 76.2283 41.9801 75.98C41.839 75.7317 41.6331 75.5264 41.3845 75.386C40.8526 75.0592 40.0132 74.7709 38.8662 74.5274L36.9118 74.0788C34.9958 73.6495 33.6694 73.1817 32.9325 72.6691C31.6893 71.8168 31.0678 70.4904 31.0678 68.677C31.0514 67.901 31.2046 67.1309 31.5167 66.4204C31.8288 65.7098 32.2923 65.0759 32.8748 64.5631ZM23.987 63.4609H27.8382V76.3023C27.8382 77.8659 27.5691 79.109 27.0308 80.0317C26.1081 81.5824 24.4548 82.3578 22.0583 82.3578C19.6617 82.3578 18.0597 81.7298 17.2395 80.4739C16.4257 79.2179 16.0156 77.507 16.0156 75.3347V74.9118H19.6553V75.3347C19.6873 76.7637 19.8475 77.7697 20.1295 78.3465C20.405 78.9232 21.001 79.2179 21.9237 79.2179C22.8272 79.2179 23.4296 78.9039 23.7243 78.2632C23.8973 77.8915 23.987 77.2571 23.987 76.36V63.4609ZM68.6308 63.4609H72.6742V63.4545L80.024 76.3344V63.4545H83.6125V81.9092H79.7549L72.2192 68.8051V81.9092H68.6308V63.4609ZM60.5505 67.8567C59.6534 66.729 58.4423 66.1651 56.9108 66.1651C56.2124 66.1397 55.5179 66.2791 54.8834 66.5718C54.2489 66.8646 53.6922 67.3026 53.2583 67.8503C52.3484 68.9781 51.8934 70.5801 51.8934 72.6562C51.8934 74.7324 52.3484 76.3344 53.2647 77.4622C53.6979 78.0111 54.2544 78.4503 54.8889 78.7442C55.5235 79.0381 56.2183 79.1784 56.9172 79.1538C57.6129 79.1803 58.305 79.0413 58.9366 78.7483C59.5682 78.4554 60.1213 78.0168 60.5505 77.4686C61.4476 76.3344 61.8961 74.7324 61.8961 72.6627C61.8961 70.5865 61.4476 68.9909 60.5505 67.8567Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M59.7656 19.9219H71.0937C73.6826 19.9219 75.7812 22.0205 75.7812 24.6094V33.5235L72.254 29.9963C71.0336 28.7759 69.055 28.7759 67.8346 29.9963C66.6142 31.2166 66.6142 33.1953 67.8346 34.4157L76.8712 43.4523C78.0916 44.6727 80.0702 44.6727 81.2906 43.4523L90.3272 34.4157C91.5476 33.1953 91.5476 31.2166 90.3272 29.9963C89.1068 28.7759 87.1282 28.7759 85.9078 29.9963L82.0312 33.8728V24.6094C82.0312 18.5688 77.1344 13.6719 71.0937 13.6719H59.7656C58.0397 13.6719 56.6406 15.071 56.6406 16.7969C56.6406 18.5228 58.0397 19.9219 59.7656 19.9219Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.75 13.2812H15.625C14.3306 13.2812 13.2812 14.3306 13.2812 15.625V21.0938H21.875H25H34.375H37.5H46.0938V15.625C46.0938 14.3306 45.0444 13.2812 43.75 13.2812ZM33.5938 25.7812H25.7812V30.8594H33.5938V25.7812ZM38.2812 30.8594V25.7812H46.0938V30.8594H38.2812ZM33.5938 35.5469H25.7812V39.4531H33.5938V35.5469ZM38.2812 39.4531V35.5469H46.0938V37.1094C46.0938 38.4038 45.0444 39.4531 43.75 39.4531H38.2812ZM13.2812 25.7812H21.0938V30.8594H13.2812V25.7812ZM13.2812 35.5469H21.0938V39.4531H15.625C14.3306 39.4531 13.2812 38.4038 13.2812 37.1094V35.5469ZM15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V37.1094C7.8125 41.4241 11.3103 44.9219 15.625 44.9219H43.75C48.0647 44.9219 51.5625 41.4241 51.5625 37.1094V15.625C51.5625 11.3103 48.0647 7.8125 43.75 7.8125H15.625Z" fill="#537BC6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-json-parse-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V39.4531C7.8125 43.7678 11.3103 47.2656 15.625 47.2656H84.375C88.6897 47.2656 92.1875 43.7678 92.1875 39.4531V15.625C92.1875 11.3103 88.6897 7.8125 84.375 7.8125H15.625ZM50.8681 20.1282C52.2651 18.6928 54.2771 17.9688 56.9172 17.9688V17.9752C59.5508 17.9752 61.5693 18.6928 62.9598 20.1282C64.8181 21.8199 65.7473 24.3574 65.7473 27.7344C65.7473 31.0537 64.8181 33.5848 62.9598 35.347C61.5693 36.7823 59.5508 37.5 56.9172 37.5C54.2771 37.5 52.2651 36.7823 50.8681 35.347C49.0034 33.5848 48.0679 31.0473 48.0679 27.7344C48.0679 24.3574 49.0034 21.8199 50.8681 20.1282ZM32.8748 19.6412C34.0731 18.5455 35.8416 18.0008 38.1677 18.0008H38.1613C39.9441 17.9504 41.6932 18.4936 43.1338 19.5451C44.5051 20.5768 45.2292 22.0698 45.2933 24.037H41.5895C41.5254 22.922 41.0384 22.1339 40.1349 21.6661C39.4346 21.3363 38.6658 21.1781 37.8922 21.2047C37.0602 21.1629 36.2346 21.3704 35.5212 21.8007C34.9253 22.198 34.6305 22.7619 34.6305 23.4795C34.6205 23.7834 34.6979 24.0838 34.8535 24.3451C35.0091 24.6063 35.2364 24.8174 35.5084 24.9533C36.2764 25.3033 37.0829 25.5614 37.9114 25.7223L41.0897 26.4784C42.4802 26.818 43.5375 27.2666 44.2424 27.8241C45.3445 28.6891 45.8956 29.9451 45.8956 31.5919C45.9106 32.3931 45.7443 33.1873 45.4092 33.9152C45.0741 34.6431 44.5788 35.2859 43.9604 35.7955C42.666 36.9041 40.8526 37.4616 38.5009 37.4616C36.098 37.4616 34.2076 36.9105 32.8299 35.8147C31.4522 34.719 30.7666 33.2131 30.7666 31.2908H34.4511C34.5052 31.9711 34.7421 32.6243 35.1368 33.1811C35.7647 33.9372 36.8349 34.3217 38.3535 34.3217C39.1041 34.3446 39.8533 34.2428 40.5707 34.0205C41.6472 33.636 42.1855 32.9184 42.1855 31.8739C42.1922 31.5884 42.1212 31.3064 41.9801 31.0581C41.839 30.8098 41.6331 30.6045 41.3845 30.4641C40.8526 30.1373 40.0132 29.849 38.8662 29.6055L36.9118 29.1569C34.9958 28.7276 33.6694 28.2598 32.9325 27.7472C31.6893 26.8949 31.0678 25.5685 31.0678 23.7551C31.0514 22.9792 31.2046 22.209 31.5167 21.4985C31.8288 20.7879 32.2923 20.1541 32.8748 19.6412ZM23.987 18.5391H27.8382V31.3805C27.8382 32.944 27.5691 34.1871 27.0308 35.1099C26.1081 36.6606 24.4548 37.4359 22.0583 37.4359C19.6617 37.4359 18.0597 36.8079 17.2395 35.552C16.4257 34.2961 16.0156 32.5851 16.0156 30.4129V29.99H19.6553V30.4129C19.6873 31.8418 19.8475 32.8479 20.1295 33.4246C20.405 34.0013 21.001 34.2961 21.9237 34.2961C22.8272 34.2961 23.4296 33.9821 23.7243 33.3413C23.8973 32.9696 23.987 32.3352 23.987 31.4381V18.5391ZM68.6308 18.5391H72.6742V18.5326L80.024 31.4125V18.5326H83.6125V36.9874H79.7549L72.2192 23.8832V36.9874H68.6308V18.5391ZM60.5505 22.9349C59.6534 21.8071 58.4423 21.2432 56.9108 21.2432C56.2124 21.2178 55.5179 21.3572 54.8834 21.6499C54.2489 21.9427 53.6922 22.3807 53.2583 22.9285C52.3484 24.0562 51.8934 25.6582 51.8934 27.7344C51.8934 29.8105 52.3484 31.4125 53.2647 32.5403C53.6979 33.0892 54.2544 33.5284 54.8889 33.8223C55.5235 34.1162 56.2183 34.2566 56.9172 34.232C57.6129 34.2584 58.305 34.1194 58.9366 33.8265C59.5682 33.5335 60.1213 33.0949 60.5505 32.5467C61.4476 31.4125 61.8961 29.8105 61.8961 27.7408C61.8961 25.6646 61.4476 24.0691 60.5505 22.9349Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M83.0396 62.5L83.0396 73.8281C83.0396 76.417 80.9409 78.5156 78.352 78.5156L69.4379 78.5156L72.9652 74.9884C74.1856 73.768 74.1856 71.7893 72.9652 70.5689C71.7448 69.3486 69.7661 69.3486 68.5458 70.5689L59.5091 79.6056C58.2888 80.8259 58.2888 82.8046 59.5091 84.025L68.5458 93.0616C69.7661 94.282 71.7448 94.282 72.9652 93.0616C74.1856 91.8412 74.1856 89.8626 72.9652 88.6422L69.0886 84.7656L78.352 84.7656C84.3927 84.7656 89.2895 79.8687 89.2896 73.8281L89.2896 62.5C89.2896 60.7741 87.8904 59.375 86.1646 59.375C84.4387 59.375 83.0396 60.7741 83.0396 62.5Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.75 60.9375H15.625C14.3306 60.9375 13.2812 61.9868 13.2812 63.2812V67.5781H21.875H25H34.375H37.5H46.0938V63.2812C46.0938 61.9868 45.0444 60.9375 43.75 60.9375ZM33.5938 72.2656H25.7812V77.3438H33.5938V72.2656ZM38.2812 77.3438V72.2656H46.0938V77.3438H38.2812ZM33.5938 82.0312H25.7812V86.7188C25.7812 86.861 25.7432 86.9945 25.6767 87.1094H33.6983C33.6318 86.9945 33.5938 86.861 33.5938 86.7188V82.0312ZM38.1767 87.1094C38.2432 86.9945 38.2812 86.861 38.2812 86.7188V82.0312H46.0938V84.7656C46.0938 86.06 45.0444 87.1094 43.75 87.1094H38.1767ZM13.2812 72.2656H21.0938V77.3438H13.2812V72.2656ZM13.2812 82.0312H21.0938V86.7188C21.0938 86.861 21.1318 86.9945 21.1983 87.1094H15.625C14.3306 87.1094 13.2812 86.06 13.2812 84.7656V82.0312ZM15.625 55.4688C11.3103 55.4688 7.8125 58.9665 7.8125 63.2812V84.7656C7.8125 89.0803 11.3103 92.5781 15.625 92.5781H43.75C48.0647 92.5781 51.5625 89.0804 51.5625 84.7656V63.2812C51.5625 58.9665 48.0647 55.4688 43.75 55.4688H15.625Z" fill="#537BC6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-mongodb-read-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.4844 7.8125C17.1697 7.8125 13.6719 11.3103 13.6719 15.625V55.4834C17.2151 53.0119 21.5242 51.5625 26.1719 51.5625C38.2531 51.5625 48.0469 61.3563 48.0469 73.4375C48.0469 81.3948 43.7982 88.3597 37.4456 92.1875H78.5156C82.8304 92.1875 86.3281 88.6897 86.3281 84.375V15.625C86.3281 11.3103 82.8303 7.8125 78.5156 7.8125H21.4844Z" fill="#B7E2FD"></path><path d="M76.7034 36.6737C75.0582 43.6577 58.2031 49.502 58.2031 66.5675C58.2031 81.9965 70.0607 86.7012 72.5129 87.4318C76.9827 84.0713 76.2688 56.3399 76.7034 36.6737Z" fill="#3392DB"></path><path d="M77.2625 40.4724C79.3422 44.4466 92.9691 54.3235 92.9691 66.5966C92.9691 78.8697 85.4572 84.5095 78.9387 87.87V93.5975C78.9387 94.6202 77.7902 95.117 77.0762 95.117C76.3623 95.117 75.0586 94.6494 75.0586 93.8312V88.1914C80.9874 86.3213 77.5729 52.7747 77.2625 40.4724Z" fill="#3392DB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M26.6909 70.1092L23.5334 66.9518C22.313 65.7314 22.313 63.7527 23.5334 62.5323C24.7538 61.3119 26.7325 61.3119 27.9529 62.5323L36.7704 71.3498C36.7775 71.3568 36.7845 71.3638 36.7916 71.3709C37.1467 71.726 37.3985 72.1454 37.547 72.5916C37.5579 72.6246 37.5683 72.6576 37.5782 72.6909C37.8929 73.7539 37.6308 74.9515 36.7917 75.7906C36.7819 75.8004 36.7721 75.8101 36.7622 75.8197L27.9528 84.6291C26.7324 85.8495 24.7537 85.8495 23.5333 84.6291C22.313 83.4087 22.313 81.4301 23.5333 80.2097L27.3838 76.3592L12.2315 76.3592C10.5056 76.3592 9.10651 74.9601 9.10651 73.2342C9.10651 71.5083 10.5056 70.1092 12.2315 70.1092H26.6909Z" fill="#3392DB"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V28.125C92.1875 32.4397 88.6897 35.9375 84.375 35.9375H15.625C11.3103 35.9375 7.8125 32.4397 7.8125 28.125V15.625Z" fill="#3392DB"></path><path d="M14.3872 27.3438V16.1591H17.767L19.7964 23.7885L21.803 16.1591H25.1904V27.3438H23.0923V18.5394L20.8722 27.3438H18.6978L16.4853 18.5394V27.3438H14.3872Z" fill="white"></path><path d="M26.9223 23.1781C26.9223 22.466 27.0978 21.7768 27.4487 21.1105C27.7997 20.4442 28.2956 19.9356 28.9365 19.5847C29.5824 19.2337 30.3021 19.0582 31.0956 19.0582C32.3214 19.0582 33.3259 19.4575 34.1092 20.256C34.8925 21.0495 35.2841 22.054 35.2841 23.2697C35.2841 24.4954 34.8874 25.5127 34.0939 26.3214C33.3056 27.125 32.3112 27.5269 31.1108 27.5269C30.3682 27.5269 29.6587 27.359 28.9822 27.0233C28.3109 26.6876 27.7997 26.1968 27.4487 25.5508C27.0978 24.8998 26.9223 24.1089 26.9223 23.1781ZM29.1196 23.2925C29.1196 24.0962 29.3103 24.7116 29.6918 25.1389C30.0732 25.5661 30.5437 25.7797 31.1032 25.7797C31.6627 25.7797 32.1306 25.5661 32.507 25.1389C32.8885 24.7116 33.0792 24.0911 33.0792 23.2773C33.0792 22.4838 32.8885 21.8735 32.507 21.4462C32.1306 21.019 31.6627 20.8054 31.1032 20.8054C30.5437 20.8054 30.0732 21.019 29.6918 21.4462C29.3103 21.8735 29.1196 22.4889 29.1196 23.2925Z" fill="white"></path><path d="M44.3402 27.3438H42.1964V23.2086C42.1964 22.3338 42.1506 21.7692 42.059 21.5149C41.9675 21.2555 41.8174 21.0546 41.6089 20.9122C41.4054 20.7698 41.1588 20.6985 40.8688 20.6985C40.4975 20.6985 40.1644 20.8003 39.8694 21.0037C39.5744 21.2072 39.3709 21.4767 39.259 21.8124C39.1522 22.1481 39.0988 22.7687 39.0988 23.674V27.3438H36.955V19.2413H38.9462V20.4315C39.6532 19.516 40.5433 19.0582 41.6165 19.0582C42.0895 19.0582 42.5219 19.1447 42.9135 19.3176C43.3052 19.4855 43.6002 19.7016 43.7985 19.9661C44.002 20.2306 44.1418 20.5307 44.2181 20.8664C44.2995 21.2021 44.3402 21.6827 44.3402 22.3083V27.3438Z" fill="white"></path><path d="M46.3239 27.8778L48.7729 28.1754C48.8136 28.4602 48.9077 28.656 49.0552 28.7628C49.2586 28.9154 49.5791 28.9917 50.0165 28.9917C50.576 28.9917 50.9956 28.9078 51.2753 28.7399C51.4635 28.628 51.6059 28.4475 51.7026 28.1982C51.7687 28.0202 51.8018 27.6922 51.8018 27.2141V26.0315C51.1609 26.9063 50.3522 27.3438 49.3756 27.3438C48.2872 27.3438 47.425 26.8834 46.7892 25.9628C46.2908 25.2355 46.0416 24.3301 46.0416 23.2468C46.0416 21.8887 46.3671 20.8511 47.0181 20.134C47.6743 19.4168 48.4881 19.0582 49.4595 19.0582C50.4615 19.0582 51.288 19.4982 51.9391 20.3781V19.2413H53.9456V26.5121C53.9456 27.4684 53.8668 28.183 53.7091 28.656C53.5514 29.129 53.3302 29.5003 53.0453 29.7699C52.7605 30.0395 52.379 30.2505 51.9009 30.4031C51.4279 30.5557 50.8277 30.632 50.1004 30.632C48.7271 30.632 47.7531 30.3955 47.1783 29.9225C46.6036 29.4545 46.3162 28.8595 46.3162 28.1372C46.3162 28.066 46.3188 27.9795 46.3239 27.8778ZM48.2388 23.1247C48.2388 23.9843 48.4041 24.615 48.7347 25.0168C49.0704 25.4135 49.4824 25.6119 49.9707 25.6119C50.4946 25.6119 50.9371 25.4084 51.2982 25.0015C51.6593 24.5895 51.8399 23.9817 51.8399 23.1781C51.8399 22.3389 51.667 21.7158 51.3211 21.3089C50.9752 20.902 50.5378 20.6985 50.0089 20.6985C49.4951 20.6985 49.0704 20.8995 48.7347 21.3013C48.4041 21.698 48.2388 22.3058 48.2388 23.1247Z" fill="white"></path><path d="M55.5783 23.1781C55.5783 22.466 55.7538 21.7768 56.1047 21.1105C56.4557 20.4442 56.9516 19.9356 57.5925 19.5847C58.2384 19.2337 58.9581 19.0582 59.7516 19.0582C60.9774 19.0582 61.9819 19.4575 62.7652 20.256C63.5485 21.0495 63.9401 22.054 63.9401 23.2697C63.9401 24.4954 63.5434 25.5127 62.7499 26.3214C61.9616 27.125 60.9672 27.5269 59.7668 27.5269C59.0243 27.5269 58.3147 27.359 57.6382 27.0233C56.9669 26.6876 56.4557 26.1968 56.1047 25.5508C55.7538 24.8998 55.5783 24.1089 55.5783 23.1781ZM57.7756 23.2925C57.7756 24.0962 57.9663 24.7116 58.3478 25.1389C58.7292 25.5661 59.1997 25.7797 59.7592 25.7797C60.3187 25.7797 60.7866 25.5661 61.163 25.1389C61.5445 24.7116 61.7352 24.0911 61.7352 23.2773C61.7352 22.4838 61.5445 21.8735 61.163 21.4462C60.7866 21.019 60.3187 20.8054 59.7592 20.8054C59.1997 20.8054 58.7292 21.019 58.3478 21.4462C57.9663 21.8735 57.7756 22.4889 57.7756 23.2925Z" fill="white"></path><path d="M65.6339 16.1591H69.7614C70.6921 16.1591 71.4017 16.2303 71.89 16.3727C72.5461 16.566 73.1081 16.9093 73.576 17.4026C74.044 17.896 74.4 18.5013 74.6442 19.2184C74.8883 19.9305 75.0104 20.8104 75.0104 21.8582C75.0104 22.7788 74.8959 23.5723 74.6671 24.2386C74.3873 25.0524 73.988 25.7111 73.4692 26.2146C73.0776 26.5961 72.5486 26.8936 71.8823 27.1072C71.3839 27.2649 70.7176 27.3438 69.8834 27.3438H65.6339V16.1591ZM67.8922 18.0511V25.4593H69.5782C70.2089 25.4593 70.6642 25.4237 70.9439 25.3525C71.3101 25.2609 71.6128 25.1058 71.8518 24.8871C72.0959 24.6684 72.2943 24.3098 72.4469 23.8113C72.5995 23.3078 72.6758 22.6237 72.6758 21.759C72.6758 20.8944 72.5995 20.2306 72.4469 19.7678C72.2943 19.3049 72.0807 18.9438 71.806 18.6844C71.5314 18.425 71.183 18.2495 70.7608 18.158C70.4455 18.0868 69.8275 18.0511 68.9069 18.0511H67.8922Z" fill="white"></path><path d="M76.9406 16.1591H81.4114C82.2964 16.1591 82.9551 16.1972 83.3875 16.2735C83.8249 16.3447 84.214 16.4973 84.5547 16.7313C84.9006 16.9652 85.188 17.278 85.4169 17.6697C85.6458 18.0562 85.7602 18.4911 85.7602 18.9743C85.7602 19.4982 85.6178 19.9788 85.3329 20.4163C85.0532 20.8537 84.6717 21.1817 84.1885 21.4005C84.8701 21.5988 85.394 21.9371 85.7602 22.4152C86.1264 22.8933 86.3095 23.4553 86.3095 24.1013C86.3095 24.6099 86.19 25.1058 85.9509 25.589C85.717 26.0671 85.394 26.4511 84.982 26.741C84.5751 27.0259 84.0716 27.2013 83.4714 27.2675C83.095 27.3081 82.1871 27.3336 80.7477 27.3438H76.9406V16.1591ZM79.1989 18.0206V20.607H80.679C81.5589 20.607 82.1057 20.5943 82.3193 20.5688C82.7059 20.5231 83.0085 20.3908 83.2272 20.1721C83.451 19.9483 83.5629 19.6559 83.5629 19.2947C83.5629 18.9489 83.4663 18.6691 83.273 18.4555C83.0848 18.2368 82.8025 18.1046 82.4261 18.0588C82.2024 18.0333 81.5589 18.0206 80.4959 18.0206H79.1989ZM79.1989 22.4686V25.4593H81.2894C82.1032 25.4593 82.6194 25.4364 82.8381 25.3906C83.1738 25.3296 83.4459 25.1821 83.6545 24.9481C83.8681 24.7091 83.9749 24.3912 83.9749 23.9944C83.9749 23.6588 83.8935 23.3739 83.7308 23.14C83.568 22.906 83.3315 22.7356 83.0212 22.6288C82.7161 22.522 82.0498 22.4686 81.0223 22.4686H79.1989Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-param-output-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625Z" fill="#F0AC3C"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V26.5625H7.8125V15.625Z" fill="#FFDC91"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0938 40.625H49.7026C48.523 38.0875 45.9514 36.3281 42.9688 36.3281C39.9861 36.3281 37.4145 38.0875 36.2349 40.625H17.9688C16.2429 40.625 14.8438 42.0241 14.8438 43.75C14.8438 45.4759 16.2429 46.875 17.9687 46.875H36.2349C37.4145 49.4125 39.9861 51.1719 42.9688 51.1719C45.9514 51.1719 48.523 49.4125 49.7026 46.875H71.0938C72.8196 46.875 74.2188 45.4759 74.2188 43.75C74.2188 42.0241 72.8196 40.625 71.0938 40.625ZM17.9688 60.5469C16.2429 60.5469 14.8438 61.946 14.8438 63.6719C14.8438 65.3978 16.2429 66.7969 17.9687 66.7969H22.1724C23.352 69.3344 25.9236 71.0938 28.9062 71.0938C31.8889 71.0938 34.4605 69.3344 35.6401 66.7969H49.2188C50.9446 66.7969 52.3438 65.3978 52.3438 63.6719C52.3438 61.946 50.9446 60.5469 49.2188 60.5469H35.6401C34.4605 58.0093 31.8889 56.25 28.9062 56.25C25.9236 56.25 23.352 58.0093 22.1724 60.5469H17.9688Z" fill="#FFEBBA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M74.7383 70.8905L71.5808 67.733C70.3604 66.5126 70.3604 64.534 71.5808 63.3136C72.8012 62.0932 74.7798 62.0932 76.0002 63.3136L84.8177 72.1311C84.8248 72.1381 84.8319 72.1451 84.839 72.1521C85.1941 72.5073 85.4459 72.9266 85.5944 73.3729C85.6053 73.4058 85.6157 73.4389 85.6255 73.4721C85.9403 74.5352 85.6781 75.7327 84.8391 76.5718C84.8293 76.5816 84.8194 76.5913 84.8095 76.601L76.0001 85.4104C74.7797 86.6308 72.8011 86.6308 71.5807 85.4104C70.3603 84.19 70.3603 82.2114 71.5807 80.991L75.4312 77.1405L60.2789 77.1405C58.553 77.1405 57.1539 75.7414 57.1539 74.0155C57.1539 72.2896 58.553 70.8905 60.2789 70.8905L74.7383 70.8905Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-python-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V29.2969L70.7031 7.8125H15.625Z" fill="#C2BBF1"></path><path d="M13.2812 38.2812C13.2812 33.9665 16.779 30.4688 21.0938 30.4688H79.2969C83.6116 30.4688 87.1094 33.9665 87.1094 38.2813V83.5938C87.1094 87.9085 83.6116 91.4062 79.2969 91.4062H21.0938C16.779 91.4062 13.2812 87.9085 13.2812 83.5938V38.2812Z" fill="white"></path><g filter="url(#prep-visualization-python-font_filter0_d_2890_18180)"><path d="M75.3906 29.2969H92.1875L70.7031 7.8125V24.6094C70.7031 27.1982 72.8018 29.2969 75.3906 29.2969Z" fill="#7466CC"></path></g><path d="M7.8125 50.3906C7.8125 46.0759 11.3103 42.5781 15.625 42.5781H84.375C88.6897 42.5781 92.1875 46.0759 92.1875 50.3906V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V50.3906Z" fill="#7466CC"></path><path d="M13.3672 75.2022V58.9844H18.6219C20.6132 58.9844 21.9112 59.0655 22.516 59.2278C23.4452 59.4711 24.2233 60.0021 24.8502 60.8208C25.4771 61.632 25.7905 62.683 25.7905 63.9736C25.7905 64.9693 25.6098 65.8063 25.2484 66.4848C24.8871 67.1633 24.4261 67.698 23.8656 68.0889C23.3125 68.4724 22.7483 68.7269 22.173 68.8522C21.3913 69.0071 20.2592 69.0845 18.7768 69.0845H16.6417V75.2022H13.3672ZM16.6417 61.7279V66.33H18.4339C19.7245 66.33 20.5874 66.2451 21.0225 66.0755C21.4577 65.9059 21.7969 65.6404 22.0403 65.279C22.291 64.9176 22.4164 64.4972 22.4164 64.0179C22.4164 63.4279 22.2431 62.9411 21.8965 62.5576C21.5498 62.1741 21.111 61.9344 20.58 61.8385C20.1891 61.7648 19.4037 61.7279 18.2237 61.7279H16.6417Z" fill="white"></path><path d="M26.9853 63.4537H30.293L33.1029 71.7949L35.8464 63.4537H39.0657L34.9172 74.7597L34.176 76.8063C33.9031 77.4921 33.6413 78.0158 33.3905 78.3772C33.1472 78.7385 32.8632 79.0298 32.5387 79.2511C32.2216 79.4797 31.827 79.6567 31.355 79.7821C30.8904 79.9075 30.3631 79.9702 29.7731 79.9702C29.1757 79.9702 28.5894 79.9075 28.0141 79.7821L27.7375 77.3483C28.2243 77.4442 28.6631 77.4921 29.054 77.4921C29.7767 77.4921 30.3114 77.2783 30.6581 76.8505C31.0047 76.4301 31.2702 75.8917 31.4546 75.2354L26.9853 63.4537Z" fill="white"></path><path d="M46.4555 63.4537V65.9317H44.3315V70.6665C44.3315 71.6253 44.3499 72.1858 44.3868 72.348C44.431 72.5029 44.5232 72.632 44.6633 72.7352C44.8108 72.8385 44.9878 72.8901 45.1944 72.8901C45.482 72.8901 45.8987 72.7905 46.4444 72.5914L46.7099 75.0031C45.9872 75.3128 45.1685 75.4677 44.254 75.4677C43.6935 75.4677 43.1883 75.3755 42.7384 75.1911C42.2886 74.9994 41.9567 74.756 41.7428 74.461C41.5363 74.1586 41.3925 73.753 41.3114 73.2441C41.245 72.8827 41.2118 72.1526 41.2118 71.0537V65.9317H39.7847V63.4537H41.2118V61.1195L44.3315 59.3052V63.4537H46.4555Z" fill="white"></path><path d="M51.7102 58.9844V64.9471C52.7132 63.7745 53.9117 63.1882 55.3056 63.1882C56.021 63.1882 56.6663 63.3209 57.2415 63.5864C57.8168 63.8519 58.2482 64.1912 58.5359 64.6042C58.8309 65.0172 59.03 65.4744 59.1333 65.976C59.2439 66.4775 59.2992 67.2555 59.2992 68.3102V75.2022H56.1906V68.996C56.1906 67.7644 56.1316 66.9827 56.0136 66.6508C55.8956 66.3189 55.6854 66.0571 55.383 65.8653C55.088 65.6662 54.7156 65.5666 54.2657 65.5666C53.7494 65.5666 53.2885 65.692 52.8829 65.9428C52.4772 66.1935 52.1786 66.5733 51.9868 67.0822C51.8024 67.5837 51.7102 68.3286 51.7102 69.3169V75.2022H48.6016V58.9844H51.7102Z" fill="white"></path><path d="M61.744 69.162C61.744 68.1295 61.9985 67.1302 62.5074 66.164C63.0162 65.1979 63.7353 64.4604 64.6646 63.9515C65.6012 63.4426 66.6448 63.1882 67.7953 63.1882C69.5727 63.1882 71.0293 63.7671 72.165 64.925C73.3008 66.0755 73.8687 67.5321 73.8687 69.2947C73.8687 71.0721 73.2934 72.5471 72.1429 73.7198C70.9998 74.8851 69.5579 75.4677 67.8174 75.4677C66.7407 75.4677 65.7118 75.2243 64.7309 74.7375C63.7574 74.2508 63.0162 73.5391 62.5074 72.6025C61.9985 71.6585 61.744 70.5116 61.744 69.162ZM64.9301 69.3279C64.9301 70.4932 65.2066 71.3856 65.7598 72.0051C66.3129 72.6246 66.9951 72.9343 67.8064 72.9343C68.6176 72.9343 69.2961 72.6246 69.8419 72.0051C70.395 71.3856 70.6716 70.4858 70.6716 69.3058C70.6716 68.1553 70.395 67.2703 69.8419 66.6508C69.2961 66.0313 68.6176 65.7215 67.8064 65.7215C66.9951 65.7215 66.3129 66.0313 65.7598 66.6508C65.2066 67.2703 64.9301 68.1627 64.9301 69.3279Z" fill="white"></path><path d="M87 75.2022H83.8914V69.2062C83.8914 67.9377 83.825 67.1191 83.6923 66.7503C83.5595 66.3742 83.342 66.0829 83.0396 65.8764C82.7446 65.6699 82.3869 65.5666 81.9665 65.5666C81.4281 65.5666 80.9451 65.7141 80.5173 66.0091C80.0895 66.3041 79.7945 66.695 79.6323 67.1818C79.4774 67.6685 79.4 68.5683 79.4 69.8811V75.2022H76.2914V63.4537H79.1787V65.1794C80.2039 63.8519 81.4945 63.1882 83.0506 63.1882C83.7365 63.1882 84.3634 63.3135 84.9313 63.5643C85.4992 63.8077 85.9269 64.1211 86.2146 64.5046C86.5096 64.8881 86.7124 65.3233 86.823 65.81C86.941 66.2968 87 66.9937 87 67.9008V75.2022Z" fill="white"></path><defs><filter id="prep-visualization-python-font_filter0_d_2890_18180" x="64.7031" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.370833 0 0 0 0 0.342308 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_18180"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_18180" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-row-col-translate-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 46.0938C7.8125 41.779 11.3103 38.2812 15.625 38.2812H40.2344C44.5491 38.2812 48.0469 41.779 48.0469 46.0938V84.375C48.0469 88.6897 44.5491 92.1875 40.2344 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V46.0938Z" fill="#AFC6E8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M56.4453 78.9993H67.1875C73.8753 78.9993 79.2969 73.5777 79.2969 66.8899V52.5071L76.1604 55.6436C74.94 56.864 72.9613 56.864 71.741 55.6436C70.5206 54.4233 70.5206 52.4446 71.741 51.2242L80.7776 42.1876C81.998 40.9672 83.9766 40.9672 85.197 42.1876L94.2336 51.2242C95.454 52.4446 95.454 54.4233 94.2336 55.6436C93.0132 56.864 91.0346 56.864 89.8142 55.6436L86.3271 52.1566C86.3278 52.1848 86.3281 52.2131 86.3281 52.2415V66.8899C86.3281 77.461 77.7586 86.0305 67.1875 86.0305H56.4453C54.5037 86.0305 52.9297 84.4565 52.9297 82.5149C52.9297 80.5733 54.5037 78.9993 56.4453 78.9993Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V23.4375C7.8125 27.7522 11.3103 31.25 15.625 31.25H84.375C88.6897 31.25 92.1875 27.7522 92.1875 23.4375V15.625C92.1875 11.3103 88.6897 7.8125 84.375 7.8125H15.625ZM16.4062 14.8438C15.5433 14.8438 14.8438 15.5433 14.8438 16.4062V22.6562C14.8438 23.5192 15.5433 24.2188 16.4062 24.2188H31.6406C32.5036 24.2188 33.2031 23.5192 33.2031 22.6562V16.4062C33.2031 15.5433 32.5036 14.8438 31.6406 14.8438H16.4062ZM66.7969 16.4062C66.7969 15.5433 67.4964 14.8438 68.3594 14.8438H83.5938C84.4567 14.8438 85.1562 15.5433 85.1562 16.4062V22.6562C85.1562 23.5192 84.4567 24.2188 83.5938 24.2188H68.3594C67.4964 24.2188 66.7969 23.5192 66.7969 22.6562V16.4062ZM41.7969 14.8438C40.9339 14.8438 40.2344 15.5433 40.2344 16.4062V22.6562C40.2344 23.5192 40.9339 24.2188 41.7969 24.2188H58.2031C59.0661 24.2188 59.7656 23.5192 59.7656 22.6562V16.4062C59.7656 15.5433 59.0661 14.8438 58.2031 14.8438H41.7969Z" fill="#537BC6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-saprfc-read-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H87.9784C93.632 7.8125 97.4137 13.6316 95.1176 18.798L64.562 87.548C63.3081 90.3693 60.5103 92.1875 57.4229 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625Z" fill="#3392DB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.1995 29.2387C79.5871 27.5397 79.5612 25.8063 79.2425 24.0813C78.9583 22.4945 78.2178 21.1405 77.0293 20.0625C75.0227 18.2427 72.6888 17.1043 69.9331 17.1043C68.7589 17.1043 67.1727 17.1015 65.5639 17.0987C62.2762 17.0929 58.8938 17.0869 58.7377 17.1043V37.0608C58.4277 37.0693 58.3674 37.078 58.2985 37.0952C58.2252 36.863 58.1558 36.6288 58.0863 36.3943C57.952 35.9408 57.8173 35.4861 57.6527 35.0426C57.324 34.1838 56.9842 33.3287 56.6445 32.4738L56.6443 32.4733L56.6443 32.4733L56.6443 32.4732L56.6442 32.4732L56.6442 32.4732L56.6442 32.4731C56.254 31.4912 55.8639 30.5096 55.4911 29.5231C54.7803 27.644 54.093 25.7531 53.405 23.8602L53.4048 23.8598L53.4035 23.8561L53.4022 23.8524C53.2575 23.4544 53.1128 23.0563 52.9678 22.6583C52.7654 22.1016 52.5673 21.544 52.3693 20.9867L52.3692 20.9866L52.3692 20.9864L52.3691 20.9863L52.3691 20.9863C52.0027 19.955 51.6368 18.9252 51.2454 17.9064C51.2319 17.8714 51.2181 17.8319 51.2034 17.7896C51.1052 17.5084 50.9641 17.1043 50.5823 17.1043H43.7445C43.4147 17.1436 43.3427 17.348 43.2933 17.4882C43.2885 17.5018 43.284 17.5147 43.2794 17.5268C42.8403 18.6221 42.4268 19.7346 42.0221 20.8471C41.8467 21.3327 41.6747 21.8194 41.5029 22.306L41.5028 22.3062L41.5028 22.3063C41.2107 23.1334 40.9187 23.96 40.6097 24.7798C40.029 26.3232 39.4338 27.863 38.8381 29.4039L38.838 29.4042L38.838 29.4043C38.5151 30.2396 38.192 31.0753 37.8711 31.912C37.7065 32.3442 37.5305 32.7727 37.3409 33.2345C37.243 33.473 37.1414 33.7204 37.0358 33.9818C36.9801 33.8934 36.9332 33.8273 36.8955 33.7742L36.8954 33.7741L36.8954 33.7741L36.8954 33.774L36.8954 33.774C36.8339 33.6874 36.7968 33.6352 36.7861 33.5764C36.4847 32.1275 35.4857 31.1529 34.4178 30.2819C32.9468 29.0743 31.1853 28.4792 29.4234 27.8841C28.8953 27.7057 28.3672 27.5273 27.8469 27.3323C26.6154 26.8666 25.3667 26.3577 24.273 25.6506C23.1276 24.909 23.4806 23.6583 24.5743 23.2013C26.2278 22.5113 27.9329 22.7442 29.5778 23.0288C30.5578 23.2023 31.5088 23.5627 32.4739 23.9285L32.4739 23.9285L32.4742 23.9286L32.4743 23.9286L32.4744 23.9287C32.9 24.09 33.3283 24.2523 33.7631 24.4001C33.9273 24.1199 34.0931 23.8374 34.2601 23.553L34.2606 23.5522L34.2608 23.5518L34.261 23.5514L34.2613 23.551L34.2616 23.5505L34.2619 23.5499C34.9525 22.3735 35.6623 21.1645 36.3553 19.95C36.8217 19.1368 36.8 19.1279 36.0662 18.8285C36.014 18.8072 35.9583 18.7845 35.8989 18.7599C35.6489 18.6564 35.4794 18.5844 35.3495 18.5292L35.3491 18.5291C35.0137 18.3867 34.9414 18.356 34.4263 18.182C32.3766 17.5007 31.0246 17.1643 29.242 16.9402C27.3646 16.6987 25.4786 16.759 23.5754 17.1472C21.6895 17.518 20.1134 18.3545 18.6666 19.4757C17.4007 20.4589 16.6515 21.8043 16.2639 23.4084C15.7816 25.4006 15.9882 27.272 17.0044 28.9796C18.2876 31.1356 20.4579 32.1793 22.6968 33.0417C23.4927 33.3482 24.3098 33.5973 25.1266 33.8462C25.6884 34.0174 26.2501 34.1886 26.8046 34.3784C27.3557 34.5682 27.8897 34.8355 28.3891 35.12C29.1469 35.5512 29.3451 36.4138 29.0781 37.1984C28.7157 38.287 27.7888 38.4407 26.9308 38.583C26.8711 38.5929 26.8117 38.6027 26.7529 38.6128C25.2286 38.8629 23.7043 38.5869 22.2144 38.2247C21.879 38.1436 21.5629 37.9886 21.2455 37.8329L21.2455 37.8328L21.2455 37.8328L21.2455 37.8328L21.2455 37.8328L21.2454 37.8328L21.2453 37.8327C21.0901 37.7566 20.9346 37.6803 20.7763 37.6124L20.7107 37.5832L20.7106 37.5832C20.0349 37.2825 19.3585 36.9815 18.6577 36.6724C18.4317 37.1351 18.2121 37.5978 17.9935 38.0582L17.9935 38.0583L17.9934 38.0585C17.4543 39.1942 16.9219 40.3161 16.3154 41.3898C15.9289 42.0778 16.2446 42.1998 16.733 42.3886L16.7373 42.3902C17.1044 42.5308 17.4682 42.6816 17.8315 42.8321C18.6271 43.1618 19.4205 43.4906 20.2423 43.7097C21.8355 44.1322 23.4545 44.5032 25.0908 44.641C26.3827 44.7531 27.7261 44.5807 29.0178 44.3478C29.9027 44.1874 30.7539 43.8239 31.5892 43.4673L31.5892 43.4673C31.6969 43.4213 31.8043 43.3754 31.9114 43.3302C32.3699 43.1359 32.8003 42.8814 33.2492 42.6159L33.2494 42.6158C33.4581 42.4924 33.6708 42.3666 33.8921 42.2435C33.6768 42.8903 33.4873 43.4595 33.2635 44.0632H40.8333C41.0658 44.0632 41.3758 43.7182 41.4792 43.4509C41.7667 42.6898 42.0114 41.9143 42.2663 41.107L42.2663 41.1068L42.2664 41.1066C42.3551 40.8256 42.445 40.5408 42.5384 40.2513C45.5611 41.1999 48.5839 41.1741 51.598 40.3031C51.6896 40.5874 51.7819 40.8659 51.8729 41.1408L51.873 41.141L51.873 41.141L51.873 41.141L51.873 41.1411L51.873 41.1411C52.1325 41.9248 52.3821 42.6784 52.5798 43.4509C52.709 43.9598 52.907 44.0632 53.4323 44.0632H65.2305C65.7903 44.0632 66.04 43.4594 66.04 43.4594V36.0081H68.6925C71.3707 36.0081 73.8424 35.3699 76.0556 33.8521C77.7004 32.7311 78.7597 31.1527 79.1989 29.2381L79.1995 29.2387ZM45.8137 30.0114L45.8108 30.0208L45.81 30.0232C45.3287 31.5644 44.8533 33.0864 44.3645 34.6459C46.1213 35.2668 47.8437 35.2496 49.6522 34.6632C49.2619 33.4342 48.8782 32.2299 48.4939 31.0237C47.9963 29.4619 47.4977 27.8971 46.9826 26.2718C46.5839 27.5456 46.1986 28.7791 45.8171 30.0005L45.8137 30.0114ZM72.0689 25.8491C72.2756 26.8581 72.1378 27.7377 71.6211 28.6175C71.1302 29.454 70.2604 29.7559 69.4336 29.9025C68.6288 30.0458 67.7992 30.061 66.9363 30.0768H66.9363C66.5527 30.0838 66.1625 30.091 65.765 30.1095V23.9088C65.765 23.5897 65.7736 23.2878 66.2214 23.2965C67.7199 23.3051 69.227 23.3224 70.6134 23.9606C71.4058 24.3315 71.8794 24.9436 72.0689 25.8491Z" fill="white"></path><path d="M7.8125 64.9315C7.8125 60.5683 11.3103 57.0312 15.625 57.0312H84.7656C89.0804 57.0312 92.5781 60.5683 92.5781 64.9315V84.2872C92.5781 88.6504 89.0804 92.1875 84.7656 92.1875H15.625C11.3103 92.1875 7.8125 88.6504 7.8125 84.2872V64.9315Z" fill="#B7E2FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.3789 71.2811L28.2214 68.1236C27.001 66.9032 27.001 64.9246 28.2214 63.7042C29.4418 62.4838 31.4205 62.4838 32.6408 63.7042L41.4583 72.5217C41.4654 72.5287 41.4725 72.5357 41.4796 72.5428C41.8347 72.8979 42.0865 73.3173 42.235 73.7635C42.2459 73.7964 42.2563 73.8295 42.2662 73.8627C42.5809 74.9258 42.3188 76.1234 41.4797 76.9625C41.4699 76.9723 41.46 76.982 41.4502 76.9916L32.6408 85.801C31.4204 87.0214 29.4417 87.0214 28.2213 85.801C27.0009 84.5806 27.0009 82.602 28.2213 81.3816L32.0718 77.5311L16.9195 77.5311C15.1936 77.5311 13.7945 76.132 13.7945 74.4061C13.7945 72.6802 15.1936 71.2811 16.9195 71.2811H31.3789Z" fill="#3392DB"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-spark-sql-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0394287H0.0390625V99.9613H99.9609V0.0394287ZM0 0.000366211V100H100V0.000366211H0Z" fill="white" fill-opacity="0.01"></path><path d="M47.7018 6.37798C48.5126 4.17491 51.3723 3.61905 52.9493 5.35797L69.3484 23.4402C69.9127 24.0624 70.7036 24.4312 71.543 24.4635L95.9359 25.4029C98.2817 25.4932 99.694 28.0412 98.5275 30.0784L86.3979 51.2625C85.9805 51.9914 85.8742 52.8577 86.1028 53.6659L92.7472 77.1552C93.3862 79.4141 91.3994 81.5447 89.1014 81.0648L65.2059 76.0751C64.3836 75.9034 63.5269 76.07 62.8289 76.5372L42.5425 90.115C40.5916 91.4207 37.9514 90.1896 37.6976 87.8558L35.059 63.5878C34.9682 62.7528 34.5451 61.9895 33.885 61.47L14.7029 46.3722C12.8582 44.9203 13.2133 42.0289 15.3544 41.0664L37.6192 31.0576C38.3853 30.7133 38.9805 30.075 39.2706 29.2867L47.7018 6.37798Z" fill="#C2BBF1"></path><path d="M7.8125 57.8125C7.8125 53.4978 11.3103 50 15.625 50H71.875C76.1897 50 79.6875 53.4978 79.6875 57.8125V84.375C79.6875 88.6897 76.1897 92.1875 71.875 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V57.8125Z" fill="#7466CC"></path><path d="M45.1594 60.1562C42.5906 60.1562 40.4406 60.9187 38.7156 62.45C36.5969 64.325 35.5406 67.0812 35.5406 70.7375C35.5406 74.3625 36.5719 77.1125 38.6344 78.9875C40.3344 80.5375 42.4844 81.3187 45.0906 81.3187C46.3406 81.3187 47.4031 81.1687 48.3031 80.8687C48.9677 80.624 49.6046 80.3097 50.2031 79.9312L52.6156 82.2125L54.8031 79.9312L52.4906 77.775C53.1781 77.0187 53.7031 76.0625 54.0531 74.9125C54.4906 73.7125 54.7031 72.225 54.7031 70.4375C54.7031 67.075 53.6906 64.4562 51.6656 62.5875C49.9156 60.9625 47.7406 60.1562 45.1594 60.1562ZM24.8094 60.1875C22.2906 60.1875 20.3719 60.775 19.0719 61.9625C18.4415 62.5194 17.9403 63.2073 17.6035 63.9781C17.2667 64.749 17.1023 65.584 17.1219 66.425C17.1219 68.3875 17.7969 69.8312 19.1406 70.75C19.9406 71.3 21.3781 71.8125 23.4531 72.2812L25.5719 72.7562C26.8094 73.0312 27.7156 73.3437 28.2969 73.6937C28.8781 74.0562 29.1656 74.5687 29.1656 75.225C29.1656 76.3562 28.5844 77.1312 27.4156 77.5437C26.6391 77.7839 25.8281 77.8938 25.0156 77.8687C23.3719 77.8687 22.2031 77.4625 21.5281 76.6375C21.0977 76.0343 20.8386 75.326 20.7781 74.5875H16.7969C16.7969 76.6687 17.5469 78.3062 19.0344 79.4937C20.5281 80.6812 22.5719 81.275 25.1781 81.275C27.7281 81.275 29.7031 80.675 31.0969 79.4625C31.7658 78.9105 32.3014 78.2147 32.6639 77.4269C33.0265 76.6391 33.2065 75.7796 33.1906 74.9125C33.1906 73.1312 32.5969 71.775 31.4031 70.8313C30.6344 70.225 29.4969 69.7437 27.9844 69.3812L24.5406 68.5562C23.2094 68.2375 22.3406 67.9625 21.9344 67.725C21.6391 67.5776 21.3926 67.3484 21.2241 67.0647C21.0557 66.781 20.9724 66.4547 20.9844 66.125C20.9844 65.35 21.3094 64.7437 21.9469 64.3125C22.7221 63.8401 23.6214 63.6115 24.5281 63.6562C25.4969 63.6562 26.3031 63.825 26.9531 64.1563C27.9281 64.6625 28.4531 65.5188 28.5281 66.7188H32.5406C32.4719 64.5938 31.6906 62.975 30.2031 61.8625C28.6406 60.7216 26.7433 60.1324 24.8094 60.1875ZM62.0719 60.7687H57.8906V80.7625H71.9719V77.1687H62.0719V60.7687ZM45.1344 63.7C46.8906 63.7 48.2344 64.3125 49.1531 65.5375C50.0656 66.7625 50.5281 68.4937 50.5281 70.7375C50.5281 71.7125 50.4281 72.5687 50.2281 73.3C50.1031 73.7875 49.8781 74.3625 49.5656 75.0125L47.5406 73.0812L45.3844 75.3312L47.4094 77.2625C46.6843 77.6041 45.8921 77.7792 45.0906 77.775C43.8935 77.8028 42.7272 77.394 41.8094 76.625C40.3969 75.4375 39.6906 73.475 39.6906 70.7375C39.6906 68.3937 40.1844 66.6375 41.1719 65.4625C41.6525 64.8856 42.2591 64.4266 42.945 64.1211C43.6309 63.8155 44.3778 63.6714 45.1281 63.7H45.1344Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-table-read-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.2969 65.9196V42.1875H25V66.0184C13.8314 64.7704 5.07812 55.397 5.07812 44.1169C5.07812 32.7236 13.6874 23.5371 25.293 22.0726C29.7852 13.2544 39.1401 7.37305 50 7.37305C63.8494 7.37305 75.0799 16.9257 77.7011 29.4162C87.0605 30.1507 94.9219 38.2344 94.9219 47.7836C94.9219 57.0368 88.2624 64.5074 79.2969 65.9196Z" fill="#8CCDF8"></path><path d="M52.1484 79.5924C37.1549 79.5924 25 75.315 25 70.0391V82.6342C25 87.9102 37.1549 92.1875 52.1484 92.1875C67.142 92.1875 79.2969 87.9102 79.2969 82.6342V70.0391C79.2969 75.315 67.142 79.5924 52.1484 79.5924ZM52.1484 59.9698C37.1549 59.9698 25 55.6938 25 50.4165V63.5275C25 68.8035 37.1549 73.0808 52.1484 73.0808C67.142 73.0808 79.2969 68.8035 79.2969 63.5275V50.4165C79.2969 55.6938 67.142 59.9698 52.1484 59.9698ZM25 43.1471C25 48.4231 37.1549 52.7004 52.1484 52.7004C67.142 52.7004 79.2969 48.4231 79.2969 43.1471C79.2969 37.8711 67.142 33.5938 52.1484 33.5938C37.1549 33.5938 25 37.8711 25 43.1471Z" fill="#3392DB"></path><path d="M44.1406 74.2188C44.1406 85.0056 35.3962 93.75 24.6094 93.75C13.8226 93.75 5.07812 85.0056 5.07812 74.2188C5.07812 63.4319 13.8226 54.6875 24.6094 54.6875C35.3962 54.6875 44.1406 63.4319 44.1406 74.2188Z" fill="#B7E2FD"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.2534 71.2811L25.0959 68.1236C23.8755 66.9032 23.8755 64.9246 25.0959 63.7042C26.3163 62.4838 28.295 62.4838 29.5154 63.7042L38.3329 72.5217C38.34 72.5287 38.347 72.5357 38.3541 72.5428C38.7092 72.8979 38.961 73.3173 39.1095 73.7635C39.1204 73.7964 39.1308 73.8295 39.1407 73.8627C39.4554 74.9258 39.1933 76.1234 38.3542 76.9625C38.3444 76.9723 38.3346 76.982 38.3247 76.9916L29.5153 85.801C28.2949 87.0214 26.3162 87.0214 25.0958 85.801C23.8755 84.5806 23.8755 82.602 25.0958 81.3816L28.9463 77.5311L13.794 77.5311C12.0681 77.5311 10.669 76.132 10.669 74.4061C10.669 72.6802 12.0681 71.2811 13.794 71.2811H28.2534Z" fill="#3392DB"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="none" id="prep-visualization-union-font"><g clip-path="url(#prep-visualization-union-font_clip0_18732_2270)"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.9883 0.0117188H0.0117188V29.9883H29.9883V0.0117188ZM0 0V30H30V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M2.34375 18.2812C2.34375 16.9868 3.39308 15.9375 4.6875 15.9375H25.3125C26.6069 15.9375 27.6562 16.9868 27.6562 18.2812V25.3125C27.6562 26.6069 26.6069 27.6562 25.3125 27.6562H4.6875C3.39308 27.6562 2.34375 26.6069 2.34375 25.3125V18.2812Z" fill="#57B25D"></path><path d="M2.34375 4.6875C2.34375 3.39308 3.39308 2.34375 4.6875 2.34375H25.3125C26.6069 2.34375 27.6562 3.39308 27.6562 4.6875V11.7188C27.6562 13.0132 26.6069 14.0625 25.3125 14.0625H4.6875C3.39308 14.0625 2.34375 13.0132 2.34375 11.7188V4.6875Z" fill="#BEE4BF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2566 22.7343H12.5231C12.1195 22.7343 11.9046 22.258 12.1716 21.9554L14.6485 19.1482C14.8351 18.9368 15.1649 18.9368 15.3515 19.1482L17.8284 21.9554C18.0954 22.258 17.8805 22.7343 17.4769 22.7343H15.7546C16.7501 25.6386 19.497 27.6561 22.65 27.6561H7.44794C10.5735 27.6561 13.2998 25.639 14.2566 22.7343Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2566 7.26574H12.5231C12.1195 7.26574 11.9046 7.74195 12.1716 8.04462L14.6485 10.8518C14.8351 11.0632 15.1649 11.0632 15.3515 10.8518L17.8284 8.04462C18.0954 7.74195 17.8805 7.26574 17.4769 7.26574H15.7547C16.7501 4.36136 19.497 2.34386 22.6501 2.34386H7.44795C10.5735 2.34386 13.2998 4.36104 14.2566 7.26574Z" fill="#57B25D"></path></g><defs><clipPath id="prep-visualization-union-font_clip0_18732_2270"><rect width="30" height="30" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-xml-parse-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V39.4531C7.8125 43.7678 11.3103 47.2656 15.625 47.2656H84.375C88.6897 47.2656 92.1875 43.7678 92.1875 39.4531V15.625C92.1875 11.3103 88.6897 7.8125 84.375 7.8125H15.625ZM26.4844 27.4375L20.0039 37.5H24.6523L29 30.4727L33.3203 37.5H38.1328L31.543 27.6836L37.668 17.9766H32.9922L29.0547 24.6484L25.0352 17.9766H20.3867L26.4844 27.4375ZM41.658 17.9766V37.5H45.3768V27.7109C45.3768 27.0365 45.3585 26.3529 45.3221 25.6602C45.3039 24.9492 45.2765 24.293 45.2401 23.6914C45.2218 23.0898 45.1945 22.6068 45.158 22.2422H45.2674L50.1893 37.5H54.0447L58.994 22.2695H59.1033C59.0851 22.6523 59.0578 23.1445 59.0213 23.7461C58.9848 24.3477 58.9575 24.9857 58.9393 25.6602C58.921 26.3164 58.9119 26.9635 58.9119 27.6016V37.5H62.8221V17.9766H57.1346L52.2947 32.6602H52.1854L47.3455 17.9766H41.658ZM68.5735 17.9766V37.5H80.6594V34.0547H72.757V17.9766H68.5735Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M83.0396 62.5L83.0396 73.8281C83.0396 76.417 80.9409 78.5156 78.352 78.5156L69.4379 78.5156L72.9652 74.9884C74.1856 73.768 74.1856 71.7893 72.9652 70.5689C71.7448 69.3486 69.7661 69.3486 68.5458 70.5689L59.5091 79.6056C58.2888 80.8259 58.2888 82.8046 59.5091 84.025L68.5458 93.0616C69.7661 94.282 71.7448 94.282 72.9652 93.0616C74.1856 91.8412 74.1856 89.8626 72.9652 88.6422L69.0886 84.7656L78.352 84.7656C84.3927 84.7656 89.2895 79.8687 89.2896 73.8281L89.2896 62.5C89.2896 60.7741 87.8904 59.375 86.1646 59.375C84.4387 59.375 83.0396 60.7741 83.0396 62.5Z" fill="#537BC6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M43.75 60.9375H15.625C14.3306 60.9375 13.2812 61.9868 13.2812 63.2812V67.5781H21.875H25H34.375H37.5H46.0938V63.2812C46.0938 61.9868 45.0444 60.9375 43.75 60.9375ZM33.5938 72.2656H25.7812V77.3438H33.5938V72.2656ZM38.2812 77.3438V72.2656H46.0938V77.3438H38.2812ZM33.5938 82.0312H25.7812V86.7188C25.7812 86.861 25.7432 86.9945 25.6767 87.1094H33.6983C33.6318 86.9945 33.5938 86.861 33.5938 86.7188V82.0312ZM38.1767 87.1094C38.2432 86.9945 38.2812 86.861 38.2812 86.7188V82.0312H46.0938V84.7656C46.0938 86.06 45.0444 87.1094 43.75 87.1094H38.1767ZM13.2812 72.2656H21.0938V77.3438H13.2812V72.2656ZM13.2812 82.0312H21.0938V86.7188C21.0938 86.861 21.1318 86.9945 21.1983 87.1094H15.625C14.3306 87.1094 13.2812 86.06 13.2812 84.7656V82.0312ZM15.625 55.4688C11.3103 55.4688 7.8125 58.9665 7.8125 63.2812V84.7656C7.8125 89.0803 11.3103 92.5781 15.625 92.5781H43.75C48.0647 92.5781 51.5625 89.0804 51.5625 84.7656V63.2812C51.5625 58.9665 48.0647 55.4688 43.75 55.4688H15.625Z" fill="#537BC6"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="api-details-menu"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3834 7.60986C11.8245 7.89076 11.8245 8.39494 11.3834 8.67583L3.29361 13.8274C2.67478 14.2214 1.71423 13.8973 1.71423 13.2944L1.71423 2.99131C1.71423 2.3884 2.67478 2.06425 3.29361 2.45832L11.3834 7.60986Z" fill="#2C60DB"></path><g filter="url(#api-details-menu_filter0_b_7792_205855)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5263 7.60987C14.9675 7.89076 14.9675 8.39494 14.5263 8.67583L6.43656 13.8274C5.81772 14.2214 4.85718 13.8973 4.85718 13.2944L4.85718 2.99131C4.85718 2.3884 5.81772 2.06425 6.43656 2.45832L14.5263 7.60987Z" fill="url(#api-details-menu_paint0_linear_7792_205855)" fill-opacity="0.6"></path></g><g filter="url(#api-details-menu_filter1_b_7792_205855)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.28309 13.5864L14.3729 8.43483C14.5271 8.33664 14.5715 8.22387 14.5715 8.14285C14.5715 8.06183 14.5271 7.94906 14.3729 7.85086L6.28309 2.69932C6.05789 2.55592 5.75536 2.53757 5.50616 2.62167C5.24809 2.70876 5.14289 2.8632 5.14289 2.99131L5.14289 13.2944C5.14289 13.4225 5.24809 13.5769 5.50616 13.664C5.75535 13.7481 6.05789 13.7298 6.28309 13.5864ZM14.5263 8.67583C14.9675 8.39494 14.9675 7.89076 14.5263 7.60986L6.43656 2.45832C5.81772 2.06425 4.85718 2.3884 4.85718 2.99131L4.85718 13.2944C4.85718 13.8973 5.81772 14.2214 6.43656 13.8274L14.5263 8.67583Z" fill="url(#api-details-menu_paint1_linear_7792_205855)" fill-opacity="0.6"></path></g><circle cx="7.99996" cy="6.57144" r="0.857143" fill="white"></circle><defs><filter id="api-details-menu_filter0_b_7792_205855" x="0.17497" y="-2.3965" width="19.3644" height="21.0787" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7792_205855"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7792_205855" result="shape"></feBlend></filter><filter id="api-details-menu_filter1_b_7792_205855" x="0.17497" y="-2.3965" width="19.3644" height="21.0787" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7792_205855"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7792_205855" result="shape"></feBlend></filter><linearGradient id="api-details-menu_paint0_linear_7792_205855" x1="14.8572" y1="2.28571" x2="4.85718" y2="2.28571" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient><linearGradient id="api-details-menu_paint1_linear_7792_205855" x1="14.8572" y1="2.28571" x2="4.85718" y2="2.28571" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766 454" fill="none" id="api-details-page-en"><g filter="url(#api-details-page-en_filter0_d_1476_82988)"><rect x="54" y="52" width="658" height="365" rx="10" fill="#EDEFF3"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M54 86H97V417H64C58.4772 417 54 412.523 54 407V86Z" fill="#EDEFF3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M97 86H236V417H97V86Z" fill="white" fill-opacity="0.78"></path><rect x="54" y="160" width="43.2353" height="42" fill="#20336A" fill-opacity="0.1"></rect><rect x="54" y="160" width="1.23529" height="42" fill="#20336A"></rect><ellipse cx="75.6176" cy="172.278" rx="6.17647" ry="6.16876" fill="#21375D"></ellipse><rect x="63.2646" y="187.083" width="24.7059" height="7.40251" fill="#21375D"></rect><ellipse cx="75.6176" cy="112.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63.2646" y="126.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.353" cy="233.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="247.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.353" cy="294.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="308.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><path d="M54 62C54 56.4772 58.4772 52 64 52H702C707.523 52 712 56.4772 712 62V86H54V62Z" fill="#091E40" fill-opacity="0.66"></path><circle cx="688" cy="69" r="8" fill="#4D5465"></circle><rect x="116" y="165" width="68" height="1" fill="#091E40" fill-opacity="0.19"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M127.25 145C130.702 145 133.5 147.798 133.5 151.25C133.5 152.751 132.971 154.128 132.089 155.205L134.898 158.014C134.947 158.063 134.947 158.142 134.898 158.191L134.191 158.898C134.142 158.947 134.063 158.947 134.014 158.898L131.205 156.089C130.128 156.971 128.751 157.5 127.25 157.5C123.798 157.5 121 154.702 121 151.25C121 147.798 123.798 145 127.25 145ZM127.25 146.25C124.489 146.25 122.25 148.489 122.25 151.25C122.25 154.011 124.489 156.25 127.25 156.25C130.011 156.25 132.25 154.011 132.25 151.25C132.25 148.489 130.011 146.25 127.25 146.25Z" fill="#5D6B81"></path><path d="M197.875 145.75C197.806 145.75 197.75 145.806 197.75 145.875V146.875C197.75 146.944 197.806 147 197.875 147H210.125C210.194 147 210.25 146.944 210.25 146.875V145.875C210.25 145.806 210.194 145.75 210.125 145.75H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.875 149.5C197.806 149.5 197.75 149.556 197.75 149.625V150.625C197.75 150.694 197.806 150.75 197.875 150.75H202.875C202.944 150.75 203 150.694 203 150.625V149.625C203 149.556 202.944 149.5 202.875 149.5H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.75 153.375C197.75 153.306 197.806 153.25 197.875 153.25H200.875C200.944 153.25 201 153.306 201 153.375V154.375C201 154.444 200.944 154.5 200.875 154.5H197.875C197.806 154.5 197.75 154.444 197.75 154.375V153.375Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.875 157C197.806 157 197.75 157.056 197.75 157.125V158.125C197.75 158.194 197.806 158.25 197.875 158.25H199.875C199.944 158.25 200 158.194 200 158.125V157.125C200 157.056 199.944 157 199.875 157H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M205.725 150C205.675 150 205.63 150.029 205.61 150.075L202.077 158.075C202.041 158.157 202.102 158.25 202.192 158.25H203.083C203.183 158.25 203.273 158.191 203.312 158.1L204.28 155.875H208.337L209.3 158.099C209.34 158.191 209.43 158.25 209.529 158.25H210.433C210.523 158.25 210.584 158.157 210.548 158.075L207.015 150.075C206.995 150.029 206.95 150 206.9 150H205.725ZM207.85 154.75H204.769L206.312 151.2L207.85 154.75Z" fill="#091E40" fill-opacity="0.9"></path><path d="M213.75 156.75L209.5 156.75C209.294 156.75 209.176 156.985 209.3 157.15L211.425 159.983C211.525 160.117 211.725 160.117 211.825 159.983L213.95 157.15C214.074 156.985 213.956 156.75 213.75 156.75Z" fill="#091E40" fill-opacity="0.9"></path><rect x="116" y="176" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="185" r="6" fill="#DADEE6"></circle><rect x="116" y="200" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="209" r="6" fill="#DADEE6"></circle><rect x="131" y="224" width="85" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="140" cy="233" r="6" fill="#DADEE6"></circle><rect x="131" y="248" width="85" height="18" rx="2" fill="#87B0F7"></rect><circle cx="140" cy="257" r="6" fill="white"></circle><rect x="116" y="275" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="284" r="6" fill="#DADEE6"></circle><path d="M118.76 119.34L119.024 118.368C119.288 117.444 119.552 116.436 119.78 115.464H119.828C120.092 116.424 120.332 117.444 120.608 118.368L120.872 119.34H118.76ZM121.88 123H123.74L120.884 114.12H118.796L115.952 123H117.752L118.376 120.72H121.256L121.88 123ZM124.78 123H126.556V119.844H127.744C129.652 119.844 131.176 118.932 131.176 116.904C131.176 114.804 129.664 114.12 127.696 114.12H124.78V123ZM126.556 118.44V115.524H127.564C128.788 115.524 129.436 115.872 129.436 116.904C129.436 117.924 128.848 118.44 127.624 118.44H126.556ZM132.783 123H134.559V114.12H132.783V123ZM139.463 123H144.839V121.512H141.239V114.12H139.463V123ZM146.245 123H147.997V116.28H146.245V123ZM147.133 115.2C147.733 115.2 148.177 114.792 148.177 114.24C148.177 113.664 147.733 113.28 147.133 113.28C146.521 113.28 146.077 113.664 146.077 114.24C146.077 114.792 146.521 115.2 147.133 115.2ZM151.809 123.168C153.561 123.168 154.485 122.22 154.485 121.044C154.485 119.796 153.501 119.352 152.613 119.016C151.905 118.752 151.245 118.572 151.245 118.08C151.245 117.696 151.533 117.432 152.133 117.432C152.637 117.432 153.105 117.672 153.585 118.008L154.377 116.94C153.813 116.52 153.069 116.112 152.085 116.112C150.573 116.112 149.589 116.964 149.589 118.176C149.589 119.292 150.573 119.808 151.425 120.132C152.133 120.408 152.829 120.636 152.829 121.14C152.829 121.56 152.529 121.848 151.857 121.848C151.233 121.848 150.657 121.584 150.057 121.116L149.253 122.22C149.913 122.772 150.909 123.168 151.809 123.168ZM158.01 123.168C158.598 123.168 159.066 123.036 159.426 122.916L159.138 121.632C158.958 121.704 158.694 121.776 158.478 121.776C157.878 121.776 157.566 121.416 157.566 120.648V117.672H159.222V116.28H157.566V114.48H156.09L155.886 116.28L154.854 116.364V117.672H155.802V120.648C155.802 122.16 156.414 123.168 158.01 123.168Z" fill="#091E40" fill-opacity="0.9"></path><rect x="188" y="106" width="28" height="24" rx="2" fill="#87B0F7"></rect><path d="M201.5 113C201.431 113 201.375 113.056 201.375 113.125V117.375H197.125C197.056 117.375 197 117.431 197 117.5V118.5C197 118.569 197.056 118.625 197.125 118.625H201.375V122.875C201.375 122.944 201.431 123 201.5 123H202.5C202.569 123 202.625 122.944 202.625 122.875V118.625H206.875C206.944 118.625 207 118.569 207 118.5V117.5C207 117.431 206.944 117.375 206.875 117.375H202.625V113.125C202.625 113.056 202.569 113 202.5 113H201.5Z" fill="white"></path><rect x="250" y="98" width="448" height="44" rx="4" fill="white" fill-opacity="0.8"></rect><rect x="639" y="110" width="47" height="20" rx="4" fill="#2C60DB" fill-opacity="0.46"></rect><rect x="584" y="110" width="47" height="20" rx="4" fill="#EEF1F6"></rect><rect x="262" y="110" width="126" height="20" rx="4" fill="#EEF1F6"></rect><rect x="250" y="154" width="448" height="88" rx="4" fill="white" fill-opacity="0.8"></rect><rect x="250" y="254" width="448" height="149" rx="4" fill="white" fill-opacity="0.8"></rect><rect x="262" y="166" width="68" height="18" rx="2" fill="#EEF1F6"></rect><rect x="262" y="266" width="68" height="18" rx="2" fill="#EEF1F6"></rect><rect x="262" y="194" width="203" height="12" rx="2" fill="#DADEE6"></rect><rect x="262" y="216" width="203" height="12" rx="2" fill="#DADEE6"></rect><rect x="483" y="194" width="203" height="12" rx="2" fill="#DADEE6"></rect><rect x="483" y="216" width="203" height="12" rx="2" fill="#DADEE6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M264 331.909H686V300H264V331.909Z" fill="#DADEE6"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M264 361.455H686V331.909H264V361.455Z" fill="#EEF3FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M264 391H686V361.455H264V391Z" fill="#EEF1F6" fill-opacity="0.59"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M447.066 344.318H399.293V348.601H447.066V344.318ZM343.622 344.318H295.849V348.601H343.622V344.318ZM502.737 344.318H550.51V348.601H502.737V344.318ZM653.954 344.318H606.18V348.601H653.954V344.318Z" fill="#DADEE6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M447.066 373.864H399.293V378.147H447.066V373.864ZM343.622 373.864H295.849V378.147H343.622V373.864ZM502.737 373.864H550.51V378.147H502.737V373.864ZM653.954 373.864H606.18V378.147H653.954V373.864Z" fill="#DADEE6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M447.132 313.591H399.359V318.18H447.132V313.591ZM343.623 313.591H295.849V318.18H343.623V313.591ZM502.868 313.591H550.642V318.18H502.868V313.591ZM654.151 313.591H606.378V318.18H654.151V313.591Z" fill="white"></path></g><path d="M602.466 71L610.242 60.5629L602.466 58.3627V71ZM575 46.4387L597.092 53.0116L624.3 30.3226L603.214 54.7621L626.834 61.9282L639 16L575 46.4387Z" fill="#87B0F7"></path><path d="M599.5 61.5001C581.167 86.0001 548.7 125.5 505.5 101.5C462.3 77.5 480.3 34.4 417.5 46C354.7 57.6 319.667 49.5 291.5 35.5" stroke="#9FA6B2" stroke-width="2" stroke-dasharray="4 4"></path><g filter="url(#api-details-page-en_filter1_d_1476_82988)"><path fill-rule="evenodd" clip-rule="evenodd" d="M97.7432 361C108.378 361 117 369.66 117 380.342C117 391.024 108.378 399.684 97.7432 399.684H51.8018L39.973 410L39.974 399.642C29.9369 398.979 22 390.592 22 380.342C22 369.66 30.6215 361 41.2568 361H97.7432Z" fill="#C0C7D0"></path><path d="M48.9595 384.21C51.0865 384.21 52.8109 382.479 52.8109 380.342C52.8109 378.206 51.0865 376.474 48.9595 376.474C46.8325 376.474 45.1082 378.206 45.1082 380.342C45.1082 382.479 46.8325 384.21 48.9595 384.21Z" fill="white"></path><path d="M69.5 384.21C71.6271 384.21 73.3514 382.479 73.3514 380.342C73.3514 378.206 71.6271 376.474 69.5 376.474C67.373 376.474 65.6487 378.206 65.6487 380.342C65.6487 382.479 67.373 384.21 69.5 384.21Z" fill="white"></path><path d="M90.0406 384.211C92.1676 384.211 93.8919 382.479 93.8919 380.342C93.8919 378.206 92.1676 376.474 90.0406 376.474C87.9135 376.474 86.1892 378.206 86.1892 380.342C86.1892 382.479 87.9135 384.211 90.0406 384.211Z" fill="white"></path></g><defs><filter id="api-details-page-en_filter0_d_1476_82988" x="40" y="44" width="686" height="393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="7"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1476_82988"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1476_82988" result="shape"></feBlend></filter><filter id="api-details-page-en_filter1_d_1476_82988" x="2" y="347" width="135" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="10"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1476_82988"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1476_82988" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766 454" fill="none" id="api-details-page"><g filter="url(#api-details-page_filter0_d_513_61505)"><rect x="54" y="52" width="658" height="365" rx="10" fill="#EDEFF3"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M54 86H97V417H64C58.4772 417 54 412.523 54 407V86Z" fill="#EDEFF3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M97 86H236V417H97V86Z" fill="white" fill-opacity="0.78"></path><rect x="54" y="160" width="43.2353" height="42" fill="#20336A" fill-opacity="0.1"></rect><rect x="54" y="160" width="1.23529" height="42" fill="#20336A"></rect><ellipse cx="75.6176" cy="172.278" rx="6.17647" ry="6.16876" fill="#21375D"></ellipse><rect x="63.2647" y="187.083" width="24.7059" height="7.40251" fill="#21375D"></rect><ellipse cx="75.6176" cy="112.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63.2648" y="126.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.3529" cy="233.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="247.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.3529" cy="294.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="308.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><path d="M54 62C54 56.4772 58.4772 52 64 52H702C707.523 52 712 56.4772 712 62V86H54V62Z" fill="#091E40" fill-opacity="0.66"></path><circle cx="688" cy="69" r="8" fill="#4D5465"></circle><rect x="116" y="165" width="68" height="1" fill="#091E40" fill-opacity="0.19"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M127.25 145C130.702 145 133.5 147.798 133.5 151.25C133.5 152.751 132.971 154.128 132.089 155.205L134.898 158.014C134.947 158.063 134.947 158.142 134.898 158.191L134.191 158.898C134.142 158.947 134.063 158.947 134.014 158.898L131.205 156.089C130.128 156.971 128.751 157.5 127.25 157.5C123.798 157.5 121 154.702 121 151.25C121 147.798 123.798 145 127.25 145ZM127.25 146.25C124.489 146.25 122.25 148.489 122.25 151.25C122.25 154.011 124.489 156.25 127.25 156.25C130.011 156.25 132.25 154.011 132.25 151.25C132.25 148.489 130.011 146.25 127.25 146.25Z" fill="#5D6B81"></path><path d="M197.875 145.75C197.806 145.75 197.75 145.806 197.75 145.875V146.875C197.75 146.944 197.806 147 197.875 147H210.125C210.194 147 210.25 146.944 210.25 146.875V145.875C210.25 145.806 210.194 145.75 210.125 145.75H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.875 149.5C197.806 149.5 197.75 149.556 197.75 149.625V150.625C197.75 150.694 197.806 150.75 197.875 150.75H202.875C202.944 150.75 203 150.694 203 150.625V149.625C203 149.556 202.944 149.5 202.875 149.5H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.75 153.375C197.75 153.306 197.806 153.25 197.875 153.25H200.875C200.944 153.25 201 153.306 201 153.375V154.375C201 154.444 200.944 154.5 200.875 154.5H197.875C197.806 154.5 197.75 154.444 197.75 154.375V153.375Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.875 157C197.806 157 197.75 157.056 197.75 157.125V158.125C197.75 158.194 197.806 158.25 197.875 158.25H199.875C199.944 158.25 200 158.194 200 158.125V157.125C200 157.056 199.944 157 199.875 157H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M205.725 150C205.675 150 205.63 150.029 205.61 150.075L202.077 158.075C202.041 158.157 202.102 158.25 202.192 158.25H203.083C203.183 158.25 203.273 158.191 203.312 158.1L204.28 155.875H208.337L209.3 158.099C209.34 158.191 209.43 158.25 209.529 158.25H210.433C210.523 158.25 210.584 158.157 210.548 158.075L207.015 150.075C206.995 150.029 206.95 150 206.9 150H205.725ZM207.85 154.75H204.769L206.312 151.2L207.85 154.75Z" fill="#091E40" fill-opacity="0.9"></path><path d="M213.75 156.75L209.5 156.75C209.294 156.75 209.176 156.985 209.3 157.15L211.425 159.983C211.525 160.117 211.725 160.117 211.825 159.983L213.95 157.15C214.074 156.985 213.956 156.75 213.75 156.75Z" fill="#091E40" fill-opacity="0.9"></path><rect x="116" y="176" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="185" r="6" fill="#DADEE6"></circle><rect x="116" y="200" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="209" r="6" fill="#DADEE6"></circle><rect x="131" y="224" width="85" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="140" cy="233" r="6" fill="#DADEE6"></circle><rect x="131" y="248" width="85" height="18" rx="2" fill="#87B0F7"></rect><circle cx="140" cy="257" r="6" fill="white"></circle><rect x="116" y="275" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="284" r="6" fill="#DADEE6"></circle><path d="M118.76 119.34L119.024 118.368C119.288 117.444 119.552 116.436 119.78 115.464H119.828C120.092 116.424 120.332 117.444 120.608 118.368L120.872 119.34H118.76ZM121.88 123H123.74L120.884 114.12H118.796L115.952 123H117.752L118.376 120.72H121.256L121.88 123ZM124.78 123H126.556V119.844H127.744C129.652 119.844 131.176 118.932 131.176 116.904C131.176 114.804 129.664 114.12 127.696 114.12H124.78V123ZM126.556 118.44V115.524H127.564C128.788 115.524 129.436 115.872 129.436 116.904C129.436 117.924 128.848 118.44 127.624 118.44H126.556ZM132.783 123H134.559V114.12H132.783V123ZM140.728 117.348C140.536 118.164 140.284 118.92 139.96 119.58C139.444 119.112 138.736 118.56 138.16 118.092C138.28 117.864 138.388 117.612 138.496 117.348H140.728ZM136.264 114.744H137.86C137.5 116.364 136.9 117.864 136.024 118.836C136.3 119.124 136.732 119.796 136.888 120.096C137.104 119.868 137.296 119.604 137.488 119.316C138.04 119.808 138.712 120.372 139.168 120.852C138.436 121.8 137.512 122.496 136.408 122.928C136.696 123.216 137.068 123.78 137.26 124.14C140.008 122.868 141.724 120.444 142.3 116.256L141.4 115.992L141.16 116.04H138.94C139.072 115.608 139.18 115.188 139.288 114.744H142.504V113.376H136.264V114.744ZM144.46 114.108H143.056V120.984H144.46V114.108ZM145.516 112.944V122.364C145.516 122.568 145.444 122.628 145.24 122.628C145.036 122.64 144.4 122.64 143.788 122.616C143.98 123 144.184 123.6 144.244 123.984C145.216 123.996 145.888 123.948 146.344 123.732C146.8 123.504 146.956 123.144 146.956 122.364V112.944H145.516ZM157.6 118.788C157.144 119.22 156.46 119.76 155.824 120.192C155.452 119.7 155.128 119.16 154.9 118.56H158.932V117.348H154.348V116.676H158.056V115.536H154.348V114.912H158.524V113.7H154.348V112.836H152.908V113.7H148.876V114.912H152.908V115.536H149.464V116.676H152.908V117.348H148.36V118.56H151.768C150.712 119.388 149.284 120.12 147.94 120.528C148.24 120.816 148.672 121.356 148.864 121.68C149.416 121.488 149.956 121.236 150.508 120.948V121.824C150.508 122.352 150.172 122.64 149.908 122.772C150.124 123.06 150.412 123.696 150.496 124.032C150.856 123.816 151.396 123.648 154.828 122.628C154.732 122.316 154.624 121.74 154.588 121.356L151.996 122.064V120.024C152.56 119.616 153.088 119.16 153.544 118.692C154.444 121.176 155.932 122.916 158.416 123.768C158.62 123.384 159.04 122.796 159.352 122.508C158.272 122.208 157.372 121.704 156.64 121.068C157.324 120.66 158.116 120.168 158.788 119.664L157.6 118.788Z" fill="#091E40" fill-opacity="0.9"></path><rect x="188" y="106" width="28" height="24" rx="2" fill="#87B0F7"></rect><path d="M201.5 113C201.431 113 201.375 113.056 201.375 113.125V117.375H197.125C197.056 117.375 197 117.431 197 117.5V118.5C197 118.569 197.056 118.625 197.125 118.625H201.375V122.875C201.375 122.944 201.431 123 201.5 123H202.5C202.569 123 202.625 122.944 202.625 122.875V118.625H206.875C206.944 118.625 207 118.569 207 118.5V117.5C207 117.431 206.944 117.375 206.875 117.375H202.625V113.125C202.625 113.056 202.569 113 202.5 113H201.5Z" fill="white"></path><rect x="250" y="98" width="448" height="44" rx="4" fill="white" fill-opacity="0.8"></rect><rect x="639" y="110" width="47" height="20" rx="4" fill="#2C60DB" fill-opacity="0.46"></rect><rect x="584" y="110" width="47" height="20" rx="4" fill="#EEF1F6"></rect><rect x="262" y="110" width="126" height="20" rx="4" fill="#EEF1F6"></rect><rect x="250" y="154" width="448" height="88" rx="4" fill="white" fill-opacity="0.8"></rect><rect x="250" y="254" width="448" height="149" rx="4" fill="white" fill-opacity="0.8"></rect><rect x="262" y="166" width="68" height="18" rx="2" fill="#EEF1F6"></rect><rect x="262" y="266" width="68" height="18" rx="2" fill="#EEF1F6"></rect><rect x="262" y="194" width="203" height="12" rx="2" fill="#DADEE6"></rect><rect x="262" y="216" width="203" height="12" rx="2" fill="#DADEE6"></rect><rect x="483" y="194" width="203" height="12" rx="2" fill="#DADEE6"></rect><rect x="483" y="216" width="203" height="12" rx="2" fill="#DADEE6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M264 331.909H686V300H264V331.909Z" fill="#DADEE6"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M264 361.455H686V331.909H264V361.455Z" fill="#EEF3FB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M264 391H686V361.455H264V391Z" fill="#EEF1F6" fill-opacity="0.59"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M447.066 344.318H399.293V348.601H447.066V344.318ZM343.622 344.318H295.849V348.601H343.622V344.318ZM502.737 344.318H550.51V348.601H502.737V344.318ZM653.954 344.318H606.18V348.601H653.954V344.318Z" fill="#DADEE6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M447.066 373.864H399.293V378.147H447.066V373.864ZM343.622 373.864H295.849V378.147H343.622V373.864ZM502.737 373.864H550.51V378.147H502.737V373.864ZM653.954 373.864H606.18V378.147H653.954V373.864Z" fill="#DADEE6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M447.132 313.591H399.358V318.18H447.132V313.591ZM343.623 313.591H295.849V318.18H343.623V313.591ZM502.868 313.591H550.642V318.18H502.868V313.591ZM654.151 313.591H606.377V318.18H654.151V313.591Z" fill="white"></path></g><path d="M602.466 71L610.242 60.5629L602.466 58.3627V71ZM575 46.4387L597.092 53.0116L624.3 30.3226L603.214 54.7621L626.834 61.9282L639 16L575 46.4387Z" fill="#87B0F7"></path><path d="M599.5 61.5001C581.167 86.0001 548.7 125.5 505.5 101.5C462.3 77.5 480.3 34.4 417.5 46C354.7 57.6 319.667 49.5 291.5 35.5" stroke="#9FA6B2" stroke-width="2" stroke-dasharray="4 4"></path><g filter="url(#api-details-page_filter1_d_513_61505)"><path fill-rule="evenodd" clip-rule="evenodd" d="M97.7432 361C108.378 361 117 369.66 117 380.342C117 391.024 108.378 399.684 97.7432 399.684H51.8018L39.973 410L39.974 399.642C29.9369 398.979 22 390.592 22 380.342C22 369.66 30.6215 361 41.2568 361H97.7432Z" fill="#C0C7D0"></path><path d="M48.9595 384.211C51.0865 384.211 52.8108 382.479 52.8108 380.342C52.8108 378.206 51.0865 376.474 48.9595 376.474C46.8324 376.474 45.1081 378.206 45.1081 380.342C45.1081 382.479 46.8324 384.211 48.9595 384.211Z" fill="white"></path><path d="M69.5 384.211C71.627 384.211 73.3514 382.479 73.3514 380.342C73.3514 378.206 71.627 376.474 69.5 376.474C67.373 376.474 65.6486 378.206 65.6486 380.342C65.6486 382.479 67.373 384.211 69.5 384.211Z" fill="white"></path><path d="M90.0405 384.211C92.1676 384.211 93.8919 382.479 93.8919 380.342C93.8919 378.206 92.1676 376.474 90.0405 376.474C87.9135 376.474 86.1892 378.206 86.1892 380.342C86.1892 382.479 87.9135 384.211 90.0405 384.211Z" fill="white"></path></g><defs><filter id="api-details-page_filter0_d_513_61505" x="40" y="44" width="686" height="393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="7"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_61505"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_61505" result="shape"></feBlend></filter><filter id="api-details-page_filter1_d_513_61505" x="2" y="347" width="135" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="10"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_61505"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_61505" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" fill="none" id="app-details-avatar"><rect x="1" y="1" width="52" height="52" rx="26" fill="#F5FAFF"></rect><path d="M25.8207 14.2559C26.5575 13.8617 27.4425 13.8617 28.1793 14.2559L38.1793 19.6058C38.9924 20.0408 39.5 20.8881 39.5 21.8102V32.1896C39.5 33.1117 38.9924 33.959 38.1793 34.394L28.1793 39.744C27.4425 40.1382 26.5575 40.1382 25.8207 39.744L15.8207 34.394C15.0076 33.959 14.5 33.1117 14.5 32.1896V21.8102C14.5 20.8881 15.0076 20.0408 15.8207 19.6058L25.8207 14.2559Z" fill="#5285EA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 26.6852V32.1896C14.5 33.1117 15.0076 33.959 15.8207 34.394L25.8207 39.744C26.5575 40.1382 27.4425 40.1382 28.1793 39.744L38.1793 34.394C38.9924 33.959 39.5 33.1117 39.5 32.1896V26.6852C39.5 25.7631 38.9924 24.9158 38.1793 24.4809L28.1793 19.1309C27.4425 18.7367 26.5575 18.7367 25.8207 19.1309L15.8207 24.4809C15.0076 24.9158 14.5 25.7631 14.5 26.6852Z" fill="#F5FAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M39.4992 21.746C39.4997 21.7674 39.5 21.7888 39.5 21.8102V32.1896C39.5 33.1117 38.9924 33.959 38.1793 34.3939L28.1793 39.7439C27.4425 40.1381 26.5575 40.1381 25.8207 39.7439L15.8207 34.3939C15.0076 33.959 14.5 33.1117 14.5 32.1896V21.8102C14.5 21.7249 14.5043 21.6403 14.5129 21.5566L25.676 28.2442C26.4546 28.7107 27.4249 28.7185 28.211 28.2646L39.4992 21.746Z" fill="#87B0F7"></path><rect x="1" y="1" width="52" height="52" rx="26" stroke="#E6EFFF" stroke-width="2"></rect></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766 454" fill="none" id="dev-page-empty-tip-en"><g filter="url(#dev-page-empty-tip-en_filter0_d_19159_158458)"><rect x="54" y="52" width="658" height="365" rx="10" fill="#EDEFF3"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M54 86H97V417H64C58.4772 417 54 412.523 54 407V86Z" fill="#EDEFF3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M97 86H236V417H97V86Z" fill="white" fill-opacity="0.78"></path><rect x="54" y="160" width="43.2353" height="42" fill="#20336A" fill-opacity="0.1"></rect><rect x="54" y="160" width="1.23529" height="42" fill="#20336A"></rect><ellipse cx="75.6174" cy="172.278" rx="6.17647" ry="6.16876" fill="#21375D"></ellipse><rect x="63.2646" y="187.083" width="24.7059" height="7.40251" fill="#21375D"></rect><ellipse cx="75.6174" cy="112.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63.2646" y="126.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.3527" cy="233.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="247.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.3527" cy="294.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="308.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><path d="M54 62C54 56.4772 58.4772 52 64 52H702C707.523 52 712 56.4772 712 62V86H54V62Z" fill="#091E40" fill-opacity="0.66"></path><circle cx="688" cy="69" r="8" fill="#4D5465"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M127.25 147C130.702 147 133.5 149.798 133.5 153.25C133.5 154.751 132.971 156.128 132.089 157.205L134.898 160.014C134.947 160.063 134.947 160.142 134.898 160.191L134.191 160.898C134.142 160.947 134.063 160.947 134.014 160.898L131.205 158.089C130.128 158.971 128.751 159.5 127.25 159.5C123.798 159.5 121 156.702 121 153.25C121 149.798 123.798 147 127.25 147ZM127.25 148.25C124.489 148.25 122.25 150.489 122.25 153.25C122.25 156.011 124.489 158.25 127.25 158.25C130.011 158.25 132.25 156.011 132.25 153.25C132.25 150.489 130.011 148.25 127.25 148.25Z" fill="#5D6B81"></path><rect x="116" y="142" width="100" height="24" rx="4" stroke="#E6E9EF" stroke-miterlimit="0" stroke-linejoin="bevel"></rect><rect x="116" y="176" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="185" r="6" fill="#DADEE6"></circle><rect x="116" y="200" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="209" r="6" fill="#DADEE6"></circle><rect x="131" y="224" width="85" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="140" cy="233" r="6" fill="#DADEE6"></circle><rect x="131" y="248" width="85" height="18" rx="2" fill="#87B0F7"></rect><circle cx="140" cy="257" r="6" fill="white"></circle><rect x="116" y="275" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="284" r="6" fill="#DADEE6"></circle><path d="M118.856 123V115.596H116.36V114.12H123.152V115.596H120.632V123H118.856ZM125.202 123.168C124.002 123.168 123.21 122.316 123.21 121.176C123.21 119.736 124.374 118.98 127.074 118.692C127.05 118.032 126.762 117.528 125.934 117.528C125.31 117.528 124.71 117.804 124.086 118.164L123.45 117C124.242 116.508 125.202 116.112 126.258 116.112C127.962 116.112 128.838 117.132 128.838 119.076V123H127.398L127.266 122.28H127.23C126.642 122.784 125.97 123.168 125.202 123.168ZM125.778 121.788C126.282 121.788 126.654 121.548 127.074 121.128V119.772C125.442 119.988 124.89 120.432 124.89 121.032C124.89 121.56 125.262 121.788 125.778 121.788ZM132.556 123.168C131.656 123.168 130.66 122.772 130 122.22L130.804 121.116C131.404 121.584 131.98 121.848 132.604 121.848C133.276 121.848 133.576 121.56 133.576 121.14C133.576 120.636 132.88 120.408 132.172 120.132C131.32 119.808 130.336 119.292 130.336 118.176C130.336 116.964 131.32 116.112 132.832 116.112C133.816 116.112 134.56 116.52 135.124 116.94L134.332 118.008C133.852 117.672 133.384 117.432 132.88 117.432C132.28 117.432 131.992 117.696 131.992 118.08C131.992 118.572 132.652 118.752 133.36 119.016C134.248 119.352 135.232 119.796 135.232 121.044C135.232 122.22 134.308 123.168 132.556 123.168ZM136.577 123V113.424H138.293V119.184H138.341L140.669 116.28H142.589L140.261 119.028L142.805 123H140.897L139.265 120.216L138.293 121.32V123H136.577ZM148.217 123.168C146.993 123.168 146.561 122.364 146.561 121.116V113.424H148.313V121.2C148.313 121.596 148.505 121.728 148.673 121.728C148.745 121.728 148.793 121.728 148.913 121.704L149.129 123.012C148.925 123.096 148.625 123.168 148.217 123.168ZM150.346 123V116.28H152.098V123H150.346ZM151.234 115.2C150.622 115.2 150.178 114.792 150.178 114.24C150.178 113.664 150.622 113.28 151.234 113.28C151.834 113.28 152.278 113.664 152.278 114.24C152.278 114.792 151.834 115.2 151.234 115.2ZM155.911 123.168C155.011 123.168 154.015 122.772 153.355 122.22L154.159 121.116C154.759 121.584 155.335 121.848 155.959 121.848C156.631 121.848 156.931 121.56 156.931 121.14C156.931 120.636 156.235 120.408 155.527 120.132C154.675 119.808 153.691 119.292 153.691 118.176C153.691 116.964 154.675 116.112 156.187 116.112C157.171 116.112 157.915 116.52 158.479 116.94L157.687 118.008C157.207 117.672 156.739 117.432 156.235 117.432C155.635 117.432 155.347 117.696 155.347 118.08C155.347 118.572 156.007 118.752 156.715 119.016C157.603 119.352 158.587 119.796 158.587 121.044C158.587 122.22 157.663 123.168 155.911 123.168ZM162.111 123.168C160.515 123.168 159.903 122.16 159.903 120.648V117.672H158.955V116.364L159.987 116.28L160.191 114.48H161.667V116.28H163.323V117.672H161.667V120.648C161.667 121.416 161.979 121.776 162.579 121.776C162.795 121.776 163.059 121.704 163.239 121.632L163.527 122.916C163.167 123.036 162.699 123.168 162.111 123.168Z" fill="#091E40" fill-opacity="0.9"></path><rect x="188" y="106" width="28" height="24" rx="2" fill="#87B0F7"></rect><path d="M201.5 113C201.431 113 201.375 113.056 201.375 113.125V117.375H197.125C197.056 117.375 197 117.431 197 117.5V118.5C197 118.569 197.056 118.625 197.125 118.625H201.375V122.875C201.375 122.944 201.431 123 201.5 123H202.5C202.569 123 202.625 122.944 202.625 122.875V118.625H206.875C206.944 118.625 207 118.569 207 118.5V117.5C207 117.431 206.944 117.375 206.875 117.375H202.625V113.125C202.625 113.056 202.569 113 202.5 113H201.5Z" fill="white"></path><rect x="238" y="125" width="109" height="292" fill="white" fill-opacity="0.8"></rect><path d="M349 255H712V407C712 412.523 707.523 417 702 417H349V255Z" fill="white" fill-opacity="0.8"></path><rect x="250" y="136" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="142" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="171" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="177" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="361" y="267" width="85" height="18" rx="2" fill="#EEF1F6"></rect><rect x="361" y="305" width="53" height="15" rx="2" fill="#DADEE6"></rect><rect x="430" y="305" width="270" height="15" rx="2" fill="#DADEE6"></rect><rect x="361" y="332" width="74" height="15" rx="2" fill="#DADEE6"></rect><rect x="452" y="332" width="71" height="15" rx="2" fill="#DADEE6"></rect><rect x="541" y="332" width="71" height="15" rx="2" fill="#DADEE6"></rect><rect x="629" y="332" width="71" height="15" rx="2" fill="#DADEE6"></rect><rect x="361" y="359" width="339" height="15" rx="2" fill="#DADEE6"></rect><rect x="361" y="386" width="339" height="15" rx="2" fill="#DADEE6"></rect><rect x="250" y="206" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="212" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="241" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="247" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="276" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="282" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="311" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="317" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="346" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="352" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="381" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="387" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="238" y="86" width="474" height="37" fill="white" fill-opacity="0.8"></rect><rect x="250" y="94" width="138" height="20" rx="4" fill="#DADEE6"></rect><rect x="646" y="94" width="50" height="20" rx="4" fill="#EEF1F6"></rect><rect x="586" y="94" width="50" height="20" rx="4" fill="#EEF1F6"></rect><rect x="526" y="94" width="50" height="20" rx="4" fill="#EEF1F6"></rect></g><path d="M602.466 71L610.242 60.5629L602.466 58.3627V71ZM575 46.4387L597.092 53.0116L624.3 30.3226L603.214 54.7621L626.834 61.9282L639 16L575 46.4387Z" fill="#87B0F7"></path><path d="M599.5 61.5001C581.167 86.0001 548.7 125.5 505.5 101.5C462.3 77.5 480.3 34.4 417.5 46C354.7 57.6 319.667 49.5 291.5 35.5" stroke="#9FA6B2" stroke-width="2" stroke-dasharray="4 4"></path><g filter="url(#dev-page-empty-tip-en_filter1_d_19159_158458)"><path fill-rule="evenodd" clip-rule="evenodd" d="M97.7432 361C108.378 361 117 369.66 117 380.342C117 391.024 108.378 399.684 97.7432 399.684H51.8018L39.973 410L39.974 399.642C29.9369 398.979 22 390.592 22 380.342C22 369.66 30.6215 361 41.2568 361H97.7432Z" fill="#C0C7D0"></path><path d="M48.9593 384.21C51.0863 384.21 52.8106 382.479 52.8106 380.342C52.8106 378.206 51.0863 376.474 48.9593 376.474C46.8322 376.474 45.1079 378.206 45.1079 380.342C45.1079 382.479 46.8322 384.21 48.9593 384.21Z" fill="white"></path><path d="M69.4998 384.21C71.6268 384.21 73.3511 382.479 73.3511 380.342C73.3511 378.206 71.6268 376.474 69.4998 376.474C67.3727 376.474 65.6484 378.206 65.6484 380.342C65.6484 382.479 67.3727 384.21 69.4998 384.21Z" fill="white"></path><path d="M90.0403 384.21C92.1674 384.21 93.8917 382.479 93.8917 380.342C93.8917 378.206 92.1674 376.474 90.0403 376.474C87.9133 376.474 86.189 378.206 86.189 380.342C86.189 382.479 87.9133 384.21 90.0403 384.21Z" fill="white"></path></g><path d="M503 181H546" stroke="url(#dev-page-empty-tip-en_paint0_linear_19159_158458)" stroke-opacity="0.47" stroke-width="3"></path><g filter="url(#dev-page-empty-tip-en_filter2_d_19159_158458)"><rect x="467" y="163" width="36" height="36" rx="6" fill="white" shape-rendering="crispEdges"></rect><rect x="473" y="169" width="24" height="24" rx="2" fill="#B9D3FE"></rect><path d="M488.938 173.969C488.938 174.435 488.56 174.812 488.094 174.812C487.628 174.812 487.25 174.435 487.25 173.969C487.25 173.503 487.628 173.125 488.094 173.125C488.56 173.125 488.938 173.503 488.938 173.969Z" fill="#B9D3FE"></path><path d="M488.094 181.938C488.56 181.938 488.938 181.56 488.938 181.094C488.938 180.628 488.56 180.25 488.094 180.25C487.628 180.25 487.25 180.628 487.25 181.094C487.25 181.56 487.628 181.938 488.094 181.938Z" fill="#B9D3FE"></path><path d="M478.156 184.094C478.053 184.094 477.969 184.178 477.969 184.281V185.594C477.969 185.697 478.053 185.781 478.156 185.781H481.719C481.822 185.781 481.906 185.697 481.906 185.594V184.281C481.906 184.178 481.822 184.094 481.719 184.094H478.156Z" fill="#B9D3FE"></path><path d="M485 171.25C485 171.043 485.168 170.875 485.375 170.875H494.75C494.957 170.875 495.125 171.043 495.125 171.25V183.812C495.125 184.02 494.957 184.188 494.75 184.188H485.375C485.168 184.188 485 184.02 485 183.812V188.031C485 188.238 484.832 188.406 484.625 188.406H480.781V189.438H483.594C483.697 189.438 483.781 189.521 483.781 189.625V190.938C483.781 191.041 483.697 191.125 483.594 191.125H476.281C476.178 191.125 476.094 191.041 476.094 190.938V189.625C476.094 189.521 476.178 189.438 476.281 189.438H479.094V188.406H475.25C475.043 188.406 474.875 188.238 474.875 188.031V180.906C474.875 180.699 475.043 180.531 475.25 180.531H484.625C484.832 180.531 485 180.699 485 180.906V171.25ZM486.688 175.375H493.438V172.562H486.688V175.375ZM486.688 179.688V182.5H493.438V179.688H486.688ZM476.562 186.719H483.312V182.219H476.562V186.719Z" fill="#B9D3FE"></path><path d="M483.5 172.155C483.5 172.039 483.396 171.951 483.282 171.973C479.746 172.641 476.927 175.336 476.077 178.804C476.048 178.92 476.137 179.031 476.257 179.031H477.618C477.702 179.031 477.776 178.974 477.8 178.893C478.559 176.295 480.687 174.28 483.35 173.682C483.437 173.662 483.5 173.586 483.5 173.497V172.155Z" fill="#B9D3FE"></path><path d="M492.574 185.687C492.719 185.687 492.809 185.845 492.73 185.968C491.391 188.047 489.236 189.551 486.718 190.027C486.604 190.049 486.5 189.96 486.5 189.845V188.503C486.5 188.414 486.563 188.337 486.65 188.318C488.307 187.946 489.757 187.026 490.798 185.757C490.834 185.713 490.888 185.687 490.945 185.687H492.574Z" fill="#B9D3FE"></path><rect x="467.5" y="163.5" width="35" height="35" rx="5.5" stroke="#E6E9EF" shape-rendering="crispEdges"></rect></g><path d="M471.339 212H472.309L473.369 210.02C473.559 209.66 473.749 209.28 473.959 208.84H473.999C474.239 209.28 474.439 209.66 474.629 210.02L475.709 212H476.729L474.589 208.26L476.589 204.67H475.619L474.639 206.54C474.459 206.88 474.319 207.19 474.119 207.61H474.079C473.839 207.19 473.689 206.88 473.499 206.54L472.499 204.67H471.479L473.479 208.21L471.339 212ZM477.071 212H478.041L479.101 210.02C479.291 209.66 479.481 209.28 479.691 208.84H479.731C479.971 209.28 480.171 209.66 480.361 210.02L481.441 212H482.461L480.321 208.26L482.321 204.67H481.351L480.371 206.54C480.191 206.88 480.051 207.19 479.851 207.61H479.811C479.571 207.19 479.421 206.88 479.231 206.54L478.231 204.67H477.211L479.211 208.21L477.071 212ZM482.804 212H483.774L484.834 210.02C485.024 209.66 485.214 209.28 485.424 208.84H485.464C485.704 209.28 485.904 209.66 486.094 210.02L487.174 212H488.194L486.054 208.26L488.054 204.67H487.084L486.104 206.54C485.924 206.88 485.784 207.19 485.584 207.61H485.544C485.304 207.19 485.154 206.88 484.964 206.54L483.964 204.67H482.944L484.944 208.21L482.804 212ZM488.536 212H489.506L490.566 210.02C490.756 209.66 490.946 209.28 491.156 208.84H491.196C491.436 209.28 491.636 209.66 491.826 210.02L492.906 212H493.926L491.786 208.26L493.786 204.67H492.816L491.836 206.54C491.656 206.88 491.516 207.19 491.316 207.61H491.276C491.036 207.19 490.886 206.88 490.696 206.54L489.696 204.67H488.676L490.676 208.21L488.536 212ZM494.269 212H495.239L496.299 210.02C496.489 209.66 496.679 209.28 496.889 208.84H496.929C497.169 209.28 497.369 209.66 497.559 210.02L498.639 212H499.659L497.519 208.26L499.519 204.67H498.549L497.569 206.54C497.389 206.88 497.249 207.19 497.049 207.61H497.009C496.769 207.19 496.619 206.88 496.429 206.54L495.429 204.67H494.409L496.409 208.21L494.269 212Z" fill="#091E40" fill-opacity="0.66"></path><path d="M463.5 185.191L463.5 176.809L471.882 181L463.5 185.191Z" fill="white" stroke="#C0C7D0"></path><circle cx="503" cy="181" r="4.5" fill="white" stroke="#C0C7D0"></circle><g filter="url(#dev-page-empty-tip-en_filter3_d_19159_158458)"><rect x="548" y="163" width="36" height="36" rx="6" fill="white" shape-rendering="crispEdges"></rect><rect x="554" y="169" width="24" height="24" rx="2" fill="#C2BBF1"></rect><path d="M560.422 170.875H556.25C556.043 170.875 555.875 171.043 555.875 171.25V184.188C555.875 184.395 556.043 184.562 556.25 184.562H568.344C568.551 184.562 568.719 184.395 568.719 184.188V171.25C568.719 171.043 568.551 170.875 568.344 170.875H564.266C563.966 171.643 563.218 172.188 562.344 172.188C561.469 172.188 560.722 171.643 560.422 170.875ZM558.132 177.242L561.714 174.496C561.837 174.401 562.016 174.489 562.016 174.645V175.955C564.562 176.169 566.562 178.304 566.562 180.906V181.955C566.163 180.122 564.531 178.75 562.578 178.75H562.016V180.136C562.016 180.292 561.837 180.38 561.714 180.285L558.132 177.539C558.034 177.464 558.034 177.317 558.132 177.242Z" fill="#C2BBF1"></path><path d="M569.656 185.795C569.863 185.795 570.031 185.627 570.031 185.42V172.75C570.031 172.543 570.199 172.375 570.406 172.375H575.75C575.957 172.375 576.125 172.543 576.125 172.75V190.75C576.125 190.957 575.957 191.125 575.75 191.125H557.75C557.543 191.125 557.375 190.957 557.375 190.75V186.17C557.375 185.963 557.543 185.795 557.75 185.795H569.656ZM571.719 174.062V185.42C571.719 186.559 570.795 187.482 569.656 187.482H559.062V189.438H574.438V174.062H571.719Z" fill="#C2BBF1"></path><rect x="548.5" y="163.5" width="35" height="35" rx="5.5" stroke="#E6E9EF" shape-rendering="crispEdges"></rect></g><path d="M552.339 212H553.309L554.369 210.02C554.559 209.66 554.749 209.28 554.959 208.84H554.999C555.239 209.28 555.439 209.66 555.629 210.02L556.709 212H557.729L555.589 208.26L557.589 204.67H556.619L555.639 206.54C555.459 206.88 555.319 207.19 555.119 207.61H555.079C554.839 207.19 554.689 206.88 554.499 206.54L553.499 204.67H552.479L554.479 208.21L552.339 212ZM558.071 212H559.041L560.101 210.02C560.291 209.66 560.481 209.28 560.691 208.84H560.731C560.971 209.28 561.171 209.66 561.361 210.02L562.441 212H563.461L561.321 208.26L563.321 204.67H562.351L561.371 206.54C561.191 206.88 561.051 207.19 560.851 207.61H560.811C560.571 207.19 560.421 206.88 560.231 206.54L559.231 204.67H558.211L560.211 208.21L558.071 212ZM563.804 212H564.774L565.834 210.02C566.024 209.66 566.214 209.28 566.424 208.84H566.464C566.704 209.28 566.904 209.66 567.094 210.02L568.174 212H569.194L567.054 208.26L569.054 204.67H568.084L567.104 206.54C566.924 206.88 566.784 207.19 566.584 207.61H566.544C566.304 207.19 566.154 206.88 565.964 206.54L564.964 204.67H563.944L565.944 208.21L563.804 212ZM569.536 212H570.506L571.566 210.02C571.756 209.66 571.946 209.28 572.156 208.84H572.196C572.436 209.28 572.636 209.66 572.826 210.02L573.906 212H574.926L572.786 208.26L574.786 204.67H573.816L572.836 206.54C572.656 206.88 572.516 207.19 572.316 207.61H572.276C572.036 207.19 571.886 206.88 571.696 206.54L570.696 204.67H569.676L571.676 208.21L569.536 212ZM575.269 212H576.239L577.299 210.02C577.489 209.66 577.679 209.28 577.889 208.84H577.929C578.169 209.28 578.369 209.66 578.559 210.02L579.639 212H580.659L578.519 208.26L580.519 204.67H579.549L578.569 206.54C578.389 206.88 578.249 207.19 578.049 207.61H578.009C577.769 207.19 577.619 206.88 577.429 206.54L576.429 204.67H575.409L577.409 208.21L575.269 212Z" fill="#091E40" fill-opacity="0.66"></path><path d="M544.5 185.191L544.5 176.809L552.882 181L544.5 185.191Z" fill="white" stroke="#C0C7D0"></path><circle cx="584" cy="181" r="4.5" fill="white" stroke="#C0C7D0"></circle><defs><filter id="dev-page-empty-tip-en_filter0_d_19159_158458" x="40" y="44" width="686" height="393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="7"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19159_158458"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19159_158458" result="shape"></feBlend></filter><filter id="dev-page-empty-tip-en_filter1_d_19159_158458" x="2" y="347" width="135" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="10"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19159_158458"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19159_158458" result="shape"></feBlend></filter><filter id="dev-page-empty-tip-en_filter2_d_19159_158458" x="455" y="155" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19159_158458"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19159_158458" result="shape"></feBlend></filter><filter id="dev-page-empty-tip-en_filter3_d_19159_158458" x="536" y="155" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19159_158458"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19159_158458" result="shape"></feBlend></filter><linearGradient id="dev-page-empty-tip-en_paint0_linear_19159_158458" x1="548.5" y1="181" x2="503" y2="181" gradientUnits="userSpaceOnUse"><stop stop-color="#8E98A5"></stop><stop offset="1" stop-color="#C0C7D0"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 766 454" fill="none" id="dev-page-empty-tip"><g filter="url(#dev-page-empty-tip_filter0_d_513_61582)"><rect x="54" y="52" width="658" height="365" rx="10" fill="#EDEFF3"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M54 86H97V417H64C58.4772 417 54 412.523 54 407V86Z" fill="#EDEFF3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M97 86H236V417H97V86Z" fill="white" fill-opacity="0.78"></path><rect x="54" y="160" width="43.2353" height="42" fill="#20336A" fill-opacity="0.1"></rect><rect x="54" y="160" width="1.23529" height="42" fill="#20336A"></rect><ellipse cx="75.6174" cy="172.278" rx="6.17647" ry="6.16876" fill="#21375D"></ellipse><rect x="63.2646" y="187.083" width="24.7059" height="7.40251" fill="#21375D"></rect><ellipse cx="75.6174" cy="112.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63.2646" y="126.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.3527" cy="233.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="247.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><ellipse cx="75.3527" cy="294.169" rx="6.17647" ry="6.16876" fill="#99A2BC"></ellipse><rect x="63" y="308.974" width="24.7059" height="7.40251" fill="#99A2BC"></rect><path d="M54 62C54 56.4772 58.4772 52 64 52H702C707.523 52 712 56.4772 712 62V86H54V62Z" fill="#091E40" fill-opacity="0.66"></path><circle cx="688" cy="69" r="8" fill="#4D5465"></circle><rect x="116" y="165" width="68" height="1" fill="#091E40" fill-opacity="0.19"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M127.25 145C130.702 145 133.5 147.798 133.5 151.25C133.5 152.751 132.971 154.128 132.089 155.205L134.898 158.014C134.947 158.063 134.947 158.142 134.898 158.191L134.191 158.898C134.142 158.947 134.063 158.947 134.014 158.898L131.205 156.089C130.128 156.971 128.751 157.5 127.25 157.5C123.798 157.5 121 154.702 121 151.25C121 147.798 123.798 145 127.25 145ZM127.25 146.25C124.489 146.25 122.25 148.489 122.25 151.25C122.25 154.011 124.489 156.25 127.25 156.25C130.011 156.25 132.25 154.011 132.25 151.25C132.25 148.489 130.011 146.25 127.25 146.25Z" fill="#5D6B81"></path><path d="M197.875 145.75C197.806 145.75 197.75 145.806 197.75 145.875V146.875C197.75 146.944 197.806 147 197.875 147H210.125C210.194 147 210.25 146.944 210.25 146.875V145.875C210.25 145.806 210.194 145.75 210.125 145.75H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.875 149.5C197.806 149.5 197.75 149.556 197.75 149.625V150.625C197.75 150.694 197.806 150.75 197.875 150.75H202.875C202.944 150.75 203 150.694 203 150.625V149.625C203 149.556 202.944 149.5 202.875 149.5H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.75 153.375C197.75 153.306 197.806 153.25 197.875 153.25H200.875C200.944 153.25 201 153.306 201 153.375V154.375C201 154.444 200.944 154.5 200.875 154.5H197.875C197.806 154.5 197.75 154.444 197.75 154.375V153.375Z" fill="#091E40" fill-opacity="0.9"></path><path d="M197.875 157C197.806 157 197.75 157.056 197.75 157.125V158.125C197.75 158.194 197.806 158.25 197.875 158.25H199.875C199.944 158.25 200 158.194 200 158.125V157.125C200 157.056 199.944 157 199.875 157H197.875Z" fill="#091E40" fill-opacity="0.9"></path><path d="M205.725 150C205.675 150 205.63 150.029 205.61 150.075L202.077 158.075C202.041 158.157 202.102 158.25 202.192 158.25H203.083C203.183 158.25 203.273 158.191 203.312 158.1L204.28 155.875H208.337L209.3 158.099C209.34 158.191 209.43 158.25 209.529 158.25H210.433C210.523 158.25 210.584 158.157 210.548 158.075L207.015 150.075C206.995 150.029 206.95 150 206.9 150H205.725ZM207.85 154.75H204.769L206.312 151.2L207.85 154.75Z" fill="#091E40" fill-opacity="0.9"></path><path d="M213.75 156.75L209.5 156.75C209.294 156.75 209.176 156.985 209.3 157.15L211.425 159.983C211.525 160.117 211.725 160.117 211.825 159.983L213.95 157.15C214.074 156.985 213.956 156.75 213.75 156.75Z" fill="#091E40" fill-opacity="0.9"></path><rect x="116" y="176" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="185" r="6" fill="#DADEE6"></circle><rect x="116" y="200" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="209" r="6" fill="#DADEE6"></circle><rect x="131" y="224" width="85" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="140" cy="233" r="6" fill="#DADEE6"></circle><rect x="131" y="248" width="85" height="18" rx="2" fill="#87B0F7"></rect><circle cx="140" cy="257" r="6" fill="white"></circle><rect x="116" y="275" width="100" height="18" rx="2" fill="#EEF1F6"></rect><circle cx="125" cy="284" r="6" fill="#DADEE6"></circle><path d="M119.204 112.908C118.532 114.684 117.38 116.424 116.168 117.516C116.42 117.876 116.852 118.668 116.996 119.028C117.344 118.692 117.68 118.308 118.016 117.888V124.032H119.432V115.8C119.9 115.008 120.296 114.18 120.62 113.352L119.204 112.908ZM127.664 119.28V117.9H124.568V115.284H127.208V113.94H120.668V115.284H123.116V117.9H120.02V119.28H123.116V122.268H120.344V123.636H127.4V122.268H124.568V119.28H127.664ZM134.288 119.484C134.372 119.196 134.432 118.908 134.492 118.584L133.016 118.464C132.968 118.836 132.896 119.16 132.824 119.484H129.428V120.696H132.296C131.6 121.836 130.388 122.484 128.636 122.844C128.9 123.12 129.32 123.72 129.464 124.02C131.636 123.42 133.052 122.448 133.868 120.696H137.072C136.892 121.824 136.664 122.412 136.424 122.604C136.268 122.724 136.1 122.736 135.848 122.736C135.488 122.736 134.624 122.724 133.844 122.652C134.084 122.988 134.264 123.504 134.288 123.876C135.08 123.912 135.848 123.912 136.292 123.888C136.832 123.864 137.216 123.768 137.564 123.444C138.008 123.06 138.308 122.1 138.572 120.06C138.608 119.868 138.644 119.484 138.644 119.484H134.288ZM132.104 115.164H136.46C135.8 115.692 134.96 116.124 134 116.472C133.172 116.148 132.512 115.74 132.02 115.236L132.104 115.164ZM137.888 113.916L137.684 113.976H133.196C133.412 113.7 133.604 113.412 133.784 113.124L132.332 112.824C131.72 113.844 130.604 114.924 128.912 115.692C129.176 115.92 129.572 116.46 129.74 116.796C130.244 116.544 130.688 116.256 131.096 115.968C131.48 116.352 131.888 116.688 132.356 116.964C131.156 117.276 129.848 117.48 128.54 117.588C128.756 117.912 128.996 118.476 129.092 118.836C130.784 118.632 132.476 118.296 134.012 117.768C135.368 118.272 137 118.56 138.836 118.692C139.016 118.32 139.34 117.756 139.628 117.444C138.236 117.384 136.94 117.24 135.8 116.988C137.036 116.352 138.068 115.536 138.788 114.492L137.888 113.916ZM145.076 117.348C144.884 118.164 144.632 118.92 144.308 119.58C143.792 119.112 143.084 118.56 142.508 118.092C142.628 117.864 142.736 117.612 142.844 117.348H145.076ZM140.612 114.744H142.208C141.848 116.364 141.248 117.864 140.372 118.836C140.648 119.124 141.08 119.796 141.236 120.096C141.452 119.868 141.644 119.604 141.836 119.316C142.388 119.808 143.06 120.372 143.516 120.852C142.784 121.8 141.86 122.496 140.756 122.928C141.044 123.216 141.416 123.78 141.608 124.14C144.356 122.868 146.072 120.444 146.648 116.256L145.748 115.992L145.508 116.04H143.288C143.42 115.608 143.528 115.188 143.636 114.744H146.852V113.376H140.612V114.744ZM148.808 114.108H147.404V120.984H148.808V114.108ZM149.864 112.944V122.364C149.864 122.568 149.792 122.628 149.588 122.628C149.384 122.64 148.748 122.64 148.136 122.616C148.328 123 148.532 123.6 148.592 123.984C149.564 123.996 150.236 123.948 150.692 123.732C151.148 123.504 151.304 123.144 151.304 122.364V112.944H149.864ZM161.948 118.788C161.492 119.22 160.808 119.76 160.172 120.192C159.8 119.7 159.476 119.16 159.248 118.56H163.28V117.348H158.696V116.676H162.404V115.536H158.696V114.912H162.872V113.7H158.696V112.836H157.256V113.7H153.224V114.912H157.256V115.536H153.812V116.676H157.256V117.348H152.708V118.56H156.116C155.06 119.388 153.632 120.12 152.288 120.528C152.588 120.816 153.02 121.356 153.212 121.68C153.764 121.488 154.304 121.236 154.856 120.948V121.824C154.856 122.352 154.52 122.64 154.256 122.772C154.472 123.06 154.76 123.696 154.844 124.032C155.204 123.816 155.744 123.648 159.176 122.628C159.08 122.316 158.972 121.74 158.936 121.356L156.344 122.064V120.024C156.908 119.616 157.436 119.16 157.892 118.692C158.792 121.176 160.28 122.916 162.764 123.768C162.968 123.384 163.388 122.796 163.7 122.508C162.62 122.208 161.72 121.704 160.988 121.068C161.672 120.66 162.464 120.168 163.136 119.664L161.948 118.788Z" fill="#091E40" fill-opacity="0.9"></path><rect x="188" y="106" width="28" height="24" rx="2" fill="#87B0F7"></rect><path d="M201.5 113C201.431 113 201.375 113.056 201.375 113.125V117.375H197.125C197.056 117.375 197 117.431 197 117.5V118.5C197 118.569 197.056 118.625 197.125 118.625H201.375V122.875C201.375 122.944 201.431 123 201.5 123H202.5C202.569 123 202.625 122.944 202.625 122.875V118.625H206.875C206.944 118.625 207 118.569 207 118.5V117.5C207 117.431 206.944 117.375 206.875 117.375H202.625V113.125C202.625 113.056 202.569 113 202.5 113H201.5Z" fill="white"></path><rect x="238" y="125" width="109" height="292" fill="white" fill-opacity="0.8"></rect><path d="M349 255H712V407C712 412.523 707.523 417 702 417H349V255Z" fill="white" fill-opacity="0.8"></path><rect x="250" y="136" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="142" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="171" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="177" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="361" y="267" width="85" height="18" rx="2" fill="#EEF1F6"></rect><rect x="361" y="305" width="53" height="15" rx="2" fill="#DADEE6"></rect><rect x="430" y="305" width="270" height="15" rx="2" fill="#DADEE6"></rect><rect x="361" y="332" width="74" height="15" rx="2" fill="#DADEE6"></rect><rect x="452" y="332" width="71" height="15" rx="2" fill="#DADEE6"></rect><rect x="541" y="332" width="71" height="15" rx="2" fill="#DADEE6"></rect><rect x="629" y="332" width="71" height="15" rx="2" fill="#DADEE6"></rect><rect x="361" y="359" width="339" height="15" rx="2" fill="#DADEE6"></rect><rect x="361" y="386" width="339" height="15" rx="2" fill="#DADEE6"></rect><rect x="250" y="206" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="212" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="241" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="247" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="276" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="282" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="311" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="317" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="346" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="352" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="250" y="381" width="85" height="24" rx="2" fill="#EEF1F6"></rect><rect x="256" y="387" width="12" height="12" rx="2" fill="#DADEE6"></rect><rect x="238" y="86" width="474" height="37" fill="white" fill-opacity="0.8"></rect><rect x="250" y="94" width="138" height="20" rx="4" fill="#DADEE6"></rect><rect x="646" y="94" width="50" height="20" rx="4" fill="#EEF1F6"></rect><rect x="586" y="94" width="50" height="20" rx="4" fill="#EEF1F6"></rect><rect x="526" y="94" width="50" height="20" rx="4" fill="#EEF1F6"></rect></g><path d="M602.466 71L610.242 60.5629L602.466 58.3627V71ZM575 46.4387L597.092 53.0116L624.3 30.3226L603.214 54.7621L626.834 61.9282L639 16L575 46.4387Z" fill="#87B0F7"></path><path d="M599.5 61.5001C581.167 86.0001 548.7 125.5 505.5 101.5C462.3 77.5 480.3 34.4 417.5 46C354.7 57.6 319.667 49.5 291.5 35.5" stroke="#9FA6B2" stroke-width="2" stroke-dasharray="4 4"></path><g filter="url(#dev-page-empty-tip_filter1_d_513_61582)"><path fill-rule="evenodd" clip-rule="evenodd" d="M97.7432 361C108.378 361 117 369.66 117 380.342C117 391.024 108.378 399.684 97.7432 399.684H51.8018L39.973 410L39.974 399.642C29.9369 398.979 22 390.592 22 380.342C22 369.66 30.6215 361 41.2568 361H97.7432Z" fill="#C0C7D0"></path><path d="M48.9593 384.21C51.0863 384.21 52.8106 382.479 52.8106 380.342C52.8106 378.206 51.0863 376.474 48.9593 376.474C46.8322 376.474 45.1079 378.206 45.1079 380.342C45.1079 382.479 46.8322 384.21 48.9593 384.21Z" fill="white"></path><path d="M69.4998 384.21C71.6268 384.21 73.3511 382.479 73.3511 380.342C73.3511 378.206 71.6268 376.474 69.4998 376.474C67.3727 376.474 65.6484 378.206 65.6484 380.342C65.6484 382.479 67.3727 384.21 69.4998 384.21Z" fill="white"></path><path d="M90.0403 384.21C92.1674 384.21 93.8917 382.479 93.8917 380.342C93.8917 378.206 92.1674 376.474 90.0403 376.474C87.9133 376.474 86.189 378.206 86.189 380.342C86.189 382.479 87.9133 384.21 90.0403 384.21Z" fill="white"></path></g><path d="M503 181H546" stroke="url(#dev-page-empty-tip_paint0_linear_513_61582)" stroke-opacity="0.47" stroke-width="3"></path><g filter="url(#dev-page-empty-tip_filter2_d_513_61582)"><rect x="467" y="163" width="36" height="36" rx="2" fill="white" shape-rendering="crispEdges"></rect><rect x="473" y="169" width="24" height="24" rx="2" fill="#B9D3FE"></rect><path d="M488.938 173.969C488.938 174.435 488.56 174.812 488.094 174.812C487.628 174.812 487.25 174.435 487.25 173.969C487.25 173.503 487.628 173.125 488.094 173.125C488.56 173.125 488.938 173.503 488.938 173.969Z" fill="#B9D3FE"></path><path d="M488.094 181.938C488.56 181.938 488.938 181.56 488.938 181.094C488.938 180.628 488.56 180.25 488.094 180.25C487.628 180.25 487.25 180.628 487.25 181.094C487.25 181.56 487.628 181.938 488.094 181.938Z" fill="#B9D3FE"></path><path d="M478.156 184.094C478.053 184.094 477.969 184.178 477.969 184.281V185.594C477.969 185.697 478.053 185.781 478.156 185.781H481.719C481.822 185.781 481.906 185.697 481.906 185.594V184.281C481.906 184.178 481.822 184.094 481.719 184.094H478.156Z" fill="#B9D3FE"></path><path d="M485 171.25C485 171.043 485.168 170.875 485.375 170.875H494.75C494.957 170.875 495.125 171.043 495.125 171.25V183.812C495.125 184.02 494.957 184.188 494.75 184.188H485.375C485.168 184.188 485 184.02 485 183.812V188.031C485 188.238 484.832 188.406 484.625 188.406H480.781V189.438H483.594C483.697 189.438 483.781 189.521 483.781 189.625V190.938C483.781 191.041 483.697 191.125 483.594 191.125H476.281C476.178 191.125 476.094 191.041 476.094 190.938V189.625C476.094 189.521 476.178 189.438 476.281 189.438H479.094V188.406H475.25C475.043 188.406 474.875 188.238 474.875 188.031V180.906C474.875 180.699 475.043 180.531 475.25 180.531H484.625C484.832 180.531 485 180.699 485 180.906V171.25ZM486.688 175.375H493.438V172.562H486.688V175.375ZM486.688 179.688V182.5H493.438V179.688H486.688ZM476.562 186.719H483.312V182.219H476.562V186.719Z" fill="#B9D3FE"></path><path d="M483.5 172.155C483.5 172.039 483.396 171.951 483.282 171.973C479.746 172.641 476.927 175.336 476.077 178.804C476.048 178.92 476.137 179.031 476.257 179.031H477.618C477.702 179.031 477.776 178.974 477.8 178.893C478.559 176.295 480.687 174.28 483.35 173.682C483.437 173.662 483.5 173.586 483.5 173.497V172.155Z" fill="#B9D3FE"></path><path d="M492.574 185.687C492.719 185.687 492.809 185.845 492.73 185.968C491.391 188.047 489.236 189.551 486.718 190.027C486.604 190.049 486.5 189.96 486.5 189.845V188.503C486.5 188.414 486.563 188.337 486.65 188.318C488.307 187.946 489.757 187.026 490.798 185.757C490.834 185.713 490.888 185.687 490.945 185.687H492.574Z" fill="#B9D3FE"></path><rect x="467.5" y="163.5" width="35" height="35" rx="1.5" stroke="#E6E9EF" shape-rendering="crispEdges"></rect></g><path d="M471.339 212H472.309L473.369 210.02C473.559 209.66 473.749 209.28 473.959 208.84H473.999C474.239 209.28 474.439 209.66 474.629 210.02L475.709 212H476.729L474.589 208.26L476.589 204.67H475.619L474.639 206.54C474.459 206.88 474.319 207.19 474.119 207.61H474.079C473.839 207.19 473.689 206.88 473.499 206.54L472.499 204.67H471.479L473.479 208.21L471.339 212ZM477.071 212H478.041L479.101 210.02C479.291 209.66 479.481 209.28 479.691 208.84H479.731C479.971 209.28 480.171 209.66 480.361 210.02L481.441 212H482.461L480.321 208.26L482.321 204.67H481.351L480.371 206.54C480.191 206.88 480.051 207.19 479.851 207.61H479.811C479.571 207.19 479.421 206.88 479.231 206.54L478.231 204.67H477.211L479.211 208.21L477.071 212ZM482.804 212H483.774L484.834 210.02C485.024 209.66 485.214 209.28 485.424 208.84H485.464C485.704 209.28 485.904 209.66 486.094 210.02L487.174 212H488.194L486.054 208.26L488.054 204.67H487.084L486.104 206.54C485.924 206.88 485.784 207.19 485.584 207.61H485.544C485.304 207.19 485.154 206.88 484.964 206.54L483.964 204.67H482.944L484.944 208.21L482.804 212ZM488.536 212H489.506L490.566 210.02C490.756 209.66 490.946 209.28 491.156 208.84H491.196C491.436 209.28 491.636 209.66 491.826 210.02L492.906 212H493.926L491.786 208.26L493.786 204.67H492.816L491.836 206.54C491.656 206.88 491.516 207.19 491.316 207.61H491.276C491.036 207.19 490.886 206.88 490.696 206.54L489.696 204.67H488.676L490.676 208.21L488.536 212ZM494.269 212H495.239L496.299 210.02C496.489 209.66 496.679 209.28 496.889 208.84H496.929C497.169 209.28 497.369 209.66 497.559 210.02L498.639 212H499.659L497.519 208.26L499.519 204.67H498.549L497.569 206.54C497.389 206.88 497.249 207.19 497.049 207.61H497.009C496.769 207.19 496.619 206.88 496.429 206.54L495.429 204.67H494.409L496.409 208.21L494.269 212Z" fill="#091E40" fill-opacity="0.66"></path><path d="M463.5 185.191L463.5 176.809L471.882 181L463.5 185.191Z" fill="white" stroke="#C0C7D0"></path><circle cx="503" cy="181" r="4.5" fill="white" stroke="#C0C7D0"></circle><g filter="url(#dev-page-empty-tip_filter3_d_513_61582)"><rect x="548" y="163" width="36" height="36" rx="2" fill="white" shape-rendering="crispEdges"></rect><rect x="554" y="169" width="24" height="24" rx="2" fill="#C2BBF1"></rect><path d="M560.422 170.875H556.25C556.043 170.875 555.875 171.043 555.875 171.25V184.188C555.875 184.395 556.043 184.562 556.25 184.562H568.344C568.551 184.562 568.719 184.395 568.719 184.188V171.25C568.719 171.043 568.551 170.875 568.344 170.875H564.266C563.966 171.643 563.218 172.188 562.344 172.188C561.469 172.188 560.722 171.643 560.422 170.875ZM558.132 177.242L561.714 174.496C561.837 174.401 562.016 174.489 562.016 174.645V175.955C564.562 176.169 566.562 178.304 566.562 180.906V181.955C566.163 180.122 564.531 178.75 562.578 178.75H562.016V180.136C562.016 180.292 561.837 180.38 561.714 180.285L558.132 177.539C558.034 177.464 558.034 177.317 558.132 177.242Z" fill="#C2BBF1"></path><path d="M569.656 185.795C569.863 185.795 570.031 185.627 570.031 185.42V172.75C570.031 172.543 570.199 172.375 570.406 172.375H575.75C575.957 172.375 576.125 172.543 576.125 172.75V190.75C576.125 190.957 575.957 191.125 575.75 191.125H557.75C557.543 191.125 557.375 190.957 557.375 190.75V186.17C557.375 185.963 557.543 185.795 557.75 185.795H569.656ZM571.719 174.062V185.42C571.719 186.559 570.795 187.482 569.656 187.482H559.062V189.438H574.438V174.062H571.719Z" fill="#C2BBF1"></path><rect x="548.5" y="163.5" width="35" height="35" rx="1.5" stroke="#E6E9EF" shape-rendering="crispEdges"></rect></g><path d="M552.339 212H553.309L554.369 210.02C554.559 209.66 554.749 209.28 554.959 208.84H554.999C555.239 209.28 555.439 209.66 555.629 210.02L556.709 212H557.729L555.589 208.26L557.589 204.67H556.619L555.639 206.54C555.459 206.88 555.319 207.19 555.119 207.61H555.079C554.839 207.19 554.689 206.88 554.499 206.54L553.499 204.67H552.479L554.479 208.21L552.339 212ZM558.071 212H559.041L560.101 210.02C560.291 209.66 560.481 209.28 560.691 208.84H560.731C560.971 209.28 561.171 209.66 561.361 210.02L562.441 212H563.461L561.321 208.26L563.321 204.67H562.351L561.371 206.54C561.191 206.88 561.051 207.19 560.851 207.61H560.811C560.571 207.19 560.421 206.88 560.231 206.54L559.231 204.67H558.211L560.211 208.21L558.071 212ZM563.804 212H564.774L565.834 210.02C566.024 209.66 566.214 209.28 566.424 208.84H566.464C566.704 209.28 566.904 209.66 567.094 210.02L568.174 212H569.194L567.054 208.26L569.054 204.67H568.084L567.104 206.54C566.924 206.88 566.784 207.19 566.584 207.61H566.544C566.304 207.19 566.154 206.88 565.964 206.54L564.964 204.67H563.944L565.944 208.21L563.804 212ZM569.536 212H570.506L571.566 210.02C571.756 209.66 571.946 209.28 572.156 208.84H572.196C572.436 209.28 572.636 209.66 572.826 210.02L573.906 212H574.926L572.786 208.26L574.786 204.67H573.816L572.836 206.54C572.656 206.88 572.516 207.19 572.316 207.61H572.276C572.036 207.19 571.886 206.88 571.696 206.54L570.696 204.67H569.676L571.676 208.21L569.536 212ZM575.269 212H576.239L577.299 210.02C577.489 209.66 577.679 209.28 577.889 208.84H577.929C578.169 209.28 578.369 209.66 578.559 210.02L579.639 212H580.659L578.519 208.26L580.519 204.67H579.549L578.569 206.54C578.389 206.88 578.249 207.19 578.049 207.61H578.009C577.769 207.19 577.619 206.88 577.429 206.54L576.429 204.67H575.409L577.409 208.21L575.269 212Z" fill="#091E40" fill-opacity="0.66"></path><path d="M544.5 185.191L544.5 176.809L552.882 181L544.5 185.191Z" fill="white" stroke="#C0C7D0"></path><circle cx="584" cy="181" r="4.5" fill="white" stroke="#C0C7D0"></circle><defs><filter id="dev-page-empty-tip_filter0_d_513_61582" x="40" y="44" width="686" height="393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="7"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_61582"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_61582" result="shape"></feBlend></filter><filter id="dev-page-empty-tip_filter1_d_513_61582" x="2" y="347" width="135" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="6"></feOffset><feGaussianBlur stdDeviation="10"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_61582"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_61582" result="shape"></feBlend></filter><filter id="dev-page-empty-tip_filter2_d_513_61582" x="455" y="155" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_61582"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_61582" result="shape"></feBlend></filter><filter id="dev-page-empty-tip_filter3_d_513_61582" x="536" y="155" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0352941 0 0 0 0 0.117647 0 0 0 0 0.25098 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_513_61582"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_513_61582" result="shape"></feBlend></filter><linearGradient id="dev-page-empty-tip_paint0_linear_513_61582" x1="548.5" y1="181" x2="503" y2="181" gradientUnits="userSpaceOnUse"><stop stop-color="#8E98A5"></stop><stop offset="1" stop-color="#C0C7D0"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-api-file-disabled"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M1.75 3C1.75 2.30964 2.30964 1.75 3 1.75H13C13.6904 1.75 14.25 2.30964 14.25 3V13C14.25 13.6904 13.6904 14.25 13 14.25H3C2.30964 14.25 1.75 13.6904 1.75 13V3Z" fill="#C0C7D0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.01434 2.2312C1.8487 2.44325 1.75 2.71012 1.75 3.00005V13C1.75 13.6904 2.30964 14.25 3 14.25H13C13.2922 14.25 13.5609 14.1498 13.7738 13.9818L7.64634 10.5308C6.6315 9.95918 5.79657 9.11539 5.23572 8.09458L2.01434 2.2312Z" fill="#8995A6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.24579 10.8125C3.16554 10.8125 3.10763 10.7354 3.12975 10.6581L4.54899 5.27519C4.56383 5.22327 4.61117 5.1875 4.66503 5.1875H5.55291C5.60676 5.1875 5.6541 5.22327 5.66895 5.27519L7.08819 10.6581C7.11031 10.7354 7.05239 10.8125 6.97214 10.8125H6.41733C6.36347 10.8125 6.31613 10.7767 6.30128 10.7248L5.89315 9.29755H4.32479L3.91665 10.7248C3.90181 10.7767 3.85447 10.8125 3.80061 10.8125H3.24579ZM5.67099 8.52065L5.10897 6.13547L4.54695 8.52065H5.67099ZM11.1737 5.91381H11.5666V10.0862H11.1737C11.1071 10.0862 11.053 10.1404 11.053 10.2072V10.6914C11.053 10.7583 11.1071 10.8125 11.1737 10.8125H11.6441H12.2639H12.7431C12.8098 10.8125 12.8638 10.7583 12.8638 10.6914V10.2072C12.8638 10.1404 12.8098 10.0862 12.7431 10.0862H12.3414V5.91381H12.7431C12.8098 5.91381 12.8638 5.85961 12.8638 5.79276V5.30855C12.8638 5.2417 12.8098 5.1875 12.7431 5.1875H12.2639H11.6441H11.1737C11.1071 5.1875 11.053 5.2417 11.053 5.30855V5.79276C11.053 5.85961 11.1071 5.91381 11.1737 5.91381ZM8.19902 5.9644V6.97437V8.02318H9.32243C9.68613 8.02318 9.98097 7.72753 9.98097 7.36282V6.62476C9.98097 6.26005 9.68613 5.9644 9.32243 5.9644H8.19902ZM7.42426 5.65364V6.97437V8.02318V8.80008V10.6914C7.42426 10.7583 7.47831 10.8125 7.54498 10.8125H8.0783C8.14497 10.8125 8.19902 10.7583 8.19902 10.6914V8.80008H9.32243C10.114 8.80008 10.7557 8.1566 10.7557 7.36282V6.62476C10.7557 5.83098 10.114 5.1875 9.32243 5.1875H7.88912C7.63238 5.1875 7.42426 5.3962 7.42426 5.65364Z" fill="white"></path><path d="M4.75 1.375C4.75 1.30596 4.80596 1.25 4.875 1.25H6.625C6.69404 1.25 6.75 1.30596 6.75 1.375V1.75H4.75V1.375Z" fill="#C0C7D0"></path><path d="M4.75 14.25H6.75V14.625C6.75 14.694 6.69404 14.75 6.625 14.75H4.875C4.80596 14.75 4.75 14.694 4.75 14.625V14.25Z" fill="#C0C7D0"></path><path d="M1.25 4.875C1.25 4.80596 1.30596 4.75 1.375 4.75H1.75V6.75H1.375C1.30596 6.75 1.25 6.69404 1.25 6.625V4.875Z" fill="#C0C7D0"></path><path d="M14.25 4.75H14.625C14.694 4.75 14.75 4.80596 14.75 4.875V6.625C14.75 6.69404 14.694 6.75 14.625 6.75H14.25V4.75Z" fill="#C0C7D0"></path><path d="M1.25 9.375C1.25 9.30596 1.30596 9.25 1.375 9.25H1.75V11.25H1.375C1.30596 11.25 1.25 11.194 1.25 11.125V9.375Z" fill="#C0C7D0"></path><path d="M14.25 9.25H14.625C14.694 9.25 14.75 9.30596 14.75 9.375V11.125C14.75 11.194 14.694 11.25 14.625 11.25H14.25V9.25Z" fill="#C0C7D0"></path><path d="M9.25 1.375C9.25 1.30596 9.30596 1.25 9.375 1.25H11.125C11.194 1.25 11.25 1.30596 11.25 1.375V1.75H9.25V1.375Z" fill="#C0C7D0"></path><path d="M9.25 14.25H11.25V14.625C11.25 14.694 11.194 14.75 11.125 14.75H9.375C9.30596 14.75 9.25 14.694 9.25 14.625V14.25Z" fill="#C0C7D0"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" id="icon-api-file"><path d="M0.75 2C0.75 1.30964 1.30964 0.75 2 0.75H12C12.6904 0.75 13.25 1.30964 13.25 2V12C13.25 12.6904 12.6904 13.25 12 13.25H2C1.30964 13.25 0.75 12.6904 0.75 12V2Z" fill="#9B91DE"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.01434 1.2312C0.848705 1.44325 0.75 1.71012 0.75 2.00005V12C0.75 12.6904 1.30964 13.25 2 13.25H12C12.2922 13.25 12.5609 13.1498 12.7738 12.9818L6.64634 9.53076C5.6315 8.95918 4.79657 8.11539 4.23572 7.09458L1.01434 1.2312Z" fill="#9387E0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.24579 9.8125C2.16554 9.8125 2.10763 9.73544 2.12975 9.65808L3.54899 4.27519C3.56383 4.22327 3.61117 4.1875 3.66503 4.1875H4.55291C4.60676 4.1875 4.6541 4.22327 4.66895 4.27519L6.08819 9.65808C6.11031 9.73544 6.05239 9.8125 5.97214 9.8125H5.41733C5.36347 9.8125 5.31613 9.77673 5.30128 9.72481L4.89315 8.29755H3.32479L2.91665 9.72481C2.90181 9.77673 2.85447 9.8125 2.80061 9.8125H2.24579ZM4.67099 7.52065L4.10897 5.13547L3.54695 7.52065H4.67099ZM10.1737 4.91381H10.5666V9.08619H10.1737C10.1071 9.08619 10.053 9.14039 10.053 9.20724V9.69145C10.053 9.7583 10.1071 9.8125 10.1737 9.8125H10.6441H11.2639H11.7431C11.8098 9.8125 11.8638 9.7583 11.8638 9.69145V9.20724C11.8638 9.14039 11.8098 9.08619 11.7431 9.08619H11.3414V4.91381H11.7431C11.8098 4.91381 11.8638 4.85961 11.8638 4.79276V4.30855C11.8638 4.2417 11.8098 4.1875 11.7431 4.1875H11.2639H10.6441H10.1737C10.1071 4.1875 10.053 4.2417 10.053 4.30855V4.79276C10.053 4.85961 10.1071 4.91381 10.1737 4.91381ZM7.19902 4.9644V5.97437V7.02318H8.32243C8.68613 7.02318 8.98097 6.72753 8.98097 6.36282V5.62476C8.98097 5.26005 8.68613 4.9644 8.32243 4.9644H7.19902ZM6.42426 4.65364V5.97437V7.02318V7.80008V9.69145C6.42426 9.7583 6.47831 9.8125 6.54498 9.8125H7.0783C7.14497 9.8125 7.19902 9.7583 7.19902 9.69145V7.80008H8.32243C9.11402 7.80008 9.75573 7.1566 9.75573 6.36282V5.62476C9.75573 4.83098 9.11402 4.1875 8.32243 4.1875H6.88912C6.63238 4.1875 6.42426 4.3962 6.42426 4.65364Z" fill="white"></path><path d="M3.75 0.375C3.75 0.305964 3.80596 0.25 3.875 0.25H5.625C5.69404 0.25 5.75 0.305964 5.75 0.375V0.75H3.75V0.375Z" fill="#C2BBF1"></path><path d="M3.75 13.25H5.75V13.625C5.75 13.694 5.69404 13.75 5.625 13.75H3.875C3.80596 13.75 3.75 13.694 3.75 13.625V13.25Z" fill="#C2BBF1"></path><path d="M0.25 3.875C0.25 3.80596 0.305964 3.75 0.375 3.75H0.75V5.75H0.375C0.305964 5.75 0.25 5.69404 0.25 5.625V3.875Z" fill="#C2BBF1"></path><path d="M13.25 3.75H13.625C13.694 3.75 13.75 3.80596 13.75 3.875V5.625C13.75 5.69404 13.694 5.75 13.625 5.75H13.25V3.75Z" fill="#C2BBF1"></path><path d="M0.25 8.375C0.25 8.30596 0.305964 8.25 0.375 8.25H0.75V10.25H0.375C0.305964 10.25 0.25 10.194 0.25 10.125V8.375Z" fill="#C2BBF1"></path><path d="M13.25 8.25H13.625C13.694 8.25 13.75 8.30596 13.75 8.375V10.125C13.75 10.194 13.694 10.25 13.625 10.25H13.25V8.25Z" fill="#C2BBF1"></path><path d="M8.25 0.375C8.25 0.305964 8.30596 0.25 8.375 0.25H10.125C10.194 0.25 10.25 0.305964 10.25 0.375V0.75H8.25V0.375Z" fill="#C2BBF1"></path><path d="M8.25 13.25H10.25V13.625C10.25 13.694 10.194 13.75 10.125 13.75H8.375C8.30596 13.75 8.25 13.694 8.25 13.625V13.25Z" fill="#C2BBF1"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" id="icon-api-tree-root"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.64352 1.79167C2.62077 1.79167 1.79167 2.62077 1.79167 3.64352C1.79167 4.66627 2.62077 5.49537 3.64352 5.49537H5.49537V3.64352C5.49537 2.62077 4.66627 1.79167 3.64352 1.79167ZM6.47011 3.02193C6.18569 1.72262 5.02819 0.75 3.64352 0.75C2.04547 0.75 0.75 2.04547 0.75 3.64352C0.75 5.02819 1.72262 6.18569 3.02193 6.47011C3.22216 6.51394 3.43014 6.53704 3.64352 6.53704H6.31446C6.3589 6.53704 6.4003 6.52401 6.43505 6.50157C6.46167 6.48438 6.48438 6.46167 6.50157 6.43505C6.52401 6.4003 6.53704 6.3589 6.53704 6.31446V3.64352C6.53704 3.43014 6.51394 3.22216 6.47011 3.02193ZM6.43505 7.49843C6.4003 7.47599 6.3589 7.46296 6.31446 7.46296H3.64352C3.43014 7.46296 3.22216 7.48606 3.02193 7.52989C1.72262 7.81431 0.75 8.97181 0.75 10.3565C0.75 11.9545 2.04547 13.25 3.64352 13.25C5.02819 13.25 6.18569 12.2774 6.47011 10.9781C6.51394 10.7778 6.53704 10.5699 6.53704 10.3565V7.68554C6.53704 7.6411 6.52401 7.5997 6.50157 7.56495C6.48438 7.53833 6.46167 7.51562 6.43505 7.49843ZM7.49843 7.56495C7.47599 7.5997 7.46296 7.6411 7.46296 7.68554V10.3565C7.46296 10.5699 7.48606 10.7778 7.52989 10.9781C7.81431 12.2774 8.97181 13.25 10.3565 13.25C11.9545 13.25 13.25 11.9545 13.25 10.3565C13.25 8.97181 12.2774 7.81431 10.9781 7.52989C10.7778 7.48606 10.5699 7.46296 10.3565 7.46296H7.68554C7.6411 7.46296 7.5997 7.47599 7.56495 7.49843C7.53833 7.51562 7.51562 7.53833 7.49843 7.56495ZM7.56495 6.50157C7.5997 6.52401 7.6411 6.53704 7.68554 6.53704H10.3565C10.5699 6.53704 10.7778 6.51394 10.9781 6.47011C12.2774 6.18569 13.25 5.02819 13.25 3.64352C13.25 2.04547 11.9545 0.75 10.3565 0.75C8.97181 0.75 7.81431 1.72262 7.52989 3.02193C7.48606 3.22216 7.46296 3.43014 7.46296 3.64352V6.31446C7.46296 6.3589 7.47599 6.4003 7.49843 6.43505C7.51562 6.46167 7.53833 6.48438 7.56495 6.50157ZM10.3565 1.79167C9.33373 1.79167 8.50463 2.62077 8.50463 3.64352V5.49537H10.3565C11.3792 5.49537 12.2083 4.66627 12.2083 3.64352C12.2083 2.62077 11.3792 1.79167 10.3565 1.79167ZM3.64352 8.50463C2.62077 8.50463 1.79167 9.33373 1.79167 10.3565C1.79167 11.3792 2.62077 12.2083 3.64352 12.2083C4.66627 12.2083 5.49537 11.3792 5.49537 10.3565V8.50463H3.64352ZM8.50463 8.50463V10.3565C8.50463 11.3792 9.33373 12.2083 10.3565 12.2083C11.3792 12.2083 12.2083 11.3792 12.2083 10.3565C12.2083 9.33373 11.3792 8.50463 10.3565 8.50463H8.50463Z" fill="#7466CC"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-app-file-disabled"><g clip-path="url(#icon-app-file-disabled_clip0_4994_92119)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.37495 1.32429C7.76546 1.11537 8.23454 1.11537 8.62504 1.32429L13.925 4.15979C14.356 4.39034 14.625 4.83938 14.625 5.3281V10.8292C14.625 11.3179 14.356 11.7669 13.925 11.9975L8.62504 14.833C8.23454 15.0419 7.76546 15.0419 7.37495 14.833L2.07495 11.9975C1.64403 11.7669 1.375 11.3179 1.375 10.8292V5.3281C1.375 4.83938 1.64403 4.39034 2.07496 4.15979L7.37495 1.32429Z" fill="#8995A6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.375 7.91123V10.8283C1.375 11.3171 1.64403 11.7661 2.07495 11.9966L7.37495 14.8321C7.76546 15.0411 8.23454 15.0411 8.62504 14.8321L13.925 11.9966C14.356 11.7661 14.625 11.3171 14.625 10.8283V7.91123C14.625 7.42251 14.356 6.97347 13.925 6.74292L8.62504 3.90742C8.23454 3.6985 7.76546 3.6985 7.37495 3.90742L2.07495 6.74292C1.64403 6.97347 1.375 7.42251 1.375 7.91123Z" fill="#F8F9FC"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6246 5.29399C14.6249 5.3053 14.625 5.31663 14.625 5.32798V10.8291C14.625 11.3178 14.356 11.7668 13.925 11.9974L8.62504 14.8329C8.23454 15.0418 7.76546 15.0418 7.37495 14.8329L2.07495 11.9974C1.64403 11.7668 1.375 11.3178 1.375 10.8291V5.32798C1.375 5.2828 1.3773 5.23796 1.38181 5.1936L7.29828 8.73803C7.71096 8.98526 8.22522 8.98939 8.64181 8.74882L14.6246 5.29399Z" fill="#C0C7D0"></path></g><defs><clipPath id="icon-app-file-disabled_clip0_4994_92119"><rect width="16" height="16" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" id="icon-app-file"><path d="M118.565 26.0468C124.46 22.8933 131.54 22.8933 137.435 26.0468L217.435 68.8468C223.939 72.3267 228 79.1047 228 86.4816V169.517C228 176.894 223.939 183.672 217.435 187.152L137.435 229.952C131.54 233.105 124.46 233.105 118.565 229.952L38.5654 187.152C32.0608 183.672 28 176.894 28 169.517V86.4816C28 79.1047 32.0608 72.3267 38.5654 68.8468L118.565 26.0468Z" fill="#5285EA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28 125.482V169.517C28 176.894 32.0608 183.672 38.5654 187.152L118.565 229.952C124.46 233.105 131.54 233.105 137.435 229.952L217.435 187.152C223.939 183.672 228 176.894 228 169.517V125.482C228 118.105 223.939 111.327 217.435 107.847L137.435 65.0468C131.54 61.8933 124.46 61.8933 118.565 65.0468L38.5654 107.847C32.0608 111.327 28 118.105 28 125.482Z" fill="#F5FAFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M227.993 85.9684C227.998 86.1391 228 86.3101 228 86.4815V169.517C228 176.894 223.939 183.672 217.435 187.152L137.435 229.952C131.54 233.105 124.46 233.105 118.565 229.952L38.5654 187.152C32.0608 183.672 28 176.894 28 169.517V86.4815C28 85.7995 28.0347 85.1227 28.1028 84.4531L117.408 137.954C123.637 141.686 131.4 141.748 137.688 138.117L227.993 85.9684Z" fill="#87B0F7"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-app-tree-root"><path d="M8.3698 5.68566C7.78402 5.09987 7.78402 4.15013 8.3698 3.56434L10.3143 1.6198C10.9001 1.03401 11.8499 1.03401 12.4357 1.6198L14.3802 3.56434C14.966 4.15013 14.966 5.09987 14.3802 5.68566L12.4357 7.6302C11.8499 8.21599 10.9001 8.21599 10.3143 7.6302L8.3698 5.68566Z" fill="#87B0F7"></path><path d="M1.75 2.5C1.75 2.08579 2.08579 1.75 2.5 1.75H6.75C7.16421 1.75 7.5 2.08579 7.5 2.5V6.75C7.5 7.16421 7.16421 7.5 6.75 7.5H2.5C2.08579 7.5 1.75 7.16421 1.75 6.75V2.5Z" fill="#5285EA"></path><path d="M1.75 9.25C1.75 8.83579 2.08579 8.5 2.5 8.5H6.75C7.16421 8.5 7.5 8.83579 7.5 9.25V13.5C7.5 13.9142 7.16421 14.25 6.75 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V9.25Z" fill="#5285EA"></path><path d="M8.5 9.25C8.5 8.83579 8.83579 8.5 9.25 8.5H13.5C13.9142 8.5 14.25 8.83579 14.25 9.25V13.5C14.25 13.9142 13.9142 14.25 13.5 14.25H9.25C8.83579 14.25 8.5 13.9142 8.5 13.5V9.25Z" fill="#5285EA"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-check-error"><path d="M8 15C11.866 15 15 11.866 15 7.99999C15 4.134 11.866 1 8 1C4.13401 1 1 4.134 1 7.99999C1 11.866 4.13401 15 8 15ZM10.5102 4.49951C10.5591 4.45069 10.6382 4.45069 10.687 4.49951L11.4825 5.295C11.5313 5.34382 11.5313 5.42296 11.4825 5.47178L8.95459 7.99969L11.4825 10.5276C11.5313 10.5764 11.5313 10.6555 11.4825 10.7044L10.687 11.4999C10.6382 11.5487 10.559 11.5487 10.5102 11.4999L7.98232 8.97196L5.4721 11.4822C5.42328 11.531 5.34414 11.531 5.29532 11.4822L4.49983 10.6867C4.45101 10.6379 4.45101 10.5587 4.49983 10.5099L7.01005 7.99969L4.49981 5.48946C4.451 5.44064 4.451 5.3615 4.49981 5.31268L5.29531 4.51719C5.34413 4.46837 5.42327 4.46837 5.47209 4.51719L7.98232 7.02742L10.5102 4.49951Z" fill="#E65251"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-check-success"><path d="M8 15C11.866 15 15 11.866 15 7.99999C15 4.134 11.866 1 8 1C4.13401 1 1 4.134 1 7.99999C1 11.866 4.13401 15 8 15ZM10.9329 5.15272C10.9817 5.10391 11.0609 5.10391 11.1097 5.15272L11.9052 5.94822C11.954 5.99703 11.954 6.07618 11.9052 6.12499L7.99472 10.0354C7.98988 10.0431 7.98412 10.0503 7.97746 10.057L7.18196 10.8525C7.13315 10.9013 7.054 10.9013 7.00519 10.8525L4.08837 7.93565C4.03955 7.88684 4.03955 7.80769 4.08837 7.75888L4.88386 6.96338C4.93268 6.91457 5.01183 6.91457 5.06064 6.96338L7.09144 8.99418L10.9329 5.15272Z" fill="#3FB4AB"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-etl-file-disabled"><g clip-path="url(#icon-etl-file-disabled_clip0_4994_92118)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 2.375H6.625V2.6875C6.625 3.34334 6.09334 3.875 5.4375 3.875C4.78166 3.875 4.25 3.34334 4.25 2.6875V2.375H3C2.30964 2.375 1.75 2.93464 1.75 3.625V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V3.625C14.25 2.93464 13.6904 2.375 13 2.375H11.75V2.6875C11.75 3.34334 11.2183 3.875 10.5625 3.875C9.90666 3.875 9.375 3.34334 9.375 2.6875V2.375Z" fill="#C0C7D0"></path><path d="M1.75 5.125H14.25V13.375C14.25 14.0654 13.6904 14.625 13 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125Z" fill="#8995A6"></path><path d="M4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.7986 8.40458 12.75 9.57819 12.75H11.875C11.944 12.75 12 12.694 12 12.625V11.875C12 11.806 11.944 11.75 11.875 11.75H9.57819C8.95687 11.75 8.45319 11.2463 8.45319 10.625V9.125C8.45319 7.9514 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05596 8 4.125 8Z" fill="white"></path><path d="M4 9.5C4 9.43096 4.05596 9.375 4.125 9.375H6.9375C7.00654 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00654 10.375 6.9375 10.375H4.125C4.05596 10.375 4 10.319 4 10.25V9.5Z" fill="white"></path><path d="M8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875Z" fill="white"></path><path d="M4.125 11.75C4.05596 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05596 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="white"></path><path d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V1.8125Z" fill="#C0C7D0"></path><path d="M9.875 1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V1.8125Z" fill="#C0C7D0"></path></g><defs><clipPath id="icon-etl-file-disabled_clip0_4994_92118"><rect width="16" height="16" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-etl-file-error"><g clip-path="url(#icon-etl-file-error_clip0_3984_24495)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.375V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V2.375V1.8125ZM6.625 2.375H9.375V2.6875C9.375 3.34334 9.90666 3.875 10.5625 3.875C11.2183 3.875 11.75 3.34334 11.75 2.6875V2.375H13C13.6904 2.375 14.25 2.93464 14.25 3.625V5.125H1.75V3.625C1.75 2.93464 2.30964 2.375 3 2.375H4.25V2.6875C4.25 3.34334 4.78166 3.875 5.4375 3.875C6.09334 3.875 6.625 3.34334 6.625 2.6875V2.375ZM10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V2.375V1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.375V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375Z" fill="#87B0F7"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 5.125H14.25V9.1258C13.6791 8.76882 13.0042 8.5625 12.2812 8.5625C10.5618 8.5625 9.11484 9.72952 8.68934 11.3147C8.54132 11.1242 8.45319 10.8849 8.45319 10.625V9.125C8.45319 7.95139 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05597 8 4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.4332 7.90435 12.136 8.56856 12.4953C8.61425 13.3005 8.9161 14.0371 9.39389 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125ZM4 9.5C4 9.43096 4.05597 9.375 4.125 9.375H6.9375C7.00653 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00653 10.375 6.9375 10.375H4.125C4.05597 10.375 4 10.319 4 10.25V9.5ZM8.68417 8.23335C8.7284 8.30351 8.82763 8.31171 8.89147 8.25875C9.08626 8.09715 9.33644 8 9.60931 8H11.875C11.944 8 12 7.94404 12 7.875V7.125C12 7.05596 11.944 7 11.875 7H9.60931C9.12088 7 8.67093 7.16479 8.31203 7.44181C8.26293 7.47971 8.25275 7.54884 8.28583 7.60132L8.68417 8.23335ZM4.125 11.75C4.05597 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05597 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="#5285EA"></path><path d="M12.3125 9.08594C14.0945 9.08594 15.5391 10.5305 15.5391 12.3125C15.5391 14.0945 14.0945 15.5391 12.3125 15.5391C10.5305 15.5391 9.08594 14.0945 9.08594 12.3125C9.08594 10.5305 10.5305 9.08594 12.3125 9.08594ZM12.6582 10.4111C12.6582 10.3475 12.6066 10.2959 12.543 10.2959H12.082C12.0184 10.2959 11.9668 10.3475 11.9668 10.4111V12.4854C11.9668 12.549 12.0184 12.6006 12.082 12.6006H12.543C12.6066 12.6006 12.6582 12.549 12.6582 12.4854V10.4111ZM12.7734 13.8682C12.7734 13.6136 12.5671 13.4072 12.3125 13.4072C12.0579 13.4072 11.8516 13.6136 11.8516 13.8682C11.8516 14.1227 12.0579 14.3291 12.3125 14.3291C12.5671 14.3291 12.7734 14.1227 12.7734 13.8682Z" fill="#F0AC3C"></path></g><defs><clipPath id="icon-etl-file-error_clip0_3984_24495"><rect width="16" height="16" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-etl-file-modified"><g clip-path="url(#icon-etl-file-modified_clip0_3994_19629)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 5.125H1.75V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V5.125ZM6.32819 8H4.125C4.05597 8 4 7.94404 4 7.875V7.125C4 7.05596 4.05596 7 4.125 7H6.32819C7.50179 7 8.45319 7.95139 8.45319 9.125V10.625C8.45319 11.2463 8.95687 11.75 9.57819 11.75H11.875C11.944 11.75 12 11.806 12 11.875V12.625C12 12.694 11.944 12.75 11.875 12.75H9.57819C8.40458 12.75 7.45319 11.7986 7.45319 10.625V9.125C7.45319 8.50368 6.94951 8 6.32819 8ZM4.125 9.375C4.05597 9.375 4 9.43096 4 9.5V10.25C4 10.319 4.05597 10.375 4.125 10.375H6.9375C7.00653 10.375 7.0625 10.319 7.0625 10.25V9.5C7.0625 9.43096 7.00653 9.375 6.9375 9.375H4.125ZM8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875ZM4 11.875C4 11.806 4.05597 11.75 4.125 11.75H6.35931C6.62819 11.75 6.87503 11.6557 7.06856 11.4983C7.13245 11.4464 7.23069 11.455 7.27459 11.5247L7.67274 12.1564C7.70597 12.2091 7.69553 12.2786 7.64596 12.3163C7.28883 12.5884 6.84294 12.75 6.35931 12.75H4.125C4.05597 12.75 4 12.694 4 12.625V11.875Z" fill="#5285EA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.375V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V2.375V1.8125ZM6.625 2.375H9.375V2.6875C9.375 3.34334 9.90666 3.875 10.5625 3.875C11.2183 3.875 11.75 3.34334 11.75 2.6875V2.375H13C13.6904 2.375 14.25 2.93464 14.25 3.625V5.125H1.75V3.625C1.75 2.93464 2.30964 2.375 3 2.375H4.25V2.6875C4.25 3.34334 4.78166 3.875 5.4375 3.875C6.09334 3.875 6.625 3.34334 6.625 2.6875V2.375ZM10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V2.375V1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.375V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375Z" fill="#87B0F7"></path><circle cx="13.0625" cy="3.5625" r="2.9375" fill="white"></circle><circle cx="13.0625" cy="3.5625" r="2.4375" fill="#E65251"></circle></g><defs><clipPath id="icon-etl-file-modified_clip0_3994_19629"><rect width="16" height="16" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-etl-file"><g clip-path="url(#icon-etl-file_clip0_3986_17004)"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 2.375H6.625V2.6875C6.625 3.34334 6.09334 3.875 5.4375 3.875C4.78166 3.875 4.25 3.34334 4.25 2.6875V2.375H3C2.30964 2.375 1.75 2.93464 1.75 3.625V13.375C1.75 14.0654 2.30964 14.625 3 14.625H13C13.6904 14.625 14.25 14.0654 14.25 13.375V3.625C14.25 2.93464 13.6904 2.375 13 2.375H11.75V2.6875C11.75 3.34334 11.2183 3.875 10.5625 3.875C9.90666 3.875 9.375 3.34334 9.375 2.6875V2.375ZM9.875 2.375V2.6875C9.875 3.0672 10.1828 3.375 10.5625 3.375C10.9422 3.375 11.25 3.0672 11.25 2.6875V2.375H9.875ZM4.75 2.6875V2.375H6.125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875Z" fill="#87B0F7"></path><path d="M1.75 5.125H14.25V13.375C14.25 14.0654 13.6904 14.625 13 14.625H3C2.30964 14.625 1.75 14.0654 1.75 13.375V5.125Z" fill="#5285EA"></path><path d="M4.125 8H6.32819C6.94951 8 7.45319 8.50368 7.45319 9.125V10.625C7.45319 11.7986 8.40458 12.75 9.57819 12.75H11.875C11.944 12.75 12 12.694 12 12.625V11.875C12 11.806 11.944 11.75 11.875 11.75H9.57819C8.95687 11.75 8.45319 11.2463 8.45319 10.625V9.125C8.45319 7.9514 7.50179 7 6.32819 7H4.125C4.05596 7 4 7.05596 4 7.125V7.875C4 7.94404 4.05596 8 4.125 8Z" fill="white"></path><path d="M4 9.5C4 9.43096 4.05596 9.375 4.125 9.375H6.9375C7.00654 9.375 7.0625 9.43096 7.0625 9.5V10.25C7.0625 10.319 7.00654 10.375 6.9375 10.375H4.125C4.05596 10.375 4 10.319 4 10.25V9.5Z" fill="white"></path><path d="M8.89147 8.25875C8.82763 8.31171 8.7284 8.30351 8.68417 8.23335L8.28583 7.60132C8.25275 7.54884 8.26293 7.47971 8.31203 7.44181C8.67093 7.16479 9.12088 7 9.60931 7H11.875C11.944 7 12 7.05596 12 7.125V7.875C12 7.94404 11.944 8 11.875 8H9.60931C9.33644 8 9.08626 8.09715 8.89147 8.25875Z" fill="white"></path><path d="M4.125 11.75C4.05596 11.75 4 11.806 4 11.875V12.625C4 12.694 4.05596 12.75 4.125 12.75H6.35931C6.84294 12.75 7.28883 12.5884 7.64596 12.3163C7.69553 12.2786 7.70597 12.2091 7.67274 12.1564L7.27459 11.5247C7.23069 11.455 7.13245 11.4464 7.06856 11.4983C6.87503 11.6557 6.62819 11.75 6.35931 11.75H4.125Z" fill="white"></path><path d="M4.75 1.8125C4.75 1.4328 5.0578 1.125 5.4375 1.125C5.8172 1.125 6.125 1.4328 6.125 1.8125V2.6875C6.125 3.0672 5.8172 3.375 5.4375 3.375C5.0578 3.375 4.75 3.0672 4.75 2.6875V1.8125Z" fill="#87B0F7"></path><path d="M9.875 1.8125C9.875 1.4328 10.1828 1.125 10.5625 1.125C10.9422 1.125 11.25 1.4328 11.25 1.8125V2.6875C11.25 3.0672 10.9422 3.375 10.5625 3.375C10.1828 3.375 9.875 3.0672 9.875 2.6875V1.8125Z" fill="#87B0F7"></path></g><defs><clipPath id="icon-etl-file_clip0_3986_17004"><rect width="16" height="16" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="none" id="icon-exhibit-tree-all-mission"><path d="M0.25 3.625C0.25 2.93464 0.809644 2.375 1.5 2.375H10.375C11.0654 2.375 11.625 2.93464 11.625 3.625V12.5C11.625 13.1904 11.0654 13.75 10.375 13.75H1.5C0.809644 13.75 0.25 13.1904 0.25 12.5V3.625Z" fill="#B9D3FE"></path><path d="M2.375 1.5C2.375 0.809644 2.93464 0.25 3.625 0.25H12.5C13.1904 0.25 13.75 0.809644 13.75 1.5V10.375C13.75 11.0654 13.1904 11.625 12.5 11.625H3.625C2.93464 11.625 2.375 11.0654 2.375 10.375V1.5Z" fill="#5285EA"></path><path d="M4.625 2.25C4.625 2.11193 4.73693 2 4.875 2H11.25C11.3881 2 11.5 2.11193 11.5 2.25V2.875C11.5 3.01307 11.3881 3.125 11.25 3.125H4.875C4.73693 3.125 4.625 3.01307 4.625 2.875V2.25Z" fill="#E6EFFF"></path><path d="M4.625 4.375C4.625 4.23693 4.73693 4.125 4.875 4.125H11.25C11.3881 4.125 11.5 4.23693 11.5 4.375V5C11.5 5.13807 11.3881 5.25 11.25 5.25H4.875C4.73693 5.25 4.625 5.13807 4.625 5V4.375Z" fill="#E6EFFF"></path><path d="M4.625 6.5C4.625 6.36193 4.73693 6.25 4.875 6.25H7.875C8.01307 6.25 8.125 6.36193 8.125 6.5V7.125C8.125 7.26307 8.01307 7.375 7.875 7.375H4.875C4.73693 7.375 4.625 7.26307 4.625 7.125V6.5Z" fill="#E6EFFF"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-folder-close"><g clip-path="url(#icon-folder-close_clip0_15596_28428)"><path d="M1.1875 3.25001C1.1875 2.42158 1.85907 1.75001 2.6875 1.75001L6.60657 1.75C7.07796 1.75 7.52942 1.94018 7.85874 2.27747L8.89126 3.58503C9.22058 3.92232 9.67204 4.1125 10.1434 4.1125H13.3125C14.1409 4.1125 14.8125 4.78407 14.8125 5.6125V12.75C14.8125 13.5784 14.1409 14.25 13.3125 14.25L2.6875 14.25C1.85907 14.25 1.1875 13.5784 1.1875 12.75V3.25001Z" fill="url(#icon-folder-close_paint0_linear_15596_28428)"></path><g filter="url(#icon-folder-close_filter0_f_15596_28428)"><path d="M2.375 6.5625C2.375 6.14829 2.71079 5.8125 3.125 5.8125H12.9375C13.3517 5.8125 13.6875 6.14829 13.6875 6.5625V7.0625H2.375V6.5625Z" fill="#CF8826" fill-opacity="0.35"></path></g><path d="M1.1875 6.8125H14.7812V12.7812C14.7812 13.6097 14.1097 14.2812 13.2812 14.2812H2.6875C1.85907 14.2812 1.1875 13.6097 1.1875 12.7812V6.8125Z" fill="url(#icon-folder-close_paint1_linear_15596_28428)"></path><path d="M2.375 6.5625C2.375 6.14829 2.71079 5.8125 3.125 5.8125H12.875C13.2892 5.8125 13.625 6.14829 13.625 6.5625V6.8125H2.375V6.5625Z" fill="white"></path></g><defs><filter id="icon-folder-close_filter0_f_15596_28428" x="-1.625" y="1.8125" width="19.3125" height="9.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_15596_28428"></feGaussianBlur></filter><linearGradient id="icon-folder-close_paint0_linear_15596_28428" x1="10.9063" y1="2.1875" x2="7.25" y2="12.75" gradientUnits="userSpaceOnUse"><stop stop-color="#F9A317"></stop><stop offset="0.441634" stop-color="#F0AC3C"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><linearGradient id="icon-folder-close_paint1_linear_15596_28428" x1="5.25" y1="6.4375" x2="10.125" y2="13.6563" gradientUnits="userSpaceOnUse"><stop stop-color="#FCC868"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><clipPath id="icon-folder-close_clip0_15596_28428"><rect width="16" height="16" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-folder-open"><path d="M6.6875 8.03125C6.6875 7.87592 6.81342 7.75 6.96875 7.75H9.03125C9.18658 7.75 9.3125 7.87592 9.3125 8.03125C9.3125 8.18658 9.18658 8.3125 9.03125 8.3125H6.96875C6.81342 8.3125 6.6875 8.18658 6.6875 8.03125Z" fill="url(#icon-folder-open_paint0_linear_15596_28714)"></path><path d="M2.57946 8.10117C2.67897 7.64096 3.08603 7.3125 3.55688 7.3125H14.3857C15.0231 7.3125 15.4978 7.90083 15.3631 8.52383L14.3381 13.2642C14.2138 13.8394 13.7049 14.25 13.1164 14.25H2.48931C1.85191 14.25 1.37719 13.6617 1.5119 13.0387L2.57946 8.10117Z" fill="url(#icon-folder-open_paint1_linear_15596_28714)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.75001C1.67157 1.75001 1 2.42158 1 3.25001V12.67L1.96859 7.96908C2.13029 7.22124 2.79177 6.6875 3.55689 6.6875H14.25V5.6125C14.25 4.78407 13.5784 4.1125 12.75 4.1125H9.95593C9.48454 4.1125 9.03308 3.92233 8.70376 3.58503L7.67124 2.27747C7.34192 1.94018 6.89046 1.75 6.41907 1.75L2.5 1.75001Z" fill="url(#icon-folder-open_paint2_linear_15596_28714)"></path><defs><linearGradient id="icon-folder-open_paint0_linear_15596_28714" x1="7.71875" y1="9" x2="9.3125" y2="7.75" gradientUnits="userSpaceOnUse"><stop stop-color="#F4A92C" stop-opacity="0.74"></stop><stop offset="1" stop-color="#F4A92F"></stop></linearGradient><linearGradient id="icon-folder-open_paint1_linear_15596_28714" x1="5.69539" y1="6.96417" x2="9.90794" y2="14.3126" gradientUnits="userSpaceOnUse"><stop stop-color="#FCC868"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><linearGradient id="icon-folder-open_paint2_linear_15596_28714" x1="11.5006" y1="2.08359" x2="9.38599" y2="10.576" gradientUnits="userSpaceOnUse"><stop stop-color="#F9A317"></stop><stop offset="0.441634" stop-color="#F0AC3C"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-schedule-plan"><g id="icon-schedule-plan_icon-æ åº"><rect id="icon-schedule-plan_Rectangle 2571" x="2.28571" y="1.42859" width="12" height="12" rx="6" fill="#2C60DB"></rect><g id="icon-schedule-plan_Group 161"><g id="icon-schedule-plan_Rectangle 2557" filter="url(#icon-schedule-plan_filter0_b_11368_8134)"><path d="M1.71429 5.39595C1.71429 5.0984 1.95734 4.85718 2.25715 4.85718H12.0286C12.3284 4.85718 12.5714 5.0984 12.5714 5.39595V13.747C12.5714 14.0445 12.3284 14.2857 12.0286 14.2857H2.25715C1.95734 14.2857 1.71429 14.0445 1.71429 13.747V5.39595Z" fill="url(#icon-schedule-plan_paint0_linear_11368_8134)" fill-opacity="0.6"></path></g><g id="icon-schedule-plan_Rectangle 2557 (Stroke)" filter="url(#icon-schedule-plan_filter1_b_11368_8134)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25715 5.14289C2.1131 5.14289 2.00001 5.25822 2.00001 5.39595V13.747C2.00001 13.8847 2.1131 14 2.25715 14H12.0286C12.1726 14 12.2857 13.8847 12.2857 13.747V5.39595C12.2857 5.25822 12.1726 5.14289 12.0286 5.14289H2.25715ZM2.25715 4.85718C1.95734 4.85718 1.71429 5.0984 1.71429 5.39595V13.747C1.71429 14.0445 1.95734 14.2857 2.25715 14.2857H12.0286C12.3284 14.2857 12.5714 14.0445 12.5714 13.747V5.39595C12.5714 5.0984 12.3284 4.85718 12.0286 4.85718H2.25715Z" fill="url(#icon-schedule-plan_paint1_linear_11368_8134)" fill-opacity="0.6"></path></g><path id="icon-schedule-plan_Rectangle 2565" d="M3.71429 4.28571C3.71429 4.12792 3.84221 4 4.00001 4H4.85715C5.01495 4 5.14287 4.12792 5.14287 4.28571V5.42857C5.14287 5.58637 5.01495 5.71429 4.85715 5.71429H4.00001C3.84221 5.71429 3.71429 5.58637 3.71429 5.42857V4.28571Z" fill="white"></path><path id="icon-schedule-plan_Rectangle 2566" d="M9.14285 4.28571C9.14285 4.12792 9.27077 4 9.42857 4H10.2857C10.4435 4 10.5714 4.12792 10.5714 4.28571V5.42857C10.5714 5.58637 10.4435 5.71429 10.2857 5.71429H9.42857C9.27077 5.71429 9.14285 5.58637 9.14285 5.42857V4.28571Z" fill="white"></path><g id="icon-schedule-plan_Group 160"><path id="icon-schedule-plan_Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M11.3926 8.57786C11.5539 8.73917 11.5539 9.00072 11.3926 9.16203L9.23965 11.315C8.84913 11.7055 8.21596 11.7055 7.82544 11.315L6.86353 10.3531C6.70221 10.1918 6.70221 9.93022 6.86353 9.7689C7.02485 9.60758 7.28639 9.60758 7.44771 9.7689L8.53254 10.8537L10.8084 8.57786C10.9697 8.41654 11.2313 8.41654 11.3926 8.57786Z" fill="white"></path></g></g><path id="icon-schedule-plan_Union" fill-rule="evenodd" clip-rule="evenodd" d="M3.14286 7.42859C2.98507 7.42859 2.85715 7.55651 2.85715 7.7143V8.00002C2.85715 8.15781 2.98507 8.28573 3.14286 8.28573H6.28572C6.44351 8.28573 6.57143 8.15781 6.57143 8.00002V7.7143C6.57143 7.55651 6.44351 7.42859 6.28572 7.42859H3.14286ZM2.85715 9.7143C2.85715 9.55651 2.98507 9.42859 3.14286 9.42859H5.14286C5.30066 9.42859 5.42858 9.55651 5.42858 9.7143V10C5.42858 10.1578 5.30066 10.2857 5.14286 10.2857H3.14286C2.98507 10.2857 2.85715 10.1578 2.85715 10V9.7143ZM2.85715 11.7143C2.85715 11.5565 2.98507 11.4286 3.14286 11.4286H6.28572C6.44351 11.4286 6.57143 11.5565 6.57143 11.7143V12C6.57143 12.1578 6.44351 12.2857 6.28572 12.2857H3.14286C2.98507 12.2857 2.85715 12.1578 2.85715 12V11.7143Z" fill="white"></path></g><defs><filter id="icon-schedule-plan_filter0_b_11368_8134" x="-2.96791" y="0.17497" width="20.2216" height="18.793" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11368_8134"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11368_8134" result="shape"></feBlend></filter><filter id="icon-schedule-plan_filter1_b_11368_8134" x="-2.96791" y="0.17497" width="20.2216" height="18.793" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11368_8134"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11368_8134" result="shape"></feBlend></filter><linearGradient id="icon-schedule-plan_paint0_linear_11368_8134" x1="1.71429" y1="4.85718" x2="1.71429" y2="14.2857" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient><linearGradient id="icon-schedule-plan_paint1_linear_11368_8134" x1="1.71429" y1="4.85718" x2="1.71429" y2="14.2857" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="icon-warning-tip"><path d="M8 1C11.866 1 15 4.134 15 7.99999C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 7.99999C1 4.134 4.13401 1 8 1ZM8.75 3.875C8.75 3.73693 8.63807 3.625 8.5 3.625H7.5C7.36193 3.625 7.25 3.73693 7.25 3.875V8.37499C7.25 8.51306 7.36193 8.62499 7.5 8.62499H8.5C8.63807 8.62499 8.75 8.51306 8.75 8.37499V3.875ZM9 11.375C9 10.8227 8.55228 10.375 8 10.375C7.44772 10.375 7 10.8227 7 11.375C7 11.9273 7.44772 12.375 8 12.375C8.55228 12.375 9 11.9273 9 11.375Z" fill="#F0AC3C"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-api-avgLatency"><path d="M1.42871 12.8571C1.42871 9.7012 3.98708 7.14282 7.14299 7.14282H12.8573V12.8571C12.8573 16.013 10.2989 18.5714 7.143 18.5714C3.98708 18.5714 1.42871 16.013 1.42871 12.8571Z" fill="#136BED"></path><g filter="url(#prep-monitor-api-avgLatency_filter0_b_7747_197551)"><rect x="3.21436" y="2.14282" width="14.6429" height="14.6429" rx="7.32143" fill="url(#prep-monitor-api-avgLatency_paint0_linear_7747_197551)" fill-opacity="0.6"></rect><rect x="3.71436" y="2.64282" width="13.6429" height="13.6429" rx="6.82143" stroke="url(#prep-monitor-api-avgLatency_paint1_linear_7747_197551)" stroke-opacity="0.6"></rect></g><g filter="url(#prep-monitor-api-avgLatency_filter1_b_7747_197551)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.99993 5.35718C9.60544 5.35718 9.28564 5.67697 9.28564 6.07146V9.28575C9.28564 10.0747 9.92524 10.7143 10.7142 10.7143H13.9285C14.323 10.7143 14.6428 10.3945 14.6428 10C14.6428 9.60555 14.323 9.28575 13.9285 9.28575H10.7142V6.07146C10.7142 5.67697 10.3944 5.35718 9.99993 5.35718Z" fill="white"></path></g><defs><filter id="prep-monitor-api-avgLatency_filter0_b_7747_197551" x="-1.46785" y="-2.53939" width="24.0075" height="24.0072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197551"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197551" result="shape"></feBlend></filter><filter id="prep-monitor-api-avgLatency_filter1_b_7747_197551" x="6.90715" y="2.97868" width="10.1139" height="10.1142" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="1.18925"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197551"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197551" result="shape"></feBlend></filter><linearGradient id="prep-monitor-api-avgLatency_paint0_linear_7747_197551" x1="3.21436" y1="2.14282" x2="3.21436" y2="16.7857" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-avgLatency_paint1_linear_7747_197551" x1="3.21436" y1="2.14282" x2="3.21436" y2="16.7857" gradientUnits="userSpaceOnUse"><stop stop-color="#B7D4FF"></stop><stop offset="1" stop-color="#E0EDFF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-api-client-error"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.34 8.81773C11.4169 8.20269 12.1428 7.04324 12.1428 5.71425C12.1428 3.74181 10.5438 2.14282 8.57139 2.14282C6.59895 2.14282 4.99997 3.74181 4.99997 5.71425C4.99997 7.04324 5.72587 8.20269 6.80281 8.81773C4.11241 9.58594 2.14282 12.0629 2.14282 15H15C15 12.0629 13.0304 9.58594 10.34 8.81773Z" fill="#F0AC3C"></path><g filter="url(#prep-monitor-api-client-error_filter0_b_7747_197542)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5543 11.6749C14.6313 11.0599 15.3572 9.90042 15.3572 8.57143C15.3572 6.59898 13.7582 5 11.7857 5C9.8133 5 8.21432 6.59898 8.21432 8.57143C8.21432 9.90042 8.94022 11.0599 10.0172 11.6749C7.32676 12.4431 5.35718 14.9201 5.35718 17.8571H18.2143C18.2143 14.9201 16.2447 12.4431 13.5543 11.6749Z" fill="url(#prep-monitor-api-client-error_paint0_linear_7747_197542)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-client-error_filter1_b_7747_197542)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6406 11.7854L13.3772 11.3648C14.3474 10.8107 15 9.76706 15 8.57143C15 6.79623 13.5609 5.35714 11.7857 5.35714C10.0105 5.35714 8.57146 6.79623 8.57146 8.57143C8.57146 9.76706 9.2241 10.8107 10.1943 11.3648L10.9308 11.7854L10.1152 12.0183C7.68394 12.7126 5.87639 14.8845 5.72465 17.5H17.8468C17.6951 14.8845 15.8876 12.7126 13.4563 12.0183L12.6406 11.7854ZM18.2046 17.5C18.211 17.6182 18.2143 17.7373 18.2143 17.8571H5.35718C5.35718 17.7373 5.36046 17.6182 5.36693 17.5C5.51027 14.8822 7.21978 12.6816 9.57448 11.819C9.71966 11.7658 9.86729 11.7177 10.0172 11.6749C9.88304 11.5983 9.75435 11.5133 9.63184 11.4205C8.77067 10.7684 8.21432 9.7349 8.21432 8.57143C8.21432 6.59898 9.8133 5 11.7857 5C13.7582 5 15.3572 6.59898 15.3572 8.57143C15.3572 9.7349 14.8008 10.7684 13.9397 11.4205C13.8171 11.5133 13.6885 11.5983 13.5543 11.6749C13.7042 11.7177 13.8518 11.7658 13.997 11.819C16.3517 12.6816 18.0612 14.8822 18.2046 17.5Z" fill="url(#prep-monitor-api-client-error_paint1_linear_7747_197542)" fill-opacity="0.6"></path></g><path d="M10.7202 14.9637L11.0675 12.8796C11.07 12.865 11.077 12.8514 11.0875 12.8409L11.7351 12.1933C11.763 12.1654 11.8082 12.1654 11.8361 12.1933L12.4837 12.8409C12.4942 12.8514 12.5012 12.865 12.5036 12.8796L12.851 14.9637C12.8548 14.9864 12.8473 15.0096 12.831 15.0259L11.8361 16.0208C11.8082 16.0487 11.763 16.0487 11.7351 16.0208L10.7402 15.0259C10.7238 15.0096 10.7164 14.9864 10.7202 14.9637Z" fill="white"></path><defs><filter id="prep-monitor-api-client-error_filter0_b_7747_197542" x="0.67497" y="0.317792" width="22.2216" height="22.2216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197542"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197542" result="shape"></feBlend></filter><filter id="prep-monitor-api-client-error_filter1_b_7747_197542" x="0.67497" y="0.317792" width="22.2216" height="22.2216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197542"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197542" result="shape"></feBlend></filter><linearGradient id="prep-monitor-api-client-error_paint0_linear_7747_197542" x1="5.35718" y1="5" x2="5.35718" y2="17.8571" gradientUnits="userSpaceOnUse"><stop stop-color="#FFC565"></stop><stop offset="1" stop-color="#FFE0AE"></stop></linearGradient><linearGradient id="prep-monitor-api-client-error_paint1_linear_7747_197542" x1="5.35718" y1="5" x2="5.35718" y2="17.8571" gradientUnits="userSpaceOnUse"><stop stop-color="#FFC565"></stop><stop offset="1" stop-color="#FFE0AE"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-api-offline"><g filter="url(#prep-monitor-api-offline_filter0_b_7742_193296)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.28561 17.8549C2.69727 17.7934 1.42847 16.4864 1.42847 14.883C1.42847 13.3955 2.52058 12.163 3.94675 11.9436C4.06411 11.0297 4.73456 10.2889 5.61167 10.0677C6.23785 8.56013 7.72438 7.5 9.45852 7.5C11.4813 7.5 13.1673 8.94247 13.5437 10.8549C13.6883 10.8368 13.8356 10.8275 13.9851 10.8275C15.9262 10.8275 17.4999 12.4011 17.4999 14.3423C17.4999 16.2835 15.9262 17.8571 13.9851 17.8571C13.8451 17.8571 13.707 17.849 13.5713 17.833V17.8571H4.28561V17.8549Z" fill="#E65251"></path></g><g filter="url(#prep-monitor-api-offline_filter1_b_7742_193296)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5312 8.36369C18.5578 8.54814 18.5715 8.73673 18.5715 8.92854C18.5715 11.0223 16.9336 12.7335 14.8691 12.8507C14.5575 14.6793 12.9652 16.0714 11.0478 16.0714C9.43325 16.0714 8.04924 15.0844 7.46624 13.6808C6.64961 13.4748 6.02541 12.7851 5.91614 11.9342C4.58833 11.73 3.57153 10.5825 3.57153 9.19753C3.57153 9.16728 3.57202 9.13713 3.57298 9.10711C3.57202 9.07708 3.57153 9.04694 3.57153 9.01668C3.57153 7.63172 4.58833 6.48424 5.91614 6.28002C6.02541 5.42913 6.64961 4.73942 7.46624 4.5334C8.04924 3.12984 9.43325 2.14282 11.0478 2.14282C12.8369 2.14282 14.343 3.35487 14.7897 5.00265C15.4619 5.02733 16.0909 5.22089 16.6357 5.54215C17.7142 6.04157 18.4749 7.11094 18.5312 8.36369Z" fill="url(#prep-monitor-api-offline_paint0_linear_7742_193296)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-offline_filter2_b_7742_193296)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1752 8.39724L18.1744 8.37974C18.1243 7.26461 17.4472 6.3115 16.4856 5.86623L16.4695 5.85878L16.4543 5.84978C15.9593 5.55788 15.3879 5.382 14.7766 5.35956L14.5138 5.34991L14.445 5.09609C14.0394 3.59998 12.6716 2.49997 11.0478 2.49997C9.58256 2.49997 8.32564 3.39546 7.79606 4.6704L7.72733 4.83586L7.5536 4.87969C6.87765 5.05022 6.36073 5.62188 6.27037 6.3255L6.23614 6.59214L5.97043 6.63301C4.81419 6.81084 3.92868 7.81068 3.92868 9.01668C3.92868 9.04312 3.9291 9.06945 3.92994 9.09565L3.93031 9.10711L3.92994 9.11856C3.9291 9.14477 3.92868 9.1711 3.92868 9.19753C3.92868 10.4035 4.81419 11.4034 5.97043 11.5812L6.23614 11.6221L6.27037 11.8887C6.36073 12.5923 6.87765 13.164 7.5536 13.3345L7.72733 13.3784L7.79606 13.5438C8.32564 14.8188 9.58256 15.7143 11.0478 15.7143C12.7882 15.7143 14.2342 14.4506 14.517 12.7907L14.5648 12.5103L14.8489 12.4941C16.7253 12.3876 18.2144 10.8319 18.2144 8.92854C18.2144 8.75382 18.2019 8.58223 18.1777 8.41459L18.1752 8.39724ZM14.8691 12.8507C16.9336 12.7335 18.5715 11.0223 18.5715 8.92854C18.5715 8.73673 18.5578 8.54814 18.5312 8.36369C18.4749 7.11094 17.7142 6.04157 16.6357 5.54215C16.0909 5.22089 15.4619 5.02733 14.7897 5.00265C14.343 3.35487 12.8369 2.14282 11.0478 2.14282C9.43325 2.14282 8.04924 3.12984 7.46624 4.5334C6.64961 4.73942 6.02541 5.42913 5.91614 6.28002C4.58833 6.48424 3.57153 7.63172 3.57153 9.01668C3.57153 9.04694 3.57202 9.07708 3.57298 9.10711C3.57202 9.13713 3.57153 9.16728 3.57153 9.19753C3.57153 10.5825 4.58833 11.73 5.91614 11.9342C6.02541 12.7851 6.64961 13.4748 7.46624 13.6808C8.04924 15.0844 9.43325 16.0714 11.0478 16.0714C12.9652 16.0714 14.5575 14.6793 14.8691 12.8507Z" fill="url(#prep-monitor-api-offline_paint1_linear_7742_193296)" fill-opacity="0.6"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5843 10.8235L8.06412 8.30338C7.92465 8.16391 7.69852 8.16391 7.55905 8.30338L7.30651 8.55592C7.16704 8.69539 7.16704 8.92152 7.30651 9.061L10.8445 12.599C10.984 12.7385 11.2101 12.7385 11.3496 12.599L14.8326 9.11601C14.9721 8.97653 14.9721 8.7504 14.8326 8.61093L14.5925 8.37081C14.453 8.23134 14.2269 8.23134 14.0874 8.37081L11.6557 10.8025V5.38102C11.6557 5.18378 11.4958 5.02388 11.2986 5.02388H10.9414C10.7442 5.02388 10.5843 5.18378 10.5843 5.38102V10.8235Z" fill="white"></path><defs><filter id="prep-monitor-api-offline_filter0_b_7742_193296" x="-3.25374" y="2.81779" width="25.4359" height="19.7216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7742_193296"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7742_193296" result="shape"></feBlend></filter><filter id="prep-monitor-api-offline_filter1_b_7742_193296" x="-1.11067" y="-2.53939" width="24.3644" height="23.2929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7742_193296"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7742_193296" result="shape"></feBlend></filter><filter id="prep-monitor-api-offline_filter2_b_7742_193296" x="-1.11067" y="-2.53939" width="24.3644" height="23.2929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7742_193296"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7742_193296" result="shape"></feBlend></filter><linearGradient id="prep-monitor-api-offline_paint0_linear_7742_193296" x1="3.57153" y1="2.14282" x2="3.57153" y2="16.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient><linearGradient id="prep-monitor-api-offline_paint1_linear_7742_193296" x1="3.57153" y1="2.14282" x2="3.57153" y2="16.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-api-online"><g filter="url(#prep-monitor-api-online_filter0_b_7742_193287)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.28573 17.8549C2.69739 17.7934 1.42859 16.4864 1.42859 14.883C1.42859 13.3955 2.5207 12.163 3.94687 11.9436C4.06423 11.0297 4.73468 10.2889 5.61179 10.0677C6.23798 8.56013 7.72451 7.5 9.45864 7.5C11.4815 7.5 13.1674 8.94247 13.5439 10.8549C13.6884 10.8368 13.8357 10.8275 13.9852 10.8275C15.9264 10.8275 17.5 12.4011 17.5 14.3423C17.5 16.2835 15.9264 17.8571 13.9852 17.8571C13.8452 17.8571 13.7071 17.849 13.5714 17.833V17.8571H4.28573V17.8549Z" fill="#3FB4AB"></path></g><g filter="url(#prep-monitor-api-online_filter1_b_7742_193287)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.5311 8.36369C18.5577 8.54814 18.5714 8.73673 18.5714 8.92854C18.5714 11.0223 16.9334 12.7335 14.869 12.8507C14.5574 14.6793 12.9651 16.0714 11.0477 16.0714C9.43313 16.0714 8.04912 15.0844 7.46612 13.6808C6.64949 13.4748 6.02528 12.7851 5.91602 11.9342C4.5882 11.73 3.57141 10.5825 3.57141 9.19753C3.57141 9.16728 3.5719 9.13713 3.57286 9.10711C3.5719 9.07708 3.57141 9.04694 3.57141 9.01668C3.57141 7.63172 4.5882 6.48424 5.91602 6.28002C6.02528 5.42913 6.64949 4.73942 7.46612 4.5334C8.04912 3.12984 9.43313 2.14282 11.0477 2.14282C12.8368 2.14282 14.3429 3.35487 14.7895 5.00265C15.4617 5.02733 16.0908 5.22089 16.6356 5.54215C17.7141 6.04157 18.4748 7.11094 18.5311 8.36369Z" fill="url(#prep-monitor-api-online_paint0_linear_7742_193287)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-online_filter2_b_7742_193287)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.1751 8.39724L18.1743 8.37974C18.1242 7.26461 17.447 6.3115 16.4855 5.86623L16.4694 5.85878L16.4541 5.84978C15.9592 5.55788 15.3877 5.382 14.7764 5.35956L14.5136 5.34991L14.4448 5.09609C14.0393 3.59998 12.6715 2.49997 11.0477 2.49997C9.58243 2.49997 8.32551 3.39546 7.79594 4.6704L7.72721 4.83586L7.55348 4.87969C6.87753 5.05022 6.36061 5.62188 6.27025 6.3255L6.23601 6.59214L5.97031 6.63301C4.81407 6.81084 3.92855 7.81068 3.92855 9.01668C3.92855 9.04312 3.92898 9.06945 3.92982 9.09565L3.93019 9.10711L3.92982 9.11856C3.92898 9.14477 3.92855 9.1711 3.92855 9.19753C3.92855 10.4035 4.81407 11.4034 5.97031 11.5812L6.23601 11.6221L6.27025 11.8887C6.36061 12.5923 6.87753 13.164 7.55348 13.3345L7.72721 13.3784L7.79594 13.5438C8.32551 14.8188 9.58243 15.7143 11.0477 15.7143C12.7881 15.7143 14.2341 14.4506 14.5169 12.7907L14.5647 12.5103L14.8488 12.4941C16.7252 12.3876 18.2143 10.8319 18.2143 8.92854C18.2143 8.75382 18.2017 8.58223 18.1776 8.41459L18.1751 8.39724ZM14.869 12.8507C16.9334 12.7335 18.5714 11.0223 18.5714 8.92854C18.5714 8.73673 18.5577 8.54814 18.5311 8.36369C18.4748 7.11094 17.7141 6.04157 16.6356 5.54215C16.0908 5.22089 15.4617 5.02733 14.7895 5.00265C14.3429 3.35487 12.8368 2.14282 11.0477 2.14282C9.43313 2.14282 8.04912 3.12984 7.46612 4.5334C6.64949 4.73942 6.02528 5.42913 5.91602 6.28002C4.5882 6.48424 3.57141 7.63172 3.57141 9.01668C3.57141 9.04694 3.5719 9.07708 3.57286 9.10711C3.5719 9.13713 3.57141 9.16728 3.57141 9.19753C3.57141 10.5825 4.5882 11.73 5.91602 11.9342C6.02528 12.7851 6.64949 13.4748 7.46612 13.6808C8.04912 15.0844 9.43313 16.0714 11.0477 16.0714C12.9651 16.0714 14.5574 14.6793 14.869 12.8507Z" fill="url(#prep-monitor-api-online_paint1_linear_7742_193287)" fill-opacity="0.6"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5844 6.90375L8.06425 9.42391C7.92477 9.56339 7.69864 9.56339 7.55917 9.42391L7.30663 9.17137C7.16716 9.0319 7.16716 8.80577 7.30663 8.6663L10.8446 5.12829C10.9841 4.98881 11.2102 4.98881 11.3497 5.12829L14.8327 8.61129C14.9722 8.75076 14.9722 8.97689 14.8327 9.11637L14.5926 9.35649C14.4531 9.49596 14.227 9.49596 14.0875 9.35649L11.6558 6.9248V12.3463C11.6558 12.5435 11.4959 12.7034 11.2987 12.7034H10.9416C10.7443 12.7034 10.5844 12.5435 10.5844 12.3463V6.90375Z" fill="white"></path><defs><filter id="prep-monitor-api-online_filter0_b_7742_193287" x="-3.25362" y="2.81779" width="25.4358" height="19.7216" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7742_193287"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7742_193287" result="shape"></feBlend></filter><filter id="prep-monitor-api-online_filter1_b_7742_193287" x="-1.1108" y="-2.53939" width="24.3644" height="23.2929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7742_193287"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7742_193287" result="shape"></feBlend></filter><filter id="prep-monitor-api-online_filter2_b_7742_193287" x="-1.1108" y="-2.53939" width="24.3644" height="23.2929" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7742_193287"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7742_193287" result="shape"></feBlend></filter><linearGradient id="prep-monitor-api-online_paint0_linear_7742_193287" x1="3.57141" y1="2.14282" x2="3.57141" y2="16.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#93E9E2"></stop><stop offset="1" stop-color="#B2F0EB"></stop></linearGradient><linearGradient id="prep-monitor-api-online_paint1_linear_7742_193287" x1="3.57141" y1="2.14282" x2="3.57141" y2="16.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#93E9E2"></stop><stop offset="1" stop-color="#B2F0EB"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-api-server-error"><g filter="url(#prep-monitor-api-server-error_filter0_b_7747_197533)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0461 17.8571H5.35707H4.99993V17.8395C3.19517 17.6603 1.78564 16.1376 1.78564 14.2857C1.78564 12.555 3.01673 11.1118 4.65099 10.784C4.78227 8.75109 6.47277 7.14282 8.53889 7.14282C10.1507 7.14282 11.534 8.12163 12.1267 9.51728C12.4244 9.45069 12.734 9.41555 13.0519 9.41555C15.3829 9.41555 17.2727 11.3053 17.2727 13.6363C17.2727 15.913 15.4701 17.7687 13.2142 17.854V17.8571H13.0576C13.0557 17.8571 13.0538 17.8571 13.0519 17.8571C13.05 17.8571 13.0481 17.8571 13.0461 17.8571Z" fill="#E65251"></path></g><g filter="url(#prep-monitor-api-server-error_filter1_b_7747_197533)"><path d="M6.42847 3.57146C6.42847 3.17697 6.74826 2.85718 7.14275 2.85718H17.857C18.2515 2.85718 18.5713 3.17697 18.5713 3.57146V13.2143C18.5713 13.6088 18.2515 13.9286 17.857 13.9286H7.14275C6.74826 13.9286 6.42847 13.6088 6.42847 13.2143V3.57146Z" fill="url(#prep-monitor-api-server-error_paint0_linear_7747_197533)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-server-error_filter2_b_7747_197533)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.857 3.21432H7.14275C6.94551 3.21432 6.78561 3.37422 6.78561 3.57146V13.2143C6.78561 13.4116 6.94551 13.5715 7.14275 13.5715H17.857C18.0543 13.5715 18.2142 13.4116 18.2142 13.2143V3.57146C18.2142 3.37422 18.0543 3.21432 17.857 3.21432ZM7.14275 2.85718C6.74826 2.85718 6.42847 3.17697 6.42847 3.57146V13.2143C6.42847 13.6088 6.74826 13.9286 7.14275 13.9286H17.857C18.2515 13.9286 18.5713 13.6088 18.5713 13.2143V3.57146C18.5713 3.17697 18.2515 2.85718 17.857 2.85718H7.14275Z" fill="url(#prep-monitor-api-server-error_paint1_linear_7747_197533)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-server-error_filter3_b_7747_197533)"><path d="M6.42847 16.7858C6.42847 16.1941 6.90816 15.7144 7.4999 15.7144H17.4999C18.0916 15.7144 18.5713 16.1941 18.5713 16.7858C18.5713 17.3775 18.0916 17.8572 17.4999 17.8572H7.4999C6.90816 17.8572 6.42847 17.3775 6.42847 16.7858Z" fill="url(#prep-monitor-api-server-error_paint2_linear_7747_197533)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-server-error_filter4_b_7747_197533)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4999 16.0715H7.4999C7.10541 16.0715 6.78561 16.3913 6.78561 16.7858C6.78561 17.1803 7.10541 17.5001 7.4999 17.5001H17.4999C17.8944 17.5001 18.2142 17.1803 18.2142 16.7858C18.2142 16.3913 17.8944 16.0715 17.4999 16.0715ZM7.4999 15.7144C6.90816 15.7144 6.42847 16.1941 6.42847 16.7858C6.42847 17.3775 6.90816 17.8572 7.4999 17.8572H17.4999C18.0916 17.8572 18.5713 17.3775 18.5713 16.7858C18.5713 16.1941 18.0916 15.7144 17.4999 15.7144H7.4999Z" fill="url(#prep-monitor-api-server-error_paint3_linear_7747_197533)" fill-opacity="0.6"></path></g><path d="M11.7856 5.71432C11.7856 5.51708 11.9455 5.35718 12.1428 5.35718H12.8571C13.0543 5.35718 13.2142 5.51708 13.2142 5.71432V9.28575C13.2142 9.48299 13.0543 9.64289 12.8571 9.64289H12.1428C11.9455 9.64289 11.7856 9.48299 11.7856 9.28575V5.71432Z" fill="white"></path><path d="M11.7856 10.7143C11.7856 10.5171 11.9455 10.3572 12.1428 10.3572H12.8571C13.0543 10.3572 13.2142 10.5171 13.2142 10.7143V11.4286C13.2142 11.6259 13.0543 11.7857 12.8571 11.7857H12.1428C11.9455 11.7857 11.7856 11.6259 11.7856 11.4286V10.7143Z" fill="white"></path><defs><filter id="prep-monitor-api-server-error_filter0_b_7747_197533" x="-2.89656" y="2.46061" width="24.8515" height="20.0788" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197533"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197533" result="shape"></feBlend></filter><filter id="prep-monitor-api-server-error_filter1_b_7747_197533" x="1.74626" y="-1.82503" width="21.5072" height="20.4359" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197533"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197533" result="shape"></feBlend></filter><filter id="prep-monitor-api-server-error_filter2_b_7747_197533" x="1.74626" y="-1.82503" width="21.5072" height="20.4359" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197533"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197533" result="shape"></feBlend></filter><filter id="prep-monitor-api-server-error_filter3_b_7747_197533" x="1.74626" y="11.0321" width="21.5072" height="11.5072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197533"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197533" result="shape"></feBlend></filter><filter id="prep-monitor-api-server-error_filter4_b_7747_197533" x="1.74626" y="11.0321" width="21.5072" height="11.5072" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7747_197533"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_7747_197533" result="shape"></feBlend></filter><linearGradient id="prep-monitor-api-server-error_paint0_linear_7747_197533" x1="6.42847" y1="2.85718" x2="6.42847" y2="13.9286" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient><linearGradient id="prep-monitor-api-server-error_paint1_linear_7747_197533" x1="6.42847" y1="2.85718" x2="6.42847" y2="13.9286" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient><linearGradient id="prep-monitor-api-server-error_paint2_linear_7747_197533" x1="6.42847" y1="15.7144" x2="6.42847" y2="17.8572" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient><linearGradient id="prep-monitor-api-server-error_paint3_linear_7747_197533" x1="6.42847" y1="15.7144" x2="6.42847" y2="17.8572" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18" fill="none" id="prep-monitor-api-total"><path d="M0.142822 11.4999C0.142822 8.34402 2.70119 5.78564 5.85711 5.78564H11.5714V11.4999C11.5714 14.6558 9.01302 17.2142 5.85711 17.2142C2.7012 17.2142 0.142822 14.6558 0.142822 11.4999Z" fill="#5545BA"></path><g filter="url(#prep-monitor-api-total_filter0_b_19353_40073)"><path d="M9.75317 8.25317H13.1623C15.0451 8.25317 16.5714 9.77948 16.5714 11.6623C16.5714 13.5451 15.0451 15.0714 13.1623 15.0714C11.2795 15.0714 9.75317 13.5451 9.75317 11.6623V8.25317Z" fill="url(#prep-monitor-api-total_paint0_linear_19353_40073)" fill-opacity="0.6"></path><path d="M10.2532 8.75317H13.1623C14.7689 8.75317 16.0714 10.0556 16.0714 11.6623C16.0714 13.2689 14.7689 14.5714 13.1623 14.5714C11.5556 14.5714 10.2532 13.2689 10.2532 11.6623V8.75317Z" stroke="url(#prep-monitor-api-total_paint1_linear_19353_40073)" stroke-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-total_filter1_b_19353_40073)"><path d="M9.10388 8.25317H5.69479C3.812 8.25317 2.2857 9.77948 2.2857 11.6623C2.2857 13.5451 3.812 15.0714 5.69479 15.0714C7.57758 15.0714 9.10388 13.5451 9.10388 11.6623V8.25317Z" fill="url(#prep-monitor-api-total_paint2_linear_19353_40073)" fill-opacity="0.6"></path><path d="M8.60388 8.75317H5.69479C4.08815 8.75317 2.7857 10.0556 2.7857 11.6623C2.7857 13.2689 4.08814 14.5714 5.69479 14.5714C7.30144 14.5714 8.60388 13.2689 8.60388 11.6623V8.75317Z" stroke="url(#prep-monitor-api-total_paint3_linear_19353_40073)" stroke-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-total_filter2_b_19353_40073)"><path d="M9.75317 7.60376H13.1623C15.0451 7.60376 16.5714 6.07746 16.5714 4.19467C16.5714 2.31188 15.0451 0.785578 13.1623 0.785578C11.2795 0.785578 9.75317 2.31188 9.75317 4.19467V7.60376Z" fill="url(#prep-monitor-api-total_paint4_linear_19353_40073)" fill-opacity="0.6"></path><path d="M10.2532 7.10376H13.1623C14.7689 7.10376 16.0714 5.80131 16.0714 4.19467C16.0714 2.58802 14.7689 1.28558 13.1623 1.28558C11.5556 1.28558 10.2532 2.58802 10.2532 4.19467V7.10376Z" stroke="url(#prep-monitor-api-total_paint5_linear_19353_40073)" stroke-opacity="0.6"></path></g><g filter="url(#prep-monitor-api-total_filter3_b_19353_40073)"><path d="M9.10388 7.60376H5.69479C3.812 7.60376 2.2857 6.07746 2.2857 4.19467C2.2857 2.31188 3.812 0.785578 5.69479 0.785578C7.57758 0.785578 9.10388 2.31188 9.10388 4.19467V7.60376Z" fill="url(#prep-monitor-api-total_paint6_linear_19353_40073)" fill-opacity="0.6"></path><path d="M8.60388 7.10376H5.69479C4.08815 7.10376 2.7857 5.80131 2.7857 4.19467C2.7857 2.58802 4.08814 1.28558 5.69479 1.28558C7.30144 1.28558 8.60388 2.58802 8.60388 4.19467V7.10376Z" stroke="url(#prep-monitor-api-total_paint7_linear_19353_40073)" stroke-opacity="0.6"></path></g><defs><filter id="prep-monitor-api-total_filter0_b_19353_40073" x="5.75317" y="4.25317" width="14.8182" height="14.8181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_19353_40073"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_19353_40073" result="shape"></feBlend></filter><filter id="prep-monitor-api-total_filter1_b_19353_40073" x="-1.71436" y="4.25317" width="14.8182" height="14.8181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_19353_40073"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_19353_40073" result="shape"></feBlend></filter><filter id="prep-monitor-api-total_filter2_b_19353_40073" x="5.75317" y="-3.21436" width="14.8182" height="14.8181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_19353_40073"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_19353_40073" result="shape"></feBlend></filter><filter id="prep-monitor-api-total_filter3_b_19353_40073" x="-1.71436" y="-3.21436" width="14.8182" height="14.8181" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_19353_40073"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_19353_40073" result="shape"></feBlend></filter><linearGradient id="prep-monitor-api-total_paint0_linear_19353_40073" x1="9.75317" y1="8.25317" x2="9.75317" y2="15.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint1_linear_19353_40073" x1="9.75317" y1="8.25317" x2="9.75317" y2="15.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint2_linear_19353_40073" x1="9.10388" y1="8.25317" x2="9.10388" y2="15.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint3_linear_19353_40073" x1="9.10388" y1="8.25317" x2="9.10388" y2="15.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint4_linear_19353_40073" x1="9.75317" y1="7.60376" x2="9.75317" y2="0.785578" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint5_linear_19353_40073" x1="9.75317" y1="7.60376" x2="9.75317" y2="0.785578" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint6_linear_19353_40073" x1="9.10388" y1="7.60376" x2="9.10388" y2="0.785578" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-api-total_paint7_linear_19353_40073" x1="9.10388" y1="7.60376" x2="9.10388" y2="0.785578" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" id="prep-monitor-task-error"><path d="M14.0713 16.7034C14.0713 10.6343 9.15134 5.71436 3.08228 5.71436C2.83951 5.71436 2.64272 5.91115 2.64272 6.15392V16.4286C2.64272 17.2176 3.28231 17.8572 4.07129 17.8572H13.6043C13.8622 17.8572 14.0713 17.6481 14.0713 17.3902V16.7034Z" fill="#E65251"></path><g filter="url(#prep-monitor-task-error_filter0_b_8599_215011)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2462 2.59205C11.6059 1.99341 12.2515 1.99341 12.6112 2.59205L19.2077 13.5711C19.7123 14.4109 19.2972 15.7145 18.5252 15.7145H5.33223C4.56022 15.7145 4.14514 14.4109 4.64975 13.571L11.2462 2.59205Z" fill="url(#prep-monitor-task-error_paint0_linear_8599_215011)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-error_filter1_b_8599_215011)"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9285 1.96436C12.2569 1.96436 12.5601 2.16045 12.7641 2.49994L19.3606 13.4789C19.6436 13.9501 19.6652 14.5406 19.5151 15.0118C19.3679 15.4742 19.0257 15.8929 18.525 15.8929H5.33205C4.83141 15.8929 4.48917 15.4742 4.34193 15.0118C4.19191 14.5406 4.21344 13.9501 4.49651 13.4789L11.093 2.49994C11.297 2.16045 11.6002 1.96436 11.9285 1.96436ZM11.9285 2.3215C11.7543 2.3215 11.5548 2.42472 11.3991 2.68388L4.80264 13.6629C4.58111 14.0316 4.55787 14.5128 4.68224 14.9034C4.80938 15.3027 5.06069 15.5358 5.33205 15.5358H18.525C18.7964 15.5358 19.0477 15.3027 19.1748 14.9034C19.2992 14.5128 19.276 14.0316 19.0544 13.6629L12.4579 2.68388C12.3022 2.42472 12.1028 2.3215 11.9285 2.3215Z" fill="url(#prep-monitor-task-error_paint1_linear_8599_215011)" fill-opacity="0.6"></path></g><path d="M14.1822 11.5507C14.3709 11.7338 14.4126 11.9971 14.2752 12.1386L13.7777 12.6511C13.6403 12.7927 13.3759 12.7589 13.1872 12.5757L9.77028 9.2591C9.58156 9.07593 9.53995 8.8127 9.67733 8.67117L10.1748 8.15862C10.3122 8.01709 10.5766 8.05084 10.7653 8.23402L14.1822 11.5507Z" fill="white"></path><path d="M10.8307 12.6109C10.6475 12.7997 10.3843 12.8413 10.2428 12.7039L9.73021 12.2064C9.58867 12.069 9.62243 11.8047 9.8056 11.6159L13.1222 8.19899C13.3054 8.01028 13.5686 7.96866 13.7102 8.10604L14.2227 8.60354C14.3643 8.74092 14.3305 9.00527 14.1473 9.19398L10.8307 12.6109Z" fill="white"></path><defs><filter id="prep-monitor-task-error_filter0_b_8599_215011" x="-0.253497" y="-2.53914" width="24.3644" height="22.9357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_215011"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_215011" result="shape"></feBlend></filter><filter id="prep-monitor-task-error_filter1_b_8599_215011" x="-0.432208" y="-2.71785" width="24.7213" height="23.2931" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_215011"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_215011" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-error_paint0_linear_8599_215011" x1="4.42871" y1="2.14307" x2="4.42871" y2="15.7145" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient><linearGradient id="prep-monitor-task-error_paint1_linear_8599_215011" x1="4.25" y1="1.96436" x2="4.25" y2="15.8929" gradientUnits="userSpaceOnUse"><stop stop-color="#FFBBBB"></stop><stop offset="1" stop-color="#FFDBDB"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" id="prep-monitor-task-in-schedule"><path d="M2.47656 8.92858C2.47656 8.53409 2.79636 8.21429 3.19085 8.21429H16.048C16.4425 8.21429 16.7623 8.53409 16.7623 8.92858V16.7857C16.7623 17.1802 16.4425 17.5 16.048 17.5H3.19085C2.79636 17.5 2.47656 17.1802 2.47656 16.7857V8.92858Z" fill="#248F2E"></path><g filter="url(#prep-monitor-task-in-schedule_filter0_b_8565_207774)"><path d="M3.90479 4.2857C3.90479 3.89121 4.22458 3.57141 4.61907 3.57141H17.4762C17.8707 3.57141 18.1905 3.89121 18.1905 4.2857V15.3571C18.1905 15.7516 17.8707 16.0714 17.4762 16.0714H4.61907C4.22458 16.0714 3.90479 15.7516 3.90479 15.3571V4.2857Z" fill="url(#prep-monitor-task-in-schedule_paint0_linear_8565_207774)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-in-schedule_filter1_b_8565_207774)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4762 3.92855H4.61907C4.42183 3.92855 4.26193 4.08845 4.26193 4.2857V15.3571C4.26193 15.5544 4.42183 15.7143 4.61907 15.7143H17.4762C17.6735 15.7143 17.8334 15.5544 17.8334 15.3571V4.2857C17.8334 4.08845 17.6735 3.92855 17.4762 3.92855ZM4.61907 3.57141C4.22458 3.57141 3.90479 3.89121 3.90479 4.2857V15.3571C3.90479 15.7516 4.22458 16.0714 4.61907 16.0714H17.4762C17.8707 16.0714 18.1905 15.7516 18.1905 15.3571V4.2857C18.1905 3.89121 17.8707 3.57141 17.4762 3.57141H4.61907Z" fill="url(#prep-monitor-task-in-schedule_paint1_linear_8565_207774)" fill-opacity="0.6"></path></g><path d="M6.76221 9.28573C6.76221 9.08849 6.92211 8.92859 7.11935 8.92859H8.19078C8.38802 8.92859 8.54792 9.08849 8.54792 9.28573V10.3572C8.54792 10.5544 8.38802 10.7143 8.19078 10.7143H7.11935C6.92211 10.7143 6.76221 10.5544 6.76221 10.3572V9.28573Z" fill="white"></path><path d="M6.76221 12.1428C6.76221 11.9456 6.92211 11.7857 7.11935 11.7857H8.19078C8.38802 11.7857 8.54792 11.9456 8.54792 12.1428V13.2143C8.54792 13.4115 8.38802 13.5714 8.19078 13.5714H7.11935C6.92211 13.5714 6.76221 13.4115 6.76221 13.2143V12.1428Z" fill="white"></path><path d="M9.97656 9.28573C9.97656 9.08849 10.1365 8.92859 10.3337 8.92859H11.4051C11.6024 8.92859 11.7623 9.08849 11.7623 9.28573V10.3572C11.7623 10.5544 11.6024 10.7143 11.4051 10.7143H10.3337C10.1365 10.7143 9.97656 10.5544 9.97656 10.3572V9.28573Z" fill="white"></path><path d="M13.1904 9.28573C13.1904 9.08849 13.3503 8.92859 13.5476 8.92859H14.619C14.8162 8.92859 14.9761 9.08849 14.9761 9.28573V10.3572C14.9761 10.5544 14.8162 10.7143 14.619 10.7143H13.5476C13.3503 10.7143 13.1904 10.5544 13.1904 10.3572V9.28573Z" fill="white"></path><path d="M9.97656 6.42855C9.97656 6.23131 10.1365 6.07141 10.3337 6.07141H11.4051C11.6024 6.07141 11.7623 6.23131 11.7623 6.42855V7.49998C11.7623 7.69723 11.6024 7.85713 11.4051 7.85713H10.3337C10.1365 7.85713 9.97656 7.69723 9.97656 7.49998V6.42855Z" fill="white"></path><path d="M6.76221 2.85714C6.76221 2.6599 6.92211 2.5 7.11935 2.5H8.19078C8.38802 2.5 8.54792 2.6599 8.54792 2.85714V4.28571C8.54792 4.48296 8.38802 4.64286 8.19078 4.64286H7.11935C6.92211 4.64286 6.76221 4.48296 6.76221 4.28571V2.85714Z" fill="#248F2E"></path><path d="M13.5479 2.85714C13.5479 2.6599 13.7077 2.5 13.905 2.5H14.9764C15.1737 2.5 15.3336 2.6599 15.3336 2.85714V4.28571C15.3336 4.48296 15.1737 4.64286 14.9764 4.64286H13.905C13.7077 4.64286 13.5479 4.48296 13.5479 4.28571V2.85714Z" fill="#248F2E"></path><path d="M13.1904 6.42855C13.1904 6.23131 13.3503 6.07141 13.5476 6.07141H14.619C14.8162 6.07141 14.9761 6.23131 14.9761 6.42855V7.49998C14.9761 7.69723 14.8162 7.85713 14.619 7.85713H13.5476C13.3503 7.85713 13.1904 7.69723 13.1904 7.49998V6.42855Z" fill="white"></path><path d="M9.97656 12.1428C9.97656 11.9456 10.1365 11.7857 10.3337 11.7857H11.4051C11.6024 11.7857 11.7623 11.9456 11.7623 12.1428V13.2143C11.7623 13.4115 11.6024 13.5714 11.4051 13.5714H10.3337C10.1365 13.5714 9.97656 13.4115 9.97656 13.2143V12.1428Z" fill="white"></path><defs><filter id="prep-monitor-task-in-schedule_filter0_b_8565_207774" x="-0.777423" y="-1.1108" width="23.6501" height="21.8644" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8565_207774"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8565_207774" result="shape"></feBlend></filter><filter id="prep-monitor-task-in-schedule_filter1_b_8565_207774" x="-0.777423" y="-1.1108" width="23.6501" height="21.8644" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8565_207774"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8565_207774" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-in-schedule_paint0_linear_8565_207774" x1="11.0476" y1="3.57141" x2="11.0476" y2="16.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#84D68B"></stop><stop offset="1" stop-color="#ABE2B0"></stop></linearGradient><linearGradient id="prep-monitor-task-in-schedule_paint1_linear_8565_207774" x1="11.0476" y1="3.57141" x2="11.0476" y2="16.0714" gradientUnits="userSpaceOnUse"><stop stop-color="#84D68B"></stop><stop offset="1" stop-color="#ABE2B0"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" id="prep-monitor-task-not-run"><path d="M2.22852 12.1429C2.22852 8.59246 5.10669 5.71429 8.65709 5.71429H14.5912C14.8643 5.71429 15.0857 5.93569 15.0857 6.2088V12.1429C15.0857 15.6933 12.2075 18.5714 8.65709 18.5714C5.10668 18.5714 2.22852 15.6933 2.22852 12.1429Z" fill="#091E40" fill-opacity="0.66"></path><g filter="url(#prep-monitor-task-not-run_filter0_b_13827_376428)"><path d="M4.01367 9.46431C4.01367 5.4208 7.29159 2.14288 11.3351 2.14288C15.3786 2.14288 18.6565 5.4208 18.6565 9.46431C18.6565 13.5078 15.3786 16.7857 11.3351 16.7857C7.29159 16.7857 4.01367 13.5078 4.01367 9.46431Z" fill="url(#prep-monitor-task-not-run_paint0_linear_13827_376428)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-not-run_filter1_b_13827_376428)"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.37081 9.46431C4.37081 13.3106 7.48883 16.4286 11.3351 16.4286C15.1814 16.4286 18.2994 13.3106 18.2994 9.46431C18.2994 5.61804 15.1814 2.50003 11.3351 2.50003C7.48883 2.50003 4.37081 5.61804 4.37081 9.46431ZM11.3351 2.14288C7.29159 2.14288 4.01367 5.4208 4.01367 9.46431C4.01367 13.5078 7.29159 16.7857 11.3351 16.7857C15.3786 16.7857 18.6565 13.5078 18.6565 9.46431C18.6565 5.4208 15.3786 2.14288 11.3351 2.14288Z" fill="url(#prep-monitor-task-not-run_paint1_linear_13827_376428)" fill-opacity="0.6"></path></g><path d="M14.6957 9.17689C14.8892 9.31963 14.8892 9.60894 14.6957 9.75169L10.833 12.6013C10.5972 12.7752 10.2638 12.6069 10.2638 12.3139L10.2638 6.61468C10.2638 6.32168 10.5972 6.15334 10.833 6.32728L14.6957 9.17689Z" fill="white"></path><defs><filter id="prep-monitor-task-not-run_filter0_b_13827_376428" x="-0.668536" y="-2.53932" width="24.007" height="24.0073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_13827_376428"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_13827_376428" result="shape"></feBlend></filter><filter id="prep-monitor-task-not-run_filter1_b_13827_376428" x="-0.668536" y="-2.53932" width="24.007" height="24.0073" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_13827_376428"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_13827_376428" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-not-run_paint0_linear_13827_376428" x1="4.01367" y1="2.14288" x2="4.01367" y2="16.7857" gradientUnits="userSpaceOnUse"><stop stop-color="#9AA7BA"></stop><stop offset="1" stop-color="#C5CBD5"></stop></linearGradient><linearGradient id="prep-monitor-task-not-run_paint1_linear_13827_376428" x1="4.01367" y1="2.14288" x2="4.01367" y2="16.7857" gradientUnits="userSpaceOnUse"><stop stop-color="#9AA7BA"></stop><stop offset="1" stop-color="#C5CBD5"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" id="prep-monitor-task-open-schedule"><rect x="3.52344" y="1.78571" width="15" height="15" rx="7.5" fill="#2C60DB"></rect><g filter="url(#prep-monitor-task-open-schedule_filter0_b_8565_207762)"><path d="M2.80957 6.74488C2.80957 6.37293 3.11338 6.07141 3.48814 6.07141H15.7024C16.0772 6.07141 16.381 6.37293 16.381 6.74488V17.1837C16.381 17.5556 16.0772 17.8571 15.7024 17.8571H3.48814C3.11338 17.8571 2.80957 17.5556 2.80957 17.1837V6.74488Z" fill="url(#prep-monitor-task-open-schedule_paint0_linear_8565_207762)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-open-schedule_filter1_b_8565_207762)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.48814 6.42855C3.30808 6.42855 3.16671 6.57271 3.16671 6.74488V17.1837C3.16671 17.3558 3.30808 17.5 3.48814 17.5H15.7024C15.8825 17.5 16.0239 17.3558 16.0239 17.1837V6.74488C16.0239 6.57271 15.8825 6.42855 15.7024 6.42855H3.48814ZM3.48814 6.07141C3.11338 6.07141 2.80957 6.37293 2.80957 6.74488V17.1837C2.80957 17.5556 3.11338 17.8571 3.48814 17.8571H15.7024C16.0772 17.8571 16.381 17.5556 16.381 17.1837V6.74488C16.381 6.37293 16.0772 6.07141 15.7024 6.07141H3.48814Z" fill="url(#prep-monitor-task-open-schedule_paint1_linear_8565_207762)" fill-opacity="0.6"></path></g><path d="M5.30957 5.35714C5.30957 5.1599 5.46947 5 5.66671 5H6.73814C6.93539 5 7.09528 5.1599 7.09528 5.35714V6.78571C7.09528 6.98296 6.93539 7.14286 6.73814 7.14286H5.66671C5.46947 7.14286 5.30957 6.98296 5.30957 6.78571V5.35714Z" fill="white"></path><path d="M12.0952 5.35714C12.0952 5.1599 12.2551 5 12.4524 5H13.5238C13.721 5 13.8809 5.1599 13.8809 5.35714V6.78571C13.8809 6.98296 13.721 7.14286 13.5238 7.14286H12.4524C12.2551 7.14286 12.0952 6.98296 12.0952 6.78571V5.35714Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9073 10.7222C15.1089 10.9239 15.1089 11.2508 14.9073 11.4525L12.0393 14.3204C11.6488 14.7109 11.0157 14.7109 10.6251 14.3204L9.24597 12.9413C9.04433 12.7396 9.04433 12.4127 9.24597 12.211C9.44762 12.0094 9.77455 12.0094 9.97619 12.211L11.3322 13.5671L14.1771 10.7222C14.3787 10.5206 14.7057 10.5206 14.9073 10.7222Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.59494 9.28571C4.39769 9.28571 4.23779 9.4456 4.23779 9.64285V9.99999C4.23779 10.1972 4.39769 10.3571 4.59494 10.3571H8.52351C8.72075 10.3571 8.88065 10.1972 8.88065 9.99999V9.64285C8.88065 9.4456 8.72075 9.28571 8.52351 9.28571H4.59494ZM4.23779 12.1428C4.23779 11.9456 4.39769 11.7857 4.59494 11.7857H7.09494C7.29218 11.7857 7.45208 11.9456 7.45208 12.1428V12.5C7.45208 12.6972 7.29218 12.8571 7.09494 12.8571H4.59494C4.39769 12.8571 4.23779 12.6972 4.23779 12.5V12.1428ZM4.23779 14.6428C4.23779 14.4456 4.39769 14.2857 4.59494 14.2857H8.52351C8.72075 14.2857 8.88065 14.4456 8.88065 14.6428V15C8.88065 15.1972 8.72075 15.3571 8.52351 15.3571H4.59494C4.39769 15.3571 4.23779 15.1972 4.23779 15V14.6428Z" fill="white"></path><defs><filter id="prep-monitor-task-open-schedule_filter0_b_8565_207762" x="-1.87264" y="1.3892" width="22.9357" height="21.1501" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8565_207762"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8565_207762" result="shape"></feBlend></filter><filter id="prep-monitor-task-open-schedule_filter1_b_8565_207762" x="-1.87264" y="1.3892" width="22.9357" height="21.1501" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8565_207762"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8565_207762" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-open-schedule_paint0_linear_8565_207762" x1="2.80957" y1="6.07141" x2="2.80957" y2="17.8571" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient><linearGradient id="prep-monitor-task-open-schedule_paint1_linear_8565_207762" x1="2.80957" y1="6.07141" x2="2.80957" y2="17.8571" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-task-pause"><rect x="1.42871" y="5.71436" width="12.8571" height="12.8571" rx="6.42857" fill="#F0AC3C"></rect><g filter="url(#prep-monitor-task-pause_filter0_b_8599_215023)"><path d="M3.21436 9.4645C3.21436 5.42098 6.49227 2.14307 10.5358 2.14307C14.5793 2.14307 17.8572 5.42098 17.8572 9.4645C17.8572 13.508 14.5793 16.7859 10.5358 16.7859C6.49227 16.7859 3.21436 13.508 3.21436 9.4645Z" fill="url(#prep-monitor-task-pause_paint0_linear_8599_215023)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-pause_filter1_b_8599_215023)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5715 9.4645C3.5715 13.3108 6.68952 16.4288 10.5358 16.4288C14.3821 16.4288 17.5001 13.3108 17.5001 9.4645C17.5001 5.61823 14.3821 2.50021 10.5358 2.50021C6.68952 2.50021 3.5715 5.61823 3.5715 9.4645ZM10.5358 2.14307C6.49227 2.14307 3.21436 5.42098 3.21436 9.4645C3.21436 13.508 6.49227 16.7859 10.5358 16.7859C14.5793 16.7859 17.8572 13.508 17.8572 9.4645C17.8572 5.42098 14.5793 2.14307 10.5358 2.14307Z" fill="url(#prep-monitor-task-pause_paint1_linear_8599_215023)" fill-opacity="0.6"></path></g><path d="M10 6.78585C10 6.58861 10.1599 6.42871 10.3571 6.42871H11.0714C11.2687 6.42871 11.4286 6.58861 11.4286 6.78585V10.3573C11.4286 10.5545 11.2687 10.7144 11.0714 10.7144H10.3571C10.1599 10.7144 10 10.5545 10 10.3573V6.78585Z" fill="white"></path><path d="M10 11.7859C10 11.5886 10.1599 11.4287 10.3571 11.4287H11.0714C11.2687 11.4287 11.4286 11.5886 11.4286 11.7859V12.5001C11.4286 12.6974 11.2687 12.8573 11.0714 12.8573H10.3571C10.1599 12.8573 10 12.6974 10 12.5001V11.7859Z" fill="white"></path><defs><filter id="prep-monitor-task-pause_filter0_b_8599_215023" x="-1.46785" y="-2.53914" width="24.0075" height="24.0075" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_215023"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_215023" result="shape"></feBlend></filter><filter id="prep-monitor-task-pause_filter1_b_8599_215023" x="-1.46785" y="-2.53914" width="24.0075" height="24.0075" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_215023"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_215023" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-pause_paint0_linear_8599_215023" x1="3.21436" y1="2.14307" x2="3.21436" y2="16.7859" gradientUnits="userSpaceOnUse"><stop stop-color="#FFC565"></stop><stop offset="1" stop-color="#FFE0AE"></stop></linearGradient><linearGradient id="prep-monitor-task-pause_paint1_linear_8599_215023" x1="3.21436" y1="2.14307" x2="3.21436" y2="16.7859" gradientUnits="userSpaceOnUse"><stop stop-color="#FFC565"></stop><stop offset="1" stop-color="#FFE0AE"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" id="prep-monitor-task-running"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.9592 10.6258C10.2441 10.2959 10.7555 10.2959 11.0404 10.6258L16.2654 16.6759C16.6651 17.1387 16.3363 17.857 15.7248 17.857H5.27475C4.66325 17.857 4.33447 17.1387 4.73416 16.6759L9.9592 10.6258Z" fill="#2C60DB"></path><g filter="url(#prep-monitor-task-running_filter0_b_8599_215035)"><path d="M2.64307 2.85735C2.64307 2.46286 2.96286 2.14307 3.35735 2.14307H17.6431C18.0376 2.14307 18.3574 2.46286 18.3574 2.85735V13.5716C18.3574 13.9661 18.0376 14.2859 17.6431 14.2859H3.35735C2.96286 14.2859 2.64307 13.9661 2.64307 13.5716V2.85735Z" fill="url(#prep-monitor-task-running_paint0_linear_8599_215035)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-running_filter1_b_8599_215035)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6431 2.50021H3.35735C3.16011 2.50021 3.00021 2.66011 3.00021 2.85735V13.5716C3.00021 13.7689 3.16011 13.9288 3.35735 13.9288H17.6431C17.8403 13.9288 18.0002 13.7689 18.0002 13.5716V2.85735C18.0002 2.66011 17.8403 2.50021 17.6431 2.50021ZM3.35735 2.14307C2.96286 2.14307 2.64307 2.46286 2.64307 2.85735V13.5716C2.64307 13.9661 2.96286 14.2859 3.35735 14.2859H17.6431C18.0376 14.2859 18.3574 13.9661 18.3574 13.5716V2.85735C18.3574 2.46286 18.0376 2.14307 17.6431 2.14307H3.35735Z" fill="url(#prep-monitor-task-running_paint1_linear_8599_215035)" fill-opacity="0.6"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1674 5.38232L13.506 8.2143H15.1124V9.28573H13.0012L11.4768 7.43968L9.7159 11.7025L7.57086 9.4643H5.82666V8.39287H8.02806L9.3528 9.77517L11.1674 5.38232Z" fill="white"></path><defs><filter id="prep-monitor-task-running_filter0_b_8599_215035" x="-2.7935" y="-3.2935" width="26.5875" height="23.0162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.71828"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_215035"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_215035" result="shape"></feBlend></filter><filter id="prep-monitor-task-running_filter1_b_8599_215035" x="-2.7935" y="-3.2935" width="26.5875" height="23.0162" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.71828"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_215035"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_215035" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-running_paint0_linear_8599_215035" x1="2.64307" y1="2.14307" x2="2.64307" y2="14.2859" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient><linearGradient id="prep-monitor-task-running_paint1_linear_8599_215035" x1="2.64307" y1="2.14307" x2="2.64307" y2="14.2859" gradientUnits="userSpaceOnUse"><stop stop-color="#B7D4FF"></stop><stop offset="1" stop-color="#E0EDFF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-task-schedule-existed"><rect x="2.85715" y="1.78571" width="15" height="15" rx="7.5" fill="#2C60DB"></rect><g filter="url(#prep-monitor-task-schedule-existed_filter0_b_1316_56318)"><path d="M2.14285 6.74488C2.14285 6.37293 2.44666 6.07141 2.82142 6.07141H15.0357C15.4105 6.07141 15.7143 6.37293 15.7143 6.74488V17.1837C15.7143 17.5556 15.4105 17.8571 15.0357 17.8571H2.82142C2.44666 17.8571 2.14285 17.5556 2.14285 17.1837V6.74488Z" fill="url(#prep-monitor-task-schedule-existed_paint0_linear_1316_56318)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-schedule-existed_filter1_b_1316_56318)"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.82142 6.42855C2.64136 6.42855 2.5 6.57271 2.5 6.74488V17.1837C2.5 17.3558 2.64136 17.5 2.82142 17.5H15.0357C15.2158 17.5 15.3571 17.3558 15.3571 17.1837V6.74488C15.3571 6.57271 15.2158 6.42855 15.0357 6.42855H2.82142ZM2.82142 6.07141C2.44666 6.07141 2.14285 6.37293 2.14285 6.74488V17.1837C2.14285 17.5556 2.44666 17.8571 2.82142 17.8571H15.0357C15.4105 17.8571 15.7143 17.5556 15.7143 17.1837V6.74488C15.7143 6.37293 15.4105 6.07141 15.0357 6.07141H2.82142Z" fill="url(#prep-monitor-task-schedule-existed_paint1_linear_1316_56318)" fill-opacity="0.6"></path></g><path d="M4.64285 5.35714C4.64285 5.1599 4.80275 5 5 5H6.07142C6.26867 5 6.42857 5.1599 6.42857 5.35714V6.78571C6.42857 6.98296 6.26867 7.14286 6.07142 7.14286H5C4.80275 7.14286 4.64285 6.98296 4.64285 6.78571V5.35714Z" fill="white"></path><path d="M11.4286 5.35714C11.4286 5.1599 11.5885 5 11.7857 5H12.8571C13.0544 5 13.2143 5.1599 13.2143 5.35714V6.78571C13.2143 6.98296 13.0544 7.14286 12.8571 7.14286H11.7857C11.5885 7.14286 11.4286 6.98296 11.4286 6.78571V5.35714Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.2407 10.7222C14.4424 10.9239 14.4424 11.2508 14.2407 11.4525L11.3728 14.3204C10.9822 14.7109 10.3491 14.7109 9.95855 14.3204L8.57939 12.9413C8.37775 12.7396 8.37775 12.4127 8.57939 12.211C8.78104 12.0094 9.10797 12.0094 9.30961 12.211L10.6657 13.5671L13.5105 10.7222C13.7121 10.5206 14.0391 10.5206 14.2407 10.7222Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M3.92857 9.28571C3.73132 9.28571 3.57143 9.4456 3.57143 9.64285V9.99999C3.57143 10.1972 3.73132 10.3571 3.92857 10.3571H7.85714C8.05439 10.3571 8.21428 10.1972 8.21428 9.99999V9.64285C8.21428 9.4456 8.05439 9.28571 7.85714 9.28571H3.92857ZM3.57143 12.1428C3.57143 11.9456 3.73132 11.7857 3.92857 11.7857H6.42857C6.62581 11.7857 6.78571 11.9456 6.78571 12.1428V12.5C6.78571 12.6972 6.62581 12.8571 6.42857 12.8571H3.92857C3.73132 12.8571 3.57143 12.6972 3.57143 12.5V12.1428ZM3.57143 14.6428C3.57143 14.4456 3.73132 14.2857 3.92857 14.2857H7.85714C8.05439 14.2857 8.21428 14.4456 8.21428 14.6428V15C8.21428 15.1972 8.05439 15.3571 7.85714 15.3571H3.92857C3.73132 15.3571 3.57143 15.1972 3.57143 15V14.6428Z" fill="white"></path><defs><filter id="prep-monitor-task-schedule-existed_filter0_b_1316_56318" x="-2.53936" y="1.3892" width="22.9358" height="21.1501" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1316_56318"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1316_56318" result="shape"></feBlend></filter><filter id="prep-monitor-task-schedule-existed_filter1_b_1316_56318" x="-2.53936" y="1.3892" width="22.9358" height="21.1501" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1316_56318"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1316_56318" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-schedule-existed_paint0_linear_1316_56318" x1="2.14285" y1="6.07141" x2="2.14285" y2="17.8571" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient><linearGradient id="prep-monitor-task-schedule-existed_paint1_linear_1316_56318" x1="2.14285" y1="6.07141" x2="2.14285" y2="17.8571" gradientUnits="userSpaceOnUse"><stop stop-color="#BDD6FB"></stop><stop offset="1" stop-color="#DDE9FF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-task-success"><rect x="1.42871" y="5.71436" width="12.8571" height="12.8571" rx="6.42857" fill="#3FB4AB"></rect><g filter="url(#prep-monitor-task-success_filter0_b_8599_214999)"><path d="M3.21436 9.4645C3.21436 5.42098 6.49227 2.14307 10.5358 2.14307C14.5793 2.14307 17.8572 5.42098 17.8572 9.4645C17.8572 13.508 14.5793 16.7859 10.5358 16.7859C6.49227 16.7859 3.21436 13.508 3.21436 9.4645Z" fill="url(#prep-monitor-task-success_paint0_linear_8599_214999)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-success_filter1_b_8599_214999)"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5715 9.4645C3.5715 13.3108 6.68952 16.4288 10.5358 16.4288C14.3821 16.4288 17.5001 13.3108 17.5001 9.4645C17.5001 5.61823 14.3821 2.50021 10.5358 2.50021C6.68952 2.50021 3.5715 5.61823 3.5715 9.4645ZM10.5358 2.14307C6.49227 2.14307 3.21436 5.42098 3.21436 9.4645C3.21436 13.508 6.49227 16.7859 10.5358 16.7859C14.5793 16.7859 17.8572 13.508 17.8572 9.4645C17.8572 5.42098 14.5793 2.14307 10.5358 2.14307Z" fill="url(#prep-monitor-task-success_paint1_linear_8599_214999)" fill-opacity="0.6"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M14.7238 6.93127C15.0013 7.20882 15.0014 7.65883 14.7238 7.93638L10.51 12.1502C10.1195 12.5407 9.48632 12.5407 9.0958 12.1502L6.93127 9.98564C6.65371 9.70809 6.65371 9.25808 6.93127 8.98053C7.20882 8.70297 7.65883 8.70297 7.93638 8.98053L9.80291 10.8471L13.7187 6.93127C13.9962 6.65371 14.4462 6.65371 14.7238 6.93127Z" fill="white"></path><defs><filter id="prep-monitor-task-success_filter0_b_8599_214999" x="-1.46785" y="-2.53914" width="24.0075" height="24.0075" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_214999"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_214999" result="shape"></feBlend></filter><filter id="prep-monitor-task-success_filter1_b_8599_214999" x="-1.46785" y="-2.53914" width="24.0075" height="24.0075" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2.3411"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8599_214999"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8599_214999" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-success_paint0_linear_8599_214999" x1="3.21436" y1="2.14307" x2="3.21436" y2="16.7859" gradientUnits="userSpaceOnUse"><stop stop-color="#93E9E2"></stop><stop offset="1" stop-color="#B2F0EB"></stop></linearGradient><linearGradient id="prep-monitor-task-success_paint1_linear_8599_214999" x1="3.21436" y1="2.14307" x2="3.21436" y2="16.7859" gradientUnits="userSpaceOnUse"><stop stop-color="#93E9E2"></stop><stop offset="1" stop-color="#B2F0EB"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" id="prep-monitor-task-total"><g filter="url(#prep-monitor-task-total_filter0_b_8585_209504)"><path d="M2.85735 17.8571H13.2145C13.609 17.8571 13.9288 17.5373 13.9288 17.1429V7.43285C13.9288 7.24689 13.8563 7.06826 13.7266 6.93493L12.0558 5.21637C11.9213 5.07804 11.7366 5 11.5437 5H2.85735C2.46286 5 2.14307 5.3198 2.14307 5.71429V17.1429C2.14307 17.5373 2.46286 17.8571 2.85735 17.8571Z" fill="#5545BA"></path></g><g filter="url(#prep-monitor-task-total_filter1_b_8585_209504)"><path d="M6.78557 15H17.1427C17.5372 15 17.857 14.6802 17.857 14.2857V4.57567C17.857 4.38971 17.7845 4.21109 17.6549 4.07776L15.984 2.35919C15.8495 2.22087 15.6648 2.14282 15.4719 2.14282H6.78557C6.39109 2.14282 6.07129 2.46262 6.07129 2.85711V14.2857C6.07129 14.6802 6.39109 15 6.78557 15Z" fill="url(#prep-monitor-task-total_paint0_linear_8585_209504)" fill-opacity="0.6"></path></g><g filter="url(#prep-monitor-task-total_filter2_b_8585_209504)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.78557 14.6428H17.1427C17.34 14.6428 17.4999 14.4829 17.4999 14.2857V4.57567C17.4999 4.48269 17.4636 4.39338 17.3988 4.32671L15.728 2.60815C15.6607 2.53899 15.5684 2.49997 15.4719 2.49997H6.78557C6.58833 2.49997 6.42843 2.65986 6.42843 2.85711V14.2857C6.42843 14.4829 6.58833 14.6428 6.78557 14.6428ZM17.1427 15H6.78557C6.39109 15 6.07129 14.6802 6.07129 14.2857V2.85711C6.07129 2.46262 6.39109 2.14282 6.78557 2.14282H15.4719C15.6648 2.14282 15.8495 2.22087 15.984 2.35919L17.6549 4.07776C17.7845 4.21109 17.857 4.38971 17.857 4.57567V14.2857C17.857 14.6802 17.5372 15 17.1427 15Z" fill="url(#prep-monitor-task-total_paint1_linear_8585_209504)" fill-opacity="0.6"></path></g><rect x="7.85693" y="8.57141" width="8.21428" height="0.714286" rx="0.357143" fill="white"></rect><rect x="7.85693" y="10.3572" width="6.42857" height="0.714286" rx="0.357143" fill="white"></rect><rect x="7.85693" y="12.1428" width="4.28571" height="0.714285" rx="0.357142" fill="white"></rect><circle cx="9.28551" cy="6.07139" r="1.42857" fill="white"></circle><defs><filter id="prep-monitor-task-total_filter0_b_8585_209504" x="-1.85693" y="1" width="19.7856" height="20.8572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8585_209504"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8585_209504" result="shape"></feBlend></filter><filter id="prep-monitor-task-total_filter1_b_8585_209504" x="2.07129" y="-1.85718" width="19.7856" height="20.8572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8585_209504"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8585_209504" result="shape"></feBlend></filter><filter id="prep-monitor-task-total_filter2_b_8585_209504" x="2.07129" y="-1.85718" width="19.7856" height="20.8572" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_8585_209504"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_8585_209504" result="shape"></feBlend></filter><linearGradient id="prep-monitor-task-total_paint0_linear_8585_209504" x1="6.07129" y1="2.14282" x2="6.07129" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient><linearGradient id="prep-monitor-task-total_paint1_linear_8585_209504" x1="6.07129" y1="2.14282" x2="6.07129" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#A99BFF"></stop><stop offset="1" stop-color="#C2B9FF"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="prep-pipeline-card-folder"><g clip-path="url(#prep-pipeline-card-folder_clip0_14743_70081)"><path d="M1.78125 4.87501C1.78125 3.63237 2.78861 2.62501 4.03125 2.62501L9.90985 2.625C10.6169 2.625 11.2941 2.91026 11.7881 3.41621L13.3369 5.37755C13.8309 5.88349 14.5081 6.16875 15.2151 6.16875H19.9688C21.2114 6.16875 22.2188 7.17611 22.2188 8.41875V19.125C22.2188 20.3676 21.2114 21.375 19.9688 21.375L4.03125 21.375C2.78861 21.375 1.78125 20.3677 1.78125 19.125V4.87501Z" fill="url(#prep-pipeline-card-folder_paint0_linear_14743_70081)"></path><g filter="url(#prep-pipeline-card-folder_filter0_f_14743_70081)"><path d="M3.5625 9.84375C3.5625 9.22243 4.06618 8.71875 4.6875 8.71875H19.4062C20.0276 8.71875 20.5312 9.22243 20.5312 9.84375V10.5938H3.5625V9.84375Z" fill="#CF8826" fill-opacity="0.35"></path></g><path d="M1.78125 10.2188H22.1719V19.1719C22.1719 20.4145 21.1645 21.4219 19.9219 21.4219H4.03125C2.78861 21.4219 1.78125 20.4145 1.78125 19.1719V10.2188Z" fill="url(#prep-pipeline-card-folder_paint1_linear_14743_70081)"></path><path d="M3.5625 9.84375C3.5625 9.22243 4.06618 8.71875 4.6875 8.71875H19.3125C19.9338 8.71875 20.4375 9.22243 20.4375 9.84375V10.2188H3.5625V9.84375Z" fill="white"></path></g><defs><filter id="prep-pipeline-card-folder_filter0_f_14743_70081" x="-0.4375" y="4.71875" width="24.9688" height="9.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_14743_70081"></feGaussianBlur></filter><linearGradient id="prep-pipeline-card-folder_paint0_linear_14743_70081" x1="16.3594" y1="3.28125" x2="10.875" y2="19.125" gradientUnits="userSpaceOnUse"><stop stop-color="#F9A317"></stop><stop offset="0.441634" stop-color="#F0AC3C"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><linearGradient id="prep-pipeline-card-folder_paint1_linear_14743_70081" x1="7.875" y1="9.65625" x2="15.1875" y2="20.4844" gradientUnits="userSpaceOnUse"><stop stop-color="#FCC868"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><clipPath id="prep-pipeline-card-folder_clip0_14743_70081"><rect width="24" height="24" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-db-warn"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 5.7203C9.82215 5.7203 11.4003 5.36439 12.4685 4.85405C13.6441 4.29239 13.75 3.80063 13.75 3.73515C13.75 3.66967 13.6441 3.17792 12.4685 2.61626C11.4003 2.10591 9.82215 1.75 8 1.75C6.17785 1.75 4.59971 2.10591 3.53152 2.61626C2.35593 3.17792 2.25 3.66967 2.25 3.73515C2.25 3.80063 2.35593 4.29239 3.53152 4.85405C4.59971 5.36439 6.17785 5.7203 8 5.7203ZM13.75 7.60202V5.81193C12.434 6.64232 10.3481 7.17878 8 7.17878C5.65186 7.17878 3.56598 6.64232 2.25 5.81193V7.88043C2.25 8.01201 2.30962 8.19982 2.5469 8.43835C2.78712 8.67986 3.17124 8.93084 3.70384 9.1573C4.61858 9.54626 5.8714 9.82053 7.29685 9.88926C7.94479 8.19956 9.58231 7 11.5 7C12.3196 7 13.0881 7.21914 13.75 7.60202ZM7.00302 11.3336C7.00102 11.3889 7 11.4443 7 11.5C7 12.5356 7.3498 13.4894 7.93768 14.2499C6.24793 14.2428 4.75337 13.9475 3.70384 13.5012C3.17124 13.2747 2.78712 13.0238 2.5469 12.7823C2.30962 12.5437 2.25 12.3559 2.25 12.2243V10.0446C2.5203 10.2138 2.81782 10.3653 3.13365 10.4996C4.18373 10.9461 5.5278 11.2413 7.00302 11.3336Z" fill="#F0AC3C"></path><path d="M11.5 7.5625C13.6746 7.5625 15.4375 9.32538 15.4375 11.5C15.4375 13.6746 13.6746 15.4375 11.5 15.4375C9.32538 15.4375 7.5625 13.6746 7.5625 11.5C7.5625 9.32538 9.32538 7.5625 11.5 7.5625ZM11.9219 9.17969C11.9219 9.10202 11.8589 9.03906 11.7812 9.03906H11.2188C11.1411 9.03906 11.0781 9.10202 11.0781 9.17969V11.7109C11.0781 11.7886 11.1411 11.8516 11.2188 11.8516H11.7812C11.8589 11.8516 11.9219 11.7886 11.9219 11.7109V9.17969ZM12.0625 13.3984C12.0625 13.0878 11.8107 12.8359 11.5 12.8359C11.1893 12.8359 10.9375 13.0878 10.9375 13.3984C10.9375 13.7091 11.1893 13.9609 11.5 13.9609C11.8107 13.9609 12.0625 13.7091 12.0625 13.3984Z" fill="#F0AC3C"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-mapping-disabled"><g id="prep-pipeline-mapping-disabled_ç¦ç¨ç¨æ·"><g id="prep-pipeline-mapping-disabled_e648"><path d="M4.06251 8.56248C4.06251 8.63151 4.11847 8.68748 4.18751 8.68748L11.9375 8.68748C12.0065 8.68748 12.0625 8.63151 12.0625 8.56248V7.43748C12.0625 7.36844 12.0065 7.31248 11.9375 7.31248L4.18751 7.31248C4.11847 7.31248 4.06251 7.36844 4.06251 7.43748V8.56248Z" fill="#091E40" fill-opacity="0.66"></path><path d="M8.0625 1C11.9285 1 15.0625 4.134 15.0625 7.99999C15.0625 11.866 11.9285 15 8.0625 15C4.19651 15 1.0625 11.866 1.0625 7.99999C1.0625 4.134 4.19651 1 8.0625 1ZM8.0625 2.125C4.81783 2.125 2.1875 4.75533 2.1875 8C2.1875 11.2447 4.81783 13.875 8.0625 13.875C11.3072 13.875 13.9375 11.2447 13.9375 8C13.9375 4.75533 11.3072 2.125 8.0625 2.125Z" fill="#091E40" fill-opacity="0.66"></path></g></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-mapping-invalid"><g id="prep-pipeline-mapping-invalid_ç¡®å®&amp;å³é­"><path id="prep-pipeline-mapping-invalid_e6d0" fill-rule="evenodd" clip-rule="evenodd" d="M13.3119 12.5875C13.3608 12.5387 13.3608 12.4595 13.3119 12.4107L8.91014 8.00888L13.3208 3.59819C13.3696 3.54938 13.3696 3.47023 13.3208 3.42142L12.6137 2.71431C12.5649 2.66549 12.4858 2.66549 12.4369 2.71431L8.02625 7.125L3.58923 2.68797C3.54041 2.63916 3.46126 2.63916 3.41245 2.68797L2.70534 3.39508C2.65653 3.4439 2.65653 3.52304 2.70534 3.57186L7.14237 8.00888L2.71423 12.437C2.66541 12.4858 2.66541 12.565 2.71423 12.6138L3.42133 13.3209C3.47015 13.3697 3.5493 13.3697 3.59811 13.3209L8.02625 8.89277L12.4281 13.2946C12.4769 13.3434 12.556 13.3434 12.6048 13.2946L13.3119 12.5875Z" fill="#091E40" fill-opacity="0.66"></path></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-schema-warn"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.9375 2C4.9375 1.86193 5.04943 1.75 5.1875 1.75H10.8125C10.9506 1.75 11.0625 1.86193 11.0625 2V4.4375H12.75C12.8881 4.4375 13 4.54943 13 4.6875V7.25606C12.6435 7.13005 12.2663 7.04769 11.875 7.0154V5.5625H11.0625V7.021C10.2329 7.10104 9.46914 7.40634 8.83316 7.875H5.1875C5.04943 7.875 4.9375 7.76307 4.9375 7.625V5.5625H4.125V9.25H7.0625C7.20057 9.25 7.3125 9.36193 7.3125 9.5V9.84904C7.11081 10.3602 7 10.9172 7 11.5C7 12.0828 7.11081 12.6398 7.3125 13.151V14C7.3125 14.1381 7.20057 14.25 7.0625 14.25H1.5C1.36193 14.25 1.25 14.1381 1.25 14V9.5C1.25 9.36193 1.36193 9.25 1.5 9.25H3V4.6875C3 4.54943 3.11193 4.4375 3.25 4.4375H4.9375V2Z" fill="#F0AC3C"></path><path d="M11.5 7.5625C13.6746 7.5625 15.4375 9.32538 15.4375 11.5C15.4375 13.6746 13.6746 15.4375 11.5 15.4375C9.32538 15.4375 7.5625 13.6746 7.5625 11.5C7.5625 9.32538 9.32538 7.5625 11.5 7.5625ZM11.9219 9.17969C11.9219 9.10202 11.8589 9.03906 11.7812 9.03906H11.2188C11.1411 9.03906 11.0781 9.10202 11.0781 9.17969V11.7109C11.0781 11.7886 11.1411 11.8516 11.2188 11.8516H11.7812C11.8589 11.8516 11.9219 11.7886 11.9219 11.7109V9.17969ZM12.0625 13.3984C12.0625 13.0878 11.8107 12.8359 11.5 12.8359C11.1893 12.8359 10.9375 13.0878 10.9375 13.3984C10.9375 13.7091 11.1893 13.9609 11.5 13.9609C11.8107 13.9609 12.0625 13.7091 12.0625 13.3984Z" fill="#F0AC3C"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-table-warn"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 1.75C1.86193 1.75 1.75 1.86193 1.75 2V14C1.75 14.1381 1.86193 14.25 2 14.25H7.93777C7.67513 13.9103 7.46 13.532 7.30235 13.125H6.625V10.5H7.11151C7.20172 10.1024 7.34457 9.72486 7.53234 9.375H6.625V6.625H9.375V7.53234C9.72486 7.34457 10.1024 7.20172 10.5 7.11151V6.625H13.125V7.30235C13.532 7.46 13.9103 7.67513 14.25 7.93777V2C14.25 1.86193 14.1381 1.75 14 1.75H2ZM2.875 2.875V5.5H13.125V2.875H2.875ZM2.875 9.375V6.625H5.5V9.375H2.875ZM2.875 13.125V10.5H5.5V13.125H2.875Z" fill="#F0AC3C"></path><path d="M11.5 7.5625C13.6746 7.5625 15.4375 9.32538 15.4375 11.5C15.4375 13.6746 13.6746 15.4375 11.5 15.4375C9.32538 15.4375 7.5625 13.6746 7.5625 11.5C7.5625 9.32538 9.32538 7.5625 11.5 7.5625ZM11.9219 9.17969C11.9219 9.10202 11.8589 9.03906 11.7812 9.03906H11.2188C11.1411 9.03906 11.0781 9.10202 11.0781 9.17969V11.7109C11.0781 11.7886 11.1411 11.8516 11.2188 11.8516H11.7812C11.8589 11.8516 11.9219 11.7886 11.9219 11.7109V9.17969ZM12.0625 13.3984C12.0625 13.0878 11.8107 12.8359 11.5 12.8359C11.1893 12.8359 10.9375 13.0878 10.9375 13.3984C10.9375 13.7091 11.1893 13.9609 11.5 13.9609C11.8107 13.9609 12.0625 13.7091 12.0625 13.3984Z" fill="#F0AC3C"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-task-disabled-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.9937 0.00625H0.00625V15.9937H15.9937V0.00625ZM0 0V16H16V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M1.5 2.5C1.5 1.80964 2.05964 1.25 2.75 1.25H5.1875H6.6875H12C12.6904 1.25 13.25 1.80964 13.25 2.5V13.5C13.25 14.1904 12.6904 14.75 12 14.75H3.1875C2.25552 14.75 1.5 13.9945 1.5 13.0625V2.5Z" fill="#C0C7D0"></path><path d="M2.625 4.71875C2.625 4.02839 3.18464 3.46875 3.875 3.46875H12.875C13.5654 3.46875 14.125 4.02839 14.125 4.71875V13.5C14.125 14.1904 13.5654 14.75 12.875 14.75H3.875C3.18464 14.75 2.625 14.1904 2.625 13.5V4.71875Z" fill="#8995A6"></path><rect x="5.4375" y="2" width="4" height="0.875" rx="0.4375" fill="#8995A6"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M5.38269 5.8125C5.38269 5.57088 5.57857 5.375 5.82019 5.375H10.2283C11.0687 5.375 11.75 6.0563 11.75 6.89672C11.75 7.73714 11.0687 8.41843 10.2283 8.41843H6.38453C6.03409 8.41843 5.75 8.70252 5.75 9.05297C5.75 9.40341 6.03409 9.6875 6.38453 9.6875H10.851C11.0926 9.6875 11.2885 9.88338 11.2885 10.125C11.2885 10.3666 11.0926 10.5625 10.851 10.5625H6.38453C5.55084 10.5625 4.875 9.88666 4.875 9.05297C4.875 8.21927 5.55084 7.54343 6.38453 7.54343H10.2283C10.5855 7.54343 10.875 7.25389 10.875 6.89672C10.875 6.53954 10.5855 6.25 10.2283 6.25H5.82019C5.57857 6.25 5.38269 6.05412 5.38269 5.8125Z" fill="white"></path><path d="M8 5.8125C8 6.33027 7.58027 6.75 7.0625 6.75C6.54473 6.75 6.125 6.33027 6.125 5.8125C6.125 5.29473 6.54473 4.875 7.0625 4.875C7.58027 4.875 8 5.29473 8 5.8125Z" fill="white"></path><path d="M10.5 10.125C10.5 10.6428 10.0943 11.0625 9.59375 11.0625C9.09324 11.0625 8.6875 10.6428 8.6875 10.125C8.6875 9.60723 9.09324 9.1875 9.59375 9.1875C10.0943 9.1875 10.5 9.60723 10.5 10.125Z" fill="white"></path><path d="M4.1875 12.875C4.1875 12.7369 4.29943 12.625 4.4375 12.625H14.75C14.8881 12.625 15 12.7369 15 12.875V13.25C15 14.0784 14.3284 14.75 13.5 14.75H2.625H2.9375C3.62786 14.75 4.1875 14.1904 4.1875 13.5V12.875Z" fill="#CFD4DC"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="prep-pipeline-task-icon"><path d="M1.5 2.5C1.5 1.80964 2.05964 1.25 2.75 1.25H5.1875H6.6875H12C12.6904 1.25 13.25 1.80964 13.25 2.5V13.5C13.25 14.1904 12.6904 14.75 12 14.75H3.1875C2.25552 14.75 1.5 13.9945 1.5 13.0625V2.5Z" fill="#87B0F7"></path><path d="M2.625 4.71875C2.625 4.02839 3.18464 3.46875 3.875 3.46875H12.875C13.5654 3.46875 14.125 4.02839 14.125 4.71875V13.5C14.125 14.1904 13.5654 14.75 12.875 14.75H3.875C3.18464 14.75 2.625 14.1904 2.625 13.5V4.71875Z" fill="#5285EA"></path><rect x="5.4375" y="2" width="4" height="0.875" rx="0.4375" fill="#5285EA"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M5.38269 5.8125C5.38269 5.57088 5.57857 5.375 5.82019 5.375H10.2283C11.0687 5.375 11.75 6.0563 11.75 6.89672C11.75 7.73714 11.0687 8.41843 10.2283 8.41843H6.38453C6.03409 8.41843 5.75 8.70252 5.75 9.05297C5.75 9.40341 6.03409 9.6875 6.38453 9.6875H10.851C11.0926 9.6875 11.2885 9.88338 11.2885 10.125C11.2885 10.3666 11.0926 10.5625 10.851 10.5625H6.38453C5.55084 10.5625 4.875 9.88666 4.875 9.05297C4.875 8.21927 5.55084 7.54343 6.38453 7.54343H10.2283C10.5855 7.54343 10.875 7.25389 10.875 6.89672C10.875 6.53954 10.5855 6.25 10.2283 6.25H5.82019C5.57857 6.25 5.38269 6.05412 5.38269 5.8125Z" fill="white"></path><path d="M8 5.8125C8 6.33027 7.58027 6.75 7.0625 6.75C6.54473 6.75 6.125 6.33027 6.125 5.8125C6.125 5.29473 6.54473 4.875 7.0625 4.875C7.58027 4.875 8 5.29473 8 5.8125Z" fill="white"></path><path d="M10.5 10.125C10.5 10.6428 10.0943 11.0625 9.59375 11.0625C9.09324 11.0625 8.6875 10.6428 8.6875 10.125C8.6875 9.60723 9.09324 9.1875 9.59375 9.1875C10.0943 9.1875 10.5 9.60723 10.5 10.125Z" fill="white"></path><path d="M4.1875 12.875C4.1875 12.7369 4.29943 12.625 4.4375 12.625H14.75C14.8881 12.625 15 12.7369 15 12.875V13.25C15 14.0784 14.3284 14.75 13.5 14.75H2.625H2.9375C3.62786 14.75 4.1875 14.1904 4.1875 13.5V12.875Z" fill="#B9D3FE"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" id="prep-pipeline-tree-folder-close"><path d="M19 52.0001C19 38.7453 29.7452 28.0001 43 28.0001L105.705 28C113.247 28 120.471 31.0428 125.74 36.4395L142.26 57.3605C147.529 62.7572 154.753 65.8 162.295 65.8H213C226.255 65.8 237 76.5452 237 89.8V204C237 217.255 226.255 228 213 228L43 228C29.7452 228 19 217.255 19 204V52.0001Z" fill="url(#prep-pipeline-tree-folder-close_paint0_linear_11571_163565)"></path><g filter="url(#prep-pipeline-tree-folder-close_filter0_f_11571_163565)"><path d="M38 105C38 98.3726 43.3726 93 50 93H207C213.627 93 219 98.3726 219 105V113H38V105Z" fill="#CF8826" fill-opacity="0.35"></path></g><path d="M19 109H236.5V204.5C236.5 217.755 225.755 228.5 212.5 228.5H43C29.7452 228.5 19 217.755 19 204.5V109Z" fill="url(#prep-pipeline-tree-folder-close_paint1_linear_11571_163565)"></path><path d="M38 105C38 98.3726 43.3726 93 50 93H206C212.627 93 218 98.3726 218 105V109H38V105Z" fill="white"></path><defs><filter id="prep-pipeline-tree-folder-close_filter0_f_11571_163565" x="34" y="89" width="189" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_11571_163565"></feGaussianBlur></filter><linearGradient id="prep-pipeline-tree-folder-close_paint0_linear_11571_163565" x1="174.5" y1="35" x2="116" y2="204" gradientUnits="userSpaceOnUse"><stop stop-color="#F9A317"></stop><stop offset="0.441634" stop-color="#F0AC3C"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><linearGradient id="prep-pipeline-tree-folder-close_paint1_linear_11571_163565" x1="84" y1="103" x2="162" y2="218.5" gradientUnits="userSpaceOnUse"><stop stop-color="#FCC868"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" id="prep-pipeline-tree-folder-open"><path d="M107 128.5C107 126.015 109.015 124 111.5 124H144.5C146.985 124 149 126.015 149 128.5C149 130.985 146.985 133 144.5 133H111.5C109.015 133 107 130.985 107 128.5Z" fill="url(#prep-pipeline-tree-folder-open_paint0_linear_11571_163574)"></path><path d="M41.2717 129.619C42.8637 122.255 49.3767 117 56.9103 117H230.171C240.369 117 247.965 126.413 245.809 136.381L229.41 212.227C227.42 221.431 219.279 228 209.862 228H39.8292C29.6308 228 22.0353 218.587 24.1906 208.619L41.2717 129.619Z" fill="url(#prep-pipeline-tree-folder-open_paint1_linear_11571_163574)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M40 28.0001C26.7452 28.0001 16 38.7453 16 52.0001V202.72L31.4975 127.505C34.0846 115.54 44.6683 107 56.9103 107H228V89.8C228 76.5452 217.255 65.8 204 65.8H159.295C151.753 65.8 144.529 62.7572 139.26 57.3605L122.74 36.4395C117.471 31.0428 110.247 28 102.705 28L40 28.0001Z" fill="url(#prep-pipeline-tree-folder-open_paint2_linear_11571_163574)"></path><defs><linearGradient id="prep-pipeline-tree-folder-open_paint0_linear_11571_163574" x1="123.5" y1="144" x2="149" y2="124" gradientUnits="userSpaceOnUse"><stop stop-color="#F4A92C" stop-opacity="0.74"></stop><stop offset="1" stop-color="#F4A92F"></stop></linearGradient><linearGradient id="prep-pipeline-tree-folder-open_paint1_linear_11571_163574" x1="91.1265" y1="111.427" x2="158.527" y2="229.002" gradientUnits="userSpaceOnUse"><stop stop-color="#FCC868"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient><linearGradient id="prep-pipeline-tree-folder-open_paint2_linear_11571_163574" x1="184.01" y1="33.3375" x2="150.176" y2="169.216" gradientUnits="userSpaceOnUse"><stop stop-color="#F9A317"></stop><stop offset="0.441634" stop-color="#F0AC3C"></stop><stop offset="1" stop-color="#F0AC3C"></stop></linearGradient></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none" id="prep-pipeline-tree-root-icon"><path d="M20 78C20 64.7452 30.7452 54 44 54H178C191.255 54 202 64.7452 202 78V212C202 225.255 191.255 236 178 236H44C30.7452 236 20 225.255 20 212V78Z" fill="#87B0F7"></path><path d="M54 44C54 30.7452 64.7452 20 78 20H212C225.255 20 236 30.7452 236 44V178C236 191.255 225.255 202 212 202H78C64.7452 202 54 191.255 54 178V44Z" fill="#5285EA"></path><path d="M90 52C90 49.7909 91.7909 48 94 48H196C198.209 48 200 49.7909 200 52V62C200 64.2091 198.209 66 196 66H94C91.7909 66 90 64.2091 90 62V52Z" fill="#E6EFFF"></path><path d="M90 86C90 83.7909 91.7909 82 94 82H196C198.209 82 200 83.7909 200 86V96C200 98.2091 198.209 100 196 100H94C91.7909 100 90 98.2091 90 96V86Z" fill="#E6EFFF"></path><path d="M90 120C90 117.791 91.7909 116 94 116H142C144.209 116 146 117.791 146 120V130C146 132.209 144.209 134 142 134H94C91.7909 134 90 132.209 90 130V120Z" fill="#E6EFFF"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-bat-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V29.2969L70.7031 7.8125H15.625Z" fill="#AFDFDA"></path><g filter="url(#prep-bat-font_filter0_d_2890_20252)"><path d="M75.3906 29.2969H92.1875L70.7031 7.8125V24.6094C70.7031 27.1982 72.8018 29.2969 75.3906 29.2969Z" fill="#65C3BA"></path></g><path d="M7.8125 53.125C7.8125 48.8103 11.3103 45.3125 15.625 45.3125H84.375C88.6897 45.3125 92.1875 48.8103 92.1875 53.125V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V53.125Z" fill="#3A9C93"></path><path d="M20.7031 24.2188C20.7031 22.4929 22.1022 21.0938 23.8281 21.0938H38.6719C40.3978 21.0938 41.7969 22.4929 41.7969 24.2188C41.7969 25.9446 40.3978 27.3438 38.6719 27.3438H23.8281C22.1022 27.3438 20.7031 25.9446 20.7031 24.2188Z" fill="white"></path><path d="M20.7031 35.1562C20.7031 33.4304 22.1022 32.0312 23.8281 32.0312H28.5156C30.2415 32.0312 31.6406 33.4304 31.6406 35.1562C31.6406 36.8821 30.2415 38.2812 28.5156 38.2812H23.8281C22.1022 38.2812 20.7031 36.8821 20.7031 35.1562Z" fill="white"></path><path d="M21.4297 57.3181H30.3713C32.1414 57.3181 33.4587 57.3944 34.3234 57.547C35.1982 57.6894 35.9764 57.9946 36.658 58.4625C37.3497 58.9305 37.9244 59.5561 38.3822 60.3394C38.84 61.1125 39.0688 61.9822 39.0688 62.9486C39.0688 63.9964 38.784 64.9577 38.2144 65.8325C37.6549 66.7074 36.8919 67.3635 35.9255 67.8009C37.2887 68.1976 38.3364 68.8741 39.0688 69.8303C39.8013 70.7865 40.1675 71.9106 40.1675 73.2025C40.1675 74.2198 39.9284 75.2116 39.4503 76.178C38.9824 77.1342 38.3364 77.9022 37.5125 78.4821C36.6986 79.0517 35.6916 79.4027 34.4912 79.5349C33.7384 79.6163 31.9226 79.6672 29.0438 79.6875H21.4297V57.3181ZM25.9463 61.0413V66.214H28.9065C30.6663 66.214 31.7599 66.1886 32.1871 66.1377C32.9602 66.0461 33.5655 65.7817 34.0029 65.3442C34.4505 64.8966 34.6743 64.3117 34.6743 63.5895C34.6743 62.8977 34.481 62.3383 34.0945 61.911C33.7181 61.4736 33.1535 61.2091 32.4008 61.1176C31.9532 61.0667 30.6663 61.0413 28.5403 61.0413H25.9463ZM25.9463 69.9371V75.9186H30.1272C31.7548 75.9186 32.7873 75.8728 33.2247 75.7812C33.8961 75.6592 34.4403 75.3642 34.8574 74.8962C35.2847 74.4181 35.4983 73.7823 35.4983 72.9889C35.4983 72.3175 35.3355 71.7478 35.01 71.2799C34.6845 70.812 34.2115 70.4712 33.5909 70.2576C32.9806 70.0439 31.648 69.9371 29.5931 69.9371H25.9463Z" fill="white"></path><path d="M64.1696 79.6875H59.2562L57.3031 74.6063H48.3615L46.5151 79.6875H41.7239L50.4366 57.3181H55.2126L64.1696 79.6875ZM55.8535 70.8374L52.7712 62.5366L49.75 70.8374H55.8535Z" fill="white"></path><path d="M69.2965 79.6875V61.1023H62.6589V57.3181H80.4354V61.1023H73.8131V79.6875H69.2965Z" fill="white"></path><defs><filter id="prep-bat-font_filter0_d_2890_20252" x="64.7031" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.370833 0 0 0 0 0.342308 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_20252"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_20252" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-call-task-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M255.9 0.1H0.1V255.9H255.9V0.1ZM0 0V256H256V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M14.0625 21.875C14.0625 17.5603 17.5603 14.0625 21.875 14.0625H84.375C88.6897 14.0625 92.1875 17.5603 92.1875 21.875V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H21.875C17.5603 92.1875 14.0625 88.6897 14.0625 84.375V21.875Z" fill="#C2BBF1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.3086 7.8125H15.625C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V68.75C7.8125 73.0647 11.3103 76.5625 15.625 76.5625H64.4531C68.7679 76.5625 72.2656 73.0647 72.2656 68.75V15.625C72.2656 11.3103 68.7679 7.8125 64.4531 7.8125H47.7696C47.1476 11.5199 43.9232 14.3449 40.0391 14.3449C36.1549 14.3449 32.9305 11.5199 32.3086 7.8125Z" fill="#5545BA"></path><path d="M17.1795 39.8996C16.6693 40.2906 16.6693 41.0592 17.1795 41.4502L35.8434 55.7558C36.4861 56.2483 37.4145 55.7901 37.4145 54.9805V47.757H40.3451C50.5173 47.757 59.0199 54.9056 61.1033 64.4531V58.9909C61.1033 45.4344 50.6826 34.3118 37.4145 33.1962V26.3693C37.4145 25.5596 36.4861 25.1014 35.8434 25.594L17.1795 39.8996Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-cloud-offline-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M50 12.5C50 9.91117 52.0987 7.8125 54.6875 7.8125H87.5C90.0888 7.8125 92.1875 9.91117 92.1875 12.5V58.5938C92.1875 61.1826 90.0888 63.2812 87.5 63.2812H54.6875C52.0987 63.2812 50 61.1826 50 58.5938V12.5Z" fill="#5285EA"></path><path d="M57.0312 19.5312C57.0312 16.9424 59.1299 14.8438 61.7188 14.8438H80.4688C83.0576 14.8438 85.1562 16.9424 85.1562 19.5312V27.3438C85.1562 29.9326 83.0576 32.0312 80.4688 32.0312H61.7188C59.1299 32.0312 57.0312 29.9326 57.0312 27.3438V19.5312Z" fill="#F5FAFF"></path><path d="M57.0312 43.75C57.0312 41.1612 59.1299 39.0625 61.7188 39.0625H80.4688C83.0576 39.0625 85.1562 41.1612 85.1562 43.75V51.5625C85.1562 54.1513 83.0576 56.25 80.4688 56.25H61.7188C59.1299 56.25 57.0312 54.1513 57.0312 51.5625V43.75Z" fill="#F5FAFF"></path><path d="M67.9688 23.4375C67.9688 25.3791 66.3948 26.9531 64.4531 26.9531C62.5115 26.9531 60.9375 25.3791 60.9375 23.4375C60.9375 21.4959 62.5115 19.9219 64.4531 19.9219C66.3948 19.9219 67.9688 21.4959 67.9688 23.4375Z" fill="#75A8FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8075 37.1099C11.3657 37.1099 9.62352 34.7431 10.6053 32.5074C15.9069 20.4339 26.65 11.2913 39.7306 8.18368C41.8343 7.68389 43.7499 9.3589 43.7499 11.5211C43.7499 13.265 42.4817 14.7339 40.792 15.1651C30.3254 17.8364 21.7164 25.1527 17.2901 34.7888C16.6586 36.1637 15.3204 37.1099 13.8075 37.1099ZM49.5698 92.188C49.583 92.188 49.5961 92.188 49.6093 92.188C49.6224 92.188 49.6356 92.188 49.6487 92.188H49.5698ZM64.0624 87.1805C64.0624 89.4696 66.1798 91.181 68.355 90.4678C76.8788 87.6729 84.2163 82.26 89.4167 75.1798C91.0849 72.9086 89.3224 69.9219 86.5044 69.9219C85.2648 69.9219 84.1167 70.5449 83.3653 71.5307C79.1663 77.0391 73.395 81.2843 66.7209 83.5969C65.1748 84.1326 64.0624 85.5443 64.0624 87.1805ZM92.1874 49.6099L92.1874 49.6555V49.5644L92.1874 49.6099Z" fill="#2C60DB"></path><path d="M7.8125 46.4844C7.8125 43.8955 9.91117 41.7969 12.5 41.7969H60.1562C62.7451 41.7969 64.8438 43.8955 64.8438 46.4844V76.1719C64.8438 78.7607 62.7451 80.8594 60.1562 80.8594H12.5C9.91116 80.8594 7.8125 78.7607 7.8125 76.1719V46.4844Z" fill="#2C60DB"></path><path d="M28.125 71.4844C28.125 69.5427 29.699 67.9688 31.6406 67.9688H41.0156C42.9573 67.9688 44.5312 69.5427 44.5312 71.4844C44.5312 73.426 42.9573 75 41.0156 75H31.6406C29.699 75 28.125 73.426 28.125 71.4844Z" fill="white"></path><path d="M32.8125 80.8594H39.8438V88.6719H32.8125V80.8594Z" fill="#75A8FF"></path><path d="M20.3125 88.6719C20.3125 86.7302 21.8865 85.1562 23.8281 85.1562H48.8281C50.7698 85.1562 52.3438 86.7302 52.3438 88.6719C52.3438 90.6135 50.7698 92.1875 48.8281 92.1875H23.8281C21.8865 92.1875 20.3125 90.6135 20.3125 88.6719Z" fill="#2C60DB"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-condition-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M255.9 0.1H0.1V255.9H255.9V0.1ZM0 0V256H256V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H30.8594C35.1741 7.8125 38.6719 11.3103 38.6719 15.625V84.375C38.6719 88.6897 35.1741 92.1875 30.8594 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625Z" fill="#5545BA"></path><path d="M55.5357 28.6011C56.323 28.0762 57.3486 28.0762 58.1359 28.6011L87.309 48.0499C88.7006 48.9776 88.7006 51.0224 87.309 51.9501L58.1359 71.3989C57.3486 71.9237 56.323 71.9237 55.5357 71.3989L26.3625 51.9501C24.971 51.0224 24.971 48.9776 26.3625 48.0499L55.5357 28.6011Z" fill="#C2BBF1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55.9884 91.1976C56.2971 91.6661 56.9843 91.6661 57.293 91.1976L67.1705 76.211C67.5129 75.6916 67.1404 74.9998 66.5182 74.9998L60.1562 74.9998L60.1562 68.75C60.1562 67.0241 58.7571 65.625 57.0312 65.625L56.25 65.625C54.5241 65.625 53.125 67.0241 53.125 68.75L53.125 74.9998L46.7632 74.9998C46.141 74.9998 45.7685 75.6916 46.1108 76.211L55.9884 91.1976Z" fill="#5545BA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M57.2929 8.80237C56.9841 8.33394 56.297 8.33394 55.9882 8.80237L46.1107 23.789C45.7683 24.3084 46.1409 25.0002 46.763 25.0002H53.17V31.25C53.17 32.9759 54.5691 34.375 56.295 34.375H57.0763C58.8022 34.375 60.2013 32.9759 60.2013 31.25V25.0002L66.5181 25.0002C67.1402 25.0002 67.5128 24.3084 67.1704 23.789L57.2929 8.80237Z" fill="#5545BA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.9945 50.6526C33.4629 50.3439 33.4629 49.6567 32.9945 49.348L18.0079 39.4705C17.4884 39.1281 16.7967 39.5006 16.7967 40.1228L16.7967 46.5294H14.8888C10.9807 46.5294 7.8125 43.3612 7.8125 39.4531L7.8125 60.5469C7.8125 56.6885 10.9403 53.5606 14.7987 53.5606H16.7967L16.7967 59.8778C16.7967 60.5 17.4884 60.8725 18.0079 60.5301L32.9945 50.6526Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M97.8386 50.6526C98.307 50.3439 98.307 49.6567 97.8386 49.348L82.852 39.4705C82.3326 39.1281 81.6408 39.5006 81.6408 40.1228L81.6408 46.5294L75.7816 46.5294C74.0558 46.5294 72.6566 47.9285 72.6566 49.6544L72.6566 50.4356C72.6566 52.1615 74.0558 53.5606 75.7816 53.5606L81.6408 53.5606L81.6408 59.8778C81.6408 60.4999 82.3326 60.8725 82.852 60.5301L97.8386 50.6526Z" fill="#5545BA"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-loop-container-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M255.9 0.1H0.1V255.9H255.9V0.1ZM0 0V256H256V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M40.625 47.6562C40.625 43.3415 44.1228 39.8438 48.4375 39.8438H84.375C88.6897 39.8438 92.1875 43.3415 92.1875 47.6562V83.5938C92.1875 87.9085 88.6897 91.4062 84.375 91.4062H48.4375C44.1228 91.4062 40.625 87.9085 40.625 83.5938V47.6562Z" fill="#C2BBF1"></path><path d="M7.8125 16.4062C7.8125 12.0915 11.3103 8.59375 15.625 8.59375H51.5625C55.8772 8.59375 59.375 12.0915 59.375 16.4062V52.3438C59.375 56.6585 55.8772 60.1562 51.5625 60.1562H15.625C11.3103 60.1562 7.8125 56.6585 7.8125 52.3438V16.4062Z" fill="#5545BA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M79.3144 30.9193C75.5185 23.2456 67.6101 17.9688 58.4692 17.9688C50.9888 17.9688 44.3338 21.5026 40.0826 26.9918L45.1074 29.5636C46.2401 30.1433 46.2419 31.7616 45.1104 32.3438L26.7607 41.7864C25.8279 42.2664 24.6963 41.709 24.5085 40.6768L20.7297 19.9086C20.498 18.6351 21.8265 17.6483 22.9788 18.238L27.3072 20.4533C32.6454 13.2574 41.2041 8.59375 50.852 8.59375C64.6299 8.59375 76.1865 18.1047 79.3144 30.9193Z" fill="#C2BBF1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M52.318 8.62979C56.2783 9.00969 59.3752 12.3463 59.3752 16.4062V17.9861C59.0746 17.9746 58.7726 17.9688 58.4692 17.9688C50.9888 17.9688 44.3338 21.5026 40.0826 26.9918L45.1074 29.5636C46.2401 30.1433 46.2419 31.7616 45.1104 32.3438L26.7607 41.7864C25.8279 42.2664 24.6963 41.709 24.5085 40.6768L20.7297 19.9086C20.498 18.6351 21.8265 17.6483 22.9788 18.238L27.3072 20.4533C32.6454 13.2574 41.2041 8.59375 50.852 8.59375C51.3436 8.59375 51.8323 8.60586 52.318 8.62979Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.0431 75.5526C28.3789 82.2479 37.2261 85.7292 46.1596 83.7922C53.4698 82.2071 59.2246 77.3436 62.2162 71.0785L56.7606 69.6299C55.5307 69.3034 55.186 67.7223 56.1684 66.9135L72.1004 53.7969C72.9104 53.1301 74.1344 53.4351 74.5366 54.4041L82.6306 73.8998C83.1269 75.0953 82.0376 76.3413 80.7865 76.0091L76.0872 74.7614C72.3951 82.9249 65.0191 89.296 55.5904 91.3405C42.1251 94.2602 28.8153 87.4138 23.0431 75.5526Z" fill="#5545BA"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-loop-task-comment"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.42188C11.3103 7.42188 7.8125 10.9197 7.8125 15.2344V78.9062C7.8125 83.221 11.3103 86.7188 15.625 86.7188H78.9062C83.221 86.7188 86.7188 83.221 86.7188 78.9062V15.2344C86.7188 10.9197 83.221 7.42188 78.9062 7.42188H15.625ZM21.0938 20.7031C19.1521 20.7031 17.5781 22.2771 17.5781 24.2188C17.5781 26.1604 19.1521 27.7344 21.0938 27.7344H73.4375C75.3791 27.7344 76.9531 26.1604 76.9531 24.2188C76.9531 22.2771 75.3791 20.7031 73.4375 20.7031H21.0938Z" fill="#ECC915" fill-opacity="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M47.9032 30.7721C47.6368 30.5893 47.2854 30.5893 47.019 30.7721L39.4925 35.9375H32.4219C28.1072 35.9375 24.6094 39.4353 24.6094 43.75V84.375C24.6094 88.6897 28.1072 92.1875 32.4219 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V43.75C92.1875 39.4353 88.6897 35.9375 84.375 35.9375H55.4298L47.9032 30.7721Z" fill="#E8C200"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M61.5784 50.2583C61.4589 50.3778 61.4589 50.5715 61.5784 50.691L71.9652 61.0778C72.0847 61.1973 72.2785 61.1973 72.398 61.0778L74.1291 59.3467C74.2486 59.2272 74.2486 59.0334 74.1291 58.9139L63.7423 48.5271C63.6228 48.4076 63.4291 48.4076 63.3095 48.5271L61.5784 50.2583ZM43.3273 68.5094C43.0977 68.739 42.9688 69.0503 42.9688 69.375V78.4634C42.9688 79.1395 43.5168 79.6875 44.1928 79.6875H53.2813C53.6059 79.6875 53.9173 79.5585 54.1469 79.329L69.1521 64.3237C69.6302 63.8457 69.6302 63.0706 69.1521 62.5926L60.0637 53.5041C59.5856 53.0261 58.8106 53.0261 58.3325 53.5041L43.3273 68.5094ZM62.1094 76.5625C61.2464 76.5625 60.5469 77.2621 60.5469 78.125C60.5469 78.9879 61.2464 79.6875 62.1094 79.6875H71.4844C72.3473 79.6875 73.0469 78.9879 73.0469 78.125C73.0469 77.2621 72.3473 76.5625 71.4844 76.5625H62.1094Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-message-notify-font"><g clip-path="url(#prep-message-notify-font_clip0_211_70369)"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 9.76562C11.3103 9.76562 7.8125 13.2634 7.8125 17.5781V76.9531C7.8125 81.2679 11.3103 84.7656 15.625 84.7656H19.3247C21.2204 84.7656 23.0514 85.4549 24.4765 86.705L30.3073 91.8197C32.076 93.3712 34.7208 93.3713 36.4895 91.8197L42.3204 86.705C43.7455 85.4549 45.5765 84.7656 47.4722 84.7656H84.375C88.6897 84.7656 92.1875 81.2678 92.1875 76.9531V17.5781C92.1875 13.2634 88.6897 9.76562 84.375 9.76562H15.625ZM42.3251 65.1721H57.6823C57.6749 68.6563 55.1413 72.2656 50.0074 72.2656C44.8735 72.2656 42.3251 68.6625 42.3251 65.1721ZM47.8841 25.3736C48.5515 25.1208 49.276 24.9934 50.0074 25.0003H50.0148C52.8299 25.0003 55.1265 26.8894 55.1265 29.2038H55.1339C55.1304 29.4372 55.1006 29.6697 55.045 29.8982C62.4976 31.9062 67.9278 38.124 67.9278 45.4803V51.4291C67.9352 52.3299 68.1056 58.6227 70.4911 58.6227C70.8221 58.6178 71.151 58.6681 71.4589 58.7709C71.7668 58.8737 72.0477 59.0268 72.2852 59.2216C72.5227 59.4164 72.7123 59.6488 72.843 59.9057C72.9738 60.1626 73.043 60.4387 73.0469 60.7183C73.043 60.9981 72.9738 61.2745 72.8432 61.5317C72.7125 61.7889 72.5231 62.0218 72.2856 62.2171C72.0482 62.4124 71.7675 62.5661 71.4595 62.6696C71.1516 62.7731 70.8225 62.8242 70.4911 62.8201H29.5089C29.1782 62.8242 28.8497 62.7733 28.5422 62.6702C28.2347 62.5671 27.9543 62.4139 27.717 62.2193C27.4796 62.0247 27.29 61.7926 27.159 61.5361C27.0279 61.2796 26.958 61.0038 26.9531 60.7245C26.9531 59.561 28.094 58.6165 29.5756 58.6165C32.0722 58.5477 32.0722 51.2602 32.0722 51.2602V45.474C32.0722 38.1302 37.8802 31.9187 44.955 29.8982C44.8467 29.2874 44.8967 28.664 45.1016 28.0711C45.3065 27.4782 45.6614 26.9299 46.1418 26.4641C46.6222 25.9984 47.2167 25.6263 47.8841 25.3736Z" fill="#5545BA"></path></g><defs><clipPath id="prep-message-notify-font_clip0_211_70369"><rect width="100" height="100" fill="white"></rect></clipPath></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-param-assign-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M255.9 0.1H0.1V255.9H255.9V0.1ZM0 0V256H256V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625Z" fill="#5545BA"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V26.5625H7.8125V15.625Z" fill="#C2BBF1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0938 40.625H49.7026C48.523 38.0875 45.9514 36.3281 42.9688 36.3281C39.9861 36.3281 37.4145 38.0875 36.2349 40.625H17.9688C16.2429 40.625 14.8438 42.0241 14.8438 43.75C14.8438 45.4759 16.2429 46.875 17.9687 46.875H36.2349C37.4145 49.4125 39.9861 51.1719 42.9688 51.1719C45.9514 51.1719 48.523 49.4125 49.7026 46.875H71.0938C72.8196 46.875 74.2188 45.4759 74.2188 43.75C74.2188 42.0241 72.8196 40.625 71.0938 40.625ZM17.9688 60.5469C16.2429 60.5469 14.8438 61.946 14.8438 63.6719C14.8438 65.3978 16.2429 66.7969 17.9687 66.7969H22.1724C23.352 69.3344 25.9236 71.0938 28.9062 71.0938C31.8889 71.0938 34.4605 69.3344 35.6401 66.7969H49.2188C50.9446 66.7969 52.3438 65.3978 52.3438 63.6719C52.3438 61.946 50.9446 60.5469 49.2188 60.5469H35.6401C34.4605 58.0093 31.8889 56.25 28.9062 56.25C25.9236 56.25 23.352 58.0093 22.1724 60.5469H17.9688Z" fill="#C2BBF1"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M61.9855 83.5788L58.8671 92.1875H50.7812L65.4866 54.2969H73.5535L88.6719 92.1875H80.3776L77.0811 83.5788H61.9855ZM64.3271 77.1942H74.6334L69.4272 63.1368L64.3271 77.1942Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-python-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V29.2969L70.7031 7.8125H15.625Z" fill="#AFDFDA"></path><path d="M13.2812 38.2812C13.2812 33.9665 16.779 30.4688 21.0938 30.4688H79.2969C83.6116 30.4688 87.1094 33.9665 87.1094 38.2813V83.5938C87.1094 87.9085 83.6116 91.4062 79.2969 91.4062H21.0938C16.779 91.4062 13.2812 87.9085 13.2812 83.5938V38.2812Z" fill="white"></path><g filter="url(#prep-python-font_filter0_d_2890_23764)"><path d="M75.3906 29.2969H92.1875L70.7031 7.8125V24.6094C70.7031 27.1982 72.8018 29.2969 75.3906 29.2969Z" fill="#65C3BA"></path></g><path d="M7.8125 50.3906C7.8125 46.0759 11.3103 42.5781 15.625 42.5781H84.375C88.6897 42.5781 92.1875 46.0759 92.1875 50.3906V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V50.3906Z" fill="#3A9C93"></path><path d="M13.3672 75.2022V58.9844H18.6219C20.6132 58.9844 21.9112 59.0655 22.516 59.2278C23.4452 59.4711 24.2233 60.0021 24.8502 60.8208C25.4771 61.632 25.7905 62.683 25.7905 63.9736C25.7905 64.9693 25.6098 65.8063 25.2484 66.4848C24.8871 67.1633 24.4261 67.698 23.8656 68.0889C23.3125 68.4724 22.7483 68.7269 22.173 68.8522C21.3913 69.0071 20.2592 69.0845 18.7768 69.0845H16.6417V75.2022H13.3672ZM16.6417 61.7279V66.33H18.4339C19.7245 66.33 20.5874 66.2451 21.0225 66.0755C21.4577 65.9059 21.7969 65.6404 22.0403 65.279C22.291 64.9176 22.4164 64.4972 22.4164 64.0179C22.4164 63.4279 22.2431 62.9411 21.8965 62.5576C21.5498 62.1741 21.111 61.9344 20.58 61.8385C20.1891 61.7648 19.4037 61.7279 18.2237 61.7279H16.6417Z" fill="white"></path><path d="M26.9853 63.4537H30.293L33.1029 71.7949L35.8464 63.4537H39.0657L34.9172 74.7597L34.176 76.8063C33.9031 77.4921 33.6413 78.0158 33.3905 78.3772C33.1472 78.7385 32.8632 79.0298 32.5387 79.2511C32.2216 79.4797 31.827 79.6567 31.355 79.7821C30.8904 79.9075 30.3631 79.9702 29.7731 79.9702C29.1757 79.9702 28.5894 79.9075 28.0141 79.7821L27.7375 77.3483C28.2243 77.4442 28.6631 77.4921 29.054 77.4921C29.7767 77.4921 30.3114 77.2783 30.6581 76.8505C31.0047 76.4301 31.2702 75.8917 31.4546 75.2354L26.9853 63.4537Z" fill="white"></path><path d="M46.4555 63.4537V65.9317H44.3315V70.6665C44.3315 71.6253 44.3499 72.1858 44.3868 72.348C44.431 72.5029 44.5232 72.632 44.6633 72.7352C44.8108 72.8385 44.9878 72.8901 45.1944 72.8901C45.482 72.8901 45.8987 72.7905 46.4444 72.5914L46.7099 75.0031C45.9872 75.3128 45.1685 75.4677 44.254 75.4677C43.6935 75.4677 43.1883 75.3755 42.7384 75.1911C42.2886 74.9994 41.9567 74.756 41.7428 74.461C41.5363 74.1586 41.3925 73.753 41.3114 73.2441C41.245 72.8827 41.2118 72.1526 41.2118 71.0537V65.9317H39.7847V63.4537H41.2118V61.1195L44.3315 59.3052V63.4537H46.4555Z" fill="white"></path><path d="M51.7102 58.9844V64.9471C52.7132 63.7745 53.9117 63.1882 55.3056 63.1882C56.021 63.1882 56.6663 63.3209 57.2415 63.5864C57.8168 63.8519 58.2482 64.1912 58.5359 64.6042C58.8309 65.0172 59.03 65.4744 59.1333 65.976C59.2439 66.4775 59.2992 67.2555 59.2992 68.3102V75.2022H56.1906V68.996C56.1906 67.7644 56.1316 66.9827 56.0136 66.6508C55.8956 66.3189 55.6854 66.0571 55.383 65.8653C55.088 65.6662 54.7156 65.5666 54.2657 65.5666C53.7494 65.5666 53.2885 65.692 52.8829 65.9428C52.4772 66.1935 52.1786 66.5733 51.9868 67.0822C51.8024 67.5837 51.7102 68.3286 51.7102 69.3169V75.2022H48.6016V58.9844H51.7102Z" fill="white"></path><path d="M61.744 69.162C61.744 68.1295 61.9985 67.1302 62.5074 66.164C63.0162 65.1979 63.7353 64.4604 64.6646 63.9515C65.6012 63.4426 66.6448 63.1882 67.7953 63.1882C69.5727 63.1882 71.0293 63.7671 72.165 64.925C73.3008 66.0755 73.8687 67.5321 73.8687 69.2947C73.8687 71.0721 73.2934 72.5471 72.1429 73.7198C70.9998 74.8851 69.5579 75.4677 67.8174 75.4677C66.7407 75.4677 65.7118 75.2243 64.7309 74.7375C63.7574 74.2508 63.0162 73.5391 62.5074 72.6025C61.9985 71.6585 61.744 70.5116 61.744 69.162ZM64.9301 69.3279C64.9301 70.4932 65.2066 71.3856 65.7598 72.0051C66.3129 72.6246 66.9951 72.9343 67.8064 72.9343C68.6176 72.9343 69.2961 72.6246 69.8419 72.0051C70.395 71.3856 70.6716 70.4858 70.6716 69.3058C70.6716 68.1553 70.395 67.2703 69.8419 66.6508C69.2961 66.0313 68.6176 65.7215 67.8064 65.7215C66.9951 65.7215 66.3129 66.0313 65.7598 66.6508C65.2066 67.2703 64.9301 68.1627 64.9301 69.3279Z" fill="white"></path><path d="M87 75.2022H83.8914V69.2062C83.8914 67.9377 83.825 67.1191 83.6923 66.7503C83.5595 66.3742 83.342 66.0829 83.0396 65.8764C82.7446 65.6699 82.3869 65.5666 81.9665 65.5666C81.4281 65.5666 80.9451 65.7141 80.5173 66.0091C80.0895 66.3041 79.7945 66.695 79.6323 67.1818C79.4774 67.6685 79.4 68.5683 79.4 69.8811V75.2022H76.2914V63.4537H79.1787V65.1794C80.2039 63.8519 81.4945 63.1882 83.0506 63.1882C83.7365 63.1882 84.3634 63.3135 84.9313 63.5643C85.4992 63.8077 85.9269 64.1211 86.2146 64.5046C86.5096 64.8881 86.7124 65.3233 86.823 65.81C86.941 66.2968 87 66.9937 87 67.9008V75.2022Z" fill="white"></path><defs><filter id="prep-python-font_filter0_d_2890_23764" x="64.7031" y="5.8125" width="33.4844" height="33.4844" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.370833 0 0 0 0 0.342308 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_23764"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_23764" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-shell-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H84.375C88.6897 7.8125 92.1875 11.3103 92.1875 15.625V84.375C92.1875 88.6897 88.6897 92.1875 84.375 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625Z" fill="#3A9C93"></path><path d="M14.8438 22.6562C14.8438 18.3415 18.3415 14.8438 22.6562 14.8438H77.3438C81.6585 14.8438 85.1562 18.3415 85.1562 22.6562V24.2188C85.1562 28.5335 81.6585 32.0312 77.3438 32.0312H22.6562C18.3415 32.0312 14.8438 28.5335 14.8438 24.2188V22.6562Z" fill="#AFDFDA"></path><path d="M27.3438 23.4375C27.3438 25.5949 25.5949 27.3438 23.4375 27.3438C21.2801 27.3438 19.5312 25.5949 19.5312 23.4375C19.5312 21.2801 21.2801 19.5312 23.4375 19.5312C25.5949 19.5312 27.3438 21.2801 27.3438 23.4375Z" fill="#3A9C93"></path><path d="M39.0625 23.4375C39.0625 25.5949 37.3136 27.3438 35.1562 27.3438C32.9989 27.3438 31.25 25.5949 31.25 23.4375C31.25 21.2801 32.9989 19.5312 35.1562 19.5312C37.3136 19.5312 39.0625 21.2801 39.0625 23.4375Z" fill="#3A9C93"></path><path d="M50.7812 23.4375C50.7812 25.5949 49.0324 27.3438 46.875 27.3438C44.7176 27.3438 42.9688 25.5949 42.9688 23.4375C42.9688 21.2801 44.7176 19.5312 46.875 19.5312C49.0324 19.5312 50.7812 21.2801 50.7812 23.4375Z" fill="#3A9C93"></path><path d="M15.9165 64.9605L20.0913 64.5546C20.3426 65.9559 20.8499 66.9851 21.6134 67.6422C22.3865 68.2994 23.4254 68.628 24.73 68.628C26.1119 68.628 27.1508 68.338 27.8466 67.7582C28.5521 67.1687 28.9048 66.4826 28.9048 65.6998C28.9048 65.1973 28.755 64.7721 28.4554 64.4242C28.1655 64.0666 27.6533 63.7574 26.9189 63.4964C26.4163 63.3225 25.2712 63.0132 23.4833 62.5687C21.1833 61.9985 19.5695 61.2979 18.6417 60.4668C17.3371 59.2975 16.6848 57.872 16.6848 56.1905C16.6848 55.1082 16.9892 54.0983 17.598 53.1609C18.2165 52.2138 19.1008 51.4939 20.2508 51.001C21.4104 50.5081 22.8069 50.2617 24.4401 50.2617C27.1073 50.2617 29.1126 50.8464 30.4558 52.0157C31.8088 53.185 32.5191 54.7458 32.5867 56.6979L28.296 56.8863C28.1123 55.7943 27.7161 55.0115 27.1073 54.538C26.5081 54.0548 25.6046 53.8132 24.3966 53.8132C23.1499 53.8132 22.1739 54.0693 21.4684 54.5815C21.0142 54.9101 20.7871 55.3498 20.7871 55.9006C20.7871 56.4031 20.9997 56.8332 21.4249 57.1907C21.9661 57.6449 23.2804 58.1185 25.3678 58.6113C27.4552 59.1042 28.9966 59.6164 29.992 60.1479C30.997 60.6697 31.7798 61.3897 32.3403 62.3078C32.9105 63.2162 33.1956 64.342 33.1956 65.6853C33.1956 66.903 32.8573 68.0433 32.1808 69.1063C31.5044 70.1694 30.5476 70.9618 29.3107 71.4836C28.0737 71.9958 26.5323 72.2519 24.6865 72.2519C21.9999 72.2519 19.9367 71.6334 18.4968 70.3965C17.0568 69.1498 16.1968 67.3378 15.9165 64.9605Z" fill="white"></path><path d="M40.8349 50.6241V58.4374C42.1492 56.9008 43.7195 56.1325 45.546 56.1325C46.4834 56.1325 47.329 56.3065 48.0828 56.6544C48.8366 57.0023 49.4019 57.4468 49.7788 57.988C50.1654 58.5292 50.4263 59.1283 50.5616 59.7855C50.7065 60.4426 50.779 61.4622 50.779 62.8441V71.875H46.7057V63.7429C46.7057 62.129 46.6284 61.1046 46.4738 60.6697C46.3191 60.2349 46.0437 59.8918 45.6475 59.6405C45.2609 59.3796 44.7729 59.2491 44.1834 59.2491C43.5069 59.2491 42.9029 59.4134 42.3714 59.742C41.8399 60.0706 41.4485 60.5683 41.1973 61.2351C40.9557 61.8922 40.8349 62.8683 40.8349 64.1632V71.875H36.7615V50.6241H40.8349Z" fill="white"></path><path d="M63.8398 66.9754L67.8986 67.6567C67.3768 69.145 66.5505 70.2805 65.4198 71.0633C64.2988 71.8364 62.8927 72.2229 61.2015 72.2229C58.5246 72.2229 56.5435 71.3483 55.2582 69.5992C54.2435 68.1979 53.7362 66.4294 53.7362 64.2937C53.7362 61.7424 54.403 59.7468 55.7366 58.3069C57.0702 56.8573 58.7566 56.1325 60.7957 56.1325C63.086 56.1325 64.8931 56.8912 66.2171 58.4084C67.5411 59.916 68.174 62.2305 68.1161 65.3519H57.911C57.94 66.5599 58.2685 67.5021 58.8967 68.1786C59.5249 68.8454 60.3076 69.1788 61.245 69.1788C61.8828 69.1788 62.4192 69.0049 62.8541 68.657C63.2889 68.3091 63.6175 67.7485 63.8398 66.9754ZM64.0717 62.8586C64.0427 61.6796 63.7383 60.7857 63.1585 60.1769C62.5786 59.5584 61.8732 59.2491 61.0421 59.2491C60.153 59.2491 59.4185 59.5729 58.8387 60.2204C58.2589 60.8678 57.9738 61.7473 57.9835 62.8586H64.0717Z" fill="white"></path><path d="M71.4501 71.875V50.6241H75.5234V71.875H71.4501Z" fill="white"></path><path d="M79.7127 71.875V50.6241H83.7861V71.875H79.7127Z" fill="white"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-sql-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V23.4375L76.5625 7.8125H15.625Z" fill="#AFDFDA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V51.5625H92.1875V23.4375L76.5625 7.8125H15.625Z" fill="#3A9C93"></path><mask id="prep-sql-font_mask0_2890_17956" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="7" y="7" width="86" height="45"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125C11.3103 7.8125 7.8125 11.3103 7.8125 15.625V51.5625H92.1875V23.4375L76.5625 7.8125H15.625Z" fill="#3FB4AB"></path></mask><g mask="url(#prep-sql-font_mask0_2890_17956)"><g filter="url(#prep-sql-font_filter0_d_2890_17956)"><path d="M81.25 23.4375H92.1875L76.5625 7.8125V18.75C76.5625 21.3388 78.6612 23.4375 81.25 23.4375Z" fill="#87CFC8"></path></g></g><path fill-rule="evenodd" clip-rule="evenodd" d="M50.7313 20.7031C47.9046 20.7031 45.5413 21.5431 43.6446 23.2265C41.3146 25.2831 40.1513 28.3231 40.1513 32.3398C40.1513 36.3298 41.2846 39.3531 43.5513 41.4131C45.4246 43.1231 47.7912 43.9798 50.6546 43.9798C52.0279 43.9798 53.2079 43.8131 54.1912 43.4865C54.6579 43.3265 55.2013 43.0765 55.8112 42.7331L56.2779 42.4565L58.9346 44.9631L61.3379 42.4565L58.8046 40.0831C59.6007 39.1734 60.1857 38.0988 60.5179 36.9365C60.9946 35.6131 61.2346 33.9698 61.2346 32.0131C61.2346 28.3131 60.1179 25.4331 57.8913 23.3731C55.9612 21.5931 53.5746 20.7065 50.7313 20.7065V20.7031ZM28.3495 20.7331C25.5737 20.7334 23.4709 21.3834 22.0379 22.6865C20.6046 23.9898 19.8913 25.6265 19.8913 27.5965C19.8913 29.7531 20.6313 31.3398 22.1146 32.3565C22.8913 32.8965 24.2279 33.3998 26.1213 33.8665L26.8579 34.0431L29.1846 34.5631C30.5513 34.8631 31.5513 35.2065 32.1846 35.5965C32.8212 35.9898 33.1379 36.5531 33.1379 37.2798C33.1379 38.5231 32.4979 39.3731 31.2146 39.8298C30.5379 40.0698 29.6579 40.1898 28.5746 40.1898C26.7646 40.1898 25.4846 39.7365 24.7413 38.8298C24.3709 38.3347 24.1231 37.759 24.0179 37.1498L23.9179 36.5765H19.5312C19.5312 38.8665 20.3546 40.6631 21.9946 41.9731C23.6346 43.2798 25.8879 43.9331 28.7546 43.9331C31.5579 43.9331 33.7279 43.2665 35.2646 41.9431C36.8013 40.6131 37.5713 38.9431 37.5713 36.9365C37.5713 34.9765 36.9146 33.4798 35.6013 32.4465C34.8779 31.8731 33.8513 31.4031 32.5279 31.0265L31.8413 30.8498L28.0513 29.9398C26.5913 29.5898 25.6346 29.2865 25.1846 29.0298C24.8605 28.8665 24.5901 28.6134 24.4057 28.3008C24.2213 27.9882 24.1307 27.6291 24.1446 27.2665C24.1446 26.4131 24.4946 25.7465 25.2013 25.2665C25.9079 24.7898 26.8546 24.5531 28.0346 24.5531C29.1012 24.5531 29.9913 24.7365 30.7079 25.1031C31.6479 25.5931 32.2079 26.3698 32.3846 27.4465L32.4379 27.9231H36.8546C36.7746 25.5898 35.9179 23.8031 34.2813 22.5765C32.6449 21.3467 30.6688 20.7334 28.3495 20.7331ZM28.3495 20.7331L28.3512 20.7331H28.3479L28.3495 20.7331ZM69.3346 21.3765H64.7379V43.3665H80.2246V39.4131H69.3346V21.3765ZM50.7011 24.5964C52.6411 24.5964 54.1144 25.2697 55.1244 26.6197C56.1344 27.9664 56.6378 29.8731 56.6378 32.3397C56.6378 33.4164 56.5278 34.3564 56.3111 35.1597C56.2044 35.5631 56.0445 36.0164 55.8211 36.5197L55.5778 37.0397L53.3545 34.9231L50.9845 37.3997L53.2078 39.5164C52.4107 39.8931 51.5394 40.0867 50.6578 40.0831C49.2511 40.0831 48.0478 39.6597 47.0445 38.8164C45.4945 37.5131 44.7178 35.3531 44.7178 32.3397C44.7178 29.7631 45.2578 27.8297 46.3445 26.5397C47.4278 25.2431 48.8778 24.5964 50.7011 24.5964Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M23.2479 72.9799C22.6377 72.3697 22.6377 71.3803 23.2479 70.7701L34.1854 59.8327C34.7956 59.2225 35.7849 59.2225 36.3951 59.8327L38.6048 62.0424C39.215 62.6526 39.215 63.6419 38.6048 64.2521L30.9819 71.875L38.6048 79.4979C39.215 80.1081 39.215 81.0974 38.6048 81.7076L36.3951 83.9173C35.7849 84.5275 34.7956 84.5275 34.1854 83.9173L23.2479 72.9799Z" fill="#3A9C93"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M77.1427 70.7701C77.7529 71.3803 77.7529 72.3697 77.1427 72.9799L66.2052 83.9173C65.595 84.5275 64.6057 84.5275 63.9955 83.9173L61.7858 81.7076C61.1756 81.0974 61.1756 80.1081 61.7858 79.4979L69.4087 71.875L61.7858 64.2521C61.1756 63.6419 61.1756 62.6526 61.7858 62.0424L63.9955 59.8327C64.6057 59.2225 65.595 59.2225 66.2052 59.8327L77.1427 70.7701Z" fill="#3A9C93"></path><defs><filter id="prep-sql-font_filter0_d_2890_17956" x="70.5625" y="5.8125" width="27.625" height="27.625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="3"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2890_17956"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2890_17956" result="shape"></feBlend></filter></defs></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-virtual-node-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path d="M86.7188 50C86.7188 70.2792 70.2792 86.7188 50 86.7188C29.7208 86.7188 13.2812 70.2792 13.2812 50C13.2812 29.7208 29.7208 13.2812 50 13.2812C70.2792 13.2812 86.7188 29.7208 86.7188 50Z" fill="#5545BA"></path><path d="M73.8281 50C73.8281 63.1599 63.1599 73.8281 50 73.8281C36.8401 73.8281 26.1719 63.1599 26.1719 50C26.1719 36.8401 36.8401 26.1719 50 26.1719C63.1599 26.1719 73.8281 36.8401 73.8281 50Z" fill="#9B91DE"></path><path d="M63.6719 50C63.6719 57.5508 57.5508 63.6719 50 63.6719C42.4492 63.6719 36.3281 57.5508 36.3281 50C36.3281 42.4492 42.4492 36.3281 50 36.3281C57.5508 36.3281 63.6719 42.4492 63.6719 50Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 7.8125H21.875C22.3065 7.8125 22.6562 8.16228 22.6562 8.59375V14.0625C22.6562 14.494 22.3065 14.8438 21.875 14.8438H15.625C15.1935 14.8438 14.8438 15.1935 14.8438 15.625V21.875C14.8438 22.3065 14.494 22.6562 14.0625 22.6562H8.59375C8.16228 22.6562 7.8125 22.3065 7.8125 21.875V15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125ZM8.59375 77.3438C8.16228 77.3438 7.8125 77.6935 7.8125 78.125V84.375C7.8125 88.6897 11.3103 92.1875 15.625 92.1875H21.875C22.3065 92.1875 22.6562 91.8377 22.6562 91.4062V85.9375C22.6562 85.506 22.3065 85.1562 21.875 85.1562H15.625C15.1935 85.1562 14.8438 84.8065 14.8438 84.375V78.125C14.8438 77.6935 14.494 77.3438 14.0625 77.3438H8.59375ZM85.9375 77.3438C85.506 77.3438 85.1562 77.6935 85.1562 78.125V84.375C85.1562 84.8065 84.8065 85.1562 84.375 85.1562H78.125C77.6935 85.1562 77.3438 85.506 77.3438 85.9375V91.4062C77.3438 91.8377 77.6935 92.1875 78.125 92.1875H84.375C88.6897 92.1875 92.1875 88.6897 92.1875 84.375V78.125C92.1875 77.6935 91.8377 77.3438 91.4062 77.3438H85.9375ZM91.4062 22.6562C91.8377 22.6562 92.1875 22.3065 92.1875 21.875V15.625C92.1875 11.3103 88.6897 7.8125 84.375 7.8125H78.125C77.6935 7.8125 77.3438 8.16228 77.3438 8.59375V14.0625C77.3438 14.494 77.6935 14.8438 78.125 14.8438H84.375C84.8065 14.8438 85.1562 15.1935 85.1562 15.625V21.875C85.1562 22.3065 85.506 22.6562 85.9375 22.6562H91.4062Z" fill="#7466CC"></path></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" id="prep-visualization-font"><path fill-rule="evenodd" clip-rule="evenodd" d="M99.9609 0.0390625H0.0390625V99.9609H99.9609V0.0390625ZM0 0V100H100V0H0Z" fill="white" fill-opacity="0.01"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.3057 73.8281H18.75V81.6406H38.3057C42.177 81.6406 45.7985 79.7287 47.9822 76.5321L52.9356 69.281C53.6635 68.2154 54.8707 67.5781 56.1611 67.5781H77.7344V59.7656H56.1611C52.2898 59.7656 48.6684 61.6775 46.4847 64.8741L41.5312 72.1253C40.8033 73.1908 39.5961 73.8281 38.3057 73.8281Z" fill="#2C60DB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M38.3057 26.5625H18.75V18.75H38.3057C42.177 18.75 45.7985 20.6619 47.9822 23.8585L52.9356 31.1097C53.6635 32.1752 54.8707 32.8125 56.1611 32.8125H77.7344V40.625H56.1611C52.2898 40.625 48.6683 38.7131 46.4847 35.5165L41.5312 28.2653C40.8033 27.1998 39.5961 26.5625 38.3057 26.5625Z" fill="#2C60DB"></path><path d="M51.9531 75.3906C51.9531 74.5277 52.6527 73.8281 53.5156 73.8281H59.7656C60.6286 73.8281 61.3281 74.5277 61.3281 75.3906V80.0781C61.3281 80.9411 60.6286 81.6406 59.7656 81.6406H53.5156C52.6527 81.6406 51.9531 80.9411 51.9531 80.0781V75.3906Z" fill="#5285EA"></path><path d="M51.9531 20.3125C51.9531 19.4496 52.6527 18.75 53.5156 18.75H59.7656C60.6286 18.75 61.3281 19.4496 61.3281 20.3125V25C61.3281 25.8629 60.6286 26.5625 59.7656 26.5625H53.5156C52.6527 26.5625 51.9531 25.8629 51.9531 25V20.3125Z" fill="#5285EA"></path><path d="M66.0156 75.3906C66.0156 74.5277 66.7152 73.8281 67.5781 73.8281H73.8281C74.6911 73.8281 75.3906 74.5277 75.3906 75.3906V80.0781C75.3906 80.9411 74.6911 81.6406 73.8281 81.6406H67.5781C66.7152 81.6406 66.0156 80.9411 66.0156 80.0781V75.3906Z" fill="#5285EA"></path><path d="M33.2031 47.6562C33.2031 46.7933 33.9027 46.0938 34.7656 46.0938H48.8281C49.6911 46.0938 50.3906 46.7933 50.3906 47.6562V52.3438C50.3906 53.2067 49.6911 53.9062 48.8281 53.9062H34.7656C33.9027 53.9062 33.2031 53.2067 33.2031 52.3438V47.6562Z" fill="#2C60DB"></path><path d="M66.0156 20.3125C66.0156 19.4496 66.7152 18.75 67.5781 18.75H73.8281C74.6911 18.75 75.3906 19.4496 75.3906 20.3125V25C75.3906 25.8629 74.6911 26.5625 73.8281 26.5625H67.5781C66.7152 26.5625 66.0156 25.8629 66.0156 25V20.3125Z" fill="#5285EA"></path><path d="M47.2656 47.6562C47.2656 46.7933 47.9652 46.0938 48.8281 46.0938H55.0781C55.9411 46.0938 56.6406 46.7933 56.6406 47.6562V52.3438C56.6406 53.2067 55.9411 53.9062 55.0781 53.9062H48.8281C47.9652 53.9062 47.2656 53.2067 47.2656 52.3438V47.6562Z" fill="#2C60DB"></path><path d="M7.8125 15.625C7.8125 11.3103 11.3103 7.8125 15.625 7.8125H26.5625C30.8772 7.8125 34.375 11.3103 34.375 15.625V84.375C34.375 88.6897 30.8772 92.1875 26.5625 92.1875H15.625C11.3103 92.1875 7.8125 88.6897 7.8125 84.375V15.625Z" fill="#5285EA"></path><path d="M12.5 64.0625C12.5 63.1996 13.1996 62.5 14.0625 62.5H18.75C19.6129 62.5 20.3125 63.1996 20.3125 64.0625V79.6875C20.3125 80.5504 19.6129 81.25 18.75 81.25H14.0625C13.1996 81.25 12.5 80.5504 12.5 79.6875V64.0625Z" fill="white"></path><path d="M77.7343 26.4035V46.9225C77.7343 48.2012 79.1865 48.9385 80.2188 48.1839L94.7028 37.597C95.5727 36.9612 95.5531 35.6563 94.6644 35.0469L80.1804 25.1149C79.1436 24.4039 77.7343 25.1463 77.7343 26.4035Z" fill="#2C60DB"></path><path d="M77.7343 54.1379V74.6569C77.7343 75.9356 79.1865 76.6729 80.2188 75.9183L94.7028 65.3314C95.5727 64.6955 95.5531 63.3907 94.6644 62.7813L80.1804 52.8493C79.1436 52.1382 77.7343 52.8807 77.7343 54.1379Z" fill="#2C60DB"></path></symbol>', 110), S1 = /* @__PURE__ */ D("symbol", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024",
  fill: "currentColor",
  id: "icon-tuding"
}, [
  /* @__PURE__ */ D("path", {
    d: "M509.02 959.265l37.884-327.805 150.523 4.639s38.746-22.152 17.576-47.072l-80.408-76.659-16.593-232.712 44.337-49.804s29.496-44.366-29.557-49.896l-265.006-0.892s-40.588 31.37-4.639 61.85l36.01 36.01-18.373 227.182-71.129 80.284s-18.496 36.932 15.669 50.82l141.305-0.951 42.4 325.01z",
    "p-id": "8664"
  })
], -1), k1 = [
  x1,
  S1
];
function N1(c, e) {
  return w(), M("svg", L1, k1);
}
const G1 = /* @__PURE__ */ C1(v1, [["render", N1]]), V1 = /* @__PURE__ */ K({
  __name: "drawer",
  props: {
    context: {},
    config: { default: () => ({
      direction: "btt",
      modal: !1,
      showClose: !1,
      lockScroll: !1
    }) }
  },
  setup(c) {
    const e = c, { config: t, context: i } = e, { graphShadow: a, graphForm: o } = i, r = a.currentCell;
    oe(r, (h) => {
      h == null && o.closeDrawer();
    });
    const l = x(() => {
      var h;
      return ((h = r.value) == null ? void 0 : h.id) || "";
    }), A = x(() => (
      /* currentNode.value ? graphShadow.getByKey(currentNode.value,'tabHeader') : */
      Q1
    )), n = x(() => r.value ? a.getTabs(r.value).value : []), p = x(() => n.value.map((h, u) => h.default ? "default-tab" : u + "")), d = x(() => ({ ...i, cell: r.value, data: r.value ? a.get(r.value) : {}, formStatus: r.value ? o.getCellStatus(r.value) : {} })), C = v(), m = Ze((h, u) => {
      u && (C.value = u), o.validateForm(u || C.value, h);
    }, 100);
    return (h, u) => (w(), F(s(Ie), pe({ "modal-class": "_graph-drawer" }, s(t), {
      modelValue: s(o).visible.value,
      "onUpdate:modelValue": u[5] || (u[5] = (f) => s(o).visible.value = f)
    }), {
      header: L(({ close: f, titleId: y, titleClass: E }) => [
        l.value ? (w(), F(s(R), {
          key: l.value,
          elem: A.value,
          params: d.value,
          context: { params: { close: f, titleId: y, titleClass: E } }
        }, null, 8, ["elem", "params", "context"])) : N("", !0)
      ]),
      default: L(() => [
        n.value.length > 0 ? (w(), M(G, { key: 0 }, [
          n.value.length > 1 ? (w(), F(s(Pe), {
            "model-value": "default-tab",
            key: l.value
          }, {
            default: L(() => [
              (w(!0), M(G, null, q(n.value, (f, y) => (w(), F(s(Te), {
                key: y + "-" + l.value,
                name: p.value[y],
                label: f.label
              }, {
                default: L(() => [
                  f.prop != null ? (w(), F(s($), {
                    key: 0,
                    ref_for: !0,
                    ref: (E) => C.value = E,
                    onChange: () => s(m)(f),
                    "model-value": s(k)(s(o).data.value[l.value], f.prop),
                    "onUpdate:modelValue": (E) => {
                      const Q = {};
                      s(we)(Q, f.prop, E), s(o).resetCellFormData(l.value, Q);
                    },
                    params: d.value,
                    column: f.column
                  }, null, 8, ["onChange", "model-value", "onUpdate:modelValue", "params", "column"])) : f.type === "form" ? (w(), F(s($), {
                    key: 1,
                    ref_for: !0,
                    ref: (E) => C.value = E,
                    onChange: () => s(m)(f),
                    "model-value": s(o).data.value[l.value],
                    "onUpdate:modelValue": u[0] || (u[0] = (E) => s(o).resetCellFormData(l.value, E)),
                    params: d.value,
                    column: f.column
                  }, null, 8, ["onChange", "model-value", "params", "column"])) : (w(), F(s(R), {
                    key: 2,
                    elem: f.elem,
                    params: d.value,
                    context: { params: { index: y } }
                  }, null, 8, ["elem", "params", "context"]))
                ]),
                _: 2
              }, 1032, ["name", "label"]))), 128))
            ]),
            _: 1
          })) : (w(), M(G, { key: 1 }, [
            n.value[0].prop != null ? (w(), F(s($), {
              key: 0,
              ref: (f) => C.value = f,
              onChange: u[1] || (u[1] = () => s(m)(n.value[0])),
              "model-value": s(k)(s(o).data.value[l.value], n.value[0].prop),
              "onUpdate:modelValue": u[2] || (u[2] = (f) => {
                const y = {};
                s(we)(y, n.value[0].prop, f), s(o).resetCellFormData(l.value, y);
              }),
              params: d.value,
              column: n.value[0].column
            }, null, 8, ["model-value", "params", "column"])) : n.value[0].type === "form" ? (w(), F(s($), {
              key: 1,
              ref: (f) => C.value = f,
              onChange: u[3] || (u[3] = () => s(m)(n.value[0])),
              "model-value": s(o).data.value[l.value],
              "onUpdate:modelValue": u[4] || (u[4] = (f) => s(o).resetCellFormData(l.value, f)),
              params: d.value,
              column: n.value[0].column
            }, null, 8, ["model-value", "params", "column"])) : (w(), F(s(R), {
              key: 2,
              elem: n.value[0].elem,
              params: d.value,
              context: { params: { index: 0 } }
            }, null, 8, ["elem", "params"]))
          ], 64))
        ], 64)) : N("", !0)
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
});
class R1 {
  // constructor(graphShadow:GraphShadow,form: GraphForm, graphContextmenu: GraphContextmenu,events?:Record<string,(...args:any) => void>) {
  constructor(e) {
    g(this, "graphShadow");
    g(this, "graphForm");
    // public graphContextmenu: GraphContextmenu;
    g(this, "contextmenuRef");
    g(this, "containerBox");
    //
    g(this, "graph");
    g(this, "events", {});
    //
    g(this, "currentKeydown", /* @__PURE__ */ new Set());
    g(this, "selectedCells", v([]));
    g(this, "clipboardCells", v([]));
    g(this, "clickHandle");
    this.graphShadow = e.graphShadow, this.graphForm = e.graphForm, this.contextmenuRef = e.contextmenuRef, this.events = e.events, this.containerBox = e.containerBox;
  }
  //
  hasEvent(e) {
    return this.events[e] != null;
  }
  eventCall(e, ...t) {
    const i = this.events[e];
    i && typeof i == "function" && i.apply(this, t);
  }
  // public contextmenuCell = shallowRef<Cell>()
  // 画布渲染完成事件
  done() {
    var e;
    (e = this.graph) == null || e.on("render:done", () => {
      var i;
      const t = ((i = this.graph) == null ? void 0 : i.getCells()) || [];
      for (const a of t)
        this.graphShadow.initCell(a), this.graphForm.initCell(a).validateCell(a), this.eventCall("init:cell", a), a.isEdge() && this.eventCall("init:edge", a), a.isNode() && this.eventCall("init:node", a);
      this.eventCall("render:done", this);
    });
  }
  // 画布交互
  blank() {
    var e, t;
    (e = this.graph) == null || e.on("blank:click", (i) => {
      var a;
      this.graphShadow.resetCurrentCell(), (a = this.contextmenuRef.value) == null || a.close(), this.currentKeydown.has("Control") || this.graphShadow.clearSelectedCells(), this.eventCall("blank:click", i);
    }), (t = this.graph) == null || t.on("blank:contextmenu", (i) => {
      var l, A;
      const { x: a, y: o } = i, r = (l = this.graph) == null ? void 0 : l.localToGraph({ x: a, y: o });
      (A = this.contextmenuRef.value) == null || A.open(r), this.eventCall("blank:contextmenu", i);
    });
  }
  // 公共事件
  cell() {
    var e, t, i, a, o, r, l, A;
    (e = this.graph) == null || e.on("cell:added", (n) => {
      const { cell: p } = n;
      console.log(".............", p.id), this.graphShadow.initCell(p), this.graphForm.initCell(p).validateCell(p), this.eventCall("cell:added", n), this.eventCall("init:cell", p), p.isEdge() && this.eventCall("init:edge", p), p.isNode() && this.eventCall("init:node", p);
    }), (t = this.graph) == null || t.on("cell:click", (n) => {
      var p;
      (p = this.contextmenuRef.value) == null || p.close(), this.currentKeydown.has("Control") || this.graphShadow.clearSelectedCells(), this.eventCall("cell:click", n);
    }), (i = this.graph) == null || i.on("cell:mouseenter", (n) => {
      this.eventCall("cell:mouseenter", n);
    }), (a = this.graph) == null || a.on("cell:mouseleave", (n) => {
      this.eventCall("cell:mouseleave", n);
    }), (o = this.graph) == null || o.on("cell:selected", (n) => {
      const { cell: p } = n;
      this.currentKeydown.has("Control") ? (this.graphShadow.toggleSelectedCell(p), this.eventCall("cell:selected", n)) : this.graphShadow.clearSelectedCells();
    }), (r = this.graph) == null || r.on("cell:unselected", (n) => {
      const { cell: p } = n;
      this.graphShadow.delSelectedCell(p), this.eventCall("cell:unselected", n);
    }), (l = this.graph) == null || l.on("cell:contextmenu", (n) => {
      var h, u;
      const { cell: p, x: d, y: C } = n, m = (h = this.graph) == null ? void 0 : h.localToGraph({ x: d, y: C });
      (u = this.contextmenuRef.value) == null || u.open(m, p), this.eventCall("cell:contextmenu", n);
    }), (A = this.graph) == null || A.on("cell:selectAll", () => {
      var p, d;
      const n = (p = this.graph) == null ? void 0 : p.getCells();
      n && n.length > 0 && ((d = this.graph) == null || d.select(n), this.graphShadow.resetSelectedCells(n), this.eventCall("cell:selectAll", n));
    });
  }
  // 边连接事件
  edge() {
    var e, t, i, a, o;
    (e = this.graph) == null || e.on("edge:added", (r) => {
      this.eventCall("edge:added", r);
    }), (t = this.graph) == null || t.on("edge:connected", (r) => {
      const { edge: l } = r;
      this.graphShadow.updateEdge(l), this.eventCall("edge:connected", r);
    }), (i = this.graph) == null || i.on("edge:contextmenu", (r) => {
      this.eventCall("edge:contextmenu", r);
    }), (a = this.graph) == null || a.on("edge:mouseenter", (r) => {
      const { edge: l } = r;
      l.attr("line/stroke", "#3685f288"), this.eventCall("edge:mouseenter", r);
    }), (o = this.graph) == null || o.on("edge:mouseleave", (r) => {
      const { edge: l } = r;
      l.attr("line/stroke", "#C0C7D0"), this.eventCall("edge:mouseleave", r);
    });
  }
  node() {
    var e, t, i, a, o, r, l;
    (e = this.graph) == null || e.on("node:click", (A) => {
      if (this.clickHandle != null) {
        clearTimeout(this.clickHandle), this.clickHandle = void 0;
        return;
      }
      this.clickHandle = setTimeout(() => {
        if (console.log("++++++++++++++++++", (/* @__PURE__ */ new Date()).getTime()), this.currentKeydown.has("Control"))
          return;
        const { node: n } = A;
        this.graphShadow.resetCurrentCell(n), this.graphForm.openDrawer(), this.eventCall("node:click", A), this.clickHandle = void 0;
      }, 500);
    }), (t = this.graph) == null || t.on("node:removed", (A) => {
      const { node: n } = A;
      this.graphShadow.removeCells([n]), this.eventCall("node:removed", A);
    }), (i = this.graph) == null || i.on("node:added", (A) => {
      this.eventCall("node:added", A);
    }), (a = this.graph) == null || a.on("node:moved", (A) => {
      this.eventCall("node:moved", A);
    }), (o = this.graph) == null || o.on("node:selected", (A) => {
      this.eventCall("node:selected", A);
    }), (r = this.graph) == null || r.on("node:unselected", (A) => {
      this.eventCall("node:unselected", A);
    }), (l = this.graph) == null || l.on("node:dblclick", (A) => {
      this.eventCall("node:dblclick", A);
    });
  }
  resetGraph(e) {
    return this.graph = e, this;
  }
  //
  onMounted(e) {
    return this.eventCall("mounted", e), this;
  }
  // 剪切板事件
  clipboard() {
    var e;
    (e = this.graph) == null || e.on("clipboard:changed", ({ cells: t }) => {
      t.forEach((i) => i.prop("sourceId", i.id)), this.graphShadow.resetClipboardCells(t);
    });
  }
  // 键盘事件
  keyevent() {
    const e = s(this.containerBox);
    e && (e.addEventListener("keydown", (t) => {
      this.currentKeydown.add(t.key);
    }), e.addEventListener("keyup", (t) => {
      this.currentKeydown.delete(t.key);
    }));
  }
  // 节点新增事件
  registerEvent() {
    return this.done(), this.edge(), this.node(), this.blank(), this.keyevent(), this.cell(), this.clipboard(), this;
  }
}
class K1 {
  constructor(e) {
    // 
    g(this, "graphShadow");
    g(this, "currentNode");
    //
    g(this, "graph");
    g(this, "graphFormFailCells", /* @__PURE__ */ new Set());
    // 状态判断，当 size == 0 时则验证通过
    g(this, "data", B({}));
    g(this, "status", /* @__PURE__ */ new Map());
    g(this, "cellColumn", /* @__PURE__ */ new Map());
    g(this, "visible", B(!1));
    this.graphShadow = e, this.currentNode = e.currentCell, oe(this.currentNode, (t, i) => {
      i && i.prop("isCurrent", !1), t && t.prop("isCurrent", !0);
    });
  }
  // 获取节点表单（id）
  // 
  setGraph(e) {
    this.graph = e;
  }
  //
  initCell(e) {
    const t = e.id;
    if (this.status.set(t, B({ result: !0, info: [] })), ne(this.data.value, t) || (this.data.value[t] = {}), !this.cellColumn.has(t)) {
      const i = [], a = this.graphShadow.getTabs(e);
      for (const o of a.value)
        if (o.type == "form" && o.validate == !0) {
          const r = o.column || [], l = o.prop;
          l ? i.push({ prop: l, tag: "div", cls: r }) : i.push(...r);
        }
      this.cellColumn.set(t, i);
    }
    return this;
  }
  getCellFormData(e) {
    return this.data.value[e.id];
  }
  getCellStatus(e) {
    return this.status.has(e.id) || this.status.set(e.id, B({ result: !0, info: [] })), this.status.get(e.id);
  }
  // // 初始化节点表单
  // initNode(id:string){
  //   if(!has(this.data,id)){
  //     this.data[id] = {}
  //   }
  //   return this.data[id] as Ref<Record<string,any>>
  // }
  // getNode(id:string){
  //   if(has(this.data,id)){
  //     return this.data[id] as Ref<Record<string,any>>
  //   }
  //   return this.initNode(id)
  // }
  // 初始化 form 数据
  initFormData(e) {
  }
  initCellFormData(e, t = {}) {
    const i = typeof e == "string" ? e : e.id;
    return ne(this.data.value, i) || (this.data.value[i] = t), this;
  }
  // 表单校验
  validateForm(e, t) {
    this.currentNode.value && e && t && t.validate == !0 && e.validate((i, a) => {
      var l, A, n;
      const o = this.getCellStatus(this.currentNode.value);
      if (!o)
        return;
      if (i) {
        o.value = { result: !0, info: [] }, (l = this.currentNode.value) != null && l.id && this.graphFormFailCells.delete(this.currentNode.value.id);
        return;
      }
      (A = this.currentNode.value) != null && A.id && this.graphFormFailCells.add((n = this.currentNode.value) == null ? void 0 : n.id);
      const r = Object.keys(a).map((p) => a[p].map((d) => d.message)).flat(1);
      console.log(":::::validate:::::", i, a, r, o), o.value = { result: i, info: r };
    });
  }
  async validateCell(e) {
    const t = e.id, i = this.data.value[t] || {}, a = this.cellColumn.get(t) || [], { status: o, info: r } = await g1.valideForm(i, a), l = this.getCellStatus(e);
    if (!l)
      return;
    if (o) {
      l.value = { result: !0, info: [] }, this.graphFormFailCells.delete(t);
      return;
    }
    this.graphFormFailCells.add(t);
    const A = Object.keys(r).map((n) => r[n].map((p) => p.message)).flat(1);
    l.value = { result: !1, info: A };
  }
  // 校验所有元素
  validateCells() {
    var t;
    const e = ((t = this.graph) == null ? void 0 : t.getCells()) || [];
    for (const i of e)
      this.validateCell(i);
  }
  // 图的状态， 所有 cells 的状态是否是校验通过的状态
  graphStatus() {
  }
  resetCellFormData(e, t = {}) {
    const i = typeof e == "string" ? e : e.id;
    Object.assign(this.data.value[i], t);
  }
  // 节点复制
  copyCells(e, t) {
    e.id, t.id;
  }
  //
  resetCellId(e, t) {
    ne(this.data, e) && this.resetCellFormData(t, this.data.value[e]);
  }
  //
  getGraphFormData() {
    var i;
    const e = ((i = this.graph) == null ? void 0 : i.getCells()) || [], t = {};
    for (const a of e) {
      const o = a.id;
      t[o] = this.data.value[o];
    }
    return t;
  }
  // 切换抽屉的打开方式
  toggleDrawerVisible() {
    this.visible.value = !this.visible.value;
  }
  //
  openDrawer(e) {
    e && (this.currentNode.value = e), this.visible.value = !0;
  }
  closeDrawer() {
    this.visible.value = !1;
  }
  //
}
const U1 = { class: "_search" }, Y1 = ["onMousedown", "title"], O1 = { class: "_label" }, J1 = /* @__PURE__ */ K({
  __name: "nodeList",
  props: {
    enabled: { type: Boolean },
    nodeList: {},
    initNodeFn: { type: Function },
    graph: {}
  },
  setup(c) {
    const e = c, t = B(), { graph: i, nodeList: a } = ae(e), { initNodeFn: o } = e, r = B(""), l = B(), A = B([]), n = je(r, 500), p = x(() => {
      const m = n.value;
      let h = a.value || [];
      m ? (h = h.filter(({ label: y, name: E, group: Q }) => y.includes(m) || E.includes(m) || (Q == null ? void 0 : Q.includes(m))), A.value.push(...h.map((y) => y.group || ""))) : A.value = [];
      const u = [], f = [];
      for (const y of h) {
        const { group: E = "默认分组" } = y, Q = u.indexOf(E);
        Q > -1 ? f[Q][1].push(y) : (u.push(E), f.push([E, [y]]));
      }
      return console.log("====>", h, f), f;
    }), d = () => {
      i.value && (l.value = new Xe({
        target: i.value,
        dndContainer: t.value,
        getDragNode: (m) => m.clone({ keepId: !0 }),
        getDropNode: (m) => m.clone({ keepId: !0 })
      }));
    }, C = (m, h) => {
      var E;
      const u = i.value;
      if (!u)
        return;
      l.value || d(), m.shape || (m.shape = "vue-node"), m.ports || (m.ports = {});
      const f = m.ports;
      if (f.groups || (f.groups = He.groups), o) {
        try {
          o(m).then((Q) => {
            var Y;
            return (Y = l.value) == null ? void 0 : Y.start(u.createNode(Q), h);
          });
        } catch (Q) {
          console.warn(Q);
        }
        return;
      }
      const y = {
        name: m.name,
        shape: m.shape,
        label: m.label,
        ports: f
      };
      (E = l.value) == null || E.start(u.createNode(y), h);
    };
    return ie(() => {
      d();
    }), (m, h) => (w(), M("div", {
      class: "_graph-node-list",
      ref_key: "graphNodeListRef",
      ref: t
    }, [
      D("div", U1, [
        b(s(Ee), {
          "prefix-icon": s(qe),
          modelValue: r.value,
          "onUpdate:modelValue": h[0] || (h[0] = (u) => r.value = u),
          size: "small",
          placeholder: "搜索节点"
        }, null, 8, ["prefix-icon", "modelValue"])
      ]),
      b(s(ze), {
        modelValue: A.value,
        "onUpdate:modelValue": h[1] || (h[1] = (u) => A.value = u)
      }, {
        default: L(() => [
          (w(!0), M(G, null, q(p.value, ([u, f]) => (w(), F(s(We), {
            key: u,
            title: u,
            name: u
          }, {
            default: L(() => [
              (w(!0), M(G, null, q(f, (y) => (w(), M("div", {
                class: "_node_item",
                onMousedown: (E) => C(y, E),
                title: y.label
              }, [
                b(s(z), { class: "_icon" }, {
                  default: L(() => [
                    b(s(se), {
                      name: y.icon || "#prep-virtual-node-font"
                    }, null, 8, ["name"])
                  ]),
                  _: 2
                }, 1024),
                D("span", O1, ce(y.label), 1)
              ], 40, Y1))), 256))
            ]),
            _: 2
          }, 1032, ["title", "name"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 512));
  }
}), P1 = (c, e) => {
  let t = {}, i = [...c];
  const { index: a, key: o, fn: r, iteratee: l } = e;
  if (a) {
    let A = !1, n = 1;
    for (const p of a)
      A = A || p == null, t[n++] = p == null ? i : i.splice(0, p);
    A && i.length > 0 && (t[n] = i);
  } else if (o) {
    const A = new Array().concat(o), n = i.map((p) => ({ ...p, $_key: A.map((d) => k(p, d) || "").join() }));
    t = me(n, "$_key");
  } else
    l ? t = me(i, l) : r && (t = r(i));
  return t;
}, T1 = (c, e) => {
  let t = [...c];
  const { key: i, fn: a, isReverse: o } = e;
  return i && (t = _e(t, i)), a && (t = a(t)), o && (t = t.reverse()), t;
}, Z1 = (c, e) => {
  let t = [...c];
  const { key: i = "id", blackList: a, whiteList: o, fn: r, items: l } = e;
  return a && (t = t.filter((A) => !a.includes(k(A, i)))), o && (t = t.filter((A) => o.includes(k(A, i)))), r && (t = t.filter((A) => r(A))), l && t.push(...l), t;
}, j1 = `## 组件使用说明

### 操作说明

#### 鼠标操作
单击节点 可以弹出节点表单
单击空白处 可以收起节点表单抽屉
鼠标滚轮可以缩放画布 ，缩放中心点在光标所在位置
鼠标右击可以打开右键菜单

#### 选择节点
按住 ctrl 键，通过鼠标单击可以选择节点，此时不会弹出节点表单
按住 ctrl 键，按下鼠标左键拖动可以框选

### 快捷键使用说明

### 
`, q1 = { class: "_menu" }, z1 = {
  key: 0,
  class: "_group"
}, W1 = /* @__PURE__ */ K({
  __name: "menu",
  props: {
    config: {},
    context: {}
  },
  setup(c, { expose: e }) {
    const t = c, { context: i } = t, { config: a } = ae(t), o = i == null ? void 0 : i.graphTools, r = i == null ? void 0 : i.markdownRef, l = [
      { title: "导出", key: "export", icon: $e, handle: () => o == null ? void 0 : o.export() },
      { title: "导入", key: "import", icon: e1, handle: () => o == null ? void 0 : o.import() },
      { title: "撤销", key: "undo", icon: t1, handle: () => o == null ? void 0 : o.undo() },
      { title: "恢复", key: "redo", icon: i1, handle: () => o == null ? void 0 : o.redo() },
      { title: "放大", key: "zoomBig", icon: o1, handle: () => o == null ? void 0 : o.zoomBig() },
      { title: "缩小", key: "zoomSmall", icon: a1, handle: () => o == null ? void 0 : o.zoomSmall() },
      { title: "保存", key: "save", icon: De, handle: () => o == null ? void 0 : o.zoomSmall() },
      { title: "帮助", key: "help", icon: r1, handle: () => {
        var n;
        return (n = r == null ? void 0 : r.value) == null ? void 0 : n.init(j1);
      } },
      { key: "fullscreen", title: x(() => o != null && o.isFullScreen.value ? "退出全屏" : "全屏"), type: x(() => o != null && o.isFullScreen.value ? "primary" : "default"), icon: Me, handle: () => o == null ? void 0 : o.toggleFullScreen() }
    ], A = x(() => {
      const { elems: n = [], filter: p, order: d, group: C } = s(a) || {}, m = [...l, ...s(n)];
      let h = m;
      return p && (h = Z1(m, p)), d && (h = T1(h, d)), C && (h = P1(h, C)), console.log("menu - list = ", h, n, p, d, C, a.value), h && !Array.isArray(h) && (h = Object.keys(h).map((u) => k(h, u))), h.push(l[8]), h;
    });
    return e({}), (n, p) => (w(), M("div", q1, [
      (w(!0), M(G, null, q(A.value, (d) => (w(), M(G, null, [
        Array.isArray(d) ? (w(), M("div", z1, [
          (w(!0), M(G, null, q(d, (C) => (w(), M(G, null, [
            C.tag ? (w(), F(s(R), {
              key: 0,
              elem: d,
              params: s(i)
            }, null, 8, ["elem", "params"])) : (w(), F(s(S), {
              key: 1,
              onClick: C.handle,
              title: C.title,
              icon: C.icon
            }, null, 8, ["onClick", "title", "icon"]))
          ], 64))), 256))
        ])) : (w(), M(G, { key: 1 }, [
          d.tag ? (w(), F(s(R), {
            key: 0,
            elem: d,
            params: s(i)
          }, null, 8, ["elem", "params"])) : (w(), F(s(S), {
            key: 1,
            onClick: d.handle,
            title: d.title,
            icon: d.icon,
            size: "small"
          }, null, 8, ["onClick", "title", "icon"]))
        ], 64)),
        Array.isArray(d) ? (w(), F(s(O), {
          key: 2,
          direction: "vertical"
        })) : N("", !0)
      ], 64))), 256))
    ]));
  }
}), X1 = {
  key: 1,
  flex: "",
  "justify-end": ""
}, _1 = /* @__PURE__ */ K({
  __name: "dialog",
  props: {
    config: { default: () => ({
      showClose: !1,
      closeOnClickModal: !1,
      showFooter: !0
    }) },
    context: {},
    elem: {}
  },
  setup(c, { expose: e }) {
    const t = c, { config: i, context: a } = t, { elem: o } = ae(t), r = v(o.value || {}), { showFooter: l, ...A } = i, n = v(A), p = B(!1), d = (f) => {
      f && (r.value = f), r.value && (p.value = !0);
    }, C = () => {
      p.value = !1;
    }, m = (f, y) => {
      typeof f == "string" ? n.value[f] = y : n.value = re({}, A, f);
    }, h = () => {
      a.graphEvents.hasEvent("dialog:cancel") ? a.graphEvents.eventCall("dialog:cancel") : C();
    }, u = () => {
      a.graphEvents.hasEvent("dialog:submit") ? a.graphEvents.eventCall("dialog:submit") : C();
    };
    return oe(o, (f) => {
      f && (r.value = f);
    }), e({
      open: d,
      close: C,
      setConfig: m
    }), (f, y) => (w(), F(s(s1), pe({
      class: "_graph-dialog",
      modelValue: p.value,
      "onUpdate:modelValue": y[0] || (y[0] = (E) => p.value = E)
    }, n.value, { "destroy-on-close": "" }), {
      default: L(() => [
        b(s(R), {
          elem: r.value,
          params: s(a)
        }, null, 8, ["elem", "params"]),
        s(l) ? (w(), F(s(O), { key: 0 })) : N("", !0),
        s(l) ? (w(), M("div", X1, [
          b(s(S), {
            onClick: ge(h, ["stop"])
          }, {
            default: L(() => [
              fe("取消")
            ]),
            _: 1
          }),
          b(s(S), {
            type: "primary",
            onClick: ge(u, ["stop"])
          }, {
            default: L(() => [
              fe("确定")
            ]),
            _: 1
          })
        ])) : N("", !0)
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
});
class $1 {
  constructor(e) {
    g(this, "config", {});
    g(this, "defaultConfig", {
      Transform: {
        resizing: {
          enabled(e) {
            return e.prop("name").indexOf("trans") != -1;
          }
        }
      },
      Selection: {
        enabled: !0,
        multiple: !0,
        rubberband: !0,
        movable: !0,
        showNodeSelectionBox: !0,
        modifiers: ["ctrl"]
      },
      Clipboard: {
        enabled: !0
      },
      History: {
        enabled: !0
      }
    });
    //
    g(this, "names", ["Transform", "Selection", "Clipboard", "History"]);
    //
    g(this, "plugins", {
      Transform: l1,
      Selection: n1,
      Clipboard: c1,
      History: A1
    });
    e && (this.config = e, this.names = Object.keys(e));
  }
  //
  usePlugins(e) {
    const t = this.names.filter((i) => this.plugins[i] != null).map((i) => new this.plugins[i](this.config[i] || this.defaultConfig[i]));
    for (const i of t)
      e.use(i);
  }
}
class e5 {
  constructor(e = {}) {
    //
    g(this, "nodelist", []);
    //
    g(this, "graph");
    //
    // 模式
    g(this, "mode", B("edit"));
    //
    g(this, "cells", /* @__PURE__ */ new Map());
    //
    g(this, "currentCell", v());
    // 已选的节点集合
    g(this, "selectedCells", v([]));
    // 剪切板中复制的节点集合
    g(this, "clipboardCells", v([]));
    //
    g(this, "defaultNodeMarkup", he);
    this.initMetadata(e.nodelist || []);
  }
  //
  initCell(e) {
    var r, l, A;
    const t = typeof e == "string" ? (r = this.graph) == null ? void 0 : r.getCellById(e) : e;
    if (!t || this.cells.has(t.id))
      return;
    const i = this.getMetadata(t) || {};
    let a = k(i, "status.aggregateSnapshot.runStatus") || "";
    const o = {
      id: t.id,
      cell: t,
      status: B({}),
      // step:ref("init"),
      step: B(a === "Disabled" ? "disabled" : "init"),
      label: B(t.prop("label") || i.label || ""),
      desc: B(t.prop("desc") || i.desc || ""),
      icon: t.prop("icon") || (i == null ? void 0 : i.icon) || "#prep-virtual-node-font",
      name: t.prop("name") || i.name,
      tabs: v([]),
      metadata: i
    };
    t.isEdge() && (o.source = B(((l = t == null ? void 0 : t.source) == null ? void 0 : l.cell) || ""), o.target = B(((A = t == null ? void 0 : t.target) == null ? void 0 : A.cell) || ""), o.labelConfig = v({})), t.isNode() && (o.inCells = B(/* @__PURE__ */ new Set()), o.outCells = B(/* @__PURE__ */ new Set())), this.cells.set(t.id, o);
  }
  //
  updateEdge(e) {
    const t = e.id, i = this.get(e), a = e.source, o = e.target, r = this.cells.get(a.cell);
    a.cell && (i.source.value = a.cell, r == null || r.outCells.value.add(t)), o.cell && (i.target.value = o.cell, r == null || r.inCells.value.add(t));
  }
  //
  setGraph(e) {
    this.graph = e;
  }
  //
  add(e) {
    const t = typeof e == "string" ? e : e.id;
    this.cells.has(t) || this.initCell(e);
  }
  // 
  del(e) {
    const t = e.id;
    this.cells.delete(t);
  }
  //
  get(e, t) {
    var a;
    const i = typeof e == "string" ? e : e.id;
    return !this.cells.has(i) && typeof e != "string" && this.initCell(e), t ? (a = this.cells.get(i)) == null ? void 0 : a[t] : this.cells.get(i);
  }
  getEdgeData(e) {
    return this.get(e);
  }
  getNodeData(e) {
    return this.get(e);
  }
  // 
  set(e, t, i) {
    if (!e)
      return;
    const a = typeof e == "string" ? e : e.id;
    this.cells.has(a) || this.add(e);
    const o = this.cells.get(a);
    o && (o[t] = i), typeof e == "object" && e.trigger(`change:${t}`, { cell: e, data: o, current: i });
  }
  setTabs(e, t) {
    const i = this.get(e);
    i.tabs.value = t;
  }
  getTabs(e) {
    return this.get(e).tabs;
  }
  setLabel(e, t) {
    const i = this.get(e);
    i.label.value = t;
  }
  //
  resetCurrentCell(e) {
    e ? this.set(e, "isCurrent", !0) : this.currentCell.value && this.set(this.currentCell.value, "isCurrent", !1), this.currentCell.value = e;
  }
  //
  resetSelectedCells(e = []) {
    this.selectedCells.value = e, e.length > 0 ? te.success(`已选中 [ ${e.length} ] 个元素`) : te.info("取消选中");
  }
  //
  removeCells(e = []) {
    var i, a;
    const t = e.map((o) => o.id);
    this.currentCell.value && t.includes(this.currentCell.value.id) && this.resetCurrentCell();
    for (const o of e) {
      if (o.isEdge()) {
        const r = o.id, l = this.get(o), A = l.source.value, n = l.target.value;
        A && ((i = this.cells.get(A)) == null ? void 0 : i.outCells.value).delete(r), n && ((a = this.cells.get(n)) == null ? void 0 : a.outCells.value).delete(r);
      }
      this.del(o);
    }
    this.selectedCells.value = this.selectedCells.value.filter((o) => !t.includes(o.id));
  }
  //
  resetClipboardCells(e = []) {
    this.clipboardCells.value = e, e.length > 0 && te.success(`已复制 [ ${e.length} ] 个元素`);
  }
  //
  addSelectedCell(e) {
    const t = new Set(this.selectedCells.value);
    t.add(e), this.selectedCells.value = Array.from(t);
  }
  delSelectedCell(e) {
    this.selectedCells.value = this.selectedCells.value.filter((t) => t != e);
  }
  toggleSelectedCell(e) {
    this.selectedCells.value.map((i) => i.id).includes(e.id) ? this.delSelectedCell(e) : this.addSelectedCell(e);
  }
  clearSelectedCells() {
    this.selectedCells.value = [];
  }
  //
  initMetadata(e) {
    e && e.length > 0 && (this.nodelist = e);
  }
  setMetadata(e) {
    const t = e.name;
    if (t) {
      const a = this.nodelist.map((o) => o.name).indexOf(t);
      a >= 0 ? this.nodelist[a] = e : this.nodelist.push(e);
    }
  }
  getMetadata(e) {
    var a;
    const t = e.prop("name");
    return ((a = this.nodelist.filter((o) => o.name == t)) == null ? void 0 : a[0]) || e.data || { name: t };
  }
  upCellMetadata(e, t, i) {
    const a = this.getMetadata(e);
    t && i && (a[t] = i), this.setMetadata(a);
  }
  copyCells(e, t) {
    const i = e.id, a = t.id;
    if (this.cells.has(i)) {
      const o = this.cells.get(i);
      o && (o.id = a, o.cell = t, this.cells.set(a, o));
    }
  }
  //
  resetNodeList(e) {
    return this.nodelist = e, this;
  }
  //
  resetDefaultNodeMarkup(e) {
    return e && (this.defaultNodeMarkup = e), this;
  }
  resetCellId(e, t) {
    if (this.cells.has(e)) {
      const i = this.cells.get(e);
      i && (i.id = t, this.cells.set(t, i));
    }
  }
  getTabsData(e) {
    return this.getByKey(e, "tabs");
  }
  getByKey(e, t) {
    const i = this.get(e), a = i.metadata || this.getMetadata(i), o = i.cell.data || {};
    return k(i, t) || k(a, t) || k(o, t);
  }
  setEdgeLabelConfig(e, t) {
    var a;
    const i = typeof e == "string" ? (a = this.graph) == null ? void 0 : a.getCellById(e) : e;
    if (i && i.isEdge()) {
      const o = this.getEdgeData(i);
      o.labelConfig.value = t;
    }
  }
  getEdgeLabelConfig(e) {
    return this.getEdgeData(e).labelConfig;
  }
}
class t5 {
  constructor(e) {
    g(this, "elsX6Ref");
    g(this, "graph");
    //
    g(this, "zoomSize", 1);
    g(this, "zoomSpeed", 0.1);
    //
    g(this, "canUndo", B(!1));
    g(this, "canRedo", B(!1));
    g(this, "isFullScreen", B(!1));
    e.elsX6Ref && (this.elsX6Ref = e.elsX6Ref);
  }
  // 初始化
  init(e) {
    var t, i;
    this.graph = e, (t = this.graph) == null || t.on("history:change", () => {
      var a, o;
      this.canUndo.value = (a = this.graph) == null ? void 0 : a.canUndo(), this.canRedo.value = (o = this.graph) == null ? void 0 : o.canRedo();
    }), (i = this.graph) == null || i.on("scale", (a) => {
      this.zoomSize = a.sx;
    });
  }
  // 放大
  zoomBig() {
    var e;
    this.zoomSize += this.zoomSpeed, (e = this.graph) == null || e.scale(this.zoomSize);
  }
  // 缩小
  zoomSmall() {
    var e;
    this.zoomSize -= this.zoomSpeed, (e = this.graph) == null || e.scale(this.zoomSize);
  }
  // 适合
  zoomFit() {
    this.graph && (this.graph.zoomToFit(), this.zoomSize = this.graph.zoom());
  }
  // 撤销
  undo() {
    var e;
    (e = this.graph) == null || e.undo();
  }
  // 反撤销
  redo() {
    var e;
    (e = this.graph) == null || e.redo();
  }
  // 清空历史队列 清空之后，不可撤销和反撤销
  cleanHistory() {
    var e;
    (e = this.graph) == null || e.cleanHistory();
  }
  // 全屏
  /* 
    全屏是否可用：Document.fullscreenEnabled
  开启全屏：Element.requestFullScreen()
  退出全屏：Element.exitFullscreen()
  获取全屏元素：document.mozFullScreenElement
  监听全屏模式变化: fullscreenchange
    */
  // 退出全屏
  fullScreen() {
    var e, t;
    document.fullscreenEnabled && ((t = (e = this.elsX6Ref) == null ? void 0 : e.value) == null || t.requestFullscreen(), this.isFullScreen.value = !0);
  }
  exitFullScreen() {
    document.exitFullscreen(), this.isFullScreen.value = !1;
  }
  toggleFullScreen() {
    this.isFullScreen.value ? this.exitFullScreen() : this.fullScreen();
  }
  // 导出
  export() {
  }
  // 导入
  import() {
  }
}
const i5 = {
  key: 0,
  class: "_edge-label-box"
}, o5 = { key: 0 }, a5 = {
  class: /* @__PURE__ */ de(["_running-box"])
}, r5 = /* @__PURE__ */ D("span", { style: { "--i": "1" } }, null, -1), s5 = /* @__PURE__ */ D("span", { style: { "--i": "2" } }, null, -1), l5 = /* @__PURE__ */ D("span", { style: { "--i": "3" } }, null, -1), n5 = /* @__PURE__ */ D("span", { style: { "--i": "4" } }, null, -1), c5 = /* @__PURE__ */ D("span", { style: { "--i": "5" } }, null, -1), A5 = /* @__PURE__ */ D("span", { style: { "--i": "6" } }, null, -1), d5 = /* @__PURE__ */ D("span", { style: { "--i": "7" } }, null, -1), p5 = /* @__PURE__ */ D("span", { style: { "--i": "8" } }, null, -1), h5 = /* @__PURE__ */ D("span", { style: { "--i": "9" } }, null, -1), C5 = /* @__PURE__ */ D("span", { style: { "--i": "10" } }, null, -1), g5 = [
  r5,
  s5,
  l5,
  n5,
  c5,
  A5,
  d5,
  p5,
  h5,
  C5
], f5 = {
  class: "_header",
  "text-14": ""
}, u5 = { class: "_title" }, w5 = {
  key: 0,
  class: "_content"
}, m5 = /* @__PURE__ */ K({
  __name: "edgeLabel",
  props: {
    edge: {},
    context: {},
    config: {}
  },
  setup(c) {
    var T, Z;
    const e = c, { edge: t, context: i } = e, { graphShadow: a, graph: o, graphForm: r } = i, l = x(() => {
      const I = e.config, H = a.getEdgeLabelConfig(t).value || {};
      return { enabled: !0, icon: 0, icons: [d1], prop: "edge", params: {}, title: "", ...I, ...H };
    }), { icon: A, prop: n, params: p } = s(l), d = r.getCellFormData(t), C = a.getEdgeData(t), m = C.source, h = C.target, u = C.step, f = C.label, y = (T = o.value) == null ? void 0 : T.getCellById(s(m)), E = (Z = o.value) == null ? void 0 : Z.getCellById(s(h)), Q = B(s(A)), Y = x(() => {
      const I = l.value.icons[s(Q)];
      return I.icon ? I : { icon: I };
    }), J = B(!1), P = B(!1);
    let U;
    const V = (I) => {
      window.clearTimeout(U), I === !1 ? U = setTimeout(() => {
        J.value = !1;
      }, 500) : J.value = !0;
    }, W = () => {
      const I = l.value.icons;
      if (s(I).length == 1)
        return;
      Q.value >= I.length - 1 ? Q.value = 0 : Q.value++;
      const H = I[Q.value];
      d[n] = typeof H == "string" ? Q.value : H.value;
    };
    return ie(() => {
    }), (I, H) => l.value.enabled ? (w(), M("div", i5, [
      b(s(Fe), {
        placement: "top",
        width: "auto",
        teleported: !1,
        visible: P.value || J.value,
        disabled: l.value.disabled,
        "show-arrow": !1
      }, {
        reference: L(() => [
          D("div", {
            class: "_icon-box",
            onClick: W,
            onMouseenter: H[0] || (H[0] = () => V(!0)),
            onMouseleave: H[1] || (H[1] = () => V(!1))
          }, [
            b(s(z), {
              class: de([])
            }, {
              default: L(() => [
                (w(), F(Se(Y.value.icon)))
              ]),
              _: 1
            }),
            s(f) ? (w(), M("span", o5, ce(s(f)), 1)) : N("", !0),
            Be(D("div", a5, g5, 512), [
              [ye, s(u) == "running"]
            ])
          ], 32)
        ]),
        default: L(() => [
          D("div", {
            class: "_popover-box",
            onMouseenter: H[3] || (H[3] = () => V(!0)),
            onMouseleave: H[4] || (H[4] = () => V(!1))
          }, [
            D("div", f5, [
              D("b", u5, ce(l.value.title), 1),
              b(s(S), {
                link: "",
                type: P.value ? "primary" : "info",
                onClick: H[2] || (H[2] = (le) => P.value = !P.value)
              }, {
                icon: L(() => [
                  b(s(se), {
                    name: "#icon-tuding",
                    noel: !0
                  })
                ]),
                _: 1
              }, 8, ["type"])
            ]),
            l.value.elem ? (w(), M("div", w5, [
              b(s(R), {
                elem: l.value.elem,
                params: { edge: s(t), sourceNode: s(y), targetNode: s(E), ...s(i), ...s(p) }
              }, null, 8, ["elem", "params"])
            ])) : N("", !0)
          ], 32)
        ]),
        _: 1
      }, 8, ["visible", "disabled"])
    ])) : N("", !0);
  }
}), B5 = /* @__PURE__ */ K({
  __name: "markdown",
  props: {
    value: {}
  },
  setup(c, { expose: e }) {
    const i = ke(c, "value"), a = B(i.value || ""), o = (d) => {
      /\.md$/.test(d) && fetch(d).then((C) => C.text()).then((C) => {
        n(C);
      });
    }, r = (d) => {
    }, l = async (d) => {
      if (d) {
        const C = await d();
        C && n(C);
      }
    }, A = (d) => {
    }, n = (d) => {
      a.value = d, p.value = !0;
    }, p = B(!1);
    return oe(i, (d = "") => {
      a.value = d;
    }), e({
      init: n,
      initByFn: l,
      initByApi: r,
      initByFilePath: o,
      initByCell: A,
      visible: p
    }), (d, C) => (w(), F(s(Ie), {
      "w-full": "",
      "h-full": "",
      "modal-class": "_md-drawer",
      direction: "rtl",
      modelValue: p.value,
      "onUpdate:modelValue": C[0] || (C[0] = (m) => p.value = m),
      modal: !1
    }, {
      default: L(() => [
        b(s(f1), { value: a.value }, null, 8, ["value"])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
});
class y5 {
  // 
  constructor(e) {
    //
    g(this, "context");
    g(this, "graphShadow");
    //
    g(this, "config", {});
    g(this, "graph");
    g(this, "box");
    g(this, "menus", {});
    g(this, "menu", v());
    g(this, "visible", B(!1));
    g(this, "key", B(0));
    g(this, "offset", [10, 10]);
    g(this, "x", B(0));
    g(this, "y", B(0));
    //
    g(this, "params", v({}));
    const { config: t, context: i } = e;
    this.config = t || {}, this.graphShadow = i.graphShadow, this.graph = i.graph, this.menus = this.initMenus(), this.context = i;
  }
  //
  setGraph(e) {
    return this;
  }
  setDomBox(e) {
    return this.box = e, this;
  }
  //
  initMenus() {
    const e = this.config.node || [], t = this.config.edge || [], i = this.config.blank || [], o = this.config.useDefaultMenu ?? !0 ? { node: [...M1], edge: [...D1], blank: [...I1] } : { node: [], edge: [], blank: [] };
    return e.length > 0 && (o.node = new Array().concat(e, o.node.length > 0 ? [{ tag: O }, o.node] : [])), t.length > 0 && (o.edge = new Array().concat(t, o.edge.length > 0 ? [{ tag: O }, o.edge] : [])), i.length > 0 && (o.blank = new Array().concat(i, o.blank.length > 0 ? [{ tag: O }, o.blank] : [])), o;
  }
  // 创建右键菜单
  createContextmenu(e, t) {
    var o;
    const i = t ? t.isNode() ? "node" : "edge" : "blank";
    let a = this.menus[i] || [];
    if (i === "node") {
      const r = (t == null ? void 0 : t.getData()) || {}, l = r == null ? void 0 : r.contextmenu;
      l && Array.isArray(l) && l.length > 0 && (a = [...l, { tag: O }, ...a]);
    }
    this.x.value = e.x + this.offset[0], this.y.value = e.y + this.offset[1], this.params.value = { ...this.context, cell: t, graph: (o = this.graph) == null ? void 0 : o.value, contextmenu: this, selectedCells: this.graphShadow.selectedCells, clipboardCells: this.graphShadow.clipboardCells }, this.menu.value = { tag: "div", class: "_context-menu", cls: a }, this.key.value = (/* @__PURE__ */ new Date()).getTime(), this.visible.value = !0;
  }
  close() {
    this.visible.value = !1;
  }
  clear() {
    var e;
    (e = document.querySelector("#contextmenu_div")) == null || e.remove();
  }
}
const E5 = /* @__PURE__ */ K({
  __name: "contextmenu",
  props: {
    context: {},
    config: { default: () => ({}) }
  },
  setup(c, { expose: e }) {
    const t = c, i = new y5(t);
    return e({
      graphContextmenu: i,
      close: () => {
        i.close();
      },
      open: (r, l) => {
        i.createContextmenu(r, l);
      }
    }), (r, l) => Be((w(), M("div", {
      class: "_contextmenu-box",
      contenteditable: "false",
      style: Ne(`position:absolute;z-index:9999;left:${s(i).x.value}px;top:${s(i).y.value}px`)
    }, [
      (w(), F(s(R), {
        key: s(i).key.value,
        elem: s(i).menu.value,
        params: s(i).params.value,
        context: { params: { ElMessage: s(te), ElNotification: s(p1) } }
      }, null, 8, ["elem", "params", "context"]))
    ], 4)), [
      [ye, s(i).visible.value]
    ]);
  }
}), F5 = { class: "_box-main" }, Q5 = { class: "_main-content" }, D5 = {
  name: "ElsX6"
}, M5 = /* @__PURE__ */ K({
  ...D5,
  props: {
    config: {},
    graphConfig: { default: () => ({}) },
    nodeListConfig: {},
    model: {},
    menuConfig: { default: () => ({ enabled: !0 }) },
    drawerConfig: {},
    dialogConfig: {},
    pluginsConfig: {},
    contextmenuConfig: { default: () => ({}) },
    edgeLabelConfig: { default: () => ({}) },
    defaultNodeMarkup: { default: () => he },
    register: {},
    events: { default: () => ({}) },
    viewModel: { type: Boolean }
  },
  setup(c, { expose: e }) {
    const t = c, { viewModel: i, nodeListConfig: a } = ae(t), { graphConfig: o, menuConfig: r, pluginsConfig: l, contextmenuConfig: A, edgeLabelConfig: n, defaultNodeMarkup: p, register: d, events: C } = t, m = h1(), h = v(), u = B(), f = B(), y = B(), E = B(), Q = B(), Y = B(), J = B(), P = B(), U = new e5().resetDefaultNodeMarkup(p), V = new K1(U), W = new R1({ graphShadow: U, graphForm: V, contextmenuRef: Y, events: C, containerBox: y }), T = new $1(l), Z = new t5({ elsX6Ref: u }), I = {
      graph: h,
      graphShadow: U,
      graphForm: V,
      graphEvents: W,
      graphPlugins: T,
      markdownRef: E,
      graphTools: Z,
      dialogRef: Q,
      elsX6Ref: u,
      drawerRef: J
    };
    return j("GRAPH-SHADOW", U), j("GRAPH", h), j("GRAPH-FORM", V), j("GRAPH-MARKDOWN", E), j("GRAPH-CONTEXT", I), H1(), b1(), d && d(Ae), ie(() => {
      const H = re(B1, o);
      h.value = Ge(new Ae({
        ...H,
        // 自定义 边的弹出展示
        onEdgeLabelRendered: (le) => {
          const { selectors: X, edge: _ } = le, Ce = X.foContent;
          Ce && Ve(
            Re(m5, {
              edge: _,
              config: n,
              context: I
            }),
            Ce
          );
        },
        container: f.value
      })), T.usePlugins(h.value), U.setGraph(h.value), V.setGraph(h.value), Z.init(h.value), W.resetGraph(h.value).registerEvent().onMounted(I);
    }), e({
      graph: h
    }), (H, le) => {
      var X, _;
      return w(), M("div", {
        ref_key: "elsX6Ref",
        ref: u,
        class: "ElsX6 w-full h-full bg-#fff"
      }, [
        b(G1),
        D("div", F5, [
          (X = s(a)) != null && X.enabled || !s(i) ? (w(), F(J1, pe({
            key: 0,
            graph: h.value
          }, s(a)), null, 16, ["graph"])) : N("", !0),
          D("div", Q5, [
            ((_ = s(r)) == null ? void 0 : _.enabled) !== !1 || !s(i) ? (w(), F(W1, {
              key: 0,
              ref_key: "menuRef",
              ref: P,
              class: "_menu",
              config: s(r),
              context: I
            }, null, 8, ["config"])) : N("", !0),
            D("div", {
              ref_key: "containerBox",
              ref: y,
              class: "_container-box",
              contenteditable: "true"
            }, [
              D("div", {
                ref_key: "container",
                ref: f,
                class: "_graph-container",
                contenteditable: "false"
              }, null, 512),
              b(s(m)),
              b(E5, {
                ref_key: "contextmenuRef",
                ref: Y,
                context: I,
                config: s(A)
              }, null, 8, ["config"])
            ], 512),
            b(V1, {
              ref_key: "drawerRef",
              ref: J,
              config: H.drawerConfig,
              context: I
            }, null, 8, ["config"]),
            b(B5, {
              ref_key: "markdownRef",
              ref: E
            }, null, 512),
            b(_1, {
              ref_key: "dialogRef",
              ref: Q,
              context: I
            }, null, 512)
          ])
        ])
      ], 512);
    };
  }
}), G5 = {
  install: (c) => {
    c.component("els-x6", M5);
  }
};
export {
  M5 as ElsX6,
  G5 as default
};
