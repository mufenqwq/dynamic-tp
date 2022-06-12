import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.5e87ad87.js";const p={},e=t(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6846\u67B6\u76EE\u524D\u63D0\u4F9B\u4EE5\u4E0B\u544A\u8B66\u529F\u80FD\uFF0C\u6BCF\u4E00\u4E2A\u544A\u8B66\u9879\u90FD\u53EF\u4EE5\u72EC\u7ACB\u914D\u7F6E\u662F\u5426\u5F00\u542F\u3001\u544A\u8B66\u9608\u503C\u3001\u544A\u8B66\u95F4\u9694\u65F6\u95F4\u3001\u5E73\u53F0\u7B49\uFF0C\u5177\u4F53\u4EE3\u7801\u8BF7\u770Bcore\u6A21\u5757notify\u5305\uFF0C \u544A\u8B66\u4FE1\u606F\u540C\u65F6\u4F1A\u9AD8\u4EAE\u4E0E\u8BE5\u9879\u76F8\u5173\u7684\u5B57\u6BB5\u3002</p><p>1.\u6838\u5FC3\u53C2\u6570\u53D8\u66F4\u901A\u77E5</p><p>2.\u7EBF\u7A0B\u6C60\u6D3B\u8DC3\u5EA6\u544A\u8B66</p><p>3.\u961F\u5217\u5BB9\u91CF\u544A\u8B66</p><p>4.\u62D2\u7EDD\u7B56\u7565\u544A\u8B66</p><p>5.\u4EFB\u52A1\u6267\u884C\u8D85\u65F6\u544A\u8B66</p><p>6.\u4EFB\u52A1\u6392\u961F\u8D85\u65F6\u544A\u8B66</p></div><h2 id="\u7EBF\u7A0B\u6C60\u6D3B\u8DC3\u5EA6\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u6C60\u6D3B\u8DC3\u5EA6\u544A\u8B66" aria-hidden="true">#</a> \u7EBF\u7A0B\u6C60\u6D3B\u8DC3\u5EA6\u544A\u8B66</h2><p>\u6D3B\u8DC3\u5EA6 = activeCount / maximumPoolSize</p><p>\u670D\u52A1\u542F\u52A8\u540E\u4F1A\u5F00\u542F\u4E00\u4E2A\u5B9A\u65F6\u76D1\u63A7\u4EFB\u52A1\uFF0C\u6BCF\u9694\u4E00\u5B9A\u65F6\u95F4\uFF08\u53EF\u914D\u7F6E\uFF09\u53BB\u8BA1\u7B97\u7EBF\u7A0B\u6C60\u7684\u6D3B\u8DC3\u5EA6\uFF0C\u8FBE\u5230\u914D\u7F6E\u7684threshold\u9608\u503C\u540E\u4F1A\u89E6\u53D1\u4E00\u6B21\u544A\u8B66\uFF0C\u544A\u8B66\u95F4\u9694\u5185\u591A\u6B21\u89E6\u53D1\u4E0D\u4F1A\u53D1\u9001\u544A\u8B66\u901A\u77E5</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/675f7b2732ba46ae9a0539ec69698c6b~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><h2 id="\u961F\u5217\u5BB9\u91CF\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#\u961F\u5217\u5BB9\u91CF\u544A\u8B66" aria-hidden="true">#</a> \u961F\u5217\u5BB9\u91CF\u544A\u8B66</h2><p>\u5BB9\u91CF\u4F7F\u7528\u7387 = queueSize / queueCapacity</p><p>\u670D\u52A1\u542F\u52A8\u540E\u4F1A\u5F00\u542F\u4E00\u4E2A\u5B9A\u65F6\u76D1\u63A7\u4EFB\u52A1\uFF0C\u6BCF\u9694\u4E00\u5B9A\u65F6\u95F4\u53BB\u8BA1\u7B97\u4EFB\u52A1\u961F\u5217\u7684\u4F7F\u7528\u7387\uFF0C\u8FBE\u5230\u914D\u7F6E\u7684threshold\u9608\u503C\u540E\u4F1A\u89E6\u53D1\u4E00\u6B21\u544A\u8B66\uFF0C\u544A\u8B66\u95F4\u9694\u5185\u591A\u6B21\u89E6\u53D1\u4E0D\u4F1A\u53D1\u9001\u544A\u8B66\u901A\u77E5</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d65151e3e9ca460eac18f30ea6be05d3~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><h2 id="\u62D2\u7EDD\u7B56\u7565\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#\u62D2\u7EDD\u7B56\u7565\u544A\u8B66" aria-hidden="true">#</a> \u62D2\u7EDD\u7B56\u7565\u544A\u8B66</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Do sth before reject.
 * <span class="token keyword">@param</span> <span class="token parameter">executor</span> ThreadPoolExecutor instance
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">beforeReject</span><span class="token punctuation">(</span><span class="token class-name">ThreadPoolExecutor</span> executor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>executor <span class="token keyword">instanceof</span> <span class="token class-name">DtpExecutor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DtpExecutor</span> dtpExecutor <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpExecutor</span><span class="token punctuation">)</span> executor<span class="token punctuation">;</span>
        dtpExecutor<span class="token punctuation">.</span><span class="token function">incRejectCount</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Runnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span>dtpExecutor<span class="token punctuation">,</span> REJECT<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">triggerAlarm</span><span class="token punctuation">(</span>dtpExecutor<span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> REJECT<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EBF\u7A0B\u6C60\u7EBF\u7A0B\u6570\u8FBE\u5230\u914D\u7F6E\u7684\u6700\u5927\u7EBF\u7A0B\u6570\uFF0C\u4E14\u4EFB\u52A1\u961F\u5217\u5DF2\u6EE1\uFF0C\u518D\u63D0\u4EA4\u4EFB\u52A1\u4F1A\u89E6\u53D1\u62D2\u7EDD\u7B56\u7565\u3002DtpExecutor\u7EBF\u7A0B\u6C60\u7528\u5230\u7684RejectedExecutionHandler\u662F\u7ECF\u8FC7\u52A8\u6001\u4EE3\u7406\u5305\u88C5\u8FC7\u7684\uFF0C\u5728\u6267\u884C\u5177\u4F53\u7684\u62D2\u7EDD\u7B56\u7565\u4E4B\u524D\u4F1A\u6267\u884CRejectedAware\u7C7BbeforeReject()\u65B9\u6CD5\uFF0C\u6B64\u65B9\u6CD5\u4F1A\u53BB\u505A\u62D2\u7EDD\u6570\u91CF\u7D2F\u52A0\uFF08\u603B\u6570\u503C\u7D2F\u52A0\u3001\u5468\u671F\u503C\u7D2F\u52A0\uFF09\u3002\u4E14\u5224\u65AD\u5982\u679C\u5468\u671F\u7D2F\u8BA1\u503C\u8FBE\u5230\u914D\u7F6E\u7684\u9608\u503C\uFF0C\u5219\u4F1A\u89E6\u53D1\u4E00\u6B21\u544A\u8B66\u901A\u77E5\uFF08\u540C\u65F6\u91CD\u7F6E\u5468\u671F\u7D2F\u52A0\u503C\u4E3A0\u53CA\u4E0A\u6B21\u544A\u8B66\u65F6\u95F4\u4E3A\u5F53\u524D\u65F6\u95F4\uFF09\uFF0C\u544A\u8B66\u95F4\u9694\u5185\u591A\u6B21\u89E6\u53D1\u4E0D\u4F1A\u53D1\u9001\u544A\u8B66\u901A\u77E5</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/651049fe286f4cb099ab8936bfc4b425~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><h2 id="\u4EFB\u52A1\u961F\u5217\u8D85\u65F6\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u961F\u5217\u8D85\u65F6\u544A\u8B66" aria-hidden="true">#</a> \u4EFB\u52A1\u961F\u5217\u8D85\u65F6\u544A\u8B66</h2><p>\u91CD\u5199ThreadPoolExecutor\u7684execute()\u65B9\u6CD5\u548CbeforeExecute()\u65B9\u6CD5\uFF0C\u5982\u679C\u914D\u7F6E\u4E86\u6267\u884C\u8D85\u65F6\u6216\u6392\u961F\u8D85\u65F6\u503C\uFF0C\u5219\u4F1A\u7528DtpRunnable\u5305\u88C5\u4EFB\u52A1\uFF0C\u540C\u65F6\u8BB0\u5F55\u4EFB\u52A1\u7684\u63D0\u4EA4\u65F6\u95F4submitTime\uFF0CbeforeExecute\u6839\u636E\u5F53\u524D\u65F6\u95F4\u548CsubmitTime\u7684\u5DEE\u503C\u5C31\u53EF\u4EE5\u8BA1\u7B97\u5230\u8BE5\u4EFB\u52A1\u5728\u961F\u5217\u4E2D\u7684\u7B49\u5F85\u65F6\u95F4\uFF0C\u7136\u540E\u5224\u65AD\u5982\u679C\u5DEE\u503C\u5927\u4E8E\u914D\u7F6E\u7684queueTimeout\u5219\u7D2F\u52A0\u6392\u961F\u8D85\u65F6\u4EFB\u52A1\u6570\u91CF\uFF08\u603B\u6570\u503C\u7D2F\u52A0\u3001\u5468\u671F\u503C\u7D2F\u52A0\uFF09\u3002\u4E14\u5224\u65AD\u5982\u679C\u5468\u671F\u7D2F\u8BA1\u503C\u8FBE\u5230\u914D\u7F6E\u7684\u9608\u503C\uFF0C\u5219\u4F1A\u89E6\u53D1\u4E00\u6B21\u544A\u8B66\u901A\u77E5\uFF08\u540C\u65F6\u91CD\u7F6E\u5468\u671F\u7D2F\u52A0\u503C\u4E3A0\u53CA\u4E0A\u6B21\u544A\u8B66\u65F6\u95F4\u4E3A\u5F53\u524D\u65F6\u95F4\uFF09\uFF0C\u544A\u8B66\u95F4\u9694\u5185\u591A\u6B21\u89E6\u53D1\u4E0D\u4F1A\u53D1\u9001\u544A\u8B66\u901A\u77E5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> taskName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token keyword">instanceof</span> <span class="token class-name">NamedRunnable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        taskName <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">NamedRunnable</span><span class="token punctuation">)</span> command<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollUtil</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>taskWrappers<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TaskWrapper</span> t <span class="token operator">:</span> taskWrappers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            command <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>runTimeout <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> queueTimeout <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        command <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DtpRunnable</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> taskName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">beforeExecute</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>r <span class="token keyword">instanceof</span> <span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">beforeExecute</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">DtpRunnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> r<span class="token punctuation">;</span>
    <span class="token keyword">long</span> currTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>runTimeout <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        runnable<span class="token punctuation">.</span><span class="token function">setStartTime</span><span class="token punctuation">(</span>currTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>queueTimeout <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">long</span> waitTime <span class="token operator">=</span> currTime <span class="token operator">-</span> runnable<span class="token punctuation">.</span><span class="token function">getSubmitTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>waitTime <span class="token operator">&gt;</span> queueTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            queueTimeoutCount<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Runnable</span> alarmTask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> QUEUE_TIMEOUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">triggerAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QUEUE_TIMEOUT<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> alarmTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicTp execute, queue timeout, poolName: {}, taskName: {}, waitTime: {}ms&quot;</span><span class="token punctuation">,</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> waitTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">beforeExecute</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a8f34edbedee4683a9525a6e9423a1be~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p><h2 id="\u4EFB\u52A1\u6267\u884C\u8D85\u65F6\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u6267\u884C\u8D85\u65F6\u544A\u8B66" aria-hidden="true">#</a> \u4EFB\u52A1\u6267\u884C\u8D85\u65F6\u544A\u8B66</h2><p>\u91CD\u5199ThreadPoolExecutor\u7684afterExecute()\u65B9\u6CD5\uFF0C\u6839\u636E\u5F53\u524D\u65F6\u95F4\u548CbeforeExecute()\u4E2D\u8BBE\u7F6E\u7684startTime\u7684\u5DEE\u503C\u5373\u53EF\u7B97\u51FA\u4EFB\u52A1\u7684\u5B9E\u9645\u6267\u884C\u65F6\u95F4\uFF0C\u7136\u540E\u5224\u65AD\u5982\u679C\u5DEE\u503C\u5927\u4E8E\u914D\u7F6E\u7684runTimeout\u5219\u7D2F\u52A0\u6392\u961F\u8D85\u65F6\u4EFB\u52A1\u6570\u91CF\uFF08\u603B\u6570\u503C\u7D2F\u52A0\u3001\u5468\u671F\u503C\u7D2F\u52A0\uFF09\u3002\u4E14\u5224\u65AD\u5982\u679C\u5468\u671F\u7D2F\u8BA1\u503C\u8FBE\u5230\u914D\u7F6E\u7684\u9608\u503C\uFF0C\u5219\u4F1A\u89E6\u53D1\u4E00\u6B21\u544A\u8B66\u901A\u77E5\uFF08\u540C\u65F6\u91CD\u7F6E\u5468\u671F\u7D2F\u52A0\u503C\u4E3A0\u53CA\u4E0A\u6B21\u544A\u8B66\u65F6\u95F4\u4E3A\u5F53\u524D\u65F6\u95F4\uFF09\uFF0C\u544A\u8B66\u95F4\u9694\u5185\u591A\u6B21\u89E6\u53D1\u4E0D\u4F1A\u53D1\u9001\u544A\u8B66\u901A\u77E5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">afterExecute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> r<span class="token punctuation">,</span> <span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>runTimeout <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DtpRunnable</span> runnable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">DtpRunnable</span><span class="token punctuation">)</span> r<span class="token punctuation">;</span>
        <span class="token keyword">long</span> runTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> runnable<span class="token punctuation">.</span><span class="token function">getStartTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>runTime <span class="token operator">&gt;</span> runTimeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            runTimeoutCount<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Runnable</span> alarmTask <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">doAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> RUN_TIMEOUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AlarmManager</span><span class="token punctuation">.</span><span class="token function">triggerAlarm</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> RUN_TIMEOUT<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> alarmTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;DynamicTp execute, run timeout, poolName: {}, taskName: {}, runTime: {}ms&quot;</span><span class="token punctuation">,</span>
                        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getThreadPoolName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runnable<span class="token punctuation">.</span><span class="token function">getTaskName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> runTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">afterExecute</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b360e0a129e4413b962b40f6ef415af2~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p>`,22),o=[e];function c(u,l){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","alarm.html.vue"]]);export{r as default};
