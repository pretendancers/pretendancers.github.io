---
layout: page
---

<script setup>
import {
	VPTeamPage,
	VPTeamPageTitle,
	VPTeamMembers,
	VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
	{
		avatar: '/about/0098.webp',
		name: 'CannedLychee',
		links: [
			{ icon: 'maildotru', link: 'mailto:cannedlychee@aliyun.com' },
			{ icon: 'qq', link: 'https://qm.qq.com/q/SabaAcjx6'}
		]
	},
	{
		avatar: '/about/earth.webp',
		name: '🌎',
	},
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title></template>
    <!-- <template #lead>...</template> -->
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>