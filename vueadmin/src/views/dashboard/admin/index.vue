<template>
    <div class="dashboard-editor-container">
        <github-corner class="github-corner"></github-corner>
    </div>
</template>
<script>
import BarChart from './components/BarChart'
import BoxCard from './components/BoxCard'
import LineChart from './components/LineChart'
import PanelGroup from './components/PanelGroup'
import PieChart from './components/PieChart'
import RaddarChart from './components/RaddarChart'
import TransactionTable from './components/TransactionTable'
import GithubCorner from '@/components/GithubCorner'
import TransactionTable from './components/TransactionTable'


export default {
    
}
</script>


<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
