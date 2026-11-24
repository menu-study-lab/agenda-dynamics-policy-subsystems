/*
 * All visible slide copy and speaker notes live in this file.
 * Edit text here without touching layout or interaction code.
 */
window.DECK_DATA = {
  meta: {
    title: "议程动力学与政策子系统",
    subtitle: "政策意象、政策场域与政策变化",
    version: "content-lock-v4",
    totalMinutes: 20
  },

  timelineEvents: [
    {
      year: 1965,
      label: "安全专家提出质疑",
      shortLabel: "安全专家",
      type: "内部专家挑战",
      detail: "AEC内部技术专家开始质疑安全决策。"
    },
    {
      year: 1968,
      label: "媒体报道转负",
      shortLabel: "媒体转负",
      type: "政策意象变化",
      detail: "负面报道开始超过正面报道。"
    },
    {
      year: 1969,
      label: "国会议题转负",
      shortLabel: "国会转负",
      type: "管辖权竞争",
      detail: "NEPA要求联邦许可程序提供环境影响说明。"
    },
    {
      year: 1971,
      label: "法院进入决策",
      shortLabel: "法院进入",
      type: "司法入口打开",
      detail: "法院裁定NEPA可追溯适用于AEC许可。"
    },
    {
      year: 1972,
      label: "州与地方介入",
      shortLabel: "州与地方",
      type: "场域外扩",
      detail: "选址、费率与地方治理进入争议。"
    },
    {
      year: 1974,
      label: "AEC拆分",
      shortLabel: "AEC拆分",
      type: "制度重组",
      detail: "AEC分为NRC和ERDA。"
    },
    {
      year: 1977,
      label: "JCAE撤销",
      shortLabel: "JCAE撤销",
      type: "子系统解体",
      detail: "国会原子能联合委员会被撤销。"
    },
    {
      year: 1979,
      label: "三哩岛事故",
      shortLabel: "三哩岛",
      type: "注意力强化",
      detail: "反应堆部分熔毁，公众关注显著上升。"
    }
  ],

  slides: [
    {
      id: "cover",
      titleEn: "Agenda Dynamics and Policy Subsystems",
      shellClass: "cover-slide",
      nav: "封面",
      html: `
        <div class="cover-layout">
          <section class="cover-copy">
            <div class="eyebrow reveal">PAPER PRESENTATION · 1991</div>
            <p class="cover-en-title reveal d1">Agenda Dynamics and Policy Subsystems</p>
            <h1 class="cover-title reveal d1">议程动力学<br><span>与政策子系统</span></h1>
            <p class="cover-subtitle reveal d2">政策意象、政策场域与政策变化</p>
          </section>

          <section class="field-orbit reveal d1" aria-label="政策场域结构示意">
            <div class="orbit orbit-a"></div>
            <div class="orbit orbit-b"></div>
            <div class="field-core">
              <small>POLICY VENUE</small>
              <strong>政策<br>场域</strong>
            </div>
            <span class="orbit-node n1">监管</span>
            <span class="orbit-node n2">媒体</span>
            <span class="orbit-node n3">国会</span>
            <span class="orbit-node n4">法院</span>
            <span class="orbit-node n5">州与地方</span>
            <span class="orbit-node n6">市场</span>
          </section>
        </div>

        <section class="author-line reveal d3" aria-label="作者介绍">
          <button type="button" class="author-card" data-author="baumgartner" aria-label="查看 Frank R. Baumgartner 简介">
            <img src="assets/frank_baumgartner.jpg" alt="Frank R. Baumgartner">
            <div>
              <h3>Frank R. Baumgartner</h3>
              <p>政策注意力与议程设置</p>
            </div>
          </button>
          <div class="author-connector" aria-hidden="true">
            <span></span>
            <b>Policy Agendas Project</b>
          </div>
          <button type="button" class="author-card" data-author="jones" aria-label="查看 Bryan D. Jones 简介">
            <img src="assets/bryan_jones.jpeg" alt="Bryan D. Jones">
            <div>
              <h3>Bryan D. Jones</h3>
              <p>制度摩擦与政策议程</p>
            </div>
          </button>
          <p class="author-note">点击人物查看简介 · 1991年共同任教于德州农工大学 · 姓氏字母顺序署名 · 明确标注同等贡献</p>
        </section>

        <p class="apa-foot reveal d3">Baumgartner, F. R., &amp; Jones, B. D. (1991). Agenda dynamics and policy subsystems. <em>The Journal of Politics, 53</em>(4), 1044–1074. https://doi.org/10.2307/2131866</p>
      `,
      notes: "Baumgartner和Jones长期合作研究公共政策议题如何进入政府议程。两人共同推动Policy Agendas Project，以系统数据追踪政府长期关注哪些问题，也是间断—均衡研究的重要推动者。1991年发表这篇文章时，两人都在德克萨斯农工大学任教。德州农工大学是美国重要的公立研究型大学。论文按作者姓氏字母顺序署名，并注明两人对这项研究作出了同等贡献。"
    },
    {
      id: "claim",
      titleEn: "Stability and Change Share One Process",
      nav: "核心命题",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">02 · CORE ARGUMENT</div>
            <h2 class="slide-title reveal d1">稳定与剧变由同一过程解释</h2>
          </div>
          <div class="chapter-mark reveal d2">02</div>
        </header>

        <div class="claim-layout">
          <blockquote class="quote-block reveal d2">
            <p>“In this paper, we argue a single process can explain both periods of extreme stability and short bursts of rapid change.”</p>
            <footer>“本文认为，同一个过程可以解释长期的高度稳定与短促的剧烈变化。”</footer>
            <cite>p. 1044</cite>
          </blockquote>
          <div class="claim-core reveal d3">
            <div class="core-side image-side">
              <small>POLICY IMAGE</small>
              <strong>政策意象</strong>
              <span>问题如何被理解</span>
            </div>
            <div class="core-cross">×</div>
            <div class="core-side venue-side">
              <small>POLICY VENUE</small>
              <strong>政策场域</strong>
              <span>争议在哪里处理</span>
            </div>
          </div>
          <blockquote class="quote-block compact reveal d3">
            <p>“This process is the interaction of beliefs and values concerning a particular policy, which we term the policy image, with the existing set of political institutions—the venues of policy action.”</p>
            <footer>“这一过程，是特定政策的信念与价值，即‘政策意象’，与既有政治制度，即‘政策行动场域’之间的互动。”</footer>
            <cite>p. 1044</cite>
          </blockquote>
        </div>
      `,
      notes: "两位作者提出的核心判断，是把稳定与剧变放在同一个过程中。政策如何被定义，会改变哪些行动者关注问题；争议在哪里处理，会改变谁拥有参与资格和决策优势。两个变量相互作用后，政策过程可能保护现有安排，也可能放大新的变化。"
    },
    {
      id: "puzzle",
      titleEn: "Incrementalism and Rapid Change",
      nav: "经验悖论",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">03 · EMPIRICAL PUZZLE</div>
            <h2 class="slide-title reveal d1">渐进主义与短促转向并存</h2>
          </div>
          <div class="chapter-mark reveal d2">03</div>
        </header>

        <blockquote class="quote-strip reveal d2">
          <p>“Rapid change in public policy outcomes often occurs, but most theories of pluralism emphasize only incrementalism.”</p>
          <footer>公共政策结果经常发生快速变化，但多数多元主义理论只强调渐进主义。<cite>p. 1044</cite></footer>
        </blockquote>

        <section class="puzzle-stage timeline-build reveal d3">
          <div class="stable-zone">
            <span class="zone-label">长期稳定</span>
            <div class="stable-line"></div>
          </div>
          <div class="rupture-zone">
            <span class="zone-label hot">短促转向</span>
            <div class="rupture-path"></div>
          </div>
          <div class="event-row">
            <article class="event-node crystal">
              <b>1954</b>
              <span>“原子能促和平”<br><small>Atoms for Peace</small></span>
            </article>
            <article class="event-node">
              <b>1968</b>
              <span>负面报道<br>首次超过正面</span>
            </article>
            <article class="event-node amber">
              <b>1974</b>
              <span>原子能委员会<br>（AEC）拆分</span>
            </article>
            <article class="event-node red">
              <b>1977</b>
              <span>国会原子能<br>联合委员会撤销</span>
            </article>
            <article class="event-node red">
              <b>1979</b>
              <span>三哩岛核事故<br>公众态度变化</span>
            </article>
          </div>
        </section>

        <p class="source-line timeline-source">pp. 1044, 1052–1058, Table 2</p>
      `,
      notes: "核能政策提供了检验这一判断的经验背景。1954年前后，美国修订《原子能法》，推动“原子能促和平”叙事，把核能与能源充裕、技术进步和国家能力联系起来。多元主义理论强调制度惯性、既得利益和交易成本，能够解释渐进调整。美国核能政策却在1970年代出现原子能委员会被拆分、国会原子能联合委员会被撤销、公众态度变化与资本市场重估。事件只有经过问题定义、注意力变化和场域进入，才会转化为具体的政策结果。"
    },
    {
      id: "concepts",
      titleEn: "Three Foundational Concepts",
      nav: "基础概念",
      shellClass: "paper-slide",
      html: `
        <header class="slide-head dark-text">
          <div>
            <div class="eyebrow reveal">04 · CONCEPTS</div>
            <h2 class="slide-title reveal d1">三个基础概念</h2>
          </div>
          <div class="chapter-mark reveal d2">04</div>
        </header>

        <div class="concept-stack">
          <article class="concept-row reveal d2">
            <div class="concept-index">01</div>
            <div class="concept-en">policy image</div>
            <div class="concept-cn">政策意象</div>
            <p>关于特定政策的信念和价值，以及政策在公共讨论和媒体中被正面或负面呈现的方式。</p>
          </article>
          <article class="concept-row reveal d3">
            <div class="concept-index">02</div>
            <div class="concept-en">policy venue</div>
            <div class="concept-cn">政策场域</div>
            <p>政策行动发生的制度空间。每个场域都有不同的参与者、决策程序和制度偏向。</p>
          </article>
          <article class="concept-row reveal d4">
            <div class="concept-index">03</div>
            <div class="concept-en">policy subsystem</div>
            <div class="concept-cn">政策子系统</div>
            <p>围绕政策领域形成的稳定参与结构和有限参与系统。</p>
          </article>
        </div>

        <div class="concept-relations reveal d5">
          <div><span>问题如何被理解</span><b>政策意象</b></div>
          <div><span>问题在哪里处理</span><b>政策场域</b></div>
          <div><span>参与结构如何稳定</span><b>政策子系统</b></div>
        </div>
        <p class="source-line dark">pp. 1046–1051</p>
      `,
      notes: "案例转向首先需要厘清三个基础概念。政策意象同时包含认知和评价。政策场域不仅是一片地理空间，而是制度化的处理场所。议题进入监管机构、国会委员会、法院、州政府或资本市场后，参与者与决策规则都会改变。政策子系统描述较为稳定的参与结构，部分行动者能够获得优先进入决策核心的机会。"
    },
    {
      id: "relations",
      titleEn: "The Conceptual Chain",
      nav: "概念关系",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">05 · CONCEPTUAL CHAIN</div>
            <h2 class="slide-title reveal d1">核心概念如何连接本文论证</h2>
          </div>
          <div class="chapter-mark reveal d2">05</div>
        </header>

        <div class="relation-flow">
          <article class="relation-node reveal d2">
            <small>POLICY IMAGE</small>
            <strong>政策意象</strong>
            <p>问题的意义与评价方向</p>
          </article>
          <i class="flow-arrow reveal d2"></i>
          <article class="relation-node reveal d3">
            <small>VENUE SHOPPING</small>
            <strong>场域淘选</strong>
            <p>比较并选择处理入口</p>
          </article>
          <i class="flow-arrow reveal d3"></i>
          <article class="relation-node reveal d4">
            <small>AGENDA ACCESS</small>
            <strong>议程进入</strong>
            <p>议题取得正式处理资格</p>
          </article>
          <i class="flow-arrow reveal d4"></i>
          <article class="relation-node terminal reveal d5">
            <small>SUBSYSTEM COLLAPSE</small>
            <strong>子系统解体</strong>
            <p>参与主体、规则与决策权重排</p>
          </article>
        </div>

        <div class="subsystem-forms reveal d5">
          <div><b>次政府</b><span>紧密、有限参与</span></div>
          <div><b>议题网络</b><span>边界较松、参与更广</span></div>
          <div><b>倡导联盟</b><span>以共享信念组织行动</span></div>
        </div>
        <p class="source-line">pp. 1045, 1050–1052</p>
      `,
      notes: "三个基础概念界定了分析对象，接下来需要说明它们如何排列成论文的因果链。行动者先通过政策意象争夺问题的意义，再通过场域淘选寻找有利入口。议程进入意味着场域进入已经发生。多个场域先后进入后，原有次政府的参与范围、决策规则和管辖权被打开，形成政策子系统解体。次政府是政策子系统中高度紧密、参与受限的一种形态。"
    },
    {
      id: "paths",
      titleEn: "Three Pathways of Conflict Expansion",
      nav: "三条路径",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">06 · CONFLICT EXPANSION</div>
            <h2 class="slide-title reveal d1">冲突扩张的三条路径</h2>
          </div>
          <div class="chapter-mark reveal d2">06</div>
        </header>

        <div class="path-grid">
          <section class="path-branches">
            <article class="path-branch branch-a reveal d2">
              <b>01</b><strong>经典失败者上诉</strong>
              <p>原场域中的弱势方向新场域寻求支持。</p>
            </article>
            <article class="path-branch branch-b reveal d3">
              <b>02</b><strong>场外关注者进入</strong>
              <p>外部行动者与内部失败者结盟，获得信息和合法性。</p>
            </article>
            <article class="path-branch branch-c reveal d4">
              <b>03</b><strong>管辖权扩张</strong>
              <p>其他场域的决策者通过介入议题扩大自身权限。</p>
            </article>
          </section>
          <aside class="path-center reveal d5">
            <small>POLICY CONFLICT</small>
            <strong>政策争议</strong>
            <span>原场域中的力量失衡</span>
          </aside>
        </div>

        <div class="takeaway-line reveal d6">冲突扩张不必先转化为大众动员。管辖权本身也是政治争点。</div>
        <p class="source-line">Schattschneider (1960); Baumgartner &amp; Jones (1991), pp. 1047–1049</p>
      `,
      notes: "概念关系进入政策过程后，冲突扩张成为第一个关键环节。Schattschneider把冲突扩展理解为弱势方改变参与名单。本文保留这一逻辑，但将“精英／大众”二分改为多个制度场域。原有失败者、场域外部的关注者，以及其他希望扩大管辖权的机构，都可能推动冲突扩张。三条路径经常结盟。议题由哪个机构处理并没有固定答案，管辖权本身会受到行动者和制度竞争的影响。"
    },
    {
      id: "dual-strategy",
      titleEn: "Dual Strategy: Policy Image and Venue",
      nav: "双重策略",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">07 · DUAL STRATEGY</div>
            <h2 class="slide-title reveal d1">政策意象与政策场域的双重策略</h2>
          </div>
          <div class="chapter-mark reveal d2">07</div>
        </header>

        <div class="dual-stage">
          <article class="dual-panel image-panel reveal d2">
            <small>POLICY IMAGE / RHETORIC</small>
            <strong>政策意象</strong>
            <p>选择事实、安排因果、赋予价值，改变问题的意义。</p>
          </article>
          <div class="dual-link reveal d3" aria-hidden="true">
            <span>意象改变</span>
            <div class="dual-arrow"></div>
            <b>正反馈</b>
            <div class="dual-arrow"></div>
            <span>场域变化</span>
          </div>
          <article class="dual-panel venue-panel reveal d4">
            <small>POLICY VENUE</small>
            <strong>政策场域</strong>
            <p>寻找更可能接受该解释并作出有利裁决的制度入口。</p>
          </article>
        </div>

        <blockquote class="quote-strip dual-quote reveal d5">
          <p>“Where the rhetoric begins to change, venue changes become more likely. Where venue changes occur, rhetorical changes are facilitated. Thus, a slight change in either can lead to rapid changes in policy outcomes.”</p>
          <footer>修辞变化使场域变化更可能发生，场域变化又会促进修辞变化。<cite>p. 1048</cite></footer>
        </blockquote>
      `,
      notes: "三条扩张路径共同指向同一组行动策略。这里的“修辞”不等同于空泛辞藻，而是一种问题建构行动。行动者会选取事实、安排因果关系、赋予价值判断，并据此提出不同的政策方案。行动者同时争夺问题的意义和问题的处理地点。政策意象的变化会改变哪些场域愿意受理议题；新的场域又会带来新的参与者、证据和规则。危机提高问题可见度，但政策是否转向取决于行动者能否重新定义问题并获得场域进入。"
    },
    {
      id: "feedback",
      titleEn: "Evolutionary Search and Positive Feedback",
      nav: "正反馈链",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">08 · SEARCH &amp; FEEDBACK</div>
            <h2 class="slide-title reveal d1">演化式场域搜索与正反馈链</h2>
          </div>
          <div class="chapter-mark reveal d2">08</div>
        </header>

        <div class="feedback-layout">
          <blockquote class="quote-block reveal d2">
            <p>“Policymakers need not employ a rational decision model or know in advance exactly how their ideas will be received in a particular institutional venue. Rather, they may search for favorable venues through a trial-and-error process or an evolutionary search.”</p>
            <footer>政策行动者不必预先知道某一制度场域会如何回应，而可能通过试错或演化式搜寻寻找有利场域。</footer>
            <cite>p. 1048</cite>
          </blockquote>
          <div class="neutral-note reveal d3">
            <b>正反馈</b>
            <span>价值中性的机制概念：变化会强化同方向变化，不表示正面评价。</span>
          </div>
        </div>

        <div class="chain-track reveal d4">
          <article class="chain-step"><b>01</b><strong>问题定义变化</strong><span>政策意象</span></article>
          <article class="chain-step"><b>02</b><strong>场域进入</strong><span>场域淘选</span></article>
          <article class="chain-step"><b>03</b><strong>参与与规则扩张</strong><span>议程进入</span></article>
          <article class="chain-step"><b>04</b><strong>成本与风险重估</strong><span>市场反馈</span></article>
          <article class="chain-step"><b>05</b><strong>政策垄断削弱</strong><span>子系统解体</span></article>
          <div class="chain-loop" aria-hidden="true"></div>
        </div>
      `,
      notes: "双重策略并不意味着行动者能够预先选中最有利的意象和场域。作者不把政策行动者假定为完全理性的决策者，他们会通过试错和调整寻找入口。问题定义变化对应政策意象，场域进入对应场域淘选，参与与规则扩张对应议程进入，成本重估体现市场反馈，政策垄断削弱最终指向子系统解体。正反馈不评价变化本身是否带来更好的政策结果。"
    },
    {
      id: "case-design",
      titleEn: "The Nuclear Case and Five Evidence Streams",
      nav: "案例证据",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">09 · RESEARCH DESIGN</div>
            <h2 class="slide-title reveal d1">核能案例与五类证据</h2>
          </div>
          <div class="chapter-mark reveal d2">09</div>
        </header>

        <div class="evidence-stage">
          <div class="evidence-core reveal d2">
            <strong>1,203</strong>
            <span>场国会核能听证</span>
            <small>1944–1986</small>
          </div>
          <div class="evidence-spokes reveal d3">
            <span>媒体报道</span>
            <span>监管活动</span>
            <span>公众意见</span>
            <span>资本市场</span>
            <span>国会听证</span>
          </div>
        </div>

        <div class="result-strip reveal d4">
          <div><small>RESULT 01</small><b>政策意象转负</b></div>
          <div><small>RESULT 02</small><b>场域依次进入</b></div>
          <div><small>RESULT 03</small><b>次政府失去控制</b></div>
        </div>

        <p class="handoff-line reveal d5">理解子系统为何解体，需要先看它如何形成并维持稳定。</p>
      `,
      notes: "为检验正反馈链，作者选择民用核能作为关键案例。这个子系统早期参与有限、机构集中。单案例只能提供有限检验：若核能案例不出现预测中的变化，会削弱理论；即便出现，也不能证明机制适用于所有政策领域。五类证据追踪时间顺序，得到三项结果：政策意象转负，场域进入依次发生，原有次政府失去政策垄断。下一页先重建变化前的稳定结构。"
    },
    {
      id: "stable-system",
      titleEn: "Formation and Stability of a Subgovernment",
      nav: "稳定次政府",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">10 · STABLE SUBGOVERNMENT</div>
            <h2 class="slide-title reveal d1">次政府的形成与稳定</h2>
          </div>
          <div class="chapter-mark reveal d2">10</div>
        </header>

        <div class="stable-layout">
          <section class="concentric-stage reveal d2">
            <div class="shell shell-3"></div>
            <div class="shell shell-2"></div>
            <div class="shell-core">
              <small>SUBSYSTEM CORE</small>
              <strong>民用核能<br>次政府</strong>
            </div>
            <span class="actor a1"><b>AEC</b><small>促进与监管</small></span>
            <span class="actor a2"><b>JCAE</b><small>国会监督</small></span>
            <span class="actor a3"><b>专家</b><small>技术合法性</small></span>
            <span class="actor a4"><b>公用事业</b><small>产业支持</small></span>
            <div class="outer-label">正面政策意象提供合法性</div>
          </section>

          <section class="stable-explainer reveal d3">
            <blockquote>
              “By the middle 1950s, a tight subgovernment had been constructed centering on the civilian uses of nuclear power.”
              <footer>到20世纪50年代中期，一个围绕民用核能建立的紧密次政府已经形成。</footer>
              <cite>p. 1052</cite>
            </blockquote>
            <div class="stable-metrics">
              <div><strong>5.8</strong><span>场听证 / 年<br><small>1944–1954</small></span></div>
              <div><strong>&lt;2</strong><span>个委员会参与<br><small>平均每年</small></span></div>
            </div>
            <p>正面意象、专家自主与有限参与共同维持政策垄断。稳定不是没有冲突，而是冲突缺少场域入口。</p>
          </section>
        </div>
      `,
      notes: "战后核能同时具有技术进步、能源充裕和国家安全意义。正面政策意象为集中化的制度安排提供合法性。在核能次政府中，AEC同时承担产业促进与安全监管，JCAE集中处理国会事务，企业和专家拥有优先进入核心决策的机会。1944至1954年平均每年只有5.8场听证，平均不到两个委员会参与。稳定不是没有冲突，而是冲突缺少场域入口。"
    },
    {
      id: "media",
      titleEn: "Attention and Policy Image Shift",
      nav: "媒体转折",
      shellClass: "paper-slide",
      html: `
        <header class="slide-head dark-text">
          <div>
            <div class="eyebrow reveal">11 · MEDIA EVIDENCE</div>
            <h2 class="slide-title reveal d1">注意力与评价方向同时变化</h2>
          </div>
          <div class="chapter-mark reveal d2">11</div>
        </header>

        <div class="media-layout">
          <figure class="source-figure reveal d2">
            <img src="assets/figure_p13.png" alt="Figure 1：核能报道数量与正面报道占比">
            <figcaption>Figure 1，p. 1055</figcaption>
          </figure>
          <section class="media-reading reveal d3">
            <div class="big-year">1968</div>
            <h3>负面报道首次超过正面报道</h3>
            <div class="ratio">&gt; 20 : 1</div>
            <p>1980年代负面标题相对正面标题</p>
            <div class="axis-explain">
              <span>注意力</span>
              <span>×</span>
              <span>评价方向</span>
            </div>
            <small>描述性证据用于确定意象转折的时间位置，不单独承担因果识别。</small>
          </section>
        </div>
      `,
      notes: "第10页显示，正面政策意象、专家自主和有限参与共同维持核能次政府。媒体证据则显示这一稳定表象开始变化。媒体报道包含两个维度：报道总量反映注意力，正面与负面报道的比例反映政策意象。1968年，负面报道首次超过正面报道。这组描述性证据不能单独识别媒体的独立因果效应，它的关键价值在于确定政策意象转折的时间位置。"
    },
    {
      id: "venues",
      titleEn: "Institutional Venues Enter in Sequence",
      nav: "场域序列",
      shellClass: "paper-slide",
      html: `
        <header class="slide-head dark-text">
          <div>
            <div class="eyebrow reveal">12 · VENUE SUCCESSION</div>
            <h2 class="slide-title reveal d1">制度场域依次进入核能政策过程</h2>
          </div>
          <div class="chapter-mark reveal d2">12</div>
        </header>

        <div class="timeline-stage reveal d2">
          <div class="timeline-hub">
            <strong id="timelineYear">1979</strong>
            <span id="timelineTitle">注意力强化</span>
            <p id="timelineDetail">反应堆部分熔毁，公众关注显著上升。</p>
          </div>
          <div class="timeline-track" id="timelineTrack"></div>
          <div class="timeline-controls">
            <button id="timelinePlay" type="button" aria-label="播放场域扩张">播放</button>
            <label for="yearRange">年份</label>
            <input id="yearRange" type="range" min="1965" max="1979" value="1979" step="1">
            <output id="yearOutput" for="yearRange">1979</output>
          </div>
        </div>

        <div class="hearing-stats reveal d3">
          <span><b>5.8</b> 场 / 年 <small>1944–1954</small></span>
          <span><b>15.9</b> 场 / 年 <small>1955–1968</small></span>
          <span><b>51.3</b> 场 / 年 <small>1969–1986</small></span>
          <span><b>36 / 94</b> 机构 / 听证 <small>1979</small></span>
        </div>
        <p class="source-line dark">pp. 1057–1062, Tables 1–2</p>
      `,
      notes: "媒体证据显示政策意象已经开始变化。场域进入具有时间顺序：内部安全专家首先提出质疑，随后媒体、国会、法院、州与地方、机构重组和公众注意力依次进入。NEPA打开了法院入口，AEC拆分重组了监管机构，JCAE撤销打破了国会层面的集中监督。1979年三哩岛核电站发生反应堆部分熔毁事故，但多个制度场域的变化在此前已经发生。听证增加同时反映注意力上升、参与机构增加和管辖权重新分配。"
    },
    {
      id: "market",
      titleEn: "The Market as a Policy Venue",
      nav: "资本市场",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">13 · MARKET AS VENUE</div>
            <h2 class="slide-title reveal d1">资本市场作为政策场域</h2>
          </div>
          <div class="chapter-mark reveal d2">13</div>
        </header>

        <div class="market-layout">
          <figure class="source-figure reveal d2">
            <img src="assets/figure_p23.png" alt="Figure 4：资本市场对核能政策的反应">
            <figcaption>Figure 4，p. 1065</figcaption>
          </figure>
          <section class="market-reading reveal d3">
            <div class="market-stat">&lt; ½</div>
            <h3>1988年核能公用事业股价仍不到1962年的一半</h3>
            <p class="definition">公用事业：受公共监管、提供电力等基础服务的公司。</p>
            <div class="market-feedback">
              <span>监管变化</span><i></i><span>风险重估</span><i></i><span>融资约束</span><i></i><span>政策意象</span>
            </div>
          </section>
        </div>
      `,
      notes: "场域进入不仅发生在监管机构和国会，也进入资本市场。政治与监管环境变化提高项目风险、成本超支和未来现金流的不确定性，投资者据此重新定价。融资困难强化了“核能不再可行”的政策意象，并影响后续政治决定。资本市场因而在本文中属于政策场域。"
    },
    {
      id: "opinion",
      titleEn: "Public Opinion Reinforces the Institutional Turn",
      nav: "公众意见",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">14 · PUBLIC OPINION</div>
            <h2 class="slide-title reveal d1">公众意见强化既有制度转向</h2>
          </div>
          <div class="chapter-mark reveal d2">14</div>
        </header>

        <div class="opinion-layout">
          <div class="opinion-chart reveal d2" aria-label="1970至1979年支持与反对比例">
            <div class="opinion-axis"><span>支持</span><span>反对</span></div>
            <div class="opinion-row"><span>1970</span><div class="bar support" style="--w:60"></div><div class="bar oppose" style="--w:18"></div></div>
            <div class="opinion-row"><span>1974</span><div class="bar support" style="--w:60"></div><div class="bar oppose" style="--w:27"></div></div>
            <div class="opinion-row"><span>1975</span><div class="bar support" style="--w:45"></div><div class="bar oppose" style="--w:35"></div></div>
            <div class="opinion-row"><span>1979<br><small>事故前</small></span><div class="bar support" style="--w:50"></div><div class="bar oppose" style="--w:30"></div></div>
            <div class="opinion-row hot"><span>1979<br><small>事故后</small></span><div class="bar support" style="--w:30"></div><div class="bar oppose" style="--w:60"></div></div>
          </div>
          <aside class="opinion-reading reveal d3">
            <div class="sequence-marker">
              <span>制度场域变化</span><b>在先</b>
              <i></i>
              <span>公众意见逆转</span><b>在后</b>
            </div>
            <p>公众注意力提高政治行动成本，并固化已经发生的制度转向。</p>
            <small>Rankin et al. (1984, p. 48), as cited in Baumgartner &amp; Jones (1991, p. 1068)</small>
          </aside>
        </div>
      `,
      notes: "制度场域在1970年代中期已经发生扩张，公众意见的明显逆转出现得更晚。1970年代初多数公众仍支持新建核电站，大规模逆转发生在三哩岛事故之后。这里涉及四位学者：Edward Carmines、James Stimson、Benjamin Page和Robert Shapiro。口头讲述使用英文姓氏即可。Carmines和Stimson强调议题变化的精英先行过程，Page和Shapiro强调公众意见对政策的影响。核能案例更接近前者，但这一判断受到单案例限制。"
    },
    {
      id: "synthesis",
      titleEn: "Stability and Collapse of a Policy Subsystem",
      nav: "理论综合",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">15 · SYNTHESIS</div>
            <h2 class="slide-title reveal d1">政策子系统的稳定与解体</h2>
          </div>
          <div class="chapter-mark reveal d2">15</div>
        </header>

        <div class="synthesis-table reveal d2">
          <div class="syn-head">稳定运行</div><div class="syn-head">共享机制</div><div class="syn-head">子系统解体</div>
          <div>正面政策意象</div><div class="mechanism">政策意象</div><div>注意力上升与负面评价</div>
          <div>专家自主与有限参与</div><div class="mechanism">政策场域</div><div>场域入口依次打开</div>
          <div>非决策维持参与边界</div><div class="mechanism">参与者与规则</div><div>参与者、规则与成本重估</div>
          <div>政策垄断持续</div><div class="mechanism">正反馈</div><div>原有参与结构被打开</div>
        </div>

        <div class="synthesis-caption reveal d3">稳定与变化来自同一反馈机制在不同制度条件下的运作方式。</div>
      `,
      notes: "先按表格逐行对应。第一行，从正面政策意象转向注意力上升与负面评价。第二行，从专家自主与有限参与转向场域入口依次打开。第三行，从非决策维持参与边界转向参与者、规则与成本重估。第四行，从政策垄断持续转向原有参与结构被打开。中央一列说明，两种结果共享政策意象、政策场域、参与者与规则。"
    },
    {
      id: "dialogue",
      titleEn: "Theoretical Dialogue and Legacy",
      nav: "理论对话",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">16 · THEORETICAL DIALOGUE</div>
            <h2 class="slide-title reveal d1">理论对话与后续影响</h2>
          </div>
          <div class="chapter-mark reveal d2">16</div>
        </header>

        <div class="dialogue-stage">
          <section class="theory-column theory-sources">
            <div class="theory-column-label"><small>THEORETICAL SOURCES</small><span>理论基础</span></div>
            <article class="theory-item t1 reveal d2"><b>Schattschneider · 1960</b><span>冲突扩展</span><p>从精英／大众二分转向多个制度场域的依次进入。</p></article>
            <article class="theory-item t2 reveal d3"><b>Bachrach &amp; Baratz · 1962</b><span>非决策</span><p>意象变化与场域进入可以打破议题排除。</p></article>
            <article class="theory-item t3 reveal d4"><b>Kingdon · 1984</b><span>政策窗口</span><p>窗口打开后，意象和场域继续相互强化。</p></article>
          </section>

          <div class="theory-spine reveal d3">
            <small>THIS ARTICLE</small>
            <span class="theory-spine-label">本文整合</span>
            <strong>政策意象 ×<br>政策场域</strong>
            <p>两者互动<br>解释稳定与剧变</p>
          </div>

          <section class="theory-column theory-payoff">
            <div class="theory-column-label"><small>ANALYTIC PAYOFF</small><span>本文推进与后续影响</span></div>
            <article class="theory-item t4 reveal d4"><b>Sabatier · 1988</b><span>倡导联盟</span><p>把联盟学习与子系统解体纳入动态过程。</p></article>
            <article class="theory-item t5 reveal d5"><b>Punctuated Equilibrium</b><span>间断—均衡</span><p>本文提供早期机制基础，后续研究转向注意力与制度摩擦。</p></article>
          </section>
        </div>
      `,
      notes: "这篇文章的理论贡献来自对既有研究的重新连接。Schattschneider说明冲突扩大如何改变参与名单，Bachrach与Baratz说明议题如何被排除在议程之外，Kingdon说明政策窗口如何形成，Sabatier说明联盟如何围绕信念组织政策学习。本文将这些解释放在同一动态过程中。1993年的著作将这一思路进一步发展为间断—均衡研究。"
    },
    {
      id: "applications",
      titleEn: "Theory Transfer: Venue Competition in AI Governance",
      nav: "后续应用",
      html: `
        <header class="slide-head">
          <div>
            <div class="eyebrow reveal">17 · THEORY IN USE</div>
            <h2 class="slide-title reveal d1">理论迁移：人工智能治理中的场域竞争</h2>
          </div>
          <div class="chapter-mark reveal d2">17</div>
        </header>

        <div class="application-layout">
          <section class="mechanism-list reveal d2">
            <h3>原文机制</h3>
            <div class="mech-item" data-mech="image"><b>政策意象</b><span>创新、效率、安全与权利之间的定义竞争</span></div>
            <div class="mech-item" data-mech="attention"><b>注意力</b><span>事件是否推动媒体、听证和公共讨论</span></div>
            <div class="mech-item" data-mech="venue"><b>场域进入</b><span>谁能取得议题的正式处理资格</span></div>
            <div class="mech-item" data-mech="feedback"><b>正反馈</b><span>监管、成本与市场预期是否相互强化</span></div>
          </section>
          <section class="research-list reveal d3">
            <h3>后续研究如何使用</h3>
            <button type="button" class="research-item" data-links="venue"><b>Ley &amp; Weber · 2015</b><span>适应性场域淘选：资源、对手与可及性决定入口选择。</span></button>
            <button type="button" class="research-item" data-links="image attention"><b>Schiff · 2024</b><span>AI政策中的经济、地缘政治与伦理框架竞争。</span></button>
            <button type="button" class="research-item" data-links="venue image"><b>Jacobson, Schiff &amp; Schiff · 2026</b><span>党派触因与早期AI政策中的 subsystem shopping。</span></button>
            <button type="button" class="research-item" data-links="attention feedback"><b>Chen, Li &amp; Wang · 2026</b><span>中国AI部署带来选择性的政府注意力间断。</span></button>
          </section>
        </div>

        <div class="application-bottom reveal d4">
          <p>论文是美国制度背景下的单案例研究。迁移到人工智能治理时，需要重新界定场域结构、进入门槛和反馈速度。</p>
        </div>
      `,
      notes: "这篇文章之后，已有研究直接使用或拓展其政策意象—政策场域—子系统机制。Ley与Weber把场域淘选推进为适应性选择过程。Schiff研究人工智能政策话语中的经济、地缘政治和伦理框架。Jacobson等人在美国州层面人工智能政策中发现subsystem shopping。Chen等人在中国人工智能部署研究中发现，政府注意力出现有选择的间断。四项研究分别推进场域选择、框架竞争、子系统选择与注意力分配。"
    },
    {
      id: "references",
      titleEn: "References",
      nav: "参考文献",
      shellClass: "paper-slide",
      html: `
        <header class="slide-head dark-text">
          <div>
            <div class="eyebrow reveal">18 · REFERENCES</div>
            <h2 class="slide-title reveal d1">参考文献</h2>
          </div>
          <div class="chapter-mark reveal d2">18</div>
        </header>

        <ol class="reference-list reveal d2">
          <li>Bachrach, P., &amp; Baratz, M. S. (1962). Two faces of power. <em>American Political Science Review, 56</em>, 947–952.</li>
          <li>Baumgartner, F. R., &amp; Jones, B. D. (1991). Agenda dynamics and policy subsystems. <em>The Journal of Politics, 53</em>(4), 1044–1074. https://doi.org/10.2307/2131866</li>
          <li>Baumgartner, F. R., &amp; Jones, B. D. (1993). <em>Agendas and instability in American politics</em>. University of Chicago Press.</li>
          <li>Cobb, R. W., &amp; Elder, C. D. (1983). <em>Participation in American politics: The dynamics of agenda-building</em>. Johns Hopkins University Press.</li>
          <li>Jones, B. D., &amp; Baumgartner, F. R. (2005). <em>The politics of attention: How government prioritizes problems</em>. University of Chicago Press.</li>
          <li>Kingdon, J. W. (1984). <em>Agendas, alternatives, and public policies</em>. Little, Brown.</li>
          <li>Sabatier, P. A. (1988). An advocacy coalition framework of policy change and the role of policy-oriented learning therein. <em>Policy Sciences, 21</em>, 129–168.</li>
          <li>Schattschneider, E. E. (1960). <em>The semi-sovereign people</em>. Holt, Rinehart and Winston.</li>
          <li>True, J. L., Jones, B. D., &amp; Baumgartner, F. R. (2007). Punctuated-equilibrium theory. In P. A. Sabatier (Ed.), <em>Theories of the policy process</em> (2nd ed., pp. 155–187). Westview Press.</li>
          <li>Chen, S., Li, Y., &amp; Wang, Y. (2026). Artificial intelligence and punctuated equilibrium: Shaping government attention in the digital age. <em>Public Administration Review</em>. Advance online publication.</li>
          <li>Jacobson, R. D., Schiff, D. S., &amp; Schiff, K. J. (2026). How new issues become polarized: Partisan triggers and subsystem shopping in early AI policymaking. <em>Policy &amp; Internet, 18</em>(1).</li>
          <li>Ley, A. J., &amp; Weber, E. P. (2015). The adaptive venue shopping framework: How emergent groups choose environmental policymaking venues. <em>Environmental Politics, 24</em>(5), 703–722.</li>
          <li>Schiff, D. S. (2024). Framing contestation and public influence on policymakers: Evidence from US artificial intelligence policy discourse. <em>Policy and Society, 43</em>(3), 255–288.</li>
        </ol>
      `,
      notes: "文献覆盖论文原文、政策子系统、非决策、政策窗口、倡导联盟、注意力政治、后续的间断—均衡研究，以及近年使用或拓展本文机制的场域淘选与人工智能治理研究。"
    }
  ]
};
