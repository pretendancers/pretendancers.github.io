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
		avatar: '/about/jacky.jpg',
		name: 'Jacky@LazyDesigners',
	},
	{
		avatar: '/about/niuniu.jpg',
		name: '牛牛开车',
	},{
		avatar: '/about/zoroada.jpg',
		name: '浅泷zoroada',
	},
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>特别感谢</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>
