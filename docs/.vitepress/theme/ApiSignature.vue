<script setup lang="ts">
import {computed, ref, useId} from 'vue';
import {useData, withBase} from 'vitepress';

interface Token {
  text: string;
  style?: Record<string, string>;
}

interface Part {
  text: string;
  tokens: Token[];
  href?: string;
  preview?: string;
  previewTokens?: Token[];
}

const props = defineProps<{parts: Part[]}>();
const {lang} = useData();
const copyStatus = ref<'idle' | 'copied' | 'failed'>('idle');
const active = ref<number>();
const position = ref({top: 0, left: 0});
const tooltipId = useId();
const preview = computed(() =>
  active.value === undefined
    ? undefined
    : props.parts[active.value]?.previewTokens,
);

function show(index: number, event: Event) {
  const element = event.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  active.value = index;
  position.value = {
    left: Math.max(8, Math.min(rect.left, window.innerWidth - 388)),
    top:
      window.innerHeight - rect.bottom >= 250
        ? rect.bottom + 8
        : Math.max(8, rect.top - 248),
  };
}

function hide(index: number) {
  if (active.value === index) active.value = undefined;
}

async function copy() {
  try {
    await navigator.clipboard.writeText(
      props.parts.map(part => part.text).join(''),
    );
    copyStatus.value = 'copied';
  } catch {
    copyStatus.value = 'failed';
  }
}
</script>

<template>
  <div class="api-signature">
    <button type="button" class="api-signature-copy" @click="copy">
      {{
        copyStatus === 'copied'
          ? lang.startsWith('ru')
            ? 'Скопировано'
            : 'Copied'
          : copyStatus === 'failed'
            ? lang.startsWith('ru')
              ? 'Ошибка'
              : 'Copy failed'
            : lang.startsWith('ru')
              ? 'Копировать'
              : 'Copy'
      }}
    </button>
    <pre><code><template v-for="(part, index) in parts" :key="index"><a
      v-if="part.href"
      class="api-signature-type"
      :href="withBase(part.href)"
      :aria-describedby="active === index ? tooltipId : undefined"
      @mouseenter="show(index, $event)"
      @mouseleave="hide(index)"
      @focus="show(index, $event)"
      @blur="hide(index)"
      @keydown.esc="hide(index)"
    ><span v-for="(token, tokenIndex) in part.tokens" :key="tokenIndex" :style="token.style">{{ token.text }}</span></a><template v-else><span v-for="(token, tokenIndex) in part.tokens" :key="tokenIndex" :style="token.style">{{ token.text }}</span></template></template></code></pre>
    <div
      v-if="preview"
      :id="tooltipId"
      class="api-signature-preview"
      role="tooltip"
      :style="{top: position.top + 'px', left: position.left + 'px'}"
    >
      <pre><code><span v-for="(token, index) in preview" :key="index" :style="token.style">{{ token.text }}</span></code></pre>
    </div>
  </div>
</template>
